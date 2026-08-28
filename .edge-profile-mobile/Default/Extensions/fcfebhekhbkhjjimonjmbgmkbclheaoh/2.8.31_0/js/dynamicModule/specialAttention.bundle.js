"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[525],{3428:(e,t)=>{function o(e,t,o){var n=void 0,i=void 0,r=void 0,a=void 0,l=void 0,s=function s(){var c=+new Date-a;c<t&&c>=0?n=setTimeout(s,t-c):(n=null,o||(l=e.apply(r,i),n||(r=null,i=null)))};return function(){r=this,i=arguments,a=+new Date;var c=o&&!n;return n||(n=setTimeout(s,t)),c&&(l=e.apply(r,i),r=null,i=null),l}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o},4567:(e,t)=>{function o(e,t,o){var n,i;return t||(t=250),function(){var r=o||this,a=+new Date,l=arguments;n&&a<n+t?(clearTimeout(i),i=setTimeout((function(){n=a,e.apply(r,l)}),t)):(n=a,e.apply(r,l))}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o},4934:(e,t,o)=>{o.d(t,{w:()=>l});var n=o(6540),i=o(5999);const r=i.Ay.div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,a=i.Ay.h4`
  position: sticky;
  top: -10px;
  display: flex;
  margin: 0 -10px;
  padding: 4px 0 4px 10px;
  color: #3B3B3B;
  background-color: #f4f4f4;
  z-index: 2;

  b {
    margin: 0 4px;
    color: var(--bilibili-pink);
  }

  .more-btn {
    margin-left: auto;
    cursor: pointer;
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    color: #999999;
    background-color: #1f1f1f;
    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class l extends n.Component{constructor(e){super(e)}static defaultProps={columns:1,rowGap:2,columnsGap:2};render(){const{children:e,title:t,columns:o,rowGap:i,columnsGap:l,footer:s,sectionRef:c,...d}=this.props;return n.createElement(r,{className:"section",rowGap:i,columnsGap:l,ref:c,...d},t?n.createElement(a,{className:"section-title"},t):null,n.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${o}, 1fr)`,gridColumnEnd:`span ${o}`}},e),s)}}},4953:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){if(!(e instanceof HTMLElement))return document.documentElement;var t="absolute"===e.style.position,o=/(scroll|auto)/,n=e;while(n){if(!n.parentNode)return e.ownerDocument||document.documentElement;var i=window.getComputedStyle(n),r=i.position,a=i.overflow,l=i["overflow-x"],s=i["overflow-y"];if("static"===r&&t)n=n.parentNode;else{if(o.test(a)&&o.test(l)&&o.test(s))return n;n=n.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},5756:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var n=o(1653),i=o(6540),r=o(8669),a=o(5999),l=o(3205),s=o(9189),c=o(9751),d=o(4934);const p=a.Ay.div.attrs({className:"special-account-block"})`
  padding-top: 10px;
  padding-bottom: 20px;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
`,u=a.Ay.div`
  display: flex;
  padding: 0 0 4px;
  width: 100%;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 1px;
    border-bottom: none;
  }

  .avatar {
    flex-shrink: 0;
    margin-left: 2px;
    margin-right: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }

  .info {
    flex-grow: 1;
    max-width: 540px;
    box-sizing: border-box;

    h6 {
      display: flex;
      align-items: center;
      margin: 0 0 4px 0;
      font-size: 14px;
      line-height: 14px;

      .level {
        margin-left: 8px;
        padding: 0 6px;
        border-radius: 3px;
        color: #fff;
        zoom: 0.7;

        &.lv0 {
          background-color: #bfbfbf;
        }

        &.lv1 {
          background-color: #bfbfbf;
        }

        &.lv2 {
          background-color: #95ddb2;
        }

        &.lv3 {
          background-color: #93d1e4;
        }

        &.lv4 {
          background-color: #ffb37c;
        }

        &.lv5 {
          background-color: #fe6c06;
        }

        &.lv6 {
          background-color: #fe0202;
        }
      }

      .living {
        margin-left: 14px;
        vertical-align: bottom;
        color: var(--bilibili-pink);
        zoom: 0.7;
      }
    }

    p {
      margin: 0 0 4px 0;
      overflow: hidden;
      //white-space: nowrap;
      text-overflow: ellipsis;
      color: #666;

      span, a {
        margin-right: 12px
      }
    }

    a:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    i {
      font-style: normal;
    }
  }

  @media (prefers-color-scheme: dark) {
    .info {
      .username {
        color: #bbb;
      }
    }
  }
`,f=a.Ay.div.attrs({className:"video-area"})`

  .topic {
    margin: 0 0 6px;
    font-weight: bold;
    color: #989898;
    zoom: 0.8;
  }

  .video-list {
    display: flex;
    flex-direction: column;
    width: calc(100% - 6px);
    //height: 147px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .section-title {
      margin: 0 0 4px;
      padding: 0;
    }

    .video-card {
      //margin-right: 6px;
      height: auto;

      &:last-of-type {
        margin-right: 0;
      }
    }

    .more-video-btn {
      margin-top: 10px;
      width: 100%;
      height: 50px;
      line-height: 30px;
      flex-shrink: 0;
      text-align: center;
      //line-height: 75px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;class h extends i.Component{constructor(e){super(e)}static contextType=c.T;state={recentlyVideos:[],pn:1,ps:30,hasMoreVideo:!0};videoListRef=i.createRef();bottomObserverRef=i.createRef();componentDidMount(){this.videoListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver(((e,t)=>{this.state.hasMoreVideo&&e.length&&0!==e[0].intersectionRatio&&this.getVideoInfo()}),{root:this.videoListRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))}getVideoInfo=e=>{(this.state.hasMoreVideo||e)&&chrome.runtime.sendMessage({target:"specialAttention",event:"fetchSpecialAccountVideoData",uid:this.props.uid,pn:this.state.pn,ps:this.state.ps},(e=>{const{recentlyVideos:t,ps:o,pn:n}=this.state;e.page&&(t.push(...e.list),this.setState({recentlyVideos:t,pn:n+1,ps:o,hasMoreVideo:e.page.count/e.page.ps>e.page.pn}))}))};getLiveInfo=()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"fetchSpecialAccountLiveData",uid:this.props.uid},(e=>{this.setState({liveRoomInfo:e})}))};handleOnCreateUserSpaceTab=e=>{this.context.createTab(e,"https://space.bilibili.com/"+this.props.uid,{strict:!1})};handleOnClickViewMoreVideo=e=>{this.context.createTab(e,`https://space.bilibili.com/${this.props.uid}/video`,{strict:!1})};handleOnClickLiveRoom=e=>{const{livingData:t}=this.props;this.context.createTab(e,`https://live.bilibili.com/${t.roomId}`,{strict:!1})};handleOnClickVideoCover=(e,t)=>{e.preventDefault(),this.context.createTab(e,`https://www.bilibili.com/video/${t}`,{strict:!1})};renderRecommendVideoList(){const{recentlyVideos:e}=this.state,t=s.q[this.context.videoCardType];return e&&e.length>0?e.map((({videoInfo:e,userInfo:o})=>i.createElement(t,{key:e.bvid,userInfo:o,videoInfo:e,hideAuthor:!0,showNewTag:!0,onClickCover:t=>this.handleOnClickVideoCover(t,e.bvid),showPublishTime:!0}))):"\u6ca1\u6709\u89c6\u9891\u6570\u636e"}render(){const{face:e,username:t,sign:o,level:r,id:a,livingData:l}=this.props,{hasMoreVideo:s}=this.state,{columns:c}=this.context;return i.createElement(p,{id:a,ref:this.videoListRef},i.createElement(u,null,i.createElement("div",{className:"avatar",onClick:this.handleOnCreateUserSpaceTab,onAuxClick:this.handleOnCreateUserSpaceTab},i.createElement(n._V,{url:e})),i.createElement("div",{className:"info"},i.createElement("h6",null,i.createElement("a",{className:"username",onClick:this.handleOnCreateUserSpaceTab,onAuxClick:this.handleOnCreateUserSpaceTab},t),i.createElement("span",{className:`level lv${r}`},"Lv.",r),l&&!!l.living&&i.createElement("a",{className:"living",onClick:this.handleOnClickLiveRoom,onAuxClick:this.handleOnClickLiveRoom},"\u76f4\u64ad\u4e2d...")),i.createElement("p",{title:o},o))),i.createElement(f,null,i.createElement(d.w,{title:"\u6700\u8fd1\u6295\u7a3f",columns:c,rowGap:4,columnsGap:6,className:"video-list",footer:s&&i.createElement("div",{ref:this.bottomObserverRef,className:"more-video-btn",onClick:this.getVideoInfo},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a")},this.renderRecommendVideoList())))}}const m=a.Ay.div.attrs({id:"specialAttentionPage",className:"popup-main-special-attention"})`
  display: flex;
  padding: 0 !important;

  .quick-btn-area {
    flex-shrink: 0;
    padding: 4px 0 0 6px;
    width: calc(100% - 8px);
    height: 100%;
    //background-color: #f4f4f4;
    z-index: 3;
    overflow: visible auto;
    box-sizing: border-box;
    pointer-events: none;

    :hover {
      .quick-btn {
        opacity: 1;
      }
    }

    .quick-btn-list {
      display: grid;
      grid-row-gap: 4px;
      justify-content: flex-start;
      margin: -4px;
      padding: 10px 4px 0 2px;
      width: fit-content;
      //height: fit-content;
      max-height: 100%;
      box-sizing: border-box;
      overflow: auto;
      pointer-events: auto;
      scrollbar-width: none;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 100%;
        background-color: rgb(244, 244, 244);
        box-shadow: 0.5px 0 6px 0 #ddd;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .quick-btn {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: center;

      width: fit-content;
      border-radius: 50px;
      //background-color: #f4f4f4;
      box-sizing: border-box;
      cursor: pointer;
      pointer-events: none;
      width: fit-content;

      opacity: 0.4;
      transition: opacity .2s ease;

      &:hover {
        //background-color: #d0cfcf;

        .cover {
          border-color: #d0cfcf;
        }

        .name {
          display: block;
        }
      }

      &:last-of-type {

      }

      &.active {
        opacity: 1;
      }

      .cover {
        flex-shrink: 0;
        width: 28px;
        height: 28px;
        line-height: 25px;
        border: 2px solid transparent;;
        border-radius: 50%;
        overflow: hidden;
        z-index: 1;
        pointer-events: initial;

        &.living {
          border: 2px solid var(--bilibili-pink);

          ::after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            box-shadow: inset 0 0px 2px rgb(0 0 0 / 90%);
          }
        }

        .img {
          pointer-events: none;
        }

        .living-tag {
          position: absolute;
          bottom: -12px;
          left: 5px;
          font-weight: bolder;
          color: var(--bilibili-pink);
          text-shadow: 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white;
          zoom: 0.7;
        }

        .bilibili-helper-2-icon-option {
          margin: 6px;
        }
      }

      .name {
        //position: absolute;
        //top: 0;
        //left: calc(100% - 12px);
        display: none;
        margin-left: -14px;
        padding: 2px 8px 2px 18px;
        width: max-content;
        height: 20px;
        line-height: 16px;
        box-sizing: border-box;
        border-radius: 0 15px 15px 0;
        background-color: #e6e6e6;
        word-break: keep-all;
        pointer-events: none;
      }
    }
  }

  .account-block-list {
    flex-grow: 1;
    margin-left: calc(-100% + 46px);
    padding-left: 6px;
    //width: calc(100% - 36px);
    height: 100%;
    overflow: auto;
    & > div {
      scrollbar-width: thin;
    }
  }

  @media (prefers-color-scheme: dark) {
    color: #474747;

    .quick-btn-area {
      .quick-btn-list {
        &::before {
          background-color: rgb(21 21 21);
          box-shadow: none;
        }
      }

      .quick-btn {
        color: #bbb;

        &:hover {
          .cover {
            border-color: #545454;
          }

        }

        .name {
          background-color: #1d1c1c;
          color: #bbb;
        }
      }
    }
  }
`,v=a.Ay.div.attrs({className:"empty-page"})`
  margin: auto;
  padding: 60px 40px;
  height: calc(100% - 120px);
  color: #999999;
  text-align: center;
  overflow: hidden;

  h1 {
    margin-bottom: 4px;
  }

  p {
    margin-top: 0;
    margin-bottom: -10px;
    font-size: 16px;
    z-index: 1;

    a {
      font-weight: bold;
      color: #999999;
      cursor: pointer;
    }
  }

  .bilibili-helper-2-iconfont {
    display: block;
    margin: 0 auto 0 50%;
    transform: translate(-50%, 0px);
    color: #E5E5E5;
    pointer-events: none;
  }

  @media (prefers-color-scheme: dark) {
    color: #474747;

    .bilibili-helper-2-iconfont {
      color: #171717;
    }
  }
`,b=(0,l.y)(class extends i.Component{constructor(e){super(e),this.state={attentionList:[],livingList:[],currentIndex:0}}quickButtonMoveoutHandle=null;componentDidMount(){this.getLivingList(),this.updateAccountList()}updateAccountList=()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionAccountList"},((e=[])=>{this.setState({attentionList:e})}))};getLivingList=()=>{chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getFullSimpleLiveList"},((e=[])=>{this.setState({livingList:e})}))};handleOnClickAddAttention=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",redirect:chrome.runtime.getURL("/html/config.html#/specialAttention"),url:chrome.runtime.getURL("/html/config.html#/specialAttention")})};handleOnClickQuickBtn=(e,t)=>{const o=document.getElementById(`user${e}`);this.setState({currentIndex:t}),o&&(o.scrollTop=0)};handleOnMouseEnterQuickBtnArea=e=>{e.persist(),clearTimeout(this.quickButtonMoveoutHandle)};handleOnMouseLeaveQuickBtnArea=e=>{e.persist(),clearTimeout(this.quickButtonMoveoutHandle),this.quickButtonMoveoutHandle=setTimeout((()=>{const t=e.target.querySelector(".active");t&&t.scrollIntoView({block:"nearest",behavior:"smooth"})}),1e3)};renderEmpty(){return i.createElement(v,null,i.createElement("h1",null,"\u6ca1\u6709\u7279\u522b\u5173\u6ce8\u7684\u4e3b\u64ad\u54e6"),i.createElement("p",null,"\u70b9\u51fb ",i.createElement("a",{onClick:this.handleOnClickAddAttention},"\u8fd9\u91cc")," \u5f00\u59cb\u6dfb\u52a0"),i.createElement(n.In,{icon:"cat-tm",size:268}))}renderList(){const{attentionList:e,currentIndex:t,livingList:o}=this.state;return i.createElement(i.Fragment,null,i.createElement("div",{className:"quick-btn-area",onMouseLeave:this.handleOnMouseLeaveQuickBtnArea,onMouseEnter:this.handleOnMouseEnterQuickBtnArea},i.createElement("div",{className:"quick-btn-list"},e&&e.map(((e,r)=>{const a=o.find((({owner:t})=>String(t.mid)===e.uid));return i.createElement("div",{key:e.uid,className:["quick-btn",r===t?"active":null].filter(Boolean).join(" "),onClick:()=>this.handleOnClickQuickBtn(e.uid,r)},i.createElement("div",{className:["cover",a&&a.living?"living":""].filter(Boolean).join(" ")},i.createElement(n._V,{url:e.face})),i.createElement("div",{className:"name"},e.username))})),i.createElement("div",{className:"quick-btn",onClick:this.handleOnClickAddAttention},i.createElement("div",{className:"cover"},i.createElement(n.In,{size:16,icon:"option"})),i.createElement("div",{className:"name"},"\u7ba1\u7406\u7279\u5173")))),i.createElement("div",{className:"account-block-list"},e.length>0?i.createElement(i.Fragment,null,i.createElement(r.Ay,{key:e[t].uid,overflow:!0,scrollContainer:"#specialAttentionPage"},i.createElement(h,{id:`user${e[t].uid}`,...e[t],livingData:o.find((({owner:o})=>String(o.mid)===e[t].uid))}))):"\u6ca1\u6709\u6570\u636e"))}render(){const{attentionList:e}=this.state;return i.createElement(m,null,0===e.length?this.renderEmpty():this.renderList())}})},8579:(e,t)=>{function o(e,t,o,n){n=n||!1,e.addEventListener?e.addEventListener(t,o,n):e.attachEvent&&e.attachEvent("on"+t,(function(t){o.call(e,t||window.event)}))}function n(e,t,o,n){n=n||!1,e.removeEventListener?e.removeEventListener(t,o,n):e.detachEvent&&e.detachEvent("on"+t,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.on=o,t.off=n},8669:(e,t,o)=>{var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o(6540),r=b(i),a=o(961),l=b(a),s=o(5556),c=b(s),d=o(8579),p=o(4953),u=b(p),f=o(3428),h=b(f),m=o(4567),v=b(m);function b(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function w(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y={top:0,right:0,bottom:0,left:0,width:0,height:0},k="data-lazyload-listened",E=[],O=[],C=!1;try{var A=Object.defineProperty({},"passive",{get:function(){C=!0}});window.addEventListener("test",null,A)}catch(e){}var L=!!C&&{capture:!1,passive:!0},M=function(e,t){var o=l.default.findDOMNode(e),n=void 0,i=void 0,r=void 0,a=void 0;try{var s=t.getBoundingClientRect();n=s.top,i=s.left,r=s.height,a=s.width}catch(e){n=y.top,i=y.left,r=y.height,a=y.width}var c=window.innerHeight||document.documentElement.clientHeight,d=window.innerWidth||document.documentElement.clientWidth,p=Math.max(n,0),u=Math.max(i,0),f=Math.min(c,n+r)-p,h=Math.min(d,i+a)-u,m=void 0,v=void 0,b=void 0,g=void 0;try{var x=o.getBoundingClientRect();m=x.top,v=x.left,b=x.height,g=x.width}catch(e){m=y.top,v=y.left,b=y.height,g=y.width}var w=m-p,k=v-u,E=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return w-E[0]<=f&&w+b+E[1]>=0&&k-E[0]<=h&&k+g+E[1]>=0},N=function(e){var t=l.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var o=void 0,n=void 0;try{var i=t.getBoundingClientRect();o=i.top,n=i.height}catch(e){o=y.top,n=y.height}var r=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return o-a[0]<=r&&o+n+a[1]>=0},T=function(e){var t=l.default.findDOMNode(e);if(t instanceof HTMLElement){var o=(0,u.default)(t),n=e.props.overflow&&o!==t.ownerDocument&&o!==document&&o!==document.documentElement,i=n?M(e,o):N(e);i?e.visible||(e.props.once&&O.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},z=function(){O.forEach((function(e){var t=E.indexOf(e);-1!==t&&E.splice(t,1)})),O=[]},R=function(){for(var e=0;e<E.length;++e){var t=E[e];T(t)}z()},I=function(){for(var e=0;e<E.length;++e){var t=E[e];t.visible=!0,t.forceUpdate()}z()},_=void 0,V=null,B=function(e){return"string"===typeof e},D=function(e){function t(e){g(this,t);var o=x(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.visible=!1,o}return w(t,e),n(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&B(t)&&(e=e.document.querySelector(t));var o=void 0!==this.props.debounce&&"throttle"===_||"debounce"===_&&void 0===this.props.debounce;if(o&&((0,d.off)(e,"scroll",V,L),(0,d.off)(window,"resize",V,L),V=null),V||(void 0!==this.props.debounce?(V=(0,h.default)(R,"number"===typeof this.props.debounce?this.props.debounce:300),_="debounce"):void 0!==this.props.throttle?(V=(0,v.default)(R,"number"===typeof this.props.throttle?this.props.throttle:300),_="throttle"):V=R),this.props.overflow){var n=(0,u.default)(l.default.findDOMNode(this));if(n&&"function"===typeof n.getAttribute){var i=+n.getAttribute(k)+1;1===i&&n.addEventListener("scroll",V,L),n.setAttribute(k,i)}}else if(0===E.length||o){var r=this.props,a=r.scroll,s=r.resize;a&&(0,d.on)(e,"scroll",V,L),s&&(0,d.on)(window,"resize",V,L)}E.push(this),T(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,u.default)(l.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(k)-1;0===t?(e.removeEventListener("scroll",V,L),e.removeAttribute(k)):e.setAttribute(k,t)}}var o=E.indexOf(this);-1!==o&&E.splice(o,1),0===E.length&&"undefined"!==typeof window&&((0,d.off)(window,"resize",V,L),(0,d.off)(window,"scroll",V,L))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:r.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(i.Component);D.propTypes={once:c.default.bool,height:c.default.oneOfType([c.default.number,c.default.string]),offset:c.default.oneOfType([c.default.number,c.default.arrayOf(c.default.number)]),overflow:c.default.bool,resize:c.default.bool,scroll:c.default.bool,children:c.default.node,throttle:c.default.oneOfType([c.default.number,c.default.bool]),debounce:c.default.oneOfType([c.default.number,c.default.bool]),placeholder:c.default.node,scrollContainer:c.default.oneOfType([c.default.string,c.default.object]),unmountIfInvisible:c.default.bool},D.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var S=function(e){return e.displayName||e.name||"Component"},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(o){function i(){g(this,i);var e=x(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return e.displayName="LazyLoad"+S(t),e}return w(i,o),n(i,[{key:"render",value:function(){return r.default.createElement(D,e,r.default.createElement(t,this.props))}}]),i}(i.Component)}};t.Ay=D}}]);