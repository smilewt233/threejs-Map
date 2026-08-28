export default class Light{constructor(i,e){this.name=e.name;this.view=i;if(e.ambient==null||typeof e.ambient==="number"){this.ambient=GLSL.expandVec3(e.ambient||0)}else{this.ambient=StyleParser.parseColor(e.ambient).slice(0,3)}if(e.diffuse==null||typeof e.diffuse==="number"){this.diffuse=GLSL.expandVec3(e.diffuse!=null?e.diffuse:1)}else{this.diffuse=StyleParser.parseColor(e.diffuse).slice(0,3)}if(e.specular==null||typeof e.specular==="number"){this.specular=GLSL.expandVec3(e.specular||0)}else{this.specular=StyleParser.parseColor(e.specular).slice(0,3)}}static create(i,e){if(Light.types[e.type]){return new Light.types[e.type](i,e)}}static setMode(i,e){if(i===true){i="fragment"}i=Light.enabled&&(i!=null?i:"fragment");e.defines["TANGRAM_LIGHTING_FRAGMENT"]=i==="fragment";e.defines["TANGRAM_LIGHTING_VERTEX"]=i==="vertex"}static inject(t){ShaderProgram.removeBlock(Light.block);if(!Light.enabled){return}let r="";if(t&&Object.keys(t).length>0){let e={};for(let i in t){e[t[i].type]=true}for(let i in e){Light.types[i].inject()}for(let i in t){t[i].inject();r+=`calculateLight(${i}, _eyeToPoint, _normal);\n`}}let i=`
            vec4 calculateLighting(in vec3 _eyeToPoint, in vec3 _normal, in vec4 _color) {

                // Do initial material calculations over normal, emission, ambient, diffuse and specular values
                calculateMaterial(_eyeToPoint,_normal);

                // Un roll the loop of individual ligths to calculate
                ${r}

                //  Final light intensity calculation
                vec4 color = vec4(vec3(0.), _color.a); // start with vertex color alpha

                #ifdef TANGRAM_MATERIAL_EMISSION
                    color.rgb = material.emission.rgb;
                    color.a *= material.emission.a;
                #endif

                #ifdef TANGRAM_MATERIAL_AMBIENT
                    color.rgb += light_accumulator_ambient.rgb * _color.rgb * material.ambient.rgb;
                    color.a *= material.ambient.a;
                #else
                    #ifdef TANGRAM_MATERIAL_DIFFUSE
                        color.rgb += light_accumulator_ambient.rgb * _color.rgb * material.diffuse.rgb;
                    #endif
                #endif

                #ifdef TANGRAM_MATERIAL_DIFFUSE
                    color.rgb += light_accumulator_diffuse.rgb * _color.rgb * material.diffuse.rgb;
                    color.a *= material.diffuse.a;
                #endif

                #ifdef TANGRAM_MATERIAL_SPECULAR
                    color.rgb += light_accumulator_specular.rgb * material.specular.rgb;
                    color.a *= material.specular.a;
                #endif

                // Clamp final color
                color = clamp(color, 0.0, 1.0);

                return color;
            }`;ShaderProgram.addBlock(Light.block,i)}inject(){let i=`
            uniform ${this.struct_name} u_${this.name};
            ${this.struct_name} ${this.name};
            `;let e=`
            ${this.name} = u_${this.name};\n
        `;ShaderProgram.addBlock(Light.block,i);ShaderProgram.addBlock("setup",e)}update(){}setupProgram(i){i.uniform("3fv",`u_${this.name}.ambient`,this.ambient);i.uniform("3fv",`u_${this.name}.diffuse`,this.diffuse);i.uniform("3fv",`u_${this.name}.specular`,this.specular)}}Light.types={};Light.block="lighting";Light.enabled=true;class AmbientLight extends Light{constructor(i,e){super(i,e);this.type="ambient";this.struct_name="AmbientLight"}static inject(){ShaderProgram.addBlock(Light.block,ambient_source)}setupProgram(i){i.uniform("3fv",`u_${this.name}.ambient`,this.ambient)}}Light.types["ambient"]=AmbientLight;class DirectionalLight extends Light{constructor(i,t){super(i,t);this.type="directional";this.struct_name="DirectionalLight";if(t.direction){this._direction=t.direction}else{let i=135;let e=Math.sin(Math.PI*60/180);this._direction=[Math.cos(Math.PI*i/180)*e,Math.sin(Math.PI*i/180)*e,-.5];if(t.ambient==null){this.ambient=GLSL.expandVec3(.5)}}this.direction=this._direction.map(parseFloat)}get direction(){return this._direction}set direction(i){this._direction=Vector.normalize(Vector.copy(i))}static inject(){ShaderProgram.addBlock(Light.block,directional_source)}setupProgram(i){super.setupProgram(i);i.uniform("3fv",`u_${this.name}.direction`,this.direction)}}Light.types["directional"]=DirectionalLight;class PointLight extends Light{constructor(i,e){super(i,e);this.type="point";this.struct_name="PointLight";this.position=e.position||[0,0,"100px"];this.position_eye=[];this.origin=e.origin||"ground";this.attenuation=!isNaN(parseFloat(e.attenuation))?parseFloat(e.attenuation):0;if(e.radius){if(Array.isArray(e.radius)&&e.radius.length===2){this.radius=e.radius}else{this.radius=[null,e.radius]}}else{this.radius=null}}static inject(){ShaderProgram.addBlock(Light.block,point_source)}inject(){super.inject();ShaderProgram.defines["TANGRAM_POINTLIGHT_ATTENUATION_EXPONENT"]=this.attenuation!==0;ShaderProgram.defines["TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS"]=this.radius!=null&&this.radius[0]!=null;ShaderProgram.defines["TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS"]=this.radius!=null}update(){this.updateEyePosition()}updateEyePosition(){if(this.origin==="world"){const i=Geo.latLngToMeters([...this.position]);this.position_eye[0]=i[0]-this.view.camera.position_meters[0];this.position_eye[1]=i[1]-this.view.camera.position_meters[1];this.position_eye[2]=StyleParser.convertUnits(this.position[2],{zoom:this.view.zoom,meters_per_pixel:Geo.metersPerPixel(this.view.zoom)});this.position_eye[2]=this.position_eye[2]-this.view.camera.position_meters[2]}else if(this.origin==="ground"||this.origin==="camera"){this.position_eye=StyleParser.convertUnits(this.position,{zoom:this.view.zoom,meters_per_pixel:Geo.metersPerPixel(this.view.zoom)});if(this.origin==="ground"){this.position_eye[2]=this.position_eye[2]-this.view.camera.position_meters[2]}}this.position_eye[3]=1}setupProgram(i){super.setupProgram(i);i.uniform("4fv",`u_${this.name}.position`,this.position_eye);if(ShaderProgram.defines["TANGRAM_POINTLIGHT_ATTENUATION_EXPONENT"]){i.uniform("1f",`u_${this.name}.attenuationExponent`,this.attenuation)}if(ShaderProgram.defines["TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS"]){i.uniform("1f",`u_${this.name}.innerRadius`,StyleParser.convertUnits(this.radius[0],{zoom:this.view.zoom,meters_per_pixel:Geo.metersPerPixel(this.view.zoom)}))}if(ShaderProgram.defines["TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS"]){i.uniform("1f",`u_${this.name}.outerRadius`,StyleParser.convertUnits(this.radius[1],{zoom:this.view.zoom,meters_per_pixel:Geo.metersPerPixel(this.view.zoom)}))}}}Light.types["point"]=PointLight;class SpotLight extends PointLight{constructor(i,e){super(i,e);this.type="spotlight";this.struct_name="SpotLight";this.direction=this._direction=(e.direction||[0,0,-1]).map(parseFloat);this.exponent=e.exponent?parseFloat(e.exponent):.2;this.angle=e.angle?parseFloat(e.angle):20}get direction(){return this._direction}set direction(i){this._direction=Vector.normalize(Vector.copy(i))}static inject(){ShaderProgram.addBlock(Light.block,spot_source)}setupProgram(i){super.setupProgram(i);i.uniform("3fv",`u_${this.name}.direction`,this.direction);i.uniform("1f",`u_${this.name}.spotCosCutoff`,Math.cos(this.angle*3.14159/180));i.uniform("1f",`u_${this.name}.spotExponent`,this.exponent)}}Light.types["spotlight"]=SpotLight;