(()=>{"use strict";var e={2021:(e,a,p)=>{var r=p(6540),f=p(961),i=p(5999);const l=i.AH`
  @keyframes blink {
    0%, to {
      color: transparent;
    }

    50% {
      color: var(--google-red-500);
    }
  }
`;var b=p(2193),d=p.n(b);const o=(e="")=>i.AH`
    font-family: ${d()(e)?null:`'${e}',`} Cereal, "PingFang SC", "Microsoft YaHei", system, -apple-system, ".SFNSDisplay-Regular", HelveticaNeue, LucidaGrande, "Hiragino Sans GB", "sans-serif";
`,n=(i.AH`
    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
    & {
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }
`,i.AH`
	--Ga0: #0d0d0e;
	--Ga0_s: #1e2022;
	--Ga0_t: #1e2022;
	--Ga1: #000;
	--Ga1_s: #232527;
	--Ga1_t: #232527;
	--Ga1_e: #232527;
	--Ga2: #2f3134;
	--Ga2_t: #2f3134;
	--Ga3: #46494d;
	--Ga3_t: #46494d;
	--Ga4: #5e6267;
	--Ga4_t: #5e6267;
	--Ga5: #757a81;
	--Ga5_t: #757a81;
	--Ga6: #8b9097;
	--Ga6_t: #8b9097;
	--Ga7: #a2a7ae;
	--Ga7_t: #a2a7ae;
	--Ga8: #b9bdc2;
	--Ga8_t: #b9bdc2;
	--Ga9: #d0d3d7;
	--Ga9_t: #d0d3d7;
	--Ga10: #e7e9eb;
	--Ga10_t: #e7e9eb;
	--Ga11: #242628;
	--Ga12: #1f2022;
	--Wh0: #1f2022;
	--Wh0_t: #17181a;
	--Ba0: #000;
	--Ba0_s: #fff;
	--Ba0_t: #000;
	--Pi0: #26161c;
	--Pi1: #2f1a22;
	--Pi2: #472030;
	--Pi3: #76304b;
	--Pi4: #a73e65;
	--Pi5: #d44e7d;
	--Pi5_t: #d44e7d;
	--Pi6: #dc6d94;
	--Pi7: #e38caa;
	--Pi8: #ebabc1;
	--Pi9: #f2cad8;
	--Pi10: #fae9ef;
	--Ma0: #261525;
	--Ma1: #2e182d;
	--Ma2: #461c43;
	--Ma3: #72296c;
	--Ma4: #a13396;
	--Ma5: #cb41bb;
	--Ma6: #d462c7;
	--Ma7: #dd83d3;
	--Ma8: #e6a4de;
	--Ma9: #efc5ea;
	--Ma10: #f8e6f6;
	--Re0: #261314;
	--Re1: #2e1617;
	--Re2: #471a1c;
	--Re3: #742728;
	--Re4: #a63131;
	--Re5: #d1403e;
	--Re6: #d9615f;
	--Re7: #e18281;
	--Re8: #e9a3a2;
	--Re9: #f1c5c4;
	--Re10: #f9e5e5;
	--Or0: #28180f;
	--Or1: #301b10;
	--Or2: #4a230e;
	--Or3: #783610;
	--Or4: #a9490d;
	--Or5: #d66011;
	--Or6: #dd7c3a;
	--Or7: #e49764;
	--Or8: #ebb38d;
	--Or9: #f2ceb6;
	--Or10: #faeadf;
	--Ye0: #2a1e0f;
	--Ye1: #342410;
	--Ye2: #4d300b;
	--Ye3: #7c4c08;
	--Ye4: #ad6800;
	--Ye5: #db8700;
	--Ye6: #e19c2c;
	--Ye7: #e7b158;
	--Ye8: #eec584;
	--Ye9: #f4dab1;
	--Ye10: #faefdd;
	--Ly0: #2a2310;
	--Ly1: #332a11;
	--Ly2: #49390c;
	--Ly3: #745909;
	--Ly4: #a27c00;
	--Ly5: #cca000;
	--Ly6: #d5b02c;
	--Ly7: #dec158;
	--Ly8: #e7d184;
	--Ly9: #efe2b1;
	--Ly10: #f8f2dd;
	--Lg0: #19220f;
	--Lg1: #1e2911;
	--Lg2: #273c0e;
	--Lg3: #3c600f;
	--Lg4: #50840b;
	--Lg5: #67a70e;
	--Lg6: #81b638;
	--Lg7: #9cc562;
	--Lg8: #b6d58b;
	--Lg9: #d0e4b5;
	--Lg10: #ebf3df;
	--Gr0: #102017;
	--Gr1: #11271b;
	--Gr2: #123923;
	--Gr3: #175c34;
	--Gr4: #198042;
	--Gr5: #1fa251;
	--Gr6: #46b26f;
	--Gr7: #6dc28d;
	--Gr8: #93d2ab;
	--Gr9: #bae2c9;
	--Gr10: #e1f3e8;
	--Cy0: #0c1f20;
	--Cy1: #0d2627;
	--Cy2: #093739;
	--Cy3: #085b5c;
	--Cy4: #028080;
	--Cy5: #03a29f;
	--Cy6: #2fb2b0;
	--Cy7: #5ac2c0;
	--Cy8: #86d2d1;
	--Cy9: #b2e2e1;
	--Cy10: #ddf3f3;
	--Lb0: #0a1b23;
	--Lb1: #0b202a;
	--Lb2: #082d40;
	--Lb3: #064a69;
	--Lb4: #006996;
	--Lb5: #0087bd;
	--Lb6: #2c9cc8;
	--Lb7: #58b1d4;
	--Lb8: #84c5df;
	--Lb9: #b1dbeb;
	--Lb10: #ddeff6;
	--Bl0: #151826;
	--Bl1: #181c2f;
	--Bl2: #1f2748;
	--Bl3: #2e3c76;
	--Bl4: #3b53a8;
	--Bl5: #4b6bd4;
	--Bl6: #6a85db;
	--Bl7: #899ee3;
	--Bl8: #a9b8ea;
	--Bl9: #c8d2f2;
	--Bl10: #e7ebf9;
	--Pu0: #1d1628;
	--Pu1: #221a31;
	--Pu2: #31214c;
	--Pu3: #4e317d;
	--Pu4: #6d3fb1;
	--Pu5: #8c50e0;
	--Pu6: #a06ee5;
	--Pu7: #b48deb;
	--Pu8: #c8abf0;
	--Pu9: #dbc9f5;
	--Pu10: #f0e8fb;
	--Br0: #211d1b;
	--Br1: #282320;
	--Br2: #382f2a;
	--Br3: #59483f;
	--Br4: #7a6154;
	--Br5: #9a7c6a;
	--Br6: #ac9384;
	--Br7: #bda99e;
	--Br8: #cebfb7;
	--Br9: #e0d7d1;
	--Br10: #f2eeeb;
	--Si0: #212325;
	--Si1: #27292c;
	--Si2: #36393f;
	--Si3: #535962;
	--Si4: #6f7987;
	--Si5: #8c99aa;
	--Si6: #a0abb9;
	--Si7: #b4bcc7;
	--Si8: #c8ced6;
	--Si9: #dce0e5;
	--Si10: #f0f2f4
`,i.AH`
	--bilibili-pink: #FB7299;
	--bilibili-blue: #23ADE5;
	--bilibili-green: #6dc781;
	--bilibili-purple: var(--paper-deep-purple-700);
	--bilibili-gray: #F4F4F4;
	--google-red-100: #f4c7c3;
	--google-red-300: #e67c73;
	--google-red-500: #db4437;
	--google-red-700: #c53929;
	--google-blue-100: #c6dafc;
	--google-blue-300: #7baaf7;
	--google-blue-500: #4285f4;
	--google-blue-600: #1a73e8;
	--google-blue-700: #3367d6;
	--google-green-100: #b7e1cd;
	--google-green-300: #57bb8a;
	--google-green-500: #0f9d58;
	--google-green-700: #0b8043;
	--google-yellow-100: #fce8b2;
	--google-yellow-300: #f7cb4d;
	--google-yellow-500: #f4b400;
	--google-yellow-700: #f09300;
	--google-grey-50: #f8f9fa;
	--google-grey-100: #f5f5f5;
	--google-grey-300: #e0e0e0;
	--google-grey-400: #bdc1c6;
	--google-grey-500: #9e9e9e;
	--google-grey-700: #616161;
	--paper-red-50: #ffebee;
	--paper-red-100: #ffcdd2;
	--paper-red-200: #ef9a9a;
	--paper-red-300: #e57373;
	--paper-red-400: #ef5350;
	--paper-red-500: #f44336;
	--paper-red-600: #e53935;
	--paper-red-700: #d32f2f;
	--paper-red-800: #c62828;
	--paper-red-900: #b71c1c;
	--paper-red-a100: #ff8a80;
	--paper-red-a200: #ff5252;
	--paper-red-a400: #ff1744;
	--paper-red-a700: #d50000;
	--paper-pink-50: #fce4ec;
	--paper-pink-100: #f8bbd0;
	--paper-pink-200: #f48fb1;
	--paper-pink-300: #f06292;
	--paper-pink-400: #ec407a;
	--paper-pink-500: #e91e63;
	--paper-pink-600: #d81b60;
	--paper-pink-700: #c2185b;
	--paper-pink-800: #ad1457;
	--paper-pink-900: #880e4f;
	--paper-pink-a100: #ff80ab;
	--paper-pink-a200: #ff4081;
	--paper-pink-a400: #f50057;
	--paper-pink-a700: #c51162;
	--paper-purple-50: #f3e5f5;
	--paper-purple-100: #e1bee7;
	--paper-purple-200: #ce93d8;
	--paper-purple-300: #ba68c8;
	--paper-purple-400: #ab47bc;
	--paper-purple-500: #9c27b0;
	--paper-purple-600: #8e24aa;
	--paper-purple-700: #7b1fa2;
	--paper-purple-800: #6a1b9a;
	--paper-purple-900: #4a148c;
	--paper-purple-a100: #ea80fc;
	--paper-purple-a200: #e040fb;
	--paper-purple-a400: #d500f9;
	--paper-purple-a700: #aa00ff;
	--paper-deep-purple-50: #ede7f6;
	--paper-deep-purple-100: #d1c4e9;
	--paper-deep-purple-200: #b39ddb;
	--paper-deep-purple-300: #9575cd;
	--paper-deep-purple-400: #7e57c2;
	--paper-deep-purple-500: #673ab7;
	--paper-deep-purple-600: #5e35b1;
	--paper-deep-purple-700: #512da8;
	--paper-deep-purple-800: #4527a0;
	--paper-deep-purple-900: #311b92;
	--paper-deep-purple-a100: #b388ff;
	--paper-deep-purple-a200: #7c4dff;
	--paper-deep-purple-a400: #651fff;
	--paper-deep-purple-a700: #6200ea;
	--paper-indigo-50: #e8eaf6;
	--paper-indigo-100: #c5cae9;
	--paper-indigo-200: #9fa8da;
	--paper-indigo-300: #7986cb;
	--paper-indigo-400: #5c6bc0;
	--paper-indigo-500: #3f51b5;
	--paper-indigo-600: #3949ab;
	--paper-indigo-700: #303f9f;
	--paper-indigo-800: #283593;
	--paper-indigo-900: #1a237e;
	--paper-indigo-a100: #8c9eff;
	--paper-indigo-a200: #536dfe;
	--paper-indigo-a400: #3d5afe;
	--paper-indigo-a700: #304ffe;
	--paper-blue-50: #e3f2fd;
	--paper-blue-100: #bbdefb;
	--paper-blue-200: #90caf9;
	--paper-blue-300: #64b5f6;
	--paper-blue-400: #42a5f5;
	--paper-blue-500: #2196f3;
	--paper-blue-600: #1e88e5;
	--paper-blue-700: #1976d2;
	--paper-blue-800: #1565c0;
	--paper-blue-900: #0d47a1;
	--paper-blue-a100: #82b1ff;
	--paper-blue-a200: #448aff;
	--paper-blue-a400: #2979ff;
	--paper-blue-a700: #2962ff;
	--paper-light-blue-50: #e1f5fe;
	--paper-light-blue-100: #b3e5fc;
	--paper-light-blue-200: #81d4fa;
	--paper-light-blue-300: #4fc3f7;
	--paper-light-blue-400: #29b6f6;
	--paper-light-blue-500: #03a9f4;
	--paper-light-blue-600: #039be5;
	--paper-light-blue-700: #0288d1;
	--paper-light-blue-800: #0277bd;
	--paper-light-blue-900: #01579b;
	--paper-light-blue-a100: #80d8ff;
	--paper-light-blue-a200: #40c4ff;
	--paper-light-blue-a400: #00b0ff;
	--paper-light-blue-a700: #0091ea;
	--paper-cyan-50: #e0f7fa;
	--paper-cyan-100: #b2ebf2;
	--paper-cyan-200: #80deea;
	--paper-cyan-300: #4dd0e1;
	--paper-cyan-400: #26c6da;
	--paper-cyan-500: #00bcd4;
	--paper-cyan-600: #00acc1;
	--paper-cyan-700: #0097a7;
	--paper-cyan-800: #00838f;
	--paper-cyan-900: #006064;
	--paper-cyan-a100: #84ffff;
	--paper-cyan-a200: #18ffff;
	--paper-cyan-a400: #00e5ff;
	--paper-cyan-a700: #00b8d4;
	--paper-teal-50: #e0f2f1;
	--paper-teal-100: #b2dfdb;
	--paper-teal-200: #80cbc4;
	--paper-teal-300: #4db6ac;
	--paper-teal-400: #26a69a;
	--paper-teal-500: #009688;
	--paper-teal-600: #00897b;
	--paper-teal-700: #00796b;
	--paper-teal-800: #00695c;
	--paper-teal-900: #004d40;
	--paper-teal-a100: #a7ffeb;
	--paper-teal-a200: #64ffda;
	--paper-teal-a400: #1de9b6;
	--paper-teal-a700: #00bfa5;
	--paper-green-50: #e8f5e9;
	--paper-green-100: #c8e6c9;
	--paper-green-200: #a5d6a7;
	--paper-green-300: #81c784;
	--paper-green-400: #66bb6a;
	--paper-green-500: #4caf50;
	--paper-green-600: #43a047;
	--paper-green-700: #388e3c;
	--paper-green-800: #2e7d32;
	--paper-green-900: #1b5e20;
	--paper-green-a100: #b9f6ca;
	--paper-green-a200: #69f0ae;
	--paper-green-a400: #00e676;
	--paper-green-a700: #00c853;
	--paper-light-green-50: #f1f8e9;
	--paper-light-green-100: #dcedc8;
	--paper-light-green-200: #c5e1a5;
	--paper-light-green-300: #aed581;
	--paper-light-green-400: #9ccc65;
	--paper-light-green-500: #8bc34a;
	--paper-light-green-600: #7cb342;
	--paper-light-green-700: #689f38;
	--paper-light-green-800: #558b2f;
	--paper-light-green-900: #33691e;
	--paper-light-green-a100: #ccff90;
	--paper-light-green-a200: #b2ff59;
	--paper-light-green-a400: #76ff03;
	--paper-light-green-a700: #64dd17;
	--paper-lime-50: #f9fbe7;
	--paper-lime-100: #f0f4c3;
	--paper-lime-200: #e6ee9c;
	--paper-lime-300: #dce775;
	--paper-lime-400: #d4e157;
	--paper-lime-500: #cddc39;
	--paper-lime-600: #c0ca33;
	--paper-lime-700: #afb42b;
	--paper-lime-800: #9e9d24;
	--paper-lime-900: #827717;
	--paper-lime-a100: #f4ff81;
	--paper-lime-a200: #eeff41;
	--paper-lime-a400: #c6ff00;
	--paper-lime-a700: #aeea00;
	--paper-yellow-50: #fffde7;
	--paper-yellow-100: #fff9c4;
	--paper-yellow-200: #fff59d;
	--paper-yellow-300: #fff176;
	--paper-yellow-400: #ffee58;
	--paper-yellow-500: #ffeb3b;
	--paper-yellow-600: #fdd835;
	--paper-yellow-700: #fbc02d;
	--paper-yellow-800: #f9a825;
	--paper-yellow-900: #f57f17;
	--paper-yellow-a100: #ffff8d;
	--paper-yellow-a200: #ffff00;
	--paper-yellow-a400: #ffea00;
	--paper-yellow-a700: #ffd600;
	--paper-amber-50: #fff8e1;
	--paper-amber-100: #ffecb3;
	--paper-amber-200: #ffe082;
	--paper-amber-300: #ffd54f;
	--paper-amber-400: #ffca28;
	--paper-amber-500: #ffc107;
	--paper-amber-600: #ffb300;
	--paper-amber-700: #ffa000;
	--paper-amber-800: #ff8f00;
	--paper-amber-900: #ff6f00;
	--paper-amber-a100: #ffe57f;
	--paper-amber-a200: #ffd740;
	--paper-amber-a400: #ffc400;
	--paper-amber-a700: #ffab00;
	--paper-orange-50: #fff3e0;
	--paper-orange-100: #ffe0b2;
	--paper-orange-200: #ffcc80;
	--paper-orange-300: #ffb74d;
	--paper-orange-400: #ffa726;
	--paper-orange-500: #ff9800;
	--paper-orange-600: #fb8c00;
	--paper-orange-700: #f57c00;
	--paper-orange-800: #ef6c00;
	--paper-orange-900: #e65100;
	--paper-orange-a100: #ffd180;
	--paper-orange-a200: #ffab40;
	--paper-orange-a400: #ff9100;
	--paper-orange-a700: #ff6500;
	--paper-deep-orange-50: #fbe9e7;
	--paper-deep-orange-100: #ffccbc;
	--paper-deep-orange-200: #ffab91;
	--paper-deep-orange-300: #ff8a65;
	--paper-deep-orange-400: #ff7043;
	--paper-deep-orange-500: #ff5722;
	--paper-deep-orange-600: #f4511e;
	--paper-deep-orange-700: #e64a19;
	--paper-deep-orange-800: #d84315;
	--paper-deep-orange-900: #bf360c;
	--paper-deep-orange-a100: #ff9e80;
	--paper-deep-orange-a200: #ff6e40;
	--paper-deep-orange-a400: #ff3d00;
	--paper-deep-orange-a700: #dd2c00;
	--paper-brown-50: #efebe9;
	--paper-brown-100: #d7ccc8;
	--paper-brown-200: #bcaaa4;
	--paper-brown-300: #a1887f;
	--paper-brown-400: #8d6e63;
	--paper-brown-500: #795548;
	--paper-brown-600: #6d4c41;
	--paper-brown-700: #5d4037;
	--paper-brown-800: #4e342e;
	--paper-brown-900: #3e2723;
	--paper-grey-50: #fafafa;
	--paper-grey-100: #f5f5f5;
	--paper-grey-200: #eeeeee;
	--paper-grey-300: #e0e0e0;
	--paper-grey-400: #bdbdbd;
	--paper-grey-500: #9e9e9e;
	--paper-grey-600: #757575;
	--paper-grey-700: #616161;
	--paper-grey-800: #424242;
	--paper-grey-900: #212121;
	--paper-grey-1000: #141414;
	--paper-blue-grey-50: #eceff1;
	--paper-blue-grey-100: #cfd8dc;
	--paper-blue-grey-200: #b0bec5;
	--paper-blue-grey-300: #90a4ae;
	--paper-blue-grey-400: #78909c;
	--paper-blue-grey-500: #607d8b;
	--paper-blue-grey-600: #546e7a;
	--paper-blue-grey-700: #455a64;
	--paper-blue-grey-800: #37474f;
`),c=i.DU`
  html,body {
    -ms-text-size-adjust: 100%; // 2
    -webkit-text-size-adjust: 100%; // 2
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
  body {
    margin: 0;
    font-size: 12px;
    ${o()};
    ${n};
    ${l};
    //background-color: var(--paper-grey-400)!important;
  }
  
  * {
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
  }

  .bilibili-helper-2-icon-bilibili {
    padding: 0 4px;
    width: fit-content!important;
    vertical-align: baseline!important;
    //color: var(--bilibili-pink);
  }

  .bilibili-helper-2-icon-acghelper {
    padding: 0 4px;
    width: fit-content!important;
    //color: var(--bilibili-pink);
  }
  
  .button {
    .primary {
      .bilibili-helper-2-icon-bilibili, .bilibili-helper-2-icon-acghelper {
        color: var(--bilibili-gray);
      }
    }
    .border {
      .bilibili-helper-2-icon-bilibili, .bilibili-helper-2-icon-acghelper {
        color: var(--bilibili-pink);
      }
    }
    
  }
  
  @media (prefers-color-scheme: dark) {
    * {
      &::-webkit-scrollbar-thumb {
        background-color: black;
      }
    }
  }
`,t=i.Ay.div.attrs((({hide:e})=>({className:e?"bound-guide hide":"bound-guide"})))`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: inset var(--bilibili-pink) 0 0 0px 20px;
  pointer-events: none;
  z-index: 10000;
  transition: box-shadow 1s;

  
  &::after {
    content: '';
    position: absolute;
    margin: 0px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    border-radius: 50px;
    box-sizing: content-box;
    border: 20px solid var(--bilibili-pink);
    box-shadow: inset #eee 0 0 12px;
    z-index: -1;
    transition: border-width 1s, width 1s, height 1s, border-radius 1s, box-shadow 1s;
  }
  
  &.hide {
    box-shadow: inset var(--bilibili-pink) 0 0 0px 0px;
    ::after {
      border-width: 0px;
      width: 100%;
      height: 100%;
      border-radius: 0;
      box-shadow: inset transparent 0 0 20px;
    }
  }
`,g=i.Ay.h1`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0px);
  width: max-content;
  padding: 12px 20px 12px 20px;
  font-size: 14px;
  background-color: var(--bilibili-pink);
  border-radius: 0 0 15px 15px;
  color: #fff;
  transition: transform 1s;
  
  .hide & {
    transform: translate(-50%, -44px);
  }
`,u=function(){const[e,a]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{setTimeout((()=>{a(!0)}),3e3)}),[]),r.createElement(t,{hide:e},r.createElement(c,null),r.createElement(g,null,"ACG\u52a9\u624b - \u8d26\u53f7\u7ed1\u5b9a\u6210\u529f"))},s={UNBOUND:0,BINDING:1,BOUND:2,REBIND:3},y=(s.BINDING,s.UNBOUND,s.REBIND,()=>new Promise((e=>{chrome.runtime.sendMessage({command:"queryBound"},(a=>{e(a)}))}))),h=()=>{y().then((e=>{if(e===s.BINDING||e===s.BOUND)if(e===s.BINDING)setTimeout(h,1e3);else if(e===s.BOUND){const e=document.createElement("div");e.id="root",document.body.append(e),(0,f.render)(r.createElement(r.Fragment,null,r.createElement(u,null)),e)}}))};h()}},a={};function p(r){var f=a[r];if(void 0!==f)return f.exports;var i=a[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,p),i.loaded=!0,i.exports}p.m=e,(()=>{var e=[];p.O=(a,r,f,i)=>{if(!r){var l=1/0;for(n=0;n<e.length;n++){for(var[r,f,i]=e[n],b=!0,d=0;d<r.length;d++)(!1&i||l>=i)&&Object.keys(p.O).every((e=>p.O[e](r[d])))?r.splice(d--,1):(b=!1,i<l&&(l=i));if(b){e.splice(n--,1);var o=f();void 0!==o&&(a=o)}}return a}i=i||0;for(var n=e.length;n>0&&e[n-1][2]>i;n--)e[n]=e[n-1];e[n]=[r,f,i]}})(),(()=>{p.n=e=>{var a=e&&e.__esModule?()=>e["default"]:()=>e;return p.d(a,{a}),a}})(),(()=>{p.d=(e,a)=>{for(var r in a)p.o(a,r)&&!p.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}})(),(()=>{p.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{p.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a)})(),(()=>{p.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{p.j=2})(),(()=>{var e={2:0};p.O.j=a=>0===e[a];var a=(a,r)=>{var f,i,[l,b,d]=r,o=0;if(l.some((a=>0!==e[a]))){for(f in b)p.o(b,f)&&(p.m[f]=b[f]);if(d)var n=d(p)}for(a&&a(r);o<l.length;o++)i=l[o],p.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return p.O(n)},r=self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})(),(()=>{p.nc=void 0})();var r=p.O(void 0,[236],(()=>p(2021)));r=p.O(r)})();