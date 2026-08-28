"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[669],{4933:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var i=o(9189),n=o(6540),r=o(3205),a=o(5999),s=o(4934),l=o(9751);const c=a.Ay.div.attrs({className:"popup-main-recently-posted"})`
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
    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class p extends n.Component{constructor(e){super(e),this.state={cards:[]}}static contextType=l.T;componentDidMount(){chrome.runtime.sendMessage({target:"umami",event:"sendPage",pathname:"/popup/watchLater"}),this.getWatchLaterList()}getWatchLaterList=()=>{chrome.runtime.sendMessage({target:"watchLater",event:"getList"},(e=>{e&&(e.forEach((e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.userInfo.uid)})),this.setState({cards:e}))}))};handleOnClickVideoCover=(e,t,o)=>{e.stopPropagation(),e.preventDefault(),e.persist(),chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_watch_later",action:"click_video",label:o}),this.context.createTab(e,"https://www.bilibili.com/video/"+t)};handleOnClickUserName=(e,t)=>{e.preventDefault(),e.stopPropagation(),e.persist(),chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_watch_later",action:"click_video",label:"upper_name"}),this.context.createTab(e,`https://space.bilibili.com/${t}`)};handleOnClickListenVideoButton=(e,t)=>{e.preventDefault(),e.stopPropagation(),chrome.runtime.sendMessage({target:"listenVideo",event:"play",url:"https://www.bilibili.com/video/"+t})};render(){const{cards:e}=this.state,{columns:t,videoCardType:o}=this.context,r=i.q[o];return n.createElement(c,null,n.createElement(s.w,{columns:t,style:{gridColumnEnd:`span ${t}`,marginBottom:"40px"}},e.length>0?e.map(((e,t)=>{const{videoInfo:o,userInfo:i}=e;return n.createElement(r,{key:o.bvid,isSpecialAttention:e.isSpecialAttention,userInfo:i,videoInfo:o,onClickUserName:e=>this.handleOnClickUserName(e,i.uid),onClickCover:e=>this.handleOnClickVideoCover(e,o.bvid,t),onClickMusic:e=>this.handleOnClickListenVideoButton(e,o.bvid),hasWatchLater:!0})})):"\u6ca1\u6709\u89c6\u9891\u6570\u636e"))}}const d=(0,r.y)(p)},4934:(e,t,o)=>{o.d(t,{w:()=>s});var i=o(6540),n=o(5999);const r=n.Ay.div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,a=n.Ay.h4`
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
`;class s extends i.Component{constructor(e){super(e)}static defaultProps={columns:1,rowGap:2,columnsGap:2};render(){const{children:e,title:t,columns:o,rowGap:n,columnsGap:s,footer:l,sectionRef:c,...p}=this.props;return i.createElement(r,{className:"section",rowGap:n,columnsGap:s,ref:c,...p},t?i.createElement(a,{className:"section-title"},t):null,i.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${o}, 1fr)`,gridColumnEnd:`span ${o}`}},e),l)}}}}]);