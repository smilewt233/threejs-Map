"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[184],{428:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var i=a(6540),n=a(3205),l=a(5999),r=a(4934),o=a(9751),c=a(3240);const s=[{key:"total_click",secondKey:"incr_click",title:"\u64ad\u653e\u91cf",linkCallback:"handleOnClickDataCenter",secondTitle:"\u6628\u65e5"},{key:"total_reply",secondKey:"incr_reply",title:"\u8bc4\u8bba\u6570",secondTitle:"\u6628\u65e5"},{key:"total_dm",secondKey:"incr_dm",title:"\u5f39\u5e55\u6570",secondTitle:"\u6628\u65e5"},{key:"total_like",secondKey:"inc_like",title:"\u70b9\u8d5e\u6570",secondTitle:"\u6628\u65e5"},{key:"total_coin",secondKey:"inc_coin",title:"\u6295\u5e01\u6570",secondTitle:"\u6628\u65e5"},{key:"total_fav",secondKey:"inc_fav",title:"\u6536\u85cf\u6570",secondTitle:"\u6628\u65e5"},{key:"total_share",secondKey:"inc_share",title:"\u5206\u4eab\u6570",secondTitle:"\u6628\u65e5"},{key:"total_elec",secondKey:"inc_elec",title:"\u5145\u7535\u6570",secondTitle:"\u6628\u65e5",linkCallback:"handleOnClickCommentManager"}],m=[{key:"articleView",secondKey:"articleIncrView",title:"\u9605\u8bfb\u91cf",secondTitle:"\u6628\u65e5"},{key:"articleReply",secondKey:"articleIncrReply",title:"\u8bc4\u8bba\u6570",secondTitle:"\u6628\u65e5"},{key:"articleLike",secondKey:"articleIncrLike",title:"\u70b9\u8d5e\u6570",secondTitle:"\u6628\u65e5"},{key:"articleCoin",secondKey:"articleIncrCoin",title:"\u6295\u5e01\u6570",secondTitle:"\u6628\u65e5"},{key:"articleFav",secondKey:"articleIncrFav",title:"\u6536\u85cf\u6570",secondTitle:"\u6628\u65e5"},{key:"articleShare",secondKey:"articleIncrShare",title:"\u5206\u4eab\u6570",secondTitle:"\u6628\u65e5"}],d=[{title:"\u89c6\u9891",list:s},{title:"\u4e13\u680f",list:m}],p=l.Ay.div.attrs({className:"popup-main-creator"})`
  .section {
    margin-bottom: 6px;

    :last-child {
      margin-bottom: 0;
      padding-bottom: 40px;
    }

    .type-header {
      //grid-column-end: span 2;
      margin: 2px 0 0;
      padding-left: 4px;
      font-weight: bold;
    }
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
    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,h=l.Ay.section`
  position: relative;
  padding: 6px;
  //border-radius: 2px;
  //border: 1px solid transparent;
  box-sizing: border-box;
  transition: background-color .2s, border-color .2s;
  background-color: hsl(0deg 0% 99%);

  &:hover {
  }

  &:active {
    background-color: hsl(0deg 0% 82% / 50%);
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(0 0 0 / 30%);
    }

    &:active {
      background-color: rgb(0 0 0 / 50%);
    }
  }
`,g=(0,l.Ay)(h).attrs((({hasCallback:e})=>({className:e?"has-callback":""})))`
  &.has-callback {
    cursor: pointer;

    ::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      border: 3px solid transparent;
      border-top: 3px solid hsl(0deg 0% 80%);
      border-right: 3px solid hsl(0deg 0% 80%);
      pointer-events: none;

    }
  }

  main {
    position: relative;
    padding: 0 6px 0 4px;
    //width: fit-content;
    //background-color: rgb(255 255 255 / 16%);
    transition: background-color .2s;

    &:last-of-type {
      margin-right: 0;
    }

    &.zero {
      filter: grayscale(1) brightness(0.38);
    }

    //&:hover {
    //  background-color: rgb(0 0 0 / 25%);
    //}
    i {
      font-style: normal;
    }

    .second-value {
      margin-left: 8px;
      font-style: normal;
      color: var(--bilibili-blue);
    }

  }

  &.header {
    text-align: center;
    cursor: pointer;

    .bilibili-helper-2-icon-right-arrow {
      float: right;
      line-height: 16px;
      color: var(--paper-grey-600);
    }
  }

  &.data-section {
    margin-bottom: 0;

    .main-data {
      .title {
        margin-right: 6px;
        font-size: 12px;
        font-weight: normal;
        letter-spacing: .5px;
      }

      .main-value {
        //display: block;
        font-size: 14px;
        color: var(--bilibili-blue);

        .yesterday {
          color: var(--bilibili-pink);
        }
      }
    }
  }

  &.rating {
    .level {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 16px;
      font-weight: bold;
      font-family: system-ui;
      font-style: italic;
      filter: opacity(0.1);
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(0 0 0 / 16%);
    &.has-callback {
      ::after {
        opacity: .25;
        border-top: 3px solid hsl(0deg 0% 50%);
        border-right: 3px solid hsl(0deg 0% 50%);
      }
    }

    &.data-section {
      .main-value {
        opacity: 0.95;
      }
    }

    &.rating {
      .level {
        filter: opacity(0.2);
      }
    }
  }
`;class b extends i.Component{constructor(e){super(e),this.state={total_fans:NaN,total_click:NaN,total_reply:NaN,total_dm:NaN,total_like:NaN,total_share:NaN,total_coin:NaN,total_fav:NaN,total_elec:NaN,inc_coin:NaN,inc_elec:NaN,inc_fav:NaN,inc_like:NaN,inc_share:NaN,incr_click:NaN,incr_dm:NaN,incr_fans:NaN,incr_reply:NaN,follow:{},unfollow:{},articleView:NaN,articleReply:NaN,articleLike:NaN,articleCoin:NaN,articleFav:NaN,articleShare:NaN,articleIncrView:NaN,articleIncrReply:NaN,articleIncrLike:NaN,articleIncrCoin:NaN,articleIncrFav:NaN,articleIncrShare:NaN,ratingString:"",ratingCredit:NaN,ratingLevel:NaN}}static contextType=o.T;componentDidMount(){this.getData(),this.getArticleData(),this.getRatingData()}getData=()=>new Promise((e=>{chrome.runtime.sendMessage({target:"mainCreator",event:"getData"},(t=>{t&&this.setState({...t}),e()}))}));getArticleData=()=>new Promise((e=>{chrome.runtime.sendMessage({target:"mainCreator",event:"getArticleData"},(t=>{t&&this.setState({...t}),e()}))}));getRatingData=()=>new Promise((e=>{chrome.runtime.sendMessage({target:"mainCreator",event:"getRatingData"},(t=>{t&&this.setState({...t}),e()}))}));handleOnClickLink=(e,t,a)=>{e.stopPropagation(),e.preventDefault(),chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_creator",action:"_"+t}),this.context.createTab(e,a)};handleOnClickCenter=e=>{this.handleOnClickLink(e,null,"https://member.bilibili.com/platform/home")};handleOnClickRating=e=>{this.handleOnClickLink(e,"rating","https://member.bilibili.com/platform/railgun/index")};handleOnClickVideoManager=e=>{this.handleOnClickLink(e,"video_manager","https://member.bilibili.com/platform/upload-manager/article")};handleOnClickArticleManager=e=>{this.handleOnClickLink(e,"article_manager","https://member.bilibili.com/platform/upload-manager/text")};handleOnClickDataCenter=e=>{this.handleOnClickLink(e,"data_center","https://member.bilibili.com/platform/data-up/video/dataCenter/video")};handleOnClickFansManager=e=>{this.handleOnClickLink(e,"fans_manager","https://member.bilibili.com/platform/fans/medal")};handleOnClickCommentManager=e=>{this.handleOnClickLink(e,"comment_manager","https://member.bilibili.com/platform/comment/article")};render(){const e=(0,c.nL)(this.state.incr_fans);let t="";return isNaN(e)||(t=(e>0?" + ":" - ")+Math.abs(e)),i.createElement(p,{ref:this.listRef},i.createElement(r.w,{columns:4,columnsGap:6,rowGap:6},i.createElement(g,{hasCallback:!0,className:"header",onClick:this.handleOnClickCenter,onAuxClick:this.handleOnClickCenter},"\u521b\u4f5c\u4e2d\u5fc3"),i.createElement(g,{hasCallback:!0,className:"header",onClick:this.handleOnClickVideoManager,onAuxClick:this.handleOnClickVideoManager},"\u89c6\u9891\u7ba1\u7406"),i.createElement(g,{hasCallback:!0,className:"header",onClick:this.handleOnClickArticleManager,onAuxClick:this.handleOnClickArticleManager},"\u4e13\u680f\u7ba1\u7406"),i.createElement(g,{hasCallback:!0,className:"header",onClick:this.handleOnClickCommentManager,onAuxClick:this.handleOnClickCommentManager},"\u4e92\u52a8\u7ba1\u7406")),i.createElement(r.w,{columns:1,columnsGap:6,rowGap:1},i.createElement(r.w,{columns:1,columnsGap:6,rowGap:6},i.createElement(g,{className:"data-section",onClick:this.handleOnClickFansManager,onAuxClick:this.handleOnClickFansManager,hasCallback:!0},i.createElement("main",{className:"main-data"},i.createElement("b",{className:"title"},"\u7c89\u4e1d\u6570"),i.createElement("i",{className:"main-value"},(0,c.nL)(this.state.total_fans||0),i.createElement("span",{className:"yesterday"},t))))),d.map((({title:e,list:t},a)=>i.createElement(r.w,{key:a,title:e,columns:1,columnsGap:6,rowGap:1},t.map((({title:e,secondTitle:t,key:a,secondKey:n,linkCallback:l,holdColumns:r})=>{const o=!!this[l],s=0===this.state[n];let m;if(!s&&this.state[n]){const e=(0,c.nL)(this.state[n]);m=e>0?" \uff0b"+(0,c.nL)(this.state[n]):""}else m="";return i.createElement(g,{key:a,className:"data-section",onClick:o?this[l]:null,onAuxClick:o?this[l]:null,hasCallback:o},i.createElement("main",{className:"main-data"},i.createElement("b",{className:"title"},e),i.createElement("i",{className:"main-value"},(0,c.nL)(this.state[a]||0),i.createElement("span",{className:"yesterday"},m))))}))))),i.createElement(r.w,{title:"\u5176\u4ed6",columns:1,columnsGap:6,rowGap:6},i.createElement(g,{className:"data-section rating",onClick:this.handleOnClickRating,onAuxClick:this.handleOnClickRating,hasCallback:!0},i.createElement("main",{className:"main-data"},i.createElement("b",{className:"title"},"\u7535\u78c1\u529b"),i.createElement("i",{className:"main-value"},this.state.ratingString)),i.createElement("main",null,i.createElement("div",{className:"yesterday"},"\u4fe1\u7528\u503c",i.createElement("i",{className:"second-value"},this.state.ratingCredit||0)),i.createElement("span",{className:"level"},"Lv",this.state.ratingLevel))))))}}const k=(0,n.y)(b)},4934:(e,t,a)=>{a.d(t,{w:()=>o});var i=a(6540),n=a(5999);const l=n.Ay.div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,r=n.Ay.h4`
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
`;class o extends i.Component{constructor(e){super(e)}static defaultProps={columns:1,rowGap:2,columnsGap:2};render(){const{children:e,title:t,columns:a,rowGap:n,columnsGap:o,footer:c,sectionRef:s,...m}=this.props;return i.createElement(l,{className:"section",rowGap:n,columnsGap:o,ref:s,...m},t?i.createElement(r,{className:"section-title"},t):null,i.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${a}, 1fr)`,gridColumnEnd:`span ${a}`}},e),c)}}}}]);