"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[107],{129:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var o=i(1653),r=i(9189),n=i(6540),s=i(3205),a=i(5999),l=i(4934),c=i(9751);const p=a.Ay.div.attrs({className:"popup-main-favlist"})`
  display: flex;
  flex-direction: row-reverse;
  padding: 0;
  overflow: hidden !important;

  .fav-item-list-wrapper {
    position: sticky;
    top: -8px;

    flex-shrink: 0;
    margin: 0 -10px -8px -10px;
    width: 10px;
    height: calc(100% + 4px);
    transition: width .2s;
    z-index: 2;

    .expand-button {
      position: absolute;
      top: calc(50%);
      left: -16px;
      padding: 4px 0 4px 3px;
      background-color: #f4f4f4;
      border-radius: 4px;

      .bilibili-helper-2-iconfont {
        display: block;
      }
    }

    &:hover {
      width: 72px;
    }
  }

  .fav-item-list {
    display: flex;
    flex-direction: column;
    padding-bottom: 34px;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;

    .fav-item {
      flex-shrink: 0;
      margin-bottom: 1px;
      padding: 8px;
      //height: 14px;
      //line-height: 14px;
      font-size: 12px;
      word-break: keep-all;
      background-color: #fff;
      overflow: hidden;
      cursor: pointer;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      user-select: none;

      &:hover {
        background-color: var(--bilibili-blue);
        color: var(--bilibili-gray);
      }

      &.selected {
        position: sticky;
        top: 0;
        background-color: rgb(35 173 229 / 10%);
        color: var(--bilibili-blue);
        pointer-events: none;

        //width: fit-content;
      }
    }
  }

  .section {
    margin: 0 10px 0 0;
    width: 100%;
    overflow: auto;
  }

  .list {
    position: relative;
    display: grid;
    //grid-template-columns: repeat(auto-fill, 196px);
    //grid-template-rows: repeat(auto-fill, 135px);
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    margin-bottom: 42px;


    .LazyLoad {
      min-height: 149px;
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
    .fav-item-list-wrapper {
      .fav-item {
        background-color: #171717;
      }

      .expand-button {
        background-color: #202020;
      }
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class d extends n.Component{constructor(e){super(e),this.state={hasMore:!1,list:[],currentIndex:0},this.listRef=n.createRef(),this.bottomObserverRef=n.createRef()}static contextType=c.T;currentDidList=new Set;componentDidMount(){chrome.runtime.sendMessage({target:"umami",event:"sendPage",pathname:"/popup/favlist"}),this.getFavlist().then((()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver(((e,t)=>{const{list:i,currentIndex:o}=this.state;i[o].hasMore&&e.length&&e[0].intersectionRatio&&this.getVideoList(o,i[o].pn)}),{root:this.listRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))}))}componentWillUnmount(){this.observer&&this.observer.disconnect()}getFavlist=()=>new Promise(((e,t)=>{chrome.runtime.sendMessage({target:"mainFavlist",event:"getMediaList"},(i=>{i?(this.setState({list:i}),e()):t()}))}));getVideoList=(e,t=1)=>{const{list:i}=this.state,o=i[e];chrome.runtime.sendMessage({target:"mainFavlist",event:"getVideoList",id:o.id,pn:t},(t=>{t&&(t.medias.forEach((e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.userInfo.uid)})),o.videos.push(...t.medias),o.hasMore=t.has_more,o.pn+=1,this.setState({list:i,currentIndex:e},(()=>{1===e&&(document.querySelector(".popup-main-favlist .section").scrollTop=0)})))}))};handleOnClickMedia=e=>{const{list:t,currentIndex:i}=this.state;if(i===e)return;const o=t[e];0===o.videos.length&&o.hasMore?this.getVideoList(e,o.pn):this.setState({currentIndex:e})};handleOnClickVideoCover=(e,t,i)=>{e.preventDefault(),e.stopPropagation(),e.persist(),chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_favlist",action:"click_video",label:i}),this.context.createTab(e,"https://www.bilibili.com/video/"+t)};handleOnClickUserName=(e,t)=>{e.persist(),e.stopPropagation(),e.preventDefault(),chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_favlist",action:"click_video",label:"upper_name"}),this.context.createTab(e,`https://space.bilibili.com/${t}`)};render(){const{currentIndex:e,hasMore:t,list:i}=this.state,{columns:s,videoCardType:a}=this.context,c=r.q[a];return n.createElement(p,{ref:this.listRef},n.createElement("div",{className:"fav-item-list-wrapper"},n.createElement("div",{className:"fav-item-list"},i.map(((t,i)=>n.createElement("div",{key:t.id,className:["fav-item",e===i?"selected":""].join(" "),onClick:()=>this.handleOnClickMedia(i)},t.title)))),n.createElement("div",{className:"expand-button"},n.createElement(o.In,{icon:"left-arrow",size:16}))),n.createElement(l.w,{columns:s,style:{gridColumnEnd:`span ${s}`},footer:n.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},t?n.createElement(o.sL,{className:"border",onClick:()=>this.getVideoList(e,i[e].pn)},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},i[e]&&i[e].videos.length>0?i[e].videos.map(((e,t)=>{const{userInfo:i,videoInfo:o}=e;return n.createElement(c,{key:o.bvid,userInfo:i,videoInfo:o,onClickUserName:e=>this.handleOnClickUserName(e,i.uid),onClickCover:e=>this.handleOnClickVideoCover(e,o.bvid,t),showWatcherLaterButton:!1})})):"\u6ca1\u6709\u89c6\u9891\u6570\u636e"))}}const m=(0,s.y)(d)},4934:(e,t,i)=>{i.d(t,{w:()=>a});var o=i(6540),r=i(5999);const n=r.Ay.div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,s=r.Ay.h4`
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
`;class a extends o.Component{constructor(e){super(e)}static defaultProps={columns:1,rowGap:2,columnsGap:2};render(){const{children:e,title:t,columns:i,rowGap:r,columnsGap:a,footer:l,sectionRef:c,...p}=this.props;return o.createElement(n,{className:"section",rowGap:r,columnsGap:a,ref:c,...p},t?o.createElement(s,{className:"section-title"},t):null,o.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${i}, 1fr)`,gridColumnEnd:`span ${i}`}},e),l)}}}}]);