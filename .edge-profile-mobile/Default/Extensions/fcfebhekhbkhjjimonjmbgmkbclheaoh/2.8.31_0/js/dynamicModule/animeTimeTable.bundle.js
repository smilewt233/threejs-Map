"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[33],{11:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var o=i(8087),r=i(4271),a=i(6540),n=i(5999),l=i(3205),s=i(4934),c=i(9751);const p=e=>["","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u65e5"][e],d=n.Ay.div.attrs({className:"popup-main-anime"})`
  padding: 0 !important;
  width: 100% !important;
  overflow: hidden;

  .section-btn-group {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 4px;
    padding: 4px;
    background-color: #F4F4F4;

    .button {
      width: 100%;
      height: 20px;
      line-height: 20px;
      //background-color: var(--bilibili-blue);
      //color: var(--bilibili-gray);
      &.active {
        background-color: var(--paper-grey-300);
        color: var(--paper-grey-900);
      }

      button {
        line-height: 18px;
      }
    }
  }

  .section {
    position: absolute;
    top: 28px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    scrollbar-width: thin;

    .section-content {
      .each-day {
        position: relative;
        margin-left: 2px;
        margin-right: 2px;
        padding-left: 0;
        box-sizing: border-box;
        //width: 190px;
        flex-shrink: 0;
        scroll-snap-align: start;
        //cursor: pointer;

        .topic {
          //position: sticky;
          //left: 0px;
          //display: inline-block;
          //margin-left: -10px;
          //padding-left: 10px;
          position: sticky;
          top: 0;
          height: 28px;
          z-index: 2;
          background-color: #f4f4f4;

          h5 {
            margin: 0 0 0 2px;
            font-size: 16px;
            color: #545454;
            line-height: 30px;
          }
        }

        .episodes {
          display: grid;
          grid-column-gap: 4px;
          grid-row-gap: 4px;
          //height: calc(100% - 30px);
          //margin-bottom: 30px;

          &::-webkit-scrollbar-thumb {
            visibility: visible;
          }

          .empty-day {
            margin-bottom: 8px;
            margin-left: 1px;
            font-size: 12px;
            font-weight: bold;
            opacity: 0.6;
          }
        }

        &.is-today {
          padding: 2px 0 6px;
          //border-top: 1px dashed var(--bilibili-pink);
          //border-bottom: 1px dashed var(--bilibili-pink);
          .topic h5 {
            color: var(--bilibili-pink);
          }

          .episodes {
            box-shadow: inset -2px 0 0px 0px var(--bilibili-pink);
            //background-color: rgb(251 114 153 / 0.1);
            //border-radius: 2px;
          }
        }
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .section-btn-group {
      background-color: #1f1f1f;

      .button {
        &.active {
          background-color: var(--paper-grey-800);
          color: var(--bilibili-gray);
        }
      }
    }

    .section .section-content .each-day .topic {
      background-color: #1f1f1f;
    }
  }
`,m=n.Ay.div`
  display: flex;
  padding: 4px;
  border-radius: 2px;
  cursor: pointer;
  //transition: background-color .2s;
  //margin-bottom: 6px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: rgb(222 220 220 / 50%);
  }

  .avatar {
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 2px;
    object-fit: cover;
    //cursor: pointer;
    overflow: hidden;

    .img {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      //transition: filter .2s;
    }

    .publish-time {
      position: absolute;
      bottom: 0;
      padding: 2px 3px;
      line-height: 12px;
      border-radius: 0 3px 0 0;
      background-color: rgb(0 0 0 / 60%);
      color: #fff;
      transform-origin: bottom left;
      transform: scale(0.8);
      z-index: 1;
    }
  }

  .info {
    display: inline-block;
    padding-left: 6px;
    width: calc(100% - 60px);
    vertical-align: top;

    h6, p {
      margin: 0;
      line-height: 14px;
      font-size: 12px;
      //cursor: pointer;
    }

    h6 {
      display: -webkit-box;
      max-height: 28px;
      font-weight: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    p {
      margin-top: 8px;
      color: #666;
    }
  }

  &.follow {
    .avatar img {
      border: 2px solid var(--bilibili-pink);
    }
  }

  &.is-published {
    .info p {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(0 0 0 / 0.5);

      .avatar {
        .img {
          //filter: brightness(1);
        }
      }
    }

    .avatar {
      .img {
        //filter: brightness(.8);
      }
    }

    .info {
      h6 {
        color: #aaa;
      }
    }
  }
`,g=function({square_cover:e,pub_index:t,episode_id:i,season_id:o,pub_time:n,title:l,url:s,follow:p,published:d,delay:g,delay_reason:b}){const{createTab:h}=(0,a.useContext)(c.T),u=a.useCallback((e=>{if(i&&d){const t=`https://www.bilibili.com/bangumi/play/ep${i}/`;h(e,t)}else{const t=`https://www.bilibili.com/bangumi/play/ss${o}/`;h(e,t)}chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_time_table",action:"click_category_item",label:l})}),[s,i]);return a.createElement(m,{className:[p?"follow":"",d?"is-published":null].filter(Boolean).join(" "),onClick:u,onAuxClick:u},a.createElement("div",{className:"avatar"},a.createElement(r._,{url:e+"@100w_100h.webp",sign:l}),a.createElement("div",{className:"publish-time"},n)),a.createElement("div",{className:"info"},a.createElement("h6",null,l),a.createElement("p",null,g?b:t)))};class b extends a.Component{constructor(e){super(e),this.state={type:"global",timeline:[],timelineCN:[]}}static contextType=c.T;componentDidMount(){chrome.runtime.sendMessage({target:"umami",event:"sendPage",pathname:"/popup/animeTable"}),this.getTimelineData()}getTimelineData=()=>{chrome.runtime.sendMessage({target:"mainAnime",event:"getAnimaTimeline"},(e=>{e&&this.setState({timeline:e||[]},(()=>{const e=document.getElementById("todayAnime");e&&(e.parentNode.parentNode.scrollTop=e.offsetTop)}))}))};getTimelineCNData=()=>{chrome.runtime.sendMessage({target:"mainAnime",event:"getAnimaTimelineCN"},(e=>{e&&this.setState({timelineCN:e||[]},(()=>{const e=document.getElementById("todayAnime");e&&(e.parentNode.parentNode.scrollTop=e.offsetTop)}))}))};handleOnClickTypeButton=e=>{const{type:t,timelineCN:i}=this.state;t!==e&&(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_time_table",action:"click_category",label:e}),this.setState({type:e},(()=>{if(0===i.length)this.getTimelineCNData();else{const e=document.getElementById("todayAnime");e&&(e.parentNode.parentNode.scrollTop=e.offsetTop)}})))};render(){const{timeline:e,timelineCN:t,type:i}=this.state,{columns:r}=this.context,n="global"===i?e:t;return a.createElement(d,null,a.createElement("div",{className:"section-btn-group"},a.createElement(o.sL,{className:"global"===i?"active":"",onClick:()=>this.handleOnClickTypeButton("global")},"\u65e5\u756a"),a.createElement(o.sL,{className:"cn"===i?"active":"",onClick:()=>this.handleOnClickTypeButton("cn")},"\u56fd\u521b")),a.createElement(s.w,null,n.map((e=>{const{date:t,day_of_week:i,is_today:o,is_yesterday:n=!1,episodes:l}=e,s=p(i);return a.createElement("div",{key:t,id:o?"todayAnime":"",className:["each-day",o?"is-today":null,n?"is-yesterday":null].filter(Boolean).join(" ")},a.createElement("div",{className:"topic"},a.createElement("h5",null,`\u5468${s}`," ",t.split("-").join("\u6708"),"\u65e5")),a.createElement("div",{className:"episodes",style:{gridTemplateColumns:`repeat(${r}, 1fr)`}},l.map((e=>a.createElement(g,{key:e.episode_id||e.season_id,...e}))),0===l.length?a.createElement("div",{className:"empty-day"},"\u5f53\u5929\u6ca1\u6709\u756a\u5267\u653e\u9001"):null))}))))}}const h=(0,l.y)(b)},4158:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var o=i(8087),r=i(6540),a=i(3205),n=i(5999),l=i(4934),s=i(9751);const c=n.Ay.div.attrs({className:"popup-main-anime"})`
  padding: 0 !important;
  width: 100% !important;
  overflow: hidden;

  .section-btn-group {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 4px;
    padding: 4px;
    background-color: #F4F4F4;

    .button {
      width: 100%;
      height: 20px;
      line-height: 20px;
      //background-color: var(--bilibili-blue);
      //color: var(--bilibili-gray);
      &.active {
        background-color: var(--paper-grey-300);
        color: var(--paper-grey-900);
      }

      button {
        line-height: 18px;
      }
    }
  }

  .section {
    position: absolute;
    top: 28px;
    right: 0;
    bottom: 0;
    left: 0;
    padding-bottom: 40px;
    overflow: auto;

    .section-title {
      top: 28px;
      display: flex;
      width: 100%;

      .more-btn {
        cursor: pointer;
        margin-left: auto;
      }
    }

    .section-content {
      min-height: 200px;
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
    .section-btn-group {
      background-color: #1f1f1f;

      .button {
        &.active {
          background-color: var(--paper-grey-800);
          color: var(--bilibili-gray);
        }
      }
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,p=n.Ay.div`
  display: flex;
  padding: 4px;
  //height: 58px;
  border-radius: 2px;
  cursor: pointer;
  //transition: background-color .2s;
  //content-visibility: auto;
  //contain-intrinsic-size: 0 58px;

  &:hover {
    background-color: rgb(222 220 220 / 50%);
  }

  .cover {
    position: relative;
    flex-shrink: 0;
    border-radius: 2px;

    .img {
      display: block;
      width: 80px;
      //height: 62.5px;
      border-radius: 2px;
      //transition: filter .2s;
    }

    .badge {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0 3px;
      border-radius: 2px;
      background-color: var(--bilibili-pink);
      color: var(--bilibili-gray);
      zoom: .8;
      //opacity: 0;
    }
  }

  .info {
    flex-grow: 1;
    margin-left: 6px;
    display: flex;
    flex-direction: column;

    .title {
      margin: 0;
      color: var(--paper-grey-900);
      line-height: 14px;
      font-size: 12px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }

    .progress {
      margin: 0;
      color: var(--paper-grey-600);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;

      &.unwatch {
        color: var(--bilibili-pink);
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(0 0 0 / 0.5);

      .img {
        filter: brightness(1);
      }
    }

    .img {
      filter: brightness(.8);
    }

    .info {
      .title {
        color: var(--bilibili-gray);
      }
    }
  }
`;class d extends r.Component{constructor(e){super(e)}static contextType=s.T;state={type:1,dataList:[{list:[],pn:1,hasMore:!0},{list:[],pn:1,hasMore:!0},{list:[],pn:1,hasMore:!0},{list:[],pn:1,hasMore:!0}]};listRef=r.createRef();bottomObserverRef=r.createRef();componentDidMount(){chrome.runtime.sendMessage({target:"umami",event:"sendPage",pathname:"/popup/subscribed"}),this.loadDataByType().then((()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver(((e,t)=>{const{dataList:i,type:o}=this.state;i[o-1].hasMore&&e.length&&e[0].intersectionRatio&&this.loadDataByType()}),{root:this.listRef.current}),this.observer.observe(this.bottomObserverRef.current))}))}loadDataByType=(e=20)=>new Promise((t=>{const{dataList:i,type:o}=this.state;i[o-1].hasMore&&chrome.runtime.sendMessage({target:"mainAnime",event:"getFeedData",type:o,pn:i[o-1].pn,ps:e},(r=>{r?(i[o-1].list.push(...r),i[o-1].pn+=1,r.length<e&&(i[o-1].hasMore=!1),this.setState({dataList:i},(()=>t()))):t()}))}));handleOnClickGoToAnimePage=(e,t,i)=>{const{type:o}=this.state;chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_followed",action:"click_category_item",label:`${o}_${i}`}),this.context.createTab(e,`https://www.bilibili.com/bangumi/play/ss${t}`)};handleOnClickTypeButton=e=>{const{type:t}=this.state;t!==e&&(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_followed",action:"click_category",label:e}),this.setState({type:e}))};render(){const{dataList:e,type:t}=this.state,{columns:i}=this.context;return r.createElement(c,{ref:this.listRef},r.createElement("div",{className:"section-btn-group"},r.createElement(o.sL,{className:1===t?"active":"",onClick:()=>this.handleOnClickTypeButton(1)},"\u65e5\u756a"),r.createElement(o.sL,{className:4===t?"active":"",onClick:()=>this.handleOnClickTypeButton(4)},"\u56fd\u521b"),r.createElement(o.sL,{className:2===t?"active":"",onClick:()=>this.handleOnClickTypeButton(2)},"\u5f71\u89c6"),r.createElement(o.sL,{className:3===t?"active":"",onClick:()=>this.handleOnClickTypeButton(3)},"\u7eaa\u5f55\u7247")),r.createElement(l.w,{columns:i,rowGap:0,columnsGap:4,footer:r.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},e[t-1].hasMore&&e[t-1].list.length>0?r.createElement(o.sL,{className:"border",onClick:()=>this.loadDataByType()},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},e[t-1].list.length>0?e[t-1].list.map(((e,t)=>{const{badge:i,title:a,season_id:n,cover:l,new_ep:s,progress:c}=e;return r.createElement(p,{key:t,onClick:e=>this.handleOnClickGoToAnimePage(e,n,t),onAuxClick:e=>this.handleOnClickGoToAnimePage(e,n,t)},r.createElement("div",{className:"cover"},r.createElement(o._V,{url:s.cover||l}),i?r.createElement("span",{className:"badge"},i):null),r.createElement("div",{className:"info"},r.createElement("p",{className:"title"},a),s?r.createElement("p",{className:["progress",s.is_new>0?"unwatch":""].filter(Boolean).join(" ")},s.index_show):null,c?r.createElement("p",{className:"progress"},c.index_show):null))})):r.createElement("div",{style:{padding:"0 8px"}},"\u6ca1\u6709\u8ba2\u9605\u4fe1\u606f")))}}const m=(0,a.y)(d)},4934:(e,t,i)=>{i.d(t,{w:()=>l});var o=i(6540),r=i(5999);const a=r.Ay.div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,n=r.Ay.h4`
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
`;class l extends o.Component{constructor(e){super(e)}static defaultProps={columns:1,rowGap:2,columnsGap:2};render(){const{children:e,title:t,columns:i,rowGap:r,columnsGap:l,footer:s,sectionRef:c,...p}=this.props;return o.createElement(a,{className:"section",rowGap:r,columnsGap:l,ref:c,...p},t?o.createElement(n,{className:"section-title"},t):null,o.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${i}, 1fr)`,gridColumnEnd:`span ${i}`}},e),s)}}}}]);