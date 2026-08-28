"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[880],{1656:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var r=o(1653),i=o(6540),n=o(3205),s=o(5999),a=o(4934),c=o(9751);const l=s.Ay.div.attrs({className:"popup-main-recently-posted"})`
  .section {
    .section-content {
      padding-bottom: 40px;
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
`,p=s.Ay.div`
  cursor: pointer;
  perspective: 1000px;
  transition: transform ease .3s;
  transform: perspective(100px) translateZ(0px);

  :hover {
    transform: perspective(100px) translateZ(5px);

    .cover-image {
      box-shadow: 0 3px 10px rgb(0 0 0 / 60%);
      filter: brightness(1);
    }
  }

  .cover {
    position: relative;
    display: block;

    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 38px;
      width: 100%;
      //border-radius: 0 0 2px 2px;
      //background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
      z-index: 1;
      pointer-events: none;
    }
  }

  .cover-image {
    box-shadow: 0 0 3px rgb(0 0 0 / 10%);
    transition: box-shadow .3s, filter .3s;

    img {
      display: block;
    }
  }

  @media (prefers-color-scheme: dark) {
    .cover-image {
      filter: brightness(0.8);
    }
  }
`;class d extends i.Component{constructor(e){super(e),this.state={list:[],pn:1,ps:9,hasMore:!0},this.listRef=i.createRef(),this.bottomObserverRef=i.createRef()}static contextType=c.T;componentDidMount(){chrome.runtime.sendMessage({target:"umami",event:"sendPage",pathname:"/popup/manga"}),this.getList().then((()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver(((e,t)=>{const{pn:o,hasMore:r}=this.state;r?e.length&&e[0].intersectionRatio&&this.getList(o):t.disconnect()}),{root:this.listRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))}))}componentWillUnmount(){this.observer&&this.observer.disconnect()}getList=(e=1)=>{const{ps:t,list:o}=this.state;return new Promise(((r,i)=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://manga.bilibili.com/twirp/bookshelf.v1.Bookshelf/ListFavorite?device=pc&platform=web",options:{method:"POST",body:JSON.stringify({page_num:e,page_size:t,order:1,wait_free:0}),headers:{"content-type":"application/json;charset=UTF-8","bilibili-helper-header-action-set-origin":"https://www.bilibili.com"},contentType:"json"}},(({data:n})=>{n&&n.data?(o.push(...n.data),this.setState({pn:e+1,list:o,hasMore:n.data.length===t}),r()):i()}))}))};handleOnClickCover=(e,t)=>{chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_manga",action:"click_video"}),this.context.createTab(e,`https://manga.bilibili.com/detail/mc${t}`)};render(){const{hasMore:e,list:t,pn:o}=this.state,{columns:n,videoCardType:s}=this.context;return i.createElement(l,{ref:this.listRef},i.createElement(a.w,{columns:3,style:{gridColumnEnd:"span 3"},columnsGap:16,rowGap:16,footer:i.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},e?i.createElement(r.sL,{className:"border",onClick:()=>this.getList(o)},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},t.length>0?t.map((e=>i.createElement(p,{key:e.id},i.createElement("div",{className:"cover",onClick:t=>this.handleOnClickCover(t,e.comic_id),onAuxClick:t=>this.handleOnClickCover(t,e.comic_id)},i.createElement("div",{className:"cover-image"},i.createElement(r._V,{url:e.vcover+"@242w_252h.webp"})))))):"\u6ca1\u6709\u6570\u636e"))}}const m=(0,n.y)(d)},4934:(e,t,o)=>{o.d(t,{w:()=>a});var r=o(6540),i=o(5999);const n=i.Ay.div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,s=i.Ay.h4`
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
`;class a extends r.Component{constructor(e){super(e)}static defaultProps={columns:1,rowGap:2,columnsGap:2};render(){const{children:e,title:t,columns:o,rowGap:i,columnsGap:a,footer:c,sectionRef:l,...p}=this.props;return r.createElement(n,{className:"section",rowGap:i,columnsGap:a,ref:l,...p},t?r.createElement(s,{className:"section-title"},t):null,r.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${o}, 1fr)`,gridColumnEnd:`span ${o}`}},e),c)}}}}]);