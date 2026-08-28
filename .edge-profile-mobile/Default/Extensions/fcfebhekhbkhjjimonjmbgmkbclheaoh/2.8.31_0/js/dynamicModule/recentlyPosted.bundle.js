"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[277],{1737:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var s=i(1653),n=i(6540),r=i(3205),o=i(5999),a=i(9751);const c=o.Ay.div.attrs({className:"popup-main-recently-posted"})`
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
`;class l extends n.Component{constructor(e){super(e),this.state={hasMore:!1,cards:[],offsetDynamicId:0,specialAttentionList:[]},this.listRef=n.createRef(),this.bottomObserverRef=n.createRef()}static contextType=a.T;currentDidList=new Set;componentDidMount(){chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"clearNewList"}),chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionList"},(e=>{this.setState({specialAttentionList:e},(()=>{this.getDynamic(0).then((()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver(((e,t)=>{this.state.hasMore?e.length&&e[0].intersectionRatio&&this.getDynamic(this.state.offsetDynamicId):t.disconnect()}),{root:this.listRef.current}),this.observer.observe(this.bottomObserverRef.current))}))}))}))}shouldComponentUpdate(e,t,i){return 0!==this.state.cards.length&&this.state.cards.length===t.cards.length}componentWillUnmount(){this.observer&&this.observer.disconnect()}handleOnClickVideoCover=(e,t,i)=>{e.persist(),chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:i}),this.context.createTab(e,"https://www.bilibili.com/video/"+t)};handleOnClickUserName=(e,t)=>{e.persist(),e.stopPropagation(),chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:"upper_name"}),this.context.createTab(e,`https://space.bilibili.com/${t}`)};getDynamic=e=>new Promise((t=>{chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getDynamic",offsetDynamicId:e},(e=>{if(e){const{cards:i,specialAttentionList:s}=this.state,{hasMore:n,offsetDynamicId:r}=e;e.cards=e.cards.filter((e=>{if(!this.currentDidList.has(e.desc.dynamic_id_str))return this.currentDidList.add(e.desc.dynamic_id_str),!0})),i.push(...e.cards),this.setState({hasMore:n,cards:i,offsetDynamicId:r},(()=>{t()}))}else t()}))}));handleOnClickSpecialAttentionBtn=(e,t)=>{e.stopPropagation();const{specialAttentionList:i,cards:s}=this.state;new Promise(((e,s)=>{i.includes(t)?(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:"specialAttention_remove"}),chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:t},(n=>{if(n){const n=i.indexOf(t);n>=0?(i.splice(n,1),e(i)):s()}else s()}))):(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:"specialAttention_add"}),chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:t},(n=>{n?(i.push(t),e(i)):s()})))})).then((e=>{let t=s.map((t=>(t.isSpecialAttention=e.includes(t.desc.uid),t)));this.setState({specialAttentionList:e,cards:t})}))};render(){const{cards:e,hasMore:t}=this.state,{columns:i,videoCardType:r}=this.context,o="new"===r?s.q1.new:s.q1.old;return n.createElement(c,{ref:this.listRef},n.createElement("div",{className:"list",style:{gridTemplateColumns:`repeat(${i}, 1fr)`}},e.length>0?e.map(((e,t)=>{const{desc:i,card:s}=e;return n.createElement(o,{key:i.dynamic_id_str,isSpecialAttention:e.isSpecialAttention,...s,owner:{name:i.user_profile.info.uname,mid:i.uid,face:i.user_profile.info.face},onClickUserName:e=>this.handleOnClickUserName(e,i.uid),onClickCover:e=>this.handleOnClickVideoCover(e,i.bvid,t),onClickFollowBtn:e=>this.handleOnClickSpecialAttentionBtn(e,i.uid)})})):null),n.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},t?n.createElement(s.sL,{className:"border",onClick:()=>this.getDynamic(this.state.offsetDynamicId)},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null))}}const d=(0,r.y)(l)}}]);