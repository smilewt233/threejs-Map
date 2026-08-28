"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[966],{1772:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var r=o(1653),n=o(6540),i=o(3205),s=o(5999),a=o(4934),c=o(9751);const l=s.Ay.div.attrs({className:"popup-main-live"})`
	.topic {
		margin: 0 -10px 6px;
		padding: 4px 0 4px 10px;
		font-size: 12px;
		color: #3b3b3b;
		position: sticky;
		top: -10px;
		z-index: 2;
		background-color: #f4f4f4;
	}
	
	.list {
		position: relative;
		display: grid;
		//grid-template-columns: repeat(auto-fill, 196px);
		//grid-template-rows: repeat(auto-fill, 135px);
		grid-column-gap: 12px;
		grid-row-gap: 8px;
		margin-bottom: 30px;
		padding-bottom: 12px;
		
		.LazyLoad {
			min-height: 121px;
		}
	}
	
	.bottom-observer {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin: 20px auto;
		height: 42px;
		text-align: center;
		color: #171717;
		user-select: none;
		//grid-column-end: span 2;
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
		.topic {
			color: #999;
			background-color: #1f1f1f;
		}
		
		.bottom-observer {
			.button {
				border-color: var(--google-grey-700);
				color: var(--bilibili-gray);
			}
		}
	}
`;class p extends n.Component{constructor(e){super(e),this.state={rooms:[],roomIdList:new Set,count:0,pn:1,ps:10,hasMore:!0,incognitoOn:!1},this.listRef=n.createRef(),this.bottomObserverRef=n.createRef()}static contextType=c.T;componentDidMount(){chrome.runtime.sendMessage({target:"umami",event:"sendPage",pathname:"/popup/live"}),chrome.runtime.sendMessage({target:"incognito",event:"getSetting"},(e=>{e&&this.setState({incognitoOn:e.on})})),this.getFeedList(),this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver(((e,t)=>{if(this.state.hasMore){const{count:t,rooms:o,pn:r,ps:n}=this.state;e.length&&e[0].intersectionRatio&&this.getFeedList(r+1,n)}else t.disconnect()}),{root:this.listRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))}componentWillUnmount(){this.observer&&this.observer.disconnect()}getFeedList=(e=1,t=10)=>{chrome.runtime.sendMessage({target:"mainLive",event:"getLiveFeedList",pn:e,ps:t},(o=>{const{rooms:r,count:n}=o;let{rooms:i,hasMore:s,roomIdList:a}=this.state;r.forEach((e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.owner.mid)}));const c=r.filter((e=>{if(!a.has(e.shortRoomId||e.roomId))return a.add(e.shortRoomId||e.roomId),!0}));i.push(...c),i.length>=n&&(s=!1),this.setState({rooms:i,count:n,hasMore:s,pn:e,ps:t})}))};handleOnClickCover=(e,t,o,r)=>{this.context.createTab(e,o)};handleOnClickUserName=(e,t)=>{e.preventDefault(),e.stopPropagation(),this.context.createTab(e,`https://space.bilibili.com/${t}`)};render(){const{rooms:e,count:t,hasMore:o,pn:i,ps:s,incognitoOn:c}=this.state,{columns:p,bhAccount:m}=this.context;return n.createElement(l,{ref:this.listRef},n.createElement("h6",{className:"topic"},"\u6b63\u5728\u76f4\u64ad (",t,")"),n.createElement(a.w,{columns:p,rowGap:8,columnsGap:12,footer:n.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},o&&e&&e.length>=0?n.createElement(r.sL,{className:"border",onClick:()=>this.getFeedList(i+1,s)},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},e&&e.length>0?e.map(((e,t)=>n.createElement(r.x2,{key:e.shortRoomId||e.roomId,onClickUserName:t=>this.handleOnClickUserName(t,e.owner.mid),onClickCover:o=>this.handleOnClickCover(o,e.shortRoomId||e.roomId,e.link,t),showIncognitoButton:m?.isVIP&&c,...e}))):"\u6ca1\u6709\u76f4\u64ad\u4fe1\u606f"))}}const m=(0,i.y)(p)},4934:(e,t,o)=>{o.d(t,{w:()=>a});var r=o(6540),n=o(5999);const i=n.Ay.div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,s=n.Ay.h4`
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
`;class a extends r.Component{constructor(e){super(e)}static defaultProps={columns:1,rowGap:2,columnsGap:2};render(){const{children:e,title:t,columns:o,rowGap:n,columnsGap:a,footer:c,sectionRef:l,...p}=this.props;return r.createElement(i,{className:"section",rowGap:n,columnsGap:a,ref:l,...p},t?r.createElement(s,{className:"section-title"},t):null,r.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${o}, 1fr)`,gridColumnEnd:`span ${o}`}},e),c)}}}}]);