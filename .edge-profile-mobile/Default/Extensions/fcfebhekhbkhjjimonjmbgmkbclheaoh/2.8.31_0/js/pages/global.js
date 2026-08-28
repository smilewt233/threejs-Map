(()=>{"use strict";var r={5836:(r,a,o)=>{const t={iframeDynamic:/t\.bilibili\.com\/pages\/nav\/index_new/,iframeMessage:/message\.bilibili.com\/pages\/nav\/index_new_pc_sync/,home:/^https?:\/\/www\.bilibili\.com\/(\?(spm_id_from|uid)(.*)$|$)/,dynamic:/^https?:\/\/(t\.bilibili\.com\/|www\.bilibili\.com\/opus\/)/,video:/^https?:\/\/www\.bilibili\.com\/(video|bangumi|list)\/(.*)/,qn:/^https?:\/\/member.bilibili.com\/mall\/upower-manage\/qa\/list/,livePlay:/^https?:\/\/live\.bilibili\.com\/(blanc\/)?([0-9]+)/,live:/^https?:\/\/live\.bilibili\.com\//,readCV:/^https?:\/\/www\.bilibili\.com\/read\/cv(.*)/i,readRank:/^https?:\/\/www\.bilibili\.com\/read\/ranking(.*)/,read:/^https?:\/\/www\.bilibili\.com\/read\//,space:/^https?:\/\/space\.bilibili\.com\//,message:/^https?:\/\/message\.bilibili\.com\//,watchLater:/^https?:\/\/www\.bilibili\.com\/watchlater\//,history:/^https?:\/\/www\.bilibili\.com(?:\/account)?\/history/,search:/^https?:\/\/search\.bilibili\.com\//,blackboardComment:/^https:\/\/www\.bilibili\.com\/blackboard\/comment-(.*)\.html/,cheese:/^https?:\/\/www\.bilibili\.com\/cheese\/play\//,subCategory:/^https?:\/\/www\.bilibili\.com\/v\/([\S]+)\//},e=r=>{for(const a in t){const o=new RegExp(t[a]);if(o.test(r))return a}return!1};var n=o(6540),i=o(961),l=o(5999);const p=l.DU`

  // 课程标题
  .archive-title-box, .publishers-head,
  .publisher-pic-card .publisher-name,
    // 侧边栏
  .edu-play-right .rect-title,
    // 章节选择
  .nav-more-drop,
    // 购买须知标题
  .purchase-note-title,
    // 侧边栏推荐视频标题
  .season-title,
    // 问答栏标题
  .faq-title {
    color: var(--dark-font-0) !important;
  }

  .main-pay-wrapper .main-pay {
    box-shadow: 0 0 8px var(--dark-4, #e5e9ef) !important;
  }

  // 分割线
  .left-archive-tool-box-bottom-line,
  .archive-title-and-introduction-bottom {
    background-color: var(--divider) !important;
  }

  // 购买须知
  .guide-purchase-note {
    color: var(--dark-font-1) !important;
  }

  // 导航条
  header.tab-choose {
    background-color: var(--bg) !important;
    color: var(--dark-font-0) !important;
    box-shadow: 0 0 8px var(--dark-0, #e5e9ef) !important;

    .tab-item:not(.active) p {
      color: var(--dark-font-0) !important;
    }
  }

  .card-nav {
    background-color: var(--dark-1) !important;

    p {
      color: var(--dark-font-3) !important;
    }
  }

  .section-card-list {

    .section-item {
      background-color: var(--dark-1) !important;

      .no, .season-title-ellipsis, .title-hover, .season-title {
        color: var(--dark-font-3) !important;
      }
    }
  }

  .guide-brief {
    border-bottom-color: var(--divider) !important;

    img {
      filter: brightness(.6);
    }
  }

  .guide-box .guide-faq {
    border-bottom-color: var(--divider) !important;

    .faq-list {
      background-color: var(--dark-0) !important;
      color: var(--dark-font-1) !important;

      .question {
        border-bottom-color: var(--divider) !important;
      }
    }
  }
`;new Map;const d=r=>{let a=document.getElementById(`bilibili_style_link_${r}`);a?.remove()},c=(r=String(1e3*Math.random()).substring(2,8),a,o=!1,t=!1)=>{let e=document.getElementById(`bilibili_style_link_${r}`);if(e){if(!o)return void e.setAttribute("href",a);e.remove(),e=null}if(!e){const o=document.createElement("link");o.setAttribute("id",`bilibili_style_link_${r}`),(t?document.body:document.head).appendChild(o),o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css"),o.setAttribute("href",a)}},m=l.AH`
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
`,b=(l.AH`
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
`,()=>{try{return"undefined"!==typeof InstallTrigger}catch(r){return!1}}),v=(b(),()=>{if(self?.external&&self?.external.GetRunPath&&self?.external.GetSID){let r=external.GetRunPath(external.GetSID(window));return r=r.toLowerCase(),r.indexOf("360se.exe")>-1||r.indexOf("360ent")>-1}return!1}),k=function(r,a){let o=self?.navigator?.mimeTypes;for(let t in o)if(o[t][r]===a)return!0;return!1},s=()=>!!k("type","application/futuresplash")||(!!(self?.chrome&&self.chrome.webstorePrivate&&self.chrome.webstorePrivate.beginInstallWithManifest3)||!!~navigator.userAgent.toLowerCase().indexOf("360ee"));o(4053);const u="(\\*|http|https|file|ftp)",f="(\\*|(?:\\*\\.)?(?:[^/*]+))?",g="(.*)",h=new RegExp("^"+u+"://"+f+"/"+g+"$");function y(r){const a=h.exec(r);if(!a)return null;const o=a[1],t=a[2],e=a[3];return t||"file"===o?w(o,t,e):null}function w(r,a,o){let t="^";return t+="*"===r?"(http|https)":r,t+="://",a&&("*"===a?t+="([^/]+?)":(t+="(",a.match(/^\*\./)&&(t+="[^/]*?",a=a.substring(2)),t+=a.replace(/\./g,"\\.")+")")),o?"*"===o?t+="(/.*)?":(o=o.replace(/\?/g,"\\?"),"/"!==o[0]?(t+="(/",t+=o.replace(/\*/g,".*?"),t+=")"):t+=o.replace(/\*/g,".*?")):t+="\\/",t+="$",new RegExp(t)}self.parse=y;b();v()||s();const _=r=>chrome.runtime.getURL(r),x=((()=>{navigator.userAgentData?navigator.userAgentData.platform:/Mac OS/.test(navigator.userAgent)})(),l.DU`
	html {
		--dark-0: #101010;
		--dark-1: #141414;
		--dark-2: #131313;
		--dark-3: #1f1f1f;
		--dark-4: #2b2b2b;
		--dark-5: #333;
		--dark-6: #393939;
		--dark-card: #151515;
		
		--bg: #1c2022;
		--divider: rgb(47 47 47 / 75%);
		
		--dark-font-0: #e8e8e8;
		--dark-font-1: #99a2aa;
		--dark-font-2: #879199;
		--dark-font-3: #d9d9d9;
		background-color: var(--bg1);
	}
	
	:root {
		${m};
	}
	
	body.bilibili-helper-dark-mode {
		background-color: var(--bg) !important;
		color: var(--dark-font-0) !important;
	}
`),B=l.DU`
  .international-header .mini-type, .mini-header {
    background: var(--dark-card) !important;
  }

  .nav-link .nav-link-ul .nav-link-item .link,
  .nav-user-center .user-con .item .name {
    color: var(--dark-font-0) !important;
  }
`,D=l.DU`
  // 搜索框
  .international-header .nav-search #nav_searchform {
    background: var(--dark-3) !important;
    border-color: var(--dark-3) !important;

    input:focus {
      color: var(--dark-font-0) !important;
    }

    .nav-search-btn {
      background: var(--dark-4) !important;
    }
  }

  .international-header .nav-search-box {
    .header-search-suggest {
      border-color: var(--dark-1) !important;
      background: var(--dark-3) !important;
      color: var(--dark-font-2) !important;

      .trending-item {
        :hover {
          background-color: var(--dark-3) !important;
        }
      }

      .rank.top, .rank.search-rank-top {
        color: var(--dark-font-3) !important;
      }
    }
  }

  .i-frame {
    &::before {
      background-color: var(--bg) !important;
    }

    iframe {
      background-color: unset !important;
    }
  }

  .bilibili-search-history, .bilibili-search-suggest {
    background: var(--dark-card) !important;
    border-color: var(--dark-card) !important;

    li {
      &:hover, &.focus {
        background-color: var(--dark-3) !important;
      }

      a {
        color: var(--dark-font-0) !important;
      }
    }
  }

  //弹出Popper
  .channel-menu-mini, .van-popper-avatar, .van-popper-avatar .level-intro, .van-popper-avatar .coins .info .login-award, .van-popper-avatar .lang-change .lang-intro,
  .van-popper-vip, .van-popper-favorite, .van-popper-favorite .view-all, .van-popper-favorite .play-all, .van-popper-history, .van-popper-upload {
    background-color: var(--dark-3) !important;
  }

  //文字 轻
  .van-popper-avatar .level-info .progress, .van-popper-avatar .count-item .item-key,
  .van-popper-favorite .tab-item--normal, .van-popper-favorite .tab-item--normal .num, .van-popper-favorite .empty-list,
  .header-video-card .video-info .info,
  .header-video-card .video-info .desc,
  .van-popper-history .tab-item,
  .van-popper-history .date-title {
    color: var(--dark-font-1) !important;
  }

  //文字 重
  .van-popover a,
  .van-popper-avatar .level-info .grade, .van-popper-avatar .level-intro, .van-popper-avatar .coins,
  .van-popper-avatar .lang-change .lang-title, .van-popper-avatar .count-item .item-value, .van-popper-avatar .links .link-title,
  .van-popper-avatar .lang-change .lang-intro, .van-popper-avatar .logout, .van-popper-avatar .logout span:hover,
  .van-popper-avatar .nickname,
  .van-popper-avatar .coins .contact-tips,
  .vip-m .bubble-traditional .recommand .title,
  .van-popper-favorite .view-all, .van-popper-favorite .play-all,
  .header-video-card .video-info .line-1,
  .header-video-card .video-info .line-2,
  .van-popper-history .tab-item.tab-item--active,
  .van-popper-history .tab-item.tab-item--active:hover {
    color: var(--dark-font-0) !important;
  }

  //框线
  .van-popper-avatar .coins,
  .van-popper-avatar .counts,
  .van-popper-avatar .links,
  .van-popper-avatar .lang-change,
  .channel-menu-mini .r-box,
  .van-popper-favorite .tabs-panel,
  .van-popper-favorite .play-all,
  .van-popper-history .tab-header {
    border-color: var(--divider) !important;
  }

  //hover蓝
  .van-popover a:hover,
  .van-popper-avatar .coins .info a:hover,
  .van-popper-avatar .counts .count-item:hover .item-key,
  .van-popper-avatar .counts .count-item:hover .item-value .item-num,
  .van-popper-avatar .level-intro__link,
  .van-popper-history .tab-item:hover {
    color: #00A1D6 !important;
  }

  //hover深
  .channel-menu-mini .box a:hover,
  .van-popper-avatar .links .link-item:hover,
  .van-popper-avatar .logout a:hover,
  .van-popper-avatar .lang-change .lang-item:hover,
  .van-popper-avatar .lang-change .lang-intro-item:hover,
  .van-popper-avatar .logout span:hover,
  .van-popper-favorite .tab-item--normal:hover,
  .van-popper-favorite .view-all:hover,
  .van-popper-favorite .play-all:hover,
  .header-video-card:hover,
  .van-popper-upload .upload-item:hover {
    background: var(--dark-2) !important;
  }

  //经验条
  .van-popper-avatar .level-bar {
    background: var(--dark-0) !important;
  }

  //Card顶上的小尖尖
  .van-popper-vip, .van-popper-favorite, .van-popper-history, .van-popper-upload, .popover-app-download {
    .popper__arrow, .popper__arrow::after {
      border-bottom-color: var(--dark-3) !important;
    }
  }

  //下载App
  .popover-app-download {
    background: url(${_("/statics/imgs/app-download.png")}) !important;
    background-size: cover !important;

    .txt {
      color: var(--dark-font-0) !important;
    }
  }

  //历史查看更多
  .van-popper-history .view-all {
    background: var(--dark-5) !important;
  }

  //邮箱、手机绑定的悬浮提示框
  .van-popper-avatar .coins .contact-tips {
    background-color: var(--dark-5) !important;
    border-color: var(--dark-5) !important;
    //箭头
    &::after {
      transform: rotate(45deg);
      background: var(--dark-5) !important;
    }

    &.email-tips::after {
      right: -5px !important;
    }

    &.phone-tips::after {
      left: -5px !important;
    }
  }
`,E=l.DU`
  .international-footer {
    background-color: var(--bg) !important;

    .link-box .link-item {
      border-color: var(--divider);

      .bt {
        color: var(--dark-font-2);
      }
    }

    .link-box .link-item.link-c p, .link-box .link-item.link-c a.weixin:hover p,
    a, .partner, .partner a {
      color: var(--dark-font-0);
    }
  }
`,C=l.DU`
  .bili-footer {
    .footer-wrp {
      background-color: var(--bg) !important;
      padding-bottom: 70px !important;
    }

    .boston-postcards li {
      border-color: var(--divider);

      .tips {
        color: var(--dark-font-2);
      }
    }

    a {
      color: var(--dark-font-0);
    }

    .partner a:hover {
      color: #00a1d6 !important;
    }
  }
`,G=l.DU`
  .user-card, .user-card-m, .userinfo-content {
    background: var(--dark-3) !important;

    .face {
      border-color: var(--dark-3) !important;
    }

    .btn-box {
      a.like {
        color: #fff !important;
        border-color: #00a1d6 !important;
        background-color: #00a1d6 !important;
      }

      a.like:hover {
        border-color: #00b5e5 !important;
        background-color: #00b5e5 !important;
      }

      a, a.liked {
        background: var(--dark-5) !important;
        color: var(--dark-font-1) !important;
        border-color: var(--dark-5) !important;

        &:hover {
          background: var(--dark-4) !important;
        }
      }
    }

    .info {
      .user .name, .social {
        color: var(--dark-font-1) !important;

        &.vip, &.vip-red-name {
          color: #fb7299 !important;
        }

        &:hover {
          color: #00A1D6 !important;
        }
      }

      .social a, .sign {
        color: var(--dark-font-1) !important;
      }
    }
  }

  .user-card, .user-card-m, .userinfo-wrapper {
    border-color: var(--dark-3) !important;
  }

  .user-card-m .loading div {
    background: var(--dark-3) !important;
  }

  .nameplate-card {
    background: var(--dark-3) !important;
    border-color: var(--dark-3) !important;

    .nameplate-text {
      border-color: var(--dark-1) !important;

      .n-name, .n-title {
        color: var(--dark-font-0) !important;
      }
    }
  }
`,A="\n    .international-header a {\n      color: var(--dark-font-0);\n    }\n    .tab-line-itnl {\n      border-color: var(--divider)!important;\n    }\n    .page-tab .con li {\n      border-color: var(--bg)!important;\n    }\n    .van-popover.van-popper-channel {\n      background: var(--dark-2)!important;\n      border-color: var(--dark-2)!important;\n      .popper__arrow, .popper__arrow::after {\n        border-top-color: var(--dark-2)!important;\n        border-bottom-color: var(--dark-2)!important;\n      }\n    }\n    .bili-banner .taper-line {\n      z-index: 2!important;\n      height: 180px!important;\n    }\n    ",L="\n    .b-head {\n      color: var(--dark-font-3)!important;\n    }\n    .bili-comment.browser-pc {\n\t\tbackground-color: transparent !important;\n\t}\n\t.reply-box.fixed-box {\n        background-color: var(--dark-card) !important;\n\t}\n    .bb-comment {\n      background-color: unset!important;\n      .comment-header {\n        border-color: var(--divider)!important;\n        .tabs-order li:not(.on):not(:hover) {\n          color: var(--dark-font-3)!important;\n        }\n      }\n      .comment-send .comment-emoji {\n        border: 1px solid var(--dark-3);\n        background-color: var(--dark-3);\n      }\n      .comment-list .list-item {\n        .user-face .hot-follow .follow-btn.followed {\n          background-color: var(--dark-5);\n          color: var(--dark-font-2);\n        }\n        .con {\n          border-color: var(--divider)!important;\n          .user .name {\n            color: var(--dark-font-1);\n          }\n          .text, div .text-area .text-content {\n            color: var(--dark-font-3);\n          }\n          .vote-container {\n            border-color: var(--dark-4)!important;\n            &:hover .text-area {\n              box-shadow: 0 3px 10px 0 var(--dark-1)!important;\n            }\n          }\n          .info {\n            .reply:hover {\n              background: var(--dark-1);\n            }\n            .reply-tags span {\n              background-color: var(--dark-1) !important;\n              color: var(--dark-font-1) !important;\n            }\n            .operation .opera-list {\n              background-color: var(--dark-3);\n              color: var(--dark-font-0);\n              li:hover {\n                background-color: var(--dark-2);\n              }\n            }\n          }\n          .reply-box {\n            .reply-item {\n              border-color: var(--dark-4);\n              .reply-con {\n                .user .text-con {\n                  color: var(--dark-font-0);\n                }\n                .info .reply:hover {\n                  background: var(--dark-1);\n                }\n              }\n            }\n            .view-more {\n              color: var(--dark-font-1);\n              .btn-more:hover {\n                background: var(--dark-1);\n              }\n            }\n          }\n        }\n      }\n      .bottom-page.center {\n        border-color: var(--dark-2)!important;\n      }\n      .paging-box {\n        span.result, span.dian {\n          color: var(--dark-font-1);\n        }\n        a.tcd-number, a.next, a.prev {\n          color: var(--dark-font-1);\n          &:hover {\n            color: #00a1d6;\n          }\n        }\n      }\n      .paging-box-big {\n        a.tcd-number, a.next, a.prev {\n          color: var(--dark-font-1);\n          background-color: var(--dark-2);\n          border-color: var(--dark-3);\n          &:hover {\n            color: white;\n            background-color: #00a1d6;\n            border-color: var(--dark-3);\n          }\n        }\n        .dian, .dian:hover {\n          color: var(--dark-font-1);\n          background-color: var(--bg);\n          border-color: var(--bg);\n        }\n        .page-jump {\n          input {\n            border-color: var(--dark-3);\n            background-color: var(--dark-2);\n            color: white;\n          }\n        }\n      }\n    }\n    .textarea-container {\n      textarea {\n        background-color: var(--dark-2)!important;\n        border-color: var(--dark-2)!important;\n        color: var(--dark-font-1)!important;\n      }\n      &:hover textarea, &.focus textarea {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    \n    .emoji-box {\n      background: var(--dark-3)!important;\n      border-color: var(--dark-3)!important;\n      box-shadow: 0 11px 12px 0 var(--dark-1)!important;\n      &:before {\n        background: unset!important;\n      }\n      .emoji-text {\n        color: var(--dark-font-3)!important;\n      }\n      .emoji-text:hover {\n        background-color: var(--dark-5)!important;\n      }\n      .emoji-notice {\n        background-color: var(--dark-3)!important;\n        border-color: var(--dark-3)!important;\n        color: var(--dark-font-3)!important;\n      }\n      .emoji-tabs {\n        background: var(--dark-4)!important;\n        .tab-link.on {\n          background: var(--dark-3)!important;\n        }\n        .tab-link:hover {\n          background: var(--dark-5)!important;\n        }\n        .emoji-tab-slider {\n          .prev {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/left-arrow.svg)!important;\n          }\n          .next {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/right-arrow.svg)!important;\n          }\n          .prev.on {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/left-arrow-disable.svg)!important;\n          }\n          .next.on {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/right-arrow-disable.svg)!important;\n          }\n        }\n      }\n    }\n    .reply-box-warp {\n        border-color: var(--line_regular)!important;\n    }\n    ",F=`\n    //\u6587\u5b57\n    .text-area .view-danmaku {\n      color: var(--dark-font-2)!important;\n    }\n    \n    .text-area .content,\n    .bili-dyn-card-video__title,\n    .bili-dyn-card-pgc__title,\n    .imagesbox .boost-control li,\n    .text-box .count-box  .text,\n    .bili-dyn-card-article__desc,\n    .item-detail .text,\n    .desc,\n    .bili-rich-text__content {\n      color: var(--dark-font-1)!important;\n    }\n    \n    .text-area .title,\n    .user-name,\n    .user-name a,\n    .text-box .title,\n    .bili-dyn-card-article__title,\n    .bili-dyn-card-live__title,\n    .bili-dyn-title__text,\n    .dyn-vote__detail__title,\n    .vote-title, // \u62bd\u5956\u6807\u9898\n    .dyn-additional-common__detail__title,\n    .dyn-goods__one__detail__name {\n      color: var(--dark-font-0)!important;\n    }\n    \n    .user-name.big-vip a {\n      color: #fb7299!important;\n    }\n    \n    .imagesbox .boost-control li:hover {\n      color: #23ade5!important;\n    }\n    \n    .video-container.can-hover:hover .text-area .title,\n    .bili-dyn-card-video:hover .bili-dyn-card-video__body .bili-dyn-card-video__title,\n    .bili-dyn-card-pgc:hover .bili-dyn-card-pgc__body .bili-dyn-card-pgc__title,\n    .bangumi-container.can-hover:hover .text-area .title,\n    .article-container:hover .text-area .title,\n    .bili-dyn-card-article:hover .bili-dyn-card-article__title,\n    .vote-container:hover .text-area .text-content {\n      color: #00a1d6!important;\n    }\n    \n    .dynamic-link-hover-bg:hover {\n      background: var(--dark-4)!important;\n    }\n    \n    //\u5173\u6ce8\u7684\u4eba\u70b9\u8d5e\n    .like-users-panel::before {\n      background: var(--dark-1)!important;\n    }\n    .like-users-panel {\n      color: var(--dark-font-2)!important;\n      .users-box {\n        color: var(--dark-font-1)!important;\n      }\n    }\n    .users-box .like-users-list:link, .users-box .like-users-list:visited {\n      color: var(--dark-font-1);\n    }\n    \n    //Card\u6309\u94ae\n    .card .more-panel, .bili-dyn-item__more .bili-popover {\n      background: var(--dark-3)!important;\n      color: var(--dark-font-0)!important;\n      border-color: var(--dark-3)!important;\n      -webkit-box-shadow: 0 1px 12px 0 var(--dark-3)!important;\n      box-shadow: 0 1px 12px 0 var(--dark-3)!important;\n      .bili-dyn-more__menu {\n        color: var(--dark-font-0)!important;\n      }\n      &:after, .bili-popover__arrow {\n        background: var(--dark-3)!important;\n        border-color: var(--dark-3)!important;\n      }\n    }\n    \n    //\u89c6\u9891Card, \u756a\u5267Card, \u6587\u7ae0Card, \u6536\u85cfCard\n    .video-container,\n    .bangumi-container,\n    .article-container,\n    .bili-dyn-card-article,\n    .live-container,\n    .media-list .content,\n    .bili-dyn-card-video,\n    .bili-dyn-card-live, .bili-dyn-card-live__body,\n    .bili-dyn-card-pgc,\n    .bili-dyn-content__orig__major,\n    .bili-dyn-card-pgc__body {\n      border-color: var(--dark-3)!important;\n      background: var(--dark-card)!important;\n    }\n    \n    .bili-dyn-card-vote,\n    .bili-dyn-card-link-common__wrap,\n    .reference .bili-dyn-card-link-common__wrap,\n    .bili-dyn-upower-lottery__card {\n      background: var(--dark-3)!important;\n    }\n    \n    // \u89c6\u9891Card\n    .bili-dyn-card-video__body {\n        background-color: var(--dark-3)!important;\n    }\n    \n    // \u62bd\u5956\n    .bili-popup__wrap {\n      background-color: var(--dark-3)!important;\n      color: var(--dark-font-0)!important;\n      border-color: var(--dark-3)!important;\n      .bili-popup__header {\n        border-color: var(--dark-2)!important;\n      }\n      .bili-popup__header__title {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    \n    #bp-app {\n      background-color: var(--dark-3)!important;\n      color: var(--dark-font-0)!important;\n      .result, .result-wrapper {\n        background-color: var(--dark-3) !important;\n        .prize-winner-block {\n          background-color: var(--dark-3) !important;\n        }\n        .row {\n          background-color: var(--dark-3)!important;\n          ::after {\n            border-color: var(--dark-3)!important;\n          }\n        }\n      }\n    }\n\n    // \u62bd\u5956\n    .vote-info-wrapper {\n      .vote-creator {\n        .vote-user-name {\n          color: var(--dark-font-0)!important;\n        }\n      }\n    }\n    .vote-options {\n      .option-li {\n        border-color: var(--dark-6)!important;\n      }\n    }\n    \n    //\u8f6c\u53d1Card\n    .repost, .reference {\n      background: var(--dark-0)!important;\n      .deleted {\n        background: unset!important;\n      }\n      .bili-dyn-content__orig__major {\n        background-color: inherit!important;\n      }\n    }\n    .dyn-card-opus {\n      .dyn-card-opus__title {\n        color: var(--dark-font-1) !important;\n      }\n    }\n    \n    // \u6295\u7968\n    .dyn-vote {\n      border-color: var(--dark-2)!important;\n      .dyn-vote__cover {\n        background-color: rgb(27 27 27)!important;\n      }\n      .dyn-vote__body {\n        background-color: var(--dark-2)!important;\n        :hover {\n              box-shadow: 0 3px 10px 0 var(--dark-2)!important;\n        }\n      }\n    }\n    \n    //\u56fe\u7247\u9884\u89c8Card\n    .imagesbox .boost-control, .imagesbox .boost-img {\n      background: var(--dark-3)!important;\n    }\n    \n    //\u6d3b\u52a8Card, \u6295\u7968Card, \u97f3\u4e50Card\n    .h5share-container, .vote-container, .music-container {\n      border-color: var(--dark-3)!important;\n    }\n    \n    //\u6536\u85cfCard\u56fe\u7247\u80cc\u666f\n    .media-list .content .cover-box {\n      background: var(--dark-card)!important;\n    }\n    \n    //Card\u9634\u5f71\n    .article-container:hover, .vote-container:hover, .h5share-container:hover, .music-container:hover {\n      .text-area {\n        -webkit-box-shadow: 0 3px 10px 0 var(--dark-1)!important;\n        box-shadow: 0 3px 10px 0 var(--dark-1)!important;\n      }\n    }\n    \n    //\u76f8\u5173\u4f5c\u54c1\n    .shop-panel {\n      .shop-list {\n        background: var(--dark-3)!important;\n      }\n    }\n    .dyn-reserve__card,\n    .dyn-goods__wrap {\n      background-color: var(--dark-card)!important;\n      .dyn-reserve__title {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    .bili-dyn-content__forw__additional {\n      .dyn-vote {\n        border-color: var(--dark-card)!important;\n        .dyn-vote__body {\n          background-color: var(--dark-3)!important;\n        }\n      }\n    }\n    .bili-dyn-list__item, .bili-dyn-item {\n      .bili-dyn-content__orig__additional {\n        .dyn-additional-common__wrap {\n          background-color: var(--dark-3)!important;\n        }\n      }\n    }\n    \n    \n    //\u8868\u60c5\u6309\u94ae\n    .comm-emoji {\n      border-color:  var(--dark-1)!important;\n      background-color: var(--dark-1)!important;\n    }\n    \n    //\u8bc4\u8bba\u8f6c\u53d1\n    .panel-area {\n      .forw-area {\n        background-color: unset!important;\n      }\n      ${L}\n    }\n    \n    //\u5f39\u51fa\u6846\n    .bp-popup-panel {\n      background: var(--dark-4)!important;\n      .title-ctnr .popup-title, .popup-content-ctnr, .popup-content-ctnr .recharge-success-box {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    \n    .dynamic-list-item-wrap, .forw-more {\n      border-color: var(--dark-2)!important;\n    }\n    \n    //\u5c55\u5f00\u76f8\u5173\u52a8\u6001 \n    .fold-box {\n      border-color: var(--divider)!important;\n    }\n    .bili-modal {\n      background-color: var(--dark-1)!important;\n      .bili-modal__title {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    `,S=l.AH`
  // 导航条
  .bili-header__bar .slide-down {
    
  }
`,P=l.DU`
  ${A}
  .home-slide .item, .card-pic a, .video-card-reco, .pic {
    &:before {
      z-index: 1;
    }
  }

  .video-card-common .card-pic a .count, .live-card .pic .count {
    z-index: 1;
    color: var(--dark-font-0);
  }

  .first-screen img, .storey-box img {
    filter: contrast(0.93) brightness(0.89);
  }

  a, .storey-title .no-link, .manga-panel .manga-list-box .manga-card .manga-title, .rank-header .name {
    color: var(--dark-font-0);
  }

  body, .storey-title .text-info, .storey-title .text-info a, .live-card .up .txt .desc {
    color: var(--dark-font-1);
  }

  .rank-wrap .number, .pgc-rank-wrap .number, .manga-rank-item .rank-number {
    background: var(--dark-4);
  }

  //按钮
  .bypb-window .online {
    background: var(--dark-5) !important;
    border-color: var(--dark-6) !important;
  }

  .exchange-btn .btn, .rank-header .more {
    background: var(--dark-5) !important;
    border-color: var(--dark-6) !important;
    color: var(--dark-font-1);

    &:hover {
      background: var(--dark-5) !important;
    }
  }

  .time-line .tl-link {
    background: var(--dark-5);
  }

  //联系客服
  .contact-help {
    background: var(--dark-4) !important;
    border-color: var(--dark-4) !important;
    box-shadow: 0 6px 10px 0 var(--dark-2) !important;
    color: var(--dark-font-1) !important;
  }

  //电梯
  .elevator {
    .ear {
      color: var(--dark-4);
    }

    .list-box {
      background: var(--dark-4) !important;
      border-color: var(--dark-6) !important;

      .item {
        background: var(--dark-4);
        color: var(--dark-font-0);

        &.sort, &.back-top {
          border-color: var(--dark-6) !important;
        }
      }
    }
  }

  ${S}
`,O=l.DU`
  ${A}
  html {
    background: unset !important;
    color: var(--dark-font-0);
  }

  .watch-later-list header {
    .s-btn {
      background: var(--bg);
    }

    .d-btn {
      background: var(--bg);
      border-color: var(--dark-6);
      color: var(--dark-font-2);
    }
  }

  .watch-later-list .list-box .av-item .av-about {
    border-color: var(--divider) !important;

    .t {
      color: var(--dark-font-0);
    }

    .info .user {
      color: var(--dark-font-1);
    }
  }

  .bili-dialog {
    color: unset !important;

    header {
      border-color: var(--dark-1) !important;
    }

    .con {
      background: var(--dark-3) !important;

      .btn-cancel {
        background-color: var(--dark-5) !important;

        &:not(:hover) {
          color: var(--dark-font-1) !important;
          border-color: var(--dark-5) !important;
        }
      }
    }
  }
`,M=l.DU`
  .history-wrap .b-head {
    .b-head-t {
      color: var(--dark-font-0);
    }

    .history-btn .btn {
      border-color: #00a1d6 !important;
    }
  }
  .b-head-search_input {
    background: initial;
    color: var(--dark-font-0);
  }

  .history-list {
    .l-info {
      border-color: var(--dark-6);

      .lastplay-time .history-red-round {
        border-color: transparent var(--dark-6) transparent;
      }
    }

    .r-info {
      background: unset !important;

      .r-txt {
        border-color: var(--divider) !important;

        .title:not(:hover) {
          color: var(--dark-font-0);
        }

        .username {
          color: var(--dark-font-1);
        }
      }
    }
  }

  .history-dlg {
    background-color: var(--dark-3) !important;
    border-color: var(--dark-3) !important;

    .dlg-txt {
      color: var(--dark-font-0) !important;
    }

    .cancel {
      height: 32px !important;
      background-color: var(--dark-5) !important;

      &:not(:hover) {
        color: var(--dark-font-1) !important;
        border-color: var(--dark-5) !important;
      }
    }
  }

  .go-top-m .go-top {
    background-color: var(--dark-4) !important;
    border-color: var(--dark-4) !important;
  }
  
  .bili-header .slide-down {
    box-shadow: inset 0 -1px var(--bg) !important;
  }
`,R=l.DU`
  //底层背景
  #app, #app:before, .fixed-bg, #app > .bg, #app .bgc {
    background: none !important;
  }

  //所有Card背景
  .user-panel, .live-panel, .section-block, .bili-dyn-publishing, .publish-panel,
  .core-style, .bili-rich-textarea__inner, .bili-dyn-publishing__title__input, .most-viewed-panel, .bili-dyn-up-list,
  .tab-bar, .bili-dyn-list-tabs, .card, .notice-panel, .new-topic-panel, .bili-dyn-banner,
  .bili-dyn-my-info, .bili-dyn-live-users,
  .feed-topic .publish-panel-container, .feed-topic .empty-content, .topic-panel,
  .sticky-bar, .bili-dyn-item {
    background: var(--dark-card) !important;
  }

  .bili-dyn-item {
    .bili-dyn-card-reserve .bili-dyn-card-reserve__card {
      background-color: var(--dark-3) !important;
    }
  }

  //特殊背景
  .bg-white {
    background: var(--dark-card) !important;
  }

  .live-panel-item .live-up-img {
    background-color: var(--dark-card) !important;
    border-color: var(--dark-3) !important;
  }

  .notice-panel .img-container .notice-img {
    background-color: var(--dark-card) !important;
  }

  //文字 轻
  .tc-slate, .text-content, .time, .live-name, .count, .dynamic-repost, .shop-desc .desc-box .sub-title {
    color: var(--dark-font-2) !important;
  }

  //文字 中
  .most-viewed-item .name, .tag-item .label, .shop-panel .panel-desc {
    color: var(--dark-font-1) !important;
  }

  //文字 重
  .tc-black, .numbers,
  .up-name,
  .bili-dyn-live-users__item__uname,
  .text .content,
  .tag-item .content,
  .item-detail .text, .core-style,
  .shop-desc .desc-box .title,
  .bili-dyn-my-info__name,
  .bili-dyn-my-info__stat__item__count,
  .bili-dyn-live-users__title,
  .bili-dyn-banner__title,
  .bili-rich-textarea__inner,
  .bili-dyn-card-music__title,
  .bili-dyn-publishing__title__input {
    color: var(--dark-font-0) !important;
  }

  //hover蓝
  .more-button .more:hover,
  .most-viewed-panel .list-content .most-viewed-item .name.active,
  .most-viewed-panel .list-content .most-viewed-item:hover .name,
  .tab-bar .tab .tab-text.selected,
  .tab-bar .tab .tab-text:hover {
    color: #00b5e5 !important;
  }

  .user-panel .content .bottom .number-part:hover .numbers,
  .new-topic-panel .tag-item .content:hover {
    color: #00a1d6 !important;
  }

  // 输入框
  .hash-popup {
    background: var(--dark-3) !important;
    border-color: var(--dark-3) !important;

    .topic-container .item.is-selected {
      background: var(--dark-2) !important;
    }
  }

  // 左右箭头
  .bili-dyn-up-list__item__face {
    border-color: var(--dark-0) !important;
    box-shadow: 0 0 0 1px var(--dark-5) !important;
  }

  .bili-dyn-up-list__shadow-left {
    background: linear-gradient(270deg, hsl(0deg 0% 0% / 0%), var(--dark-card)) !important;

    .shadow {
      background: linear-gradient(270deg, hsl(0deg 0% 0% / 0%), var(--dark-card)) !important;
    }
  }

  .bili-dyn-up-list__shadow-right {
    background: linear-gradient(90deg, hsl(0deg 0% 0% / 0%), var(--dark-card)) !important;

    .shadow {
      background: linear-gradient(90deg, hsl(0deg 0% 0% / 0%), var(--dark-card)) !important;
    }
  }

  .bili-dyn-item__extra.border-top {
    border-color: var(--divider) !important;
  }

  // 直播列表
  .bili-dyn-live-users__item-container:hover {
    background: var(--dark-3) !important;
  }

  // 新推送通知条
  .bili-dyn-list__notification {
    background: var(--dark-card) !important;
  }

  // 新话题
  .bili-topic-selector {
    .bili-topic-selector__bulletin {
      background-color: var(--dark-card) !important;

      .bili-topic-item__normal:hover {
        background-color: var(--dark-card) !important;
      }
    }
  }

  .bili-topic-search__popover {
    background-color: var(--dark-3) !important;
    border: 1px solid var(--dark-3) !important;
    box-shadow: none !important;

    &.active {
      background-color: var(--dark-3) !important;
      border: 1px solid var(--dark-3) !important;

      .bili-topic-search__input {
        background-color: var(--dark-5) !important;

        .bili-topic-search__input__inner {
          color: var(--dark-font-1) !important;
        }
      }

      .bili-topic-item__cloud {
        :hover {
          background-color: var(--dark-1) !important;
        }

        .bili-topic-item__cloud__name {
          color: var(--dark-font-1) !important;
        }
      }
    }
  }

  .topic-panel {
    .topic-panel__nav-title, .relevant-topic__title {
      color: var(--dark-font-1);
    }
    .relevant-topic-container__item:hover {
      background-color: var(--dark-3) !important;
    }
  }

  //新动态
  .new-notice-bar {
    background: #d7d4b8 !important;

    .message {
      color: #cf8612 !important;
    }
  }

  //常看列表
  .card-list .most-viewed-panel .list-content .most-viewed-item .section {
    .icon-all, .avatar {
      border-color: var(--dark-5);
      -webkit-box-shadow: 0 0 0 1px var(--dark-0);
      box-shadow: 0 0 0 1px var(--dark-0);

      .active {
        -webkit-box-shadow: 0 0 0 1px #00a1d6 !important;
        box-shadow: 0 0 0 1px #00a1d6 !important;
      }
    }
  }

  //话题标签
  .new-topic-panel .tag-item .label {
    background: var(--dark-3) !important;
  }

  //feed
  .feed-topic .separater-line, .feed-topic .card, .card-offset {
    border-color: var(--dark-card) !important;
  }

  .card .focus-btn .unfocus {
    background-color: var(--dark-5) !important;
    color: var(--dark-font-1);
  }

  .active-panel {
    .tc-dark-slate {
      color: var(--dark-font-1);
    }

    .show-more-button {
      background-color: unset !important;
    }
  }

  //动态详情
  .sticky-bar {
    -webkit-box-shadow: 0 2px 4px 0 var(--dark-card) !important;
    box-shadow: 0 2px 4px 0 var(--dark-card) !important;

    .bar-content {
      .title {
        color: var(--dark-font-0) !important;
      }

      .message {
        color: var(--dark-font-2) !important;

        &:hover {
          color: #00b5e5 !important;
        }
      }
    }
  }

  .detail-content .card {
    border-color: var(--dark-card) !important;
  }

  // 定时发布
  .bili-dyn-draft {
    background-color: var(--dark-card) !important;
    border-color: transparent !important;
  }

  ${F}
  ${L}
    // 评论
  .comment-send-lite {
    background: var(--dark-card) !important;
  }

  .vote-result-comment {
    background: var(--dark-card) !important;
    border-radius: 8px !important;
  }

  // 右下角悬浮按钮
  .bili-dyn-sidebar__btn {
    background-color: var(--dark-card) !important;

    :hover {
      background-color: var(--dark-4) !important;
    }
  }
  
  // 投票
  .my-followee-wrapper .my-followee {
    .user-list {
      .user-li {
        .vote-info-wrapper {
          .user-name {
            .name {
              color: var(--dark-font-0) !important;
            }
          }
          .vote-to {
            color: var(--dark-font-2) !important
          }
        }
      }
    }
  }
`,Y=l.DU`
  //文字 轻
  .article-item .item-holder .article-desc, .info-holder .dynamic, .more .info {
    color: var(--dark-font-2) !important;
  }

  //文字 中
  .info-holder .dynamic .arc-title {
    color: var(--dark-font-1) !important;
  }

  //文字 重
  body, .nav-tab-bar .tab-item, .partitio-name, .article-item .item-holder .article-title-holder, .rank-module .rank-tabs-bar label, .rank-module .rank-list .item a, .up-list .title, .info-holder .head .nick-name, .more .top-bar, .more .title, .categories-bar .tag-item {
    color: var(--dark-font-3) !important;
  }

  //hover蓝
  .nav-tab-bar .tab-item.on, .nav-tab-bar .tab-item:hover, .article-item .item-holder .article-title-holder:hover, .rank-module .rank-tabs-bar .rank-tabs-list li.on, .rank-module .rank-list .item a:hover, .info-holder .head .nick-name:hover, .info-holder .dynamic .arc-title:hover, .more .title:hover, .categories-bar .tag-item.on {
    color: #00a1d6 !important;
  }

  //背景
  .article-item, .rank-module .rank-list .item, .up-list {
    background-color: var(--bg) !important;
  }

  .page-content .right-side .rank-module .rank-list .item .rank-index {
    background: var(--dark-4);
  }

  //框线
  .article-item, .rank-module .rank-tabs-bar, .up-list .title, .more .top-bar, .categories-bar {
    border-color: var(--divider) !important;
  }

  //按钮
  .rank-module .complete-rank, .up-list .fresh-btn {
    background: var(--dark-5) !important;
    border-color: var(--dark-6) !important;
    color: var(--dark-font-0) !important;

    &:hover {
      color: #00a1d6 !important;
    }
  }

  //搜索
  .search-module .search-block {
    border-color: var(--dark-6) !important;
    background-color: var(--dark-2) !important;

    input {
      background-color: var(--dark-2) !important;
      color: var(--dark-font-0) !important;
    }

    .search-word-panel {
      border-color: var(--dark-card) !important;
      background-color: var(--dark-card) !important;

      .panel-title {
        .split-line {
          border-color: var(--dark-6) !important;
        }

        p span {
          background-color: var(--dark-card) !important;
          color: var(--dark-font-2) !important;
        }
      }

      .suggest-item, .history-item {
        color: var(--dark-font-0);

        &:hover, &.focus {
          background-color: var(--dark-3) !important;
        }
      }
    }
  }

  //侧边按钮
  .to-top {
    background-color: var(--dark-4) !important;
    border-color: var(--dark-4) !important;
  }

  //帮助按钮修正
  .more .help .icon {
    background-image: url(${_("/statics/imgs/read-help.png")}) !important;
  }

  //游戏按钮修正
  .nav-tab-bar .tab-item[data-tab-id="1"]:before {
    background-image: url(${_("/statics/images/read-game.png")});
  }

  // read list
  .list-info-block {
    background-color: var(--dark-card) !important;

    .right-side {
      .title {
        color: var(--dark-font-0) !important;
      }

      .up-name {
        color: var(--dark-font-1) !important;
      }
    }
  }

  .list-container .article-list-block {
    background-color: var(--dark-card) !important;

    .article-item {
      background-color: var(--dark-card) !important;

      .article-left-block {
        border-bottom: 1px solid var(--divider) !important;

        .article-title {
          color: var(--dark-font-1) !important;
        }
      }
    }
  }
  
  .article-card {
    .title-wrap .title {
      color: inherit!important;
    }
  }
`,$=l.DU`
	.page-container, .article-action .more .more-ops-list, .view-note .editor-innter, .view-note .editor-innter .ql-editor {
		background: unset !important;
	}
	
	//文字 轻
	.up-info-right-block .fans-num, .up-info-right-block .view-num .follow-btn-holder .follow-btn.followed, .rightside-article-list-btn .title, .article-item .article-title .info, .more .info, .right-side-bar .to-comment .comment-num, .article-list-plane .button .title {
		color: var(--dark-font-2) !important;
	}
	
	//文字 中
	.article-action, .article-action .ops i, .article-action .more .more-ops-list {
		color: var(--dark-font-1) !important;
	}
	
	//文字 重
	.nav-tab-bar .tab-item, .follow-btn-holder .follow-btn, .up-info-right-block .up-name, .article-up-info .up-name, .rightside-article-list-btn .label, .up-article-list-block .block-title, .article-item .article-title, .more .top-bar, .more .title,
	.title-container .title, .article-holder, .article-holder h1, .article-holder .color-default, .article-list-plane .button .label, .article-holder .card-container .title,
	.article-left-tab .tab-item,
	.view-note .editor-innter .ql-editor {
		color: var(--dark-font-3) !important;
	}
	
	//hover蓝
	.nav-tab-bar .tab-item.on, .nav-tab-bar .tab-item:hover, .article-item .article-title:hover, .more .title:hover,
	.article-action .ops .on, .article-action .ops .on i, .article-action .ops i:hover,
	.article-action .ops .coin-btn:hover, .article-action .ops .fav-btn:hover, .article-action .ops .like-btn:hover,
	.article-action .ops .coin-btn:hover i, .article-action .ops .fav-btn:hover i, .article-action .ops .like-btn:hover i {
		color: #00a1d6 !important;
	}
	
	//框线
	.up-article-list-block .block-title, .more .top-bar, .article-action, #article-list-btn .title, #article-list-btn .label, .rightside-article-list-btn .label {
		border-color: var(--divider) !important;
	}
	
	//文章视频引用
	.article-holder .card-container {
		.card, .video-info {
			background-color: #1515154d !important;
		}
		
		a:after, .slim-video-card {
			border-color: var(--dark-4) !important;
		}
	}
	
	//关注按钮
	.follow-btn-holder .follow-btn {
		background-color: #00a1d6 !important;
		border-color: #00a1d6 !important;
		
		&:hover {
			background-color: #00b5e5 !important;
			border-color: #00b5e5 !important;
		}
		
		&.followed, &.followed:hover {
			background-color: var(--dark-5) !important;
			border-color: var(--dark-5) !important;
		}
	}
	
	//文章目录
	.rightside-article-list-btn {
		background-color: var(--dark-5) !important;
		border-color: var(--dark-5) !important;
		
		&:hover {
			background-color: var(--dark-card) !important;
			border-color: var(--dark-card) !important;
		}
		
		.icon-list {
			background-image: url(${_("/statics/imgs/article-list.png")}) !important;
		}
	}
	
	.article-list-plane {
		background-color: var(--dark-5) !important;
		border-color: var(--dark-5) !important;
		
		.button:hover {
			background-color: var(--dark-card) !important;
			border-color: var(--dark-card) !important;
		}
	}
	
	//更多按钮
	.up-info-holder .fixed-box .up-article-list-block .more-article {
		background-color: var(--dark-5);
		border-color: var(--dark-5);
		color: var(--dark-font-0);
	}
	
	//帮助按钮修正
	.up-info-holder .fixed-box .more .help .icon {
		background-image: url(${_("/statics/imgs/read-help.png")});
	}
	
	//游戏按钮修正
	.nav-tab-bar .tab-item[data-tab-id="1"]:before, .article-left-tab .tab-item[data-tab-id="1"]:before {
		background-image: url(${_("/statics/images/read-game.png")});
	}
	
	// 侧边按钮
	.right-side-bar .to-comment, .right-side-bar .to-top, .right-side-bar .to-comment .comment-num {
		background-color: var(--dark-4) !important;
		border-color: var(--dark-4) !important;
	}
	
	//评论区
	.comment-title-block span {
		color: var(--dark-font-1);
	}
	
	.comment-send-lite, .comment-m {
		background: var(--bg) !important;
	}
	
	${L}
	.textarea-container {
		textarea {
			background-color: var(--dark-1) !important;
			border-color: var(--dark-1) !important;
			color: var(--dark-font-1) !important;
		}
		
		&:hover textarea, &.focus textarea {
			color: var(--dark-font-0) !important;
		}
	}
	
	.comment-emoji {
		border: 1px solid var(--dark-1) !important;
		background-color: var(--dark-1) !important;
	}
	
	.interaction-info {
		border-color: var(--dark-4) !important;
	}
	
	// 新专栏
	#app {
		background-color: var(--bg) !important;
	}
	
	#read-article-holder {
		color: var(--dark-font-1) !important;
		
		.img-box.loaded {
			filter: brightness(.8) !important;
		}
		
		&.normal-article-holder {
			h1, h2, h3, h4, h5, h6 {
				filter: invert(1);
			}
			
			.color-default {
				color: var(--dark-font-1) !important;
			}
		}
	}
	
	#readRecommendInfo {
		background-color: var(--dark-2) !important;
		
		.recommend-header {
			border-bottom-color: var(--divider) !important;
			
			.title, .more {
				color: var(--dark-font-0) !important;
			}
		}
		
		.article-item {
			border-color: var(--divider) !important;
		}
	}
	
	.catalog {
		background-color: var(--dark-0) !important;
		
		&:hover:after {
			background-color: var(--dark-0) !important;
		}
		
		.catalog-panel {
			background-color: var(--dark-0) !important;
			
			.catalog-panel__title {
				color: var(--dark-font-1) !important;
			}
		}
		
		.catalog-panel__list {
			background-color: var(--dark-0) !important;
			
			.catalog-item {
				color: var(--dark-font-2) !important;
				
				&:hover {
					background-color: var(--bg) !important;
				}
				
				.item-ul {
					background-color: var(--divider) !important;
				}
			}
		}
		
		
	}
	
	.side-toolbar {
		background-color: var(--dark-2) !important;
		
		.toolbar-item {
			color: var(--dark-font-2) !important;
		}
	}
	
	.article-detail {
		.fixed-top-header {
			background-color: var(--dark-card) !important;
			
			.up-info {
				.up-info__name {
					color: var(--dark-font-1) !important;
				}
			}
			
			.inner-title {
				color: var(--dark-font-3) !important;
			}
		}
		
		.article-breadcrumb {
			.breadcrumb-name {
				color: var(--dark-font-0) !important;
			}
		}
		
		.article-container {
			background-color: var(--dark-2) !important;
			
			.article-container__content {
				border-color: var(--divider) !important;
				
				.article-up-info {
					background-color: var(--dark-2) !important;
				}
			}
			
			.ql-container {
				background: var(--dark-2) !important;
				color: var(--dark-font-1) !important;
				
				h1, h2, h3, h4, h5, h6 {
					color: var(--Ba0_s) !important;
				}
			}
		}
	}

`,j=l.DU`
  #App, .tips, .article-title {
    color: var(--dark-font-3) !important;
  }

  .article-desc {
    color: var(--dark-font-2) !important;
  }

  .article-title:hover {
    color: #00a1d6 !important;
  }

  .article-item, .rank-module .rank-list .item, .up-list {
    background-color: var(--bg) !important;
  }

  #App .rank-module .tips {
    background: var(--dark-4);
  }

  .article-content {
    border-color: var(--dark-1) !important;
  }
`,U="\n    .message-list {\n      background-color: var(--dark-3)!important;\n      .msg-item .message, .auto-reply-push {\n        color: var(--dark-font-0);\n        .message-content {\n          background-color: var(--dark-4)!important;\n          &.is-me {\n            background-color: #6f9dca!important;\n          }\n          .content {\n            color: unset;\n          }\n        }\n      }\n      .auto-reply-push, .msg-push-new {\n          background-color: var(--dark-4) !important;\n          .auto-reply-push__desc, .ar-recommend-item__info * {\n            color: var(--dark-font-0);\n          }\n          .msg-push-new__leave-message {\n            background-color: var(--dark-3) !important;\n          }\n      }\n      .msg-notify, .msg-push {\n        background: var(--dark-4)!important;\n        .content {\n          color: var(--dark-font-1);\n        }\n        .modules .module {\n          .mtitle {\n            color: var(--dark-font-1);\n          }\n          .detail {\n            color: var(--dark-font-0);\n          }  \n        }\n        hr {\n          background: var(--dark-1)!important;\n        }\n        .link {\n          color: var(--dark-font-0);\n        }\n      }\n    }\n    ",I=l.DU`
	:root {
		--Ga0: #101011 !important;
		--Ga0_s: #1E2022 !important;
		--Ga0_t: #1E2022 !important;
		--Ga1: #0A0B0C !important;
		--Ga1_s: #232527 !important;
		--Ga1_t: #232527 !important;
		--Ga1_e: #232527 !important;
		--Ga2: #2F3134 !important;
		--Ga2_t: #2F3134 !important;
		--Ga3: #46494D !important;
		--Ga3_t: #46494D !important;
		--Ga4: #5E6267 !important;
		--Ga4_t: #5E6267 !important;
		--Ga5: #757A81 !important;
		--Ga5_t: #757A81 !important;
		--Ga6: #8B9097 !important;
		--Ga6_t: #8B9097 !important;
		--Ga7: #A2A7AE !important;
		--Ga7_t: #A2A7AE !important;
		--Ga8: #B9BDC2 !important;
		--Ga8_t: #B9BDC2 !important;
		--Ga9: #D0D3D7 !important;
		--Ga9_t: #D0D3D7 !important;
		--Ga10: #E7E9EB !important;
		--Ga10_t: #E7E9EB !important;
		--Ga11: #242628 !important;
		--Ga12: #1F2022 !important;
		--Ga12_s: #2B2C2F !important;
		--Ga13: #1A1B1D !important;
		--Ga13_s: #2F3134 !important;
		--Wh0: #17181A !important;
		--Wh0_s: #2F3134 !important;
		--Wh0_t: #17181A !important;
		--Ba0: #000000 !important;
		--Ba0_s: #FFFFFF !important;
		--Ba0_t: #000000 !important;
		--Pi0: #26161C !important;
		--Pi1: #2F1A22 !important;
		--Pi2: #472030 !important;
		--Pi3: #76304B !important;
		--Pi4: #A73E65 !important;
		--Pi5: #D44E7D !important;
		--Pi5_t: #D44E7D !important;
		--Pi6: #DC6D94 !important;
		--Pi7: #E38CAA !important;
		--Pi8: #EBABC1 !important;
		--Pi9: #F2CAD8 !important;
		--Pi10: #FAE9EF !important;
		--Ma0: #261525 !important;
		--Ma1: #2E182D !important;
		--Ma2: #461C43 !important;
		--Ma3: #72296C !important;
		--Ma4: #A13396 !important;
		--Ma5: #CB41BB !important;
		--Ma6: #D462C7 !important;
		--Ma7: #DD83D3 !important;
		--Ma8: #E6A4DE !important;
		--Ma9: #EFC5EA !important;
		--Ma10: #F8E6F6 !important;
		--Re0: #261314 !important;
		--Re1: #2E1617 !important;
		--Re2: #471A1C !important;
		--Re3: #742728 !important;
		--Re4: #A63131 !important;
		--Re5: #D1403E !important;
		--Re6: #D9615F !important;
		--Re7: #E18281 !important;
		--Re8: #E9A3A2 !important;
		--Re9: #F1C5C4 !important;
		--Re10: #F9E5E5 !important;
		--Or0: #28180F !important;
		--Or1: #301B10 !important;
		--Or2: #4A230E !important;
		--Or3: #783610 !important;
		--Or4: #A9490D !important;
		--Or5: #D66011 !important;
		--Or6: #DD7C3A !important;
		--Or7: #E49764 !important;
		--Or8: #EBB38D !important;
		--Or9: #F2CEB6 !important;
		--Or10: #FAEADF !important;
		--Ye0: #2A1E0F !important;
		--Ye1: #342410 !important;
		--Ye2: #4D300B !important;
		--Ye3: #7C4C08 !important;
		--Ye4: #AD6800 !important;
		--Ye5: #DB8700 !important;
		--Ye6: #E19C2C !important;
		--Ye7: #E7B158 !important;
		--Ye8: #EEC584 !important;
		--Ye9: #F4DAB1 !important;
		--Ye10: #FAEFDD !important;
		--Ly0: #2A2310 !important;
		--Ly1: #332A11 !important;
		--Ly2: #49390C !important;
		--Ly3: #745909 !important;
		--Ly4: #A27C00 !important;
		--Ly5: #CCA000 !important;
		--Ly6: #D5B02C !important;
		--Ly7: #DEC158 !important;
		--Ly8: #E7D184 !important;
		--Ly9: #EFE2B1 !important;
		--Ly10: #F8F2DD !important;
		--Lg0: #19220F !important;
		--Lg1: #1E2911 !important;
		--Lg2: #273C0E !important;
		--Lg3: #3C600F !important;
		--Lg4: #50840B !important;
		--Lg5: #67A70E !important;
		--Lg6: #81B638 !important;
		--Lg7: #9CC562 !important;
		--Lg8: #B6D58B !important;
		--Lg9: #D0E4B5 !important;
		--Lg10: #EBF3DF !important;
		--Gr0: #102017 !important;
		--Gr1: #11271B !important;
		--Gr2: #123923 !important;
		--Gr3: #175C34 !important;
		--Gr4: #198042 !important;
		--Gr5: #1FA251 !important;
		--Gr6: #46B26F !important;
		--Gr7: #6DC28D !important;
		--Gr8: #93D2AB !important;
		--Gr9: #BAE2C9 !important;
		--Gr10: #E1F3E8 !important;
		--Cy0: #0C1F20 !important;
		--Cy1: #0D2627 !important;
		--Cy2: #093739 !important;
		--Cy3: #085B5C !important;
		--Cy4: #028080 !important;
		--Cy5: #03A29F !important;
		--Cy6: #2FB2B0 !important;
		--Cy7: #5AC2C0 !important;
		--Cy8: #86D2D1 !important;
		--Cy9: #B2E2E1 !important;
		--Cy10: #DDF3F3 !important;
		--Lb0: #0A1B23 !important;
		--Lb1: #0B202A !important;
		--Lb2: #082D40 !important;
		--Lb3: #064A69 !important;
		--Lb4: #006996 !important;
		--Lb5: #0087BD !important;
		--Lb6: #2C9CC8 !important;
		--Lb7: #58B1D4 !important;
		--Lb8: #84C5DF !important;
		--Lb9: #B1DBEB !important;
		--Lb10: #DDEFF6 !important;
		--Bl0: #151826 !important;
		--Bl1: #181C2F !important;
		--Bl2: #1F2748 !important;
		--Bl3: #2E3C76 !important;
		--Bl4: #3B53A8 !important;
		--Bl5: #4B6BD4 !important;
		--Bl6: #6A85DB !important;
		--Bl7: #899EE3 !important;
		--Bl8: #A9B8EA !important;
		--Bl9: #C8D2F2 !important;
		--Bl10: #E7EBF9 !important;
		--Pu0: #1D1628 !important;
		--Pu1: #221A31 !important;
		--Pu2: #31214C !important;
		--Pu3: #4E317D !important;
		--Pu4: #6D3FB1 !important;
		--Pu5: #8C50E0 !important;
		--Pu6: #A06EE5 !important;
		--Pu7: #B48DEB !important;
		--Pu8: #C8ABF0 !important;
		--Pu9: #DBC9F5 !important;
		--Pu10: #F0E8FB !important;
		--Br0: #211D1B !important;
		--Br1: #282320 !important;
		--Br2: #382F2A !important;
		--Br3: #59483F !important;
		--Br4: #7A6154 !important;
		--Br5: #9A7C6A !important;
		--Br6: #AC9384 !important;
		--Br7: #BDA99E !important;
		--Br8: #CEBFB7 !important;
		--Br9: #E0D7D1 !important;
		--Br10: #F2EEEB !important;
		--Si0: #212325 !important;
		--Si1: #27292C !important;
		--Si2: #36393F !important;
		--Si3: #535962 !important;
		--Si4: #6F7987 !important;
		--Si5: #8C99AA !important;
		--Si6: #A0ABB9 !important;
		--Si7: #B4BCC7 !important;
		--Si8: #C8CED6 !important;
		--Si9: #DCE0E5 !important;
		--Si10: #F0F2F4 !important;
		--Ga0_rgb: 16, 16, 17 !important;
		--Ga0_s_rgb: 30, 32, 34 !important;
		--Ga1_rgb: 10, 11, 12 !important;
		--Ga1_s_rgb: 35, 37, 39 !important;
		--Ga2_rgb: 47, 49, 52 !important;
		--Ga3_rgb: 70, 73, 77 !important;
		--Ga5_rgb: 117, 122, 129 !important;
		--Ga7_rgb: 162, 167, 174 !important;
		--Ga10_rgb: 231, 233, 235 !important;
		--Ga11_rgb: 36, 38, 40 !important;
		--Ga12_rgb: 31, 32, 34 !important;
		--Ga12_s_rgb: 43, 44, 47 !important;
		--Ga13_rgb: 26, 27, 29 !important;
		--Ga13_s_rgb: 47, 49, 52 !important;
		--Wh0_rgb: 23, 24, 26 !important;
		--Wh0_s_rgb: 47, 49, 52 !important;
		--Ba0_rgb: 0, 0, 0 !important;
		--Pi1_rgb: 47, 26, 34 !important;
		--Pi5_rgb: 212, 78, 125 !important;
		--Re1_rgb: 46, 22, 23 !important;
		--Re5_rgb: 209, 64, 62 !important;
		--Or1_rgb: 48, 27, 16 !important;
		--Or5_rgb: 214, 96, 17 !important;
		--Ye1_rgb: 52, 36, 16 !important;
		--Ye5_rgb: 219, 135, 0 !important;
		--Ye6_rgb: 225, 156, 44 !important;
		--Gr1_rgb: 17, 39, 27 !important;
		--Gr5_rgb: 31, 162, 81 !important;
		--Lb1_rgb: 11, 32, 42 !important;
		--Lb5_rgb: 0, 135, 189 !important;
		--Lb7_rgb: 88, 177, 212 !important;
		--bg1: var(--bg) !important;
	}
	html {
		body {
			background: url(https://s1.hdslb.com/bfs/static/blive/blfe-message-web/static/img/dark_bg.e136e3d5.png) top/cover no-repeat fixed;
		}
		
		//body::before {
		//	content: '';
		//	position: fixed;
		//	top: 0;
		//	left: 0;
		//	width: 100%;
		//	height: 100%;
		//	z-index: 0;
		//	background-color: rgba(21, 21, 21, 0.8) !important;
		//	pointer-events: none;
		//}
	}
	
	#message-navbar {
		background-color: transparent !important;
	}
	.message-box-shadow, .im-box-shadow {
		box-shadow: 0 2px 4px 0 rgb(10 13 16 / 54%) !important;
	}
	
	//左栏
	.space-left {
		background-color: #151515cc !important;
		
		.side-bar {
			.title {
				color: var(--dark-font-0);
				
				.icon {
					filter: brightness(4);
					margin-left: -30px;
				}
			}
			
			.item {
				color: var(--dark-font-1);
				
				&:hover, &.active {
					color: #2faee3;
				}
			}
			
			.divided-line {
				border-color: var(--divider);
			}
		}
	}
	
	//右栏
	.space-right {
		background-color: #1f1f1f80 !important;
		
		.space-right-top {
			.title {
				background-color: var(--dark-card) !important;
				color: var(--dark-font-1) !important;
				-webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
				box-shadow: 0 2px 4px 0 #1313138a !important;
			}
			
			.group-helper-msg-list {
				background-color: var(--dark-card) !important;
				-webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
				box-shadow: 0 2px 4px 0 #1313138a !important;
				
				.tab-list {
					color: var(--dark-font-1) !important;
					
					.tab-item.active[data-v-29e10985]::before {
						background-color: var(--dark-card) !important;
					}
				}
				
				.nothing {
					color: var(--dark-font-2) !important;
				}
				
				.name-box {
					.name {
						color: var(--dark-font-0) !important;
					}
					
					.status {
						color: var(--dark-font-2) !important;
					}
				}
				
				&::after {
					background-color: var(--dark-card) !important;
				}
			}
		}
		
		.space-right-bottom {
			.card {
				background-color: var(--dark-card) !important;
				-webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
				box-shadow: 0 2px 4px 0 #1313138a !important;
				
				.header::after {
					background: var(--divider) !important;
				}
				
				.loading .link-progress-tv {
					background-color: unset !important;
				}
				
				.line-1 {
					color: var(--dark-font-1) !important;
					
					.name-field {
						color: var(--dark-font-0) !important;
					}
				}
				
				.line-2 {
					color: var(--dark-font-0) !important;
					
					.orginal-reply {
						border-color: var(--dark-1) !important;
						color: var(--dark-font-2) !important;
					}
				}
				
				.line-3 {
					color: var(--dark-font-2) !important;
				}
				
				.text-box {
					color: var(--dark-font-2) !important;
				}
				
				&.detail .content:not(:hover) span {
					color: var(--dark-font-0) !important;
				}
				
				.follow-btn {
					color: var(--dark-font-1);
					
					&.active {
						background: var(--dark-6);
						border-color: var(--dark-6);
					}
					
					&.inactive {
						background: var(--dark-4);
					}
				}
				
				.reply-box {
					textarea {
						background-color: var(--dark-3);
						border-color: var(--dark-3);
						color: var(--dark-font-1);
					}
					
					&:hover textarea {
						color: var(--dark-font-0);
					}
				}
				
				.divider, div::after {
					border-color: var(--divider) !important;
				}
				
				.divider-last::before, .divider-last::after {
					background-color: var(--divider) !important;
				}
				
				//系统通知
				
				&.system-item {
					.title {
						color: var(--dark-font-0);
					}
					
					.time {
						color: var(--dark-font-1);
					}
					
					.bottom {
						color: var(--dark-font-2);
					}
				}
				
				//私信存档
				
				&.whisper {
					.list {
						border-color: var(--dark-1);
						
						.list-title {
							color: var(--dark-font-0);
							border-color: var(--dark-1);
						}
						
						.list-content .list-item {
							border-color: var(--dark-1);
							
							.name {
								color: var(--dark-font-0);
							}
							
							.last-word {
								color: var(--dark-font-2);
							}
							
							&.active, &:hover {
								background-color: var(--dark-3) !important;
							}
						}
					}
					
					.dialog {
						.title {
							color: var(--dark-font-0);
							border-color: var(--dark-1);
						}
						
						${U}
					}
				}
			}
			
			//我的消息
			
			.bili-im {
				color: var(--dark-font-1);
				background-color: var(--dark-card) !important;
				-webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
				box-shadow: 0 2px 4px 0 #1313138a !important;
				
				.left, .left .title {
					border-color: var(--dark-1);
				}
				
				.list {
					.list-item {
						.name {
							color: var(--dark-font-0);
						}
						
						.last-word {
							color: var(--dark-font-2);
						}
						
						&.top {
							background-color: var(--dark-3);
						}
						
						&.active, &:hover {
							background-color: var(--dark-3) !important;
						}
					}
					
					.lds-spinner div:after {
						background-color: var(--dark-font-0) !important;
					}
				}
				
				.dialog {
					.title {
						color: var(--dark-font-0);
						border-color: var(--dark-1);
						
						.action-menu .menu-list {
							border-color: var(--dark-card);
							background-color: var(--dark-card) !important;
							-webkit-box-shadow: 0 6px 12px 0 var(--dark-card);
							box-shadow: 0 6px 12px 0 var(--dark-card);
							
							a {
								color: var(--dark-font-0);
								
								.tips {
									color: var(--dark-font-2);
								}
								
								&:hover {
									background-color: var(--dark-0) !important;
								}
							}
							
							&:before {
								border-color: var(--dark-card);
								background-color: var(--dark-card) !important;
							}
						}
					}
					
					${U}
					.new-message-tip {
						.text, &::after {
							background-color: var(--dark-4) !important;
						}
					}
					
					.send-box {
						border-color: var(--dark-0);
						background-color: var(--dark-3) !important;
						
						.btn-box.send-btn {
							border-color: var(--dark-5) !important;
							background-color: var(--dark-5) !important;
							color: var(--dark-font-2) !important;
							
							&.active {
								background-color: #1389bf !important;
								border-color: #1389bf !important;
								color: #fff !important;
							}
						}
						
						.input-box #editor {
							color: var(--dark-font-0);
						}
					}
					
					.im-popup .im-popup-shell {
						background-color: var(--dark-3);
						
						.content {
							.content-text {
								color: var(--dark-font-0);
							}
							
							.selector-box .type-selector {
								color: var(--dark-font-0);
								
								.css-1xneiug {
									.content {
										fill: var(--dark-5);
									}
									
									.border {
										fill-opacity: 0.5;
									}
								}
							}
							
							.report-tip {
								color: var(--dark-font-1);
							}
							
							.input-box {
								border-color: var(--dark-5);
								background-color: var(--dark-5);
								
								textarea {
									color: var(--dark-font-0);
								}
							}
						}
						
						.popup-btn-ctnr .bl-button--primary:disabled {
							background-color: var(--dark-4);
							color: var(--dark-font-2);
						}
					}
				}
			}
			
			//消息设置
			
			.config {
				color: var(--dark-font-0);
				background-color: var(--dark-card) !important;
				-webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
				box-shadow: 0 2px 4px 0 #1313138a !important;
				
				.tip {
					color: var(--dark-font-2);
				}
				
				.config-item {
					.css-1xneiug {
						.content {
							fill: var(--dark-5);
						}
						
						.border {
							fill-opacity: 0.5;
						}
					}
					
					&::before {
						background: var(--dark-1) !important;
					}
					
					.radio-selector {
						color: var(--dark-font-0);
					}
				}
			}
		}
	}
	
	// 自动回复设置
	#link-message-container {
		.header {
			.tab {
				color: var(--Ba0_s) !important;
			}
		}
		
		.title {
			color: var(--Ba0_s) !important;
		}
		
		textarea {
			color: var(--Ga4_u) !important;
		}
		
		.btn.disabled {
			background-color: var(--Ga9_u) !important;
			color: var(--Ga7_u) !important;
		}
	}
	
	// 关键词回复
	.kw-search {
		background-color: var(--Ba0) !important;
		color: var(--Br10) !important;
	}
`,H=l.DU`
    html {
      background: unset!important;
    }
    //文字 轻
    .n .n-data .n-data-k, .sec-empty-hint, .channel .empty-state p, .fav-item .state, .small-item .meta, .section.empty:after, .section .user-auth.no-auth .no-auth-title span,
    #page-fav .fav-sidenav .favlist-title, #page-fav .fav-sidenav .watch-later, #page-fav .fav-main .search-types,
    .i-live .i-live-unfo-btn, .section .operation, #page-channel-detail .watch-later-btn {
      color: var(--dark-font-2);
    }
    
    //文字 中
    .private-hint, .i-m-btn, .user .info .meta .row, .tc-slate, #page-fav .fav-main .fav-action-bottom .select-counter, #page-fav .fav-main .fav-meta, #page-setting .setting-privacy-item .setting-privacy-switcher .be-switch-label,
    .i-live .i-live-fo-count, .subscribe-title {
      color: var(--dark-font-1)!important;
    }
    
    //文字 重
    body, .n .n-data .n-data-v, .section-title, .video-title, .info-title, .large-item .title, #page-video .play-all-btn,
    .breadcrumb .follow-tabs, .breadcrumb .batch, .breadcrumb .play-all-btn, #page-follows .follow-main .follow-action-top .back-to-info, #page-follows .follow-main .follow-action-bottom li, #page-follows .follow-main .follow-action-bottom ul.filter-disable li:hover,
    #page-follows .follow-tabs span,
    #page-fav .fav-main .fav-action-top .back-to-info, #page-fav .fav-main .fav-action-bottom li, #page-fav .fav-main .fav-action-bottom li:hover,
    .article-title, #page-fav .fav-main .fav-content .fav-pugv-list .pugv-item .item-infos p.main-title,
    .sub-tabs span, .sub-tabs .filter-content, .tc-black {
      color: var(--dark-font-0)!important;
    }
    
    //高优先
    .feed-title, .section .user-auth.no-auth .no-auth-title .goto-auth, .user-auth .auth-description, .profession-description,
    .contribution-sidenav, .breadcrumb .item, .album-list__title
    .my-album .tab-list .tab:not(.active) .name, .my-album .title, .fav-sidenav, .nav-title .text,.i-live .i-live-text, .live-text,
    .fav-main .filter-item, .fav-main .filter-item .filter-type .be-dropdown-item span, .favInfo-box .favInfo-details .fav-name, .my-notebook .note-header .note-title .note-text,
    .pgc-item-title, .pgc-item-desc, .setting-privacy-item .setting-privacy-name, .channel-title .channel-name, .album-title, .follow-item,
    .g-search input {
      color: var(--dark-font-0)!important;
    }
    
    .pgc-space-follow-item .pgc-item-info .type-and-area, .pgc-space-follow-item .pgc-item-info .pgc-item-state, .favInfo-box .favInfo-details .fav-options .meta {
      color: var(--dark-font-1)!important;
    }
    
    // 投稿搜索后
    .search-page {
      background-color: var(--dark-card)!important;
      .search-nav {
        color: var(--dark-font-0)!important;
      }
    }
    
    //Card背景 
    .h .h-forbid, .n .n-inner, .bg-white,
    #page-index .col-1, .col-2 .section,
    .feed-title,
    .card,
    .col-full,
    .channel-option.no-channel, .channel-add-video,
    .follow-main .follow-action-bottom .follow-action-fixtop,
    #page-fav .fav-main .fav-action-bottom .fav-action-fixtop, #page-fav .fav-main .small-item:hover,
    .bili-dyn-item{
      background-color: var(--dark-card)!important;
    }
    .bili-dyn-item__tag {
      box-shadow: inset 0 -1px 0 var(--dark-3)!important;
    }
    
    // 2023年10月30日由于b站动态页面载入固定样式全局导致显示错误，故做一下修补
    a:not(.active,:hover) {
      color: var(--dark-font-0) !important;
    }
    
    //Card边框
    .col-1, .col-2 .section, .fav-covers, .card, .fav-main .small-item, .bili-dyn-item {
      border-color: var(--dark-card)!important;
    }

    .user-info-title{
      border-color: var(--dark-3)!important;
    }
    
    //Card阴影
    .n .n-inner, .large-item .cover img, .mini-item .cover img, .col-full, .i-pin-c{
      box-shadow: 0 0 0 1px #1313138a!important;
    }
    
    //框线
    .section, .section-title, .i-pin-v .be-tab, .i-m-upload, .i-m-r2, .user .tags, .contribution-sidenav, .contribution-sidenav~.main-content,
    .album-content, .filter, .channel-detail .channel-action-row .be-dropdown, .follow-main .follow-action-top, .follow-main .follow-action-top .back-to-info,
    .fav-sidenav,.fav-sidenav .nav-container, .fav-sidenav .watch-later, .fav-main .favList-info,
    .fav-main .filter-item.search, .fav-main .search-types, .fav-main .fav-action-top .back-to-info, .fav-main .fav-action-top,
    .article-content, .s-content, .setting-index-container, .setting-index-module,
    .i-live .i-live-unfo-btn, .i-live .i-live-fo-count, .section .operation, .channel .channel-item, .watch-later-btn, .mini-item,
    .follow-sidenav, .follow-sidenav .nav-container.follow-container, .follow-main, .follow-main .follow-header.follow-header-info, .list-item, .fans-action-btn.follow {
      border-color: var(--divider)!important;
    }
    
    .my-album .line {
      background-color: var(--dark-1)!important;
    }
    
    //hover深
    #submit-video-type-filter, .my-album .tab-list,
    .contribution-sidenav .contribution-item:hover,
    .fav-item:hover,
    .follow-item:hover {
      background-color: var(--dark-3)!important;
    }
    
    //搜索
    .g-search input, #page-fav .fav-main .search-input input {
      background: var(--dark-card)!important;
      color: var(--dark-font-0);
    }
    .g-search input {
      border-color: var(--divider);
    }
    
    //置顶视频，代表作
    .list-create {
      background-color: unset!important;
      .text {
        color: var(--dark-font-1);
      }
    }
    
    .feed-title {
      border-bottom: 1px solid var(--divider);
    }
    
    //空收藏夹
    .fav-covers.empty {
      background-image: url(${_("/statics/images/playlistbg.png")})!important;
    }
    
    //角标
    .section .count {
      background-color: var(--dark-2)!important;
      border-color: var(--dark-1)!important;
      color: var(--dark-font-1);
      &:before {
        background: none !important;
        left: -6px!important;
        top: -1px!important;
      }
    }
    
    //更多
    .section .more {
      border-color: var(--dark-5)!important;
      background-color: var(--dark-5)!important;
      color: var(--dark-font-1);
      background-position: -310px -404.5px!important;
      &:hover {
        background-position: -438px -404.5px!important;
      }
    }
    
    //公告
    #i-ann-content {
      textarea {
        background-color: var(--dark-3);
        border-color: var(--dark-3);
        color: var(--dark-font-1)!important;
      }
      &:hover textarea, &.focus textarea {
        color: var(--dark-font-0)!important;
      }
    }
    
    // 他的频道
    
    .channel-list {
      .channel-name {
        color: var(--dark-font-1)!important;
      }
    }
    
    ${F}
    
    //更多操作
    #page-channel-detail .channel-detail .channel-action-row .be-dropdown {
      border-color: var(--dark-5)!important;
      background-color: var(--dark-5)!important;
    }
    .be-dropdown {
      color: var(--dark-font-1);
      .be-dropdown-menu {
        background: var(--dark-3)!important;
        border-color: var(--dark-3)!important;
        box-shadow: 0 11px 12px 0 var(--dark-3)!important;
        li:hover {
          background-color: var(--dark-2)!important;
        }
        .be-dropdown-item {
          color: var(--dark-font-0);
          &.be-dropdown-item-delimiter {
            border-color: var(--dark-1)!important;
          }
        }
      }
      &.filter-item {
        color: var(--dark-font-0);
      }
      .icon-arrow {
        background-position: -1369px -215px;
      }
    }
    
    .album-card .btn {
      background: var(--dark-3)!important;
      border-color: var(--dark-3)!important;
      color: var(--dark-font-0)!important;
    }
    
    .pgc-space-follow-item .bangumi-options .opt-list {
      background: var(--dark-3)!important;
      border-color: var(--dark-3)!important;
      li {
        color: var(--dark-font-0)!important;
        &:hover {
          color: #00a1d6!important;
          background-color: var(--dark-2)!important;
        }
        &.disabled, &.disabled:hover {
          color: #666666!important;
        }
      }
    }
    
    //拖动排序
    #page-fav .fav-sidenav .icon-cursor {
      background-color: var(--dark-1)!important;
    }
    
    //分页
    .be-pager {
      li.be-pager-item-active {
	      background-color: #00a1d6 !important;
	      border-color: #00a1d6 !important;
      }
      li.be-pager-item, li.be-pager-prev, li.be-pager-next {
        color: var(--dark-font-1)!important;
        background-color: var(--dark-2);
        border-color: var(--dark-3);
        &:hover {
          a {
            color: var(--dark-font-0)!important;
          }
          background-color: #00a1d6;
          border-color: var(--dark-3);
        }
      }
      .be-pager-options-elevator input {
        border-color: var(--dark-3);
        background-color: var(--dark-2);
        color: var(--dark-font-0);
      }
    }
    
    .bangumi-pagelistbox {
       a.p, a.prev-page, a.next-page {
        color: var(--dark-font-1)!important;
        background-color: var(--dark-2);
        border-color: var(--dark-3);
        &:hover {
          a {
            color: var(--dark-font-0)!important;
          }
          background-color: #00a1d6;
          border-color: var(--dark-3);
        }
      }
      .custom-right .custom-right-inner.custompage {
        border-color: var(--dark-3)!important;
        background-color: var(--dark-2)!important;
        color: var(--dark-font-0)!important;
      }
    }
    
    //笔记
    .my-notebook {
      .note-header, .note-single-item {
        border-color: var(--divider)!important;
      }
      .note-single-item {
        .note-item__detail--title {
          color: var(--dark-font-0)!important;
        }
        .note-item__detail--summary {
          color: var(--dark-font-1)!important;
        }
        .note-item__detail--info .update-mtime {
          color: var(--dark-font-2)!important;
        }
      }
      .note-single-item--selected {
        background: var(--dark-3)!important;
      }
    }
    .note-editor {
      color: #222;
    }
    
    //个人标签
    #page-setting {
      #setting-new-tag, #setting-new-tag-btn {
        border-color: var(--dark-3)!important;
        background: var(--dark-2)!important;
      }
      #setting-new-tag {
        color: var(--dark-font-0)!important;
      }
    }
    
    //认证标识修正
    #page-index .col-2 .section .user-auth .auth-icon {
      &.organization-auth {
        background-position: -2px -50px!important;
      }
      &.personal-auth {
        background-position: -36px -50px!important;
      }
    }
    
    //充电图片
    .elec-action {
      .elec-status {
        color: var(--dark-font-0)!important;
        .elec-count {
          color: var(--dark-font-1)!important;
        }
        background-image: url(${_("/statics/images/charging_unfocus.png")})!important
      }
      .elec-status-bg-grey {
        background: var(--dark-card)!important;
      }
      &:hover .elec-status {
         background-image: url(${_("/statics/images/charging_focus.gif")})!important
      }
      .elec-avatar {
        border-color: var(--dark-5)!important;
      }
    }
    
    //弹出框
    .modal-wrapper {
      background-color: var(--dark-3)!important;
      .modal-title, .title {
        border-color: var(--dark-1)!important;
      }
      .modal-title p {
        color: var(--dark-font-0)!important;
      }
      .btn.default {
        background-color: var(--dark-5)!important;
        border-color: var(--dark-5)!important;
        color: var(--dark-font-1)!important;
      }
      .be-input_inner, .be-textarea_inner {
        background: var(--dark-2)!important;
        border-color: var(--dark-1)!important;
        color: var(--dark-font-0);
      }
      .target-followitem {
        color: var(--dark-font-0)!important;
      }
    }
    
    .h .report-popup-item-text {
      color: unset!important;
    }
    
    .edit-media-list .edit-mask {
      .edit-board, .default-edit {
        background-color: var(--dark-3)!important;
        .head {
          color: unset!important;
          border-color: var(--dark-1)!important;
        }
        .info-wrap {
          .name-input, .media-list-intro{
            background: var(--dark-2)!important;
            border-color: var(--dark-1)!important;
            color: var(--dark-font-0);
          }
          .title {
            color: unset!important;
          }
        }
        .media-list-type {
          color: var(--dark-font-1)!important;
        }
        .default-btn-wrap .default-btn.cancel {
          background-color: var(--dark-5)!important;
          border-color: var(--dark-5)!important;
          color: var(--dark-font-1)!important;
        }
      }
    }
    
    #pin-wrapper {
      #pin-layer {
        background-color: var(--dark-3)!important;
      }
      .pin-layer-header {
        color: unset!important;
        border-color: var(--dark-1)!important;
      }
      #pin-layer-search {
        background: var(--dark-2)!important;
        border-color: var(--dark-1)!important;
        color: var(--dark-font-0);
      }
      .pin-layer-order-tip {
        color: unset!important;
      }
      .btn.btn-disabled {
        background-color: var(--dark-4)!important;
        border-color: var(--dark-4)!important;
        color: var(--dark-font-2)!important;
      }
      .btn.default {
        background-color: var(--dark-5)!important;
        border-color: var(--dark-5)!important;
        color: var(--dark-font-1)!important;
      }
    }
    
    .follow-dialog-wrap .follow-dialog-window {
      background-color: var(--dark-3)!important;
      .title {
        color: unset!important;
        border-color: var(--dark-1)!important;
      }
      .content .group-list {
        li {
          color: unset!important;
        }
        .add-group {
          .add-btn {
            color: var(--dark-font-1)!important;
            border-color: var(--dark-1)!important;
          }
          .input-group {
            background-color: var(--dark-2)!important;
            input {
              background: var(--dark-2)!important;
              border-color: var(--dark-1)!important;
              color: var(--dark-font-0);
            }
            .submit {
              background: #d9f1f933!important;
            }
          }
        }
        ul .follow-group-mask {
          background: unset!important;
        }
      }
      .bottom {
        border-color: var(--dark-1)!important;
        .btn:disabled {
          background-color: var(--dark-4)!important;
          border-color: var(--dark-4)!important;
          color: var(--dark-font-2)!important;
        }
      }
    }
    
    .wrapper .edit-video-modal {
      .target-favlist {
        .target-favitem .target-fav-title .fav-meta .fav-name, .target-fav-count {
          color: unset!important;
        }
      }
      .addfav-container {
        .fake-fav-input {
          color: var(--dark-font-1)!important;
          border-color: var(--dark-1)!important;
        }
        .fav-container {
          background-color: var(--dark-2)!important;
          input {
            background: var(--dark-2)!important;
            border-color: var(--dark-1)!important;
            color: var(--dark-font-0);
          }
          .fav-add-btn {
            background: #d9f1f933!important;
          }
        }
      }
      .favlist-body:after {
        background: var(--dark-1)!important;
      }
      .btn.ghost {
        background-color: var(--dark-4)!important;
        border-color: var(--dark-4)!important;
        color: var(--dark-font-2)!important;
      }
    }
    
    .fans-action-btn {
      color: var(--dark-font-1);
    }
    
    .fans-action-follow {
      background-color: var(--dark-5)!important;
      color: var(--dark-font-1);
    }
    
    #id-card {
      background: var(--dark-3)!important;
      .idc-meta, .idc-auth-description {
        color: var(--dark-font-1)!important;
      }
      .idc-avatar {
        border-color: var(--dark-3)!important;
      }
      .btn-center {
        a.primary {
          color: #fff!important;
          border-color: #00a1d6!important;
          background-color: #00a1d6!important;
        }
        a.primary:hover {
          border-color: #00b5e5!important;
          background-color: #00b5e5!important;
        }
        a, a.ghost {
          background: var(--dark-5)!important;
          color: var(--dark-font-1)!important;
          border-color: var(--dark-5)!important;
          &:hover {
            background: var(--dark-4)!important;
          }
        }
      }
      .idc-content {
        a .idc-uname{
          color: var(--dark-font-0)!important;
          &.this-is-vip {
            color: #fb7299!important;
          }
          &:hover {
            color: #00A1D6!important;
          }
        }
      }
    }
    .album-list {
      .album-list__title {
        color: var(--dark-font-1);
      }
      .album-list__tabs {
        background-color: var(--bg);
        .album-list__tab {
          .album-list__tab-name {
            color: var(--dark-font-1);
          }
        }
      }
      .album-card {
        .album-card__title {
          color: var(--dark-font-1);
        }
      }
    }
    ${L}
  `,q=l.AH`
	:root {
		--Ga0: #101011 !important;
		--Ga0_s: #1E2022 !important;
		--Ga0_t: #1E2022 !important;
		--Ga1: #0A0B0C !important;
		--Ga1_s: #232527 !important;
		--Ga1_t: #232527 !important;
		--Ga1_e: #232527 !important;
		--Ga2: #2F3134 !important;
		--Ga2_t: #2F3134 !important;
		--Ga3: #46494D !important;
		--Ga3_t: #46494D !important;
		--Ga4: #5E6267 !important;
		--Ga4_t: #5E6267 !important;
		--Ga5: #757A81 !important;
		--Ga5_t: #757A81 !important;
		--Ga6: #8B9097 !important;
		--Ga6_t: #8B9097 !important;
		--Ga7: #A2A7AE !important;
		--Ga7_t: #A2A7AE !important;
		--Ga8: #B9BDC2 !important;
		--Ga8_t: #B9BDC2 !important;
		--Ga9: #D0D3D7 !important;
		--Ga9_t: #D0D3D7 !important;
		--Ga10: #E7E9EB !important;
		--Ga10_t: #E7E9EB !important;
		--Ga11: #242628 !important;
		--Ga12: #1F2022 !important;
		--Ga12_s: #2B2C2F !important;
		--Ga13: #1A1B1D !important;
		--Ga13_s: #2F3134 !important;
		--Wh0: #17181A !important;
		--Wh0_s: #2F3134 !important;
		--Wh0_t: #17181A !important;
		--Ba0: #000000 !important;
		--Ba0_s: #FFFFFF !important;
		--Ba0_t: #000000 !important;
		--Pi0: #26161C !important;
		--Pi1: #2F1A22 !important;
		--Pi2: #472030 !important;
		--Pi3: #76304B !important;
		--Pi4: #A73E65 !important;
		--Pi5: #D44E7D !important;
		--Pi5_t: #D44E7D !important;
		--Pi6: #DC6D94 !important;
		--Pi7: #E38CAA !important;
		--Pi8: #EBABC1 !important;
		--Pi9: #F2CAD8 !important;
		--Pi10: #FAE9EF !important;
		--Ma0: #261525 !important;
		--Ma1: #2E182D !important;
		--Ma2: #461C43 !important;
		--Ma3: #72296C !important;
		--Ma4: #A13396 !important;
		--Ma5: #CB41BB !important;
		--Ma6: #D462C7 !important;
		--Ma7: #DD83D3 !important;
		--Ma8: #E6A4DE !important;
		--Ma9: #EFC5EA !important;
		--Ma10: #F8E6F6 !important;
		--Re0: #261314 !important;
		--Re1: #2E1617 !important;
		--Re2: #471A1C !important;
		--Re3: #742728 !important;
		--Re4: #A63131 !important;
		--Re5: #D1403E !important;
		--Re6: #D9615F !important;
		--Re7: #E18281 !important;
		--Re8: #E9A3A2 !important;
		--Re9: #F1C5C4 !important;
		--Re10: #F9E5E5 !important;
		--Or0: #28180F !important;
		--Or1: #301B10 !important;
		--Or2: #4A230E !important;
		--Or3: #783610 !important;
		--Or4: #A9490D !important;
		--Or5: #D66011 !important;
		--Or6: #DD7C3A !important;
		--Or7: #E49764 !important;
		--Or8: #EBB38D !important;
		--Or9: #F2CEB6 !important;
		--Or10: #FAEADF !important;
		--Ye0: #2A1E0F !important;
		--Ye1: #342410 !important;
		--Ye2: #4D300B !important;
		--Ye3: #7C4C08 !important;
		--Ye4: #AD6800 !important;
		--Ye5: #DB8700 !important;
		--Ye6: #E19C2C !important;
		--Ye7: #E7B158 !important;
		--Ye8: #EEC584 !important;
		--Ye9: #F4DAB1 !important;
		--Ye10: #FAEFDD !important;
		--Ly0: #2A2310 !important;
		--Ly1: #332A11 !important;
		--Ly2: #49390C !important;
		--Ly3: #745909 !important;
		--Ly4: #A27C00 !important;
		--Ly5: #CCA000 !important;
		--Ly6: #D5B02C !important;
		--Ly7: #DEC158 !important;
		--Ly8: #E7D184 !important;
		--Ly9: #EFE2B1 !important;
		--Ly10: #F8F2DD !important;
		--Lg0: #19220F !important;
		--Lg1: #1E2911 !important;
		--Lg2: #273C0E !important;
		--Lg3: #3C600F !important;
		--Lg4: #50840B !important;
		--Lg5: #67A70E !important;
		--Lg6: #81B638 !important;
		--Lg7: #9CC562 !important;
		--Lg8: #B6D58B !important;
		--Lg9: #D0E4B5 !important;
		--Lg10: #EBF3DF !important;
		--Gr0: #102017 !important;
		--Gr1: #11271B !important;
		--Gr2: #123923 !important;
		--Gr3: #175C34 !important;
		--Gr4: #198042 !important;
		--Gr5: #1FA251 !important;
		--Gr6: #46B26F !important;
		--Gr7: #6DC28D !important;
		--Gr8: #93D2AB !important;
		--Gr9: #BAE2C9 !important;
		--Gr10: #E1F3E8 !important;
		--Cy0: #0C1F20 !important;
		--Cy1: #0D2627 !important;
		--Cy2: #093739 !important;
		--Cy3: #085B5C !important;
		--Cy4: #028080 !important;
		--Cy5: #03A29F !important;
		--Cy6: #2FB2B0 !important;
		--Cy7: #5AC2C0 !important;
		--Cy8: #86D2D1 !important;
		--Cy9: #B2E2E1 !important;
		--Cy10: #DDF3F3 !important;
		--Lb0: #0A1B23 !important;
		--Lb1: #0B202A !important;
		--Lb2: #082D40 !important;
		--Lb3: #064A69 !important;
		--Lb4: #006996 !important;
		--Lb5: #0087BD !important;
		--Lb6: #2C9CC8 !important;
		--Lb7: #58B1D4 !important;
		--Lb8: #84C5DF !important;
		--Lb9: #B1DBEB !important;
		--Lb10: #DDEFF6 !important;
		--Bl0: #151826 !important;
		--Bl1: #181C2F !important;
		--Bl2: #1F2748 !important;
		--Bl3: #2E3C76 !important;
		--Bl4: #3B53A8 !important;
		--Bl5: #4B6BD4 !important;
		--Bl6: #6A85DB !important;
		--Bl7: #899EE3 !important;
		--Bl8: #A9B8EA !important;
		--Bl9: #C8D2F2 !important;
		--Bl10: #E7EBF9 !important;
		--Pu0: #1D1628 !important;
		--Pu1: #221A31 !important;
		--Pu2: #31214C !important;
		--Pu3: #4E317D !important;
		--Pu4: #6D3FB1 !important;
		--Pu5: #8C50E0 !important;
		--Pu6: #A06EE5 !important;
		--Pu7: #B48DEB !important;
		--Pu8: #C8ABF0 !important;
		--Pu9: #DBC9F5 !important;
		--Pu10: #F0E8FB !important;
		--Br0: #211D1B !important;
		--Br1: #282320 !important;
		--Br2: #382F2A !important;
		--Br3: #59483F !important;
		--Br4: #7A6154 !important;
		--Br5: #9A7C6A !important;
		--Br6: #AC9384 !important;
		--Br7: #BDA99E !important;
		--Br8: #CEBFB7 !important;
		--Br9: #E0D7D1 !important;
		--Br10: #F2EEEB !important;
		--Si0: #212325 !important;
		--Si1: #27292C !important;
		--Si2: #36393F !important;
		--Si3: #535962 !important;
		--Si4: #6F7987 !important;
		--Si5: #8C99AA !important;
		--Si6: #A0ABB9 !important;
		--Si7: #B4BCC7 !important;
		--Si8: #C8CED6 !important;
		--Si9: #DCE0E5 !important;
		--Si10: #F0F2F4 !important;
		--Ga0_rgb: 16, 16, 17 !important;
		--Ga0_s_rgb: 30, 32, 34 !important;
		--Ga1_rgb: 10, 11, 12 !important;
		--Ga1_s_rgb: 35, 37, 39 !important;
		--Ga2_rgb: 47, 49, 52 !important;
		--Ga3_rgb: 70, 73, 77 !important;
		--Ga5_rgb: 117, 122, 129 !important;
		--Ga7_rgb: 162, 167, 174 !important;
		--Ga10_rgb: 231, 233, 235 !important;
		--Ga11_rgb: 36, 38, 40 !important;
		--Ga12_rgb: 31, 32, 34 !important;
		--Ga12_s_rgb: 43, 44, 47 !important;
		--Ga13_rgb: 26, 27, 29 !important;
		--Ga13_s_rgb: 47, 49, 52 !important;
		--Wh0_rgb: 23, 24, 26 !important;
		--Wh0_s_rgb: 47, 49, 52 !important;
		--Ba0_rgb: 0, 0, 0 !important;
		--Pi1_rgb: 47, 26, 34 !important;
		--Pi5_rgb: 212, 78, 125 !important;
		--Re1_rgb: 46, 22, 23 !important;
		--Re5_rgb: 209, 64, 62 !important;
		--Or1_rgb: 48, 27, 16 !important;
		--Or5_rgb: 214, 96, 17 !important;
		--Ye1_rgb: 52, 36, 16 !important;
		--Ye5_rgb: 219, 135, 0 !important;
		--Ye6_rgb: 225, 156, 44 !important;
		--Gr1_rgb: 17, 39, 27 !important;
		--Gr5_rgb: 31, 162, 81 !important;
		--Lb1_rgb: 11, 32, 42 !important;
		--Lb5_rgb: 0, 135, 189 !important;
		--Lb7_rgb: 88, 177, 212 !important;
        --bg1: var(--bg) !important;
	}
	
	#app {
		.video-title {
			color: var(--Bl0_u) !important;
		}
		
		.bilibili-player-video-sendbar {
			background: var(--Ga0) !important;
			
			.bilibili-player-video-info {
				color: var(--Ga5_u) !important;
			}
			
			.bilibili-player-video-inputbar {
				background: var(--dark-4) !important;
				
				.bilibili-player-video-inputbar-wrap {
					border-color: var(--Ba0_t) !important;
				}
			}
		}
		
		#bilibiliPlayer {
			box-shadow: 0 0 8px var(--Ba0) !important;
		}
	}
	
	body.player-fullscreen-fix {
		#app .bilibili-player-video-sendbar {
			background-color: transparent !important;
		}
	}
`,W=l.AH`
	// 新新新版番剧页面信息
	/*body [class^=mediainfo]:not(:hover,:active) {
      //color: var(--dark-font-0) !important;
    }*/
	
	// 番剧介绍
[ class ^= mediainfo_media_info ] {
[ class ^= mediainfo_media_right ] {
	a:not(:hover), p, span {
		color: var(--dark-font-1) !important;
	}

[ class ^= mediainfo_media_title ] {
	color: var(--dark-font-3);
}
} [ class ^= mediainfo_ellipsis ] {
	background: none !important;
}
	
	// 评星级
	
	#ogv-weslie-media-info-review {
		border-color: var(--dark-card) !important;
		background-color: var(--dark-card) !important;
		
		&:hover {
			border-color: var(--dark-3) !important;
			background-color: var(--dark-3) !important;
		}
	}
	
	#ogv-weslie-media-info-follow {
		background-color: var(--dark-card) !important;
	
	[ class ^= mediainfo_follow_options ] {
	[ class ^= mediainfo_follow_options_list ] {
		background-color: var(--dark-0) !important;
		border-color: var(--dark-0) !important;
		
		li {
			color: var(--dark-font-2) !important
		}
	}
	}
	}
}
	
	// 分割线
[ class ^= operation_split_line ],
[ class ^= mediainfo_media_info ],
#review-module,
#comment-module,
. bb-comment . comment-header,
. comment-bilibili-fold . comment-header,
. bb-comment . comment-list . list-item . con,
. comment-bilibili-fold . comment-list . list-item . con {
	border-color: var(--divider) !important;
}
	
	.bb-comment, .comment-bilibili-fold {
		background: none !important;
	}
	
	// 右侧边栏
[ class ^= paybar_btn_pay ] {
	background-color: var(--dark-2) !important;
	border-color: transparent !important;
}
	
	#danmukuBox {
		background-color: unset !important;
	}

[ class ^= eplist_list_title ] {
	h4 {
		color: var(--dark-font-1) !important;
	}
}
	
	// 长标题选集
[ class ^= longListItem_wrap ] {
	margin-right: 6px;
	width: auto;
	
	&:hover {
		background-color: var(--dark-3) !important;
	}
	
	&[class*=longListItem_select] {
		background-color: var(--dark-3) !important;
	}
}
	
	
	// 数字选集
[ class ^= numberListItem_number_list_item ] {
	border-color: transparent !important;
	background-color: var(--dark-3) !important;
	
	&[class*=numberListItem_select] {
		border-color: var(--bilibili-blue) !important;
	}

[ class ^= numberListItem_title ] {
	color: var(--dark-font-1) !important;
}
} [ class ^= numberList_wrapper ], [ class ^= longList_wrap ] {
[ class ^= numberListItem_title ], [ class ^= longListItem_wrap ] {
	color: var(--dark-font-1) !important;
}
}
	
	// 其他选集卡片
[ class ^= section_ep_section_module ] {
	background-color: var(--dark-2) !important;

[ class ^= section_section_title ] {
	color: var(--dark-font-1) !important;
} [ class ^= epitem_ep_item ] {
	&:hover, &[class*=epitem_cursor] {
		background-color: var(--dark-3) !important;
	}


[ class ^= epitem_ep_title ] {
	color: var(--dark-font-2) !important;
}
}
}
	
	
	// 点评区
	
	#review-module {
	[ class ^= review_module_title ] {
		color: var(--dark-font-3) !important;
	} [ class ^= review_review_item_fill ] {
		background: var(--dark-card) !important;
	
	[ class ^= review_review_title ], [ class ^= review_review_content ], [ class ^= review_review_author ] {
		color: var(--dark-font-1) !important;
	}
	}
	}
	
	// 评论区
	
	.comment-emoji {
		margin-top: 8px;
		line-height: 20px;
		border-color: var(--dark-card) !important;
		background-color: var(--dark-card) !important;
		box-shadow: none !important;
	}
	
	.comment-send-lite .textarea-container textarea {
		background-color: var(--dark-2) !important;
	}
	
	// 推荐区
[ class ^= RecommendItem_title ], [ class ^= seasonlist_ss_title ] {
	color: var(--dark-font-0) !important;
}
	
	${L}
	.comment-send-lite {
		background-color: var(--bg) !important;
	}
`,z=l.AH`
	div[data-video-assistant-subject-wrapper] {
		div[data-video-assistant-subject] {
			--app_bg: var(--dark-2);
			--app_graph_bg: var(--dark-6);
            --graph_bg_regular_float: var(--dark-2);
		}
	}
`,V=l.DU`
	body {
		color: var(--dark-font-0);
	}
	
	// 播放器mini窗口
	#bofqi.mini-player:before {
		box-shadow: #000 0 0 8px;
	}
	
	// 视频信息
	#v_desc {
		.info, .desc-info {
			color: #879199;
		}
	}
	
	// 新合集
	.base-video-sections, .base-video-sections-v1 {
		background-color: #131313 !important;
		
		.first-line-title, .video-episode-card__info-title {
			color: var(--dark-font-1) !important;
		}
		
		.video-episode-card__info-playing {
			background-color: var(--paper-grey-900) !important;
		}
	}
	
	// 创作团队
	.members-info {
		.members-info__header {
			background-color: var(--dark-1);
			
			.title, .btn {
				color: var(--dark-font-1);
			}
		}
		
		.up-card {
			.avatar .info-tag {
				background-color: var(--dark-4) !important;
			}
			
			.avatar-name__container .name-text {
				color: var(--dark-font-0);
			}
			
			.attention {
				background-color: var(--dark-5) !important;
			}
		}
		
		.wide-members {
			.wide-members__title {
				color: var(--dark-font-1);
			}
			
			.avatar {
				border-color: var(--dark-5);
				
				.info-tag {
					background-color: var(--dark-4) !important;
				}
				
				.up-name {
					color: var(--dark-font-0);
				}
			}
			
			.van-icon-general_back_s, .van-icon-general_enter_s {
				&:before {
					background-color: var(--dark-6);
				}
			}
			
			.van-icon-general_back_s:after {
				background: linear-gradient(-270deg, #000, hsla(0, 0%, 100%, 0)) !important;
			}
			
			.van-icon-general_enter_s:after {
				background: linear-gradient(270deg, #000, hsla(0, 0%, 100%, 0)) !important;
			}
		}
	}
	
	// up信息
	.up-info {
		.btn .b-cd {
			background: var(--dark-3) !important;
		}
		
		.up-info_right {
			.name {
				.username {
					color: var(--dark-font-0);
				}
				
				.message {
					color: var(--dark-font-1);
				}
			}
			
			.btn-panel {
				.charge-btn {
					background: var(--dark-3) !important;
				}
			}
		}
		
		.btn-panel {
			.following {
				background-color: var(--dark-5);
				border-color: var(--dark-5);
			}
			
			.default-btn:not(.btn-transition) {
				background-color: var(--dark-1);
			}
		}
	}
	
	.bili-header-m .nav-menu .nav-mask {
		background-color: var(--dark-1) !important;
	}
	
	.nav-wrapper .nav-con ul li a {
		color: var(--dark-font-1) !important;
	}
	
	#viewbox_report .video-title .tit, .media-wrapper > h1,
	.media-right > *:not(.media-tool-bar),
	.media-right > *:not(.media-tool-bar) a, .media-right > *:not(.media-tool-bar) span {
		color: var(--dark-font-0) !important;
	}
	
	.main-container .media-info .media-right .media-tool-bar {
		.btn-rating {
			background-color: var(--dark-5);
			border-color: var(--dark-5);
			color: var(--dark-font-1) !important;
			
			&:hover {
				background-color: var(--dark-4);
			}
		}
		
		.btn-follow.active {
			background-color: var(--dark-5) !important;
		}
		
		.bangumi-options .opt-list {
			background: var(--dark-3) !important;
			border-color: var(--dark-3) !important;
			
			li {
				color: var(--dark-font-0) !important;
				
				&:hover {
					color: #00a1d6 !important;
					background-color: var(--dark-2) !important;
				}
				
				&.disabled, &.disabled:hover {
					color: #666 !important;
				}
			}
		}
	}
	
	.main-container {
		background-color: transparent !important;
	}
	
	[class^="mediainfo_mediaInfo"], [class^="recommend_wrap"] {
		border-color: var(--divider) !important;
	}
	[class^="eplist_ep_list_wrapper"] {
		background-color: var(--dark-1) !important;
	[ class ^= "SectionSelector_expand" ] {
		background: linear-gradient(270deg, var(--dark-1) 46.21%, hsla(210, 8%, 95%, 0)) !important;
	}
	}
	
	.bili-comment.browser-pc {
		background-color: transparent !important;
	}
	
	.reply-box.fixed-box {
		background-color: var(--bg) !important;
	}
	
	.main-container .plp-l .player-mask .player-limit-mask {
		background-color: var(--dark-0) !important;
	}
	
	.main-container .plp-l .player-mask .bar-wrapper {
		background-color: var(--dark-5) !important;
	}
	
	.main-container .pre-mask, .main-container .season-list .ss-list-wrapper .ss-item .ss-cover, .main-container .media-info .media-cover, .main-container .plp-l .player-mask .bar-wrapper .left-bar, .main-container .plp-l .player-mask .bar-wrapper .right-bar {
		background-color: var(--dark-1) !important;
	}
	
	.player-module .player-tool-bar {
		background: unset !important;
	}
	
	#bilibiliPlayer, .bpx-player-container {
		box-shadow: 0 0 8px var(--dark-1);
	}
	
	#bilibili-player.mini-player:before {
		box-shadow: 0 0 5px var(--dark-1) !important;
	}
	
	#paybar_module {
		.vip a.btn-pay.active {
			background-color: var(--dark-1) !important;
			border: 1px solid var(--dark-3);
		}
	}
	
	#member-container {
		.up-card {
			.info-name {
				color: #c7c7c7;
			}
		}
	}
	
	// tags
	#v_tag {
		border-color: var(--divider) !important;
		
		ul li {
			background-color: var(--dark-1) !important;
			border-color: var(--dark-1) !important;
			
			.tag-item {
				border-color: var(--dark-0);
				background-color: var(--dark-1);
			}
			
			.tag-info-pane, a, .text {
				background-color: var(--dark-1) !important;
				color: var(--dark-font-1) !important;
			}
		}
		
		.btn-add, .ipt {
			background-color: var(--dark-2) !important;
			border-color: var(--dark-1) !important;
			color: var(--dark-font-1) !important;
		}
	}
	
	// 新版播放器
	.bpx-player-filter {
		background-color: var(--dark-2) !important;
	}
	
	.bpx-player-sending-area .bpx-player-sending-bar {
		background-color: var(--dark-0) !important;
	}
	
	.bpx-player-video-inputbar {
		background-color: var(--dark-5) !important;
	}
	
	.bpx-player-video-inputbar-wrap {
		border-color: var(--dark-5) !important;
	}
	
	.bpx-player-dm-btn-footer {
		background-color: var(--dark-0) !important;
		
		&:hover {
			color: var(--dark-font-2) !important;
		}
	}
	
	.bpx-player-dm-btn-history {
		background-color: var(--dark-0) !important;
	}
	
	.bpx-player-date-picker {
		border-color: var(--dark-0) !important;
		background-color: var(--dark-3) !important;
	}
	
	.bpx-player-date-picker-header {
		border-color: var(--dark-4) !important;
	}
	
	.bpx-player-date-picker-day {
		border-color: transparent !important;
		color: var(--dark-6) !important;
		
		&.day-enable {
			color: var(--dark-font-1) !important;
		}
	}
	
	.bpx-player-dm-load-status {
		background-color: var(--dark-0) !important;
		color: var(--dark-font-1) !important;
	}
	
	.dm-info-dm {
		color: var(--dark-font-1) !important;
	}
	
	.bui-long-list-item {
		&.bui-long-list-item-selected {
			.dm-info-row {
				background-color: var(--dark-3) !important;
			}
		}
		
		.dm-info-block-btn, .dm-info-report-btn {
			background-color: var(--dark-3) !important;
		}
	}
	
	// 举报窗口 
	.bpx-player-report-box {
		background-color: var(--dark-3) !important;
		box-shadow: none !important;
		border: 1px solid var(--dark-0) !important;
		
		.bpx-player-report-title {
			border-bottom-color: var(--dark-4) !important;
		}
		
		.bpx-player-report-content {
			color: var(--dark-font-0) !important;
		}
	}
	
	// 弹幕列表
	.player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function [class*=player-auxiliary-danmaku-btn-],
	.player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function,
	.danmaku-wrap,
		// 新版番剧播放器
	.bpx-player-dm-function,
	.bpx-player-auxiliary .bpx-player-dm-function .bpx-player-dm-btn-date,
	.bpx-player-auxiliary .bpx-player-dm-function .bpx-player-dm-btn-dm,
	.bpx-player-auxiliary .bpx-player-dm-function .bpx-player-dm-btn-time
	{
		background: #191919 !important;
		color: var(--dark-font-1) !important;
		
		.player-auxiliary-area {
			.player-auxiliary-danmaku-wrap, .player-auxiliary-danmaku-btn-history, .player-auxiliary-danmaku-btn-footer {
				background: #191919 !important;
			}
		}
		
		.player-auxiliary-danmaku-contaner {
			.player-auxiliary-danmaku-load-status {
				background: #191919 !important;
				color: #fff;
			}
		}
	}
	.bpx-player-auxiliary .bpx-player-dm-wrap {
		background-color: var(--dark-2) !important;
	}
	
	.video-pod {
		background-color: var(--dark-2) !important;
	}
	
	.player-auxiliary-area {
		background: #191919 !important;
	}
	
	.player-auxiliary-danmaku-load-status {
		background: unset !important;
		
		&.disabled {
			color: var(--dark-font-1) !important;
		}
	}
	
	.danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-wrap .bscroll-vertical-scrollbar {
		background-color: black !important;
	}
	
	.danmaku-info-row {
		.danmaku-info-danmaku, span {
			color: var(--dark-font-1) !important;
		}
		
		&.danmaku-info-row-block {
			opacity: 0.3 !important;
		}
	}
	
	.player-auxiliary-area .player-auxiliary-filter {
		.player-auxiliary-filter-title {
			color: var(--dark-font-1) !important;
		}
		
		.player-auxiliary-setting-menu-wrap, .player-auxiliary-viewpointlist {
			background-color: var(--dark-1) !important;
			border-color: var(--dark-1) !important;
			
			.player-auxiliary-setting-menu-list {
				background-color: var(--dark-1) !important;
				color: var(--dark-font-1) !important;
				
				&:hover {
					background-color: var(--dark-3) !important;
				}
			}
		}
	}
	
	.player-auxiliary-collapse-viewpointlist {
		background: none !important;
	}
	
	.player-auxiliary-filter-wrap {
		background-color: #191919 !important;
	}
	
	.player-auxiliary-viewpointlist-item {
		.player-auxiliary-viewpointlist-info {
			.player-auxiliary-viewpointlist-content {
				color: var(--dark-font-1) !important;
			}
			
			.player-auxiliary-viewpointlist-time {
				color: var(--dark-font-2) !important;
			}
		}
	}
	
	.player-auxiliary-playlist-item-p-item-active {
		color: #00a1d6 !important;
	}
	
	.player-auxiliary-playlist-bottom {
		border-color: var(--dark-3) !important;
	}
	
	.danmaku-wrap .player-auxiliary-block .player-auxiliary-block-tabpanel {
		.player-auxiliary-block-tabpanel-row {
			&.special-title .player-auxiliary-block-label {
				color: var(--dark-font-1) !important;
			}
			
			&.player-auxiliary-border {
				background-color: var(--dark-3) !important;
			}
		}
		
		.player-auxiliary-block-string-short {
			background: var(--dark-4) !important;
			border-color: var(--dark-4) !important;
			
			&:focus {
				color: var(--dark-font-0) !important;
			}
		}
		
		.bui-button.bui-button-gray:not(:hover) {
			background: var(--dark-5) !important;
			color: var(--dark-font-1) !important;
		}
		
		.bui-tabs .bui-tabs-header .bui-tabs-header-item:not(.bui-tabs-header-item-active) {
			color: var(--dark-font-1);
		}
		
		.player-auxiliary-block-list-wrap .player-auxiliary-block-list .player-auxiliary-block-line {
			color: var(--dark-font-3) !important;
			background: var(--dark-4) !important;
		}
	}
	
	// 弹幕列表管理菜单
	.danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-management {
		background-color: var(--dark-3) !important;
		
		& > * {
			border-color: var(--dark-1) !important;
		}
		
		.player-auxiliary-danmaku-wrap .player-auxiliary-danmaku-load-status {
			background: transparent !important;
		}
	}
	
	
	.v-wrap {
		background: none !important;
		
		.danmaku-wrap {
			background-color: var(--dark-2) !important;
		}
	}
	
	.bui-collapse-wrap {
		background-color: var(--dark-2) !important;
		border-radius: 6px;
		
		.bui-collapse-header, .player-auxiliary-filter {
			background-color: var(--dark-2) !important;
		}
		
		.bui-collapse-body {
			background-color: var(--dark-2) !important;
			
			.player-auxiliary-playlist-item-active, .player-auxiliary-playlist-item:hover {
				.player-auxiliary-playlist-item-title {
					color: #00a1d6;
				}
			}
			
			.player-auxiliary-playlist-item-title {
				color: var(--dark-font-1);
			}
		}
		
		.player-auxiliary-playlist-item-p-list {
			.player-auxiliary-playlist-item-p-item {
				color: inherit;
				
				:hover {
					background-color: var(--paper-grey-900) !important;
				}
			}
		}
	}
	
	.bui-collapse .bui-collapse-header, .player-auxiliary-filter, .membersinfo-normal .header {
		background: var(--dark-2);
		
		span {
			color: var(--dark-font-1);
		}
	}
	
	// 选集列表
	#eplist_module, #multi_page, .ep-section-module {
		background-color: var(--dark-2);
		
		.list-wrapper.longlist {
			padding-right: 6px;
		}
		
		.list-wrapper.simple li {
			width: 64px;
		}
		
		.list-title, .head-con {
			h4, h3 {
				color: var(--dark-font-1);
			}
		}
		
		.section-title {
			color: var(--dark-font-1);
		}
		
		.module-box {
			li {
				&:not(.on):not(:hover) {
					border-color: var(--dark-3);
					background-color: #232323;
					
					a {
						color: var(--dark-font-1);
					}
				}
				
				&:not(.on):hover {
					background-color: #232323;
				}
			}
		}
		
		.list-wrapper, .cur-list .list-box, .section-ep-wrapper {
			&.simple {
				.ep-item:not(.cursor) {
					color: var(--dark-font-1);
					border-color: var(--dark-3);
					background-color: #232323;
				}
			}
			
			.ep-item, li {
				width: auto;
				margin-right: 5px;
				color: var(--dark-font-1);
				
				a {
					color: var(--dark-font-1);
				}
				
				&.cursor, & {
					background-color: #232323;
				}
				
				&.visited, &.watched {
					color: #757575;
				}
				
				&:hover {
					background-color: var(--dark-3);
					color: var(--dark-font-1);
				}
			}
		}
	}
	
	.video-sections {
		background-color: var(--dark-2) !important;
		
		.video-sections-head {
			.first-line-left {
				.first-line-title {
					color: var(--dark-font-1) !important;
				}
			}
			
			.video-sections-head_second-line {
				button {
					background: transparent !important;
				}
			}
			
			.border-bottom-line {
				background: var(--dark-4) !important;
			}
		}
		
		.video-sections-content-list {
			.video-sections-item {
				background-color: var(--dark-2) !important;
				border-color: var(--dark-1) !important;
				
				.video-section-title {
					background: var(--dark-1) !important;
					color: var(--dark-font-1) !important;
				}
				
				.video-episode-card {
					.video-episode-card__info-title {
						color: var(--dark-font-1) !important;
						
						&.video-episode-card__info-title-playing, &:hover {
							color: #00a1d6 !important;
						}
					}
				}
			}
		}
	}
	
	//广告
	.slide-ad .slide-gg {
		background: var(--dark-1) !important;
	}
	
	a.ad-report {
		color: var(--dark-font-3);
		
		.vcd {
			.cover {
				background: var(--dark-1) !important;
			}
		}
	}
	
	// 播放器工具栏
	.bilibili-player {
		background: unset !important;
	}
	
	.bilibili-player-video-bottom-area {
		:before {
			background: var(--dark-2) !important;
		}
	}
	
	.bilibili-player-video-sendbar {
		background: transparent !important;
		
		.bilibili-player-video-inputbar {
			background-color: unset !important;
			
			.bilibili-player-video-inputbar-wrap {
				border-color: var(--dark-4) !important;
				background-color: var(--dark-4);
			}
			
			.bilibili-player-video-danmaku-input {
				color: var(--dark-font-1) !important;
			}
		}
		
		.bilibili-player-video-sendbar-left, .bilibili-player-video-sendbar-right {
			background-color: var(--dark-1) !important;
		}
	}
	
	// 交互栏
	#arc_toolbar_report, #toolbar_module, #media_module, .main-container .review-module {
		border-color: var(--divider) !important;
		
		.more-ops-list {
			background-color: var(--dark-1) !important;
			border-color: var(--dark-1) !important;
			box-shadow: unset !important;
			color: var(--dark-font-1) !important;
			
			li:hover {
				background-color: var(--dark-3) !important;
			}
		}
		
		.media-desc i {
			background-color: var(--bg);
		}
	}
	
	.media-tool-bar {
		.btn-rating {
			background-color: var(--dark-1);
			border-color: var(--dark-1);
		}
	}
	
	// 活动
	.activity-m {
		.onlytip {
			color: var(--dark-font-1);
		}
		
		.inside-wrp {
			border-color: var(--dark-1);
			background-color: var(--dark-1);
			
			.left {
				color: var(--dark-font-1);
			}
			
			.right .inside-bg:before {
				background-image: linear-gradient(90deg, var(--dark-1), transparent 30%);
			}
		}
	}
	
	// 评价
	#review_module {
		border-color: var(--divider) !important;
		
		.review-list .review-item .review-body {
			background-color: var(--dark-1) !important;
			
			.review-header .review-author, .review-title {
				color: var(--dark-font-1)
			}
			
			.review-content {
				color: var(--dark-font-1) !important;
			}
		}
	}
	
	// 承包榜
	#sponsor_module {
		border-color: var(--divider) !important;
		
		.sponsor-rank-header {
			h3, .sponsor-rank-tab li {
				color: var(--dark-font-1) !important;
			}
		}
		
		.sponsor-rank-item {
			.sp-right .sp-msg {
				color: var(--dark-font-1) !important;
				border-color: var(--dark-1) !important;
				background-color: var(--dark-1) !important;
			}
		}
	}
	
	// 右侧视频推荐区
	#recom_module {
		.recom-title, .recom-list .video-title {
			color: var(--dark-font-3);
		}
		
		.expand-more {
			background-color: var(--dark-1);
			color: var(--dark-font-1);
		}
	}
	
	#reco_list {
		.rec-title {
			color: var(--dark-font-3);
		}
		
		.card-box {
			.pic-box {
				background: var(--dark-1) !important;
			}
			
			.info .title {
				color: var(--dark-font-3);
			}
		}
		
		a:hover {
			color: #00a1d6 !important;
		}
		
		.rec-footer {
			background-color: var(--dark-1);
		}
	}
	
	// 收藏页面右侧推荐区
	.rcmd-list {
		.remd-video-card {
			.info {
				.title {
					color: var(--dark-font-1) !important;
				}
				
				.count a {
					color: var(--dark-font-2) !important;
				}
			}
		}
	}
	
	// 番剧剧集信息
	#seasonlist_module {
		.series-title, [class^=seasonlist_series_title], .ss-list-wrapper .ss-item .ss-info .ss-title {
			color: var(--dark-font-3);
		}
		
		.ss-list-wrapper .ss-item .ss-info {
			.ss-title {
				color: var(--dark-font-3);
			}
			
			.pub-info {
				color: var(--dark-font-3);
			}
		}
		
		.expand-more {
			background-color: var(--dark-1);
			color: var(--dark-font-1);
		}
	}
	
	// 直播推荐 
	#live_recommand_report .pl__card {
		border-color: var(--dark-1);
		background-color: var(--dark-1);
		
		.pl__info .pl__title {
			color: var(--dark-font-1);
		}
	}
	
	// 侧边按钮
	.float-nav .nav-menu .item, .main-container .nav-tools .tool-item {
		background-color: var(--dark-4);
		border-color: var(--dark-4);
	}
	
	//投币弹出
	.coin-operated-m {
		background-color: var(--dark-3);
		
		.coin-title, .like-checkbox {
			color: var(--dark-font-0);
		}
		
		.mc-box {
			background-color: #fff;
		}
	}
	
	//收藏弹出
	.collection-m {
		background-color: var(--dark-3);
		
		.title {
			border-color: var(--dark-1) !important;
			color: var(--dark-font-0) !important;
		}
		
		.content .group-list {
			li .fav-title {
				color: var(--dark-font-0);
			}
			
			ul .collection-mask {
				background-color: unset !important;
			}
		}
		
		.add-group {
			.add-btn {
				color: var(--dark-font-1) !important;
				border-color: var(--dark-1) !important;
			}
			
			.input-group {
				background-color: var(--dark-2) !important;
				
				input {
					background: var(--dark-2) !important;
					border-color: var(--dark-1) !important;
					color: var(--dark-font-0);
				}
				
				.submit {
					background: #d9f1f933 !important;
				}
			}
		}
		
		.bottom {
			border-color: var(--dark-1) !important;
			
			.btn.disable {
				background-color: var(--dark-4) !important;
				border-color: var(--dark-4) !important;
				color: var(--dark-font-2) !important;
			}
		}
	}
	
	//转发弹出
	.video-toolbar .ops .share .share-pos {
		background-color: var(--dark-card) !important;
		border-color: var(--dark-card) !important;
		color: var(--dark-font-1);
		
		.box-a .share-down .share-btn {
			color: var(--dark-font-1);
		}
		
		.share-address .t {
			color: var(--dark-font-3);
		}
		
		.box-b {
			border-color: var(--dark-6) !important;
		}
	}
	
	//笔记
	.video-editor .ql-toolbar {
		color: #222;
	}
	
	// 抽奖
	.comment-vote-bilibili {
		background-color: var(--dark-3) !important;
		
		.t {
			color: var(--dark-font-0) !important;
			border-color: var(--dark-4) !important;
		}
	}
	
	//评论区
	#comment_module, #comment .common, #comment .comment {
		border-color: var(--divider) !important;
		
		.b-head {
			color: var(--dark-font-1);
		}
		
		.comment-send-lite {
			background: var(--Ga12) !important;
			border-color: var(--Ga12) !important;
		}
		
		.comment-emoji {
			box-shadow: none !important;
		}
	}
	
	.comm, .comment {
		${L}
		.textarea-container {
			textarea {
				background-color: var(--dark-1) !important;
				border-color: var(--dark-1) !important;
				color: var(--dark-font-1) !important;
			}
			
			&:hover textarea, &.focus textarea {
				color: var(--dark-font-0) !important;
			}
		}
		
		.comment-emoji {
			border: 1px solid var(--dark-1) !important;
			background-color: var(--dark-1) !important;
		}
	}
	
	// 笔记功能
	.ql-editor {
		color: initial;
		
		> * {
			color: var(--dark-font-0);
		}
	}
	
	${q}
	${W}
    ${z}
	.svg-icon[class*=user-level] svg rect.st0 {
		fill: transparent !important;
	}
`,N=l.DU`
  html[lab-style*=dark] .card-item-middle-top-right .name {
    color: #222 !important;
  }

  .room-bg.p-fixed:after {
    background: #1c2022d9 !important;
  }

  .link-navbar-ctnr,
  .link-navbar-vm,
  .link-navbar,
  .head-info-section,
  .gift-control-section,
  .rank-list-section,
  .rank-list-ctnr,
  .chat-history-panel,
  .announcement-cntr,
  .chat-control-panel,
  .control-panel-ctnr,
  .gift-sender-panel,
  .count-choice,
  .gift-panel-box,
  .content-wrapper,
  .link-progress-tv,
  .pay-note-panel,
  .feed-title,
  .card,
  .live-record-list-cntr,
  .flip-view-image,
  .bg-white,
  .live-player-ctnr.minimal,
  .user-panel,
  .link-panel-ctnr,
  .calendar-checkin,
  .calendar-checkin .title,
  .calendar-checkin .calendar-wrapper,
  .download-panel-ctnr,
  .side-bar-popup-cntr {
    background-color: var(--dark-card) !important;
  }

  .daily-record-title, .choice-item.active, .choice-item:hover, .divider, .more-btn-cntr, .animation-list .icon-arrow-left, .animation-list .icon-arrow-right {
    background-color: var(--dark-5) !important;
  }

  .choice-item, .danmaku-menu, .logout-btn, .load-more-btn, .checkin-btn, .link-popup-panel {
    background-color: var(--dark-3) !important;
  }

  .danmaku-item .user-name {
    color: var(--dark-font-1) !important;
  }

  body {
    color: var(--dark-font-0);
  }

  .selector-box, .feed-title, .glory-name {
    color: var(--dark-font-0) !important;
  }

  .common-popup-wrap, .gVPoeh,
  .gift-item.buy:hover, .gift-panel-switch:hover, .download-item:hover, .item.self, .rank-list-ctnr .own {
    background-color: var(--dark-3) !important;
  }

  //.rank:not(.rank-1):not(.rank-2):not(.rank-3) {
  //  background: var(--dark-6)!important;
  //}

  .item, .daily-record-title, .daily-text, .gift-info-expScore, .seeds-wrap, .tab-candidate, .room-introduction-scroll-wrapper,
  .username-info, .calendar-checkin .calendar-wrapper, .download-panel-ctnr a, .list-unit, .gift-package .gift-package-btn {
    color: var(--dark-font-1) !important;
  }
  
  .gift-package .gift-package-btn .bag-icon svg path {
	  fill: var(--dark-font-1) !important;
  }

  .gift-info-desc {
    color: var(--dark-font-2) !important;
  }

  .link-navbar .main-ctnr .nav-logo, .link-navbar .nav-item, .shortcuts-ctnr, .room-title, .tab-list .item.active, .rank-list-box a.live-skin-main-a-text, .chat-item.danmaku-item,
  .gift-item .label, .gift-info-title, .choice-item, .announcement-cntr .content, .record-title, .live-player-ctnr, .area-list-panel .list-item, .username, .user-row,
  .gift-component-effect-rule, .share-addr-name, th.list-head-text {
    color: var(--dark-font-0) !important;
  }

  .calendar-checkin .calendar-wrapper .calendar .date-ctnr .day-item {
    color: var(--dark-5) !important;

    &.checked {
      color: #fff !important;
    }
  }

  .rank-list-box a:hover, .chat-item.danmaku-item .danmaku-content:hover, .area-list-panel .list-item:hover, .user-item:hover .username, .download-item:hover {
    color: #23ade5 !important;
  }

  .head-info-section,
  .gift-control-section,
  .aside-area,
  .announcement-cntr,
  .gift-sender-panel.arrow-bottom:before,
  .gift-panel-box,
  .content-wrapper,
  .card,
  .live-record-list-cntr,
  .side-bar-popup-cntr {
    border-color: var(--dark-card) !important;
  }

  .tab-list .item, .l-line, .r-line, .rank-list-ctnr, .count-choice, .choice-item, .gift-reveal-header, .announcement-cntr .content, .room-introduction-tags, .info-item-ctnr, .footer-line, .edit-button {
    border-color: var(--dark-5) !important;
  }

  #rank-list-ctnr-box {
    .gift-rank-list-item, .top3-item {
      .top3-name, .top3-score {
        color: var(--dark-font-3) !important;
      }

      .name, .rank, .score {
        color: var(--dark-font-3) !important;
      }
    }
  }

  .card-item-middle-top-right .name, .card-item-middle-top-right .name {
    color: var(--dark-0) !important;
  }

  .common-popup-wrap {
    border-color: var(--dark-3) !important;
  }

  .common-popup-wrap.arrow-bottom:after, .common-popup-wrap.arrow-bottom:before {
    border-color: var(--dark-3) transparent transparent !important;
  }

  .common-popup-wrap.arrow-top:after, .common-popup-wrap.arrow-top:before {
    border-color: transparent transparent var(--dark-3) !important;
  }

  .arrow {
    //border-color: transparent transparent transparent var(--dark-card)!important;
  }

  .link-navbar-ctnr {
    box-shadow: 0 0 5px 1px var(--dark-card) !important;
  }

  .gift-sender-panel, .common-popup-wrap, .side-bar-popup-cntr, .gVPoeh {
    box-shadow: 0 6px 12px 0 var(--dark-1) !important;
  }

  .link-navbar-ctnr .link-navbar {
    box-shadow: none !important;
  }

  .link-navbar-ctnr .link-navbar .panel-shadow {
    box-shadow: 0 8px 20px 0 var(--dark-card) !important;
  }

  .live-player-ctnr.minimal {
    box-shadow: 0 0 30px 1px var(--dark-card) !important;
  }

  .chat-input-ctnr {
    border-color: var(--divider) !important;
    background-color: var(--dark-3) !important;

    .medal-section {
      border-color: var(--divider) !important;
    }

    .chat-input, .count-choice .count-input {
      background-color: var(--dark-3) !important;
      color: var(--dark-font-0) !important;
      border-color: var(--dark-4) !important;
    }
  }

  .bl-button--primary:disabled {
    background-color: var(--dark-4) !important;
    color: var(--dark-font-2) !important;
  }

  .area-list-panel {
    background-color: var(--dark-3) !important;

    .list-item:hover {
      background-color: var(--dark-2) !important;
    }
  }

  .search-bar-ctnr .search-bar {
    background-color: var(--dark-3) !important;

    input {
      color: var(--dark-font-1) !important;

      &:focus {
        color: var(--dark-font-0) !important;
      }
    }
  }

  .live-room-app .app-content .link-footer-ctnr {
    background-color: unset !important;

    .link-footer {
      background-color: unset !important;
      border-color: var(--divider) !important;

      .footer-linker-line {
        background-color: var(--divider) !important;
      }
    }
  }

  .record-download button {
    background: var(--dark-5) !important;
    border-color: var(--dark-6) !important;
    color: var(--dark-font-1) !important;
  }

  .side-bar-cntr {
    background-color: var(--dark-card) !important;
    border-color: var(--dark-card) !important;
  }

  .flip-view-image-ctnr {
    filter: brightness(0.9);
  }

  .pophover > p:first-child {
    color: var(--dark-font-1) !important;
  }

  .feed-title {
    border-bottom: 1px solid var(--divider);
  }

  ${F}
`,T=l.DU`
  html {
    background: unset!important;
  }
  body {
    color: var(--dark-font-0);
  }
  input {
    border-color: var(--dark-4)!important;
    outline: none!important;
    color: var(--dark-font-0)!important;
  }
  .suggest-wrap {
    background: var(--dark-card)!important;
    border-color: var(--dark-card)!important;
    color: var(--dark-font-1)!important;
    .horizontal .hz-text:not(:hover) {
      border-color: var(--dark-6);
      color: var(--dark-font-0);
    }
    .title {
      border-color: var(--dark-6);
      span {
        background: var(--dark-card);
      }
    }
    .histories-wrap .histories .history-item {
      background-color: var(--dark-3) !important;
    }
    .trending-item {
      :hover {
        background-color: var(--dark-3) !important;
      }
      .rank.top, .rank.search-rank-top {
        color: var(--dark-font-3) !important;
      }
    }
    .vt-text {
      color: var(--dark-font-0);
      &:hover {
        background-color: var(--dark-3);
      }
    }
    .keyword-wrap .keyword {
      color: var(--dark-font-0);
      &.focus {
        background-color: var(--dark-3);
      }
    }
  }
  //主页
  .home-wrap {
    .home-input {
      .type {
        background-color: var(--dark-4)!important;
        border-color: var(--dark-4)!important;
        &.selected, &:hover {
          background-image: linear-gradient(0deg,var(--dark-3),var(--dark-4));
        }
      }
      .list {
        background-color: var(--dark-4);
        border-color: var(--dark-4);
        li:hover {
          background-color: var(--dark-3);
        }
      }
      .content {
        background-color: var(--dark-3)!important;
      }
    }
    .home-suggest {
      .hot-search, .history {
        border-color: var(--dark-5);
      }
      .hotlist {
        .num {
          background-color: var(--dark-4);
          &:not(.special) {
            color: var(--dark-font-1);
          }
        }
        .item {
          border-color: var(--dark-6);
        }
      }
      .history .list .item {
        border-color: var(--dark-6);
        a {
          color: var(--dark-font-0);
        }
      }
    }
  }
  //结果
  .total-wrap .total-text {
    color: var(--dark-font-2);
  }
  .user-list {
    .user-info, .video-info {
      a {
        color: var(--dark-font-0) !important;
      }
    }
  }
  .search-wrap .search-block .input-wrap {
    background-color: var(--dark-3)!important;
  }
  #navigator .v-switcher-header-item {
    border-color: var(--divider);
    a {
      color: var(--dark-font-1);
    }
  }
  .filter-wrap {
    border-color: var(--divider);
    .filter-item:not(active) a {
      color: var(--dark-font-1);
    }
    .fold:hover {
      background-color: var(--dark-2);
    }
    .sub-filter {
      background-color: var(--dark-2);
      border-color: var(--dark-2);
    }
    .filter-wrap_bottom {
      background-color: var(--divider);
    }
  }
  #all-list .mixin-list ul:not(:last-child) {
    border-color: var(--divider);
  }
  .activity-item .info {
    .type {
      border-color: var(--dark-6);
      color: var(--dark-font-2);
    }
    .title {
      color: var(--dark-font-0);
    }
    .desc {
      color: var(--dark-font-1);
    }
  }
  .fixed-top {
    background: hsla(0,100%,0%,.9)!important;
  }
  .page-wrap .pager {
    background: unset!important;
    .pages .page-item:not(.active) button:not(:hover) {
      color: var(--dark-font-1);
      background-color: var(--dark-2);
      border-color: var(--dark-3);
    }
  }
  .error-wrap {
    border-color: var(--divider);
    background-color: unset!important;
  }
  //视频
  .video-item.matrix, .video-item.list {
    border-color: var(--divider);
    .title {
      color: var(--dark-font-0);
    }
    .type {
      border-color: var(--dark-6);
      color: var(--dark-font-2);
    }
  }
  //番剧，影视
  .bangumi-item, .pgc-item {
    border-color: var(--divider);
    .right-info {
      .headline {
        span {
          border-color: var(--dark-6)!important;
          color: var(--dark-font-2)!important;
        }
        .title {
          color: var(--dark-font-0);
        }
      }
      .intros .value {
        color: var(--dark-font-0);
      }
      .ep-box .ep-sub .ep-item {
        border-color: var(--divider)!important;
        &:not(:hover) {
          color: var(--dark-font-2)!important;
        }
      }
    }
  }
  //直播
  #live-list {
    .live-tabs a {
      color: var(--dark-font-0);
    }
    .headline-live, .headline-room {
      h3 {
        color: var(--dark-font-1);
        .num-txt {
          color: var(--dark-font-2);
        }
      }
    }
    .live-user-wrap .live-user-item {
      box-shadow: 0 0 3px var(--dark-6);
      .item-right {
        .uname {
          color: var(--dark-font-1);
        }
        .status.free {
          background-color: var(--dark-4);
          color: var(--dark-font-1);
        }
        .info .star, .info .type {
          color: var(--dark-font-1);
        }
        .tags>span {
          border-color: var(--dark-6)!important;
          color: var(--dark-font-2);
        }
      }
    }
    .headline-room .filter a {
      color: var(--dark-font-0);
    }
    .live-room-item {
      .item-title {
        color: var(--dark-font-0);
      }
      .item-info .live-num, .item-info .uname {
        color: var(--dark-font-1);
      }
    }
  }
  //专栏
  .article-item {
    border-color: var(--divider);
    .content .title {
      color: var(--dark-font-0);
    }
  }
  //话题
  .topic-item {
    border-color: var(--divider);
    .content .headline a {
      color: var(--dark-font-0);
    }
  }
  // 游戏
  .game-list {
    .game-item {
      
    }
    .info {
      .headline {
        .title {
          color: var(--dark-font-3);
        }
      }
    }
  }
  //用户
  
  #user-list {
    .dropdown-wrap .select-wrap {
      border-color: var(--divider);
      .bili-dropdown {
        color: var(--dark-font-0);
        .selected {
          color: var(--dark-font-2);
        }
        .dropdown-list {
          background: var(--dark-3);
          border-color: var(--dark-3);
          .dropdown-item:hover {
            background: var(--dark-2);
          }
        }
      }
    }
  }
  .user-item {
    border-color: var(--divider);
    .title {
      color: var(--dark-font-0);
    }
    .attention-btn.followed, .attention-btn.followed:hover {
      background: var(--dark-5);
      color: var(--dark-font-1);
    }
    .up-info>span, .desc {
      color: var(--dark-font-1);
    }
    .up-videos .video-item .video-desc {
      color: var(--dark-font-0);
    }
  }
  //相簿
  .photo-item {
    border-color: var(--divider);
    .title {
      color: var(--dark-font-0);
    }
  }
`,K=l.DU`
  body {
    background-color: unset!important;
  }
  .out-container {
    background-color: var(--dark-3)!important;
    .tab-bar {
      border-color: var(--divider)!important;
    }
  }
  .split-line {
    &:before {
      border-color: var(--divider)!important;
    }
  }
  .history-tip {
    background-color: var(--divider)!important;
  }
  .list-item {
    &:hover {
      background-color: var(--dark-2) !important;
    }
    .center-box {
      .name-line {
        color: var(--dark-font-1)!important;
      }
      .content {
        color: var(--dark-font-1)!important;
      }
    }
  }
`,J=l.DU`
  html {
    background-image: none!important;
  }
  body {
    background-color: unset!important;
  }
  .im-list-box {
    background-color: var(--dark-3)!important;
    color: var(--dark-font-1) !important;
    
    .im-list {
      &:hover {
        background-color: var(--dark-6)!important;
        color: var(--dark-font-0)!important;
      }
    }
  }
`,Q="https://s1.hdslb.com/bfs/seed/jinkela/short/bili-theme/map.css",X="https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/light.css",Z="https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/dark.css";class rr extends n.Component{constructor(r){super(r)}hackedCSS=null;copyedHackedCSS=null;state={showDark:!0};sysDark=matchMedia("(prefers-color-scheme: dark)");updateDarkModeListener=()=>{!0===this.props.followSystem?(this.sysDark.matches?(document.body.classList.add("bilibili-helper-dark-mode"),this.inactiveHackedCSS()):(document.body.classList.remove("bilibili-helper-dark-mode"),this.activeHackedCSS()),this.setState({showDark:this.sysDark.matches}),this.sysDark.onchange=()=>{this.setState({showDark:this.sysDark.matches})}):this.sysDark.onchange=null};activeHackedCSS=()=>{this.copyedHackedCSS&&document.head.appendChild(this.copyedHackedCSS)};inactiveHackedCSS=()=>{this.hackedCSS&&(this.copyedHackedCSS=this.hackedCSS.cloneNode(),this.hackedCSS.remove())};componentDidMount(){this.updateDarkModeListener(),new MutationObserver(((r,a)=>{for(let a=0;a<r.length;++a){const o=r[a];if(o.addedNodes.length>0){const r=Array.from(o.addedNodes.values()).filter((r=>"LINK"===r.tagName))[0];r&&"__css-map__"===r.id&&(this.hackedCSS=r,this.state.showDark?this.inactiveHackedCSS():this.activeHackedCSS())}}})).observe(document.head,{childList:!0})}componentDidUpdate(r,a,o){null===r.followSystem&&this.updateDarkModeListener()}}const ar=(r,a=!1,o=!0,t=!0)=>n.createElement(n.Fragment,null,n.createElement(x,null),t?n.createElement(D,null):null,o?n.createElement(B,null):null,a?n.createElement(E,null):null,r);class or extends rr{render(){const r=ar([n.createElement(K,{key:"iframeDynamic"})]);return this.state.showDark?r:null}}class tr extends rr{render(){const r=ar([n.createElement(J,{key:"iframeMessage"})]);return this.state.showDark?r:null}}class er extends rr{render(){const r=ar([n.createElement(P,{key:"home"})],!0,!1);return this.state.showDark?(d("homeLight"),c("homeDark",Z,!0)):(d("homeDark"),c("homeLight",X,!0)),this.state.showDark?r:null}}class nr extends rr{render(){const r=ar([n.createElement(R,{key:"dynamic"}),n.createElement(G,{key:"userPopper"})]);return c("basicCssMap",Q,!0,!0),this.state.showDark?(d("homeLight"),c("homeDark",Z,!0,!0)):(d("homeDark"),c("homeLight",X,!0,!0)),this.state.showDark?r:null}}class ir extends rr{render(){const r=ar([n.createElement(Y,{key:"read"})]);return this.state.showDark?r:null}}class lr extends rr{render(){const r=ar([n.createElement($,{key:"cv"}),n.createElement(G,{key:"userPopper"})],!0);return this.state.showDark?r:null}}class pr extends rr{render(){const r=ar([n.createElement(j,{key:"readRank"})],!0);return this.state.showDark?r:null}}class dr extends rr{render(){const r=ar([n.createElement(I,{key:"message"})]);return this.state.showDark?r:null}}class cr extends rr{render(){const r=ar([n.createElement(H,{key:"space"}),n.createElement(G,{key:"userPopper"})]);return this.state.showDark?(d("homeLight"),c("homeDark",Z,!0,!0)):(d("homeDark"),c("homeLight",X,!0,!0)),this.state.showDark?r:null}}class mr extends rr{render(){const r=ar([n.createElement(O,{key:"watchLater"})],!0,!1);return this.state.showDark?r:null}}class br extends rr{render(){const r=ar([n.createElement(M,{key:"history"}),n.createElement(C,{key:"footer2"})],!1,!1);return this.state.showDark?r:null}}class vr extends rr{render(){const r=ar([n.createElement(V,{key:"videoPlay"}),n.createElement(G,{key:"userPopper"})]);return this.state.showDark?r:null}}class kr extends rr{render(){return this.state.showDark?n.createElement(n.Fragment,null,n.createElement(x,null),n.createElement(N,null)," ",n.createElement(G,null)):null}}class sr extends rr{render(){const r=ar([n.createElement(T,{key:"search"})],!0);return this.state.showDark?r:null}}class ur extends rr{render(){return c("basicCssMap",Q,!0,!0),this.state.showDark?(d("homeLight"),c("homeDark",Z,!0)):(d("homeDark"),c("homeLight",X,!0)),null}}class fr extends rr{render(){const r=ar([n.createElement(p,{key:"cheese"})],!0);return this.state.showDark?r:null}}class gr extends rr{render(){return c("basicCssMap",Q,!0,!0),this.state.showDark?(d("homeLight"),c("subCategoryDark",Z,!0)):(d("homeDark"),c("subCategoryLight",X,!0)),null}}const hr=()=>{class r extends n.Component{constructor(r){super(r)}state={active:!1,pageName:e(window.location.href),followSystem:null,showVideoOnlyButton:!1};componentDidMount(){chrome.runtime.sendMessage({target:"darkMode",event:"getState"},(({on:r,followSystem:a,stopped:o,showVideoOnlyButton:t})=>{r&&!o&!t&&(a&&matchMedia("(prefers-color-scheme: dark)"),document.body.classList.contains("bilibili-helper-dark-mode")||document.body.classList.add("bilibili-helper-dark-mode"),this.setState({active:r,followSystem:a,showVideoOnlyButton:t}))}))}render(){const{active:r,pageName:a,followSystem:o,showVideoOnlyButton:t}=this.state;if(!r||t)return null;switch(a){case"iframeDynamic":return n.createElement(or,{followSystem:o});case"iframeMessage":return n.createElement(tr,{followSystem:o});case"home":return n.createElement(er,{followSystem:o});case"dynamic":return n.createElement(nr,{followSystem:o});case"readCV":return n.createElement(lr,{followSystem:o});case"readRank":return n.createElement(pr,{followSystem:o});case"read":return n.createElement(ir,{followSystem:o});case"message":return n.createElement(dr,{followSystem:o});case"space":return n.createElement(cr,{followSystem:o});case"watchLater":return n.createElement(mr,{followSystem:o});case"history":return n.createElement(br,{followSystem:o});case"livePlay":return n.createElement(kr,{followSystem:o});case"search":return n.createElement(sr,{followSystem:o});case"qn":case"blackboardComment":return n.createElement(ur,{followSystem:o});case"cheese":return n.createElement(fr,{followSystem:o});case"subCategory":return n.createElement(gr,{followSystem:o});case"video":return n.createElement(vr,{followSystem:o});default:return null}}}const a=document.createElement("div");i.render(n.createElement(r,null),a)};hr(),window.addEventListener("message",(function(r){"sendEditedCookie"===r.data.command&&chrome.runtime.sendMessage(chrome.runtime.id,{sandBox:r.data.target,cookie:r.data.cookie})}))}},a={};function o(t){var e=a[t];if(void 0!==e)return e.exports;var n=a[t]={id:t,loaded:!1,exports:{}};return r[t].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=r,(()=>{var r=[];o.O=(a,t,e,n)=>{if(!t){var i=1/0;for(c=0;c<r.length;c++){for(var[t,e,n]=r[c],l=!0,p=0;p<t.length;p++)(!1&n||i>=n)&&Object.keys(o.O).every((r=>o.O[r](t[p])))?t.splice(p--,1):(l=!1,n<i&&(i=n));if(l){r.splice(c--,1);var d=e();void 0!==d&&(a=d)}}return a}n=n||0;for(var c=r.length;c>0&&r[c-1][2]>n;c--)r[c]=r[c-1];r[c]=[t,e,n]}})(),(()=>{o.n=r=>{var a=r&&r.__esModule?()=>r["default"]:()=>r;return o.d(a,{a}),a}})(),(()=>{o.d=(r,a)=>{for(var t in a)o.o(a,t)&&!o.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:a[t]})}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()})(),(()=>{o.o=(r,a)=>Object.prototype.hasOwnProperty.call(r,a)})(),(()=>{o.nmd=r=>(r.paths=[],r.children||(r.children=[]),r)})(),(()=>{o.j=643})(),(()=>{var r={643:0};o.O.j=a=>0===r[a];var a=(a,t)=>{var e,n,[i,l,p]=t,d=0;if(i.some((a=>0!==r[a]))){for(e in l)o.o(l,e)&&(o.m[e]=l[e]);if(p)var c=p(o)}for(a&&a(t);d<i.length;d++)n=i[d],o.o(r,n)&&r[n]&&r[n][0](),r[n]=0;return o.O(c)},t=self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})(),(()=>{o.nc=void 0})();var t=o.O(void 0,[236],(()=>o(5836)));t=o.O(t)})();