"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[605],{4934:(e,t,i)=>{i.d(t,{w:()=>a});var o=i(6540),n=i(5999);const s=n.Ay.div`
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
`;class a extends o.Component{constructor(e){super(e)}static defaultProps={columns:1,rowGap:2,columnsGap:2};render(){const{children:e,title:t,columns:i,rowGap:n,columnsGap:a,footer:c,sectionRef:l,...d}=this.props;return o.createElement(s,{className:"section",rowGap:n,columnsGap:a,ref:l,...d},t?o.createElement(r,{className:"section-title"},t):null,o.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${i}, 1fr)`,gridColumnEnd:`span ${i}`}},e),c)}}},8041:(e,t,i)=>{i.a(e,(async(e,o)=>{try{i.r(t),i.d(t,{default:()=>f});var n=i(6540),s=i(1653),r=i(9189),a=i(5999),c=i(3205),l=(i(4053),i(3432)),d=i(4934),p=i(9751);const e=a.Ay.div`
  //.topic {
  //  margin-top: 0;
  //  margin-bottom: 6px;
  //  margin-left: -10px;
  //  padding: 4px 0 4px 10px;
  //  font-size: 12px;
  //  color: #3B3B3B;
  //  position: sticky;
  //  top: -10px;
  //  z-index: 2;
  //  background-color: #f4f4f4;
  //}

  .topic {
    display: flex;
    margin: 0;
    color: #3B3B3B;

    b {
      margin: 0 4px;
      color: var(--bilibili-pink);
    }

    .more-btn {
      margin-left: auto;
      cursor: pointer;
    }
  }

  @media (prefers-color-scheme: dark) {
    .topic {
      color: #999999;
      background-color: #1f1f1f;
    }
  }
`,m=a.Ay.div.attrs({className:"popup-main-home"})`
  position: relative;
  display: grid;
  //grid-template-columns: repeat(auto-fill, 196px);
  //grid-template-rows: repeat(auto-fill, 135px);
  //grid-column-gap: 12px;
  grid-template-columns: 1fr;
  grid-row-gap: 12px;
  margin-bottom: 42px;

  &::-webkit-scrollbar {
    width: 3px;
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

  .carousel {
    margin-left: -10px;
    width: calc(100% + 20px);
    height: 92px;
    overflow: hidden;

    img:not([src]) {
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0 0 0 / 10%);
    }
  }

  .LazyLoad {
    min-height: 149px;
  }

  .recommend-video-list {
    .section-content {
      padding-top: 6px;
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
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,h=a.Ay.div`
  margin-bottom: -12px;
  width: auto;
  overflow: auto;

  .list {
    display: flex;
    margin-top: 6px;
    width: 100%;
    overflow: auto;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`,u=a.Ay.a`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  margin: 0 2.5px;
  padding: 4px 1px;
  width: 50px;
  border: 1px solid transparent;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color .2s;
  //content-visibility: print;
  //contain-intrinsic-size: 54px 0;
  //will-change: scroll-position;

  &:hover {
    background-color: rgba(255, 255, 255);
  }

  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50px;
  }

  .user-name {
    overflow: hidden;
    //text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    width: 114%;
    word-break: break-all;
    color: var(--paper-grey-900);
    text-align: center;
    zoom: 0.8;
  }

  @media (prefers-color-scheme: dark) {
    .user-name {
      color: var(--paper-grey-100);
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`,g=(a.Ay.div`
  display: flex;
  align-items: center;

  .button {
    height: 22px;
  }
`,a.Ay.section`
`),b=await(0,l.NT)("mainHome-config")||{};class v extends n.Component{constructor(e){super(e)}static contextType=p.T;state={liveList:[],livingCount:0,carousel:[],offsetDynamicId:0,videoList:[],recentVideoList:[],hotVideoList:[],hotVideoListPageNumber:1,hasMoreVideos:!0,adMap:[]};contentType="recentVideo";videoListRef=n.createRef();bottomObserverRef=n.createRef();currentDidList=new Set;componentDidMount(){chrome.runtime.sendMessage({target:"umami",event:"sendPage",pathname:"/popup/home"}),chrome.runtime.sendMessage({target:"ad",event:"getAds",position:"popupMainHome"},(e=>{e&&e.length>0&&this.setState({adMap:e})}));const e=b,t=!e||!!e.showLiveBar;this.setState({showLiveBar:t}),t&&this.getLiveList(),this.getHomeData(!1),this.getDynamic(),this.videoListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver(((e,t)=>{this.state.hasMoreVideos?e.length&&0!==e[0].intersectionRatio&&this.getDynamic(this.state.offsetDynamicId):t.disconnect()}),{root:this.videoListRef.current}),this.observer.observe(this.bottomObserverRef.current))}componentDidUpdate(e,t,i){return t.adMap.length!==this.state.adMap.length||t.liveList.length!==this.state.liveList.length||t.recentVideoList.length!==this.state.recentVideoList.length}getHomeData=(e=!0)=>new Promise((t=>{chrome.runtime.sendMessage({target:"mainHome",event:"getHomeData",getCache:e},(e=>{if(e){const{data:t}=e,{carousel:i,recommendList:o}=t;o.forEach((e=>{e.isSpecialAttention=this.state.specialAttentionList.includes(e.owner.mid)}))}else t()}))}));getDynamic=(e=this.state.offsetDynamicId)=>{const{bhAccount:t,specialAttentionList:i}=this.context;return new Promise((o=>{chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getDynamic",offsetDynamicId:e},(e=>{if(e){const{recentVideoList:n,adMap:s}=this.state,{hasMore:r,offsetDynamicId:a}=e;if(e.cards=e.cards.filter((e=>{if(e.isSpecialAttention=i.includes(e.card.owner.mid),!this.currentDidList.has(e.desc.dynamic_id_str))return this.currentDidList.add(e.desc.dynamic_id_str),!0})),(!t||!t.isVIP)&&s.length>0){const t=1,i=s.filter((e=>!e.hasShow)),o=Math.floor(Math.random()*(i.length+t));n[0]&&n[0].isAD&&n.shift();const r=i[o];r&&(r.hasShow=!0,e.cards.unshift({...r,isAD:!0,link:r.link,cover:r.cover,title:r.title}))}n.push(...e.cards),this.setState({hasMoreVideos:r,recentVideoList:n,offsetDynamicId:a},(()=>{o()}))}else this.setState({hasMoreVideos:!1,recentVideoList:[],offsetDynamicId:0},(()=>{o()}))}))}))};getHotVideos=()=>new Promise((e=>{const{hotVideoList:t,hotVideoListPageNumber:i}=this.state;this.state.hasMoreVideos?chrome.runtime.sendMessage({target:"mainHome",event:"getHotVideos",pn:i},(o=>{if(o){const{list:n,hasMore:s}=o;n.forEach((e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.owner.mid)})),t.push(...n),this.setState({hotVideoList:t,hasMoreVideos:s,hotVideoListPageNumber:i+1},(()=>e()))}})):e()}));getLiveList=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/w_live_users?size=20",options:{contentType:"json"}},(({data:e})=>{e&&e.data&&e.data.items&&e.data.items.length>0&&this.setState({liveList:e.data.items,livingCount:e.data.count})}))};createTab(e,t=!0){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e,active:t})}handleOnClickVideoCover=(e,t,i)=>{chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_home",action:"click_video",label:i}),e.preventDefault(),this.createTab("https://www.bilibili.com/video/"+t,"direct"===this.context.videoOpenMethod()&&1!==e.button)};handleOnClickSpecialAttentionBtn=(e,t)=>{e.stopPropagation();const{specialAttentionList:i}=this.context,{videoList:o,recentVideoList:n,hotVideoList:s}=this.state;new Promise(((e,o)=>{i.includes(t)?(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_home",action:"click_video",label:"specialAttention_remove"}),chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:t},(n=>{if(n){const n=i.indexOf(t);n>=0?(i.splice(n,1),e(i)):o()}else o()}))):(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_home",action:"click_video",label:"specialAttention_add"}),chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:t},(n=>{n?(i.push(t),e(i)):o()})))})).then((e=>{"hot"===this.contentType||"default"===this.contentType?this.setState({specialAttentionList:e,videoList:o.map((t=>(t.isSpecialAttention=e.includes(t.owner.mid),t))),hotVideoList:s.map((t=>(t.isSpecialAttention=e.includes(t.owner.mid),t)))}):"recentVideo"===this.contentType&&this.setState({recentVideoList:n.map((t=>(t.isSpecialAttention=e.includes(t.desc.uid),t)))})}))};handleOnClickMoreLiving=()=>{this.props.history.push("/live")};handleOnClickOpenLive=(e,t,i)=>{e.stopPropagation(),e.preventDefault(),chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_home",action:"click_living_list",label:i}),this.createTab(t,"direct"===this.context.videoOpenMethod()&&1!==e.button)};refreshSpecialAttention=()=>{const{specialAttentionList:e}=this.context,{recentVideoList:t}=this.state;this.setState({recentVideoList:t.map((t=>(t.isSpecialAttention=e.includes(t.card.owner.mid),t)))})};renderLiveList(){const{liveList:e,livingCount:t,showLiveBar:i}=this.state,{columns:o}=this.context;return i&&t>0?n.createElement(h,{style:{gridColumnEnd:`span ${o}`}},n.createElement("h4",{className:"topic"},"\u6b63\u5728\u76f4\u64ad",n.createElement("b",null,t),"\u4eba",n.createElement("span",{className:"more-btn",onClick:this.handleOnClickMoreLiving},"\u67e5\u770b\u5168\u90e8")),n.createElement("div",{className:"list"},e.map(((e,t)=>n.createElement(u,{key:e.uid,onClick:i=>this.handleOnClickOpenLive(i,e.link,t)},n.createElement(s._V,{className:"user-avatar",url:e.face}),n.createElement("span",{className:"user-name"},e.uname)))))):null}renderVideoListTitle(){let e=this.contentType;return n.createElement("div",null,n.createElement(g,{className:"home"===e?"active":null},"\u6700\u8fd1\u6295\u7a3f"),n.createElement(g,{className:"recentVideo"===e?"active":null},"\u9996\u9875\u63a8\u8350"))}renderRecentVideo(e,t){const{columns:i,bilibiliAccount:o}=this.context;if(!e)return"\u6ca1\u6709\u89c6\u9891\u6570\u636e";const a=r.q[this.context.videoCardType];return e.length>0?e.map(((e,t)=>{const{desc:i,card:o}=e;return e.isAD?null:n.createElement(a,{key:i.dynamic_id_str,isSpecialAttention:e.isSpecialAttention,...o,owner:{name:i.user_profile.info.uname,mid:i.uid,face:i.user_profile.info.face},onClickCover:e=>this.handleOnClickVideoCover(e,i.bvid,t),onClickFollowBtn:e=>this.handleOnClickSpecialAttentionBtn(e,i.uid),showTag:this.context.showTag})})):o&&!o.hasLogin?n.createElement("div",{style:{gridColumnEnd:`span ${i}`}},n.createElement(s.sL,{onClick:()=>this.createTab("https://passport.bilibili.com/login?from=bilibili-helper",!0)},"\u672a\u53d1\u73b0\u5df2\u767b\u5f55\u7684B\u7ad9\u8d26\u53f7\uff0c\u70b9\u51fb\u767b\u5f55")):void 0}renderVideoList(){const{columns:e,hasLogin:t,bhAccount:i}=this.context,{hotVideoList:o,hasMoreVideos:r,recentVideoList:a}=this.state;return n.createElement(d.w,{title:this.renderVideoListTitle(),columns:e,rowGap:6,columnsGap:6,footer:n.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},r&&a&&a.length>0?n.createElement(s.sL,{className:"border",onClick:()=>this.getDynamic()},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},this.renderRecentVideo(a,r))}render(){return n.createElement(e,{id:"homePage",ref:this.videoListRef},n.createElement(m,null,this.renderLiveList(),this.renderVideoList()))}}const f=(0,c.y)(v);o()}catch(e){o(e)}}),1)}}]);