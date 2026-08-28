"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[118],{2270:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var o=i(1653),n=i(6540),s=i(3205),r=i(5999),a=i(3432),c=i(6354),l=i(3989),d=i(9751),p=i(4934);i(4053);const m=r.Ay.div.attrs({className:"popup-main-recommend"})`
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
`;class u extends n.Component{constructor(e){super(e),this.state={videoList:[],specialAttentionList:[],loading:!1,keys:{accessKey:"",apiKey:""}},this.listRef=n.createRef(),this.bottomObserverRef=n.createRef()}static contextType=d.T;currentCidList=new Set;async componentDidMount(){const e=await(0,a.NT)("accessKeyForGetRecommendVideo");this.setState({keys:e||{accessKey:"",apiKey:""}}),chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionList"},(e=>{this.setState({specialAttentionList:e},(()=>{this.getVideoList().then((()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver(((e,t)=>{!this.state.loading&&e.length&&e[0].intersectionRatio&&this.getVideoList()}),{root:this.listRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))}))}))}))}componentWillUnmount(){this.observer&&this.observer.disconnect()}handleOnClickVideoCover=(e,t,i)=>{e.stopPropagation(),e.preventDefault(),e.persist(),chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_recommed",action:"click_video",label:i}),this.context.createTab(e,"https://www.bilibili.com/video/av"+t)};getVideoList=()=>new Promise((e=>{this.state.loading?e(!1):this.setState({loading:!0});const{accessKey:t,apiKey:i}=this.state.keys,o=Math.floor(Date.now()/1e3).toString()+"0"+Math.floor(10*Math.random()).toString();chrome.runtime.sendMessage({target:"requestController",event:"create",url:`https://app.bilibili.com/x/v2/feed/index?appkey=${i}&access_key=${t}&build=1&mobi_app=android&idx=${o}`,options:{contentType:"json"}},(({data:t})=>{if(setTimeout((()=>{this.state.loading&&this.setState({loading:!1})}),1e3),t&&t?.data?.items&&t.data.items.length>0){const{videoList:i,specialAttentionList:o}=this.state,n=t.data.items.map((e=>{const{args:t,player_args:i}=e;if(!i)return!1;const{aid:n,cid:s,duration:r}=i,{up_id:a,rname:d,up_name:p}=t;return!this.currentCidList.has(s)&&(this.currentCidList.add(s),{isSpecialAttention:o.includes(a),videoInfo:{aid:n,cid:s,bvid:(0,l.ct)(String(n)),cover:e.cover,duration:e.cover_right_text,title:e.title,publishDate:(0,c.$E)(10*e.idx),tagName:d},userInfo:{uid:a,name:p}})})).filter(Boolean);i.push(...n),this.setState({videoList:i,loading:!1},(()=>e()))}else e()}))}));handleOnClickSpecialAttentionBtn=(e,t)=>{e.stopPropagation(),e.preventDefault();const{specialAttentionList:i,videoList:o}=this.state;new Promise(((e,o)=>{i.includes(t)?(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_recommend",action:"click_video",label:"specialAttention_remove"}),chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:t},(n=>{if(n){const n=i.indexOf(t);n>=0?(i.splice(n,1),e(i)):o()}else o()}))):(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_recommend",action:"click_video",label:"specialAttention_add"}),chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:t},(n=>{n?(i.push(t),e(i)):o()})))})).then((e=>{let t=o.map((t=>(t.isSpecialAttention=e.includes(t.userInfo.uid),t)));this.setState({specialAttentionList:e,videoList:t})})).catch((e=>{}))};render(){const{videoList:e}=this.state,{columns:t,videoCardType:i}=this.context,s=o.q1[i];return n.createElement(m,{ref:this.listRef},n.createElement(p.w,{columns:t,rowGap:6,columnsGap:6,footer:n.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},n.createElement(o.sL,{className:"border",onClick:()=>this.getVideoList()},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"))},e.map(((e,t)=>n.createElement(s,{key:e.videoInfo.cid,isSpecialAttention:e.isSpecialAttention,videoInfo:e.videoInfo,userInfo:e.userInfo,onClickCover:i=>this.handleOnClickVideoCover(i,e.videoInfo.aid,t),onClickFollowBtn:t=>this.handleOnClickSpecialAttentionBtn(t,e.userInfo.uid),showTag:this.context.showTag})))))}}const g=(0,s.y)(u)},4934:(e,t,i)=>{i.d(t,{w:()=>a});var o=i(6540),n=i(5999);const s=n.Ay.div`
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
`;class a extends o.Component{constructor(e){super(e)}static defaultProps={columns:1,rowGap:2,columnsGap:2};render(){const{children:e,title:t,columns:i,rowGap:n,columnsGap:a,footer:c,sectionRef:l,...d}=this.props;return o.createElement(s,{className:"section",rowGap:n,columnsGap:a,ref:l,...d},t?o.createElement(r,{className:"section-title"},t):null,o.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${i}, 1fr)`,gridColumnEnd:`span ${i}`}},e),c)}}}}]);