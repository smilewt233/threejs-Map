"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[356],{3756:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x});var o=i(6540),n=i(1653),s=i(5999),r=i(3205),a=i(3432),l=i(4934),c=i(9751);const d=s.Ay.div`
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
		color: #3b3b3b;
		
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
			color: #999;
			background-color: #1f1f1f;
		}
	}
`,p=s.Ay.div.attrs({className:"popup-main-home"})`
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
	
	.section-content {
		//padding-top: 6px;
		
		.recent-read-position {
			text-align: center;
			padding: 16px 0;
			pointer-events: none;
		}
	}
	
	.data-loading {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 200px;
		font-size: 12px;
	}
	
	.bottom-observer {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin: -280px auto 20px;
		padding-top: 300px;
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
`,h=s.Ay.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -100;
`,m=s.Ay.div`
	position: sticky;
	bottom: 40px;
	right: 0px;
	height: auto;
	display: flex;
	flex-direction: column;
	float: right;
	text-align: center;
	z-index: 1;
	opacity: 0;
	transition: opacity .3s, visibility .3s;
	visibility: hidden;
	
	&.show {
		opacity: 0.4;
		visibility: visible;
		
		:hover {
			opacity: 1;
			visibility: visible;
		}
	}
`,u=(0,s.Ay)(n.sL)`
	padding: 4px;
	width: 32px;
	border-radius: 4px;
	background-color: #fff;
	cursor: pointer;
	
	& + & {
		margin-top: 8px;
	}
	
	button {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0;
		min-width: 30px;
		font-size: 12px;
	}
	
	@media (prefers-color-scheme: dark) {
		background-color: rgb(20 20 20);
		border-color: var(--google-grey-700);
		color: var(--bilibili-gray);
	}
`,g=s.Ay.div`
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
`,v=s.Ay.a`
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	align-items: center;
	margin: 0 2.5px;
	padding: 4px 1px;
	width: 50px;
	border: 1px solid transparent;
	border-radius: 6px;
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
`,b=(s.Ay.div`
	display: flex;
	align-items: center;
	
	.button {
		height: 22px;
	}
`,s.Ay.div`
	display: flex;
`),f=s.Ay.section`
	margin-left: 8px;
	cursor: pointer;
	font-weight: normal;
	opacity: .8;
	
	:first-child {
		margin-left: 0;
	}
	
	&.active {
		font-weight: bold;
		opacity: 1;
	}
`;class y extends o.Component{constructor(e){super(e)}static contextType=c.T;initedScrollPosition=!1;state={liveList:[],livingCount:0,carousel:[],videoType:"recentVideo",rememberRecentReadPosition:!0,offsetDynamicId:0,videoList:[],recentVideoList:[],hotVideoList:[],hotVideoListPageNumber:1,hasMoreVideos:!0,adMap:[],loading:!1,showGoTopButton:!1,newListLength:0};hotVideoIdMap=[];contentType="recentVideo";videoListRef=o.createRef();firstPageRefRef=o.createRef();bottomObserverRef=o.createRef();dynamicInitLoaded=!1;hotInitLoaded=!1;async componentDidMount(){const e=await(0,a.NT)("mainHome-config")||{};let t=await(0,a.NT)("popupScrollPosition")||{};const i=!!t.type,o=await(0,a.NT)("mainHome-config")||{};if(this.setState({videoType:t?.type||(e?e.videoType:"recentVideo"),rememberRecentReadPosition:!e||e.rememberRecentReadPosition}),this.videoListRef.current){const e=this.videoListRef.current;let t=0,i=!1;e.addEventListener("wheel",(o=>{clearTimeout(t),t=setTimeout((()=>{let t=Number(e.scrollTop);t<=150&&!i&&(chrome.runtime.sendMessage({target:"mainHome",event:"clearPopupScrollPosition"}),i=!0,this.clearCache()),t>76&&(t-=76,i=!1,(0,a.Xy)("popupScrollPosition",{type:this.state.videoType,scrollPosition:t,t:Date.now()}))}),50)}))}chrome.runtime.sendMessage({target:"umami",event:"sendPage",pathname:"/popup/home"}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getNewList"},(e=>{e&&e.length&&this.setState({newListLength:e.length}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"clearNewList"})}));const n=o,s=!n||!!n.showLiveBar;this.setState({showLiveBar:s}),s&&this.getLiveList(),this.videoListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver(((e,t)=>{const{loading:o}=this.state,n=setTimeout((()=>{this.setState({loading:!1})}),1e4);e.length&&e[0].intersectionRatio>0&&!o?(this.setState({loading:!0}),this.state.hasMoreVideos&&"recentVideo"===this.state.videoType?this.getDynamic(this.state.offsetDynamicId,!this.dynamicInitLoaded&&!i,this.dynamicInitLoaded).then((()=>{this.dynamicInitLoaded=!0,clearTimeout(n)})):"home"===this.state.videoType&&this.getNewHotVideos(!this.hotInitLoaded&&!i,this.hotInitLoaded).then((()=>{this.hotInitLoaded=!0,clearTimeout(n)}))):this.state.hasMoreVideos}),{root:this.videoListRef.current,threshold:[0,.2,.5,.8,1]}),this.observer.observe(this.bottomObserverRef.current),this.firstPageRefRef.current&&new IntersectionObserver((e=>{const t=e[0],{hotVideoList:i,recentVideoList:o,videoType:n}=this.state;if(t.intersectionRatio<.3)this.setState({showGoTopButton:!0});else{const e="home"===n?i:o;e.length>0&&chrome.runtime.sendMessage({target:"mainHome",event:"clearPopupScrollPosition"}),this.setState({showGoTopButton:!1})}}),{root:this.videoListRef.current,threshold:[.3]}).observe(this.firstPageRefRef.current))}componentDidUpdate(e,t,i){return t.adMap.length!==this.state.adMap.length||t.liveList.length!==this.state.liveList.length||t.recentVideoList.length!==this.state.recentVideoList.length}handleOnToggleVideoType=e=>{this.setState({videoType:e},(()=>{this.handleOnClickGoTopButton()}))};handleOnClickGetRefreshDynamicList=()=>{this.setState({newListLength:0,recentVideoList:[]},(()=>{this.getDynamic(0,!0,!1),this.dynamicInitLoaded=!0}))};getNewHotVideos=(e=!1,t=!1)=>{const{hotVideoList:i}=this.state;return new Promise((o=>{chrome.runtime.sendMessage({target:"mainHome",event:"getNewHotVideos",clearCache:e,continuous:t},(e=>{if(e){const t=e.map((e=>{if(!this.hotVideoIdMap.includes(e.aid))return e})).filter(Boolean);i.push(...t),this.setState({hotVideoList:i,loading:!1},(()=>{o()}))}else o()}))})).then((async()=>{let{scrollPosition:e=0}=await(0,a.NT)("popupScrollPosition")||{};e&&!this.initedScrollPosition&&(this.initedScrollPosition=!0,this.setState({videoType:"home"},(()=>{this.hotInitLoaded||this.videoListRef.current.scrollTo(0,+e)})))}))};getDynamic=(e=this.state.offsetDynamicId,t=!1,i=!0)=>{const{recentVideoList:o,adMap:s}=this.state;return new Promise((s=>{chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getDynamic",offsetDynamicId:e,type:"video",clearCache:t,continuous:i},(e=>{if(e){const{hasMore:t,offsetDynamicId:i}=e;0===e.items?.length&&n.QB.error("\u7f51\u7edc\u9519\u8bef\u6216\u8bf7\u6c42\u9891\u7387\u8fc7\u9ad8, \u8bf7\u7a0d\u540e\u518d\u8bd5"),o.push(...e.items),this.setState({hasMoreVideos:t,recentVideoList:o,offsetDynamicId:i,loading:!1},(()=>{s()}))}else this.setState({hasMoreVideos:!1,recentVideoList:[],offsetDynamicId:0,loading:!1},(()=>{s()}))}))})).then((async()=>{const{scrollPosition:e=0}=await(0,a.NT)("popupScrollPosition")||{};e&&!this.initedScrollPosition&&(this.initedScrollPosition=!0,this.setState({videoType:"recentVideo"},(()=>{this.dynamicInitLoaded||this.videoListRef.current.scrollTo(0,+e)})))}))};getLiveList=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/polymer/web-dynamic/v1/portal",options:{contentType:"json"}},(({data:e})=>{e&&e.data&&e.data.live_users&&e.data.live_users.items.length>0&&this.setState({liveList:e.data.live_users.items,livingCount:e.data.live_users.count})}))};handleOnClickVideoCover=(e,t,i)=>{e.preventDefault(),e.stopPropagation(),this.context.createTab(e,"https://www.bilibili.com/video/"+t)};handleOnClickListenVideoButton=(e,t)=>{e.preventDefault(),e.stopPropagation(),chrome.runtime.sendMessage({target:"listenVideo",event:"play",url:"https://www.bilibili.com/video/"+t})};handleOnClickMoreLiving=()=>{this.props.history.push("/live")};handleOnClickOpenLive=(e,t,i)=>{e.stopPropagation(),e.preventDefault(),chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_home",action:"click_living_list",label:i}),this.context.createTab(e,t)};handleOnClickGoTopButton=()=>{this.videoListRef.current&&(this.videoListRef.current.scrollTo(0,0),this.setState({showGoTopButton:!1})),chrome.runtime.sendMessage({target:"mainHome",event:"clearPopupScrollPosition"}),this.clearCache()};clearCache=()=>{"recentVideo"===this.state.videoType?chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"clearCache"}):"home"===this.state.videoType&&chrome.runtime.sendMessage({target:"mainHome",event:"clearCache"})};renderLiveList(){const{liveList:e,livingCount:t,showLiveBar:i}=this.state,{columns:s}=this.context;return i&&t>0?o.createElement(g,{style:{gridColumnEnd:`span ${s}`}},o.createElement("h4",{className:"topic"},"\u6b63\u5728\u76f4\u64ad",o.createElement("b",null,t),"\u4eba",o.createElement("span",{className:"more-btn",onClick:this.handleOnClickMoreLiving},"\u67e5\u770b\u5168\u90e8")),o.createElement("div",{className:"list"},e.map(((e,t)=>o.createElement(v,{key:e.uid,onClick:i=>this.handleOnClickOpenLive(i,e.jump_url,t),onAuxClick:i=>this.handleOnClickOpenLive(i,e.jump_url,t)},o.createElement(n._V,{className:"user-avatar",url:e.face}),o.createElement("span",{className:"user-name"},e.uname)))))):null}renderVideoListTitle(){const{videoType:e}=this.state;return o.createElement(b,null,o.createElement(f,{className:"recentVideo"===e?"active":null,onClick:()=>this.handleOnToggleVideoType("recentVideo")},"\u6700\u8fd1\u6295\u7a3f"),o.createElement(f,{className:"home"===e?"active":null,onClick:()=>this.handleOnToggleVideoType("home")},"\u9996\u9875\u63a8\u8350"))}renderVideoCard(e,t){const{videoCardType:i,columns:s}=this.context,{videoType:r}=this.state,{idStr:a,videoInfo:l,userInfo:c}=t,d=n.q1[i];if(t.isAD)return null;switch("home"===r&&(t.type=8),t.type){case"recentReadPosition":return o.createElement("div",{className:"recent-read-position",style:{gridColumnEnd:`span ${s}`}},"\u4ee5\u4e0b\u662f\u66f4\u65e9\u524d\u7684\u5185\u5bb9");default:return l.aid?o.createElement(d,{key:a||l.aid,isSpecialAttention:t.isSpecialAttention,userInfo:c,videoInfo:l,onClickCover:t=>this.handleOnClickVideoCover(t,l.bvid,e),onClickMusic:e=>this.handleOnClickListenVideoButton(e,l.bvid),showTag:this.context.showTag}):o.createElement("section",{key:a},"\u672a\u517c\u5bb9\u7c7b\u578b:"+t.type)}}renderVideoList(){const{columns:e,bilibiliAccount:t,createTab:i}=this.context,{videoType:s,recentVideoList:r,hotVideoList:a,loading:l}=this.state,c="home"===s?a:r;return c?c.length>0?c.map(((e,t)=>this.renderVideoCard(t,e))):t&&!t.hasLogin?o.createElement("div",{style:{gridColumnEnd:`span ${e}`}},o.createElement(n.sL,{onClick:e=>i(e,"https://passport.bilibili.com/login?from=bilibili-helper",{active:!0})},"\u672a\u53d1\u73b0\u5df2\u767b\u5f55\u7684B\u7ad9\u8d26\u53f7\uff0c\u70b9\u51fb\u767b\u5f55")):l?o.createElement("div",{className:"data-loading"},"\u6570\u636e\u83b7\u53d6\u4e2d\uff0c\u8bf7\u7a0d\u7b49..."):void 0:"\u6ca1\u6709\u89c6\u9891\u6570\u636e"}getContinuousHotVideos=()=>this.getNewHotVideos(!1,!0);getContinuousDynamicVideos=()=>this.getDynamic(this.state.offsetDynamicId,!1,!0);renderVideoSection(){const{columns:e}=this.context,{hasMoreVideos:t,recentVideoList:i,hotVideoList:s,videoType:r}=this.state;let a;return a="home"===r?this.getContinuousHotVideos:this.getContinuousDynamicVideos,o.createElement(l.w,{title:this.renderVideoListTitle(),columns:e,rowGap:6,columnsGap:6,footer:o.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},t?o.createElement(n.sL,{className:"border",onClick:a},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},this.renderVideoList())}render(){const{showGoTopButton:e,newListLength:t,videoType:i}=this.state;return o.createElement(d,{id:"homePage",ref:this.videoListRef},o.createElement(p,null,this.renderLiveList(),this.renderVideoSection()),o.createElement(h,{ref:this.firstPageRefRef}),o.createElement(m,{className:e?"show":""},o.createElement(u,{onClick:this.handleOnClickGoTopButton},o.createElement(n.In,{icon:"top-arrow",size:12}))))}}const x=(0,r.y)(y)},4934:(e,t,i)=>{i.d(t,{w:()=>a});var o=i(6540),n=i(5999);const s=n.Ay.div`
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
`;class a extends o.Component{constructor(e){super(e)}static defaultProps={columns:1,rowGap:2,columnsGap:2};render(){const{children:e,title:t,columns:i,rowGap:n,columnsGap:a,footer:l,sectionRef:c,...d}=this.props;return o.createElement(s,{className:"section",rowGap:n,columnsGap:a,ref:c,...d},t?o.createElement(r,{className:"section-title"},t):null,o.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${i}, 1fr)`,gridColumnEnd:`span ${i}`}},e),l)}}}}]);