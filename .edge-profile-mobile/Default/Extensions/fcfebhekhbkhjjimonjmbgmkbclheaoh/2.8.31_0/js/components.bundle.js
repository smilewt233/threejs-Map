"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[61],{142:(e,t,i)=>{i.d(t,{t:()=>d});var o=i(2875),n=i(6540),r=i(724),a=i(961),l=i(5999);const s=(0,l.Ay)(o.a)`
	flex-direction: column;
	margin: 32px;
	width: 800px;
	max-width: 1000px;
	min-width: 300px;
	height: 500px;
	vertical-align: middle;
	color: #222;
	text-align: left;
	box-shadow: 0 0 16px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.24);
	background-color: rgb(16, 16, 16);
	transition: transform 0.12s;
	//backdrop-filter: blur(10px);
	transform: scale(1);
	overflow: hidden;
	
	main {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 36px;
		left: 0;
	}
	
	.toolbar {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 44px;
		display: flex;
		align-items: center;
		padding: 0 8px;
		//background-color: rgb(255 255 255 / 4%);
		
		.button {
			.button-view {
				padding: 0 16px;
			}
		}
		
		.prev-button {
			
		}
		
		.next-button {
			margin-left: auto;
		}
		
		.close-button {
			margin-left: auto;
		}
	}
`,c=l.Ay.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s, visibility .3s;
  z-index: -1;
  overflow: auto;

  &.show {
    transition: opacity .2s;
    visibility: visible;
    opacity: 1;
    z-index: 1000000;
  }

  .title {

  }

  .content {
    .topic-image {
      margin: 30px 30px 0;
      width: calc(100% - 60px);
      border-radius: 4px;
    }
  }
`;class p extends n.Component{constructor(e){super(e)}render(){const{children:e,...t}=this.props;return n.createElement(c,{...t},n.createElement("div",{className:"content"},e))}}class d extends n.Component{constructor(e){super(e),this.wrapper=document.createElement("div"),document.body.appendChild(this.wrapper)}static defaultProps={show:!1,sections:[]};state={current:0};componentDidMount(){this.updateBodyOverflow()}componentDidUpdate(e,t,i){this.updateBodyOverflow()}updateBodyOverflow=()=>{};handleOnClickPrevButton=()=>{const{current:e}=this.state;this.state.current>0&&this.setState({current:e-1})};handleOnClickNextButton=()=>{const{sections:e}=this.props,{current:t}=this.state;this.state.current<e.length-1&&this.setState({current:t+1})};render(){const{show:e,sections:t,onClose:i,...o}=this.props,{current:l}=this.state;return a.createPortal(n.createElement(s,{...o,open:e},n.createElement("main",null,t.map(((e,t)=>n.createElement(p,{className:l===t?"show":"hide",key:t},e)))),n.createElement("footer",{className:"toolbar"},l>0?n.createElement(r.$,{className:"prev-button primary",disabled:0===l,onClick:this.handleOnClickPrevButton},"\u4e0a\u4e00\u9875"):null,l<t.length-1?n.createElement(r.$,{className:"next-button primary",onClick:this.handleOnClickNextButton},"\u4e0b\u4e00\u9875"):null,l===t.length-1?n.createElement(r.$,{className:"close-button primary",onClick:i},"\u597d\u54d2(\u0e51\u203e \ua1f4 \u203e\u0e51)"):null)),this.wrapper)}}},724:(e,t,i)=>{i.d(t,{$:()=>b});var o=i(6540),n=i(5999),r=i(3879),a=i(1318),l=i(1104);const{color:s}=l.w,c=n.AH`
  height: 36px;
  //margin-right: -12px;
  border-radius: 50%;
`,p=n.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 26px;
  line-height: inherit;
  border-radius: 6px;
  font-size: 12px;
  color: ${s("paper-grey-600")};
  ${({theme:e})=>e.icon&&c};
  overflow: hidden;
  user-select: none;
	box-sizing: border-box;

  &.disabled {
    cursor: not-allowed;
    filter: grayscale(1);
  }

  &.primary {
    background-color: var(--bilibili-blue);
    color: var(--bilibili-gray);
	  border: 1px solid transparent;
  }
	
	&.second {
		background-color: var(--bilibili-pink);
		color: var(--bilibili-gray);
		border: 1px solid transparent;
	}

  &.border {
    border: 1px solid #ddd;
  }
`,d=n.Ay.button`
	display: block;
	width: 100%;
	height: inherit;
	line-height: inherit;
	min-width: ${({theme:e})=>e.icon?"36px":"50px"};
	${({theme:e})=>e.icon?"padding: 0":""};
	${({theme:e})=>e.normal?"min-height: 36px":""};
	font-size: inherit;
	font-weight: inherit;
	background-color: transparent;
	padding-inline-start: ${({theme:e})=>void 0!==e.horizontalPadding?`${e.horizontalPadding}px`:"8px"};
	padding-inline-end: ${({theme:e})=>void 0!==e.horizontalPadding?`${e.horizontalPadding}px`:"8px"};
	color: inherit;
	cursor: ${({theme:e={}})=>e.disable?"not-allowed":e.loading?"progress":"pointer"};
	filter: grayscale(${({theme:e={}})=>e.disable?1:0});
	transition: color .3s;
	border: none;
	outline: none;
	z-index: 1;
	
	&.disabled {
		cursor: not-allowed;
		//pointer-events: none!important;
	}
`,b=function({disabled:e=!1,disableEvent:t=!0,loading:i,children:l,className:s,theme:c,icon:b,normal:h,onClick:g,disable:m,iconSize:x=16,onMouseDown:u,onMouseUp:f,horizontalPadding:v,...w}){const[k,y]=(0,o.useState)(!1),[C,z]=(0,o.useState)(null),[E,A]=(0,o.useState)(void 0),[N,S]=(0,o.useState)(void 0),M=(0,o.useRef)(null),P=(0,o.useCallback)((i=>{if(e&&t)return!1;if(!k){const e=M.current.clientWidth,t=M.current.clientHeight,o=M.current.getBoundingClientRect(),n=b?e/2:i.clientX-o.left,r=b?t/2:i.clientY-o.top,a=b?e/2:Math.abs(e/2-n)+e/2,l=b?t/2:Math.abs(t/2-r)+t/2;y(!0),z(Math.sqrt(a*a+l*l)),A(n),S(r)}}),[k,e]),B=(0,o.useCallback)((()=>{if(e&&t)return!1;k&&y(!1)}),[k,e]);return o.createElement(n.NP,{theme:{...c,radius:C,icon:b,normal:h,disable:m,loading:i,horizontalPadding:v}},o.createElement(p,{className:["button",e?"disabled":"",s].filter(Boolean).join(" "),onMouseDown:m?null:P,onMouseUp:m?null:B,onMouseLeave:m?null:B},o.createElement(d,{ref:M,onClick:e&&t?null:g,onAuxClick:e&&t?null:g,onMouseDown:u,onMouseUp:f,className:["button-view",e?"disabled":""].join(" "),...w},o.createElement(o.Fragment,null,b&&o.createElement(r.I,{icon:b,size:x}),l)),o.createElement(a.n,{active:k,x:E,y:N})))}},1208:(e,t,i)=>{i(3879),i(4271),i(6540);var o=i(5999);o.Ay.div.attrs({className:"carousel"})`
  position: relative;
  //border-radius: 2px;
  //box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  //overflow: hidden;

  .dot-btns {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 8px;
    right: 10px;
    width: fit-content;
    height: 6px;
    z-index: 2;

    span {
      display: inline-block;
      margin-right: 5px;
      width: 6px;
      height: 6px;
      vertical-align: top;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.5);
      cursor: pointer;

      &:last-of-type {
        margin-right: 0;
      }

      &.active {
        width: 8px;
        height: 8px;
        background-color: #FB7299;
      }
    }
  }

  .turn-btn {
    position: absolute;
    top: calc(50% - 18px);
    padding: 8px 4px;
    background-color: rgba(0, 0, 0, .7);
    //opacity: 0;
    visibility: hidden;
    color: #eee;
    z-index: 3;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .turn-left-btn {
    left: 0;
    border-radius: 0 4px 4px 0;
  }

  .turn-right-btn {
    right: 0;
    border-radius: 4px 0 0 4px;
  }

  &:hover {
    .turn-btn {
      //opacity: 1;
      visibility: visible;
    }
  }
`,o.Ay.div.attrs({className:"carousel-item"})`
  position: absolute;
  top: 0;
  left: calc(50% - 155px);
  height: 100%;
  width: 310px;
  opacity: 0;
  cursor: pointer;
  transition: opacity .7s, transform .3s;
  transform: translate(0, 0);
  border-radius: 2px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  overflow: hidden;
  //will-change: transform, opcity;

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 32px;
    width: 100%;
    border-radius: 0 0 2px 2px;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.6));
    z-index: 1;
  }

  &.active {
    opacity: 1;
    z-index: 2;
  }

  &.beforeBefore {
    z-index: 1;
    transform: translate(-202%, 0);
  }

  &.before {
    opacity: 1;
    z-index: 1;
    transform: translate(-102%, 0);
  }

  &.after {
    opacity: 1;
    z-index: 1;
    transform: translate(102%, 0);
  }

  &.afterAfter {
    z-index: 1;
    transform: translate(202%, 0);
  }

  .title {
    position: absolute;
    left: 8px;
    bottom: 6px;
    color: #fff;
    z-index: 1;
  }

  .ad-tag {
    margin-right: 2px;
    width: 38px;
    height: 22px;
    vertical-align: bottom;
    zoom: 0.74;
    z-index: 1;
  }
`},1318:(e,t,i)=>{i.d(t,{n:()=>s});var o=i(6540),n=i(5999);const r=n.i7`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`,a=n.Ay.div.attrs((()=>({className:"ripple-box"})))`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  user-select: none;
  pointer-events: none;
  z-index: 1;

  .ripple-item {
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: scale(0);
    background-color: rgb(0, 0, 0);
    opacity: 0.2;
    animation: ${e=>e.theme.speed?1.15*e.theme.speed:1.15}s ${r} cubic-bezier(0.1, 0.3, 0, 1) forwards;
  }

  .hiding {
    transition: opacity ${e=>e.theme.speed?1.2*e.theme.speed*.3:.3}s;
    opacity: 0;
  }
`;class l extends o.Component{constructor(e){super(e)}state={currentRipple:null,box:null};static getDerivedStateFromProps(e,t){const{active:i,x:o,y:n,theme:r}=e,{radius:a=15,size:l=1}=r;let s=`width:${2*a*l}px;height:${2*a*l}px;margin: -${a*l}px;`;if(void 0!==o&&void 0!==n&&(s+=`top:${n}px;left:${o}px;`),t.currentRipple&&(t.currentRipple.classList.add("hiding"),setTimeout((()=>t.currentRipple.remove()),300)),i){const e=document.createElement("div");return e.setAttribute("class","ripple-item"),e.setAttribute("style",s),t.box.prepend(e),{currentRipple:e}}return t}render(){return o.createElement(a,{ref:e=>!this.state.box&&this.setState({box:e})})}}const s=(0,n.SL)(l)},1327:(e,t,i)=>{i.d(t,{M:()=>a});var o=i(6540),n=i(5999);const r=n.Ay.select`
	position: relative;
	width: fit-content;
	padding: 8px 28px 8px 12px;
	text-align: left;
	min-width: 180px;
	-webkit-appearance: none;
	border: 1px solid #eee;
  border-radius: 6px;
	font-size: 12px;
	background-color: #fff;
	cursor: pointer;
  
  background-image: url('data:image/svg+xml, <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M4.818 6.182 7.5 8.864l2.682-2.682a.45.45 0 0 1 .636.636l-3 3a.45.45 0 0 1-.636 0l-3-3a.45.45 0 1 1 .636-.636Z"></path></svg>');
	background-repeat: no-repeat;
	background-position: calc(100% - 6px) center;
`,a=(0,o.forwardRef)(((e,t)=>{const{value:i,data:n,placeholder:a,onChange:l}=e;return o.createElement(r,{ref:t,onChange:l,value:i},a?o.createElement("option",{value:"",disabled:!0},a):null,n.map((({title:e,value:t,description:i})=>o.createElement("option",{key:t,value:t,"data-description":i},e))))}));a.displayName="Selector"},2398:(e,t,i)=>{i.d(t,{p:()=>a});var o=i(6540),n=i(5999);const r=n.Ay.input.attrs({className:"input"})`
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
`,a=o.forwardRef((function(e,t){return o.createElement(r,{...e,ref:t})}))},2505:(e,t,i)=>{i.d(t,{A:()=>r});var o=i(6156),n=i(5999);const r=(0,n.Ay)(o.CatPawIcon).attrs((()=>({className:"cat-paw-icon"})))`
	g path:nth-child(2) {
		fill: var(--bilibili-pink);
	}
`},2875:(e,t,i)=>{i.d(t,{a:()=>b});var o=i(6942),n=i.n(o),r=i(6540),a=i(5999);const l=a.Ay.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: center;
	visibility: hidden;
	opacity: 0;
	transition: opacity 0.2s, visibility 0s 0.2s, z-index 0s 0.2s;
	overflow: auto;
	z-index: -1000;
	white-space: nowrap;
	background-color: rgba(0, 0, 0, 0.85);
	//backdrop-filter: blur(10px);
	transform: translateZ(0);
	
	::after {
		content: " ";
		display: inline-block;
		vertical-align: middle;
		width: 0;
		height: 100%;
		overflow: hidden;
	}
	
	&.on {
		transition: opacity 0.2s;
		visibility: visible;
		opacity: 1;
		z-index: 1000000;
	}
`,s=a.Ay.div.attrs((()=>({className:"modal-container"})))`
	position: relative;
	display: inline-block;
	flex-direction: column;
	margin: 32px;
	max-width: 560px;
	min-width: 300px;
	vertical-align: middle;
	border-radius: 10px;
	background-color: #fff;
	color: #222;
	box-shadow: 0 0 16px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.24);
	text-align: left;
	transition: transform 0.12s;
	transform: scale(1);
`,c=a.Ay.div.attrs((()=>({className:"modal-title"})))`
	flex: 0;
	padding: 20px 20px 0;
	font-size: 15px;
	font-weight: bold;
`,p=a.Ay.div.attrs((()=>({className:"modal-body"})))`
	flex: 1;
	padding: 16px 20px;
	min-height: 50px;
	max-height: 600px;
	overflow: auto;
`,d=a.Ay.div.attrs((()=>({className:"modal-footer-container"})))`
	display: flex;
	flex-direction: row-reverse;
	flex: 0;
	padding: 0 20px 20px 20px;
`;class b extends r.Component{constructor(e){super(e)}handleMaskClick=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),e.target.classList.contains("bilibili-helper-mask")&&(this.container.style.transform="scale(1.02)",setTimeout((()=>this.container.style.transform="scale(1)"),120))};handleOnCustomMaskClick=e=>{if(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),e.target.classList.contains("bilibili-helper-mask")){const{onClickMask:t}=this.props;t(e)}};componentDidUpdate(e,t,i){e.open&&!this.props.open&&this.props.onClosed&&this.props.onClosed instanceof Function&&this.props.onClosed()}render(){const{open:e,title:t,footer:i,children:o,onClickMask:a,...b}=this.props;return r.createElement(l,{className:n()("modal","bilibili-helper-mask",{on:e}),onMouseDown:a?this.handleOnCustomMaskClick:this.handleMaskClick},r.createElement(s,{ref:e=>this.container=e,...b},t&&r.createElement(c,null,t),r.createElement(p,null,o),i&&r.createElement(d,null,i)))}}},2987:(e,t,i)=>{i(4271);var o=i(6540),n=i(5999);n.Ay.div`
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;

  .info {
    .images {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      max-height: 100px;
      object-fit: cover;
      overflow: hidden;
      border-radius: 2px;
      filter: brightness(.75);
    }

    .title {
      display: -webkit-box;
      margin: 0 0 3px 0;
      max-height: 84px;
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      text-align: justify;

      &.position-adjust {
        text-indent: -6px;
      }
    }

    .username {
      margin: 0 0 1px 0;
      color: var(--paper-grey-900);
      opacity: 0.4;

      :hover {
        opacity: 1;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .info {
      .username {
        color: #ddd;
      }

      .title {
        color: #ddd;
      }
    }
  }
`;i(196);n.Ay.div`
  display: flex;
  //flex-wrap: nowrap;
  cursor: pointer;

  .cover {
    flex-shrink: 0;
    width: 64px;
    height: 48px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 2px;
  }

  .info {
    margin-left: 6px;

    .title {
      margin: 0;
      line-height: 14px;
      font-weight: 400;

      &.position-adjust {
        text-indent: -6px;
      }
    }

    .username {
      margin: 0;
      color: var(--paper-grey-900);
      opacity: 0.4;

      :hover {
        opacity: 1;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .info {
      .username {
        color: #ddd;
      }
      .title {
        color: #ddd;
      }
    }
  }
`,n.Ay.section.attrs({className:"repost-card"})`
  margin-top: 1px;
  padding: 4px;
  border-radius: 4px;

  :hover {
    background-color: rgb(255 255 255 / 30%);
    outline: 1px solid #fff;
  }

  .card-head {
    display: flex;
    align-items: start;
    flex-wrap: nowrap;

    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      margin-right: 8px;
    }

    .username {
      cursor: pointer;

      :hover {
        text-decoration: underline;

      }
    }

    .repost-type {
      //color: var(--bilibili-pink);
    }
  }

  .card-body {
    .content {
      display: -webkit-box;
      margin: -10px 0 6px 38px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      text-align: justify;
    }

    .bilibili-emoji {
      width: 12px;
    }

    .bilibili-topic-link {
      color: var(--bilibili-blue);
    }

    .origin-card {
      //margin-left: 18px;
      padding: 4px;
      border-radius: 4px;
      //border: 1px solid hsl(0deg 0% 0% / 20%);
      background-color: hsl(0deg 0% 100% / 70%);
    }
  }


  @media (prefers-color-scheme: dark) {
    background-color: hsl(0deg 0% 0% / 10%);
    :hover {
      background-color: hsl(0deg 0% 17%);
      outline: none;
    }

    .card-body {
      .content, .username, .repost-type {
        color: #ddd;
      }

      .origin-card {
        background-color: hsl(0deg 0% 0% / 20%);
      }
    }
  }
`;o.Component},3376:(e,t,i)=>{i.d(t,{w9:()=>L,x3:()=>A,un:()=>E,ck:()=>x,zW:()=>z});var o=i(5999);o.Ay.div.attrs((({extend:e})=>({className:e?"extend":""})))`
  display: flex;
  flex-direction: column;
  padding: 0;
  transition: all 0.3s;
  &.extend {
    margin-bottom: 0;
  }
  &::-webkit-scrollbar {
    //display: none;
    //visibility: hidden;
  }
`;var n=i(6540),r=i(1104);const{color:a}=r.w;o.Ay.div.attrs((()=>({className:"list-wrapper"})))`
  flex-shrink: 0;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
  width: calc(100% - 20px);
  max-width: 800px;
  min-height: 0;
  min-width: 350px;
  transition: min-height 0.3s;
  visibility: visible;
  opacity: 1;
  
  .list-wrapper & {
    margin-left: 16px;
  }
`,o.Ay.div.attrs((()=>({className:"list-header"})))`
  margin: 21px 0 12px;
  padding: 8px 0 4px;
  max-height: 18px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: .25px;
  color: ${a("paper-grey-900")};
  overflow: hidden;
  transition: all 0.2s;
  opacity: 1;
`,o.Ay.div.attrs((()=>({className:"list-body"})))`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 100%;
  opacity: 1;
  transition: all 0.2s;
  //border-radius: 4px;
  border-radius: 3px;
  //box-shadow: 0 0px 1px 0 rgba(0,0,0,0.1);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  //background-color: whitesmoke;
  overflow: hidden;
  //padding-left: 40px;
  //background-color: white;
  .extended & {
    display: none;
  }
`;n.Component;var l=i(724);const s=o.Ay.div.attrs((()=>({className:"list-item"})))`
  background-color: #fff;
  border-top: 1px solid #f2f3f5;
  ${({disable:e})=>e?"cursor: not-allowed; opacity: .5;":""}
  
  &:nth-of-type(1) {
    border-top: none;
    margin-top: 0;
  }
  .list-item & {
    border-top: 1px solid #f2f3f5;
    margin-top: 0;
  }
`,c=o.Ay.div.attrs((()=>({className:"list-item-main"})))`
  min-height: ${e=>e.twoLine?"56px":"40px"};
  padding: 0 0 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 13px;
  cursor: ${({onClick:e})=>e?"pointer":"default"};
  opacity: 1;
  //.icon {
  //  margin: 0 12px 0 -6px;
  //}
`,p=o.Ay.div.attrs((()=>({className:"front-operation-wrapper"})))`
  margin: 12px 20px auto -20px;
`,d=o.Ay.div.attrs((()=>({className:"two-line-container"})))`
  display: flex;
  flex-direction: column;
  flex: auto;
  h3 {
    margin: 0;
    height: 20px;
    font-size: 13px;
  }
`,b=o.Ay.h3`
  margin: 0;
  height: 20px;
  font-size: 13px;
  font-weight: 400;
`,h=o.Ay.div`
  margin-top: 2px;
  height: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #757575;
`,g=o.Ay.div.attrs((()=>({className:"list-item-end"})))`
  display: flex;
  align-items: center;
  //margin: 0 4px 0 0;
  .separator + & {
    margin: 0 13px 0 -13px;
  }
  //.button {
    //margin-right: -12px;
  //}
`,m=o.Ay.div.attrs((({hide:e})=>({className:e?"sub-list hide":"sub-list"})))`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 0;
  border-radius: 4px;
  background-color: white;
  transition: all 0.3s;
  overflow: hidden;
  opacity: 1;
  .list-item {
    margin-left: ${({noIndent:e})=>e?"0px":"60px"};
    .list-item-start {
      margin: 0;
    }
    &:last-of-type {
      padding-bottom: 16px;
    }
  }
`,x=function({icon:e,title:t,description:i,frontOperation:o,operation:r,subList:a,onClick:x,extend:u,separator:f,toggle:v,disable:w,...k}){const[y,C]=(0,n.useState)(!1),[z,E]=(0,n.useState)(0),A=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(A.current){const e=Array.from(A.current.querySelectorAll(".list-item, *"));E(e.reduce(((e,t)=>e+t.getBoundingClientRect().height),0))}}),[A]),a&&a.children&&u&&(r=n.createElement(l.$,{icon:!0===y?"arrowDown":"arrowUp",onClick:()=>this.setState({hideSubList:!y})}),x=()=>C(!y)),n.createElement(s,{disable:w,...k},t&&n.createElement(c,{onClick:x||null,twoLine:!!t&&!!i},e||null,o&&n.createElement(p,null,o),n.createElement(d,null,n.createElement(b,null,t),i&&n.createElement(h,null,i)),r&&n.createElement(g,{separator:f},r)),a&&a.children&&a.children&&n.createElement(m,{ref:A,noIndent:!t,style:{maxHeight:!u&&a.hide||u&&!0===y?"0":z||""}},a.children))};x.defaultProps={subList:null,operation:null,toggle:!0,children:[],separator:!1,disable:!1};var u=i(2520),f=i.n(u),v=(i(1318),i(2785));const{color:w}=v.w4;o.Ay.div.attrs((()=>({className:"radio-button-wrapper"})))`
  display: flex;
  align-items: center;
  //margin-left: -16px;
  width: 100%;
  cursor: ${({theme:e={}})=>e.disable?"not-allowed":"pointer"};
  filter: grayscale(${({theme:e={}})=>e.disable?1:0});
  opacity: ${({theme:e={}})=>e.disable?.5:1};
`,o.Ay.div`
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid ${w("google-grey-700")};
  transition: all 0.3s;
  &::after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: -2px;
    left: -2px;
    background-color: ${w("bilibili-pink")};
    border-radius: 50%;
    transform: scale(0);
    transition: all 0.15s;
  }
  &.checked {
    border-color: ${w("bilibili-pink")};
    &::after {
      transform: scale(0.5);
    }
    .ripple-item {
      background-color: ${f()(w("bilibili-pink")).alpha(.5).rgb().toString()};
    }
  }
`,o.Ay.div.attrs((()=>({className:"radio-button-title"})))`
  margin-left: 20px;
  font-size: 14px;
`;n.Component;var k=i(1653);const y=o.Ay.div.attrs((({active:e})=>({className:e?"radio-button-disc active":"radio-button-disc"})))`
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid var(--google-grey-700);
  transition: all 0.3s;
  &::after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: -2px;
    left: -2px;
    background-color: var(--bilibili-pink);
    border-radius: 50%;
    transform: scale(0);
    transition: all 0.15s;
  }
  &.checked {
    border-color: var(--bilibili-pink);
    &::after {
      transform: scale(0.5);
    }
  }
`,C=({on:e,mouseDown:t})=>n.createElement(y,{className:e?"checked":""},n.createElement(o.NP,{theme:{speed:.5,size:1.2}},n.createElement(k.n0,{active:t}))),z=({data:e,value:t,onClick:i})=>e instanceof Array?e.map(((e,o)=>{const{key:r,title:a,description:l,disable:s=!1,hide:c=!1}=e;return c?null:n.createElement(x,{disable:s,key:o,noBorder:!1,title:a,description:l,onClick:s?null:()=>i(r),frontOperation:n.createElement(C,{on:r===t,mouseDown:!1})})})):null,E=o.Ay.div.attrs((({active:e,disabled:t=!1})=>({className:e?"checkbox-rect on":"checkbox-rect",disabled:t})))`
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: 2px solid #848990;
  border-radius: 2px;
  transition: background-color 140ms, transform 140ms;
  cursor: pointer;
  
  &::after {
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    content: '';
    display: block;
    height: 73%;
    transform: scale(0) rotate(45deg);
    transform-origin: 100% 80%;
    width: 36%;
  }
  &.on {
    background-color: var(--bilibili-pink);
    border-color: var(--bilibili-pink);
    
    ::after {
      transform: scale(0.9) rotate(45deg) translate(0.5px, 0.5px);
      transition: transform 140ms ease-out;
    }
  }
  
  &[disabled] {
    cursor: not-allowed;
    filter: brightness(1.7) grayscale(1);
  }
`,A=function({data:e,direction:t="left",onClick:i}){return n.createElement(n.Fragment,null,e.map((e=>{const{key:o,title:r=null,description:a=null,on:l=!1,toggle:s=!0,hide:c=!1}=e;if(c)return null;const p={};return"left"===t?p.frontOperation=n.createElement(E,{disabled:!s,active:l?1:0}):p.operation=n.createElement(E,{disabled:!s,active:l?1:0}),n.createElement(x,{key:o,title:r,description:a,onClick:!!s&&!!i&&(()=>i(o,!l)),...p})})))};A.defaultProps={data:[],direction:"left",onClick:null};i(5378);const{color:N}=v.w4;o.Ay.div.attrs((()=>({className:"update-list-item"})))`
    margin-left: -20px;
    font-size: 13px;
    line-height: 26px;
    list-style: none;
    padding: 10px 0;
    &.serious {
      color: ${N("paper-red-500")};
      font-weight: bold;
    }
    i {
      margin: 4px;
      padding: 1px 6px;
      border-radius: 3px;
      font-size: 12px;
      font-style: normal;
      letter-spacing: 0.3px;
      background-color: ${N("paper-pink-50")};
      color: ${N("bilibili-pink")};
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: ${N("paper-pink-50")};
      }
    }
    a {
      color: ${N("bilibili-pink")};
    }
`;n.Component;o.Ay.div.attrs((({on:e})=>({className:e?"sub-page-wrapper on":"sub-page-wrapper off"})))`
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  width: 100%;
  transform: scaleY(0.9);
  opacity: 0;
  background-color: transparent;
  transition: z-index 300ms, background-color 200ms, opacity 150ms, transform 0ms 500ms, visibility 300ms;
  pointer-events: none;
  z-index: -100;
  visibility: hidden;
  
  &.on {
    transition: z-index 300ms, opacity 300ms, transform 200ms;
    opacity: 1;
    overflow: auto;
    background-color: #f2f3f5;
    transform: scaleY(1);
    pointer-events: auto;
    visibility: visible;
    z-index: 100;
  }
`,o.Ay.div.attrs((()=>({className:"sub-page-container"})))`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 0;
  bottom: 0;
  transform: translate(-50%, 0);
  max-width: 800px;
  width: 100%;
  opacity: 1;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
  pointer-events: auto;
`,o.Ay.div.attrs((()=>({className:"sub-page-header"})))`
  display: flex;
  width: 100%;
  padding: 16px 6px;
  flex-grow: 0;
  flex-shrink: 0;
`,o.Ay.h5.attrs((()=>({className:"sub-page-title"})))`
  margin: auto 0 auto 24px;
  font-size: 14px;
  font-weight: 500;
`,o.Ay.div.attrs((()=>({className:"sub-page-body"})))`
  flex-grow: 1;
  max-height: 0;
  min-height: 0;
  overflow: auto;
  //transition: max-height 0.2s;
  .on & {
    max-height: 100%;
    min-height: 100%;
  }
  & .list-body {
    box-shadow: none;
  }
`;n.Component;const{color:S}=r.w,M=o.Ay.div`
	display: block;
	position: relative;
	outline: none;
	z-index: 0;
	cursor: ${({theme:e={}})=>!1!==e.toggle?"pointer":"not-allowed"};
	${({theme:e={}})=>!1!==e.toggle?"":"filter: grayscale(1)"};
	
	&[disabled] {
		filter: grayscale(1);
		cursor: not-allowed;
	}
`,P=o.Ay.div`
	padding: 1px;
	width: 38px;
	border-radius: 20px;
	background-color: ${S("google-grey-400")};
	transition: background-color linear 80ms;
	box-shadow: inset 0px 0px 2px hsla(340, 0%, 40%, 1);
	will-change: background-color, box-shadow;
	//opacity: 0.5;
	
	.checked & {
		background-color: var(--bilibili-pink);
		box-shadow: inset 0px 0px 2px hsla(340, 60%, 40%, 1);
		//opacity: 1;
	}
`,B=o.Ay.span.attrs((()=>({className:"checkbox-knob"})))`
	position: relative;
	display: block;
	margin: 1px;
	width: 16px;
	height: 16px;
	border-radius: 20px;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
	background-color: white;
	border: 1px solid transparent;
	transition: transform linear 100ms;
	will-change: transform;
	z-index: 1;
	
	.checked & {
		transform: translate3d(100%, 0, 0);
	}
`;class L extends n.Component{constructor(e){super(e),this.state={mouseDown:!1,rippleRadius:0}}handleOnMouseDown=()=>{this.setState({mouseDown:!0})};handleOnMouseUp=()=>{this.setState({mouseDown:!1})};render(){const{on:e,onClick:t,disable:i,className:r,...a}=this.props,{mouseDown:l}=this.state;return n.createElement(o.NP,{theme:{mouseDown:l}},n.createElement(M,{className:[r,e?"checked":"","check-box-button"].join(" "),disabled:i,onClick:i?null:t,...a},n.createElement(P,{onMouseDown:i?null:this.handleOnMouseDown,onMouseUp:i?null:this.handleOnMouseUp,onMouseLeave:i?null:this.handleOnMouseUp},n.createElement(B,null))))}}},3563:(e,t,i)=>{i.d(t,{A:()=>z});var o=i(6540),n=i(5999),r=i(4353),a=i.n(r),l=i(8867),s=i.n(l),c=i(3826),p=i.n(c),d=i(3522),b=i.n(d),h=i(4568),g=i(6942),m=i.n(g);const x=(e,t="HH:mm:ss")=>e?e.format(t):"",u=(e="HH:mm:ss",t)=>{const i=e.split(":");let o=!1,n=!1,r=!1;if("h"===i[0].toLowerCase()||"hh"===i[0].toLowerCase()?(o=!0,"m"!==i[1]&&"mm"!==i[1]||(n=!0),"s"!==i?.[2]&&"ss"!==i?.[2]||(r=!0)):"m"===i[0].toLowerCase()||"mm"===i[0].toLowerCase()?(n=!0,"s"!==i?.[1]&&"ss"!==i?.[1]||(r=!0)):"s"!==i[0].toLowerCase()&&"ss"!==i[0].toLowerCase()||(r=!0),t){const e=a().duration(t).hours();0===e&&(o=!1);const i=a().duration(t).minutes();0===e&&0===i&&(n=!1)}return o||(e=e.replace(/h{1,2}:/gi,"")),n||(e=e.replace(/m{1,2}:/gi,"")),r||(e=e.replace(/s{1,2}/gi,"")),{parts:{hour:o,minute:n,second:r},format:e}};a().extend(p()),a().extend(b()),a().extend(s());const f="acg-helper-time-picker",v=n.Ay.div`
	position: relative;
	//width: min-content;
	min-width: 100px;
	
	&.disabled {
		filter: grayscale(1);
		cursor: not-allowed;
	}
  
  &.active {
    z-index: 10;
  }
`,w=n.Ay.div`
	padding: 3px;
	box-sizing: border-box;
	border: 1px solid rgb(238, 238, 238);
	border-radius: 6px;
	text-align: center;
	font-family: system-ui;
	font-size: 12px;
	background-color: #fff;
	cursor: pointer;
	user-select: none;
	
	transition: box-shadow .3s, border-color .3s, border-radius .3s;
	
	.${f}.active & {
		border-radius: 6px 6px 0 0;
		border-color: rgb(190 222 255);
		box-shadow: 0 0 6px rgb(190 222 255);
	}
	
	.${f}.disabled & {
		pointer-events: none;
		filter: grayscale(1) brightness(0.95);
	}
	
	:hover {
		box-shadow: 0 0 6px rgba(113, 113, 113, 0.18);
	}
`,k=n.Ay.div.attrs((()=>({className:"acg-helper-time-picker-selector"})))`
	position: absolute;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;
	box-sizing: border-box;
	padding: 2px 0 1px;
	width: 100%;
	border: 1px solid var(--bilibili-gray);
	border-collapse: collapse;
	border-radius: 0 0 6px 6px;
	opacity: 0;
	z-index: 1;
	pointer-events: none;
	border-top: unset;
	box-shadow: 0 4px 6px 3px rgb(113 113 113 / 6%);
	background-color: #fff;
	transform-origin: top;
	transform: scaleY(0.8);
	
	transition: opacity .2s, border-radius 0.2s, transform 0.2s;
	
	.${f}.active & {
		opacity: 1;
		pointer-events: auto;
		transform: scaleY(1);
	}
`,y=n.Ay.div.attrs((()=>({className:"acg-helper-time-picker-column"})))`
	width: 46px;
	height: 163px;
	border-right: 1px solid var(--bilibili-gray);
	flex-grow: 1;
	overflow: auto;
	
	:first-of-type {
		border-left: none;
	}
	
	:last-of-type {
		border-right: none;
	}
	
	&[data-disabled=true] {
		filter: grayscale(1);
		cursor: not-allowed;
		overflow: hidden;
		
		.time-picker-number {
			cursor: not-allowed;
		}
	}
`,C=n.Ay.div`
	margin: 1px 2px;
	padding: 4px;
	border-radius: 3px;
	font-weight: 500;
	text-align: center;
	cursor: pointer;
	transition: background-color .3s;
  user-select: none;
	
	:last-of-type {
		//margin-bottom: 136px;
	}
	
	&.active {
		background-color: rgb(234, 244, 255);
		color: rgb(0, 161, 214);
	}
	
	:hover {
		background-color: rgb(244 244 244);
	}
	
	:active {
		background-color: rgb(209 232 255);
	}
`,z=({hourStep:e=1,minuteStep:t=1,secondStep:i=1,format:n="HH:mm:ss",onChange:r,placeholder:l="\u8bf7\u9009\u62e9\u65f6\u95f4",defaultTime:s,maxTime:c,minTime:p=0,disabled:d=!1,disableSecond:b=!1,disableMinute:g=!1,disableHour:f=!1})=>{const z={hour:(0,o.useRef)(null),minute:(0,o.useRef)(null),second:(0,o.useRef)(null)},E=(0,h.B)((()=>isNaN(c)?null:a().utc(c)),[c]),A=(0,h.B)((()=>isNaN(p)?null:a().utc(p)),[p]),[N,S]=(0,o.useState)(!1),[M,P]=(0,o.useState)(null),B=(0,h.B)((()=>s?a().utc(s):null),[s]),{parts:L,format:$}=(0,h.B)((()=>u(n,c)),[n,c]),I=(0,h.B)((()=>({hour:e,minute:t,second:i})),[e,t,i]),F=(0,o.useCallback)((e=>{e.target.contains(e.relatedTarget)||S(!1)}),[]),H=(0,o.useCallback)((()=>!d&&S(!N)),[N,d]),O=(0,o.useCallback)(((e,t)=>{if(d)return!1;if(b&&"second"===e)return!1;if(g&&"minute"===e)return!1;if(f&&"hour"===e)return!1;const i=I[e]*t;let o=(M||B||a().utc(0)).set(e,i),n=E,l=A;n&&l&&l.isSameOrAfter(n)&&(n=A,l=E),n&&o.isSameOrAfter(n)&&(o=E),l&&l.isSameOrAfter(o)&&(o=A);const s=["hour","minute","second"],c={},p=s.reduce(((e,t)=>(e[t]=o[t](),c[t]=e[t]%I[t],e)),{});s.forEach((e=>{0!==c[e]&&(o=o.set(e,p[e]+I[e]-c[e]))})),P(a().utc(o)),r instanceof Function&&r(o.valueOf()),z[e].current.scrollTo({top:27*i,behavior:"smooth"})}),[M,B,E,A,I,d,b,g,f]);return(0,o.useEffect)((()=>{M&&(z.hour.current?.scrollTo({top:M.hour()/I.hour*27,behavior:"smooth"}),z.minute.current?.scrollTo({top:M.minute()/I.minute*27,behavior:"smooth"}),z.second.current?.scrollTo({top:M.second()/I.second*27,behavior:"smooth"}))}),[M,z.hour,z.minute,z.second,I]),(0,o.useEffect)((()=>{("number"===typeof s||s instanceof a())&&P(a().utc(s))}),[s]),(0,o.useEffect)((()=>{d&&N&&S(!1)}),[d,N]),o.createElement(v,{tabIndex:0,className:m()("acg-helper-time-picker",{active:N,disabled:d}),onBlur:F},o.createElement(w,{className:"acg-helper-time-picker-result",onClick:H},M||B?x(M||B,$):l),o.createElement(k,null,L.hour?o.createElement(y,{ref:z.hour,"data-disabled":f},Array(Math.ceil(24/e)).fill(void 0).map(((t,i)=>o.createElement(C,{key:i*e,className:m()({active:i===(M||B)?.hour()/e}),onClick:()=>O("hour",i)},String(i*e).padStart(2,"0"))))):null,L.minute?o.createElement(y,{ref:z.minute,"data-disabled":g},Array(Math.ceil(60/t)).fill(void 0).map(((e,i)=>o.createElement(C,{key:i*t,className:m()("time-picker-number",{active:i===(M||B)?.minute()/t}),onClick:()=>O("minute",i)},String(i*t).padStart(2,"0"))))):null,L.second?o.createElement(y,{ref:z.second,"data-disabled":b},Array(Math.ceil(60/i)).fill(void 0).map(((e,t)=>o.createElement(C,{key:t*i,className:m()({active:t===(M||B)?.second()/i}),onClick:()=>O("second",t)},String(t*i).padStart(2,"0"))))):null))}},3879:(e,t,i)=>{i.d(t,{I:()=>p});var o=i(6942),n=i.n(o),r=i(6540),a=i(5999),l=i(3432);const s={cat128:(0,l.AP)("statics/images/icon-128.png"),catSvg:(0,l.AP)("statics/images/cat.svg"),catSvgWhite:(0,l.AP)("statics/images/cat-white.svg"),arrowRight:(0,l.AP)("statics/images/arrow_right.svg"),arrowDown:(0,l.AP)("statics/images/arrow_down.svg"),arrowUp:(0,l.AP)("statics/images/arrow_up.svg"),arrowLeft:(0,l.AP)("statics/images/arrow_left.svg")},c=a.Ay.span.attrs((({icon:e})=>({className:n()(e?`bilibili-helper-2-iconfont bilibili-helper-2-icon-${e}`:"icon")})))`
	display: inline-block;
	width: ${e=>e.size||36}px;
	height: ${e=>e.size||36}px;
	line-height: ${e=>e.size||36}px;
	//vertical-align: middle;
	//font-size: ${e=>e.size||36}px;
	${({image:e})=>e?`background-image: url("${s[e]}")`:""});
	background-position: center;
	background-repeat: no-repeat;
	background-size: ${e=>e.image?"100%":"60%"};
	-webkit-font-smoothing: antialiased;
`,p=({icon:e,size:t=36,...i})=>r.createElement(c,{icon:e,size:t,style:{fontSize:t||36},...i})},4271:(e,t,i)=>{i.d(t,{_:()=>s});var o=i(6540),n=i(5999);const r=n.i7`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`,a=n.Ay.img.attrs({className:"img"})`
	width: 100%;
	height: 100%;
	object-fit: cover;
	
	&:not([src]) {
		content: url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
		backdrop-filter: blur(14px);
		background-color: rgb(221 221 221 / 7%);
		box-sizing: border-box;
	}
	
	&[src] {
		animation: ${r} cubic-bezier(0.16, 0.6, 0.45, 0.93);
		animation-duration: ${({duration:e=500})=>e}ms;
	}
`,l=o.forwardRef((function({sign:e,url:t,direct:i,...n},r){const[l,s]=(0,o.useState)(!1),[c,p]=(0,o.useState)(null),[d,b]=(0,o.useState)(null),h=(0,o.useCallback)((()=>{p(t),b(e||t),s(!0)}),[e,t]);return(0,o.useEffect)((()=>{d!==(e||t)&&s(!1);const o=new window.Image;return i?(p(t),b(e||t),s(!0)):(o.addEventListener("load",h),o.src=t),()=>{o.removeEventListener("load",h)}}),[t,e,d]),o.createElement(a,{ref:r,src:l?c:null,alt:e||null,...n})})),s=o.forwardRef(((e,t)=>{const{sign:i,url:n,lazy:r=!1,direct:a=!1,offset:s=0,offsetVertical:c=0,duration:p,onContentVisible:d,...b}=e;return o.createElement(l,{key:i,url:n,direct:a,duration:p,ref:t,...b})}));s.displayName="Image"},4525:(e,t,i)=>{var o=i(6540),n=i(5999),r=i(1104),a=(i(1318),i(2520)),l=i.n(a);const{color:s}=r.w;n.Ay.div`
  display: block;
  position: relative;
  width: 32px;
  height: 16px;
  outline: none;
  z-index: 0;
  cursor: ${({theme:e={}})=>!1!==e.toggle?"pointer":"not-allowed"};
  filter: grayscale(${({theme:e={}})=>!1!==e.toggle?0:1});
`,n.Ay.span`
  width: 28px;
  height: 12px;
  position: absolute;
  left: 3px;
  top: 2px;
  border-radius: 8px;
  background-color: ${s("google-grey-400")};
  transition: background-color linear 80ms;
  //opacity: 0.5;
  .checked & {
    background-color: ${s("bilibili-pink")};
    opacity: 1;
  }
`,n.Ay.span.attrs((()=>({className:"radio-knob"})))`
  display: block;
  position: relative;
  width: 16px;
  height: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
  background-color: white;
  transition: transform linear 80ms, background-color linear 80ms;
  border-radius: 50%;
  z-index: 1;

  .ripple-item {
    //opacity: 0.125;
  }

  .checked & {
    transform: translate3d(18px, 0, 0);

    .ripple-item {
      background-color: ${l()(s("bilibili-pink")).alpha(.5).rgb().toString()};
    }
  }
`;o.Component},4625:(e,t,i)=>{i.d(t,{$:()=>m});var o=i(6540),n=i(5999),r=i(6156),a=i(3563),l=i(4353),s=i.n(l),c=i(3826),p=i.n(c),d=i(6942),b=i.n(d);s().extend(p());const h=n.Ay.div.attrs((({className:e})=>({className:b()("acg-helper-time-range-picker",e)})))`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 220px;
	
	.acg-helper-time-picker {
		//flex-grow: 1;
		width: 100%;
	}
`,g=(0,n.Ay)(r.OneWayArrowRightIcon)`
	margin: 0 5px;
	width: 12px;
	flex-shrink: 0;
`,m=({hourStep:e=1,minuteStep:t=1,secondStep:i=1,format:n="HH:mm:ss",onChange:r,placeholder:l={start:"\u5f00\u59cb\u65f6\u95f4",end:"\u7ed3\u675f\u65f6\u95f4"},defaultTime:c={start:null,end:null},maxTime:p={start:null,end:null},minTime:d={start:null,end:null},disabled:b=!1,disableSecond:m=!1,disableMinute:x=!1,disableHour:u=!1,minTimeFirst:f=!0})=>{const[v,w]=(0,o.useState)(!1),[k,y]=(0,o.useState)(null),[C,z]=(0,o.useState)(null),E=(0,o.useCallback)((()=>{w(!1),f&&C instanceof s()&&k instanceof s()&&k.isAfter(C)&&(y(C),z(k))}),[k,C,f]),A=(0,o.useCallback)((()=>w(!v)),[v]),N=(0,o.useCallback)((e=>{null!==e&&(k&&!k.isSame(e)?y(s().utc(e)):k||y(s().utc(e)))}),[k]),S=(0,o.useCallback)((e=>{null!==e&&(C&&!C.isSame(e)?z(s().utc(e)):C||z(s().utc(e)))}),[C]);return(0,o.useEffect)((()=>{r instanceof Function&&(null!==k||null!==C)&&r(k?.valueOf()??c?.start,C?.valueOf()??c?.end)}),[k,C,r]),o.createElement(h,{tabIndex:0,onBlur:E,onClick:A},o.createElement(a.A,{hourStep:e,minuteStep:t,secondStep:i,format:n,onChange:N,placeholder:l.start,defaultTime:k||c.start,maxTime:p.start,minTime:d.end,disabled:b,disableSecond:m,disableMinute:x,disableHour:u}),o.createElement(g,null),o.createElement(a.A,{hourStep:e,minuteStep:t,secondStep:i,format:n,onChange:S,placeholder:l.end,defaultTime:C||c.end,maxTime:p.start,minTime:d.end,disabled:b,disableSecond:m,disableMinute:x,disableHour:u}))}},4950:(e,t,i)=>{i.d(t,{$:()=>s});var o=i(6540),n=i(5999),r=i(8612),a=i(5567);const l=n.DU`
  body {
    ${a.R};
  }
`,s=function(e){return o.createElement(o.Fragment,null,o.createElement(l,null),o.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://at.alicdn.com/t/font_1690169_cumlkywihxk.css"}),o.createElement(r.h,{...e}))}},5381:(e,t,i)=>{i.d(t,{Q:()=>v});var o=i(724),n=i(6540),r=i(961),a=i(5999);const l=a.Ay.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: center;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.2s, visibility 0s 0.2s, z-index 0s 0.2s, transform .2s;
	overflow: auto;
	white-space: nowrap;
	pointer-events: none;
	transform: translateY(-12px);
	z-index: -100000;
	
	//::after {
	//  content: " ";
	//  display: inline-block;
	//  vertical-align: middle;
	//  width: 0;
	//  height: 100%;
	//  overflow: hidden;
	//}
	
	&.on {
		transition: opacity .2s, transform .2s;
		visibility: visible;
		transform: translateY(0px);
		opacity: 1;
		z-index: 1000000;
	}
`,s=a.Ay.div.attrs((()=>({className:"message-container"})))`
	position: relative;
	top: 32px;
	display: inline-block;
	flex-direction: column;
	margin: 32px;
	max-width: 560px;
	min-width: 300px;
	vertical-align: top;
	border-radius: 4px;
	background-color: #fff;
	box-shadow: 0 0 16px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.24);
	text-align: left;
	transition: transform 0.12s;
	
	@media (prefers-color-scheme: dark) {
		background-color: var(--paper-grey-900);
		color: #e5e5e5;
	}
`,c=a.Ay.div`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	height: 0;
	border-bottom: 1px solid #eee;
	padding: 0 12px;
	font-size: 14px;
	pointer-events: initial;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.2s, visibility 0.2s, height .3s, padding .2s;
	
	&:last-of-type {
		border-bottom: none;
	}
	
	.content {
		flex-grow: 1;
	}
	
	.action-box {
		display: flex;
		flex-shrink: 0;
		
		.button {
			margin: -10px -12px -10px 0px;
		}
	}
	
	&.on {
		visibility: visible;
		opacity: 1;
		height: 36px;
		padding: 8px 12px;
		transition: opacity 0.2s, height .2s, padding .2s;
	}
	
	@media (prefers-color-scheme: dark) {
		border-bottom-color: #151515;
	}
`,p=3e3;class d extends n.Component{constructor(e){super(e)}state={show:!1,messageList:[]};messageTimerKeyMap={};componentDidMount(){this.props.app.current=this}findSameMessage=e=>{const{messageList:t}=this.state;return t.find((t=>t.content===e))};addMessage=(e,t,i=p)=>{const{messageList:o}=this.state,n=this.findSameMessage(t);if(n){const e=this.messageTimerKeyMap[n.key];clearTimeout(e),this.setMessageTimer(n)}else{const n=Date.now();o.push({key:n,type:e,content:t,duration:i,on:!1}),this.setState({messageList:o},(()=>{setTimeout((()=>{this.showMessage(n)}),200)}))}};showMessage=e=>{const{messageList:t}=this.state,i=t.find((({key:t})=>t===e));i&&(i.on=!0,this.setState({messageList:t,show:t.filter((({on:e})=>e)).length>0},(()=>{this.setMessageTimer(i)})))};setMessageTimer=e=>{"number"===typeof e.duration&&e.duration>0&&(this.messageTimerKeyMap[e.key]=setTimeout((async()=>{await this.hideMessage(e.key)}),e.duration))};hideMessage=async e=>new Promise((t=>{const{messageList:i}=this.state;1===i.length&&this.setState({show:!1}),setTimeout((()=>{const o=i.findIndex((({key:t})=>t===e));i[o]&&(i[o].on=!1),this.setState({messageList:i},(()=>{setTimeout((()=>this.deleteMessage(e)),200),t(o)}))}),1===i.length?200:0)}));deleteMessage=async e=>new Promise((t=>{const{messageList:i}=this.state,o=i.findIndex((({key:t})=>t===e));i.splice(o,1),this.setState({messageList:i,show:i.filter((({on:e})=>e)).length>0},t)}));closeMessage=e=>this.hideMessage(e);clearAll=()=>{const{messageList:e}=this.state;e.forEach((({key:e})=>{this.hideMessage(e)}))};render(){const{show:e,messageList:t}=this.state;return n.createElement(l,{className:e?"message-model on":"message-model"},n.createElement(s,{classNames:"message-container"},t.map((({key:e,type:t,content:i,duration:r,on:a})=>n.createElement(c,{key:e,className:["message-row",t,a?"on":""].join(" ")},n.createElement("div",{className:"content"},i),r?null:n.createElement("div",{className:"action-box"},n.createElement(o.$,{icon:"close",iconSize:12,onClick:()=>this.closeMessage(e)})))))))}}const b=n.createRef(),h=()=>new Promise((e=>{let t=document.getElementById("bhMessageWrapper");t?e(b):(t=document.createElement("div"),t.id="bhMessageWrapper",document.body.appendChild(t),r.render(n.createElement(d,{app:b}),t,(()=>{e(b)})))})),g=(e,t,...i)=>{h().then((o=>{o.current.addMessage(e,t,...i)}))},m=()=>{h().then((e=>{e.current.clearAll()}))},x=(e,...t)=>g("info",e,...t),u=(e,...t)=>g("warn",e,...t),f=(e,...t)=>g("error",e,...t),v={info:x,warn:u,error:f,clearAll:m}},5502:(e,t,i)=>{i.d(t,{A:()=>d});var o=i(1653),n=i(8468),r=i(4271),a=i(9751),l=i(6540),s=i(5999);const c=s.Ay.section`
	position: relative;
	display: flex;
	box-sizing: border-box;
	padding: 4px;
	width: 100%;
	min-width: 148px;
	//height: 98px;
	border-radius: 6px;
	z-index: 1;
	cursor: pointer;
	//content-visibility: paint;
	//contain-intrinsic-size: 48px 0;
	
	&:hover {
		background-color: #fff;
		
		.incognito-button {
			pointer-events: auto;
			visibility: visible;
		}
	}
	
	//content-visibility: auto;
	//contain-intrinsic-size: none 98px;
	
	.cover {
		position: absolute;
		top: 0;
		right: 0;
		display: block;
		width: 33%;
		height: 100%;
		overflow: hidden;
		cursor: pointer;
		box-shadow: rgba(0, 0, 0, 0.1) 0 1px 4px;
		transform-origin: 50% 30%;
		transition: transform .3s;
		
		.duration {
			position: absolute;
			right: 10px;
			bottom: 6px;
			padding: 0 3px;
			min-width: 34px;
			height: 15px;
			font-size: 12px;
			text-align: center;
			zoom: calc(4 / 6);
			color: #fff;
			background-color: rgb(0 0 0 / 80%);
			//border-radius: 2px;
		}
	}
	
	.avatar {
		flex-shrink: 0;
		margin-right: 6px;
		width: 40px;
		height: 40px;
		cursor: pointer;
		
		.img {
			border-radius: 20px;
			border: 1px solid #fff;
			box-sizing: border-box;
		}
	}
	
	.info {
		position: relative;
		display: flex;
		flex-direction: column;
		width: calc(100% - 40px);
		//height: 30px;
		line-height: 12px;
		word-break: break-all;
		z-index: 2;
		
		a {
			width: fit-content;
			height: 18px;
			line-height: 22px;
			font-size: 14px;
			color: #616161;
			cursor: pointer;
		}
		
		.title {
			position: relative;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			//top: 74px;
			//display: -webkit-box;
			margin: 4px 0 0 0;
			box-sizing: border-box;
			//padding: 0 2px;
			//width: calc(100% - 46px);
			width: 100%;
			min-height: 22px;
			line-height: 16px;
			font-size: 12px;
			color: #828282;
			overflow: hidden;
			text-overflow: ellipsis;
			//white-space: nowrap;
			//text-indent: 2px;
			word-break: break-all;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			z-index: 1;
			pointer-events: none;
			//zoom: 0.9;
		}
		
		.username {
			margin-top: 2px;
			height: 12px;
			line-height: 12px;
			font-size: 12px;
			overflow: hidden;
			text-decoration: none;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: black;
			
			&:hover {
				text-decoration: underline;
			}
		}
		
		.add-special-attention-btn {
			visibility: hidden;
			margin-left: 4px;
			padding: 1px;
			height: 16px;
			line-height: 12px;
			//border-radius: 2px;
			text-decoration: none;
			transform: scale(0.8);
			color: #666;
			box-sizing: border-box;
			
			&:hover {
				background-color: var(--paper-grey-800);
				color: #aaa;
			}
			
			&:active {
				background-color: var(--paper-grey-900);
			}
		}
	}
	
	&:hover {
		.cover {
			//perspective: 1000px;
			//transform: scale3d(1.05, 1.05, 1);
			
			.cover-image {
				//filter: brightness(1);
			}
		}
		
		.add-special-attention-btn {
			visibility: visible;
		}
	}
	
	&.special-attention {
		.info {
			.avatar {
				.img {
					border-color: var(--bilibili-pink);
				}
			}
			
			.username {
				color: var(--bilibili-pink);
			}
		}
		
		.cover {
			//box-sizing: border-box;
			//border: 1px solid var(--bilibili-pink);
			
			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				//border-radius: 4px;
				box-shadow: inset 0 0 0px 1px var(--bilibili-pink);
				z-index: 1;
			}
		}
		
		.add-special-attention-btn {
			color: var(--bilibili-pink);
		}
	}
	
	@media (prefers-color-scheme: dark) {
		&:hover {
			background-color: #111;
		}
		
		.info {
			.username {
				color: #ddd;
			}
		}
		
		.cover {
			box-shadow: rgba(0, 0, 0, 0.3) 0 1px 4px;
			
			&:hover .cover-image {
				filter: brightness(0.85);
			}
		}
	}
`,p=(0,s.Ay)(o.sL)`
	position: absolute;
	background-color: var(--bilibili-blue);
	color: var(--bilibili-gray);
	right: 3px;
	top: 3px;
	z-index: 2;
	pointer-events: none;
	visibility: hidden;
	height: 18px;
`;function d({cover:e,duration:t,title:i="none title",isSpecialAttention:o,owner:s,stat:d,onClickCover:b,onClickUserName:h,hideAuthor:g,onClickFollowBtn:m,roomId:x,link:u,showIncognitoButton:f,...v}){const{createTab:w,bhAccount:k,handleOnClickPayment:y}=(0,l.useContext)(a.T),C=(0,l.useCallback)((e=>{e.stopPropagation(),w(e,`https://space.bilibili.com/${s.mid}`,{active:!0})}),[s]),z=(0,l.useCallback)((e=>{if(e.stopPropagation(),!k?.isVIP)return y();chrome.runtime.sendMessage({target:"incognito",event:"addTemp",roomId:x},(()=>{w(e,u,{active:!0})}))}),[x,u,k]);return l.createElement(n.t,null,l.createElement(c,{className:["live-card",o?"special-attention":""].join(" "),onClick:b,onAuxClick:b,...v},l.createElement("div",{className:"avatar"},l.createElement(r._,{url:s.face,height:30})),l.createElement("div",{className:"info"},l.createElement("a",{className:"username",onClick:h||C,onAuxClick:h||C},s.name),l.createElement("p",{className:"title",title:i},v.areaName," | ",i)),f?l.createElement(p,{className:"incognito-button",onClick:z},"\u9690\u8eab\u6253\u5f00"):null))}},7008:(e,t,i)=>{i(4271);var o=i(6540),n=i(5999);n.Ay.section.attrs((()=>({className:"ad-card"})))`
  position: relative;
  padding-bottom: 6px;
  width: 100%;
  min-width: 148px;
  //height: 135px;
  z-index: 1;
  //content-visibility: auto;
  //contain-intrinsic-size: 160px;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px;
    transform-origin: bottom;
    transition: transform .3s;

    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 58px;
      width: 100%;
      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .4));
      z-index: 1;
      pointer-events: none;
    }

    .cover-image {
      transition: filter 0.2s;
      filter: brightness(0.95);
      //transform: scale(1.1);
    }

    time {
      position: absolute;
      bottom: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .publish-date-desc {
      left: 8px;
    }

    .duration {
      right: 8px;
    }

    .tag.ad {
      //position: absolute;
      //top: 6px;
      //left: 6px;
      margin-right: 2px;
      height: 16px;
      z-index: 2;
      vertical-align: text-bottom;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      top: 0;
      margin: 5px;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .title {
    margin: 3px 0 0 0;
    padding: 0 1px;
    width: calc(100% - 4px);
    font-size: 14px;
    color: #141414;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    cursor: pointer;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2px;
    line-height: 12px;
    word-break: break-all;

    .info-line {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .extra-info {
      width: 100%;
      color: #616161;
    }

    a {
      color: #616161;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .username {
      max-width: 144px;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 4px;
      //padding: 0 1px 0 0;
      border-radius: 2px;
      text-decoration: none;
      color: #666;

      &:hover {
        background-color: var(--paper-grey-800);
        color: #aaa;
      }

      &:active {
        background-color: var(--paper-grey-900);
      }

      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: bold;
        //zoom: 0.8;
      }

      .text {
        padding: 0 2px;
        zoom: 0.8;
      }
    }
  }

  &:hover {
    .cover {
      //perspective: 1000px;
      //transform: scale3d(1.05, 1.05, 1);

      .cover-image {
        filter: brightness(1);
      }
    }

    .add-special-attention-btn {
      visibility: visible;
    }

    .play-later-wrapper {
      visibility: visible;
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-shadow: inset 0 0 0 1px var(--bilibili-pink);
        z-index: 1;
        pointer-events: none;
      }
    }

    .title {
      color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    .title {
      color: #E5E5E5;
    }

    .info {
      a {
        color: #999999;
      }
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`;o.Component;n.Ay.section.attrs((()=>({className:"video-card"})))`
  position: relative;
  width: 100%;
  //max-width: 200px;
  min-width: 148px;
  height: 114px;
  z-index: 1;
  contain: paint;
  //content-visibility: auto;
  //contain-intrinsic-size: none 114px;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    height: 110px;
    //border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    //box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 38px;
      width: 100%;
      //border-radius: 0 0 2px 2px;
      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
      z-index: 1;
      pointer-events: none;
    }

    .cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.3s cubic-bezier(0.5, 0.01, 0, 1) 0s, transform 0.3s cubic-bezier(0.5, 0.01, 0, 1) 0s;
      //filter: grayscale(0.5) brightness(0.24);
      //transform: scale(1.3);
    }

    .publish-date-desc {
      position: absolute;
      top: 6px;
      left: 8px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .tag.ad {
      margin-right: 2px;
      height: 16px;
      z-index: 2;
      vertical-align: text-bottom;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      top: 20px;
      margin: 4px;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .top-info {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 4px 4px 0;
    width: 100%;
    line-height: 16px;
    //text-shadow: 0 0 2px #000, 0 0 2px #000;

    .user-info {
      margin-right: 4px;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      padding: 1px 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;
      transition: background-color .3s;
    }


    a {
      color: #fff;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .username {
      max-width: 144px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 2px;
      text-decoration: none;
      color: #fff;

      &:hover {
        color: #aaa;
      }

      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: bold;
      }

      .text {
        padding: 0 2px;
        zoom: 0.8;
      }
    }
  }

  .time-box {
    flex-shrink: 0;
    display: inline-block;
    margin-left: auto;
    font-size: 12px;
    font-family: system-ui;
    text-align: center;
    color: #FFFFFF;
    z-index: 2;

    .duration, .publish-date {
      padding: 1px 4px;
      transition: background-color .3s;
    }
  }

  .bottom-info {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 6px 4px;
    width: 100%;
    line-height: 16px;

    .title {
      display: -webkit-box;
      flex-grow: 1;
      font-size: 12px;
      color: #ffffff;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
      cursor: pointer;
      z-index: 1;
    }
  }

  &:hover {
    .cover .cover-image {
      filter: grayscale(0) brightness(1);
      transform: scale(1);
    }

    .top-info {
      .user-info {
        background-color: rgb(0 0 0 / 50%);

        .add-special-attention-btn {
          visibility: visible;
        }
      }

      .duration {
        background-color: rgb(0 0 0 / 50%);
      }

      .publish-date {
        background-color: rgb(0 0 0 / 50%);
      }
    }

    .play-later-wrapper {
      visibility: visible;
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-shadow: inset 0 0 0 2px var(--bilibili-pink);
        pointer-events: none;
        z-index: 2;
      }
    }

    .title, .username {
      //color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    .title {
      color: #E5E5E5;
    }

    .user-info {
      a {
        color: #fff;
      }
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`},8311:(e,t,i)=>{i.d(t,{Q:()=>a});var o=i(6540),n=i(5999);const r=n.Ay.input`
`,a=function(e){const{value:t,max:i,min:n,step:a,onChange:l,...s}=e;return o.createElement(r,{className:"range",type:"range",max:i,min:n,step:a,value:t,onChange:l,...s})}},8468:(e,t,i)=>{i.d(t,{t:()=>n});var o=i(6540);class n extends o.Component{constructor(e){super(e)}state={hasError:!1};componentDidCatch(e,t){}render(){return this.state.hasError?o.createElement("h1",null,"Something went wrong."):this.props.children}}},8612:(e,t,i)=>{i.d(t,{h:()=>f,t:()=>x});var o=i(6942),n=i.n(o),r=i(3879),a=i(6540),l=i(3078),s=i(8768),c=i(5999),p=i(996);const d=a.createContext({}),b=c.Ay.div.attrs((({show:e,position:t})=>({className:["handle-content-wrapper",e?"":"hide","left"===t?"right":"left"]})))`
  position: absolute;
  top: 0;
  padding: 10px;
  max-width: 550px;
  min-width: 100px;
  width: max-content;
  min-height: 40px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.14) 0 2px 4px 0;
  background-color: rgb(246 246 246);
  color: #222;
  opacity: 1;
  transition: transform .3s, opacity .3s;
  overflow: auto;
  scrollbar-width: thin;

  &.left {
    right: 36px;
    border-radius: 6px 0 6px 6px;
    transform: translate(0, 0);
    transform-origin: top right;
  }

  &.right {
    left: 36px;
    border-radius: 0 6px 6px 6px;
    transform: translate(0, 0);
    transform-origin: top left;
  }

  &.hide {
    transition: transform .2s, opacity .1s, visibility 0s .2s;
    opacity: 0;
    visibility: hidden;

    &.left {
      //transform: translateX(20px) !important;
    }

    &.right {
      //transform: translateX(-20px) !important;
    }
  }

  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  &::-webkit-scrollbar-corner {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    visibility: hidden;
    background-color: #b3b3b3;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      visibility: visible;
    }
  }

  .need-update-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    padding: 0 6px;
    height: 30px !important;
    border-radius: 4px;
    font-size: 12px;
    background-color: var(--bilibili-blue);
    color: var(--bilibili-gray);
    //z-index: 30;

    //.skip-btn {
    //  margin-left: auto;
    //  margin-right: 12px;
    //  cursor: pointer;
    //}

    .need-update-btn {
      margin-left: auto;
      padding: 0 8px;
      height: 20px;
      line-height: 20px;
      border-radius: 6px;
      background-color: var(--bilibili-gray);
      color: var(--bilibili-blue);
      text-decoration: none;
    }
  }

  & > footer {
    display: flex;
    justify-content: space-between;
    margin: 12px -10px -10px;
    padding: 4px 10px 4px;
    border-top: 1px solid var(--google-grey-100);
    font-size: 12px;
    color: var(--google-grey-700);

    .bilibili-helper-name, .report, .config {
      margin-right: 16px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .version {
      margin-left: auto;
    }
  }

  @media (prefers-color-scheme: dark) {
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
`;class h extends a.Component{constructor(e){super(e)}static contextType=d;contentRef=a.createRef();state={states:null,currentVersionInfo:null,needRefreshPage:!1,hasLogin:!1,hasRegister:!1,bilibiliAccount:null,downloadingSettings:!1,loading:!1,loginLoginModalShow:!1,hasBilibiliAccountLogin:!1,handleOnLoginOtherBilibiliAccount:()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://passport.bilibili.com/login?from=bilibili-helper"},(()=>{this.setState({needRefreshPage:!0})}))},handleOnClickLogin:()=>{this.state.loading||(this.setState({loading:!0}),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"login"},(e=>{e?this.setState({loading:!1,hasLogin:e.hasLogin,hasRegister:e.hasRegister,bilibiliAccount:e.bilibiliAccount}):this.setState({loading:!1,loginLoginModalShow:!0})})))},handleOnClickRefresh:()=>{history.go()},handleOnClickGoToOverview:()=>{this.setState({needRefreshPage:!0}),this.openPage(chrome.runtime.getURL("/html/config.html"))},handleOnClickGoToWebsite:()=>{this.openPage("https://acghelper.com/")},openPrivacy:()=>{this.openPage("https://github.com/bilibili-helper/bilibili-helper-o/blob/master/ADDON_PRIVACY.md")}};componentDidMount(){chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},(e=>{if(e){const{hasLogin:t,bilibiliAccount:i,downloadingSettings:o}=e;this.setState({hasLogin:t,bilibiliAccount:i,downloadingSettings:o})}})),chrome.runtime.sendMessage({target:"states",event:"getStates"},(e=>{e&&this.setState({states:e})})),chrome.runtime.sendMessage({target:"states",event:"getVersionInfo"},(e=>{e&&this.setState({currentVersionInfo:{...e}})}))}openPage=e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})};openHelperWebsite=()=>{this.openPage("https://acghelper.com/")};goToSendMessageForDeveloper=()=>{this.openPage("https://message.bilibili.com/#/whisper/mid1344117169")};goToConfigPage=()=>{this.openPage(chrome.runtime.getURL("/html/config.html"))};render(){const{show:e=!1,position:t="left",children:i}=this.props,{states:o}=this.context;return a.createElement(d.Provider,{value:this.state},a.createElement(b,{ref:this.contentRef,id:"bilibiliHelper2ContentWrapper",show:e,position:t},o&&o.needUpdate?a.createElement("div",{className:"need-update-wrapper"},"\u65b0\u7248\u672c\u300c",o.latestVersion,"\u300d\u73b0\u5df2\u53d1\u5e03 ~",a.createElement("a",{className:"need-update-btn",href:"https://acghelper.com",target:"_blank",rel:"noreferrer"},"\u7acb\u5373\u66f4\u65b0")):null,i,a.createElement("footer",null,a.createElement("span",{className:"bilibili-helper-name",onClick:this.openHelperWebsite},"ACG\u52a9\u624b\u5b98\u7f51"),a.createElement("span",{className:"config",onClick:this.goToConfigPage},"\u8bbe\u7f6e\u9875\u9762"),a.createElement("span",{className:"report",onClick:this.goToSendMessageForDeveloper},"\u70b9\u51fb\u53cd\u9988"),a.createElement("span",{className:"version"},"\u5f53\u524d\u7248\u672c: ",p.rE))))}}(0,s.c1)();const g=c.DU`
	html {
		zoom: 1;
	}
`,m=c.Ay.div.attrs((({showWhenFullWiden:e,showInInjectPlayer:t})=>({className:["handle-wrapper",e?"show-in-full-widen":""],id:"bilibiliHelper2HandleButtonWrapper"})))`
	position: fixed;
	top: 100px;
	right: 24px;
	width: 36px;
	height: 36px;
	box-sizing: border-box;
	//opacity: .8;
	transition: opacity .2s .1s;
	z-index: 99999;
	
	&:hover {
		opacity: 1 !important;
		transition: opacity .2s;
	}
  
    &.active {
	    z-index: 100000;
    }
	
	&.show-in-full-widen {
		z-index: 999999;
	}
`,x=(0,c.Ay)(r.I).attrs((()=>({id:"bilibiliHelper2HandleButton"})))`
	position: relative;
	margin: 0;
	padding: 6px;
	border-radius: 50%;
	background-size: 24px;
	box-sizing: content-box;
	opacity: 1;
	cursor: pointer;
	user-select: none;
	transform: scale(1);
	transition: transform 300ms, border-radius 200ms, opacity .2s, opacity .3s;
	z-index: 1;
	
	&#bilibiliHelper2HandleButton {
		font-size: 24px;
	}
	
	&.default {
		background-color: var(--bilibili-pink);
		color: #fff;
		box-shadow: 0 1px 4px 0 rgb(251 114 153 / 0.6);
	}
	
	&.initialized {
		opacity: 1;
	}
	
	&.translucentPink {
		background-color: var(--bilibili-pink);
		color: #fff;
		box-shadow: 0 0 1px 0 var(--bilibili-pink);
		opacity: .6;
	}
	
	&.pinkCat {
		background-color: #fff;
		color: var(--bilibili-pink);
		box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
	}
	
	&.blackCat {
		background-color: var(--bilibili-gray);
		color: var(--paper-grey-900);
		box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
	}
	
	&.translucentWhite {
		background-color: var(--bilibili-gray);
		color: var(--bilibili-pink);
		opacity: .6;
	}
	
	&::before {
		display: block;
		transition: transform 300ms;
	}
	
	&:hover {
		opacity: 1;
		
		.lock-btn, .dark-btn {
			visibility: visible;
		}
	}
	
	&:hover::before {
		transform: scale(1.1);
	}
	
	&:active {
		transform: scale(0.9);
	}
	
	.tool-buttons {
		position: absolute;
		bottom: -6px;
		left: 0;
		width: 100%;
		
		.bilibili-helper-2-iconfont {
			transform: scale(.7);
			box-sizing: content-box;
			
			::before {
				pointer-events: none;
			}
		}
	}
	
	&.right.showContent {
		border-radius: 0 50% 50% 0;
	}
	
	&.left.showContent {
		border-radius: 50% 0 0 50%;
	}
`,u=(0,c.Ay)(r.I).attrs((({position:e})=>({className:["lock-btn",e]})))`
	position: absolute;
	bottom: -12px;
	padding: 3px;
	border-radius: 50%;
	background-color: var(--bilibili-gray);
	color: var(--paper-grey-900);
	//transform: scale(0.6);
	cursor: pointer;
	user-select: none;
	visibility: hidden;
	z-index: 1;
	
	&.right {
		right: 0;
		transform-origin: top right;
	}
	
	&.left {
		left: 0;
		transform-origin: top left;
	}
	
	.bilibili-helper-2-dark-mode & {
		background-color: var(--dark-4);
		color: var(--paper-pink-50);
		
		&::before {
			transform: scale(0.85);
			display: block;
		}
	}
`;class f extends a.Component{constructor(e){super(e)}get pageWidth(){return document.documentElement.offsetWidth+document.documentElement.scrollLeft}state={isLocked:!0,toolBarPosition:"right",showContent:!1,catType:"default",hideWhenFullWiden:!0,showInInjectPlayer:!1,positionOption:{top:100,left:24},initialized:!1,states:{},isVIP:!1,isSuperVIP:!1,setVIPState:()=>this.state.states&&(0,l.mg)(this.state.bhAccount),setSuperVIPState:()=>this.state.states&&(0,l.BN)(this.state.bhAccount)};static defaultProps={type:"common"};mouseDown=!1;handleMoved=!1;selfContentDOM;componentDidMount(){this.initDragEvent(),chrome.runtime.sendMessage({target:"states",event:"getStates"},(e=>{e&&this.setState({states:e},(()=>{this.setState({isVIP:this.state.setVIPState(),isSuperVIP:this.state.setSuperVIPState()})}))})),chrome.runtime.sendMessage({target:"cat",event:"getSetting"},(({catType:e,showWhenFullWiden:t=!0,showInInjectPlayer:i=!1,autoClose:o=!1})=>{this.setState({catType:e,showWhenFullWiden:t,showInInjectPlayer:i}),(o||this.props.autoClose)&&document.addEventListener("click",(e=>{this.selfContentDOM||(this.selfContentDOM=document.getElementById("bilibiliHelper2HandleButtonWrapper")),this.selfContentDOM&&!this.selfContentDOM.contains(e.target)&&e.target!==this.selfContentDOM&&this.setState({showContent:!1})}))})),chrome.runtime.sendMessage({target:"cat",event:"getHandleConfig",type:this.props.type},(e=>{if(!e)return;const{left:t,right:i,top:o,direction:n,locked:r}=e;this.setState({toolBarPosition:n,isLocked:r,positionOption:{top:o,left:t,right:i}},(()=>{this.initPosition()}))}))}initPosition=()=>{const{isLocked:e,positionOption:t}=this.state,i=document.getElementById("bilibiliHelper2HandleButtonWrapper");let o,n=!1;if(i.style.position=e?"fixed":"absolute",t){let{top:e,left:r,right:a}=t;e<0&&(e=0,t.top=0,n=!0),i.style.top=`${e}px`,void 0!==r?(r<0&&(r=0,t.left=0,n=!0),o="left",i.style.left=`${r}px`):void 0!==a&&(a<0&&(a=0,t.right=0,n=!0),o="right",i.style.right=`${a}px`),n&&(this.setState({toolBarPosition:o,positionOption:t}),this.uploadHandleConfig())}const r=i.offsetWidth,a=i.offsetHeight,l=i.offsetTop,s=i.offsetLeft,c=Number(window.getComputedStyle(document.getElementsByTagName("html")?.[0])?.zoom||1);let p=window.visualViewport.width/c,d=window.visualViewport.height/c;l>d-a&&(i.style.top=d-a+"px"),s>p-r&&(i.style.left=p-r+"px"),this.setState({initialized:!0})};initDragEvent=()=>{const e=document.getElementById("bilibiliHelper2HandleButtonWrapper"),t=document.getElementById("bilibiliHelper2ContentWrapper"),i=document.getElementById("bilibiliHelper2HandleButton");let o,n,r=i.clientWidth,a=Number(window.getComputedStyle(document.getElementsByTagName("html")?.[0])?.zoom||1),l=window.visualViewport.width/a,s=window.visualViewport.height/a;const c=()=>{o=t.offsetHeight,a=Number(window.getComputedStyle(document.getElementsByTagName("html")?.[0])?.zoom||1),n=i.offsetHeight,l=window.visualViewport.width/a,s=window.visualViewport.height/a,t.style.maxHeight=s-50<=o?s-30+"px":""};if(window.addEventListener("resize",c),document.body.addEventListener("resize",c),i.addEventListener("mousedown",(t=>{t.stopPropagation(),this.mouseDown=!0,this.originOffectTop=e.offsetTop,this.originOffectLeft=e.offsetLeft,this.originX=t.clientX,this.originY=t.clientY,c(),r=i.clientWidth})),window.ResizeObserver){const e=new window.ResizeObserver((()=>{o=t.offsetHeight,s-50<o&&(t.style.maxHeight=s-30+"px")}));e.observe(t)}document.addEventListener("mousemove",(i=>{if(this.mouseDown){const c=(this.originX-i.clientX)/a,p=(this.originY-i.clientY)/a,d=Math.abs(2*c+2*p);if(d>10||this.handleMoved){let i=this.originOffectTop-p;if(i<=0?i=0:i>=s-n&&(i=s-n),t.style.transform=s-i<o?`translate(0px, ${-(o-(s-i))}px)`:"",e.style.top=`${i}px`,this.handleMoved=!0,this.originOffectLeft-c+r/2<l/2){"left"!==this.state.toolBarPosition&&this.setState({toolBarPosition:"left"});let t=this.originOffectLeft-c;t<=0&&(t=0),e.style.right="unset",e.style.left=`${t}px`}else{"right"!==this.state.toolBarPosition&&this.setState({toolBarPosition:"right"});let t=l-(this.originOffectLeft-c)-r;t<0&&(t=0),e.style.left="unset",e.style.right=`${t}px`}}}}),!0),document.addEventListener("mouseup",(()=>{const{toolBarPosition:t,positionOption:i}=this.state;if(this.mouseDown){this.mouseDown=!1;let o=!1,{left:n,top:r,right:a}=e.getBoundingClientRect();r<0&&(r=0,o=!0),n<-10&&(n=-10,o=!0),a<-10&&(a=-10,o=!0);const l=document.body.clientWidth;(i.top!==r||void 0!==i.left&&i.left!==n||void 0!==i.right&&i.right!==l-a)&&(o=!0),i.top=r,"left"===t?(i.left=n,delete i.right):"right"===t&&(i.right=l-a,delete i.left),o&&this.setState({positionOption:i},(()=>{this.uploadHandleConfig()}))}}),!1)};handleOnClickLockModeBtn=e=>{e.persist(),e.stopPropagation();const t=!this.state.isLocked;return chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"cat",action:"click_handle_lock_button",label:!this.state.isLocked}),this.setState({isLocked:!this.state.isLocked},(()=>{const{toolBarPosition:e}=this.state,i=document.getElementById("bilibiliHelper2HandleButtonWrapper"),o=Number(window.getComputedStyle(document.getElementsByTagName("html")?.[0])?.zoom||1);let{top:n,left:r,right:a}=i.getBoundingClientRect();const l=window.scrollY,s=window.scrollX,c={};if(t){i.style.position="fixed",i.style.top=`${n}px`;let e=n-l;e<=12&&(e=12),c.top=e}else i.style.position="absolute",i.style.top=`${n+l/o}px`,c.top=n+l/o;"left"===e?(i.style.left=r-s+"px",i.style.right="unset",c.left=r-s,delete c.right):"right"===e&&(i.style.left="unset",i.style.right=""+(document.body.clientWidth-a),delete c.left,c.right=document.body.clientWidth-a),this.setState({positionOption:c},(()=>{this.uploadHandleConfig()}))})),!1};handleOnClickHandleBtn=()=>{const{onBeforeClickHandle:e,onAfterClickHandle:t}=this.props;e instanceof Function&&e(this.state.showContent),this.handleMoved?(this.handleMoved=!1,t instanceof Function&&t(this.state.showContent)):(this.setState({showContent:!this.state.showContent},this.updateContentWrapperPosition),t instanceof Function&&t(!this.state.showContent))};updateContentWrapperPosition=()=>{const{showContent:e}=this.state,t=document.getElementById("bilibiliHelper2ContentWrapper"),i=document.getElementById("bilibiliHelper2HandleButton"),o=t.offsetHeight,n=i.offsetHeight,r=Number(document.getElementsByTagName("html")?.[0]?.style?.zoom||1);let a=window.visualViewport.height/r,l=this.originOffectTop;l>=a-n&&(l=a-n),t.style.transform=e&&a-l<o?`translate(0px, ${-(o-(a-l))}px)`:""};uploadHandleConfig=()=>{const{type:e}=this.props,{positionOption:t,isLocked:i,toolBarPosition:o}=this.state;chrome.runtime.sendMessage({target:"cat",event:"setHandleConfig",type:e,...t,locked:i,direction:o},(()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"uploadSettings",featureName:"cat"})}))};render(){const{lockMode:e=!0,children:t,className:i,onBeforeClickHandle:o,onAfterClickHandle:r,...l}=this.props,{isLocked:s,toolBarPosition:c,showContent:p,catType:b,showWhenFullWiden:f,showInInjectPlayer:v,initialized:w}=this.state;return a.createElement(m,{showWhenFullWiden:f,showInInjectPlayer:v,className:n()(i,{active:p}),...l},a.createElement(g,null),a.createElement(x,{className:["handle-button",w?"initialized":"",c,p?"showContent":"",b].filter(Boolean).join(" "),icon:"cat",size:24,onClick:this.handleOnClickHandleBtn},a.createElement("div",{className:"tool-buttons"},e&&a.createElement(u,{position:c,icon:s?"lock":"unlock",size:16,onClick:this.handleOnClickLockModeBtn}))),a.createElement(d.Provider,{value:this.state},a.createElement(h,{show:p,position:c},t)))}}},9189:(e,t,i)=>{i.d(t,{q:()=>v});var o=i(6156),n=i(8468),r=i(3879),a=i(4271),l=i(6540),s=i(5999),c=i(3989);const p=s.Ay.section.attrs((()=>({className:"video-card"})))`
	position: relative;
	padding-bottom: 6px;
	width: 100%;
	//height: 160px;
	min-width: 148px;
	//height: 135px;
	z-index: 1;
	//content-visibility: auto;
	//contain-intrinsic-size: 160px;
	
	.cover {
		position: relative;
		display: block;
		width: 100%;
		height: 100px;
		box-sizing: border-box;
		border-radius: 6px;
		overflow: hidden;
		cursor: pointer;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px;
		transform-origin: bottom;
		//transition: transform .3s;
		
		:before {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			height: 58px;
			width: 100%;
			background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .4));
			z-index: 1;
			pointer-events: none;
		}
		
		.cover-image {
			//transition: filter 0.2s;
			//filter: brightness(0.95);
			border-radius: 6px;
			//transform: scale(1.1);
		}
		
		time {
			position: absolute;
			bottom: 6px;
			padding: 0 2px;
			min-width: 34px;
			height: 14px;
			line-height: 14px;
			font-size: 12px;
			font-family: system-ui;
			text-align: center;
			color: #fff;
			z-index: 2;
		}
		
		.publish-date-desc {
			left: 8px;
		}
		
		.duration {
			right: 8px;
		}
		
		.tag.new-tag {
			position: absolute;
			top: 6px;
			right: 6px;
			padding: 0 2px;
			min-width: 34px;
			height: 16px;
			line-height: 16px;
			font-size: 12px;
			font-family: system-ui;
			text-align: center;
			background-color: var(--bilibili-blue);
			color: #fff;
			z-index: 2;
		}
		
		.play-later-wrapper {
			position: absolute;
			right: 2px;
			top: 2px;
			margin: 3px;
			padding: 2px;
			border-radius: 6px;
			box-sizing: border-box;
			fill: var(--bilibili-blue);
			background-color: #00000080;
			color: var(--bilibili-gray);
			visibility: hidden;
			z-index: 1;
			transition: background-color .3s, fill .3s;
			
			&.watched {
				visibility: visible;
			}
			
			&:hover {
				background-color: var(--bilibili-blue);
				fill: var(--bilibili-gray);
			}
			
			.play-later {
				display: block;
				width: 16px;
				height: 16px;
			}
			
			.text {
				display: inline-block;
				padding: 0 3px 0 2px;
				height: 18px;
				line-height: 18px;
				vertical-align: bottom;
			}
		}
	}
	
	.title {
		margin: 3px 0 0 0;
		padding: 0 1px;
		width: calc(100% - 4px);
		font-size: 14px;
		color: #141414;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: justify;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		cursor: pointer;
		
		.tag {
			margin-right: 4px;
			color: var(--bilibili-blue);
		}
		
		.position-adjust {
			margin-left: -6px;
		}
		
		.badge {
			margin-right: 2px;
			padding: 0 3px;
			display: inline-block;
			height: 16px;
			line-height: 16px;
			border-radius: 6px;
			background-color: var(--bilibili-pink);
			color: #fff;
			zoom: .9;
		}
	}
	
	.info {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2px;
		line-height: 12px;
		word-break: break-all;
		
		.info-line {
			display: flex;
			align-items: center;
			width: 100%;
		}
		
		.extra-info {
			width: 100%;
			color: #616161;
		}
		
		a {
			color: #616161;
			text-decoration: none;
			white-space: nowrap;
			cursor: pointer;
		}
		
		.username {
			max-width: 144px;
			text-overflow: ellipsis;
			overflow: hidden;
			
			&:hover {
				text-decoration: underline;
			}
		}
		
		.add-special-attention-btn {
			visibility: hidden;
			margin-left: 4px;
			//padding: 0 1px 0 0;
			border-radius: 6px;
			text-decoration: none;
			color: #666;
			
			&:hover {
				background-color: var(--paper-grey-800);
				color: #aaa;
			}
			
			&:active {
				background-color: var(--paper-grey-900);
			}
			
			span {
				vertical-align: middle;
				font-size: 12px;
				font-weight: bold;
				//zoom: 0.8;
			}
			
			.text {
				padding: 0 2px;
				zoom: 0.8;
			}
		}
	}
	
	&:hover {
		.cover {
			//perspective: 1000px;
			//transform: scale3d(1.05, 1.05, 1);
			
			.cover-image {
				//filter: brightness(1);
			}
		}
		
		
		.add-special-attention-btn, .play-later-wrapper, .listen-video-button {
			pointer-events: auto;
			visibility: visible;
		}
	}
	
	&.special-attention {
		.cover {
			//border: 1px solid var(--bilibili-pink);
			
			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				border-radius: 6px;
				box-shadow: inset 0 0 0 1px var(--bilibili-pink);
				z-index: 1;
				pointer-events: none;
			}
		}
		
		.title {
			color: var(--bilibili-pink);
		}
		
		.add-special-attention-btn {
			color: var(--bilibili-pink);
		}
	}
	
	@media (prefers-color-scheme: dark) {
		.title {
			color: #e5e5e5;
		}
		
		.info {
			a {
				color: #999;
			}
		}
		
		.cover-image {
			//filter: brightness(0.85);
		}
	}
`,d=(0,s.Ay)(o.BilibiliMusicLogoIcon).attrs((()=>({className:"listen-video-button"})))`
	fill: var(--bilibili-blue);
	position: absolute;
	right: 2px;
	top: 25px;
	padding: 3px;
	margin: 3px;
	border-radius: 6px;
	cursor: pointer;
	pointer-events: none;
	visibility: hidden;
	background-color: #00000080;
	transition: background-color .3s, fill .3s;
	z-index: 3;
	
	:hover {
		background-color: var(--bilibili-blue);
		fill: var(--bilibili-gray);
	}
`,b=e=>{const{videoInfo:t,userInfo:i,onClickCover:s,onClickUserName:b,hideAuthor:h,isSpecialAttention:g,onClickFollowBtn:m,onClickMusic:x,onContentVisible:u,isNew:f,showWatcherLaterButton:v=!0,showNewTag:w,showFollowButton:k=!1,hasWatchLater:y,...C}=e,[z,E]=(0,l.useState)(y||!1),[A,N]=(0,l.useState)(!!y&&"\u5df2\u7a0d\u540e\u518d\u770b"),S=(0,l.useCallback)((e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:`https://space.bilibili.com/${i.uid}`,active:1!==e.button})}),[i]),M=(0,l.useCallback)((e=>{if(e.stopPropagation(),!z)return(t.aid||t.bvid)&&chrome.runtime.sendMessage({target:"watchLater",event:"set",aid:t.aid||(0,c.oS)(t.bvid)},(e=>{switch(e){case!0:E(!0),N("\u5df2\u6dfb\u52a0\u5230\u7a0d\u540e\u518d\u770b");break;case"notSupport":E(!0),N("\u7248\u6743\u5185\u5bb9\u6682\u65f6\u65e0\u6cd5\u6dfb\u52a0\u5230\u7a0d\u540e\u518d\u770b");break;case!1:E(!1),N("\u6dfb\u52a0\u7a0d\u540e\u518d\u770b\u5931\u8d25");break}})),!1}),[z,t]),P=(0,l.useCallback)((e=>(e.stopPropagation(),t.aid&&z&&chrome.runtime.sendMessage({target:"watchLater",event:"remove",aid:t.aid||(0,c.oS)(t.bvid)},(e=>{switch(e){case!0:E(!1),N("\u5df2\u4ece\u7a0d\u540e\u518d\u770b\u5220\u9664");break;case!1:E(!1),N("\u8bbe\u7f6e\u5931\u8d25");break}})),!1)),[z,t]);return l.createElement(p,{className:g?"special-attention":null,...C},l.createElement(n.t,null,l.createElement("a",{className:"cover",onClick:s,onAuxClick:s},l.createElement(a._,{className:"cover-image",url:t.cover+"@634w_400h.webp",height:86}),f?l.createElement("span",{className:["tag","new-tag"].join(" ")},"NEW"):null,t.publishDate&&l.createElement("time",{className:"publish-date-desc"},t.publishDate),(t.aid||t.bvid)&&v?l.createElement("div",{className:["play-later-wrapper",z?"watched":null].filter(Boolean).join(" "),onClick:z?P:M,onAuxClick:z?P:M},z||A?null:l.createElement(o.CounterClockwiseClockIcon,{className:"play-later"}),A?l.createElement("span",{className:"text"},A):null):null,x?l.createElement(d,{onClick:x}):null,t.duration?l.createElement("time",{className:"duration"},t.duration):null),l.createElement("a",{className:"title",title:t.title,onClick:s,onAuxClick:s},t?.badge?l.createElement("span",{className:"badge"},t.badge):null,C.tname&&C.showTag?l.createElement("span",{className:"tag"},C.tname):null,l.createElement("span",{className:t&&t.title&&"\u3010"===t.title[0]?"position-adjust":null},t.title)),l.createElement("div",{className:"info"},l.createElement("div",{className:"info-line name"},!h&&l.createElement("a",{className:"username",onClick:b||S,onAuxClick:b||S},"UP: ",i.name),!h&&k&&l.createElement("a",{className:"add-special-attention-btn",onClick:m,onAuxClick:m},g?l.createElement(l.Fragment,null,l.createElement(r.I,{icon:"love",size:14})):null,g?null:l.createElement(l.Fragment,null,l.createElement(r.I,{icon:"love-hollow",size:14})))))))},h=s.Ay.section.attrs((()=>({className:"video-card"})))`
	position: relative;
	width: 100%;
	//max-width: 200px;
	min-width: 148px;
	//height: 114px;
	z-index: 1;
	//contain: paint;
	//content-visibility: auto;
	//contain-intrinsic-size: none 114px;
	
	.cover {
		position: relative;
		display: block;
		width: 100%;
		height: 110px;
		//border-radius: 4px;
		border-radius: 6px;
		box-sizing: border-box;
		overflow: hidden;
		cursor: pointer;
		//box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
		//:before {
		//  content: "";
		//  position: absolute;
		//  bottom: 0;
		//  left: 0;
		//  height: 38px;
		//  width: 100%;
		//  //border-radius: 0 0 2px 2px;
		//  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
		//  z-index: 1;
		//  pointer-events: none;
		//}
		
		.cover-image {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: filter .2s cubic-bezier(0.5, 0.01, 0, 1) 0s, transform .3s cubic-bezier(0.5, 0.01, 0, 1) 0s;
			filter: grayscale(0.5) brightness(.4);
			border-radius: 4px;
			//transform: scale(1.3);
		}
		
		.publish-date-desc {
			position: absolute;
			top: 6px;
			left: 8px;
			padding: 0 2px;
			min-width: 34px;
			height: 14px;
			line-height: 14px;
			font-size: 12px;
			font-family: system-ui;
			text-align: center;
			color: #FFFFFF;
			z-index: 2;
		}
		
		.tag.new-tag {
			position: absolute;
			top: 6px;
			left: 6px;
			padding: 0 2px;
			min-width: 34px;
			height: 16px;
			line-height: 16px;
			font-size: 12px;
			font-family: system-ui;
			text-align: center;
			background-color: var(--bilibili-blue);
			color: #FFFFFF;
			z-index: 2;
		}
		
		.play-later-wrapper {
			position: absolute;
			right: 2px;
			top: 24px;
            margin: 3px;
            padding: 3px;
            border-radius: 6px;
			box-sizing: border-box;
            fill: var(--bilibili-blue);
            background-color: #00000080;
			color: var(--bilibili-gray);
			visibility: hidden;
			z-index: 1;
            transition: background-color .3s, fill .3s;
			
			&.watched {
				visibility: visible;
			}
			
			&:hover {
                background-color: var(--bilibili-blue);
                fill: var(--bilibili-gray);
			}
			
			.play-later {
                display: block;
                width: 16px;
                height: 16px;
			}
			
			.text {
				display: inline-block;
				padding: 0 3px 0 2px;
				height: 18px;
				line-height: 18px;
				vertical-align: bottom;
			}
		}
	}
	
	.top-info {
		position: absolute;
		top: 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		padding: 4px 4px 0;
		width: 100%;
		line-height: 16px;
		//text-shadow: 0 0 2px #000, 0 0 2px #000;
		
		.user-info {
			margin-right: 4px;
			display: flex;
			align-items: center;
			flex-wrap: nowrap;
			padding: 1px 4px;
			border-radius: 4px;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			word-break: keep-all;
			transition: background-color .2s;
		}
		
		
		a {
			color: #fff;
			text-decoration: none;
			white-space: nowrap;
			cursor: pointer;
		}
		
		.username {
			max-width: 144px;
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			word-break: keep-all;
			
			&:hover {
				text-decoration: underline;
			}
		}
		
		.add-special-attention-btn {
			visibility: hidden;
			margin-left: 2px;
			line-height: 14px;
			text-decoration: none;
			color: #fff;
			
			&:hover {
				color: #aaa;
			}
			
			span {
				vertical-align: middle;
				font-size: 12px;
				font-weight: bold;
			}
			
			.text {
				padding: 0 2px;
				zoom: 0.8;
			}
		}
	}
	
	.time-box {
		flex-shrink: 0;
		display: inline-block;
		margin-left: auto;
		font-size: 12px;
		font-family: system-ui;
		text-align: center;
		border-radius: 4px;
		overflow: hidden;
		color: #FFFFFF;
		z-index: 2;
		
		.duration, .publish-date {
			padding: 1px 4px;
			transition: background-color .2s;
		}
	}
	
	.bottom-info {
		position: absolute;
		bottom: 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		padding: 12px 6px 4px;
		width: 100%;
		line-height: 16px;
		background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
		
		.title {
			display: -webkit-box;
			flex-grow: 1;
			font-size: 12px;
			color: #ffffff;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			word-break: break-all;
			text-align: justify;
			cursor: pointer;
			z-index: 1;
			
			&.position-adjust {
				text-indent: -6px;
			}
			
			.tag {
				margin-right: 4px;
				color: var(--bilibili-blue);
			}
			
			.position-adjust {
				text-indent: -6px;
			}
			
			.badge {
				margin-right: 2px;
				padding: 0 3px;
				display: inline-block;
				height: 16px;
				line-height: 15px;
				border-radius: 3px;
				background-color: var(--bilibili-pink);
				color: #fff;
				zoom: .9;
			}
		}
	}
	
	&:hover {
		.cover .cover-image {
			filter: grayscale(0) brightness(1);
			transform: scale(1);
		}
		
		.listen-video-button {
			pointer-events: auto;
			visibility: visible;
		}
		
		.top-info {
			.user-info {
				background-color: rgb(0 0 0 / 50%);
				
				.add-special-attention-btn {
					visibility: visible;
				}
			}
			
			.duration {
				background-color: rgb(0 0 0 / 50%);
			}
			
			.publish-date {
				background-color: rgb(0 0 0 / 50%);
			}
		}
		
		//
		//.bottom-info {
		//  background: rgb(0 0 0 / 40%);
		//}
		
		.play-later-wrapper {
			visibility: visible;
		}
	}
	
	&.special-attention {
		.cover {
			//border: 1px solid var(--bilibili-pink);
			
			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				border-radius: 6px;
				box-shadow: inset 0 0 0 2px var(--bilibili-pink);
				pointer-events: none;
				z-index: 2;
			}
		}
		
		.title, .username {
			//color: var(--bilibili-pink);
		}
		
		.add-special-attention-btn {
			color: var(--bilibili-pink);
		}
	}
	
	@media (prefers-color-scheme: dark) {
		.title {
			color: #E5E5E5;
		}
		
		.user-info {
			a {
				color: #fff;
			}
		}
		
		.cover-image {
			//filter: brightness(0.85);
		}
	}
`,g=(0,s.Ay)(o.BilibiliMusicLogoIcon).attrs((()=>({className:"listen-video-button"})))`
	fill: var(--bilibili-blue);
	position: absolute;
	right: 2px;
	bottom: 34px;
	padding: 3px;
	margin: 3px;
	border-radius: 6px;
	cursor: pointer;
	pointer-events: none;
	visibility: hidden;
	background-color: #00000080;
	transition: background-color .3s, fill .3s;
	z-index: 3;
  
  :hover {
	  background-color: var(--bilibili-blue);
	  fill: var(--bilibili-gray);
  }
`;function m(e){const{videoInfo:t,userInfo:i,onClickCover:s,onClickUserName:c,hideAuthor:p,isSpecialAttention:d,onClickFollowBtn:b,onClickMusic:m,publishTime:x,showWatcherLaterButton:u=!0,showNewTag:f=!1,showFollowButton:v=!1,hasWatchLater:w,...k}=e,[y]=l.useState(Date.now()-x<864e5),[C,z]=l.useState(w||!1),[E,A]=l.useState(!!w&&"\u5df2\u7a0d\u540e\u518d\u770b"),N=l.useCallback((e=>{e.stopPropagation(),i&&chrome.runtime.sendMessage({target:"tabController",event:"create",url:`https://space.bilibili.com/${i.uid}`,active:1!==e.button})}),[i]),S=l.useCallback((e=>(e.stopPropagation(),t.aid&&!C&&chrome.runtime.sendMessage({target:"watchLater",event:"set",aid:t.aid},(e=>{switch(e){case!0:z(!0),A("\u5df2\u7a0d\u540e\u518d\u770b");break;case"notSupport":z(!0),A("\u4e0d\u652f\u6301\u756a\u5267\u89c6\u9891");break;case!1:z(!1),A("\u8bbe\u7f6e\u5931\u8d25");break}})),!1)),[t,C]),M=l.useCallback((e=>(e.stopPropagation(),t.aid&&C&&chrome.runtime.sendMessage({target:"watchLater",event:"remove",aid:t.aid},(e=>{switch(e){case!0:z(!1),A("\u5df2\u4ece\u7a0d\u540e\u518d\u770b\u5220\u9664");break;case!1:z(!1),A("\u8bbe\u7f6e\u5931\u8d25");break}})),!1)),[t,C]);return l.createElement(h,{className:d?"special-attention":null,...k},l.createElement(n.t,null,l.createElement("div",{className:"cover",onClick:s,onAuxClick:s},l.createElement(a._,{className:"cover-image",url:t.cover+"@638w_220h.webp",height:86,lazy:!0,duration:0}),t.publishDate&&f&&y?l.createElement("span",{className:["tag","new-tag"].join(" ")},"NEW"):null,u?l.createElement("div",{className:["play-later-wrapper",C?"watched":null].filter(Boolean).join(" "),onClick:C?M:S,onAuxClick:C?M:S},C||E?null:l.createElement(o.CounterClockwiseClockIcon,{className:"play-later"}),E?l.createElement("span",{className:"text"},E):null):null,m?l.createElement(g,{onClick:m}):null,l.createElement("div",{className:"top-info"},l.createElement("div",{className:"user-info"},!p&&i?l.createElement("a",{className:"username",onClick:c||N,onAuxClick:c||N},i.name):null,!p&&v&&l.createElement("a",{className:"add-special-attention-btn",onClick:b,onAuxClick:b},d?l.createElement(l.Fragment,null,l.createElement(r.I,{icon:"love",size:14})):null,d?null:l.createElement(l.Fragment,null,l.createElement(r.I,{icon:"love-hollow",size:14})))),t.duration||t.publishDate?l.createElement("div",{className:"time-box"},t.duration?l.createElement("time",{className:"duration"},t.duration):null,t.publishDate?l.createElement("time",{className:"publish-date"},t.publishDate):null):null),l.createElement("div",{className:"bottom-info"},l.createElement("a",{className:"title",title:t.title},t?.badge?l.createElement("span",{className:"badge"},t.badge):null,l.createElement("span",{className:t&&t.title&&"\u3010"===t.title[0]?"position-adjust":""},t.title))))))}const x=s.Ay.section.attrs((()=>({className:"video-card"})))`
	position: relative;
	display: flex;
	//margin-bottom: 6px;
	padding: 4px;
	box-sizing: border-box;
	width: 100%;
	height: 56px;
	//max-width: 200px;
	min-width: 148px;
	//height: 42px;
	border-radius: 6px;
	z-index: 1;
	//contain: paint;
	//content-visibility: paint;
	//contain-intrinsic-size: 0 56px;
	//will-change: scroll-position;
	cursor: pointer;
	
	&:hover {
		background-color: #fff;
		
		.listen-video-button {
			pointer-events: auto;
			visibility: visible;
		}
	}
	
	.cover {
		position: relative;
		display: block;
		flex-shrink: 0;
		width: 64px;
		height: 48px;
		//border-radius: 4px;
		box-sizing: border-box;
		overflow: hidden;
		cursor: pointer;
		//box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
		//:before {
		//  content: "";
		//  position: absolute;
		//  bottom: 0;
		//  left: 0;
		//  height: 38px;
		//  width: 100%;
		//  //border-radius: 0 0 2px 2px;
		//  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
		//  z-index: 1;
		//  pointer-events: none;
		//}
		
		.cover-image {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 4px;
			//filter: brightness(.8);
			//transform: scale(1.3);
		}
		
		.publish-date-desc {
			position: absolute;
			top: 6px;
			left: 8px;
			padding: 0 2px;
			min-width: 34px;
			height: 14px;
			line-height: 14px;
			font-size: 12px;
			font-family: system-ui;
			text-align: center;
			color: #fff;
			z-index: 2;
		}
		
		.tag.new-tag {
			position: absolute;
			top: 6px;
			right: 6px;
			padding: 0 2px;
			min-width: 34px;
			height: 16px;
			line-height: 16px;
			font-size: 12px;
			font-family: system-ui;
			text-align: center;
			background-color: var(--bilibili-blue);
			color: #fff;
			z-index: 2;
		}
	}
	
	.play-later-wrapper {
		position: absolute;
		right: 24px;
		bottom: 0;
		margin: 3px;
		padding: 2px;
		border-radius: 6px;
		box-sizing: border-box;
		fill: var(--bilibili-blue);
		color: var(--bilibili-gray);
		visibility: hidden;
		z-index: 1;
		transition: background-color .3s, fill .3s;
		
		&.watched {
			visibility: visible;
		}
		
		&:hover {
			background-color: var(--bilibili-blue);
			fill: var(--bilibili-gray);
		}
		
		.play-later {
			display: block;
			width: 16px;
			height: 16px;
		}
		
		.text {
			display: inline-block;
			padding: 0 3px 0 2px;
			height: 18px;
			line-height: 18px;
			vertical-align: bottom;
		}
	}
	
	.top-info {
		position: absolute;
		top: 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		padding: 4px 4px 0;
		width: 100%;
		line-height: 16px;
		//text-shadow: 0 0 2px #000, 0 0 2px #000;
	}
	
	.add-special-attention-btn {
		visibility: hidden;
		margin-left: 2px;
		line-height: 14px;
		text-decoration: none;
		color: #fff;
		
		&:hover {
			color: #aaa;
		}
		
		span {
			vertical-align: middle;
			font-size: 12px;
			font-weight: bold;
		}
		
		.text {
			padding: 0 2px;
			zoom: 0.8;
		}
	}
	
	.user-info {
		margin-top: 2px;
		margin-right: 4px;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		word-break: keep-all;
		//transition: background-color .3s;
		
		a {
			text-decoration: none;
			white-space: nowrap;
			cursor: pointer;
			opacity: 0.4;
			
			:hover {
				opacity: 1;
			}
		}
		
		.username {
			max-width: 144px;
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			word-break: keep-all;
			
			&:hover {
				text-decoration: underline;
			}
		}
		
		.publish-time {
			opacity: 0.4;
			margin-left: 2px;
			
			&:first-child {
				margin-left: 0;
			}
		}
	}
	
	.time-box {
		flex-shrink: 0;
		display: inline-block;
		margin-left: auto;
		font-size: 12px;
		font-family: system-ui;
		text-align: center;
		color: #fff;
		z-index: 2;
		
		.duration, .publish-date {
			padding: 1px 4px;
			transition: background-color .3s;
		}
	}
	
	.bottom-info {
		//position: absolute;
		//top: 0;
		//right: 0;
		//left: 62px;
		box-sizing: border-box;
		//display: flex;
		//align-items: center;
		padding: 0 0 0 4px;
		width: 100%;
		line-height: 16px;
		color: var(--paper-grey-900);
		
		.title {
			display: -webkit-box;
			flex-grow: 1;
			margin-top: -2px;
			font-size: 12px;
			overflow: hidden;
			text-align: justify;
			text-overflow: ellipsis;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			word-break: break-all;
			cursor: pointer;
			z-index: 1;
			
			.tag {
				margin-right: 4px;
				color: var(--bilibili-blue);
			}
			
			.position-adjust {
				text-indent: -6px;
			}
			
			.badge {
				margin-right: 2px;
				padding: 0 3px;
				display: inline-block;
				height: 16px;
				line-height: 15px;
				border-radius: 3px;
				background-color: var(--bilibili-pink);
				color: #fff;
				zoom: .9;
			}
		}
	}
	
	&:hover {
		//.cover .cover-image {
		//  filter: brightness(1);
		//}
		
		.top-info {
			.duration {
				background-color: rgb(0 0 0 / 50%);
			}
			
			.publish-date {
				background-color: rgb(0 0 0 / 50%);
			}
		}
		
		.play-later-wrapper {
			visibility: visible;
		}
		
		.user-info {
			//background-color: rgb(0 0 0 / 50%);
			
			.add-special-attention-btn {
				visibility: visible;
			}
		}
	}
	
	&.special-attention {
		.cover {
			//border: 1px solid var(--bilibili-pink);
			
			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				border-radius: 4px;
				box-shadow: inset 0 0 0 2px var(--bilibili-pink);
				pointer-events: none;
				z-index: 2;
			}
		}
		
		.title, .username {
			color: var(--bilibili-pink);
		}
		
		.add-special-attention-btn {
			color: var(--bilibili-pink);
		}
	}
	
	@media (prefers-color-scheme: dark) {
		&:hover {
			background-color: #111;
		}
		
		.title {
			color: #ddd;
		}
		
		.user-info {
			a {
				color: #ddd;
			}
			
			.publish-time {
				color: #ddd;
			}
		}
		
		.bottom-info {
			//color: var()
		}
		
		.cover-image {
			//filter: brightness(0.85);
		}
	}
`,u=(0,s.Ay)(o.BilibiliMusicLogoIcon).attrs((()=>({className:"listen-video-button"})))`
	fill: var(--bilibili-blue);
	position: absolute;
	right: 0;
	bottom: 0;
	padding: 3px;
	margin: 3px;
	border-radius: 6px;
	cursor: pointer;
	pointer-events: none;
	visibility: hidden;
	transition: background-color .3s, fill .3s;
	
	:hover {
		background-color: var(--bilibili-blue);
		fill: var(--bilibili-gray);
	}
`;function f({userInfo:e={},videoInfo:t={},onClickCover:i,onClickUserName:s,onClickMusic:c,hideAuthor:p,isSpecialAttention:d,onClickFollowBtn:b,showWatcherLaterButton:h=!0,showPublishTime:g=!1,showFollowButton:m,hasWatchLater:f,...v}){const[w,k]=l.useState(f??!1),[y,C]=l.useState(!!f&&"\u5df2\u7a0d\u540e\u518d\u770b"),z=l.useCallback((t=>{t.stopPropagation(),e&&chrome.runtime.sendMessage({target:"tabController",event:"create",url:`https://space.bilibili.com/${e.uid}`,active:1!==t.button})}),[e]),E=l.useCallback((e=>(e.stopPropagation(),t.aid&&!w&&chrome.runtime.sendMessage({target:"watchLater",event:"set",aid:t.aid},(e=>{switch(e){case!0:k(!0),C("\u5df2\u7a0d\u540e\u518d\u770b");break;case"notSupport":k(!0),C("\u4e0d\u652f\u6301\u756a\u5267\u89c6\u9891");break;case!1:k(!1),C("\u8bbe\u7f6e\u5931\u8d25");break}})),!1)),[t,w]),A=l.useCallback((e=>(e.stopPropagation(),t.aid&&w&&chrome.runtime.sendMessage({target:"watchLater",event:"remove",aid:t.aid},(e=>{switch(e){case!0:k(!1),C("\u5df2\u4ece\u7a0d\u540e\u518d\u770b\u5220\u9664");break;case!1:k(!1),C("\u8bbe\u7f6e\u5931\u8d25");break}})),!1)),[t,w]);return l.createElement(x,{className:d?"special-attention":null,...v,onClick:i,onAuxClick:i},l.createElement(n.t,null,l.createElement("div",{className:"cover"},l.createElement(a._,{className:"cover-image",url:t.cover+"@128w_96h.webp",height:86,lazy:!0,duration:0})),l.createElement("div",{className:"bottom-info"},l.createElement("a",{className:"title",title:t.title},t?.badge?l.createElement("span",{className:"badge"},t.badge):null,l.createElement("span",{className:t&&"\u3010"===t.title[0]?"position-adjust":""},t.title)),l.createElement("div",{className:"user-info"},!p&&e?l.createElement("a",{className:"username",onClick:s||z,onAuxClick:s||z},e.name):null,!p&&m?l.createElement("a",{className:"add-special-attention-btn",onClick:b,onAuxClick:b},d?l.createElement(l.Fragment,null,l.createElement(r.I,{icon:"love",size:14})):null,d?null:l.createElement(l.Fragment,null,l.createElement(r.I,{icon:"love-hollow",size:14}))):null,t.publishDate&&g?l.createElement("span",{className:"publish-time"},t.publishDate):null),h?l.createElement("div",{className:["play-later-wrapper",w?"watched":null].filter(Boolean).join(" "),onClick:w?A:E,onAuxClick:w?A:E},w||y?null:l.createElement(o.CounterClockwiseClockIcon,{className:"play-later"}),y?l.createElement("span",{className:"text"},y):null):null,c?l.createElement(u,{onClick:c}):null)))}const v={new:b,old:m,simple:f}}}]);