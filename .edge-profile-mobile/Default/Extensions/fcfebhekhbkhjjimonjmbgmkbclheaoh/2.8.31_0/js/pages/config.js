(()=>{var e={74:(e,t,n)=>{"use strict";n.d(t,{W:()=>i});var a=n(5999);const i=a.AH`
  @keyframes blink {
    0%, to {
      color: transparent;
    }

    50% {
      color: var(--google-red-500);
    }
  }
`},141:(e,t,n)=>{"use strict";n.d(t,{E:()=>a,i:()=>i});const a=()=>e=>!isNaN(e),i=(e=1,t)=>n=>{let a=!0;return!isNaN(e)&&String(n).length<e&&(a=!1),!isNaN(t)&&String(n).length>t&&(a=!1),a}},153:(e,t,n)=>{"use strict";n.d(t,{A:()=>S});var a=n(1653),i=n(471),r=n(141),o=n(3376),s=n(196),l=n(6540),c=n(2074),d=n(3205),u=n(5999),p=n(3240),h=n(8285),g=n(9983);const m=(0,c.o)(),f=u.Ay.div`
	.toggle-off {
		position: relative;
		filter: grayscale(1);
		
		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: #fff;
			opacity: 0.5;
			cursor: not-allowed;
		}
	}
	
	section {
		.radio-button-wrapper {
			margin-bottom: 8px;
			width: fit-content;
		}
		
		.link {
			margin: 0 2px;
			padding: 0 2px;
			color: var(--bilibili-blue);
		}
	}
`,b=u.Ay.div`
	.check-box-button {
		display: inline-block;
		margin-left: 16px;
	}
`,v=(0,u.Ay)(i.A)`
	width: calc(100% - 18px);
	min-height: 50px;
	padding: 8px;
`;class y extends l.Component{constructor(e){super(e)}static contextType=g.T;state={globalNotificationState:!1,notificationJumpType:"button",notificationAutoClose:!1,notificationAPIType:"native",announcementNotification:!1,bilibiliMessageOn:!1,bilibiliMessageRangeType:{at:!0,like:!0,reply:!0,sys_msg:!0,unread:!0},bilibiliMessageDuration:5,bilibiliMessageSpeech:!1,bilibiliMessageDnDRange:{start:0,stop:0},videoOn:!1,videoRangeType:"all",videoNumberType:"theLatestThree",videoUseWhiteList:!1,videoUseBlackList:!1,videoDuration:10,videoShowCover:!1,videoNotPushNotification:!1,videoOnlyShowBadge:!1,videoNotifyType:"all",liveOn:!1,liveRangeType:"all",liveUseWhiteList:!1,liveUseBlackList:!1,liveDuration:3,liveShowCover:!1,dynamicWhiteList:[],dynamicBlackList:[],dynamicTextBlackList:[],liveWhiteList:[],liveBlackList:[],modalType:"dynamic",useBackground:!1};componentDidMount(){chrome.runtime.sendMessage({target:"notificationController",event:"getSetting"},(e=>{this.setState({globalNotificationState:e.on,notificationJumpType:e.useActions?"button":"card",notificationAutoClose:e.autoClose,notificationAPIType:e.apiType})})),chrome.runtime.sendMessage({target:"message",event:"getSetting"},(e=>{const{announcementNotification:t}=e;this.setState({announcementNotification:t})})),chrome.runtime.sendMessage({target:"bilibiliMessage",event:"getSetting"},(e=>{const{on:t,rangeType:n,duration:a,speech:i,start:r,stop:o}=e;this.setState({bilibiliMessageOn:t,bilibiliMessageRangeType:n,bilibiliMessageDuration:a,bilibiliMessageSpeech:i,bilibiliMessageDnDRange:{start:r||0,end:o||0}})})),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getSetting"},(e=>{const{on:t,rangeType:n,numberType:a,useWhiteList:i,useBlackList:r,useTextBlackList:o,duration:s,showCover:l,showBadge:c,noNotification:d,notifyType:u}=e;this.setState({videoOn:t,videoRangeType:n,videoNumberType:a,videoUseWhiteList:i,videoUseBlackList:r,videoUseTextBlackList:o,videoDuration:s,videoShowCover:l,videoShowBadge:c,videoNoNotification:d,videoNotifyType:u})})),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getBlackList"},((e=[])=>{this.setState({dynamicBlackList:e})})),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getTextBlackList"},((e=[])=>{this.setState({dynamicTextBlackList:e})})),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getWhiteList"},((e=[])=>{this.setState({dynamicWhiteList:e})})),chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getSetting"},(e=>{const{on:t,rangeType:n,useWhiteList:a,useBlackList:i,duration:r,showCover:o,speech:s}=e;this.setState({liveOn:t,liveRangeType:n,liveUseWhiteList:a,liveUseBlackList:i,liveMessageSpeech:s,liveDuration:r,liveShowCover:o})})),chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getBlackList"},((e=[])=>{this.setState({liveBlackList:e})})),chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getWhiteList"},((e=[])=>{this.setState({liveWhiteList:e})})),(0,c.o)()||chrome.permissions.contains({permissions:["background"]},(e=>{this.setState({useBackground:!!e})}))}handleOnClickGlobalToggleBtn=()=>{const{globalNotificationState:e}=this.state;chrome.runtime.sendMessage({target:"notificationController",event:"setSetting",on:!e},(()=>{this.setState({globalNotificationState:!e})}))};handleOnRequestBackground=()=>{const e=this.state.useBackground?"remove":"request";chrome.runtime.sendMessage({target:"permissionController",event:e,permissions:["background"]},(e=>{e&&this.setState({useBackground:!this.state.useBackground})}))};handleOnClickJumpType=e=>{chrome.runtime.sendMessage({target:"notificationController",event:"setSetting",useActions:"button"===e},(()=>{this.context.uploadSettings("notificationController"),this.setState({notificationJumpType:e})}))};handleOnClickAutoClose=()=>{const{notificationAutoClose:e}=this.state;chrome.runtime.sendMessage({target:"notificationController",event:"setSetting",autoClose:!e},(()=>{this.context.uploadSettings("notificationController"),this.setState({notificationAutoClose:!e})}))};handleOnToggleNotificationAPIType=e=>{chrome.runtime.sendMessage({target:"notificationController",event:"setSetting",apiType:e},(()=>{this.context.uploadSettings("notificationController"),this.setState({notificationAPIType:e})}))};handleOnSetVideoDuration=e=>{const t=+e.target.value;if(this.state.videoDuration!==t){const{bhAccount:e}=this.context;if(5===t&&(!e||!e.isVIP))return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",duration:t},(()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoDuration:t})}))}};handleOnSetVideoShowCover=()=>{const{videoShowCover:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",showCover:!e},(()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoShowCover:!e})}))};handleOnSetVideoShowBadge=()=>{const{videoShowBadge:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",showBadge:!e},(()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoShowBadge:!e})}))};handleOnSetVideoNoNotification=()=>{const{videoNoNotification:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",noNotification:!e},(()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoNoNotification:!e})}))};handleOnToggleAnnouncementMessage=()=>{const{announcementNotification:e}=this.state;chrome.runtime.sendMessage({target:"message",event:"setSetting",announcementNotification:!e},(()=>{this.context.uploadSettings("message"),this.setState({announcementNotification:!e})}))};handleOnSetBilibiliMessageOn=()=>{const{bilibiliMessageOn:e}=this.state,{bhAccount:t,hasLogin:n,handleOnClickShowLoginModal:a,sendPaymentMessage:i}=this.context;return n?e||t&&t.isVIP?void chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",on:!e},(()=>{this.context.uploadSettings("bilibiliMessage"),this.setState({bilibiliMessageOn:!e})})):i():a()};handleOnSetBilibiliMessageSpeech=()=>{const{bilibiliMessageOn:e,bilibiliMessageSpeech:t}=this.state,{bhAccount:n,hasLogin:a,handleOnClickShowLoginModal:i,sendPaymentMessage:r}=this.context;return a?e||n&&n.isVIP?void chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",speech:!t},(()=>{this.context.uploadSettings("bilibiliMessage"),this.setState({bilibiliMessageSpeech:!t})})):r():i()};handleOnSetLiveMessageSpeech=()=>{const{liveMessageSpeech:e}=this.state,{hasLogin:t,handleOnClickShowLoginModal:n}=this.context;if(!t)return n();chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",speech:!e},(()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveMessageSpeech:!e})}))};onDndTimeRangePickerChange=(e,t)=>{const n=isNaN(e)?null:e,a=isNaN(t)?null:t;chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",start:n,stop:a},(()=>{this.setState({bilibiliMessageDnDRange:{start:e||0,end:t||0}}),this.context.uploadSettings("bilibiliMessage")}))};handleOnToggleBilibiliMessageRangeType=(e,t)=>{const n=this.state.bilibiliMessageRangeType;n[e]=t,chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",rangeType:n},(()=>{this.context.uploadSettings("bilibiliMessage"),this.setState({bilibiliMessageRangeType:n})}))};handleOnToggleSubscriptionDynamicType=e=>{const t=e.target.value;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",notifyType:t},(()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoNotifyType:t})}))};handleOnToggleBilibiliMessageDuration=e=>{const t=e.target.value;chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",duration:+t},(()=>{this.context.uploadSettings("bilibiliMessage"),this.setState({bilibiliMessageDuration:+t})}))};handleOnSetVideoOn=()=>{const{videoOn:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",on:!e},(()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoOn:!e})}))};handleOnSetVideoRangeType=e=>{this.state.videoRangeType!==e&&chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",rangeType:e,useWhiteList:"whiteList"===e},(()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoRangeType:e,videoUseWhiteList:"whiteList"===e})}))};handleOnSetVideoNumberType=e=>{this.state.videoNumberType!==e&&chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",numberType:e},(()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoNumberType:e})}))};handleOnToggleUseVideoBlackList=()=>{const{videoUseBlackList:e}=this.state,{bhAccount:t={}}=this.context,n=!!t&&t["isVIP"];if(!e&&!n)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",useBlackList:!e},(()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoUseBlackList:!e})}))};handleOnToggleUseVideoTextBlackList=()=>{const{videoUseTextBlackList:e}=this.state,{bhAccount:t={}}=this.context,n=!!t&&t["isVIP"];if(!e&&!n)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",useTextBlackList:!e},(()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoUseTextBlackList:!e})}))};handleOnSetLiveOn=()=>{const{liveOn:e}=this.state;chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",on:!e},(()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveOn:!e})}))};handleOnSetLiveDuration=e=>{const t=+e.target.value;if(this.state.liveDuration!==t){const{bhAccount:e={}}=this.context,n=!!e&&e["isVIP"];if(!n)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",duration:t},(()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveDuration:t})}))}};handleOnSetLiveShowCover=()=>{const{liveShowCover:e}=this.state;chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",showCover:!e},(()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveShowCover:!e})}))};handleOnSetLiveRangeType=e=>{this.state.liveRangeType!==e&&chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",rangeType:e,useWhiteList:"whiteList"===e},(()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveRangeType:e,liveUseWhiteList:"whiteList"===e})}))};handleOnToggleUseLiveBlackList=()=>{const{liveUseBlackList:e}=this.state,{bhAccount:t={}}=this.context,n=!!t&&t["isVIP"];if(!e&&!n)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",useBlackList:!e},(()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveUseBlackList:!e})}))};handleOnOpenVideoDynamicPage=e=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://t.bilibili.com/?tab=8"})};handleOnChangeDynamicBlackListTextArea=e=>{const t=new Set(e.map((e=>e.trim())).filter(Boolean)),n=[...t];chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setBlackList",blackList:n},(()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({dynamicBlackList:n})}))};handleOnChangeDynamicTextBlackListTextArea=e=>{const t=new Set(e.map((e=>e.trim())).filter(Boolean)),n=[...t];chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setTextBlackList",textBlackList:n},(()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({dynamicTextBlackList:n})}))};handleOnChangeDynamicWhiteListTextArea=e=>{const t=new Set(e.map((e=>e.trim())).filter(Boolean)),n=[...t];chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setWhiteList",whiteList:n},(()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({dynamicWhiteList:n})}))};handleOnChangeLiveBlackListTextArea=e=>{const t=new Set(e.map((e=>e.trim())).filter(Boolean)),n=[...t];chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setBlackList",blackList:n},(()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveBlackList:n})}))};handleOnChangeLiveWhiteListTextArea=e=>{const t=new Set(e.map((e=>e.trim())).filter(Boolean)),n=[...t];chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setWhiteList",whiteList:n},(()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveWhiteList:n})}))};render(){const{globalNotificationState:e,notificationAutoClose:t,notificationAPIType:n,announcementNotification:i,bilibiliMessageOn:d,bilibiliMessageRangeType:u,bilibiliMessageDuration:g,bilibiliMessageSpeech:y,bilibiliMessageDnDRange:S,videoOn:w,videoRangeType:C,videoNumberType:E,videoUseBlackList:O,videoUseTextBlackList:x,videoDuration:k,videoShowCover:M,videoShowBadge:T,videoNoNotification:D,videoNotifyType:I,liveOn:P,liveRangeType:A,liveUseWhiteList:N,liveUseBlackList:_,liveDuration:L,liveShowCover:R,liveMessageSpeech:B,dynamicWhiteList:F,dynamicBlackList:V,dynamicTextBlackList:U,liveWhiteList:Q,liveBlackList:j,useBackground:H}=this.state,{hasLogin:W,bilibiliAccount:Y,bhAccount:z={}}=this.context,K=!!z&&z["isVIP"];return l.createElement(f,null,l.createElement(h.hE,{title:l.createElement(b,null,l.createElement("span",null,"\u6d88\u606f\u63a8\u9001\u8bbe\u7f6e")),description:"\u4e00\u79cd\u6839\u636e\u4e00\u5b9a\u9891\u7387\u8fdb\u884c\u5b9a\u671f\u68c0\u67e5\u7684\u529f\u80fd\uff0c\u5f53\u6709\u65b0\u5185\u5bb9\u65f6\u4f1a\u4ee5\u5de6\u4e0a\u89d2\u6216\u53f3\u4e0b\u89d2\u5f39\u6846\u5f62\u5f0f\u663e\u793a\u5185\u5bb9"}),l.createElement("div",{className:e?null:"toggle-off"},l.createElement(h.KK,{title:"\u4e00\u822c\u63a8\u9001\u8bbe\u7f6e"},l.createElement(h.wn,{title:"\u6536\u5230\u63a8\u9001\u4e00\u6bb5\u65f6\u95f4\u540e\u81ea\u52a8\u5173\u95ed\u6d88\u606f",description:"\u81ea\u52a8\u5173\u95ed\u7b49\u5f85\u65f6\u95f4\u5404\u529f\u80fd\u53ef\u80fd\u4e0d\u4e00\u6837",toolbar:l.createElement(o.w9,{onClick:this.handleOnClickAutoClose,on:t})}),l.createElement(h.wn,{title:"\u63a8\u9001\u6a21\u5f0f",description:"\u8be5\u8bbe\u7f6e\u5f71\u54cd\u63a8\u9001\u529f\u80fd\u5728\u663e\u793a\u5f62\u5f0f\u548c\u5185\u5bb9\u4e0a\u7684\u5dee\u522b\uff0c\u540c\u65f6\u4e5f\u4e0e\u517c\u5bb9\u6027\u6709\u5173",canCollapsed:!0},l.createElement(o.zW,{value:n,data:[{key:"native",title:"\u64cd\u4f5c\u7cfb\u7edf",description:"\u9ed8\u8ba4\u9009\u9879"},{key:"chrome",title:"\u6d4f\u89c8\u5668",description:"\u5982\u679c\u9ed8\u8ba4\u9009\u9879\u4e0b\u63a8\u9001\u6d88\u606f\u5de5\u4f5c\u5f02\u5e38\uff0c\u8bf7\u9009\u62e9\u8fd9\u4e00\u9879"}],onClick:this.handleOnToggleNotificationAPIType})),!(0,c.o)()&&l.createElement(h.wn,{title:"\u542f\u7528\u63a8\u9001\u589e\u5f3a",description:"\u89e3\u51b3\u540e\u53f0\u63a8\u9001\u5931\u8d25\u7684\u95ee\u9898\uff0c\u8bf7\u8c28\u614e\u542f\u7528\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6d4f\u89c8\u5668\u5f00\u673a\u81ea\u52a8\u542f\u52a8",toolbar:l.createElement(o.w9,{onClick:this.handleOnRequestBackground,on:H}),helperArea:l.createElement(l.Fragment,null,"\u542f\u7528\u540e",l.createElement("b",null,"\u91cd\u542f\u6269\u5c55"),"\u751f\u6548")})),l.createElement(h.KK,{title:"\u52a9\u624b\u516c\u544a\u63a8\u9001",toolbar:l.createElement(o.w9,{onClick:this.handleOnToggleAnnouncementMessage,on:i})}),l.createElement(h.KK,{title:l.createElement(l.Fragment,null,"B\u7ad9\u7ad9\u5185\u6d88\u606f\u63a8\u9001 ",l.createElement(a.Ap,null)),active:!m&&d,toolbar:l.createElement(o.w9,{disable:!Y||!W,onClick:this.handleOnSetBilibiliMessageOn,on:!!(K&&W&&Y)&&d})},l.createElement(h.wn,{title:"\u8bed\u97f3\u64ad\u62a5",description:"\u64ad\u62a5\u5185\u5bb9\u300c\u60a8\u6709\u65b0\u7684\u6d88\u606f\u300d",hasLogin:W,isVIP:K,needVIP:!0,active:!!Y&&y,toolbar:l.createElement(o.w9,{disable:!Y,onClick:this.handleOnSetBilibiliMessageSpeech,on:y})},l.createElement(o.ck,{title:"\u52ff\u6270\u65f6\u95f4\u6bb5",description:"\u53ef\u5c06\u65f6\u95f4\u8bbe\u7f6e\u6210\u4e00\u6837\u7684\u6765\u5173\u95ed\u5b9a\u65f6\u529f\u80fd",operation:l.createElement(a.$6,{onChange:this.onDndTimeRangePickerChange,defaultTime:S,minTimeFirst:!1})})),l.createElement(h.wn,{title:"\u63a8\u9001\u95f4\u9694",description:"\u4e24\u6b21\u63a8\u9001\u4e4b\u95f4\u81f3\u5c11\u4f1a\u95f4\u9694\u8fd9\u4e9b\u65f6\u95f4",hasLogin:W,isVIP:K,needVIP:!0,toolbar:l.createElement(a.MD,{value:g,data:[{value:1,title:"1\u5206\u949f"},{value:3,title:"3\u5206\u949f"},{value:5,title:"5\u5206\u949f"},{value:10,title:"10\u5206\u949f"}],onChange:this.handleOnToggleBilibiliMessageDuration})}),l.createElement(h.wn,{title:"\u9700\u8981\u63a8\u9001\u7684\u6d88\u606f\u7c7b\u522b",hasLogin:W,isVIP:K,needVIP:!0,canCollapsed:!0},l.createElement(o.x3,{data:Object.keys(u).map((e=>({key:e,title:(0,p.__)("bilibiliMessage_"+e),on:u[e]}))),onClick:this.handleOnToggleBilibiliMessageRangeType}))),l.createElement(h.KK,{title:"B\u7ad9\u52a8\u6001\u66f4\u65b0\u68c0\u6d4b",active:w,toolbar:l.createElement(o.w9,{disable:!Y,onClick:this.handleOnSetVideoOn,on:!!Y&&w})},l.createElement(h.wn,{title:"\u663e\u793a\u5c01\u9762",active:!!Y,toolbar:l.createElement(o.w9,{disable:!Y,onClick:this.handleOnSetVideoShowCover,on:M})}),l.createElement(h.wn,{title:"\u5728\u6269\u5c55\u56fe\u6807\u4e0a\u663e\u793a\u65b0\u6295\u7a3f\u89d2\u6807",description:"\u662f\u6307\u5728\u52a9\u624b\u5728\u6d4f\u89c8\u5668\u6269\u5c55\u680f\u4f4d\u4e2d\u7684\u56fe\u6807\u4e0a\u663e\u793a\u6570\u5b57",active:!!Y,toolbar:l.createElement(o.w9,{disable:!Y,onClick:this.handleOnSetVideoShowBadge,on:T})}),l.createElement(h.wn,{title:"\u53ea\u663e\u793a\u89d2\u6807\u4e0d\u5f39\u51fa\u6d88\u606f\u901a\u77e5",active:!!Y,toolbar:l.createElement(o.w9,{disable:!Y,onClick:this.handleOnSetVideoNoNotification,on:D})}),l.createElement(h.wn,{title:"\u63a8\u9001\u7c7b\u522b",hasLogin:W,toolbar:l.createElement(a.MD,{value:I,data:s.Xm.map((({title:e,type:t})=>({value:t,title:e}))),onChange:this.handleOnToggleSubscriptionDynamicType})}),l.createElement(h.wn,{title:l.createElement(l.Fragment,null,"\u63a8\u9001\u95f4\u9694 ",l.createElement(a.Ap,null)),description:"\u4e24\u6b21\u63a8\u9001\u4e4b\u95f4\u81f3\u5c11\u4f1a\u95f4\u9694\u8fd9\u4e9b\u65f6\u95f4\uff0c\u9ed8\u8ba410\u5206\u949f",hasLogin:W,isVIP:K,needVIP:!0,active:K&&!!Y,toolbar:l.createElement(a.MD,{value:W&&K?k:10,data:[1,5,10,20,30].map((e=>({value:e,title:`${e}\u5206\u949f`}))),onChange:this.handleOnSetVideoDuration})}),l.createElement(h.wn,{title:l.createElement(l.Fragment,null,"\u63a8\u9001\u65f6\u663e\u793a\u6570\u91cf ",l.createElement(a.Ap,null)),description:"\u9ed8\u8ba4\u63a8\u9001\u6bcf\u4e00\u6761",hasLogin:W,isVIP:K,needVIP:!0,active:K&&!!Y,canCollapsed:!0},l.createElement(o.zW,{value:W&&K?E:"everyone",data:[{key:"everyone",title:"\u63a8\u9001\u6bcf\u4e00\u6761"},{key:"theLatestThree",title:"\u53ea\u63a8\u9001\u6700\u65b0\u7684\u4e09\u6761\u52a8\u6001\u6d88\u606f"},{key:"merge",title:l.createElement(l.Fragment,null,"\u53ea\u63a8\u9001\u4e00\u6761\u663e\u793a\u6570\u91cf\u7684\u901a\u77e5\uff0c\u70b9\u51fb\u524d\u5f80",l.createElement("a",{className:"link",onClick:this.handleOnOpenVideoDynamicPage},"\u6295\u7a3f\u52a8\u6001"),"\u9875\u9762")}],onClick:this.handleOnSetVideoNumberType})),l.createElement(h.wn,{title:l.createElement(l.Fragment,null,"\u63a8\u9001\u8303\u56f4 ",l.createElement(a.Ap,null)),hasLogin:W,isVIP:K,needVIP:!0,active:K&&!!Y,canCollapsed:!0},l.createElement(o.zW,{value:C,data:[{key:"all",title:"\u63a8\u9001\u6240\u6709\u5df2\u5173\u6ce8\u4e3b\u64ad\u7684\u89c6\u9891\u6295\u7a3f\u6d88\u606f"},{key:"specialAttention",title:"\u53ea\u63a8\u9001\u88ab\u7279\u522b\u5173\u6ce8\u4e86\u7684UP\u4e3b\u89c6\u9891\u6d88\u606f",description:"\u9700\u8981\u540c\u65f6\u5728b\u7ad9\u5173\u6ce8\u624d\u80fd\u6536\u5230\u63a8\u9001\u54e6"},{key:"whiteList",title:l.createElement(l.Fragment,null,"\u53ea\u63a8\u9001\u767d\u540d\u5355\u4e2d\u7684UP\u4e3b\u89c6\u9891\u6d88\u606f\uff0c\u5f53\u524d\u767d\u540d\u5355\u6709 ",l.createElement("b",null,F.filter(Boolean).length)," \u9879"),description:"\u53ea\u8981\u5728\u767d\u540d\u5355\u4e2d\uff0c\u5df2\u7ecf\u88ab\u52a0\u5230\u9ed1\u540d\u5355\u4e2d\u7684\u4e5f\u4f1a\u88ab\u63a8\u9001"}],onClick:this.handleOnSetVideoRangeType})),l.createElement(h.wn,{title:l.createElement(l.Fragment,null,"UID\u767d\u540d\u5355 (",F.filter(Boolean).length,") ",l.createElement(a.Ap,null)),description:"\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u6dfb\u52a0\u7684UID",isVIP:K,needVIP:!0,active:"whiteList"===C&&!!Y&&K,hasLogin:W,helperArea:l.createElement(l.Fragment,null,l.createElement("b",null,"\u767d\u540d\u5355\u4f18\u5148\u7ea7\u9ad8\u4e8e\u9ed1\u540d\u5355\u548c\u52a9\u624b\u7279\u5173"),l.createElement("br",null),l.createElement("br",null),"\u5f53\u5931\u53bb\u9f20\u6807\u7126\u70b9\u65f6\u4f1a\u81ea\u52a8\u683c\u5f0f\u5316\u5e76\u8fc7\u6ee4\u91cd\u590d\u9879\u76ee",l.createElement("br",null),l.createElement("br",null),"\u4f7f\u7528",l.createElement("b",null,"\u82f1\u6587\u9017\u53f7"),"\u5c06\u6bcf\u4e2aUID\u5206\u9694\u5f00",l.createElement("br",null),l.createElement("br",null))},l.createElement(v,{placeholder:"\u8f93\u5165\u5e0c\u671b\u59cb\u7ec8\u63a8\u9001\u7684\u7528\u6237UID",value:F,onChange:this.handleOnChangeDynamicWhiteListTextArea,varification:[{func:(0,r.E)(),message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u6570\u5b57",state:"error"}]})),l.createElement(h.wn,{title:l.createElement(l.Fragment,null,"UID\u9ed1\u540d\u5355 (",V.filter(Boolean).length,") ",l.createElement(a.Ap,null)),description:"\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u6dfb\u52a0\u7684UID",isVIP:K,needVIP:!0,active:O&&!!Y&&K,hasLogin:W,toolbar:l.createElement(o.w9,{disable:!W||!Y,onClick:this.handleOnToggleUseVideoBlackList,on:!!W&&O}),helperArea:l.createElement(l.Fragment,null,"\u5f53\u5931\u53bb\u9f20\u6807\u7126\u70b9\u65f6\u4f1a\u81ea\u52a8\u683c\u5f0f\u5316\u5e76\u8fc7\u6ee4\u91cd\u590d\u9879\u76ee",l.createElement("br",null),l.createElement("br",null),"\u4f7f\u7528",l.createElement("b",null,"\u82f1\u6587\u9017\u53f7"),"\u5c06\u6bcf\u4e2aUID\u5206\u9694\u5f00",l.createElement("br",null),l.createElement("br",null))},l.createElement(v,{placeholder:"\u8f93\u5165\u5e0c\u671b\u5c4f\u853d\u63a8\u9001\u7684\u7528\u6237UID",value:V,onChange:this.handleOnChangeDynamicBlackListTextArea,varification:[{func:(0,r.E)(),message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u6570\u5b57",state:"error"}]})),l.createElement(h.wn,{title:l.createElement(l.Fragment,null,"\u5185\u5bb9\u9ed1\u540d\u5355 (",U.filter(Boolean).length,"/30) ",l.createElement(a.Ap,null)),description:"\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u9879",isVIP:K,needVIP:!0,active:x&&!!Y&&K,hasLogin:W,toolbar:l.createElement(o.w9,{disable:!W||!Y,onClick:this.handleOnToggleUseVideoTextBlackList,on:!!W&&x}),helperArea:l.createElement(l.Fragment,null,"\u4f7f\u7528",l.createElement("b",null,"\u82f1\u6587\u9017\u53f7"),"\u5c06\u6bcf\u4e2a\u5185\u5bb9\u5206\u5f00\u53ef\u4ee5\u5feb\u901f\u8f93\u5165")},l.createElement(v,{placeholder:"\u8f93\u5165\u5e0c\u671b\u5c4f\u853d\u63a8\u9001\u7684\u5185\u5bb9",disabledInput:U.filter(Boolean).length>=30,value:U,onChange:this.handleOnChangeDynamicTextBlackListTextArea,varification:[{func:(0,r.i)(1,6),message:"\u5185\u5bb9\u957f\u5ea6\u9650\u5236\u4e3a 1~6 \u4e2a\u5b57",state:"error"}]}))),l.createElement(h.KK,{title:"\u76f4\u64ad\u5f00\u64ad\u63a8\u9001 - \u9700\u767b\u5f55\u52a9\u624b\u8d26\u53f7",active:P,toolbar:l.createElement(o.w9,{disable:!Y,onClick:this.handleOnSetLiveOn,on:!!Y&&P})},l.createElement(h.wn,{title:"\u8bed\u97f3\u64ad\u62a5",description:"\u64ad\u62a5\u5185\u5bb9\u300c\u60a8\u6709\u65b0\u7684\u6d88\u606f\u300d",hasLogin:W,active:!!Y&&B,toolbar:l.createElement(o.w9,{disable:!Y,onClick:this.handleOnSetLiveMessageSpeech,on:B})}),l.createElement(h.wn,{title:"\u663e\u793a\u5c01\u9762",active:!!Y,toolbar:l.createElement(o.w9,{disable:!Y,onClick:this.handleOnSetLiveShowCover,on:R})}),l.createElement(h.wn,{title:l.createElement(l.Fragment,null,"\u63a8\u9001\u95f4\u9694 ",l.createElement(a.Ap,null)),description:"\u4e24\u6b21\u63a8\u9001\u4e4b\u95f4\u81f3\u5c11\u4f1a\u95f4\u9694\u8fd9\u4e9b\u65f6\u95f4",hasLogin:W,isVIP:K,needVIP:!0,active:K&&!!Y,toolbar:l.createElement(a.MD,{value:W&&K?L:10,data:[1,5,10].map((e=>({value:e,title:`${e}\u5206\u949f`}))),onChange:this.handleOnSetLiveDuration})}),l.createElement(h.wn,{title:l.createElement(l.Fragment,null,"\u63a8\u9001\u8303\u56f4 ",l.createElement(a.Ap,null)),hasLogin:W,isVIP:K,needVIP:!0,active:K&&!!Y,canCollapsed:!0},l.createElement(o.zW,{value:K&&W?A:"all",data:[{key:"all",title:"\u63a8\u9001\u6240\u6709\u5df2\u5173\u6ce8\u4e3b\u64ad\u7684\u5f00\u64ad\u6d88\u606f"},{key:"specialAttention",title:"\u53ea\u63a8\u9001\u88ab\u7279\u522b\u5173\u6ce8\u4e86\u7684UP\u4e3b\u7684\u5f00\u64ad\u6d88\u606f",description:"\u9700\u8981\u540c\u65f6\u5728b\u7ad9\u5173\u6ce8\u624d\u80fd\u6536\u5230\u63a8\u9001\u54e6"},{key:"whiteList",title:l.createElement(l.Fragment,null,"\u53ea\u63a8\u9001\u767d\u540d\u5355\u4e2d\u7684UP\u4e3b\u7684\u5f00\u64ad\u6d88\u606f\uff0c\u5f53\u524d\u767d\u540d\u5355\u6709 ",l.createElement("b",null,Q.filter(Boolean).length)," \u9879"),description:"\u53ea\u8981\u5728\u767d\u540d\u5355\u4e2d\uff0c\u5df2\u7ecf\u88ab\u52a0\u5230\u9ed1\u540d\u5355\u4e2d\u7684\u4e5f\u4f1a\u88ab\u63a8\u9001"}],onClick:this.handleOnSetLiveRangeType})),l.createElement(h.wn,{title:l.createElement(l.Fragment,null,"\u767d\u540d\u5355 (",Q.filter(Boolean).length,") ",l.createElement(a.Ap,null)),description:"\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u6dfb\u52a0\u7684UID",hasLogin:W,isVIP:K,needVIP:!0,active:"whiteList"===A&&!!Y&&K,helperArea:l.createElement(l.Fragment,null,l.createElement("b",null,"\u767d\u540d\u5355\u4f18\u5148\u7ea7\u9ad8\u4e8e\u9ed1\u540d\u5355\u548c\u52a9\u624b\u7279\u5173"),l.createElement("br",null),l.createElement("br",null),"\u5f53\u5931\u53bb\u9f20\u6807\u7126\u70b9\u65f6\u4f1a\u81ea\u52a8\u683c\u5f0f\u5316\u5e76\u8fc7\u6ee4\u91cd\u590d\u9879\u76ee",l.createElement("br",null),l.createElement("br",null),"\u4f7f\u7528",l.createElement("b",null,"\u82f1\u6587\u9017\u53f7"),"\u5c06\u6bcf\u4e2aUID\u5206\u9694\u5f00",l.createElement("br",null),l.createElement("br",null))},l.createElement(v,{placeholder:"\u8f93\u5165\u5e0c\u671b\u59cb\u7ec8\u63a8\u9001\u7684\u7528\u6237UID",value:Q,onChange:this.handleOnChangeLiveWhiteListTextArea,varification:[{func:(0,r.E)(),message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u6570\u5b57",state:"error"}]})),l.createElement(h.wn,{title:l.createElement(l.Fragment,null,"\u9ed1\u540d\u5355 (",j.filter(Boolean).length,") ",l.createElement(a.Ap,null)),description:"\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u6dfb\u52a0\u7684UID",hasLogin:W,isVIP:K,needVIP:!0,active:_&&!!Y&&K,toolbar:l.createElement(o.w9,{disable:!W||!Y,onClick:this.handleOnToggleUseLiveBlackList,on:!!W&&_}),helperArea:l.createElement(l.Fragment,null,"\u5f53\u5931\u53bb\u9f20\u6807\u7126\u70b9\u65f6\u4f1a\u81ea\u52a8\u683c\u5f0f\u5316\u5e76\u8fc7\u6ee4\u91cd\u590d\u9879\u76ee",l.createElement("br",null),l.createElement("br",null),"\u4f7f\u7528",l.createElement("b",null,"\u82f1\u6587\u9017\u53f7"),"\u5c06\u6bcf\u4e2aUID\u5206\u9694\u5f00",l.createElement("br",null),l.createElement("br",null))},l.createElement(v,{placeholder:"\u8f93\u5165\u5e0c\u671b\u5c4f\u853d\u63a8\u9001\u7684\u7528\u6237UID",value:j,onChange:this.handleOnChangeLiveBlackListTextArea,varification:[{func:(0,r.E)(),message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u6570\u5b57",state:"error"}]})))))}}const S=(0,d.y)(y)},196:(e,t,n)=>{"use strict";n.d(t,{D5:()=>i,Xm:()=>r,v4:()=>s,xZ:()=>o});const a={ALL:268435455,REPOST:1,PIC:2,WORD:4,VIDEO:8,DRAMA:32,ARTICLE:64,MUSIC:256,BANGUMI:512,NONE:1024,H5_SHARE:2048,COMIC_SHARE:2049,PGC_BANGUMI:4097,FILM:4098,TV:4099,GUOCHUANG:4100,DOCUMENTARY:4101,LIVE_ROOM:4200,LIVE:4201,MEDIA_LIST:4300,CHEESE_SERIES:4302,CHEESE_UPDATE:4303,HOT:1e3,LIVE_PUSH:4308,COLLECTION:4310,SUBSCRIPTION:4311,QUICK:1001},i={[a.REPOST]:"\u8f6c\u53d1",[a.PIC]:"\u56fe\u7247",[a.WORD]:"\u6587\u5b57",[a.VIDEO]:"\u89c6\u9891",[a.DRAMA]:"\u620f\u5267",[a.ARTICLE]:"\u6587\u7ae0",[a.MUSIC]:"\u97f3\u4e50",[a.BANGUMI]:"\u756a\u5267",[a.H5_SHARE]:"\u8bdd\u9898",[a.COMIC_SHARE]:"\u6f2b\u753b",[a.PGC_BANGUMI]:"\u756a\u5267",[a.FILM]:"\u7535\u5f71",[a.TV]:"\u7535\u89c6/\u7efc\u827a",[a.GUOCHUANG]:"\u56fd\u521b",[a.DOCUMENTARY]:"\u7eaa\u5f55\u7247",[a.LIVE_ROOM]:"\u76f4\u64ad\u95f4",[a.LIVE]:"\u76f4\u64ad",[a.MEDIA_LIST]:"\u6536\u85cf\u5939",[a.CHEESE_SERIES]:"\u8bfe\u7a0b",[a.CHEESE_UPDATE]:"\u8bfe\u7a0b\u66f4\u65b0",[a.HOT]:"\u70ed\u95e8",[a.LIVE_PUSH]:"\u76f4\u64ad\uff08\u63a8\u9001\uff09",[a.COLLECTION]:"\u5408\u96c6",[a.SUBSCRIPTION]:"\u76f4\u64ad\uff08\u8ba2\u9605\uff09"},r=[{title:"\u5168\u90e8",type:"all"},{title:"\u89c6\u9891\u6295\u7a3f",type:"video"},{title:"\u8ffd\u756a\u8ffd\u5267",type:"pgc"},{title:"\u4e13\u680f\u6587\u7ae0",type:"article"}],o=(a.ALL,a.PIC,a.WORD,a.VIDEO,a.MEDIA_LIST,a.COLLECTION,a.ARTICLE,a.LIVE_ROOM,a.LIVE,a.LIVE_PUSH,a.SUBSCRIPTION,a.MUSIC,a.BANGUMI,a.PGC_BANGUMI,a.GUOCHUANG,a.COMIC_SHARE,a.CHEESE_SERIES,a.CHEESE_UPDATE,a.FILM,a.TV,a.DOCUMENTARY,a.H5_SHARE,a.COMIC_SHARE,a.DRAMA,a.NONE,{forward:"\u8f6c\u53d1",av:"\u89c6\u9891",pgc:"\u756a\u5267",coursesSeason:"\u8bfe\u5802",word:"\u7eaf\u6587\u5b57\u52a8\u6001",draw:"\u56fe\u6587\u52a8\u6001",article:"\u4e13\u680f",music:"\u97f3\u4e50",live:"\u76f4\u64ad\u95f4\u5206\u4eab",mediaList:"\u6536\u85cf\u5939",liveRcmd:"\u76f4\u64ad\u5f00\u64ad",ugcSeason:"\u5408\u96c6\u66f4\u65b0",onlyFans:"\u5145\u7535\u4e13\u5c5e\u52a8\u6001"}),s={common:"\u4e00\u822c",goods:"\u5546\u54c1",vote:"\u6295\u7968",upowerLottery:"\u5145\u7535\u62bd\u5956",upowerCommon:"\u5176\u4ed6\u5145\u7535\u76f8\u5173"};var l,c,d,u;(function(e){e["RICH_TEXT_NODE_TYPE_GOODS"]="RICH_TEXT_NODE_TYPE_GOODS",e["RICH_TEXT_NODE_TYPE_LOTTERY"]="RICH_TEXT_NODE_TYPE_LOTTERY",e["RICH_TEXT_NODE_TYPE_VOTE"]="RICH_TEXT_NODE_TYPE_VOTE"})(l||(l={})),function(e){e["AUTHOR_TYPE_NONE"]="AUTHOR_TYPE_NONE",e["AUTHOR_TYPE_NORMAL"]="AUTHOR_TYPE_NORMAL",e["AUTHOR_TYPE_PGC"]="AUTHOR_TYPE_PGC",e["AUTHOR_TYPE_UGC_SEASON"]="AUTHOR_TYPE_UGC_SEASON"}(c||(c={})),function(e){e["ADDITIONAL_TYPE_GOODS"]="ADDITIONAL_TYPE_GOODS",e["ADDITIONAL_TYPE_VOTE"]="ADDITIONAL_TYPE_VOTE",e["ADDITIONAL_TYPE_COMMON"]="ADDITIONAL_TYPE_COMMON",e["ADDITIONAL_TYPE_UPOWER_LOTTERY"]="ADDITIONAL_TYPE_UPOWER_LOTTERY",e["MAJOR_TYPE_UPOWER_COMMON"]="MAJOR_TYPE_UPOWER_COMMON"}(d||(d={})),function(e){e["DYNAMIC_TYPE_FORWARD"]="DYNAMIC_TYPE_FORWARD",e["DYNAMIC_TYPE_AV"]="DYNAMIC_TYPE_AV",e["DYNAMIC_TYPE_PGC"]="DYNAMIC_TYPE_PGC",e["DYNAMIC_TYPE_COURSES_SEASON"]="DYNAMIC_TYPE_COURSES_SEASON",e["DYNAMIC_TYPE_WORD"]="DYNAMIC_TYPE_WORD",e["DYNAMIC_TYPE_DRAW"]="DYNAMIC_TYPE_DRAW",e["DYNAMIC_TYPE_ARTICLE"]="DYNAMIC_TYPE_ARTICLE",e["DYNAMIC_TYPE_MUSIC"]="DYNAMIC_TYPE_MUSIC",e["DYNAMIC_TYPE_LIVE"]="DYNAMIC_TYPE_LIVE",e["DYNAMIC_TYPE_MEDIALIST"]="DYNAMIC_TYPE_MEDIALIST",e["DYNAMIC_TYPE_LIVE_RCMD"]="DYNAMIC_TYPE_LIVE_RCMD",e["DYNAMIC_TYPE_UGC_SEASON"]="DYNAMIC_TYPE_UGC_SEASON",e["CUSTON_DYNAMIC_TYPE_UPOWER"]="CUSTON_DYNAMIC_TYPE_UPOWER"}(u||(u={}));u.DYNAMIC_TYPE_FORWARD,u.DYNAMIC_TYPE_AV,u.DYNAMIC_TYPE_PGC,u.DYNAMIC_TYPE_COURSES_SEASON,u.DYNAMIC_TYPE_WORD,u.DYNAMIC_TYPE_DRAW,u.DYNAMIC_TYPE_ARTICLE,u.DYNAMIC_TYPE_MUSIC,u.DYNAMIC_TYPE_LIVE,u.DYNAMIC_TYPE_MEDIALIST,u.DYNAMIC_TYPE_LIVE_RCMD,u.DYNAMIC_TYPE_UGC_SEASON,u.CUSTON_DYNAMIC_TYPE_UPOWER,d.MAJOR_TYPE_UPOWER_COMMON,d.ADDITIONAL_TYPE_GOODS,d.ADDITIONAL_TYPE_VOTE,d.ADDITIONAL_TYPE_COMMON,d.ADDITIONAL_TYPE_UPOWER_LOTTERY},228:(e,t,n)=>{"use strict"},471:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var a=n(6540),i=n(5999),r=n(6156),o=n(6942),s=n.n(o);const l=i.Ay.div`
	position: relative;
	
	.verification-messages {
		padding: 8px;
		color: red;
		
		[date-state] {
			margin-bottom: 4px;
		}
	}
`,c=i.Ay.div`
	position: relative;
	display: flex;
	flex-direction: column;
	border: 1px solid var(--google-grey-300);
	border-radius: 6px;
	overflow: hidden;
	border-collapse: collapse;
  transition: border-color .15s, box-shadow .3s;
  
  &:hover {
	  //box-shadow: rgba(113, 113, 113, 0.18) 0px 0px 6px;
  }
  
  &.active {
    border-color: var(--google-grey-500);
	  //box-shadow: rgb(190, 222, 255) 0px 0px 6px;
  }
`,d=i.Ay.div`
	position: relative;
	//left: 0;
	//bottom: -12.5px;
	//right: 0;
	margin-top: -28px;
	border-top: 1px solid transparent;
	border-radius: 0 0 6px 6px;
	transition: opacity .15s, border-color .15s, margin-top .15s;
	opacity: 0;
	pointer-events: none;
  will-change: margin-top, opacity, border-color;
	
	&.active {
		border-color: var(--google-grey-500);
		opacity: 1;
		pointer-events: auto;
		margin-top: 0;
	}
	
	.enter-tip {
		position: absolute;
		bottom: 6px;
		right: 8px;
		display: flex;
		align-items: center;
		opacity: 0.5;
		pointer-events: none;
		user-select: none;
	}
`,u=i.Ay.div`
	padding: 8px;
	min-height: 50px;
	box-sizing: border-box;
	//border: 1px solid rgb(118, 118, 118);
	//border-bottom: none;
	border-radius: 6px 6px 0 0;
	z-index: 1;
	
	.no-data {
		opacity: .5;
		user-select: none;
		pointer-events: none;
	}
`,p=i.Ay.input`
	appearance: unset;
	width: calc(100% - 24px);
	border: none;
	padding: 6px 12px;
	//border-top: 1px solid rgb(118, 118, 118);
	border-radius: 0 0 6px 6px;
  //outline: none;
	
	&[disabled] {
		cursor: not-allowed;
	}
`,h=(0,i.Ay)(r.Cross1Icon)`
	cursor: pointer;
`,g=i.Ay.div.attrs((()=>({className:"acghelper-tag"})))`
	display: inline-flex;
	align-items: center;
	margin-right: 5px;
	margin-bottom: 5px;
	padding: 2px 10px;
	border-radius: 20px;
	font-size: 12px;
	background-color: cornflowerblue;
	color: #fff;
	
	.tag-area-delete-btutton {
		margin-left: 4px;
		margin-right: -4px;
		width: 10px;
		height: 10px;
		fill: #fff;
	}
`,m=(0,i.Ay)(r.Pencil1Icon)`
	position: absolute;
	right: 2px;
	bottom: 2px;
	padding: 6px;
	border-radius: 6px;
	fill: var(--google-grey-700);
	transition: opacity .3s, background-color .15s;
	opacity: 0;
	pointer-events: none;
  background-color: transparent;
	cursor: pointer;
  z-index: 1;
  
  &:hover {
    background-color: var(--google-grey-300);
  }
  
  &:active {
	  background-color: var(--google-grey-400);
  }
	
	&.active {
		opacity: 1;
		pointer-events: auto;
	}
  
`,f=e=>{const{value:t=[],onChange:n,varification:i,placeholder:o,disabled:f=!1,disabledInput:b=!1}=e,[v,y]=(0,a.useState)(""),[S,w]=(0,a.useState)(""),[C,E]=(0,a.useState)(new Set(t.map((e=>e.trim())).filter((e=>e.length>0)))),[O,x]=(0,a.useState)([]),[k,M]=(0,a.useState)(!1),T=(0,a.useRef)(),D=(0,a.useRef)(!1),I=(0,a.useCallback)(((e,t)=>{if(e.persist(),!f&&!b){if(!i||!(i instanceof Array))return!0;if(!D.current&&t){const n=[...O];let a=!0;for(let r of i){const{func:i,state:o,whiteArray:s,blackArray:l}=r;if(i instanceof Function&&"string"===typeof t&&t.length&&!i(t))a=!1;else if(s instanceof Array&&s.length>0&&!s.includes(t))a=!1;else if(l instanceof Array&&l.length>0&&l.includes(t))a=!1;else{const e=n.findIndex((e=>e.state===o));e>=0&&n.splice(e,1)}if(!a)return n.find((e=>e.state===o))||n.push(r),e.preventDefault(),x(n),!1}return a&&x([]),!0}return e.preventDefault(),!0}}),[i,O,f,b]),P=(0,a.useCallback)((e=>{I(e,e.data)}),[i,O,f,b,v]),A=(0,a.useCallback)((e=>{I(e,e?.target.value)&&!D.current?y(e.target.value):w(e.target.value)}),[]),N=(0,a.useCallback)((()=>{M(!1)}),[]),_=(0,a.useCallback)((e=>{if(!f&&!b&&"Enter"===e.key){const e=new Set(C);if(0===v.length)return;let t=e.has(v);if(!t){const t=[...e,...v.split(",").map((e=>e.trim())).filter((e=>e.length>0))];y(""),n([...t]),x([])}}}),[C,v,f,b]),L=(0,a.useCallback)((e=>{if(f)return;const t=new Set(C);t.delete(e),n([...t])}),[C,f]),R=(0,a.useCallback)((()=>{D.current=!0}),[]),B=(0,a.useCallback)((e=>{e.persist(),D.current=!1,I(e,v+e.data)&&y(v+e.data)}),[v]),F=(0,a.useCallback)((()=>{T.current?.focus(),M(!0)}),[]);return(0,a.useEffect)((()=>{E(new Set(t.map((e=>e.trim())).filter((e=>e.length>0))))}),[t]),a.createElement(l,{className:s()({active:k})},a.createElement(c,{className:s()({active:k})},a.createElement(u,null,C.size>0?[...C].map((e=>a.createElement(g,{key:e},e,a.createElement(h,{className:"tag-area-delete-btutton",onClick:()=>L(e)})))):a.createElement("span",{className:"no-data"},"\u6ca1\u6709\u6570\u636e")),a.createElement(d,{className:s()("input-wrapper",{active:k})},a.createElement(p,{ref:T,type:"text",disabled:f||b,value:D.current?S:v,onBeforeInput:P,onChange:A,onBlur:N,onKeyUp:_,placeholder:o,onCompositionStart:R,onCompositionEnd:B}),a.createElement("span",{className:"enter-tip"},"Enter",a.createElement(r.EnterArrowIcon,null))),a.createElement(m,{className:s()({active:!k}),onClick:F})),a.createElement("div",{className:"verification-messages"},O.map((({state:e,message:t})=>t?a.createElement("div",{key:e,"data-state":e},t):null))))}},634:(e,t,n)=>{"use strict";n.d(t,{WH:()=>i,wM:()=>r,y8:()=>a});const a={superAdmin:"\u732b\u56fd\u8bbe\u8ba1\u5e08",admin:"\u732b\u56fd\u57ce\u7ba1",catForever:"\u732b\u56fd\u5927\u62a4\u6cd5",catVIPSuper:"\u52a9\u624b\u732b\u57f9\u80b2\u5e08",catVIP:"\u52a9\u624b\u732b\u89c2\u5bdf\u5458",catWatcher:"\u52a9\u624b\u732b\u77ad\u671b\u8005",catVIPHonor:"\u732b\u56fd\u8363\u8a89\u5e02\u6c11",catAirborneCommander:"\u7a7a\u964d\u6307\u6325\u5b98",catAirbornePilot:"\u55b5\u8425\u98de\u884c\u5458"},i=["superAdmin","admin","catForever","catVIP"],r=["superAdmin","admin","catForever"]},784:(e,t,n)=>{"use strict";n.d(t,{I:()=>a});const a={"google-red-100":"#f4c7c3","google-red-300":"#e67c73","google-red-500":"#db4437","google-red-700":"#c53929","google-blue-100":"#c6dafc","google-blue-300":"#7baaf7","google-blue-500":"#4285f4","google-blue-600":"#1a73e8","google-blue-700":"#3367d6","google-green-100":"#b7e1cd","google-green-300":"#57bb8a","google-green-500":"#0f9d58","google-green-700":"#0b8043","google-yellow-100":"#fce8b2","google-yellow-300":"#f7cb4d","google-yellow-500":"#f4b400","google-yellow-700":"#f09300","google-grey-50":"#f8f9fa","google-grey-100":"#f5f5f5","google-grey-300":"#e0e0e0","google-grey-400":"#bdc1c6","google-grey-500":"#9e9e9e","google-grey-700":"#616161","paper-red-50":"#ffebee","paper-red-100":"#ffcdd2","paper-red-200":"#ef9a9a","paper-red-300":"#e57373","paper-red-400":"#ef5350","paper-red-500":"#f44336","paper-red-600":"#e53935","paper-red-700":"#d32f2f","paper-red-800":"#c62828","paper-red-900":"#b71c1c","paper-red-a100":"#ff8a80","paper-red-a200":"#ff5252","paper-red-a400":"#ff1744","paper-red-a700":"#d50000","paper-pink-50":"#fce4ec","paper-pink-100":"#f8bbd0","paper-pink-200":"#f48fb1","paper-pink-300":"#f06292","paper-pink-400":"#ec407a","paper-pink-500":"#e91e63","paper-pink-600":"#d81b60","paper-pink-700":"#c2185b","paper-pink-800":"#ad1457","paper-pink-900":"#880e4f","paper-pink-a100":"#ff80ab","paper-pink-a200":"#ff4081","paper-pink-a400":"#f50057","paper-pink-a700":"#c51162","paper-purple-50":"#f3e5f5","paper-purple-100":"#e1bee7","paper-purple-200":"#ce93d8","paper-purple-300":"#ba68c8","paper-purple-400":"#ab47bc","paper-purple-500":"#9c27b0","paper-purple-600":"#8e24aa","paper-purple-700":"#7b1fa2","paper-purple-800":"#6a1b9a","paper-purple-900":"#4a148c","paper-purple-a100":"#ea80fc","paper-purple-a200":"#e040fb","paper-purple-a400":"#d500f9","paper-purple-a700":"#aa00ff","paper-deep-purple-50":"#ede7f6","paper-deep-purple-100":"#d1c4e9","paper-deep-purple-200":"#b39ddb","paper-deep-purple-300":"#9575cd","paper-deep-purple-400":"#7e57c2","paper-deep-purple-500":"#673ab7","paper-deep-purple-600":"#5e35b1","paper-deep-purple-700":"#512da8","paper-deep-purple-800":"#4527a0","paper-deep-purple-900":"#311b92","paper-deep-purple-a100":"#b388ff","paper-deep-purple-a200":"#7c4dff","paper-deep-purple-a400":"#651fff","paper-deep-purple-a700":"#6200ea","paper-indigo-50":"#e8eaf6","paper-indigo-100":"#c5cae9","paper-indigo-200":"#9fa8da","paper-indigo-300":"#7986cb","paper-indigo-400":"#5c6bc0","paper-indigo-500":"#3f51b5","paper-indigo-600":"#3949ab","paper-indigo-700":"#303f9f","paper-indigo-800":"#283593","paper-indigo-900":"#1a237e","paper-indigo-a100":"#8c9eff","paper-indigo-a200":"#536dfe","paper-indigo-a400":"#3d5afe","paper-indigo-a700":"#304ffe","paper-blue-50":"#e3f2fd","paper-blue-100":"#bbdefb","paper-blue-200":"#90caf9","paper-blue-300":"#64b5f6","paper-blue-400":"#42a5f5","paper-blue-500":"#2196f3","paper-blue-600":"#1e88e5","paper-blue-700":"#1976d2","paper-blue-800":"#1565c0","paper-blue-900":"#0d47a1","paper-blue-a100":"#82b1ff","paper-blue-a200":"#448aff","paper-blue-a400":"#2979ff","paper-blue-a700":"#2962ff","paper-light-blue-50":"#e1f5fe","paper-light-blue-100":"#b3e5fc","paper-light-blue-200":"#81d4fa","paper-light-blue-300":"#4fc3f7","paper-light-blue-400":"#29b6f6","paper-light-blue-500":"#03a9f4","paper-light-blue-600":"#039be5","paper-light-blue-700":"#0288d1","paper-light-blue-800":"#0277bd","paper-light-blue-900":"#01579b","paper-light-blue-a100":"#80d8ff","paper-light-blue-a200":"#40c4ff","paper-light-blue-a400":"#00b0ff","paper-light-blue-a700":"#0091ea","paper-cyan-50":"#e0f7fa","paper-cyan-100":"#b2ebf2","paper-cyan-200":"#80deea","paper-cyan-300":"#4dd0e1","paper-cyan-400":"#26c6da","paper-cyan-500":"#00bcd4","paper-cyan-600":"#00acc1","paper-cyan-700":"#0097a7","paper-cyan-800":"#00838f","paper-cyan-900":"#006064","paper-cyan-a100":"#84ffff","paper-cyan-a200":"#18ffff","paper-cyan-a400":"#00e5ff","paper-cyan-a700":"#00b8d4","paper-teal-50":"#e0f2f1","paper-teal-100":"#b2dfdb","paper-teal-200":"#80cbc4","paper-teal-300":"#4db6ac","paper-teal-400":"#26a69a","paper-teal-500":"#009688","paper-teal-600":"#00897b","paper-teal-700":"#00796b","paper-teal-800":"#00695c","paper-teal-900":"#004d40","paper-teal-a100":"#a7ffeb","paper-teal-a200":"#64ffda","paper-teal-a400":"#1de9b6","paper-teal-a700":"#00bfa5","paper-green-50":"#e8f5e9","paper-green-100":"#c8e6c9","paper-green-200":"#a5d6a7","paper-green-300":"#81c784","paper-green-400":"#66bb6a","paper-green-500":"#4caf50","paper-green-600":"#43a047","paper-green-700":"#388e3c","paper-green-800":"#2e7d32","paper-green-900":"#1b5e20","paper-green-a100":"#b9f6ca","paper-green-a200":"#69f0ae","paper-green-a400":"#00e676","paper-green-a700":"#00c853","paper-light-green-50":"#f1f8e9","paper-light-green-100":"#dcedc8","paper-light-green-200":"#c5e1a5","paper-light-green-300":"#aed581","paper-light-green-400":"#9ccc65","paper-light-green-500":"#8bc34a","paper-light-green-600":"#7cb342","paper-light-green-700":"#689f38","paper-light-green-800":"#558b2f","paper-light-green-900":"#33691e","paper-light-green-a100":"#ccff90","paper-light-green-a200":"#b2ff59","paper-light-green-a400":"#76ff03","paper-light-green-a700":"#64dd17","paper-lime-50":"#f9fbe7","paper-lime-100":"#f0f4c3","paper-lime-200":"#e6ee9c","paper-lime-300":"#dce775","paper-lime-400":"#d4e157","paper-lime-500":"#cddc39","paper-lime-600":"#c0ca33","paper-lime-700":"#afb42b","paper-lime-800":"#9e9d24","paper-lime-900":"#827717","paper-lime-a100":"#f4ff81","paper-lime-a200":"#eeff41","paper-lime-a400":"#c6ff00","paper-lime-a700":"#aeea00","paper-yellow-50":"#fffde7","paper-yellow-100":"#fff9c4","paper-yellow-200":"#fff59d","paper-yellow-300":"#fff176","paper-yellow-400":"#ffee58","paper-yellow-500":"#ffeb3b","paper-yellow-600":"#fdd835","paper-yellow-700":"#fbc02d","paper-yellow-800":"#f9a825","paper-yellow-900":"#f57f17","paper-yellow-a100":"#ffff8d","paper-yellow-a200":"#ffff00","paper-yellow-a400":"#ffea00","paper-yellow-a700":"#ffd600","paper-amber-50":"#fff8e1","paper-amber-100":"#ffecb3","paper-amber-200":"#ffe082","paper-amber-300":"#ffd54f","paper-amber-400":"#ffca28","paper-amber-500":"#ffc107","paper-amber-600":"#ffb300","paper-amber-700":"#ffa000","paper-amber-800":"#ff8f00","paper-amber-900":"#ff6f00","paper-amber-a100":"#ffe57f","paper-amber-a200":"#ffd740","paper-amber-a400":"#ffc400","paper-amber-a700":"#ffab00","paper-orange-50":"#fff3e0","paper-orange-100":"#ffe0b2","paper-orange-200":"#ffcc80","paper-orange-300":"#ffb74d","paper-orange-400":"#ffa726","paper-orange-500":"#ff9800","paper-orange-600":"#fb8c00","paper-orange-700":"#f57c00","paper-orange-800":"#ef6c00","paper-orange-900":"#e65100","paper-orange-a100":"#ffd180","paper-orange-a200":"#ffab40","paper-orange-a400":"#ff9100","paper-orange-a700":"#ff6500","paper-deep-orange-50":"#fbe9e7","paper-deep-orange-100":"#ffccbc","paper-deep-orange-200":"#ffab91","paper-deep-orange-300":"#ff8a65","paper-deep-orange-400":"#ff7043","paper-deep-orange-500":"#ff5722","paper-deep-orange-600":"#f4511e","paper-deep-orange-700":"#e64a19","paper-deep-orange-800":"#d84315","paper-deep-orange-900":"#bf360c","paper-deep-orange-a100":"#ff9e80","paper-deep-orange-a200":"#ff6e40","paper-deep-orange-a400":"#ff3d00","paper-deep-orange-a700":"#dd2c00","paper-brown-50":"#efebe9","paper-brown-100":"#d7ccc8","paper-brown-200":"#bcaaa4","paper-brown-300":"#a1887f","paper-brown-400":"#8d6e63","paper-brown-500":"#795548","paper-brown-600":"#6d4c41","paper-brown-700":"#5d4037","paper-brown-800":"#4e342e","paper-brown-900":"#3e2723","paper-grey-50":"#fafafa","paper-grey-100":"#f5f5f5","paper-grey-200":"#eeeeee","paper-grey-300":"#e0e0e0","paper-grey-400":"#bdbdbd","paper-grey-500":"#9e9e9e","paper-grey-600":"#757575","paper-grey-700":"#616161","paper-grey-800":"#424242","paper-grey-900":"#212121","paper-blue-grey-50":"#eceff1","paper-blue-grey-100":"#cfd8dc","paper-blue-grey-200":"#b0bec5","paper-blue-grey-300":"#90a4ae","paper-blue-grey-400":"#78909c","paper-blue-grey-500":"#607d8b","paper-blue-grey-600":"#546e7a","paper-blue-grey-700":"#455a64","paper-blue-grey-800":"#37474f","bilibili-pink":"#FB7299","bilibili-blue":"#23ADE5","bilibili-green":"#6dc781"}},996:(e,t,n)=>{"use strict";n.d(t,{h4:()=>i,rE:()=>a});const a="2.8.31",i=async()=>{}},1074:e=>{function t(e){return e.split("")}e.exports=t},1104:(e,t,n)=>{"use strict";n.d(t,{w:()=>s});var a=n(3436);const i=1e3,r=204,o=12,s={color:a.yW,logoHeight:50,bodyMinWidth:i,headerHeight:0,sidebarWidth:r,mainWidth:i-r,baseFontSize:o,fontFamily:a.mw,fontSize:a.J,rem:a.D0,textOverflow:a.g9,transition:a.kY,boxShadow:a.MS,marginTrim:a.Vh,hideScrollbar:a.TH,opacity:a.ke}},1349:(e,t,n)=>{"use strict";n(8087);var a=n(3376),i=n(6540),r=n(3205),o=n(5999),s=n(8285),l=(n(8016),n(9983));const c=o.Ay.div`

`;class d extends i.Component{constructor(e){super(e)}static contextType=l.T;state={cvImageDownload:!1};componentDidMount(){chrome.runtime.sendMessage({target:"cvImageDownload",event:"getSetting"},(({on:e})=>{this.setState({cvImageDownload:e})}))}handleOnToggleCvImageDownload=()=>{chrome.runtime.sendMessage({target:"cvImageDownload",event:"setSetting",on:!this.state.cvImageDownload},(()=>{this.context.uploadSettings("cvImageDownload"),this.setState({cvImageDownload:!this.state.cvImageDownload})}))};render(){return i.createElement(c,null,i.createElement(s.hE,{title:"\u4e13\u680f\u9875\u9762\u8bbe\u7f6e"}),i.createElement(s.wn,{title:"\u56fe\u7247\u4e0b\u8f7d",toolbar:i.createElement(a.w9,{onClick:this.handleOnToggleCvImageDownload,on:this.state.cvImageDownload}),active:this.state.cvImageDownload}))}}(0,r.y)(d)},1514:(e,t,n)=>{"use strict";n.d(t,{u:()=>i});var a=n(9927);const i=()=>!!(0,a.R)("type","application/futuresplash")||(!!(self?.chrome&&self.chrome.webstorePrivate&&self.chrome.webstorePrivate.beginInstallWithManifest3)||!!~navigator.userAgent.toLowerCase().indexOf("360ee"))},1653:(e,t,n)=>{"use strict";n.d(t,{$6:()=>u.$,Ap:()=>h.A,In:()=>r.I,MD:()=>p.M,Q6:()=>c.Q,QB:()=>d.Q,_V:()=>s._,aF:()=>o.a,n0:()=>i.n,pd:()=>l.p,sL:()=>a.$});var a=n(724),i=n(1318),r=n(3879),o=(n(4525),n(2875)),s=n(4271),l=n(2398),c=(n(1208),n(5502),n(8311)),d=(n(4950),n(5381)),u=(n(142),n(9189),n(7008),n(2987),n(3563),n(4625)),p=n(1327),h=n(2505)},1803:(e,t,n)=>{"use strict";n.d(t,{oq:()=>a.o});var a=n(2074)},1965:(e,t,n)=>{"use strict";n.d(t,{X:()=>a});const a={FREE_NUMBER:3,FREE_MAX_LENGTH:30,MAX_NUMBER:15,VIP_MAX_LENGTH:500}},1972:(e,t,n)=>{"use strict";n.d(t,{i:()=>c});var a=n(6540),i=n(2954);function r(e,t){"function"===typeof e?e(t):e.current=t}function o(e,t){var n=e.ref;return(0,i.V)("string"!==typeof n,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute"),n?(0,a.cloneElement)(e,{ref:function(e){r(n,e),r(t,e)}}):(0,a.cloneElement)(e,{ref:t})}function s(e){if("string"!==typeof e.type){var t=e.type.displayName||e.type.name||"the component";throw new Error("Only native element nodes can now be passed to React DnD connectors."+"You can either wrap ".concat(t," into a <div>, or turn it into a ")+"drag source or a drop target itself.")}}function l(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!(0,a.isValidElement)(t)){var i=t;return e(i,n),i}var r=t;s(r);var l=n?function(t){return e(t,n)}:e;return o(r,l)}}function c(e){var t={};return Object.keys(e).forEach((function(n){var a=e[n];if(n.endsWith("Ref"))t[n]=e[n];else{var i=l(a);t[n]=function(){return i}}})),t}},2046:(e,t,n)=>{"use strict";n.d(t,{A:()=>C});var a=n(6540),i=n(3205),r=n(5999),o=n(9983),s=n(8285),l=n(3376),c=n(471),d=n(141),u=n(2505),p=n(196);const h=(0,r.Ay)(c.A)`
	width: calc(100% - 18px);
	min-height: 50px;
	padding: 8px;
`,g=()=>{const{uploadSettings:e,hasLogin:t,bhAccount:n,bilibiliAccount:i}=(0,a.useContext)(o.T),[r,c]=(0,a.useState)(!1),[g,m]=(0,a.useState)(!1),[f,b]=(0,a.useState)(!1),[v,y]=(0,a.useState)([]),[S,w]=(0,a.useState)([]),[C,E]=(0,a.useState)(!1),[O,x]=(0,a.useState)([]),k=!!n&&n["isVIP"],M=(0,a.useCallback)((()=>{chrome.runtime.sendMessage({target:"dynamicFilter",event:"setSetting",on:!r},(()=>{e("dynamicFilter"),c(!r)}))}),[r]),T=(0,a.useCallback)((()=>{chrome.runtime.sendMessage({target:"dynamicFilter",event:"setSetting",useTypeFilter:!g},(()=>{e("dynamicFilter"),m(!g)}))}),[g]),D=(0,a.useCallback)((()=>{chrome.runtime.sendMessage({target:"dynamicFilter",event:"setSetting",useAdditionalTypeFilter:!f},(()=>{e("dynamicFilter"),b(!f)}))}),[f]),I=(0,a.useCallback)((()=>{chrome.runtime.sendMessage({target:"dynamicFilter",event:"setSetting",useContentFilter:!C},(()=>{e("dynamicFilter"),E(!C)}))}),[C]),P=(0,a.useCallback)(((t,n)=>{const a=new Set(v);a.has(t)?n||a.delete(t):a.add(t),chrome.runtime.sendMessage({target:"dynamicFilter",event:"setkeys",type:"type",keys:[...a]},(()=>{e("dynamicFilter"),y([...a])}))}),[v]),A=(0,a.useCallback)(((t,n)=>{const a=new Set(S);a.has(t)?n||a.delete(t):a.add(t),chrome.runtime.sendMessage({target:"dynamicFilter",event:"setkeys",type:"additional",keys:[...a]},(()=>{e("dynamicFilter"),w([...a])}))}),[S]),N=(0,a.useCallback)((t=>{const n=new Set(t.map((e=>e.trim())).filter(Boolean));chrome.runtime.sendMessage({target:"dynamicFilter",event:"setkeys",type:"content",keys:[...n]},(()=>{e("dynamicFilter"),x([...n])}))}),[]);return(0,a.useEffect)((()=>{chrome.runtime.sendMessage({target:"dynamicFilter",event:"getState"},(({on:e,useTypeFilter:t,dynamicType:n,useAdditionalTypeFilter:a,dynamicAdditionalType:i,useContentFilter:r,dynamicContent:o})=>{c(e),m(t),y(n),b(a),w(i),E(r),x(o)}))}),[]),a.createElement(s.KK,{title:a.createElement(a.Fragment,null,"\u52a8\u6001\u9875\u9762\u8fc7\u6ee4\u8bbe\u7f6e"),active:r,toolbar:a.createElement(l.w9,{on:r,onClick:M,disable:!i})},a.createElement(s.wn,{title:"\u6309\u52a8\u6001\u7c7b\u522b\u8fc7\u6ee4",toolbar:a.createElement(l.w9,{on:g,onClick:T,disable:!r}),canCollapsed:!0,defaultCollapsed:!0,active:g},a.createElement(l.x3,{data:Object.entries(p.xZ).map((([e,t])=>({key:e,title:t,on:v.includes(e)}))),onClick:P})),a.createElement(s.wn,{title:"\u6309\u52a8\u6001\u9644\u52a0\u7c7b\u522b\u8fc7\u6ee4",toolbar:a.createElement(l.w9,{on:f,onClick:D,disable:!r}),canCollapsed:!0,defaultCollapsed:!0,active:f},a.createElement(l.x3,{data:Object.entries(p.v4).map((([e,t])=>({key:e,title:t,on:S.includes(e)}))),onClick:A})),a.createElement(s.wn,{title:a.createElement(a.Fragment,null,"\u6309\u52a8\u6001\u5185\u5bb9\u8fc7\u6ee4 (",O.filter(Boolean).length,"/100) ",a.createElement(u.A,null)),description:"\u5355\u4e2a\u5173\u952e\u8bcd\u9650\u5236\u957f\u5ea616\u5b57\u7b26\uff0c\u4ee5\u300c/\u300d\u5f00\u59cb\u548c\u7ed3\u5c3e\u4e14\u4e2d\u95f4\u5305\u542b\u81f3\u5c11\u4e00\u4e2a\u5b57\u7b26\u4f1a\u88ab\u89c6\u4f5c\u6b63\u5219\u8868\u8fbe\u5f0f",active:C,hasLogin:t,isVIP:k,needVIP:!0,toolbar:a.createElement(l.w9,{on:C,onClick:I,disable:!r})},a.createElement(h,{placeholder:"\u8f93\u5165\u5c4f\u853d\u5185\u5bb9",disabledInput:O.filter(Boolean).length>=100,value:O,onChange:N,varification:[{func:(0,d.i)(1,16),message:"\u5185\u5bb9\u957f\u5ea6\u9650\u5236\u4e3a 1~16 \u4e2a\u5b57",state:"error"}]})))};var m=n(1653);r.Ay.div`

`;const f=(0,r.Ay)(c.A)`
	width: calc(100% - 18px);
	min-height: 50px;
	padding: 8px;
`,b=()=>{const{uploadSettings:e,hasLogin:t,bhAccount:n,bilibiliAccount:i}=(0,a.useContext)(o.T),[r,c]=(0,a.useState)(!1),[u,p]=(0,a.useState)(0),[h,g]=(0,a.useState)(!1),[b,v]=(0,a.useState)([]),y=!!n&&n["isVIP"],S=y?200:20,w=(0,a.useCallback)((()=>{chrome.runtime.sendMessage({target:"userFilter",event:"setSetting",on:!r},(()=>{e("userFilter"),c(!r)}))}),[r]),C=(0,a.useCallback)((()=>{chrome.runtime.sendMessage({target:"userFilter",event:"setSetting",useNameFilter:!h},(()=>{e("userFilter"),g(!h)}))}),[h]),E=(0,a.useCallback)((t=>{const n=+t.target.value;n!==u&&chrome.runtime.sendMessage({target:"userFilter",event:"setSetting",level:n},(()=>{e("userFilter"),p(n)}))}),[u]),O=(0,a.useCallback)((t=>{const n=new Set(t.map((e=>e.trim())).filter(Boolean));chrome.runtime.sendMessage({target:"userFilter",event:"setkeys",keys:[...n]},(()=>{e("userFilter"),v([...n])}))}),[]);return(0,a.useEffect)((()=>{chrome.runtime.sendMessage({target:"userFilter",event:"getState"},(({on:e,level:t,useNameFilter:n,users:a})=>{c(e),p(t),g(n),v(a)}))}),[]),a.createElement(s.KK,{title:a.createElement(a.Fragment,null,"\u7528\u6237\u8fc7\u6ee4\u8bbe\u7f6e"),description:"\u8be5\u8bbe\u7f6e\u4f1a\u540c\u65f6\u4f5c\u7528\u4e8e\u5176\u4ed6\u8fc7\u6ee4\u529f\u80fd\u4e2d",active:r,toolbar:a.createElement(l.w9,{on:r,onClick:w})},a.createElement(s.wn,{title:"\u6309\u7528\u6237\u7b49\u7ea7\u8fc7\u6ee4",hasLogin:t,toolbar:a.createElement(m.MD,{value:u,data:[0,1,2,3,4,5,6].map((e=>({value:e,title:0===e?"\u7981\u7528":`\u5c4f\u853d${e}\u7ea7\u53ca\u4ee5\u4e0b\u7528\u6237`}))),onChange:E})}),a.createElement(s.wn,{title:`\u6309\u7528\u6237\u540d\u79f0\u8fc7\u6ee4 (${b.filter(Boolean).length}/${S})`,description:"\u5355\u4e2a\u5173\u952e\u8bcd\u9650\u5236\u957f\u5ea616\u5b57\u7b26\uff0c\u4ee5\u300c/\u300d\u5f00\u59cb\u548c\u7ed3\u5c3e\u4e14\u4e2d\u95f4\u5305\u542b\u81f3\u5c11\u4e00\u4e2a\u5b57\u7b26\u4f1a\u88ab\u89c6\u4f5c\u6b63\u5219\u8868\u8fbe\u5f0f",hasLogin:t,active:h,toolbar:a.createElement(l.w9,{on:h,onClick:C})},a.createElement(f,{placeholder:"\u8f93\u5165\u5c4f\u853d\u5185\u5bb9",disabledInput:b.filter(Boolean).length>=S,value:b,onChange:O,varification:[{func:(0,d.i)(1,16),message:"\u5185\u5bb9\u957f\u5ea6\u9650\u5236\u4e3a 1~16 \u4e2a\u5b57",state:"error"}]})))},v=(r.Ay.div`

`,(0,r.Ay)(c.A)`
	width: calc(100% - 18px);
	min-height: 50px;
	padding: 8px;
`),y=()=>{const{uploadSettings:e,hasLogin:t,bhAccount:n,bilibiliAccount:i}=(0,a.useContext)(o.T),[r,c]=(0,a.useState)(!1),[u,p]=(0,a.useState)([]),h=!!n&&n["isVIP"],g=(0,a.useCallback)((()=>{(h||!h&&r)&&chrome.runtime.sendMessage({target:"commentFilter",event:"setSetting",on:!r},(()=>{e("commentFilter"),c(!r)}))}),[r,h]),f=(0,a.useCallback)((t=>{if(!r)return;const n=new Set(t.map((e=>e.trim())).filter(Boolean));chrome.runtime.sendMessage({target:"commentFilter",event:"setkeys",type:"comments",keys:[...n]},(()=>{e("commentFilter"),p([...n])}))}),[r]);return(0,a.useEffect)((()=>{chrome.runtime.sendMessage({target:"commentFilter",event:"getState"},(({on:e,comments:t})=>{c(e),p(t)}))}),[]),a.createElement(s.KK,{title:a.createElement(a.Fragment,null,"\u89c6\u9891\u4e0e\u52a8\u6001\u7684\u8bc4\u8bba\u533a\u8fc7\u6ee4\u8bbe\u7f6e"),active:r,toolbar:a.createElement(l.w9,{on:r&&!!h,onClick:g,disable:!i&&!h})},a.createElement(s.wn,{title:a.createElement(a.Fragment,null,"\u6309\u8bc4\u8bba\u5185\u5bb9\u8fc7\u6ee4 (",u.filter(Boolean).length,"/100) ",a.createElement(m.Ap,null)),description:"\u5355\u4e2a\u5173\u952e\u8bcd\u9650\u5236\u957f\u5ea616\u5b57\u7b26\uff0c\u4ee5\u300c/\u300d\u5f00\u59cb\u548c\u7ed3\u5c3e\u4e14\u4e2d\u95f4\u5305\u542b\u81f3\u5c11\u4e00\u4e2a\u5b57\u7b26\u4f1a\u88ab\u89c6\u4f5c\u6b63\u5219\u8868\u8fbe\u5f0f",isVIP:h,needVIP:!0,hasLogin:t},a.createElement(v,{placeholder:"\u8f93\u5165\u5c4f\u853d\u5185\u5bb9",disabledInput:u.filter(Boolean).length>=100,value:u,onChange:f,varification:[{func:(0,d.i)(1,16),message:"\u5185\u5bb9\u957f\u5ea6\u9650\u5236\u4e3a 1~15 \u4e2a\u5b57",state:"error"}]})))},S=r.Ay.div`
`,w=()=>a.createElement(S,null,a.createElement(s.hE,{title:"\u5185\u5bb9\u8fc7\u6ee4",description:a.createElement(a.Fragment,null,"\u5982\u679c\u60a8\u60f3\u8981\u66f4\u591a\u8bbe\u7f6e\u9009\u9879\uff0c\u8bf7",a.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u8054\u7cfbb\u7ad9\u201c\u52a9\u624b\u732b\u201d"))}),a.createElement(b,null),a.createElement(g,null),a.createElement(y,null)),C=(0,i.y)(w)},2054:e=>{var t="\\ud800-\\udfff",n="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",r=n+a+i,o="\\ufe0e\\ufe0f",s="["+t+"]",l="["+r+"]",c="\\ud83c[\\udffb-\\udfff]",d="(?:"+l+"|"+c+")",u="[^"+t+"]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",h="[\\ud800-\\udbff][\\udc00-\\udfff]",g="\\u200d",m=d+"?",f="["+o+"]?",b="(?:"+g+"(?:"+[u,p,h].join("|")+")"+f+m+")*",v=f+m+b,y="(?:"+[u+l+"?",l,p,h,s].join("|")+")",S=RegExp(c+"(?="+c+")|"+y+v,"g");function w(e){return e.match(S)||[]}e.exports=w},2074:(e,t,n)=>{"use strict";n.d(t,{o:()=>a});const a=()=>{try{return"undefined"!==typeof InstallTrigger}catch(e){return!1}}},2128:(e,t,n)=>{"use strict";n.d(t,{Y:()=>d});var a=n(1653),i=n(6540),r=n(5999),o=n(996),s=n(6156);const l=(0,r.Ay)(s.AcghelperTextIcon)`
	width: 120px;
	margin-left: -3px;
	height: auto;
	fill: #fff;
	cursor: pointer;
	
	path {
		fill: #fff;
	}
`,c=r.Ay.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	flex-shrink: 0;
	padding: 10px 0;
	background-color: var(--bilibili-pink);
	color: #fff;
	overflow: hidden;
	
	.inner {
		display: flex;
		align-items: center;
		//max-width: 800px;
		margin: 0 auto;
		padding: 0 12px;
		
		.bilibili-helper-2-icon-cat-tm {
			cursor: pointer;
		}
		
		.bilibili-helper-2-icon-cat {
			float: left;
			color: #fff;
		}
		
		header {
			margin-left: 8px;
			cursor: pointer;
			
			h1 {
				margin: -6px 0 0;
				text-indent: -1px;
				
				.bilibili-helper-2-icon-acghelper {
					line-height: 46px;
					font-weight: normal;
				}
			}
			
			p {
				display: flex;
				margin: -6px 0 0;
				
				a {
					margin-left: 2px;
				}
				
				.version {
					//margin-left: auto;
				}
			}
			
			a {
				color: inherit;
				text-decoration: none;
			}
		}
	}
`;class d extends i.Component{constructor(e){super(e)}state={currentVersionInfo:null};componentDidMount(){chrome.runtime.sendMessage({target:"states",event:"getVersionInfo"},(e=>{e&&this.setState({currentVersionInfo:{...e}})}))}onClickLogo(){chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://acghelper.com/"})}render(){const{currentVersionInfo:e}=this.state;return i.createElement(c,null,i.createElement("div",{className:"inner"},i.createElement(a.In,{icon:"cat-tm",size:55,onClick:this.onClickLogo}),i.createElement("header",{onClick:this.onClickLogo},i.createElement(l,null),i.createElement("p",null,i.createElement("span",{className:"version"},`version ${o.rE}`)))))}}},2315:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var a=n(8087),i=n(6540),r=n(3205),o=n(5999),s=n(5998),l=n(3432),c=n(5423),d=n(8285),u=n(9983),p=n(3376),h=n(9738);const g={ArrowUp:"\u2191",ArrowRight:"\u2192",ArrowDown:"\u2193",ArrowLeft:"\u2190"},m={Control:"\u2303",Shift:"\u21e7",Alt:"\u2325",Command:"\u2318"},f=e=>{if(""===e)return"\u7a7a";const t=e.split("+").map((e=>e.trim()));return t.map((e=>l.U0?g[e]||m[e]||e:g[e]||e)).join(" + ")},b=(0,o.Ay)(d.YW)`
    .range-section {
        .body {
            .current-speed-change-range, .current-jump-change-range {
                display: inline-block;
                width: 100px;
                font-size: 14px;
            }

            .range {
                width: 210px;
                vertical-align: sub;
            }
        }
    }

    .shortcut-item {
        margin-bottom: 12px;

        .checkbox-rect {
            margin-right: 12px;
            display: inline-block;
            vertical-align: text-bottom;
        }
    }

    .shortcut-name {
        font-size: 14px;
        display: inline-block;
        width: 160px;
    }

    .shortcut-value {
        input {
            padding: 2px 4px;
            width: 200px;
            font-family: system-ui;
            text-indent: 2px;

            &.setting {
                color: #999;
            }
        }
    }
`;class v extends i.Component{constructor(e){super(e)}static contextType=u.T;state={shortcutOn:!1,shortcuts:[],screenShotQuickSave:!1,saveAsScreenshot:!0,disableBilibiliDefault:!1,playSpeedChangeRange:.25,useDefaultSpeedChangeRange:!0,playJumpChangeRange:5,autoWidenType:"",autoHideDanmu:!1,setWhiteVIPDanmu:!1,videoWidenOn:!1,autoQualityOn:!1,autoQuality:112,autoSpeedOn:!1,autoSpeed:1,autoPlayMode:!1,autoPlayModeTypes:["p","c","a"],redirectSSR:!1,videoWidenCommentOn:!1};setting=!1;settingKey="";previousSettingKey="";settingValue="";previousSettingValue="";settingDefaultValue="";previousSettingDefaultValue="";componentDidMount(){chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},(({playSpeedChangeRange:e,useDefaultSpeedChangeRange:t,playJumpChangeRange:n,screenShotQuickSave:a,disableBilibiliDefault:i})=>{this.setState({playSpeedChangeRange:e,useDefaultSpeedChangeRange:t,playJumpChangeRange:n,screenShotQuickSave:a,disableBilibiliDefault:i})})),chrome.runtime.sendMessage({target:"videoScreenshot",event:"getSetting"},(({saveAs:e})=>{this.setState({saveAsScreenshot:e})})),chrome.runtime.sendMessage({target:"videoShortcuts",event:"getShortcuts"},(e=>{this.setState({shortcuts:e})})),chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},(e=>{this.setState({shortcutOn:e.on})})),chrome.runtime.sendMessage({target:"videoWiden",event:"getSetting"},(e=>{this.setState({videoWidenOn:e.on,autoWidenType:e.widenType})})),chrome.runtime.sendMessage({target:"videoWidenComment",event:"getSetting"},(e=>{this.setState({videoWidenCommentOn:e.on})})),chrome.runtime.sendMessage({target:"videoHideDanmu",event:"getSetting"},(e=>{this.setState({autoHideDanmu:e.on})})),chrome.runtime.sendMessage({target:"videoDanmu",event:"getSetting"},(e=>{this.setState({setWhiteVIPDanmu:e.setWhiteVIPDanmu})})),chrome.runtime.sendMessage({target:"videoAutoQuality",event:"getSetting"},(e=>{this.setState({autoQualityOn:e.on,autoQuality:e.quality})})),chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"getSetting"},(e=>{this.setState({autoSpeedOn:e.on,autoSpeed:e.speed})})),chrome.runtime.sendMessage({target:"videoAutoPlayMode",event:"getSetting"},(e=>{this.setState({autoPlayMode:e.on,autoPlayModeTypes:e.types})})),chrome.runtime.sendMessage({target:"redirectSSR",event:"getSetting"},(({on:e})=>{this.setState({redirectSSR:e})}))}handleOnClickAutoHideDanmu=()=>{chrome.runtime.sendMessage({target:"videoHideDanmu",event:"setSetting",on:!this.state.autoHideDanmu},(()=>{this.context.uploadSettings("videoHideDanmu"),this.setState({autoHideDanmu:!this.state.autoHideDanmu})}))};handleOnClickAutoPlayMode=()=>{chrome.runtime.sendMessage({target:"videoAutoPlayMode",event:"setSetting",on:!this.state.autoPlayMode},(()=>{const e=new Set(this.state.autoPlayModeTypes);0===e.size&&chrome.runtime.sendMessage({target:"videoAutoPlayMode",event:"setSetting",types:["c","p","a"]},(()=>{this.context.uploadSettings("videoAutoPlayMode"),this.setState({autoPlayModeTypes:["c","p","a"]})})),this.context.uploadSettings("videoAutoPlayMode"),this.setState({autoPlayMode:!this.state.autoPlayMode})}))};handleOnClickAutoPlayModeTypes=(e,t)=>{const n=new Set(this.state.autoPlayModeTypes);if(n.has(e)&&!t)n.delete(e);else{if(n.has(e)||!t)return;n.add(e)}const a=Array.from(n);chrome.runtime.sendMessage({target:"videoAutoPlayMode",event:"setSetting",types:a},(()=>{this.context.uploadSettings("videoAutoPlayMode"),this.setState({autoPlayModeTypes:a})})),0===a.length?chrome.runtime.sendMessage({target:"videoAutoPlayMode",event:"setSetting",on:!1},(()=>{this.context.uploadSettings("videoAutoPlayMode"),this.setState({autoPlayMode:!1})})):a.length>0&&!this.state.autoPlayMode&&chrome.runtime.sendMessage({target:"videoAutoPlayMode",event:"setSetting",on:!0},(()=>{this.context.uploadSettings("videoAutoPlayMode"),this.setState({autoPlayMode:!0})}))};handleOnClickVideoWiden=()=>{const{videoWidenOn:e}=this.state;chrome.runtime.sendMessage({target:"videoWiden",event:"setSetting",on:!e},(()=>{this.context.uploadSettings("videoWiden"),this.setState({videoWidenOn:!e})}))};handleOnClickVideoWidenComment=()=>{const{videoWidenCommentOn:e}=this.state;chrome.runtime.sendMessage({target:"videoWidenComment",event:"setSetting",on:!e},(()=>{this.context.uploadSettings("videoWidenvideoWidenComment"),this.setState({videoWidenCommentOn:!e})}))};handleOnClickWidenType=e=>{const t=e.target.value,{autoWidenType:n}=this.state;n!==t&&chrome.runtime.sendMessage({target:"videoWiden",event:"setSetting",on:""!==t,widenType:t},(()=>{this.context.uploadSettings("videoWiden"),this.setState({autoWidenType:t})}))};handleOnToggleShortcuts=()=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",on:!this.state.shortcutOn},(e=>{e&&(this.context.uploadSettings("videoShortcuts"),this.setState({shortcutOn:!this.state.shortcutOn}))}))};handleOnRedirectSSR=()=>{chrome.runtime.sendMessage({target:"redirectSSR",event:"setSetting",on:!this.state.redirectSSR},(e=>{e&&(this.context.uploadSettings("redirectSSR"),this.setState({redirectSSR:!this.state.redirectSSR}))}))};handleOnMouseDownShortcutInput=e=>{e.persist();const{bhAccount:t}=this.context;if(!t||!t.isVIP)return this.context.sendPaymentMessage();e.target.classList.add("setting"),this.settingKey&&(this.previousSettingKey=this.settingKey,this.previousSettingValue=this.settingValue,this.previousSettingDefaultValue=this.settingDefaultValue),this.settingKey=e.target.dataset.key,this.settingValue=e.target.value,this.settingDefaultValue=e.target.value};handleOnBlurShortcutInput=e=>{e.persist(),e.target.classList.remove("setting");let t,n,a=!1;this.previousSettingDefaultValue!==this.previousSettingValue&&this.previousSettingKey?(t=this.previousSettingKey,n=this.previousSettingValue,a=!0):this.settingDefaultValue!==this.settingValue&&this.settingKey&&(t=this.settingKey,n=this.settingValue),void 0!==t&&void 0!==n&&chrome.runtime.sendMessage({target:"videoShortcuts",event:"setShortcut",key:t,value:n},(()=>{this.previousSettingKey="",this.previousSettingValue="",this.previousSettingDefaultValue="",a||(this.settingKey="",this.settingValue="",this.settingDefaultValue=""),this.context.uploadSettings("videoShortcuts")}))};handleOnKeyDownShortcutInput=e=>{e.persist();const t=(0,c.l)(e.nativeEvent.code,e.key,e.ctrlKey,e.shiftKey,e.metaKey,e.altKey);if(t){const{shortcuts:e}=this.state,n=e.find((([e])=>this.settingKey===e));this.settingDefaultValue=n[1][1],n&&("backspace"===t?(this.settingValue="",n[1][1]=""):n[1][1]!==t&&(this.settingValue=t,n[1][1]=t),this.setState({shortcuts:e}))}};handleOnClickShortcutCheckbox=(e,t)=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"setShortcut",key:e,on:!t},(()=>{const{shortcuts:n}=this.state,a=n.find((([t])=>e===t));a[1][2]=!t,this.setState({shortcuts:n}),this.context.uploadSettings("videoShortcuts")}))};handleOnSetPlaySpeedRange=e=>{e.persist();const t=+e.target.value;this.setState({playSpeedChangeRange:t})};handleOnMouseUpPlaySpeedRange=e=>{e.persist();const{bhAccount:t={}}=this.context,n=+e.target.value;chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",playSpeedChangeRange:n},(()=>{this.context.uploadSettings("videoShortcuts")}))};handleOnClickUseDefaultPlaySpeedChangeRange=()=>{const e=this.state.useDefaultSpeedChangeRange,{bhAccount:t={}}=this.context,n=!!t&&t["isVIP"];if(!e&&!n)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",useDefaultSpeedChangeRange:!e},(()=>{this.context.uploadSettings("videoShortcuts"),this.setState({useDefaultSpeedChangeRange:!e})}))};handleOnSetPlayJumpChangeRange=e=>{e.persist();const t=+e.target.value;this.setState({playJumpChangeRange:t})};handleOnMouseUpPlayJumpChangeRange=e=>{e.persist();const t=+e.target.value;chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",playJumpChangeRange:t},(()=>{this.context.uploadSettings("videoShortcuts")}))};handleOnClickChangeAutoQuality=e=>{const t=e.target.value;chrome.runtime.sendMessage({target:"videoAutoQuality",event:"setSetting",on:""!==t,quality:+t},(()=>{this.context.uploadSettings("videoAutoQuality"),this.setState({autoQuality:+t})}))};handleOnClickAutoPlaySpeed=()=>{chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"setSetting",on:!this.state.autoSpeedOn},(()=>{this.context.uploadSettings("videoAutoPlaySpeed"),this.setState({autoSpeedOn:!this.state.autoSpeedOn})}))};handleOnSetWhiteVIPDanmu=()=>{chrome.runtime.sendMessage({target:"videoDanmu",event:"setSetting",setWhiteVIPDanmu:!this.state.setWhiteVIPDanmu},(()=>{this.context.uploadSettings("videoDanmu"),this.setState({setWhiteVIPDanmu:!this.state.setWhiteVIPDanmu})}))};handleOnSetAutoPlaySpeedRange=e=>{e.persist();const t=+e.target.value;this.setState({autoSpeed:t})};handleOnMouseUpAutoPlaySpeedRange=e=>{e.persist();const t=+e.target.value;chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"setSetting",speed:t},(()=>{this.context.uploadSettings("videoAutoPlaySpeed")}))};handleOnClickResetShortcuts=()=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"reset"},(()=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getShortcuts"},(e=>{this.setState({shortcuts:e},(()=>{this.context.uploadSettings("videoShortcuts")}))}))}))};handleOnClickToggleScreenShotQuickSave=()=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",screenShotQuickSave:!this.state.screenShotQuickSave},(()=>{this.setState({screenShotQuickSave:!this.state.screenShotQuickSave},(()=>{this.context.uploadSettings("videoShortcuts")}))}))};handleOnClickToggleScreenShotSaveAs=()=>{chrome.runtime.sendMessage({target:"videoScreenshot",event:"setSetting",saveAs:!this.state.saveAsScreenshot},(()=>{this.setState({saveAsScreenshot:!this.state.saveAsScreenshot},(()=>{this.context.uploadSettings("videoScreenshot")}))}))};handleOnClickToggleDisableBilibiliDefault=()=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",disableBilibiliDefault:!this.state.disableBilibiliDefault},(()=>{this.setState({disableBilibiliDefault:!this.state.disableBilibiliDefault},(()=>{this.context.uploadSettings("videoShortcuts")}))}))};handleOnClickGoToShortcut=()=>{const e=document.getElementById("shortcut");e.scrollIntoView({alignToTop:!0,behavior:"smooth"})};render(){const{autoPlayMode:e,autoPlayModeTypes:t,redirectSSR:n,shortcuts:r,shortcutOn:o,screenShotQuickSave:l,saveAsScreenshot:c,disableBilibiliDefault:u,playSpeedChangeRange:g,useDefaultSpeedChangeRange:m,playJumpChangeRange:v,autoWidenType:y,videoWidenCommentOn:S,autoHideDanmu:w,autoQuality:C,autoSpeedOn:E,autoSpeed:O,setWhiteVIPDanmu:x}=this.state,{hasLogin:k,bilibiliAccount:M}=this.context,{bhAccount:T={}}=this.context,D=!!T&&T["isVIP"];return i.createElement(b,null,i.createElement(d.hE,{title:"\u4e3b\u7ad9\u529f\u80fd"}),i.createElement(d.KK,{title:"\u89c6\u9891\u64ad\u653e\u9875\u9762"},i.createElement(d.wn,{title:"\u9ed8\u8ba4\u5173\u95ed\u5f39\u5e55",active:w,toolbar:i.createElement(a.w9,{onClick:this.handleOnClickAutoHideDanmu,on:w})}),i.createElement(d.wn,{title:"\u667a\u80fd\u8fde\u64ad",description:"\u5408\u96c6\u4e0e\u5206P\u9875\u9762\u81ea\u52a8\u5f00\u542f\u8fde\u64ad\uff0c\u5176\u4ed6\u9875\u9762\u80fd\u81ea\u52a8\u5173\u95ed\u8fde\u64ad",active:e,toolbar:i.createElement(a.w9,{onClick:this.handleOnClickAutoPlayMode,on:e}),canCollapsed:!0},i.createElement(p.x3,{data:["c","p","a"].map((e=>({key:e,title:(0,h.__)("videoAutoPlayMode_"+e),on:t.includes(e)}))),onClick:this.handleOnClickAutoPlayModeTypes})),i.createElement(d.wn,{title:"\u91cd\u7f6e\u5927\u4f1a\u5458\u5f39\u5e55\u989c\u8272",description:"\u5c06\u4e3b\u7ad9\u5927\u4f1a\u5458\u5f39\u5e55\u989c\u8272\u91cd\u7f6e\u4e3a\u767d\u8272",active:x,toolbar:i.createElement(a.w9,{onClick:this.handleOnSetWhiteVIPDanmu,on:x})}),i.createElement(d.wn,{title:"\u81ea\u52a8\u91cd\u5b9a\u5411SSR\u9875\u9762",description:"\u5c06\u5f62\u5982\u300c/s/video/*\u300d\u7684\u94fe\u63a5\u91cd\u5b9a\u5411\u5230\u300c/video/* \u300d",active:n,toolbar:i.createElement(a.w9,{onClick:this.handleOnRedirectSSR,on:n})}),i.createElement(d.wn,{className:"range-section",title:"\u9ed8\u8ba4\u64ad\u653e\u901f\u5ea6",description:"\u9ed8\u8ba41.0\uff0c\u8303\u56f4\uff1a0.5 ~ 4.0",toolbar:i.createElement(a.w9,{onClick:this.handleOnClickAutoPlaySpeed,on:E})},E?i.createElement("div",null,i.createElement("span",{className:"current-speed-change-range"},O),i.createElement(a.Q6,{value:O,max:4,min:.5,step:.05,disabled:!E,onChange:this.handleOnSetAutoPlaySpeedRange,onMouseUp:this.handleOnMouseUpAutoPlaySpeedRange})):null),i.createElement(d.wn,{title:"\u9ed8\u8ba4\u81ea\u52a8\u5bbd\u5c4f",toolbar:i.createElement(a.MD,{value:y,data:[{value:"",title:"\u7981\u7528"},{value:"wide",title:"\u5bbd\u5c4f"},{value:"web",title:"\u7f51\u9875\u5168\u5c4f"}],onChange:this.handleOnClickWidenType})}),i.createElement(d.wn,{title:"\u7f51\u9875\u5168\u5c4f\u6269\u5c55",description:"\u89c6\u9891\u7f51\u9875\u5168\u5c4f\u663e\u793a\u65f6\uff0c\u5728\u53f3\u4fa7\u4ee530%\u5bbd\u5ea6\u663e\u793a\u8bc4\u8bba\u533a\u5185\u5bb9",toolbar:i.createElement(a.w9,{onClick:this.handleOnClickVideoWidenComment,on:S})},i.createElement(a.ck,{title:"\u81ea\u5b9a\u4e49\u5feb\u6377\u952e",operation:i.createElement(a.sL,{className:"border",onClick:this.handleOnClickGoToShortcut},"\u524d\u5f80\u8bbe\u7f6e")})),i.createElement(d.wn,{title:"\u9ed8\u8ba4\u753b\u8d28",description:"\u5982\u679c\u89c6\u9891\u4e0d\u5b58\u5728\u6240\u9009\u753b\u8d28\uff0c\u5219\u4f1a\u9010\u4e2a\u964d\u7ea7\u9002\u914d\u3002\u5982\u679c\u9002\u914d\u5230\u5927\u4f1a\u5458\u753b\u8d28\u4f46\u7528\u6237\u4e0d\u662f\u5927\u4f1a\u5458\u5219\u4f1a\u7ec8\u6b62\u9002\u914d",toolbar:i.createElement(a.MD,{value:C,data:[{value:"",title:"\u7981\u7528"},...s.tn.map((e=>({value:e,title:s.J3[e]+(e>80?" (\u5927\u4f1a\u5458)":"")})))],onChange:this.handleOnClickChangeAutoQuality})})),i.createElement(d.KK,{title:"\u5feb\u6377\u952e"},i.createElement(d.wn,{className:"range-section",title:i.createElement(i.Fragment,null,"\u64ad\u653e\u901f\u5ea6\u8c03\u6574\u5e45\u5ea6 (0.05-0.5x) ",i.createElement(a.Ap,null)),description:"\u9ed8\u8ba40.25x\u3002\u4e0a\u9650\u6700\u5927\u4e3a4",hasLogin:k,active:!m,toolbar:i.createElement(a.w9,{onClick:this.handleOnClickUseDefaultPlaySpeedChangeRange,on:!!D&&!m})},m?null:i.createElement("div",null,i.createElement("span",{className:"current-speed-change-range"},k?g:.25),i.createElement(a.Q6,{value:k?g:.25,max:.5,min:.05,step:.05,onChange:this.handleOnSetPlaySpeedRange,onMouseUp:this.handleOnMouseUpPlaySpeedRange}))),i.createElement(d.wn,{className:"range-section",title:i.createElement(i.Fragment,null,"\u5feb\u8fdb\u5feb\u9000\u5e45\u5ea6 (1-120\u79d2) ",i.createElement(a.Ap,null)),description:"\u9ed8\u8ba45\u79d2",hasLogin:k},i.createElement("div",null,i.createElement("span",{className:"current-jump-change-range"},k?v:5),i.createElement(a.Q6,{value:k?v:5,max:120,min:1,step:1,onChange:this.handleOnSetPlayJumpChangeRange,onMouseUp:this.handleOnMouseUpPlayJumpChangeRange}))),i.createElement(d.wn,{title:"\u622a\u5c4f\u5feb\u6377\u4fdd\u5b58",description:"\u5f00\u542f\u540e\u4f7f\u7528\u5feb\u6377\u952e\u5c06\u300c\u590d\u5236\u5230\u526a\u8d34\u677f\u300d\u6539\u4e3a\u300c\u53e6\u5b58\u4e3a\u6587\u4ef6\u300d",active:l,toolbar:i.createElement(a.w9,{onClick:this.handleOnClickToggleScreenShotQuickSave,on:l})}),i.createElement(d.wn,{title:"\u622a\u5c4f\u5feb\u6377\u4fdd\u5b58\u53e6\u5b58\u4e3a",description:"\u5f00\u542f\u540e\u622a\u5c4f\u5feb\u6377\u4fdd\u5b58\u4f1a\u5f39\u51fa\u53e6\u5b58\u4e3a\u5f39\u7a97\uff0c\u9700\u8981\u540c\u65f6\u5173\u95ed\u6d4f\u89c8\u5668\u6bcf\u6b21\u4e0b\u8f7d\u8be2\u95ee\u9009\u9879",active:c,toolbar:i.createElement(a.w9,{onClick:this.handleOnClickToggleScreenShotSaveAs,on:c})}),i.createElement(d.wn,{title:i.createElement(i.Fragment,null,"\u5feb\u6377\u952e\u5217\u8868 ",i.createElement(a.Ap,null)),hasLogin:k,active:o,toolbar:i.createElement(a.w9,{disable:!k,onClick:this.handleOnToggleShortcuts,on:!!k&&o}),canCollapsed:!0,helperArea:i.createElement(i.Fragment,null,"\u4ec5\u300c\u4fee\u6539\u5feb\u6377\u952e\u300d\u4e3a\u4ed8\u8d39\u529f\u80fd\uff0c\u300c\u5feb\u6377\u952e\u300d\u7684\u4f7f\u7528\u4e3a\u514d\u8d39\u529f\u80fd",i.createElement("br",null),i.createElement("br",null),"\u90e8\u5206\u5feb\u6377\u952e\u4e0e\u5b98\u65b9\u64ad\u653e\u5668\u4e2d\u7684\u91cd\u5408",i.createElement("br",null),i.createElement("br",null),i.createElement("b",null,"\u6309\u9000\u683c\u952e\u6e05\u9664\u8bbe\u5b9a"),i.createElement("br",null),i.createElement("br",null),"\u70b9\u51fb\u7f16\u8f91\u6846\u540e\u6309\u4e0b\u76f8\u5173\u5feb\u6377\u952e\u8fdb\u884c\u8bbe\u7f6e\uff0c\u652f\u6301\u7ec4\u5408\u952e",i.createElement("br",null),"\uff08\u5373\u7f16\u8f91\u6846\u5185\u5bb9\u4f1a\u53d8\u6210\u7070\u8272\uff09",i.createElement("br",null),i.createElement("br",null),"\u8bbe\u7f6e\u5b8c\u540e\u9f20\u6807\u70b9\u51fb\u9875\u9762\u7a7a\u767d\u5904\u540e\u8bbe\u7f6e\u751f\u6548",i.createElement("br",null),"\uff08\u5373\u7f16\u8f91\u6846\u5185\u5bb9\u4f1a\u53d8\u56de\u9ed1\u8272\uff09",i.createElement("br",null),i.createElement("br",null),i.createElement(a.sL,{className:"primary",onClick:this.handleOnClickResetShortcuts},"\u91cd\u7f6e\u5feb\u6377\u952e\u9ed8\u8ba4\u6309\u952e"))},i.createElement("div",{id:"shortcut",className:"list"},r&&r.map((([e,[t,n,r]])=>i.createElement("div",{key:e,className:"shortcut-item"},i.createElement(a.un,{active:r,onClick:()=>this.handleOnClickShortcutCheckbox(e,r)}),i.createElement("span",{className:"shortcut-name"},t),i.createElement("span",{className:"shortcut-value"},i.createElement(a.pd,{readOnly:!0,"data-key":e,className:"shortcut",onKeyDown:this.handleOnKeyDownShortcutInput,onBlur:this.handleOnBlurShortcutInput,onMouseDown:this.handleOnMouseDownShortcutInput,value:f(n)})))))))))}}const y=(0,r.y)(v)},2421:(e,t,n)=>{"use strict";n.d(t,{l:()=>a});const a=()=>{if(self?.external&&self?.external.GetRunPath&&self?.external.GetSID){let e=external.GetRunPath(external.GetSID(window));return e=e.toLowerCase(),e.indexOf("360se.exe")>-1||e.indexOf("360ent")>-1}return!1}},2507:(e,t,n)=>{var a=n(8754),i=n(9698),r=n(3912),o=n(3222);function s(e){return function(t){t=o(t);var n=i(t)?r(t):void 0,s=n?n[0]:t.charAt(0),l=n?a(n,1).join(""):t.slice(1);return s[e]()+l}}e.exports=s},2532:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var a=n(8087),i=n(6540),r=n(3205),o=n(5999),s=n(3240),l=n(8285),c=n(9983),d=n(4707);const u=o.Ay.div`

`;class p extends i.Component{constructor(e){super(e),this.state={autoMedal:!1,silver2coin:!0,pushSilver2CoinNotification:!0,chatFilter:!0,chatFilterOptions:{},liveChatModeDefaultOpen:!1,liveAutoSetWidenOn:!1,liveAutoSetWidenType:"default",liveAutoQualityOn:!1,liveAutoQuality:"\u84dd\u5149",liveAutoQualitySkipHVC:!1,incognito:!1,defaultIncognito:!1,liveAutoRewrite:!1,screenShotQuickSave:!1,showEmojiButton:!1}}static contextType=c.T;componentDidMount(){chrome.runtime.sendMessage({target:"autoMedal",event:"getSetting"},(({on:e})=>{this.setState({autoMedal:e})})),chrome.runtime.sendMessage({target:"silver2coin",event:"getSetting"},(({on:e,pushNotification:t})=>{this.setState({silver2coin:e,pushSilver2CoinNotification:t})})),chrome.runtime.sendMessage({target:"chatFilter",event:"getSetting"},(({on:e,options:t})=>{this.setState({chatFilter:e,chatFilterOptions:t})})),chrome.runtime.sendMessage({target:"liveChatMode",event:"getSetting"},(({defaultOpen:e})=>{this.setState({liveChatModeDefaultOpen:e})})),chrome.runtime.sendMessage({target:"liveAutoWiden",event:"getSetting"},(({on:e,widenType:t})=>{this.setState({liveAutoSetWidenOn:e,liveAutoSetWidenType:t})})),chrome.runtime.sendMessage({target:"liveAutoQuality",event:"getSetting"},(({on:e,quality:t,skipHVC:n})=>{this.setState({liveAutoQualityOn:e,liveAutoQuality:t,liveAutoQualitySkipHVC:n})})),chrome.runtime.sendMessage({target:"liveAutoRewrite",event:"getSetting"},(({on:e})=>{this.setState({liveAutoRewrite:e})})),chrome.runtime.sendMessage({target:"incognito",event:"getSetting"},(({on:e,defaultIncognito:t})=>{this.setState({incognito:e,defaultIncognito:t})})),chrome.runtime.sendMessage({target:"liveShortcuts",event:"getSetting"},(({screenShotQuickSave:e})=>{this.setState({screenShotQuickSave:e})})),chrome.runtime.sendMessage({target:"liveEmoji",event:"getSetting"},(({on:e})=>{this.setState({showEmojiButton:e})}))}handleOnToggleIncognito=()=>{chrome.runtime.sendMessage({target:"incognito",event:"setSetting",on:!this.state.incognito},(()=>{this.context.uploadSettings("incognito"),this.setState({incognito:!this.state.incognito})}))};handleOnToggleDefaultIncognito=()=>{chrome.runtime.sendMessage({target:"incognito",event:"setSetting",defaultIncognito:!this.state.defaultIncognito},(()=>{this.context.uploadSettings("incognito"),this.setState({defaultIncognito:!this.state.defaultIncognito})}))};handleOnClearIncognito=()=>{chrome.runtime.sendMessage({target:"incognito",event:"clearAll"},(()=>{this.context.uploadSettings("incognito"),a.QB.info("\u6e05\u9664\u6240\u6709\u76f4\u64ad\u95f4\u9690\u8eab\u8bbe\u7f6e\u6210\u529f\uff0c\u76f4\u64ad\u95f4\u5237\u65b0\u540e\u9000\u51fa\u9690\u8eab\u54e6",5e3)}))};handleOnToggleAutoMedal=()=>{chrome.runtime.sendMessage({target:"autoMedal",event:"setSetting",on:!this.state.autoMedal},(()=>{this.context.uploadSettings("autoMedal"),this.setState({autoMedal:!this.state.autoMedal})}))};handleOnToggleAutoRewrite=()=>{chrome.runtime.sendMessage({target:"liveAutoRewrite",event:"setSetting",on:!this.state.liveAutoRewrite},(()=>{this.context.uploadSettings("liveAutoRewrite"),this.setState({liveAutoRewrite:!this.state.liveAutoRewrite})}))};handleOnToggleSilver2Coin=()=>{chrome.runtime.sendMessage({target:"silver2coin",event:"setSetting",on:!this.state.silver2coin},(()=>{this.context.uploadSettings("silver2coin"),this.setState({silver2coin:!this.state.silver2coin})}))};handleOnToggleLiveDefaultOpen=()=>{chrome.runtime.sendMessage({target:"liveChatMode",event:"setSetting",defaultOpen:!this.state.liveChatModeDefaultOpen},(()=>{this.context.uploadSettings("liveChatMode"),this.setState({liveChatModeDefaultOpen:!this.state.liveChatModeDefaultOpen})}))};handleOnToggleSilver2CoinNotification=()=>{chrome.runtime.sendMessage({target:"silver2coin",event:"setSetting",pushNotification:!this.state.pushSilver2CoinNotification},(()=>{this.context.uploadSettings("silver2coin"),this.setState({pushSilver2CoinNotification:!this.state.pushSilver2CoinNotification})}))};handleOnToggleChatFilterItem=(e,t)=>{const n=this.state.chatFilterOptions;n[e]=t,chrome.runtime.sendMessage({target:"chatFilter",event:"setSetting",options:n},(()=>{this.context.uploadSettings("chatFilter"),this.setState({chatFilterOptions:n})}))};handleOnClickLiveAutoWebWiden=()=>{const{liveAutoSetWidenOn:e}=this.state;chrome.runtime.sendMessage({target:"liveAutoWiden",event:"setSetting",on:!e,widenType:"web"},(()=>{this.context.uploadSettings("liveAutoWiden"),this.setState({liveAutoSetWidenOn:!e})}))};handleOnClickLiveAutoQualitySkipHVC=()=>{const{liveAutoQualitySkipHVC:e}=this.state;chrome.runtime.sendMessage({target:"liveAutoQuality",event:"setSetting",skipHVC:!e},(()=>{this.context.uploadSettings("liveAutoQuality"),this.setState({liveAutoQualitySkipHVC:!e})}))};handleOnClickQualityType=e=>{const t=e.target.value;chrome.runtime.sendMessage({target:"liveAutoQuality",event:"setSetting",on:""!==t,quality:t},(()=>{this.context.uploadSettings("liveAutoQuality"),this.setState({liveAutoQuality:t})}))};handleOnClickToggletScreenShotQuickSave=()=>{chrome.runtime.sendMessage({target:"liveShortcuts",event:"setSetting",screenShotQuickSave:!this.state.screenShotQuickSave},(()=>{this.setState({screenShotQuickSave:!this.state.screenShotQuickSave},(()=>{this.context.uploadSettings("liveShortcuts")}))}))};handleOnClickToggleShowEmojiButton=()=>{chrome.runtime.sendMessage({target:"liveEmoji",event:"setSetting",on:!this.state.showEmojiButton},(()=>{this.setState({showEmojiButton:!this.state.showEmojiButton},(()=>{this.context.uploadSettings("liveEmoji")}))}))};render(){const{hasLogin:e,bhAccount:t,bilibiliAccount:n}=this.context,{autoMedal:r,liveAutoSetWidenOn:o,liveAutoQuality:c,liveAutoQualitySkipHVC:p,incognito:h,screenShotQuickSave:g,showEmojiButton:m}=this.state,f=!!t&&t["isVIP"];return i.createElement(u,null,i.createElement(l.hE,{title:"\u76f4\u64ad\u533a\u529f\u80fd\u8bbe\u7f6e"}),i.createElement(l.KK,{title:"\u81ea\u52a8/\u9ed8\u8ba4\u9009\u9879\u8bbe\u7f6e"},i.createElement(l.wn,{title:"\u9ed8\u8ba4\u91cd\u5b9a\u5411\u81f3\u666e\u901a\u9875\u9762",toolbar:i.createElement(a.w9,{onClick:this.handleOnToggleAutoRewrite,on:this.state.liveAutoRewrite})}),i.createElement(l.wn,{title:"\u9ed8\u8ba4\u7f51\u9875\u5168\u5c4f",active:o,toolbar:i.createElement(a.w9,{onClick:this.handleOnClickLiveAutoWebWiden,on:o})}),i.createElement(l.wn,{title:"\u9ed8\u8ba4\u753b\u8d28",description:"\u8bf7\u6ce8\u610f\uff0cPRO\u6e05\u6670\u5ea6\u4e0b\u65e0\u6cd5\u4f7f\u7528\u76f4\u64ad\u622a\u5c4f\u7b49\u529f\u80fd",toolbar:i.createElement(a.MD,{value:c,data:[{value:"",title:"\u7981\u7528"},...d.P7.map((e=>({value:e,title:e})))],onChange:this.handleOnClickQualityType})}),i.createElement(l.wn,{title:"\u9ed8\u8ba4\u753b\u8d28-\u8df3\u8fc7PRO(\u8f6f\u4ef6\u89e3\u7801)\u9009\u9879",description:"PRO\u753b\u8d28\u4e13\u4e3a\u65e0\u6cd5\u786c\u4ef6\u52a0\u901f\u7684\u7528\u6237\u63d0\u4f9b\u3002\u5982\u679c\u60a8\u53ef\u4ee5\u76f4\u63a5\u786c\u4ef6\u89e3\u7801\uff0c\u8bf7\u6253\u5f00\u6b64\u9009\u9879\uff0c\u4ee5\u8282\u7701\u6027\u80fd\u83b7\u5f97\u6700\u4f73\u4f53\u9a8c",active:p,toolbar:i.createElement(a.w9,{onClick:this.handleOnClickLiveAutoQualitySkipHVC,on:p})}),i.createElement(l.wn,{title:"\u9ed8\u8ba4\u5f00\u542f\u7248\u804a\u6a21\u5f0f",toolbar:i.createElement(a.w9,{onClick:this.handleOnToggleLiveDefaultOpen,on:this.state.liveChatModeDefaultOpen})}),i.createElement(l.wn,{title:"\u81ea\u52a8\u66f4\u6362\u7c89\u4e1d\u52cb\u7ae0",description:"\u767b\u5f55\u540e\u53ef\u7528\u3002 \u5982\u679c\u672a\u5339\u914d\u5230\u7c89\u4e1d\u52cb\u7ae0\u5219\u81ea\u52a8\u8131\u5378\u6389",toolbar:i.createElement(a.w9,{disable:!n,onClick:this.handleOnToggleAutoMedal,on:r}),active:r&&!!n}),i.createElement(l.wn,{title:"\u81ea\u52a8\u94f6\u74dc\u5b50\u5151\u6362\u786c\u5e01",toolbar:i.createElement(a.w9,{disable:!n,onClick:this.handleOnToggleSilver2Coin,on:this.state.silver2coin}),active:this.state.silver2coin&&!!n},i.createElement(a.ck,{title:"\u63a8\u9001\u901a\u77e5",onClick:this.handleOnToggleSilver2CoinNotification,operation:i.createElement(a.w9,{on:this.state.pushSilver2CoinNotification})}))),i.createElement(l.KK,{title:"\u5176\u4ed6"},i.createElement(l.wn,{title:"\u622a\u5c4f\u5feb\u6377\u952e\u300cs\u300d\u4fdd\u5b58",description:"\u5f00\u542f\u540e\u4f7f\u7528\u5feb\u6377\u952e\u5c06\u300c\u590d\u5236\u5230\u526a\u8d34\u677f\u300d\u6539\u4e3a\u300c\u53e6\u5b58\u4e3a\u6587\u4ef6\u300d",active:g,toolbar:i.createElement(a.w9,{onClick:this.handleOnClickToggletScreenShotQuickSave,on:g})}),i.createElement(l.wn,{title:"\u663e\u793a\u8868\u60c5\u6309\u94ae",toolbar:i.createElement(a.w9,{onClick:this.handleOnClickToggleShowEmojiButton,on:m})}),i.createElement(l.wn,{title:i.createElement(i.Fragment,null,"\u76f4\u64ad\u95f4\u9690\u8eab\u8fdb\u573a ",i.createElement(a.Ap,null)),description:"\u8bf7\u6ce8\u610f\u542f\u7528\u8be5\u529f\u80fd\u4f1a\u5bfc\u81f4\u623f\u7ba1\u7b49\u6743\u9650\u4e22\u5931",isVIP:f,needVIP:!0,hasLogin:e,toolbar:i.createElement(a.w9,{disable:!n&&!f,on:h&&!!f,onClick:this.handleOnToggleIncognito}),active:h&&!!n&&!!f,helperArea:i.createElement(i.Fragment,null,"\u7531\u4e8e\u9690\u85cf\u4e86\u8eab\u4efd\uff0c\u8be5\u529f\u80fd\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u4f7f\u7528\u76f4\u64ad\u95f4\u5f39\u5e55\u3001\u9001\u793c\u7b49\u529f\u80fd\uff0c\u4e5f\u5305\u542b\u623f\u7ba1\u7ba1\u7406\u529f\u80fd\u7b49\u3002",i.createElement("br",null),i.createElement("br",null),i.createElement(a.sL,{className:"primary",onClick:this.handleOnClearIncognito},"\u6e05\u9664\u6240\u6709\u76f4\u64ad\u95f4\u9690\u8eab\u8bbe\u7f6e"))},i.createElement(a.ck,{title:"\u9ed8\u8ba4\u9690\u8eab",operation:i.createElement(a.w9,{on:this.state.defaultIncognito,onClick:this.handleOnToggleDefaultIncognito})})),i.createElement(l.wn,{title:"\u53bb\u6c61\u7c89 - \u804a\u5929\u4fe1\u606f\u5c4f\u853d\u8bbe\u7f6e",description:"\u5168\u5c40\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u8bbe\u7f6e\u3002\u8fdb\u5165\u6bcf\u4e2a\u76f4\u64ad\u95f4\u540e\u53ef\u4ee5\u518d\u5355\u72ec\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5355\u72ec\u8bbe\u7f6e\u4f1a\u8986\u76d6\u9ed8\u8ba4\u8bbe\u7f6e",canCollapsed:!0,helperArea:i.createElement(i.Fragment,null,i.createElement("b",null,"\u7528\u6237\u7b49\u7ea7"),"\u8fc7\u6ee4\u9879\u4ec5\u5728",i.createElement("b",null,"\u76f4\u64ad\u56de\u770b"),"\u9875\u9762\u6709\u6548",i.createElement("br",null))},i.createElement(a.x3,{data:Object.keys(this.state.chatFilterOptions).map((e=>({key:e,title:(0,s.__)("chatFilter_options_"+e),on:this.state.chatFilterOptions[e]}))),onClick:this.handleOnToggleChatFilterItem}))))}}const h=(0,r.y)(p)},2624:(e,t,n)=>{"use strict";n.d(t,{n:()=>a});const a=10},2785:(e,t,n)=>{"use strict";n.d(t,{w4:()=>a.w});n(3436);var a=n(1104)},2829:(e,t,n)=>{"use strict";n.a(e,(async(e,a)=>{try{n.d(t,{A:()=>E});var i=n(8087),r=n(1653),o=n(4707),s=n(5093),l=n.n(s),c=(n(4053),n(6540)),d=n(8612),u=n(3205),p=n(5999),h=n(3240),g=n(8285),m=n(9983);const e=(0,h.oq)(),f=(0,p.Ay)(g.YW)`
	.modal {
		overflow: hidden;
	}
	
	.show-announcement-btn {
		margin-left: 20px;
		vertical-align: bottom;
		font-size: 14px;
		
		.button-view {
			padding: 0 10px;
		}
	}
	
	.reset-list {
		display: flex;
		flex-direction: column;
		
		.button {
			margin: 3px;
			//padding: 0 12px;
			max-width: 200px;
			min-width: fit-content;
		}
	}
`,b=(p.Ay.div`
	margin-top: 24px;
	
	.report-btn {
		margin: 0 4px;
	}
`,p.Ay.div`
	display: flex;
	align-items: center;
	//padding: 12px;
	//background-color: var(--google-grey-50);
	border-radius: 4px;
	//box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0px 2.9px rgba(0, 0, 0, 0.11);
	
	.avatar-wrapper {
		position: relative;
		
		.avatar {
			margin-right: 12px;
			width: 52px;
			height: 52px;
			border-radius: 50px;
		}
	}
	
	.info {
		h4, p {
			margin: 0;
		}
		
		h4 {
			margin-bottom: 4px;
			font-size: 16px;
		}
		
		p {
			font-size: 12px;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
		
		.expire-date {
			margin-left: 12px;
			//border: 1px solid var(--bilibili-pink);
			border-radius: 50px;
			background-color: #fff;
			height: 16px;
			line-height: 17px;
			display: inline-block;
			background-color: var(--bilibili-pink);
			color: var(--bilibili-gray);
			
			.bilibili-helper-2-icon-cat-paw {
				width: 20px;
				text-align: center;
				transform: rotate(15deg) scale(0.8) translate(5px, -6px);
				margin: 0 9px 0 1px;
			}
			
			.bilibili-helper-vip {
				font-style: normal;
				font-weight: bold;
				font-size: 12px;
				vertical-align: 2px;
				margin: 10px;
			}
		}
	}
	
	.action-btn-group {
		margin: 0 8px 0 auto;
        display: flex;
		
		.button {
			margin-left: 8px;
			font-size: 12px;
			
			&:first-of-type {
				margin-left: 0;
			}
		}
		
		.login-btn {
			min-width: 70px;
		}
	}
`),v=(0,p.Ay)(g.wn)`
	.account {
		display: flex;
		align-items: center;
		margin-bottom: 12px;
		
		&:last-of-type {
			margin-bottom: 0;
		}
		
		.face {
			margin-right: 12px;
			width: 45px;
			height: 45px;
			border-radius: 50%;
			box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
		}
		
		.info {
			.username {
				font-size: 14px;
			}
			
			.sign {
				margin: 0;
			}
		}
		
		.unbind-button {
			margin-left: auto;
			padding: 0 10px;
		}
	}
	
	.empty-list {
		font-size: 14px;
	}
`,y=p.Ay.div`
	position: relative;
	display: inline-block;
	text-align: center;
	padding: 8px;
	width: 50px;
	border: 1px solid transparent;
	border-radius: 4px;
	//background-color: var(--google-grey-50);
	cursor: pointer;
	transition: border-color .2s;
	
	&.selected {
		border-color: var(--bilibili-blue);
		
		&::after {
			content: '';
			position: absolute;
			right: 6px;
			bottom: 2px;
			display: block;
			width: 4px;
			height: 4px;
			background-color: var(--bilibili-blue);
			box-shadow: 4px 0 0 0 var(--bilibili-blue), 8px 0 0 0 var(--bilibili-blue), 0px -4px 0 0 var(--bilibili-blue);
			transform: rotate(-45deg) scale(0.7);
		}
	}
	
	.cat-type {
		margin: 6px 0 0;
	}
`,S=(0,p.Ay)(d.t)`
`,w=await(0,h.NT)("autoSync2Cloud")??!0;class C extends c.Component{constructor(e){super(e)}static contextType=m.T;state={loading:!1,isLoginBilibiliAccount:!1,catType:"default",catTypeList:[],autoClose:!1,showWhenFullWiden:!1,showInInjectPlayer:!1,autoSync2Cloud:void 0===w||w,accountList:[]};componentDidMount(){chrome.runtime.onMessage.addListener(((e,t,n)=>{const{action:a}=e;return"boundAccount"===a&&this.updateList(),!0})),chrome.runtime.sendMessage({target:"cat",event:"getSetting"},(e=>{this.setState({catType:e.catType,showWhenFullWiden:e.showWhenFullWiden,showInInjectPlayer:e.showInInjectPlayer,autoClose:e.autoClose})})),chrome.runtime.sendMessage({target:"cat",event:"getTypeList"},(e=>{this.setState({catTypeList:e||[]})})),this.updateList()}handleOnClickUploadSettings=()=>{this.state.loading||this.setState({loading:!0},(()=>{this.context.uploadSettings().then((e=>{e&&r.QB.info("\u914d\u7f6e\u4e0a\u4f20\u6210\u529f"),setTimeout((()=>this.setState({loading:!1})),3e3)}))}))};handleOnClickSyncSettings=()=>{this.state.loading||this.setState({loading:!0},(()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"downloadSettings"},(e=>{e&&r.QB.info("\u914d\u7f6e\u540c\u6b65\u6210\u529f"),setTimeout((()=>this.setState({loading:!1})),3e3)}))}))};handleOnSelectCatType=e=>{e!==this.state.catType&&chrome.runtime.sendMessage({target:"cat",event:"setSetting",catType:e},(()=>{this.context.uploadSettings("cat"),this.setState({catType:e})}))};handleOnToggleHideCatWhenFullWiden=e=>{e!==this.state.showWhenFullWiden&&chrome.runtime.sendMessage({target:"cat",event:"setSetting",showWhenFullWiden:e},(()=>{this.context.uploadSettings("cat"),this.setState({showWhenFullWiden:e})}))};handleOnToggleShowInInjectPlayer=e=>{e!==this.state.showInInjectPlayer&&chrome.runtime.sendMessage({target:"cat",event:"setSetting",showInInjectPlayer:e},(()=>{this.context.uploadSettings("cat"),this.setState({showInInjectPlayer:e})}))};handleOnCatAutoClose=()=>{chrome.runtime.sendMessage({target:"cat",event:"setSetting",autoClose:!this.state.autoClose},(()=>{this.context.uploadSettings("cat"),this.setState({autoClose:!this.state.autoClose})}))};handleOnToggleSyncMode=async()=>{await(0,h.Xy)("autoSync2Cloud",!this.state.autoSync2Cloud),this.setState({autoSync2Cloud:!this.state.autoSync2Cloud},(()=>{location.reload()}))};handleOnGotoReport=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://message.bilibili.com/#/whisper/mid1344117169"})};handleOnClickAddAccount=()=>{const{bilibiliMessageOn:e}=this.state,{bhAccount:t,hasLogin:n,handleOnClickShowLoginModal:a,sendPaymentMessage:i}=this.context;return n?e||t&&t.isVIP?(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_toolbar",action:"click_bind_button"}),void chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"bind"})):i():a()};handleOnUnbind=(e,t)=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_unbind_account"}),chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"unbind",uid:t},(()=>{this.updateList()}))};handleOnResetCatPosition=e=>{chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_reset_cat_position"}),chrome.runtime.sendMessage({target:"cat",event:"resetPosition",type:e},(e=>{r.QB.info("\u91cd\u7f6e"+(e?"\u6210\u529f":"\u5931\u8d25"))}))};updateList=()=>{chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"getAccountList"},(e=>{e&&this.setState({accountList:e})}))};render(){const{loading:t,catType:n,catTypeList:a,showWhenFullWiden:s,showInInjectPlayer:d,autoClose:u,autoSync2Cloud:p,accountList:h}=this.state,{hasLogin:m,bilibiliAccount:w,bhAccount:C,downloadingSettings:E,handleOnClickChangePassword:O,handleOnClickShowSignOutModal:x,handleOnClickShowLoginModal:k,handleOnClickShowAnnouncementModal:M,handleOnClickShowPaymentModal:T,handleOnClickShowBindEmailModal:D,handleOnClickShowFirefoxModal:I}=this.context,P=C&&w&&m?w.face:chrome.runtime.getURL("statics/images/bilibili-helper-cat-u-avatar-256.png");return c.createElement(f,null,c.createElement(g.hE,{title:c.createElement(c.Fragment,null,"\u6b22\u8fce\u4f7f\u7528\u300cACG\u52a9\u624b\u300d\u8bbe\u7f6e\u9875\u9762"),description:"\u4e00\u6b3e\u975e\u5b98\u65b9\u7684\u6d4f\u89c8\u5668\u6269\u5c55\u7a0b\u5e8f"}),c.createElement(g.KK,{title:"\u8d26\u53f7\u8bbe\u7f6e"},c.createElement(g.wn,{helperArea:c.createElement(c.Fragment,null,c.createElement("b",null,"\u52a9\u624b\u8d26\u53f7\u4f1a\u968f\u7740B\u7ad9\u8d26\u53f7\u767b\u51fa\u800c\u9000\u51fa"),c.createElement("br",null),c.createElement("br",null),c.createElement("b",null,"\u9f20\u6807\u79fb\u52a8\u81f3\u4f1a\u5458\u79f0\u53f7\u4e0a\u505c\u7559\u6570\u79d2\u53ef\u67e5\u770b\u4f1a\u5458\u5230\u671f\u65f6\u95f4"))},c.createElement(b,null,c.createElement("div",{className:"avatar-wrapper"},c.createElement(r._V,{className:"avatar",url:P,duration:0})),c.createElement("div",{className:"info"},c.createElement("h4",{className:"username"},C&&w&&m?w.username:"\u5c1a\u672a\u767b\u5f55",C&&m&&(C.isVIP||C.isSuperVIP)&&C.identities.length>0?c.createElement("span",{className:"expire-date"},C.identities.map((e=>{const t=o.y8[e.name],n=e.to>Date.now()||!e.hasDateTimeLimit;return n&&t?c.createElement("i",{key:e.name,className:"bilibili-helper-vip",title:`${l()(e.to).format("YYYY-MM-DD")} \u5230\u671f`},t):null})).filter(Boolean)):null),c.createElement("p",null,C&&w&&m?E?"\u6b63\u5728\u540c\u6b65\u914d\u7f6e":p?"\u5df2\u542f\u7528\u8bbe\u7f6e\u540c\u6b65\u4e0e\u4e2a\u6027\u5316\u670d\u52a1":"\u672a\u542f\u7528\u8bbe\u7f6e\u540c\u6b65\u529f\u80fd":"\u767b\u5f55\u89e3\u9501\u66f4\u591a\u529f\u80fd\uff0c\u5e76\u5141\u8bb8\u8de8\u8bbe\u5907\u540c\u6b65\u60a8\u7684\u6570\u636e")),c.createElement("div",{className:"action-btn-group"},C?c.createElement(c.Fragment,null):null,C&&w&&m?c.createElement(c.Fragment,null,e?null:c.createElement(r.sL,{className:"open-payment-modal-btn primary",onClick:T},C&&(C.isVIP||C.isSuperVIP)?"\u7eed\u8ba2\u4f1a\u5458":"\u8ba2\u9605\u4f1a\u5458"),C&&!C.email?c.createElement(r.sL,{className:"change-password-btn border",onClick:D},"\u7ed1\u5b9a\u90ae\u7bb1"):null,c.createElement(r.sL,{className:"change-password-btn border",onClick:O},"\u4fee\u6539\u5bc6\u7801"),c.createElement(r.sL,{className:"login-btn border",onClick:x},"\u9000\u51fa")):c.createElement(r.sL,{className:"login-btn primary",onClick:e?I:k},"\u767b\u5f55")))),c.createElement(g.wn,{title:"\u542f\u7528\u81ea\u52a8\u540c\u6b65\u529f\u80fd",description:"\u8bbe\u7f6e\u529f\u80fd\u65f6\uff0c\u52a9\u624b\u4f1a\u81ea\u52a8\u4fdd\u5b58\u5e76\u4e0a\u4f20\u60a8\u7684\u8bbe\u7f6e",toolbar:c.createElement(i.w9,{onClick:this.handleOnToggleSyncMode,on:p})})),c.createElement(g.KK,{title:c.createElement(c.Fragment,null,"\u591a\u8d26\u53f7\u7cfb\u7edf (",h.length,"/",o.n0,") ",c.createElement(i.Ap,null)),description:"\u4f7f\u4f60\u80fd\u591f\u540c\u65f6\u4ee5\u4e0d\u540cb\u7ad9\u8d26\u53f7\u6d4f\u89c8\u5927\u90e8\u5206b\u7ad9\u9875\u9762",toolbar:h.length<o.n0?c.createElement(r.sL,{className:"primary",onClick:this.handleOnClickAddAccount},"\u7ed1\u5b9a\u65b0\u8d26\u53f7"):null},c.createElement(v,{isVIP:C?.isVIP||C?.isSuperVIP,hasLogin:m,needVIP:!0,helperArea:"\u672c\u529f\u80fd\u6570\u636e\u4ec5\u4fdd\u5b58\u5728\u6d4f\u89c8\u5668\u672c\u5730\uff0c\u66f4\u6362\u6d4f\u89c8\u5668\u3001\u91cd\u65b0\u5b89\u88c5\u52a9\u624b\u6216\u6e05\u7406\u6d4f\u89c8\u5668\u90fd\u9700\u8981\u91cd\u65b0\u7ed1\u5b9a"},h.length>0?h.map((e=>c.createElement("div",{key:e.uid,className:"account"},c.createElement(r._V,{className:"face",url:e.face}),c.createElement("div",{className:"info"},c.createElement("span",{className:"username"},e.username),c.createElement("p",{className:"sign"},e.sign)),c.createElement(r.sL,{className:"unbind-button primary",onClick:t=>this.handleOnUnbind(t,e.uid)},"\u53d6\u6d88\u7ed1\u5b9a")))):c.createElement("div",{className:"empty-list"},"\u6682\u65e0\u7ed1\u5b9a\u8d26\u53f7"))),c.createElement(g.KK,{title:"\u52a9\u624b\u732b\u60ac\u6d6e\u7403\u8bbe\u7f6e"},c.createElement(g.wn,{title:"\u60ac\u6d6e\u7403\u663e\u793a\u6837\u5f0f",columns:9,helperArea:c.createElement(c.Fragment,null,"\u52a9\u624b\u732b\u5728\u4e3b\u7ad9\u89c6\u9891\u9875\u9762\u548c\u76f4\u64ad\u95f4\u9875\u9762",c.createElement("b",null,"\u7f51\u9875\u5168\u5c4f"),"\u65f6\u4f1a\u81ea\u52a8\u534a\u900f\u660e\u5316",c.createElement("div",{className:"reset-list"},a.map((e=>c.createElement(r.sL,{key:e,className:"primary",onClick:()=>this.handleOnResetCatPosition(e)},"\u91cd\u7f6e\u52a9\u624b\u732b\u5728\u300c",e,"\u300d\u7684\u4f4d\u7f6e")))))},c.createElement(y,{className:"default"===n?"selected":"",onClick:()=>this.handleOnSelectCatType("default")},c.createElement(S,{icon:"cat",size:24,className:["handle-button","initialized","default"].filter(Boolean).join(" ")}),c.createElement("p",{className:"cat-type"},"\u9ed8\u8ba4")),c.createElement(y,{className:"pinkCat"===n?"selected":"",onClick:()=>this.handleOnSelectCatType("pinkCat")},c.createElement(S,{icon:"cat",size:24,className:["handle-button","initialized","pinkCat"].filter(Boolean).join(" ")}),c.createElement("p",{className:"cat-type"},"\u7c89\u732b")),c.createElement(y,{className:"blackCat"===n?"selected":"",onClick:()=>this.handleOnSelectCatType("blackCat")},c.createElement(S,{icon:"cat",size:24,className:["handle-button","initialized","blackCat"].filter(Boolean).join(" ")}),c.createElement("p",{className:"cat-type"},"\u9ed1\u732b")),c.createElement(y,{className:"translucentPink"===n?"selected":"",onClick:()=>this.handleOnSelectCatType("translucentPink")},c.createElement(S,{icon:"cat",size:24,className:["handle-button","initialized","translucentPink"].filter(Boolean).join(" ")}),c.createElement("p",{className:"cat-type"},"\u900f\u660e\u7c89")),c.createElement(y,{className:"translucentWhite"===n?"selected":"",onClick:()=>this.handleOnSelectCatType("translucentWhite")},c.createElement(S,{icon:"cat",size:24,className:["handle-button","initialized","translucentWhite"].filter(Boolean).join(" ")}),c.createElement("p",{className:"cat-type"},"\u900f\u660e\u7c89\u767d"))),c.createElement(g.wn,{title:"\u4e3b\u7ad9\u89c6\u9891\u7f51\u9875\u5168\u5c4f\u65f6\u663e\u793a",active:s,toolbar:c.createElement(i.w9,{onClick:()=>this.handleOnToggleHideCatWhenFullWiden(!s),on:s})}),c.createElement(g.wn,{title:"\u70b9\u51fb\u7a7a\u767d\u5904\u81ea\u52a8\u5173\u95ed\u60ac\u6d6e\u7403\u529f\u80fd\u754c\u9762",toolbar:c.createElement(i.w9,{onClick:this.handleOnCatAutoClose,on:u})})))}}const E=(0,u.y)(C);a()}catch(e){a(e)}}),1)},2857:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var a=n(8087),i=n(6540),r=n(3205),o=n(5999),s=n(8285),l=n(9983);const c=o.Ay.div`

`;class d extends i.Component{constructor(e){super(e)}static contextType=l.T;state={quickSearch:!1,darkMode:!1,darkModeFollowSystem:!0,darkModeTimeRange:{start:22,end:6},darkModeShowVideoOnlyButton:!1,sniffer:!0,networkRecheck:!1};componentDidMount(){chrome.runtime.sendMessage({target:"quickSearch",event:"getSetting"},(e=>{this.setState({quickSearch:e.on})})),chrome.runtime.sendMessage({target:"darkMode",event:"getSetting"},(({on:e,followSystem:t,start:n,stop:a,showVideoOnlyButton:i})=>{this.setState({darkMode:e,darkModeFollowSystem:t,darkModeTimeRange:{start:n,end:a},darkModeShowVideoOnlyButton:i})})),chrome.runtime.sendMessage({target:"sniffer",event:"getSetting"},(e=>{e&&this.setState({sniffer:e.on})})),chrome.runtime.sendMessage({target:"networkController",event:"getSetting"},(e=>{e||this.setState({networkRecheck:Boolean(e?.recheck)})}))}handleOnToggleNetworkRecheck=()=>{chrome.runtime.sendMessage({target:"networkController",event:"setSetting",recheck:!this.state.networkRecheck},(()=>{this.context.uploadSettings("networkController"),this.setState({networkRecheck:!this.state.networkRecheck})}))};handleOnToggleQuickSearch=()=>{chrome.runtime.sendMessage({target:"quickSearch",event:"setSetting",on:!this.state.quickSearch},(()=>{this.context.uploadSettings("quickSearch"),this.setState({quickSearch:!this.state.quickSearch})}))};handleOnToggleDarkMode=()=>{chrome.runtime.sendMessage({target:"darkMode",event:"setSetting",on:!this.state.darkMode},(()=>{this.context.uploadSettings("darkMode"),this.setState({darkMode:!this.state.darkMode})}))};handleOnToggleSniffer=()=>{chrome.runtime.sendMessage({target:"sniffer",event:"setSetting",on:!this.state.sniffer},(()=>{this.context.uploadSettings("sniffer"),this.setState({sniffer:!this.state.sniffer})}))};handleOnToggleDarkModeFollowSystem=()=>{const{darkModeShowVideoOnlyButton:e,darkModeFollowSystem:t}=this.state;chrome.runtime.sendMessage({target:"darkMode",event:"setSetting",followSystem:!t,showVideoOnlyButton:!!t&&e},(()=>{this.context.uploadSettings("darkMode"),this.setState({darkModeFollowSystem:!t})}))};handleOnToggleDarkModeVideoOnly=()=>{chrome.runtime.sendMessage({target:"darkMode",event:"setSetting",darkModeVideoOnly:!this.state.darkModeVideoOnly},(()=>{this.context.uploadSettings("darkMode"),this.setState({darkModeVideoOnly:!this.state.darkModeVideoOnly})}))};handleOnToggleDarkModeShowVideoOnlyButton=()=>{const{darkModeShowVideoOnlyButton:e,darkModeFollowSystem:t}=this.state;chrome.runtime.sendMessage({target:"darkMode",event:"setSetting",followSystem:!!e&&t,showVideoOnlyButton:!e},(()=>{this.context.uploadSettings("darkMode"),this.setState({darkModeShowVideoOnlyButton:!e})}))};onDarkModeTimeRangePickerChange=(e,t)=>{const n=isNaN(e)?null:e,a=isNaN(t)?null:t;chrome.runtime.sendMessage({target:"darkMode",event:"setSetting",start:n,stop:a},(()=>{this.setState({darkModeTimeRange:{start:e||0,end:t||0}}),this.context.uploadSettings("darkMode")}))};render(){const{hasLogin:e,bilibiliAccount:t}=this.context,{darkMode:n,darkModeFollowSystem:r,darkModeTimeRange:o,darkModeShowVideoOnlyButton:l}=this.state;return i.createElement(c,null,i.createElement(s.hE,{title:"\u5168\u5c40\u529f\u80fd"}),i.createElement(s.KK,{title:"\u9f20\u6807\u53f3\u952e\u83dc\u5355"},i.createElement(s.wn,{title:"\u5feb\u6377\u641c\u7d22",description:"\u5982\u679c\u9009\u62e9\u7684\u662f avid \u6216 bvid\uff0c\u5219\u4f1a\u76f4\u63a5\u6253\u5f00\u76f8\u5e94\u89c6\u9891\u64ad\u653e\u9875\u9762",toolbar:i.createElement(a.w9,{onClick:this.handleOnToggleQuickSearch,on:this.state.quickSearch}),active:this.state.quickSearch})),i.createElement(s.KK,{title:"\u6837\u5f0f"},i.createElement(s.wn,{title:"\u6df1\u8272\u6a21\u5f0f",description:"\u76ee\u524d\u53ea\u505a\u4e86\u9996\u9875\uff0c\u52a8\u6001\uff0c\u4e13\u680f\uff0c\u641c\u7d22\uff0c\u6d88\u606f\u4e2d\u5fc3\uff0c\u4e2a\u4eba\u4e3b\u9875\uff0c\u7a0d\u540e\u518d\u770b\uff0c\u5386\u53f2\u8bb0\u5f55\u76f4\u64ad\u89c2\u770b\uff0c\u5b50\u680f\u76ee\u9875\u9762",active:n,toolbar:i.createElement(a.w9,{onClick:this.handleOnToggleDarkMode,on:n})},i.createElement(a.ck,{title:"\u8ddf\u968f\u7cfb\u7edf",description:"\u8be5\u9009\u9879\u4e0e\u300c\u4ec5\u5728\u89c6\u9891\u64ad\u653e\u9875\u9762\u542f\u7528\u300d\u4e92\u65a5",operation:i.createElement(a.w9,{on:r,onClick:this.handleOnToggleDarkModeFollowSystem})}),i.createElement(a.ck,{title:"\u4ec5\u5728\u89c6\u9891\u64ad\u653e\u9875\u9762\u542f\u7528",description:"\u8be5\u9009\u9879\u4e0e\u300c\u8ddf\u968f\u7cfb\u7edf\u300d\u4e92\u65a5",operation:i.createElement(a.w9,{on:l,onClick:this.handleOnToggleDarkModeShowVideoOnlyButton})}),i.createElement(a.ck,{title:"\u5b9a\u65f6\u5f00\u542f",description:"\u53ef\u5c06\u65f6\u95f4\u8bbe\u7f6e\u6210\u4e00\u6837\u7684\u6765\u5173\u95ed\u5b9a\u65f6\u529f\u80fd",operation:i.createElement(a.$6,{onChange:this.onDarkModeTimeRangePickerChange,defaultTime:o,minTimeFirst:!1})}))))}}const u=(0,r.y)(d)},2954:(e,t,n)=>{"use strict";function a(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];if(!e){var r;if(void 0===t)r=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var o=0;r=new Error(t.replace(/%s/g,(function(){return a[o++]}))),r.name="Invariant Violation"}throw r.framesToPop=1,r}}n.d(t,{V:()=>a})},3078:(e,t,n)=>{"use strict";n.d(t,{BN:()=>r,mg:()=>i});var a=n(4707);n(5093);const i=(e,t=a.WH)=>{if(!e||!e.identities||0===e.identities.length)return!1;const n=Date.now();return e.identities.map((({name:e,to:a,hasDateTimeLimit:i})=>!(!t.includes(e)||!(a&&a>n)&&i))).filter(Boolean).length>0},r=e=>i(e,a.wM)},3207:(e,t,n)=>{"use strict";function a(e,t,n){var a=n.getRegistry(),i=a.addTarget(e,t);return[i,function(){return a.removeTarget(i)}]}function i(e,t,n){var a=n.getRegistry(),i=a.addSource(e,t);return[i,function(){return a.removeSource(i)}]}n.d(t,{V:()=>i,l:()=>a})},3240:(e,t,n)=>{"use strict";n.d(t,{B9:()=>r.B9,NT:()=>i.NT,Xy:()=>i.Xy,__:()=>a.__,oq:()=>o.oq});n(228);var a=n(9738),i=(n(6354),n(3432)),r=n(8768),o=(n(5542),n(5423),n(3078),n(3989),n(5185),n(1803))},3432:(e,t,n)=>{"use strict";n.d(t,{AP:()=>b,NT:()=>h,U0:()=>v,Xy:()=>f});n(7289);var a=n(8735),i=n(2074),r=n(2421),o=n(1514),s=n(4053),l=n.n(s);n(3683);const c=(0,i.o)();let d=()=>chrome.runtime.getManifest?chrome.runtime.getManifest():null;(0,r.l)()||(0,o.u)();const u=async e=>new Promise((t=>{if(/extension:$/.test(location.protocol)&&"/html/background.html"===location.pathname){const n=l().get(e);void 0!==n?(chrome.storage.local.set({[e]:n},(()=>{})),t(n)):chrome.storage.local.get(e,(n=>t(n?.[e])))}else chrome.runtime.sendMessage({command:"getStorageLocal",name:e},(n=>t(n?.[e])))})).catch((e=>{})),p=async e=>{try{if(!c&&self?.window||!(0,a.v)())return await new Promise((t=>{chrome.runtime.sendMessage({command:"getStorageLocal",name:e},t)}));{const t=await chrome.storage.local.get(e);return t?.[e]}}catch(e){}},h=async e=>{const t=d();return t&&2!==t?.manifest_version?p(e):u(e)},g=async(e,t)=>/^(chrome|moz)-extension:/.test(location.protocol)&&"/html/background.html"===location.pathname?chrome.storage.local.set({[e]:t}):chrome.runtime.sendMessage({command:"setStorageLocal",name:e,value:t}),m=async(e,t)=>{!c&&self?.window||!(0,a.v)()?chrome.runtime.sendMessage({command:"setStorageLocal",name:e,value:t}):chrome.storage.local.set({[e]:t})},f=async(e,t)=>{const n=d();return n&&2!==n?.manifest_version?m(e,t):g(e,t)},b=e=>chrome.runtime.getURL(e),v=(()=>navigator.userAgentData?"macOS"===navigator.userAgentData.platform:/Mac OS/.test(navigator.userAgent))()},3436:(e,t,n)=>{"use strict";n.d(t,{D0:()=>d,J:()=>p,MS:()=>m,TH:()=>v,Vh:()=>b,g9:()=>h,kY:()=>f,ke:()=>c.k,mw:()=>u,yW:()=>g});var a=n(2193),i=n.n(a),r=n(5999),o=n(2520),s=n.n(o),l=n(784),c=n(7056);const d=(e,t=16)=>e/t+"rem",u=(e="")=>r.AH`
    font-family: ${i()(e)?null:`'${e}',`} Cereal, "PingFang SC", "Microsoft YaHei", system, -apple-system, ".SFNSDisplay-Regular", HelveticaNeue, LucidaGrande, "Hiragino Sans GB", "sans-serif";
`,p=(e=16)=>r.AH`
    font-size: ${d(e)};
`,h=(e=1)=>1===e?r.AH`
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
`:r.AH`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${e};
    overflow: hidden;
`,g=(e,t=1)=>l.I[e]?s()(l.I[e]).alpha(t).rgb().string():void 0,m=([...e])=>{const t=1,n="#000000",a=.5;let i="";for(let r in e){const{h:o,v:l,blur:c,spread:d,color:u=s()(n).alpha(a).rgb().string(),inset:p=""}=e[r];i+=`${o*t}px ${l*t}px ${5*c}px ${5*d}px ${u} ${p},`}return r.AH`
        box-shadow: ${i};
    `},f=({target:e="all",duration:t=.3})=>r.AH`transition: ${e} ${t}s;`,b=({direction:e="h",value:t=0})=>r.AH`
  &:first-of-type {
    ${"h"===e?`margin-left:${t}`:"v"===e?`margin-top: ${t}`:null};
    ${"all"===e?`margin-left:${t};margin-top:${t}`:null};
  }
  &:last-of-type {
    ${"h"===e?`margin-right:${t}`:"v"===e?`margin-bottom: ${t}`:null};
    ${"all"===e?`margin-right:${t};margin-bottom:${t}`:null};
  }
`,v=r.AH`
    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
    & {
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }
`},3579:(e,t,n)=>{"use strict";n.d(t,{z:()=>s});var a=n(5999),i=n(74),r=n(3436),o=n(5567);const s=a.DU`
  html,body {
    -ms-text-size-adjust: 100%; // 2
    -webkit-text-size-adjust: 100%; // 2
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
  body {
    margin: 0;
    font-size: 12px;
    ${(0,r.mw)()};
    ${o.R};
    ${i.W};
    //background-color: var(--paper-grey-400)!important;
  }
  
  * {
    &::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }
    
    &::-webkit-scrollbar-corner {
      display: none;
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
  }

  .bilibili-helper-2-icon-bilibili {
    padding: 0 4px;
    width: fit-content!important;
    vertical-align: baseline!important;
    //color: var(--bilibili-pink);
  }

  .bilibili-helper-2-icon-acghelper {
    padding: 0 4px;
    width: fit-content!important;
    //color: var(--bilibili-pink);
  }
  
  .button {
    .primary {
      .bilibili-helper-2-icon-bilibili, .bilibili-helper-2-icon-acghelper {
        color: var(--bilibili-gray);
      }
    }
    .border {
      .bilibili-helper-2-icon-bilibili, .bilibili-helper-2-icon-acghelper {
        color: var(--bilibili-pink);
      }
    }
    
  }
  
  @media (prefers-color-scheme: dark) {
    * {
      &::-webkit-scrollbar-thumb {
        background-color: black;
      }
    }
  }
`},3683:(e,t,n)=>{"use strict";const a="(\\*|http|https|file|ftp)",i="(\\*|(?:\\*\\.)?(?:[^/*]+))?",r="(.*)",o=new RegExp("^"+a+"://"+i+"/"+r+"$");function s(e){const t=o.exec(e);if(!t)return null;const n=t[1],a=t[2],i=t[3];return a||"file"===n?l(n,a,i):null}function l(e,t,n){let a="^";return a+="*"===e?"(http|https)":e,a+="://",t&&("*"===t?a+="([^/]+?)":(a+="(",t.match(/^\*\./)&&(a+="[^/]*?",t=t.substring(2)),a+=t.replace(/\./g,"\\.")+")")),n?"*"===n?a+="(/.*)?":(n=n.replace(/\?/g,"\\?"),"/"!==n[0]?(a+="(/",a+=n.replace(/\*/g,".*?"),a+=")"):a+=n.replace(/\*/g,".*?")):a+="\\/",a+="$",new RegExp(a)}self.parse=s},3716:(e,t,n)=>{"use strict";n.d(t,{u:()=>o});var a=n(6540),i=n(2954),r=n(7112);function o(){var e=(0,a.useContext)(r.M),t=e.dragDropManager;return(0,i.V)(null!=t,"Expected drag drop context"),t}},3912:(e,t,n)=>{var a=n(1074),i=n(9698),r=n(2054);function o(e){return i(e)?r(e):a(e)}e.exports=o},3989:(e,t,n)=>{"use strict";n.d(t,{oS:()=>a.oS});var a=n(5752);n(6097),n(7289)},4024:(e,t,n)=>{"use strict";var a=n(9899);a.V},4224:(e,t,n)=>{"use strict";n.a(e,(async(e,t)=>{try{var a=n(6540),i=n(961),r=n(9738),o=n(8768),s=n(996),l=n(5700),c=e([l]);l=(c.then?(await c)():c)[0],(0,o.NP)();const d=()=>new Promise((e=>{chrome.runtime.sendMessage({target:"app",event:"getInitialStatus"},(t=>{e(!!t?.bilibiliHelperAccount)}))})),u=3;let p=0,h=!1;const g=document.getElementById("root"),m=()=>new Promise((e=>{d().then((t=>{t?((0,r.L)().then((()=>{(0,i.render)(a.createElement(l.T,{initialized:!0}),g,s.h4)})),e(!0)):p<u?(h||(h=!0,(0,i.render)("\u521d\u59cb\u5316\u4e2d\uff0c\u8bf7\u7a0d\u5019",g)),++p,setTimeout(m,1e3)):((0,r.L)().then((()=>{(0,i.render)(a.createElement(l.T,{initialized:!1}),g,s.h4)})),e(!1))}))}));m(),t()}catch(e){t(e)}}))},4568:(e,t,n)=>{"use strict";n.d(t,{B:()=>r});var a=n(6540);const i=function(e,t){if(e===t)return!0;for(let n in e)if(e[n]!==t[n])return!1;return!0};function r(e,t){const{current:n}=(0,a.useRef)({obj:void 0,deps:t,inited:!1});return n.inited&&i(n.deps,t)||(n.obj=e(),n.deps=t,n.inited=!0),n.obj}},4707:(e,t,n)=>{"use strict";n.d(t,{P7:()=>i.P7,WH:()=>a.WH,Xy:()=>o.X,n0:()=>r.n,wM:()=>a.wM,y8:()=>a.y8});var a=n(634),i=n(5679),r=n(2624),o=n(1965);n(5998)},5160:e=>{function t(e,t,n){var a=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;var r=Array(i);while(++a<i)r[a]=e[a+t];return r}e.exports=t},5185:(e,t,n)=>{"use strict";var a=n(2074);n(8735);(0,a.o)()},5296:(e,t,n)=>{"use strict";n.a(e,(async(e,a)=>{try{n.d(t,{g:()=>N});var i=n(6942),r=n.n(i),o=n(8087),s=n(3240),l=n(6540),c=n(5999),d=n(3205),u=n(9738),p=(n(1349),n(2829)),h=n(2315),g=n(2532),m=n(7096),f=n(7398),b=n(7348),v=n(153),y=n(2857),S=n(7924),w=n(9830),C=n(2046),E=n(9983),O=n(6156),x=e([p]);p=(x.then?(await x)():x)[0];(0,s.oq)();const k=[{key:"overview",component:p.A,path:"/"},{key:"popup",component:f.A,path:"/popup"},{key:"video",component:h.A,path:"/video"},{key:"live",component:g.A,path:"/live"},{key:"specialAttention",component:m.A,path:"/specialAttention"},{key:"download",component:b.A,path:"/download"},{key:"notification",component:v.A,path:"/notification"},{key:"contentFilter",component:C.A,path:"/contentFilter",flask:!0},{key:"global",component:y.A,path:"/global"},{key:"order",component:S.A,path:"/order"},{key:"other",component:w.A,path:"/other"}],M=c.Ay.div`
	position: fixed;
	top: 75px;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	background-color: rgb(247, 247, 247);
	//min-height: calc(100% - 75px);
	overflow: auto;
	
	.cat-paw-icon {
		margin-left: 6px;
	}
`,T=c.Ay.aside`
	position: fixed;
	top: 75px;
	bottom: 0;
	//background-color: var(--paper-grey-100);
	backdrop-filter: blur(10px);
	background-color: rgb(234 234 234);
	//pointer-events: none;
	overflow: auto;
	z-index: 999;
	
	ul {
		display: flex;
		flex-direction: column;
		//position: sticky;
		//top: 0;
		margin: 0;
		padding: 12px 0;
		min-width: 240px;
		font-size: 14px;
		overflow: auto;
		pointer-events: initial;
	}
	
	.aside-item {
		margin: 0 12px 2px 12px;
		height: fit-content;
		
		list-style: none;
		//border-bottom: 1px solid #eee;
		border-radius: 6px;
		font-size: 14px;
		cursor: pointer;
		user-select: none;
		
		&:last-of-type {
			//  border-bottom: none;
			margin-bottom: 0;
		}
		
		&:hover {
			background-color: var(--paper-grey-100);
		}
		
		&:active, &.active {
			background-color: var(--paper-grey-50);
			color: var(--bilibili-pink);
		}
		
		.button-view {
			display: flex;
			align-items: center;
			padding: 8px 24px 8px 12px;
			color: initial;
			text-align: left;
		}
	}
`,D=c.Ay.main`
	flex-grow: 1;
	margin-left: 240px;
	padding: 12px 12px 12px 24px;
	width: fit-content;
	height: fit-content;
	background-color: rgb(247 247 247);
`,I=c.Ay.div`
	.login-modal {
		margin: 0;
		
		.modal-body {
			display: flex;
			flex-direction: column;
			align-items: center;
			
			&:first-child {
				margin-top: 20px;
			}
			
			.captcha-wrapper, .email-wrapper {
				display: flex;
				align-items: center;
				margin-top: 4px;
				margin-bottom: 4px;
				
				.input {
					padding: 4px 12px;
					width: 100%;
					height: 32px;
					box-sizing: border-box;
				}
				
				.captcha-input {
					flex-grow: 1;
				}
				
				.button {
					flex-shrink: 0;
					margin: 0 0 0 4px;
					width: auto;
					height: 32px;
					
					button {
						line-height: 32px;
					}
				}
			}
			
			.button {
				margin: 12px 0;
				width: 100%;
				height: 40px;
				line-height: 40px;
				
				button {
					line-height: 38px;
					font-size: 14px;
				}
			}
			
			.step-wrapper {
				width: 100%;
				max-height: 0;
				opacity: 0;
				transition: max-height 0.15s, opacity .3s;
				overflow: hidden;
				
				&.active {
					max-height: 500px;
					opacity: 1;
					transition: max-height 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95), opacity .3s;
				}
				
				&.step0 {
					.button {
						display: block;
						
						.button-view {
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
				}
			}
			
			.avatar {
				width: 14px;
				height: 14px;
				vertical-align: sub;
				border-radius: 50px;
				margin: 0px 4px 0;
				border: 1px solid #fff;
			}
			
			.welcome-topic {
				line-height: 20px;
				text-align: left;
				width: 100%;
				font-size: 14px;
				
				.important {
					color: var(--bilibili-pink);
					font-weight: normal;
				}
			}
			
			.password-box {
				width: 100%;
			}
			
			.confirm-password-box {
				width: 100%;
			}
			
			.password-input {
				margin: 0 0 4px;
				padding: 4px 12px;
				width: 100%;
				height: 32px;
				box-sizing: border-box;
				//text-align: center;
			}
			
			.login-btn {
				margin: 0;
			}
			
			.extra-box {
				display: flex;
				justify-content: space-between;
				margin-top: 4px;
				
				.forget-password-btn {
					margin-left: auto;
					cursor: pointer;
					
					&:hover {
						color: var(--bilibili-blue);
						text-decoration: underline;
					}
				}
				
				.description {
					margin: 0;
					color: var(--bilibili-pink);
				}
			}
			
			.show-password-box {
				margin-bottom: 12px;
				width: fit-content;
				user-select: none;
				cursor: pointer;
				
				.checkbox-rect {
					display: inline-block;
					vertical-align: text-bottom;
				}
			}
		}
		
		.footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			
			.button {
				margin-left: 12px;
			}
			
			.description {
				font-size: 12px;
				color: var(--bilibili-pink);
				
				a {
					color: var(--bilibili-blue);
					cursor: pointer;
				}
			}
		}
	}
	
	.sign-out-modal {
		p {
			font-size: 14px;
		}
		
		.footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			.button {
				margin-left: 12px;
			}
		}
	}
	
	.bind-email-modal {
		.input {
			padding: 4px 12px;
			width: 100%;
			height: 32px;
			box-sizing: border-box;
		}
		
		.captcha-wrapper {
			display: flex;
			align-items: center;
			margin-top: 4px;
			
			.captcha-input {
				flex-grow: 1;
			}
			
			.button {
				flex-shrink: 0;
				margin-left: 4px;
			}
		}
		
		.footer {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			width: 100%;
			
			.button {
				margin-left: 12px;
			}
			
			.description {
				font-size: 12px;
				color: var(--bilibili-pink);
				
				a {
					color: var(--bilibili-blue);
					cursor: pointer;
				}
			}
		}
	}
	
	.change-password-modal {
		.modal-body {
			display: flex;
			flex-direction: column;
			
			.input {
				margin-bottom: 8px;
				padding: 4px 12px;
				width: 100%;
				height: 32px;
				box-sizing: border-box;
			}
			
			.no-email-prompt {
				margin: -4px 0 8px;
				color: var(--bilibili-pink);
				
				a {
					color: var(--bilibili-blue);
				}
			}
			
			.extra-box {
				display: flex;
				justify-content: space-between;
				margin-top: 4px;
				
				.forget-password-btn {
					margin-left: auto;
					cursor: pointer;
					
					&:hover {
						color: var(--bilibili-blue);
						text-decoration: underline;
					}
				}
				
				.description {
					margin: 0;
					color: var(--bilibili-pink);
				}
			}
			
			.show-password-box {
				margin-bottom: 12px;
				width: fit-content;
				user-select: none;
				cursor: pointer;
				
				.checkbox-rect {
					display: inline-block;
					vertical-align: text-bottom;
				}
			}
			
			.captcha-wrapper {
				display: flex;
				align-items: center;
				margin-bottom: 8px;
				
				.input {
					margin: 0;
				}
				
				.captcha-input {
					flex-grow: 1;
				}
				
				.button {
					flex-shrink: 0;
					margin-left: 8px;
				}
			}
		}
		
		.footer {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			width: 100%;
			
			.button {
				margin-left: 12px;
			}
		}
	}
	
	.public-beta-announcement {
		.modal-body {
			font-size: 14px;
		}
		
		.hide-announcement-btn {
			.button-view {
				padding: 0 20px;
			}
		}
	}
	
	.reset-password-modal {
		p {
			margin: 12px 0;
			white-space: break-spaces;
			line-height: 20px;
			
			a {
				margin: 0 4px;
				color: var(--bilibili-blue);
			}
		}
		
		.footer {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			width: 100%;
			
			.button {
				margin-left: 12px;
			}
		}
	}
	
	.payment-iframe-modal {
		width: 1000px;
		max-width: max-content;
		box-sizing: border-box;
		overflow: hidden;
		
		.modal-body {
			padding: 0;
			width: 1000px;
			max-height: 800px;
			box-sizing: border-box;
		}
		
		.close-payment-modal-btn {
			position: absolute;
			top: 16px;
			right: 16px;
			color: var(--bilibili-gray);
			cursor: pointer;
		}
		
		iframe {
			display: block;
			width: 100%;
			height: 800px;
			max-height: 800px;
			border: none;
		}
	}
	
	.firefox-announcement-modal, .edge-announcement-modal {
		.modal-body {
			p {
				white-space: break-spaces;
				font-size: 14px;
			}
		}
	}
	
	@media screen and (max-height: 800px) {
		.payment-iframe-modal {
			.modal-body {
				max-height: 700px;
			}
			
			iframe {
				max-height: 700px;
				height: 700px;
			}
		}
	}
`,P=c.Ay.div`
	a {
		margin: 0 4px;
		color: var(--bilibili-blue);
	}
`,A=(0,c.Ay)(O.FlaskIcon)`
	margin-left: 8px;
	padding: 2px;
`,N=(0,d.y)(class extends l.Component{constructor(e){super(e)}passwordInputRef=l.createRef();confirmPasswordInputRef=l.createRef();signUpEmailInputRef=l.createRef();signUpEmailCaptchaInputRef=l.createRef();bindEmailInputRef=l.createRef();bindEmailCaptchaInputRef=l.createRef();changePasswordEmailInputRef=l.createRef();changePasswordCaptchaInputRef=l.createRef();passwordForChangeInputRef=l.createRef();confirmPasswordForChangeInputRef=l.createRef();autoSync2Cloud=!0;state={states:null,step:0,openPaymentModalAfterAction:!1,openChangePasswordModalAfterAction:!1,paymentIframeKey:0,emailForSignUp:"",captchaForSignUp:"",getSignUpCaptchaCooling:!1,signUpCaptchaCountDown:60,password:"",confirmPassword:"",showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForChangePassword:"",getChangePasswordCaptchaCooling:!1,changePasswordCaptchaCountDown:60,emailForBind:"",bindEmailCaptcha:"",email:"",getBindEmailCaptchaCooling:!1,bindEmailCaptchaCountDown:60,isResettingPassword:!1,logging:!1,loggingOut:!1,resettingPassword:!1,bhName:null,bhid:null,blidList:[],identities:[],hasLogin:!1,hasRegister:!1,bilibiliAccount:null,bhAccount:null,downloadSettings:!1,needFillPassword:!1,needRefreshPage:!1,hasLocalBilibiliAccountLogin:!1,hasLocalBilibiliHelperAccountLogin:!1,hasLocalBilibiliHelperAccountRegister:!1,loginModalShow:!1,resetModalShow:!1,signOutModalShow:!1,showBindEmailModal:!1,showChangePasswordModal:!1,showPaymentModal:!1,showFirefoxModal:!1,showEdgeModal:!1,uploadSettings:e=>new Promise((t=>{if(!this.state.hasLogin||!this.autoSync2Cloud)return t(!1);chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"uploadSettings",featureName:e},(e=>{t(e)}))})),resetPassword:()=>{const{bilibiliAccount:e,password:t}=this.state;return e&&e.hasLogin&&e.uid?(this.setState({resettingPassword:!0}),new Promise((n=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"resetPassword",uid:e.uid,password:t},(e=>{n(e)}))}))):Promise.resolve(!1)},handleOnClickLogin:()=>(this.setState({logging:!0}),new Promise((e=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"login",password:this.state.password,uid:this.state.bilibiliAccount.uid},(t=>{if(setTimeout((()=>{this.setState({logging:!1})}),1e3),t&&!0===t.hasLogin){const{hasLogin:n,bilibiliAccount:a,bhAccount:i}=t;o.QB.info("\u767b\u5f55\u6210\u529f"),this.setState({hasLogin:n,bhAccount:i,bilibiliAccount:a}),e(!0)}else"WRONG_PASSWORD"===t?.type?(o.QB.error(l.createElement(l.Fragment,null,"\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u6ce8\u610f\u533a\u5206 \u52a9\u624b\u8d26\u53f7 \u4e0e B\u7ad9\u8d26\u53f7")),e(!1)):t?.message?(o.QB.error(l.createElement(l.Fragment,null,t.message)),e(!1)):(o.QB.error(l.createElement(l.Fragment,null,t.message,"\uff0c\u4e00\u76f4\u5931\u8d25\u7684\u8bdd\u5c31",l.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u79c1\u4fe1\u52a9\u624b\u732b"),"\u5427")),e(!1))}))}))),handleOnClickRegister:()=>{this.handleOnClickValidateCaptchaForSignUp()},handleOnLoginOtherBilibiliAccount:()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://passport.bilibili.com/login?from=bilibili-helper"},(()=>{this.setState({needRefreshPage:!0})}))},handleOnClickSignOut:()=>(this.setState({loggingOut:!0}),new Promise((e=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"signOut"},(t=>{this.setState({loggingOut:!1}),t?(o.QB.info("\u767b\u51fa\u6210\u529f"),this.setState({bhAccount:null,hasLogin:!1}),e(!0)):(o.QB.info("\u767b\u51fa\u5931\u8d25"),e(!1))}))}))),handleOnClickRefresh:()=>{history.go()},handleOnClickShowLoginModal:()=>{chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"login"}),this.setState({loginModalShow:!0,password:"",confirmPassword:"",logging:!1,showPassword:!1,showFirefoxModal:!1,showEdgeModal:!1})},handleOnClickHideLoginModal:()=>{this.setState({loginModalShow:!1,logging:!1},(()=>{setTimeout((()=>{this.setState({step:0,password:"",confirmPassword:""})}),300)}))},handleOnClickShowPaymentModal:()=>{chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"payment"}),this.refreshPaymentIframe(),this.setState({showPaymentModal:!0,openPaymentModalAfterAction:!1})},handleOnClickHidePaymentModal:()=>{this.setState({showPaymentModal:!1,openPaymentModalAfterAction:!1,loginModalShow:!1}),(0,s.Xy)("hidePayment",!0)},handleOnClickShowSignOutModal:()=>{chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"sign_out"}),this.setState({signOutModalShow:!0,loggingOut:!1})},handleOnClickHideSignOutModal:()=>{this.setState({signOutModalShow:!1,loggingOut:!1})},handleOnClickShowBindEmailModal:()=>{chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"bind_email"}),this.setState({showBindEmailModal:!0},(()=>{this.bindEmailInputRef.current.focus()}))},handleOnClickHideBindEmailModal:()=>{this.setState({showBindEmailModal:!1})},handleOnClickShowChangePasswordModal:()=>{chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"change_password"}),this.setState({showChangePasswordModal:!0})},handleOnClickHideChangePasswordModal:()=>{this.setState({showChangePasswordModal:!1})},handleOnClickChangePassword:()=>{this.state.bhAccount?this.state.bhAccount.email?this.state.handleOnClickShowChangePasswordModal():(this.setState({openChangePasswordModalAfterAction:!0}),this.state.handleOnClickShowBindEmailModal()):o.QB.info("\u8bf7\u5148\u767b\u5f55\u52a9\u624b\u8d26\u53f7")},sendPaymentMessage:()=>{this.state.states&&this.state.states.paymentIframe?this.state.handleOnClickShowPaymentModal():o.QB.info(l.createElement(P,null,"\u7cfb\u7edf\u72b6\u6001\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u6216",l.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u79c1\u4fe1\u52a9\u624b\u732b")))},sendPublicBetaMessage:()=>{},openPage:e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})},openPrivacy:()=>{this.openPage("https://github.com/bilibili-helper/bilibili-helper-o/blob/master/ADDON_PRIVACY.md")},handleOnClickShowFirefoxModal:()=>{this.setState({showFirefoxModal:!0})},handleOnClickHideFirefoxModal:()=>{this.setState({showFirefoxModal:!1}),this.state.handleOnClickShowLoginModal()},handleOnClickShowEdgeModal:()=>{this.setState({showEdgeModal:!0})},handleOnClickHideEdgeModal:()=>{this.setState({showEdgeModal:!1}),(0,s.Xy)("hideEdgeModal",!0)}};urlParamHasUsedForShowPaymentModal=!1;async componentDidMount(){const e=await(0,s.NT)("hideEdgeModal")||!1,t=await(0,s.NT)("hidePayment")||!1,n=await(0,s.NT)("autoSync2Cloud");this.autoSync2Cloud=n??this.autoSync2Cloud,this.setState({showEdgeModal:!e,showPaymentModal:!t}),chrome.runtime.onMessage.addListener(((e,t,n)=>{const{action:a}=e;return"openLoginModal"===a?(o.QB.info("\u8bf7\u5148\u767b\u5f55\u518d\u8fdb\u884c\u540e\u7eed\u64cd\u4f5c\u54e6"),this.setState({showPaymentModal:!1,openPaymentModalAfterAction:!0},this.state.handleOnClickShowLoginModal)):"openBindEmailModal"===a?(o.QB.info("\u60a8\u8fd8\u6ca1\u6709\u7ed1\u5b9a\u90ae\u7bb1\uff0c\u8bf7\u5148\u7ed1\u5b9a\u90ae\u7bb1\u518d\u8fdb\u884c\u540e\u7eed\u64cd\u4f5c\u54e6"),this.setState({showPaymentModal:!1,openPaymentModalAfterAction:!0},this.state.handleOnClickShowBindEmailModal)):"payComplete"===a?(o.QB.info("\u6536\u5230\u6765\u81ea\u652f\u4ed8\u9875\u7684\u8ba2\u5355\u786e\u8ba4\u8bf7\u6c42\uff0c\u6b63\u5728\u786e\u8ba4\u4fe1\u606f\uff0c\u8bf7\u7a0d\u5019"),setTimeout((()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"queryTradeNoComplete",outTradeNo:e.outTradeNo},(e=>{if(e&&"10000"===e.code){o.QB.info("\u8ba2\u5355\u786e\u8ba4\u5b8c\u6210\uff0c\u6b63\u5728\u66f4\u65b0\u7528\u6237\u6570\u636e\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85"),this.state.handleOnClickHidePaymentModal(),o.QB.info("\u7528\u6237\u6570\u636e\u66f4\u65b0\u5b8c\u6210\uff0c\u611f\u8c22\u60e0\u987e~");const{hasLogin:t,bhAccount:n}=e;this.setState({hasLogin:t,bhAccount:n})}else o.QB.error(`\u8ba2\u5355\u5f02\u5e38 (${e.code}): ${e.sub_msg}\uff0c\u8bf7\u8054\u7cfb\u5ba2\u670d`)}))}),1e3)):"useRedeem"===a&&chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"useRedeem",code:e.code},(e=>{if("\u5151\u6362\u6210\u529f"===e.message){o.QB.info("\u5151\u6362\u7801\u6fc0\u6d3b\u6210\u529f\uff0c\u6b63\u5728\u66f4\u65b0\u7528\u6237\u6570\u636e\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85"),this.state.handleOnClickHidePaymentModal(),o.QB.info("\u7528\u6237\u6570\u636e\u66f4\u65b0\u5b8c\u6210\uff0c\u611f\u8c22\u60e0\u987e~");const{hasLogin:t,bhAccount:n}=e;this.setState({hasLogin:t,bhAccount:n})}else o.QB.error(`\u5151\u6362\u7801\u6fc0\u6d3b\u5931\u8d25: ${e}`)})),!0})),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},(e=>{const{hasLogin:t,bilibiliAccount:n,downloadingSettings:a,hasRegister:i}=e;this.setState({hasLogin:t,bilibiliAccount:n,downloadingSettings:a,hasRegister:i})})),chrome.runtime.sendMessage({target:"states",event:"getStates"},(e=>{e&&this.setState({states:e})})),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getBHAccount"},(e=>{e&&this.setState({bhAccount:e})})),location.href.match(/[?&]?showPaymentModal=1&?/)&&!this.urlParamHasUsedForShowPaymentModal&&(this.urlParamHasUsedForShowPaymentModal=!0,this.state.handleOnClickShowPaymentModal())}handleOnClickNavigation=e=>{const{history:t,location:n}=this.props;n.pathname!==e&&t.push(e)};handleOnClickLogin=()=>{const{password:e}=this.state;!e||e.length<6?o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):this.state.handleOnClickLogin().then((e=>{e&&(this.state.openPaymentModalAfterAction&&this.state.handleOnClickShowPaymentModal(),this.setState({loginModalShow:!1}))}))};handleOnClickRegister=()=>{this.state.handleOnClickRegister()};handleOnClickReset=()=>{const{password:e,confirmPassword:t}=this.state;!e||e.length<6?o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):e!==t?o.QB.info("\u8f93\u5165\u7684\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):this.state.resetPassword().then((e=>{"NO_ACCESS_TO_RESET_PASSWORD"===e?o.QB.error(l.createElement(P,null,"\u65e0\u6cd5\u91cd\u7f6e\u5bc6\u7801\uff0c\u8bf7\u4f7f\u7528\u6ce8\u518c\u65f6\u4f7f\u7528\u7684b\u7ad9\u8d26\u53f7",l.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u79c1\u4fe1\u52a9\u624b\u732b"),"\u4ee5\u83b7\u5f97\u91cd\u7f6e\u6743\u9650"),0):e?(this.state.handleOnClickShowLoginModal(),this.setState({resettingPassword:!1,isResettingPassword:!1,password:""},(()=>{o.QB.info("\u5bc6\u7801\u91cd\u7f6e\u6210\u529f\uff0c\u8bf7\u524d\u5f80\u767b\u5f55"),this.passwordInputRef.current.focus()}))):o.QB.info(l.createElement(P,null,"\u5bc6\u7801\u91cd\u7f6e\u5931\u8d25\uff0c\u8bf7",l.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u79c1\u4fe1\u52a9\u624b\u732b")))}))};handleOnClickSignOut=()=>{this.state.handleOnClickSignOut().then((e=>{e&&this.state.handleOnClickHideSignOutModal()}))};handleOnChangeSignUpEmail=e=>{this.setState({emailForSignUp:e.target.value.replace(/\s/g,"").slice(0,128)})};handleOnKeyDownEmailForSignUp=e=>{e.persist(),"Enter"===e.key&&(this.handleOnClickGetCaptchaForSignUp(),this.signUpEmailCaptchaInputRef.current.focus())};handleOnChangeSignUpCaptcha=e=>{let t=e.target.value.replace(/\s/g,"").replace(/[^\d]/g,"");this.setState({captchaForSignUp:t.slice(0,6)})};handleOnChangeBindEmail=e=>{this.setState({emailForBind:e.target.value.replace(/\s/g,"").slice(0,128)})};handleOnChangeBindEmailCaptcha=e=>{let t=e.target.value.replace(/\s/g,"").replace(/[^\d]/g,"");this.setState({bindEmailCaptcha:t.slice(0,6)})};handleOnChangePasswordChangeCaptcha=e=>{let t=e.target.value.replace(/\s/g,"").replace(/[^\d]/g,"");this.setState({captchaForChangePassword:t.slice(0,6)})};handleOnChangeChangePasswordEmail=e=>{this.setState({emailForChangePassword:e.target.value.replace(/\s/g,"").slice(0,128)})};handleOnChangePasswordForChange=e=>{this.setState({passwordForChange:e.target.value.replace(/\s/g,"").slice(0,64)})};handleOnChangeConfirmPasswordForChange=e=>{this.setState({confirmPasswordForChange:e.target.value.replace(/\s/g,"").slice(0,64)})};handleOnChangePassword=e=>{this.setState({password:e.target.value.replace(/\s/g,"").slice(0,64)})};handleOnChangeConfirmPassword=e=>{this.setState({confirmPassword:e.target.value.replace(/\s/g,"").slice(0,64)})};handleOnKeyDownBindEmailInput=e=>{e.persist(),"Enter"===e.key&&(this.bindEmailCaptchaInputRef.current.focus(),this.handleOnClickGetCaptchaForBindEmail())};handleOnKeyDownBindEmailCaptchaInput=e=>{e.persist(),"Enter"===e.key&&this.handleOnClickValidateCaptchaForBindEmail()};handleOnClickGetCaptchaForSignUp=()=>(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"sign_up"}),this.state.bilibiliAccount&&this.state.bilibiliAccount.uid?this.state.getChangePasswordCaptchaCooling?o.QB.info("\u9a8c\u8bc1\u7801\u83b7\u53d6\u51b7\u5374\u4e2d\uff0c\u8bf7\u7a0d\u540e"):this.state.emailForSignUp&&(0,s.B9)(this.state.emailForSignUp)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForSignUp",blid:this.state.bilibiliAccount.uid,email:this.state.emailForSignUp},(e=>{"\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f"===e&&this.setState({getSignUpCaptchaCooling:!0,signUpCaptchaCountDown:60},(()=>{const e=setInterval((()=>{this.state.signUpCaptchaCountDown>1?this.setState({signUpCaptchaCountDown:this.state.signUpCaptchaCountDown-1}):(clearInterval(e),this.setState({getSignUpCaptchaCooling:!1,signUpCaptchaCountDown:0}))}),1e3)})),o.QB.info(e)})):o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740"):o.QB.info("\u8bf7\u5728B\u7ad9\u767b\u5f55\u5e76\u91cd\u542f\u52a9\u624b\u540e\u518d\u8bd5"));handleOnClickValidateCaptchaForSignUp=()=>{if(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"sign_up"}),!this.state.bilibiliAccount||!this.state.bilibiliAccount.uid)return o.QB.info("\u8bf7\u5148\u767b\u5f55B\u7ad9\u8d26\u53f7\uff0c\u7136\u540e\u91cd\u542f\u52a9\u624b\u540e\u518d\u8bd5");if(!this.state.emailForSignUp||!(0,s.B9)(this.state.emailForSignUp))return o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740");if(!this.state.captchaForSignUp)return o.QB.info("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");if(6!==String(this.state.captchaForSignUp).length||isNaN(this.state.captchaForSignUp))return o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u9a8c\u8bc1\u7801");const{password:e,confirmPassword:t}=this.state;return!e||e.length<6?o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):t!==t?o.QB.info("\u8f93\u5165\u7684\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):(this.setState({logging:!0}),void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForSignUp",email:this.state.emailForSignUp,blid:this.state.bilibiliAccount.uid,captcha:this.state.captchaForSignUp,password:e},(e=>{this.setState({logging:!1}),"\u6ce8\u518c\u6210\u529f"===e&&(chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"initBHAccount"},(e=>{const{hasLogin:t,bhAccount:n}=e;this.setState({hasLogin:t,bhAccount:n})})),this.setState({loginModalShow:!1,showChangePasswordModal:!1,showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForSignUp:""})),o.QB.info(e)})))};handleOnClickGetCaptchaForResetPassword=()=>(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"reset_password"}),this.state.bilibiliAccount&&this.state.bilibiliAccount.uid?this.state.getChangePasswordCaptchaCooling?o.QB.info("\u9a8c\u8bc1\u7801\u83b7\u53d6\u51b7\u5374\u4e2d\uff0c\u8bf7\u7a0d\u5019"):this.state.emailForChangePassword&&(0,s.B9)(this.state.emailForChangePassword)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForResetPassword",blid:this.state.bilibiliAccount.uid,email:this.state.emailForChangePassword},(e=>{"\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f"===e&&this.setState({getChangePasswordCaptchaCooling:!0,changePasswordCaptchaCountDown:60},(()=>{const e=setInterval((()=>{this.state.changePasswordCaptchaCountDown>1?this.setState({changePasswordCaptchaCountDown:this.state.changePasswordCaptchaCountDown-1}):(clearInterval(e),this.setState({getChangePasswordCaptchaCooling:!1,changePasswordCaptchaCountDown:0}))}),1e3)})),o.QB.info(e)})):o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740"):o.QB.info("\u8bf7\u5728B\u7ad9\u767b\u5f55\u5e76\u91cd\u542f\u52a9\u624b\u540e\u518d\u8bd5"));handleOnClickValidateCaptchaForResetPassword=()=>{if(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"reset_password"}),!this.state.bilibiliAccount||!this.state.bilibiliAccount.uid)return o.QB.info("\u8bf7\u5728B\u7ad9\u767b\u5f55\u5e76\u91cd\u542f\u52a9\u624b\u540e\u518d\u8bd5");if(!this.state.emailForChangePassword||!(0,s.B9)(this.state.emailForChangePassword))return o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740");if(!this.state.captchaForChangePassword)return o.QB.info("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");if(6!==String(this.state.captchaForChangePassword).length||isNaN(this.state.captchaForChangePassword))return o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u9a8c\u8bc1\u7801");const{passwordForChange:e,confirmPasswordForChange:t}=this.state;return!e||e.length<6?o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):e!==t?o.QB.info("\u8f93\u5165\u7684\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForResetPassword",blid:this.state.bilibiliAccount.uid,captcha:this.state.captchaForChangePassword,password:this.state.passwordForChange},(e=>{"\u4fee\u6539\u6210\u529f"===e&&this.setState({showChangePasswordModal:!1,showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForChangePassword:""}),o.QB.info(e)}))};handleOnClickGetCaptchaForChangePassword=()=>(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"change_password"}),this.state.getChangePasswordCaptchaCooling?o.QB.info("\u9a8c\u8bc1\u7801\u83b7\u53d6\u51b7\u5374\u4e2d\uff0c\u8bf7\u7a0d\u5019"):this.state.emailForChangePassword&&(0,s.B9)(this.state.emailForChangePassword)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForChangePassword",email:this.state.emailForChangePassword},(e=>{"\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f"===e&&this.setState({getChangePasswordCaptchaCooling:!0,changePasswordCaptchaCountDown:60},(()=>{const e=setInterval((()=>{this.state.changePasswordCaptchaCountDown>1?this.setState({changePasswordCaptchaCountDown:this.state.changePasswordCaptchaCountDown-1}):(clearInterval(e),this.setState({getChangePasswordCaptchaCooling:!1,changePasswordCaptchaCountDown:0}))}),1e3)})),o.QB.info(e)})):o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740"));handleOnClickValidateCaptchaForChangePassword=()=>{if(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"change_password"}),!this.state.emailForChangePassword||!(0,s.B9)(this.state.emailForChangePassword))return o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740");if(!this.state.captchaForChangePassword)return o.QB.info("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");if(6!==String(this.state.captchaForChangePassword).length||isNaN(this.state.captchaForChangePassword))return o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u9a8c\u8bc1\u7801");const{passwordForChange:e,confirmPasswordForChange:t}=this.state;return!e||e.length<6?o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):e!==t?o.QB.info("\u8f93\u5165\u7684\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForChangePassword",captcha:this.state.captchaForChangePassword,password:this.state.passwordForChange},(e=>{"\u4fee\u6539\u6210\u529f"===e&&this.setState({showChangePasswordModal:!1,showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForChangePassword:""}),o.QB.info(e)}))};handleOnClickGetCaptchaForBindEmail=()=>(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"bind_email"}),this.state.getBindEmailCaptchaCooling?(this.bindEmailCaptchaInputRef.current.focus(),o.QB.info("\u9a8c\u8bc1\u7801\u83b7\u53d6\u51b7\u5374\u4e2d\uff0c\u8bf7\u7a0d\u5019")):this.state.emailForBind&&(0,s.B9)(this.state.emailForBind)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForBindEmail",email:this.state.emailForBind},(e=>{"\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f"===e&&this.setState({getBindEmailCaptchaCooling:!0,bindEmailCaptchaCountDown:60},(()=>{const e=setInterval((()=>{this.state.bindEmailCaptchaCountDown>1?this.setState({bindEmailCaptchaCountDown:this.state.bindEmailCaptchaCountDown-1}):(clearInterval(e),this.setState({getBindEmailCaptchaCooling:!1,bindEmailCaptchaCountDown:0}))}),1e3)})),o.QB.info(e)})):o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740"));handleOnClickValidateCaptchaForBindEmail=()=>(chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"bind_email"}),this.state.emailForBind&&(0,s.B9)(this.state.emailForBind)?this.state.bindEmailCaptcha?6!==String(this.state.bindEmailCaptcha).length||isNaN(this.state.bindEmailCaptcha)?o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u9a8c\u8bc1\u7801"):void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForEmailBind",captcha:this.state.bindEmailCaptcha},(e=>{if("\u7ed1\u5b9a\u6210\u529f"===e){const{bhAccount:e}=this.state;e.email=this.state.emailForBind.split("@").map(((e,t)=>0===t?(e=e.slice(0,3)+e.slice(4).replace(/./g,"*"),e):e)).join("@"),this.state.openPaymentModalAfterAction&&this.state.handleOnClickShowPaymentModal(),this.setState({openChangePasswordModalAfterAction:!1,showBindEmailModal:!1,bhAccount:e,email:this.state.emailForBind}),this.state.openChangePasswordModalAfterAction&&this.state.handleOnClickShowChangePasswordModal()}o.QB.info(e)})):o.QB.info("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"):o.QB.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740"));handleOnKeyDownPasswordInput=e=>{e.persist(),"Enter"===e.key&&(this.state.hasRegister?this.handleOnClickLogin():this.confirmPasswordInputRef.current.focus())};handleOnKeyDownSignUpCaptchaInput=e=>{e.persist(),"Enter"===e.key&&this.passwordInputRef.current.focus()};handleOnKeyDownEmailForChangePasswordInput=e=>{e.persist(),"Enter"===e.key&&(this.handleOnClickGetCaptchaForChangePassword(),this.changePasswordCaptchaInputRef.current.focus())};handleOnKeyDownChangePasswordCaptchaInput=e=>{e.persist(),"Enter"===e.key&&this.passwordForChangeInputRef.current.focus()};handleOnKeyDownConfirmPasswordInput=e=>{const{isResettingPassword:t}=this.state;"Enter"===e.key&&(t?this.handleOnClickReset():this.handleOnClickLogin())};handleOnKeyDownPasswordForChangeInput=e=>{e.persist(),"Enter"===e.key&&this.confirmPasswordForChangeInputRef.current.focus()};handleOnKeyDownConfirmPasswordForChangeInput=e=>{"Enter"===e.key&&this.handleOnClickValidateCaptchaForChangePassword()};handleOnClickShowPassword=()=>{this.setState({showPassword:!this.state.showPassword})};onLoadPaymentPage=function(e){e.persist()};refreshPaymentIframe=()=>{this.setState({paymentIframeKey:this.state.paymentIframeKey+1})};handleOnGotoReport=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://message.bilibili.com/#/whisper/mid1344117169"})};renderLoginUI=()=>{const{step:e,password:t,showPassword:n,logging:a,hasLogin:i,bilibiliAccount:r,handleOnClickShowChangePasswordModal:s,bhAccount:c}=this.state;return l.createElement(l.Fragment,null,l.createElement("div",{className:["step-wrapper","step0",0===e?"active":""].join(" ")},l.createElement(o.sL,{disabled:i,className:"primary",onClick:()=>{this.passwordInputRef.current.focus(),this.setState({step:1,hasRegister:!0})}},"\u4ee5",l.createElement(o._V,{url:r.face,className:"avatar"}),"\u767b\u5f55",l.createElement(o.In,{size:16,icon:"acghelper"}),"\u8d26\u53f7")),l.createElement("div",{className:["step-wrapper","step1",1===e?"active":""].join(" ")},l.createElement("div",{className:"welcome-topic"},"\u6b63\u5728\u4ee5 ",l.createElement("b",null,r.username)," \u8eab\u4efd\u767b\u5f55(\u0e51\u2022\u0300\u3142\u2022\u0301)\u0648\u2727",l.createElement("br",null),l.createElement("b",{className:"important"},"\u6b63\u5728\u767b\u5f55\u52a9\u624b\u8d26\u53f7\uff0c\u8bf7\u52ff\u4f7f\u7528b\u7ad9\u8d26\u53f7\u5bc6\u7801")),l.createElement("div",{className:"password-box"},l.createElement(o.pd,{ref:this.passwordInputRef,name:"password",type:n?"text":"password",className:["password-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801\u8fdb\u884c\u767b\u5f55",onChange:this.handleOnChangePassword,onKeyDown:this.handleOnKeyDownPasswordInput,value:t}),l.createElement("div",{className:"extra-box"},l.createElement("div",{className:"show-password-box",onClick:this.handleOnClickShowPassword},l.createElement(o.un,{active:n})," \u663e\u793a\u5bc6\u7801"),l.createElement("p",{className:"description"}))),l.createElement(o.sL,{disableEvent:!1,disabled:!t||t.length<6||a,className:["login-btn","primary",1===e?"active":""].join(" "),onClick:this.handleOnClickLogin},"\u767b\u5f55"),l.createElement("div",{className:"extra-box"},l.createElement("a",{className:"forget-password-btn",onClick:s},"\u5fd8\u8bb0\u5bc6\u7801"))))};renderRegisterUI=()=>{const{step:e,password:t,confirmPassword:n,showPassword:a,logging:i,resettingPassword:r,emailForSignUp:s,hasLogin:c,hasRegister:d,bilibiliAccount:u,bhAccount:p}=this.state;return l.createElement(l.Fragment,null,l.createElement("div",{className:["step-wrapper","step0",0===e?"active":""].join(" ")},l.createElement(o.sL,{disabled:!p||!c,className:"primary",onClick:()=>{this.passwordInputRef.current.focus(),this.setState({step:1,hasRegister:!0})}},"\u4ee5",l.createElement(o._V,{url:u.face,className:"avatar"}),"\u767b\u5f55",l.createElement(o.In,{size:16,icon:"acghelper"}),"\u8d26\u53f7"),l.createElement(o.sL,{disabled:p||d,className:"primary",onClick:()=>{this.signUpEmailInputRef.current.focus(),this.setState({step:1,hasRegister:!1})}},"\u4ee5",l.createElement(o._V,{url:u.face,className:"avatar"}),"\u6ce8\u518c",l.createElement(o.In,{size:16,icon:"acghelper"}),"\u8d26\u53f7")),l.createElement("div",{className:["step-wrapper","step1",1===e?"active":""].join(" ")},l.createElement("div",{className:"welcome-topic"},"\u6b63\u5728\u4ee5 ",l.createElement("b",null,u.username)," \u8eab\u4efd\u6ce8\u518c\u52a9\u624b\u8d26\u53f7"),l.createElement("div",{className:"email-wrapper"},l.createElement(o.pd,{ref:this.signUpEmailInputRef,name:"emailForSignup",type:"email",className:["email-input","input"].join(" "),placeholder:"\u8bf7\u8f93\u5165\u60f3\u8981\u7ed1\u5b9a\u7684\u90ae\u7bb1",onChange:this.handleOnChangeSignUpEmail,onKeyDown:this.handleOnKeyDownEmailForSignUp,value:s,minlength:6})),l.createElement("div",{className:"captcha-wrapper"},l.createElement(o.pd,{ref:this.signUpEmailCaptchaInputRef,name:"signUpEmailCaptcha",type:"text",className:["sign-up-email-captcha-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onChange:this.handleOnChangeSignUpCaptcha,onKeyDown:this.handleOnKeyDownSignUpCaptchaInput,value:this.state.captchaForSignUp,size:6}),l.createElement(o.sL,{className:"primary",onClick:this.handleOnClickGetCaptchaForSignUp,disabled:!this.state.emailForSignUp||this.state.getSignUpCaptchaCooling,disableEvent:!1},this.state.getSignUpCaptchaCooling?`\u8bf7\u7b49\u5f85${this.state.signUpCaptchaCountDown}\u79d2`:"\u83b7\u53d6\u9a8c\u8bc1\u7801")),l.createElement("div",{className:"password-box"},l.createElement(o.pd,{ref:this.passwordInputRef,type:a?"text":"password",className:["password-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff0c\u957f\u5ea6\u4e0d\u5c0f\u4e8e6\u4f4d",onChange:this.handleOnChangePassword,onKeyDown:this.handleOnKeyDownPasswordInput,value:t})),l.createElement("div",{className:"confirm-password-box"},l.createElement(o.pd,{ref:this.confirmPasswordInputRef,type:a?"text":"password",className:["password-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"\u8bf7\u91cd\u590d\u8f93\u5165\u4e00\u904d\u5bc6\u7801",onChange:this.handleOnChangeConfirmPassword,onKeyDown:this.handleOnKeyDownConfirmPasswordInput,value:n}),l.createElement("div",{className:"extra-box"},l.createElement("div",{className:"show-password-box",onClick:this.handleOnClickShowPassword},l.createElement(o.un,{active:a})," \u663e\u793a\u5bc6\u7801"),l.createElement("p",{className:"description"},"\u8bf7\u52ff\u4f7f\u7528b\u7ad9\u8d26\u53f7\u5bc6\u7801"))),l.createElement(o.sL,{disableEvent:!1,disabled:!t||t.length<6||!n||n.length<6||i||r,className:["login-btn","primary",1===e?"active":""].join(" "),onClick:this.handleOnClickRegister},"\u6ce8\u518c")))};renderTitle=()=>{const{step:e,hasRegister:t}=this.state;let n="\u767b\u5f55";return t||(n="\u6ce8\u518c\u52a9\u624b\u8d26\u53f7"),0===e&&(n="\u8bf7\u9009\u62e9\u767b\u5f55\u65b9\u5f0f"),n};render(){const{location:e}=this.props,{states:t,step:n,password:a,confirmPassword:i,showPassword:s,logging:c,paymentIframeKey:p,emailForChangePassword:h,email:g,emailForBind:m,bindEmailCaptcha:f,getBindEmailCaptchaCooling:b,bindEmailCaptchaCountDown:v,hasLogin:y,hasRegister:S,bhAccount:w,bilibiliAccount:C,needRefreshPage:O,showPaymentModal:x,showFirefoxModal:P,showEdgeModal:N,loginModalShow:_,resetModalShow:L,signOutModalShow:R,showChangePasswordModal:B,handleOnClickHideChangePasswordModal:F,showBindEmailModal:V,handleOnClickHideBindEmailModal:U,handleOnClickHideSignOutModal:Q}=this.state;return l.createElement(E.T.Provider,{value:this.state},l.createElement(M,null,l.createElement(T,null,l.createElement("ul",null,k.map((({key:t,path:n,flask:a})=>l.createElement(o.sL,{key:n,className:r()("aside-item",e.pathname===n?"active":null),onClick:()=>this.handleOnClickNavigation(n)},(0,u.__)("config_main_navigation_"+t),a?l.createElement(A,null):null))))),l.createElement(D,null,l.createElement(d.dO,{location:e},k.map((({key:e,path:t,component:n})=>l.createElement(d.qh,{key:e,path:t,exact:!0,render:()=>l.createElement(n,null)})))))),l.createElement(I,null,l.createElement(o.aF,{open:_,className:"login-modal",title:this.renderTitle(),footer:l.createElement("div",{className:"footer"},l.createElement("p",{className:"description"},l.createElement("span",null,l.createElement("b",{style:{marginRight:4}},"\u203b"),"\u70b9\u51fb\u767b\u5f55\u5373\u8868\u793a\u60a8\u5df2\u540c\u610f",l.createElement("a",{href:"https://acghelper.com/licence.html",target:"_blank",rel:"noreferrer"},"\u300a\u4f7f\u7528\u6761\u6b3e\u300b"),"\u548c",l.createElement("a",{href:"https://acghelper.com/privacy.html",target:"_blank",rel:"noreferrer"},"\u300a\u9690\u79c1\u534f\u8bae\u300b"))),l.createElement(o.sL,{onClick:this.state.handleOnClickHideLoginModal},"\u53d6\u6d88"))},C?S?this.renderLoginUI():this.renderRegisterUI():O?l.createElement(o.sL,{onClick:this.state.handleOnClickRefresh},"\u8bf7\u767b\u5f55",l.createElement(o.In,{size:16,icon:"bilibili"}),"\u8d26\u53f7\u540e\u5237\u65b0\u672c\u9875\u9762"):S?l.createElement(o.sL,{className:"primary",onClick:this.state.handleOnLoginOtherBilibiliAccount},l.createElement("div",null,"\u8bf7\u5148\u767b\u5f55",l.createElement(o.In,{size:16,icon:"bilibili"}),"\u8d26\u53f7\u518d\u767b\u5f55\u52a9\u624b\u8d26\u53f7")):l.createElement(o.sL,{className:"primary",onClick:this.state.handleOnLoginOtherBilibiliAccount},l.createElement("div",null,"\u8bf7\u5148\u767b\u5f55",l.createElement(o.In,{size:16,icon:"bilibili"}),"\u8d26\u53f7\u518d\u6ce8\u518c\u52a9\u624b\u8d26\u53f7"))),l.createElement(o.aF,{open:R,className:"sign-out-modal",onClickMask:Q,title:"\u8981\u5173\u95ed\u540c\u6b65\u548c\u4e2a\u6027\u5316\u529f\u80fd\u5417\uff1f",footer:l.createElement("div",{className:"footer"},l.createElement(o.sL,{className:"border",onClick:Q},"\u53d6\u6d88"),l.createElement(o.sL,{className:"primary",onClick:this.handleOnClickSignOut},"\u9000\u51fa"))},l.createElement("p",null,"\u6267\u884c\u6b64\u64cd\u4f5c\u4f1a\u4f7f\u60a8\u9000\u51fa ",l.createElement(o.In,{icon:"acghelper",size:16})," \u5e10\u53f7\u3002"),l.createElement("p",null,"\u60a8\u7684\u7279\u522b\u5173\u6ce8\u4ee5\u53ca\u5176\u4ed6\u8bbe\u7f6e\u5c06\u4e0d\u518d\u4fdd\u6301\u540c\u6b65\u3002")),l.createElement(o.aF,{open:V,className:"bind-email-modal",title:"\u7ed1\u5b9a\u90ae\u7bb1",footer:l.createElement("div",{className:"footer"},l.createElement(o.sL,{className:"border",onClick:U},"\u5173\u95ed"),l.createElement(o.sL,{className:"primary",onClick:this.handleOnClickValidateCaptchaForBindEmail,disabled:!this.state.bindEmailCaptcha||!m,disableEvent:!1},"\u786e\u8ba4\u7ed1\u5b9a"))},l.createElement(o.pd,{ref:this.bindEmailInputRef,name:"bindEmail",type:"email",className:["bind-email-input","input",1===n?"active":"",n>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u60f3\u8981\u7ed1\u5b9a\u90ae\u7bb1",onChange:this.handleOnChangeBindEmail,onKeyDown:this.handleOnKeyDownBindEmailInput,value:m,minlength:6}),l.createElement("div",{className:"captcha-wrapper"},l.createElement(o.pd,{ref:this.bindEmailCaptchaInputRef,name:"bindEmailCaptcha",type:"text",className:["captcha-input",1===n?"active":"",n>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onChange:this.handleOnChangeBindEmailCaptcha,onKeyDown:this.handleOnKeyDownBindEmailCaptchaInput,value:f,size:6}),l.createElement(o.sL,{className:"primary",onClick:this.handleOnClickGetCaptchaForBindEmail,disabled:!this.state.emailForBind||b,disableEvent:!1},b?`\u8bf7\u7b49\u5f85${v}\u79d2`:"\u83b7\u53d6\u9a8c\u8bc1\u7801"))),l.createElement(o.aF,{open:B,className:"change-password-modal",title:y?"\u4fee\u6539\u5bc6\u7801":"\u91cd\u7f6e\u5bc6\u7801",footer:l.createElement("div",{className:"footer"},l.createElement(o.sL,{className:"border",onClick:F},"\u5173\u95ed"),l.createElement(o.sL,{className:"primary",onClick:y?this.handleOnClickValidateCaptchaForChangePassword:this.handleOnClickValidateCaptchaForResetPassword,disabled:!this.state.captchaForChangePassword||!this.state.passwordForChange||!this.state.confirmPasswordForChange||!this.state.emailForChangePassword,disableEvent:!1},y?"\u786e\u8ba4\u4fee\u6539":"\u786e\u8ba4\u91cd\u7f6e"))},l.createElement("div",{className:"email-wrapper"},l.createElement(o.pd,{ref:this.changePasswordEmailInputRef,name:"emailForChangePassword",type:"email",className:["email-input","input"].join(" "),placeholder:y&&this.state.bhAccount?this.state.bhAccount.email:"\u8bf7\u8f93\u5165\u7ed1\u5b9a\u90ae\u7bb1",onChange:this.handleOnChangeChangePasswordEmail,onKeyDown:this.handleOnKeyDownEmailForChangePasswordInput,value:h,minlength:6}),y&&this.state.bhAccount&&this.state.bhAccount.email?null:l.createElement("div",{className:"no-email-prompt"},"\u5982\u6ca1\u6709\u7ed1\u5b9a\u90ae\u7bb1\uff0c\u8bf7\u53d1\u7ed9 ",l.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u52a9\u624b\u732b")," \u5e2e\u4f60\u7ed1\u5b9a")),l.createElement("div",{className:"captcha-wrapper"},l.createElement(o.pd,{ref:this.changePasswordCaptchaInputRef,name:"bindEmailCaptcha",type:"text",className:["bind-email-captcha-input",1===n?"active":"",n>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onChange:this.handleOnChangePasswordChangeCaptcha,onKeyDown:this.handleOnKeyDownChangePasswordCaptchaInput,value:this.state.captchaForChangePassword,size:6}),l.createElement(o.sL,{className:"primary",onClick:y?this.handleOnClickGetCaptchaForChangePassword:this.handleOnClickGetCaptchaForResetPassword,disabled:!this.state.emailForChangePassword||this.state.getChangePasswordCaptchaCooling,disableEvent:!1},this.state.getChangePasswordCaptchaCooling?`\u8bf7\u7b49\u5f85${this.state.changePasswordCaptchaCountDown}\u79d2`:"\u83b7\u53d6\u9a8c\u8bc1\u7801")),l.createElement("div",{className:"password-box"},l.createElement(o.pd,{ref:this.passwordForChangeInputRef,type:s?"text":"password",className:["password-input",1===n?"active":"",n>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff0c\u957f\u5ea6\u4e0d\u5c0f\u4e8e6\u4f4d",onChange:this.handleOnChangePasswordForChange,onKeyDown:this.handleOnKeyDownPasswordForChangeInput,value:this.state.passwordForChange})),l.createElement("div",{className:"confirm-password-box"},l.createElement(o.pd,{ref:this.confirmPasswordForChangeInputRef,type:s?"text":"password",className:["password-input"].join(" "),placeholder:"\u8bf7\u91cd\u590d\u8f93\u5165\u4e00\u904d\u5bc6\u7801",onChange:this.handleOnChangeConfirmPasswordForChange,onKeyDown:this.handleOnKeyDownConfirmPasswordForChangeInput,value:this.state.confirmPasswordForChange}),l.createElement("div",{className:"extra-box"},l.createElement("div",{className:"show-password-box",onClick:this.handleOnClickShowPassword},l.createElement(o.un,{active:s})," \u663e\u793a\u5bc6\u7801"),l.createElement("p",{className:"description"},"\u8bf7\u52ff\u4f7f\u7528b\u7ad9\u8d26\u53f7\u5bc6\u7801")))),l.createElement(o.aF,{open:x,className:"payment-iframe-modal"},l.createElement("iframe",{key:p,src:x?t&&t.paymentIframe:null}),l.createElement(o.In,{className:"close-payment-modal-btn",icon:"close",size:16,onClick:this.state.handleOnClickHidePaymentModal})),l.createElement(o.aF,{open:P,className:"firefox-announcement-modal",title:"\u706b\u72d0\u7528\u6237\u987b\u77e5",footer:l.createElement("div",{className:"footer"},l.createElement(o.sL,{className:"primary",onClick:this.state.handleOnClickShowLoginModal},"\u6211\u5df2\u77e5\u6089"))},l.createElement("p",null,"\u4e3a\u4e86\u66f4\u52a0\u7a33\u5b9a\u7684\u63d0\u4f9b\u670d\u52a1\u4e0e\u907f\u514d\u610f\u5916\u53d1\u751f\uff0c\u5728\u706b\u72d0\u7248\u52a9\u624b\u6682\u4e0d\u63d0\u4f9b\u300c\u4f1a\u5458\u5f00\u901a\u300d\u529f\u80fd\u3002",l.createElement("br",null),l.createElement("br",null),"\u5982\u679c\u60a8\u5df2\u7ecf\u662f\u4ed8\u8d39\u7528\u6237\uff0c\u8bf7\u6ce8\u610f\u52a9\u624b\u5728\u706b\u72d0\u6d4f\u89c8\u5668\u4e0a\u90e8\u5206\u529f\u80fd\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u4f7f\u7528\uff0c\u4f8b\u5982",l.createElement("b",null,"\u300c\u5f39\u5e55\u67e5\u8be2\u300d"),"\u3001",l.createElement("b",null,"\u300c\u4ec5\u97f3\u89c6\u9891\u4e0b\u8f7d\u300d"),"\u548c",l.createElement("b",null,"\u300c\u4e0b\u8f7d\u6587\u4ef6\u91cd\u547d\u540d\u300d"),"\u529f\u80fd\u7b49\u3002",l.createElement("br",null),l.createElement("br",null),"\u5982\u679c\u4e4b\u540e\u5904\u4e8e\u4e0b\u67b6\u6216\u8fdb\u884c\u76f8\u5173\u8c03\u6574\u72b6\u6001\uff0c\u4ed8\u8d39\u529f\u80fd\u53ef\u80fd\u4f1a\u5f02\u5e38\u6216\u65e0\u6cd5\u4f7f\u7528\u3002")),l.createElement(o.aF,{open:N,className:"edge-announcement-modal",title:"\u9047\u5230\u95ee\u9898\u600e\u4e48\u529e\u5462",footer:l.createElement("div",{className:"footer"},l.createElement(o.sL,{className:"primary",onClick:this.state.handleOnClickHideEdgeModal},"\u6211\u5df2\u77e5\u6089"))},l.createElement("p",null,"\u4eb2\u7231\u7684\u7528\u6237\u60a8\u597d\uff0c\u5f53\u60a8\u9047\u5230\u95ee\u9898\u65f6\u8bf7\u8054\u7cfb \xa0",l.createElement("a",{href:"#",onClick:this.handleOnGotoReport},"b\u7ad9\u4eba\u5de5\u5ba2\u670d\u300c\u52a9\u624b\u732b\u300d"),"\u3002",l.createElement("br",null),l.createElement("br",null),"\u52a9\u624b\u732b\u6536\u5230\u6d88\u606f\u540e\u4f1a\u5c3d\u5feb\u7ed9\u60a8\u56de\u590d\u3002",l.createElement("br",null),l.createElement("br",null),"\u5982\u679c\u89c9\u5f97\u52a9\u624b\u4e0d\u9519\u8bb0\u5f97\u4e94\u661f\u597d\u8bc4\u54e6\u3002"))))}});a()}catch(e){a(e)}}))},5423:(e,t,n)=>{"use strict";n.d(t,{l:()=>o});const a={ArrowUp:"\u2191",ArrowRight:"\u2192",ArrowDown:"\u2193",ArrowLeft:"\u2190"},i=["ControlLeft","ControlRight","ShiftLeft","ShiftRight","AltLeft","AltRight","MetaLeft","MetaRight","Enter","Space","CapsLock"],r={Minus:"-",Equal:"=",Backquote:"`",BracketLeft:"[",BracketRight:"]",Backslash:"\\",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/"},o=(e,t,n,o,s,l)=>{let c=[];return n&&c.push("Control"),o&&c.push("Shift"),s&&c.push("Command"),l&&c.push("Alt"),t=a[e]?e:/Key[A-Z]/.test(e)?e.replace("Key","").toLowerCase():/Digit(\d)/.test(e)?e.replace("Digit",""):r[e]?r[e]:t.toLowerCase(),!(i.includes(e)||!e||!t)&&(c.push(t),c.join(" + "))}},5522:(e,t,n)=>{"use strict";n.d(t,{H:()=>L});var a=n(6540),i=n(2954),r=n(7645),o=n(8395),s=n(3207),l=n(3716),c=n(9194),d=n(1972),u=n(6979);function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}var m=function(){function e(t){var n=this;p(this,e),this.hooks=(0,d.i)({dropTarget:function(e,t){n.clearDropTarget(),n.dropTargetOptions=t,(0,u.i)(e)?n.dropTargetRef=e:n.dropTargetNode=e,n.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}return g(e,[{key:"reconnect",value:function(){var e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();var t=this.dropTarget;this.handlerId&&(t?e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=t,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,t,this.dropTargetOptions)):this.lastConnectedDropTarget=t)}},{key:"receiveHandlerId",value:function(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didDropTargetChange",value:function(){return this.lastConnectedDropTarget!==this.dropTarget}},{key:"didOptionsChange",value:function(){return!(0,c.b)(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}},{key:"disconnectDropTarget",value:function(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}},{key:"clearDropTarget",value:function(){this.dropTargetRef=null,this.dropTargetNode=null}},{key:"connectTarget",get:function(){return this.dropTarget}},{key:"dropTargetOptions",get:function(){return this.dropTargetOptionsInternal},set:function(e){this.dropTargetOptionsInternal=e}},{key:"dropTarget",get:function(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}}]),e}();function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),e}var y=!1,S=function(){function e(t){f(this,e),this.targetId=null,this.internalMonitor=t.getMonitor()}return v(e,[{key:"receiveHandlerId",value:function(e){this.targetId=e}},{key:"getHandlerId",value:function(){return this.targetId}},{key:"subscribeToStateChange",value:function(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}},{key:"canDrop",value:function(){if(!this.targetId)return!1;(0,i.V)(!y,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return y=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{y=!1}}},{key:"isOver",value:function(e){return!!this.targetId&&this.internalMonitor.isOverTarget(this.targetId,e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}]),e}();function w(e,t){return k(e)||x(e,t)||E(e,t)||C()}function C(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function E(e,t){if(e){if("string"===typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function x(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done);a=!0)if(n.push(o.value),t&&n.length===t)break}catch(e){i=!0,r=e}finally{try{a||null==s["return"]||s["return"]()}finally{if(i)throw r}}return n}}function k(e){if(Array.isArray(e))return e}function M(){var e=(0,l.u)(),t=(0,a.useMemo)((function(){return new S(e)}),[e]),n=(0,a.useMemo)((function(){return new m(e.getBackend())}),[e]);return[t,n]}function T(e,t,n){var i=(0,l.u)(),r=(0,a.useMemo)((function(){return{canDrop:function(){var n=e.current.canDrop;return!n||n(t.getItem(),t)},hover:function(){var n=e.current.hover;n&&n(t.getItem(),t)},drop:function(){var n=e.current.drop;if(n)return n(t.getItem(),t)}}}),[t]);(0,o.E)((function(){var a=(0,s.l)(e.current.accept,r,i),o=w(a,2),l=o[0],c=o[1];return t.receiveHandlerId(l),n.receiveHandlerId(l),c}),[t,n])}function D(e,t){return _(e)||N(e,t)||P(e,t)||I()}function I(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function P(e,t){if(e){if("string"===typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function N(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done);a=!0)if(n.push(o.value),t&&n.length===t)break}catch(e){i=!0,r=e}finally{try{a||null==s["return"]||s["return"]()}finally{if(i)throw r}}return n}}function _(e){if(Array.isArray(e))return e}function L(e){var t=(0,a.useRef)(e);t.current=e,(0,i.V)(null!=e.accept,"accept must be defined");var n=M(),s=D(n,2),l=s[0],c=s[1];T(t,l,c);var d=(0,r.F)(l,t.current.collect||function(){return{}},(function(){return c.reconnect()})),u=(0,a.useMemo)((function(){return c.hooks.dropTarget()}),[c]);return(0,o.E)((function(){c.dropTargetOptions=e.options||null,c.reconnect()}),[e.options]),[d,u]}},5542:(e,t,n)=>{"use strict";n.d(t,{p0:()=>a});n(4024);new Map;const a=(e=String(1e3*Math.random()).substring(2,8),t,n=!1,a=!1)=>{let i=document.getElementById(`bilibili_style_link_${e}`);if(i){if(!n)return void i.setAttribute("href",t);i.remove(),i=null}if(!i){const n=document.createElement("link");n.setAttribute("id",`bilibili_style_link_${e}`),(a?document.body:document.head).appendChild(n),n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",t)}}},5567:(e,t,n)=>{"use strict";n.d(t,{R:()=>i});var a=n(5999);a.AH`
	--Ga0: #0d0d0e;
	--Ga0_s: #1e2022;
	--Ga0_t: #1e2022;
	--Ga1: #000;
	--Ga1_s: #232527;
	--Ga1_t: #232527;
	--Ga1_e: #232527;
	--Ga2: #2f3134;
	--Ga2_t: #2f3134;
	--Ga3: #46494d;
	--Ga3_t: #46494d;
	--Ga4: #5e6267;
	--Ga4_t: #5e6267;
	--Ga5: #757a81;
	--Ga5_t: #757a81;
	--Ga6: #8b9097;
	--Ga6_t: #8b9097;
	--Ga7: #a2a7ae;
	--Ga7_t: #a2a7ae;
	--Ga8: #b9bdc2;
	--Ga8_t: #b9bdc2;
	--Ga9: #d0d3d7;
	--Ga9_t: #d0d3d7;
	--Ga10: #e7e9eb;
	--Ga10_t: #e7e9eb;
	--Ga11: #242628;
	--Ga12: #1f2022;
	--Wh0: #1f2022;
	--Wh0_t: #17181a;
	--Ba0: #000;
	--Ba0_s: #fff;
	--Ba0_t: #000;
	--Pi0: #26161c;
	--Pi1: #2f1a22;
	--Pi2: #472030;
	--Pi3: #76304b;
	--Pi4: #a73e65;
	--Pi5: #d44e7d;
	--Pi5_t: #d44e7d;
	--Pi6: #dc6d94;
	--Pi7: #e38caa;
	--Pi8: #ebabc1;
	--Pi9: #f2cad8;
	--Pi10: #fae9ef;
	--Ma0: #261525;
	--Ma1: #2e182d;
	--Ma2: #461c43;
	--Ma3: #72296c;
	--Ma4: #a13396;
	--Ma5: #cb41bb;
	--Ma6: #d462c7;
	--Ma7: #dd83d3;
	--Ma8: #e6a4de;
	--Ma9: #efc5ea;
	--Ma10: #f8e6f6;
	--Re0: #261314;
	--Re1: #2e1617;
	--Re2: #471a1c;
	--Re3: #742728;
	--Re4: #a63131;
	--Re5: #d1403e;
	--Re6: #d9615f;
	--Re7: #e18281;
	--Re8: #e9a3a2;
	--Re9: #f1c5c4;
	--Re10: #f9e5e5;
	--Or0: #28180f;
	--Or1: #301b10;
	--Or2: #4a230e;
	--Or3: #783610;
	--Or4: #a9490d;
	--Or5: #d66011;
	--Or6: #dd7c3a;
	--Or7: #e49764;
	--Or8: #ebb38d;
	--Or9: #f2ceb6;
	--Or10: #faeadf;
	--Ye0: #2a1e0f;
	--Ye1: #342410;
	--Ye2: #4d300b;
	--Ye3: #7c4c08;
	--Ye4: #ad6800;
	--Ye5: #db8700;
	--Ye6: #e19c2c;
	--Ye7: #e7b158;
	--Ye8: #eec584;
	--Ye9: #f4dab1;
	--Ye10: #faefdd;
	--Ly0: #2a2310;
	--Ly1: #332a11;
	--Ly2: #49390c;
	--Ly3: #745909;
	--Ly4: #a27c00;
	--Ly5: #cca000;
	--Ly6: #d5b02c;
	--Ly7: #dec158;
	--Ly8: #e7d184;
	--Ly9: #efe2b1;
	--Ly10: #f8f2dd;
	--Lg0: #19220f;
	--Lg1: #1e2911;
	--Lg2: #273c0e;
	--Lg3: #3c600f;
	--Lg4: #50840b;
	--Lg5: #67a70e;
	--Lg6: #81b638;
	--Lg7: #9cc562;
	--Lg8: #b6d58b;
	--Lg9: #d0e4b5;
	--Lg10: #ebf3df;
	--Gr0: #102017;
	--Gr1: #11271b;
	--Gr2: #123923;
	--Gr3: #175c34;
	--Gr4: #198042;
	--Gr5: #1fa251;
	--Gr6: #46b26f;
	--Gr7: #6dc28d;
	--Gr8: #93d2ab;
	--Gr9: #bae2c9;
	--Gr10: #e1f3e8;
	--Cy0: #0c1f20;
	--Cy1: #0d2627;
	--Cy2: #093739;
	--Cy3: #085b5c;
	--Cy4: #028080;
	--Cy5: #03a29f;
	--Cy6: #2fb2b0;
	--Cy7: #5ac2c0;
	--Cy8: #86d2d1;
	--Cy9: #b2e2e1;
	--Cy10: #ddf3f3;
	--Lb0: #0a1b23;
	--Lb1: #0b202a;
	--Lb2: #082d40;
	--Lb3: #064a69;
	--Lb4: #006996;
	--Lb5: #0087bd;
	--Lb6: #2c9cc8;
	--Lb7: #58b1d4;
	--Lb8: #84c5df;
	--Lb9: #b1dbeb;
	--Lb10: #ddeff6;
	--Bl0: #151826;
	--Bl1: #181c2f;
	--Bl2: #1f2748;
	--Bl3: #2e3c76;
	--Bl4: #3b53a8;
	--Bl5: #4b6bd4;
	--Bl6: #6a85db;
	--Bl7: #899ee3;
	--Bl8: #a9b8ea;
	--Bl9: #c8d2f2;
	--Bl10: #e7ebf9;
	--Pu0: #1d1628;
	--Pu1: #221a31;
	--Pu2: #31214c;
	--Pu3: #4e317d;
	--Pu4: #6d3fb1;
	--Pu5: #8c50e0;
	--Pu6: #a06ee5;
	--Pu7: #b48deb;
	--Pu8: #c8abf0;
	--Pu9: #dbc9f5;
	--Pu10: #f0e8fb;
	--Br0: #211d1b;
	--Br1: #282320;
	--Br2: #382f2a;
	--Br3: #59483f;
	--Br4: #7a6154;
	--Br5: #9a7c6a;
	--Br6: #ac9384;
	--Br7: #bda99e;
	--Br8: #cebfb7;
	--Br9: #e0d7d1;
	--Br10: #f2eeeb;
	--Si0: #212325;
	--Si1: #27292c;
	--Si2: #36393f;
	--Si3: #535962;
	--Si4: #6f7987;
	--Si5: #8c99aa;
	--Si6: #a0abb9;
	--Si7: #b4bcc7;
	--Si8: #c8ced6;
	--Si9: #dce0e5;
	--Si10: #f0f2f4
`;const i=a.AH`
	--bilibili-pink: #FB7299;
	--bilibili-blue: #23ADE5;
	--bilibili-green: #6dc781;
	--bilibili-purple: var(--paper-deep-purple-700);
	--bilibili-gray: #F4F4F4;
	--google-red-100: #f4c7c3;
	--google-red-300: #e67c73;
	--google-red-500: #db4437;
	--google-red-700: #c53929;
	--google-blue-100: #c6dafc;
	--google-blue-300: #7baaf7;
	--google-blue-500: #4285f4;
	--google-blue-600: #1a73e8;
	--google-blue-700: #3367d6;
	--google-green-100: #b7e1cd;
	--google-green-300: #57bb8a;
	--google-green-500: #0f9d58;
	--google-green-700: #0b8043;
	--google-yellow-100: #fce8b2;
	--google-yellow-300: #f7cb4d;
	--google-yellow-500: #f4b400;
	--google-yellow-700: #f09300;
	--google-grey-50: #f8f9fa;
	--google-grey-100: #f5f5f5;
	--google-grey-300: #e0e0e0;
	--google-grey-400: #bdc1c6;
	--google-grey-500: #9e9e9e;
	--google-grey-700: #616161;
	--paper-red-50: #ffebee;
	--paper-red-100: #ffcdd2;
	--paper-red-200: #ef9a9a;
	--paper-red-300: #e57373;
	--paper-red-400: #ef5350;
	--paper-red-500: #f44336;
	--paper-red-600: #e53935;
	--paper-red-700: #d32f2f;
	--paper-red-800: #c62828;
	--paper-red-900: #b71c1c;
	--paper-red-a100: #ff8a80;
	--paper-red-a200: #ff5252;
	--paper-red-a400: #ff1744;
	--paper-red-a700: #d50000;
	--paper-pink-50: #fce4ec;
	--paper-pink-100: #f8bbd0;
	--paper-pink-200: #f48fb1;
	--paper-pink-300: #f06292;
	--paper-pink-400: #ec407a;
	--paper-pink-500: #e91e63;
	--paper-pink-600: #d81b60;
	--paper-pink-700: #c2185b;
	--paper-pink-800: #ad1457;
	--paper-pink-900: #880e4f;
	--paper-pink-a100: #ff80ab;
	--paper-pink-a200: #ff4081;
	--paper-pink-a400: #f50057;
	--paper-pink-a700: #c51162;
	--paper-purple-50: #f3e5f5;
	--paper-purple-100: #e1bee7;
	--paper-purple-200: #ce93d8;
	--paper-purple-300: #ba68c8;
	--paper-purple-400: #ab47bc;
	--paper-purple-500: #9c27b0;
	--paper-purple-600: #8e24aa;
	--paper-purple-700: #7b1fa2;
	--paper-purple-800: #6a1b9a;
	--paper-purple-900: #4a148c;
	--paper-purple-a100: #ea80fc;
	--paper-purple-a200: #e040fb;
	--paper-purple-a400: #d500f9;
	--paper-purple-a700: #aa00ff;
	--paper-deep-purple-50: #ede7f6;
	--paper-deep-purple-100: #d1c4e9;
	--paper-deep-purple-200: #b39ddb;
	--paper-deep-purple-300: #9575cd;
	--paper-deep-purple-400: #7e57c2;
	--paper-deep-purple-500: #673ab7;
	--paper-deep-purple-600: #5e35b1;
	--paper-deep-purple-700: #512da8;
	--paper-deep-purple-800: #4527a0;
	--paper-deep-purple-900: #311b92;
	--paper-deep-purple-a100: #b388ff;
	--paper-deep-purple-a200: #7c4dff;
	--paper-deep-purple-a400: #651fff;
	--paper-deep-purple-a700: #6200ea;
	--paper-indigo-50: #e8eaf6;
	--paper-indigo-100: #c5cae9;
	--paper-indigo-200: #9fa8da;
	--paper-indigo-300: #7986cb;
	--paper-indigo-400: #5c6bc0;
	--paper-indigo-500: #3f51b5;
	--paper-indigo-600: #3949ab;
	--paper-indigo-700: #303f9f;
	--paper-indigo-800: #283593;
	--paper-indigo-900: #1a237e;
	--paper-indigo-a100: #8c9eff;
	--paper-indigo-a200: #536dfe;
	--paper-indigo-a400: #3d5afe;
	--paper-indigo-a700: #304ffe;
	--paper-blue-50: #e3f2fd;
	--paper-blue-100: #bbdefb;
	--paper-blue-200: #90caf9;
	--paper-blue-300: #64b5f6;
	--paper-blue-400: #42a5f5;
	--paper-blue-500: #2196f3;
	--paper-blue-600: #1e88e5;
	--paper-blue-700: #1976d2;
	--paper-blue-800: #1565c0;
	--paper-blue-900: #0d47a1;
	--paper-blue-a100: #82b1ff;
	--paper-blue-a200: #448aff;
	--paper-blue-a400: #2979ff;
	--paper-blue-a700: #2962ff;
	--paper-light-blue-50: #e1f5fe;
	--paper-light-blue-100: #b3e5fc;
	--paper-light-blue-200: #81d4fa;
	--paper-light-blue-300: #4fc3f7;
	--paper-light-blue-400: #29b6f6;
	--paper-light-blue-500: #03a9f4;
	--paper-light-blue-600: #039be5;
	--paper-light-blue-700: #0288d1;
	--paper-light-blue-800: #0277bd;
	--paper-light-blue-900: #01579b;
	--paper-light-blue-a100: #80d8ff;
	--paper-light-blue-a200: #40c4ff;
	--paper-light-blue-a400: #00b0ff;
	--paper-light-blue-a700: #0091ea;
	--paper-cyan-50: #e0f7fa;
	--paper-cyan-100: #b2ebf2;
	--paper-cyan-200: #80deea;
	--paper-cyan-300: #4dd0e1;
	--paper-cyan-400: #26c6da;
	--paper-cyan-500: #00bcd4;
	--paper-cyan-600: #00acc1;
	--paper-cyan-700: #0097a7;
	--paper-cyan-800: #00838f;
	--paper-cyan-900: #006064;
	--paper-cyan-a100: #84ffff;
	--paper-cyan-a200: #18ffff;
	--paper-cyan-a400: #00e5ff;
	--paper-cyan-a700: #00b8d4;
	--paper-teal-50: #e0f2f1;
	--paper-teal-100: #b2dfdb;
	--paper-teal-200: #80cbc4;
	--paper-teal-300: #4db6ac;
	--paper-teal-400: #26a69a;
	--paper-teal-500: #009688;
	--paper-teal-600: #00897b;
	--paper-teal-700: #00796b;
	--paper-teal-800: #00695c;
	--paper-teal-900: #004d40;
	--paper-teal-a100: #a7ffeb;
	--paper-teal-a200: #64ffda;
	--paper-teal-a400: #1de9b6;
	--paper-teal-a700: #00bfa5;
	--paper-green-50: #e8f5e9;
	--paper-green-100: #c8e6c9;
	--paper-green-200: #a5d6a7;
	--paper-green-300: #81c784;
	--paper-green-400: #66bb6a;
	--paper-green-500: #4caf50;
	--paper-green-600: #43a047;
	--paper-green-700: #388e3c;
	--paper-green-800: #2e7d32;
	--paper-green-900: #1b5e20;
	--paper-green-a100: #b9f6ca;
	--paper-green-a200: #69f0ae;
	--paper-green-a400: #00e676;
	--paper-green-a700: #00c853;
	--paper-light-green-50: #f1f8e9;
	--paper-light-green-100: #dcedc8;
	--paper-light-green-200: #c5e1a5;
	--paper-light-green-300: #aed581;
	--paper-light-green-400: #9ccc65;
	--paper-light-green-500: #8bc34a;
	--paper-light-green-600: #7cb342;
	--paper-light-green-700: #689f38;
	--paper-light-green-800: #558b2f;
	--paper-light-green-900: #33691e;
	--paper-light-green-a100: #ccff90;
	--paper-light-green-a200: #b2ff59;
	--paper-light-green-a400: #76ff03;
	--paper-light-green-a700: #64dd17;
	--paper-lime-50: #f9fbe7;
	--paper-lime-100: #f0f4c3;
	--paper-lime-200: #e6ee9c;
	--paper-lime-300: #dce775;
	--paper-lime-400: #d4e157;
	--paper-lime-500: #cddc39;
	--paper-lime-600: #c0ca33;
	--paper-lime-700: #afb42b;
	--paper-lime-800: #9e9d24;
	--paper-lime-900: #827717;
	--paper-lime-a100: #f4ff81;
	--paper-lime-a200: #eeff41;
	--paper-lime-a400: #c6ff00;
	--paper-lime-a700: #aeea00;
	--paper-yellow-50: #fffde7;
	--paper-yellow-100: #fff9c4;
	--paper-yellow-200: #fff59d;
	--paper-yellow-300: #fff176;
	--paper-yellow-400: #ffee58;
	--paper-yellow-500: #ffeb3b;
	--paper-yellow-600: #fdd835;
	--paper-yellow-700: #fbc02d;
	--paper-yellow-800: #f9a825;
	--paper-yellow-900: #f57f17;
	--paper-yellow-a100: #ffff8d;
	--paper-yellow-a200: #ffff00;
	--paper-yellow-a400: #ffea00;
	--paper-yellow-a700: #ffd600;
	--paper-amber-50: #fff8e1;
	--paper-amber-100: #ffecb3;
	--paper-amber-200: #ffe082;
	--paper-amber-300: #ffd54f;
	--paper-amber-400: #ffca28;
	--paper-amber-500: #ffc107;
	--paper-amber-600: #ffb300;
	--paper-amber-700: #ffa000;
	--paper-amber-800: #ff8f00;
	--paper-amber-900: #ff6f00;
	--paper-amber-a100: #ffe57f;
	--paper-amber-a200: #ffd740;
	--paper-amber-a400: #ffc400;
	--paper-amber-a700: #ffab00;
	--paper-orange-50: #fff3e0;
	--paper-orange-100: #ffe0b2;
	--paper-orange-200: #ffcc80;
	--paper-orange-300: #ffb74d;
	--paper-orange-400: #ffa726;
	--paper-orange-500: #ff9800;
	--paper-orange-600: #fb8c00;
	--paper-orange-700: #f57c00;
	--paper-orange-800: #ef6c00;
	--paper-orange-900: #e65100;
	--paper-orange-a100: #ffd180;
	--paper-orange-a200: #ffab40;
	--paper-orange-a400: #ff9100;
	--paper-orange-a700: #ff6500;
	--paper-deep-orange-50: #fbe9e7;
	--paper-deep-orange-100: #ffccbc;
	--paper-deep-orange-200: #ffab91;
	--paper-deep-orange-300: #ff8a65;
	--paper-deep-orange-400: #ff7043;
	--paper-deep-orange-500: #ff5722;
	--paper-deep-orange-600: #f4511e;
	--paper-deep-orange-700: #e64a19;
	--paper-deep-orange-800: #d84315;
	--paper-deep-orange-900: #bf360c;
	--paper-deep-orange-a100: #ff9e80;
	--paper-deep-orange-a200: #ff6e40;
	--paper-deep-orange-a400: #ff3d00;
	--paper-deep-orange-a700: #dd2c00;
	--paper-brown-50: #efebe9;
	--paper-brown-100: #d7ccc8;
	--paper-brown-200: #bcaaa4;
	--paper-brown-300: #a1887f;
	--paper-brown-400: #8d6e63;
	--paper-brown-500: #795548;
	--paper-brown-600: #6d4c41;
	--paper-brown-700: #5d4037;
	--paper-brown-800: #4e342e;
	--paper-brown-900: #3e2723;
	--paper-grey-50: #fafafa;
	--paper-grey-100: #f5f5f5;
	--paper-grey-200: #eeeeee;
	--paper-grey-300: #e0e0e0;
	--paper-grey-400: #bdbdbd;
	--paper-grey-500: #9e9e9e;
	--paper-grey-600: #757575;
	--paper-grey-700: #616161;
	--paper-grey-800: #424242;
	--paper-grey-900: #212121;
	--paper-grey-1000: #141414;
	--paper-blue-grey-50: #eceff1;
	--paper-blue-grey-100: #cfd8dc;
	--paper-blue-grey-200: #b0bec5;
	--paper-blue-grey-300: #90a4ae;
	--paper-blue-grey-400: #78909c;
	--paper-blue-grey-500: #607d8b;
	--paper-blue-grey-600: #546e7a;
	--paper-blue-grey-700: #455a64;
	--paper-blue-grey-800: #37474f;
`},5679:(e,t,n)=>{"use strict";n.d(t,{P7:()=>a});const a=["4K","\u539f\u753bPRO","\u539f\u753b","1080P \u539f\u753b","\u84dd\u5149","\u84dd\u5149PRO","1080P \u84dd\u5149","\u8d85\u6e05PRO","720P \u539f\u753b","720P \u84dd\u5149","\u8d85\u6e05","720P \u8d85\u6e05","\u9ad8\u6e05","720P \u9ad8\u6e05","480P \u9ad8\u6e05","\u6d41\u7545"]},5700:(e,t,n)=>{"use strict";n.a(e,(async(e,a)=>{try{n.d(t,{T:()=>h});var i=n(8087),r=n(6540),o=n(5999),s=n(3579),l=n(7006),c=n(2128),d=n(5296),u=e([d]);d=(u.then?(await u)():u)[0];const p=o.DU`
  .bilibili-helper-2-icon-cat-paw {
    margin: 0 8px 0 4px;
    color: var(--bilibili-pink);
    transform: rotate(-35deg);
    zoom: .74;
  }
  .extension-reload-btn {
    margin-left: 8px;
    padding: 0 8px;
    height: 20px;
    line-height: 20px;
    border-radius: 6px;
    background-color: var(--bilibili-blue);
    color: var(--bilibili-gray);
    text-decoration: none;
  }
`;class h extends r.Component{constructor(e){super(e)}componentDidMount(){this.props.initialized||i.QB.error(r.createElement(r.Fragment,null,"\u52a9\u624b\u521d\u59cb\u5316\u5f02\u5e38",r.createElement("a",{className:"extension-reload-btn",onClick:this.handleOnReloadExtension},"\u70b9\u51fb\u91cd\u542f")),0),chrome.runtime.sendMessage({target:"umami",event:"sendPage",pathname:"/config/home"})}handleOnReloadExtension=()=>{chrome.runtime.reload()};render(){return r.createElement(l.I9,null,r.createElement(s.z,null),r.createElement(p,null),r.createElement(c.Y,null),r.createElement(d.g,null))}}a()}catch(e){a(e)}}))},5752:(e,t,n)=>{"use strict";n.d(t,{oS:()=>r});n(5542),n(4707);JSON.parse('{"1":13,"2":12,"3":46,"4":31,"5":43,"6":18,"7":40,"8":28,"9":5,"f":0,"Z":1,"o":2,"d":3,"R":4,"X":6,"Q":7,"D":8,"S":9,"U":10,"m":11,"y":14,"C":15,"k":16,"r":17,"z":19,"B":20,"q":21,"i":22,"v":23,"e":24,"Y":25,"a":26,"h":27,"b":29,"t":30,"x":32,"s":33,"W":34,"p":35,"H":36,"n":37,"J":38,"E":39,"j":41,"L":42,"V":44,"G":45,"g":47,"u":48,"M":49,"T":50,"K":51,"N":52,"P":53,"A":54,"w":55,"c":56,"F":57}');const a={XOR_CODE:23442827791579n,MASK_CODE:2251799813685247n,MAX_AID:2251799813685248n,BASE:58n,table:"FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf"},i=function(e){const t=["B","V","1","0","0","0","0","0","0","0","0","0"];let n=t.length-1,i=(a.MAX_AID|BigInt(e))^a.XOR_CODE;while(i>0)t[n]=a.table[Number(i%BigInt(a.BASE))],i/=a.BASE,n-=1;return[t[3],t[9]]=[t[9],t[3]],[t[4],t[7]]=[t[7],t[4]],t.join("")};self.av2bv=i;const r=function(e){const t=Array.from(e);[t[3],t[9]]=[t[9],t[3]],[t[4],t[7]]=[t[7],t[4]],t.splice(0,3);const n=t.reduce(((e,t)=>e*a.BASE+BigInt(a.table.indexOf(t))),0n);return Number(n&a.MASK_CODE^a.XOR_CODE)};self.bv2av=r},5808:(e,t,n)=>{var a=n(2507),i=a("toUpperCase");e.exports=i},5851:(e,t,n)=>{"use strict";n.d(t,{h:()=>o});var a=n(6540),i=n(5999);const r=i.Ay.h2`
  margin: 0 0 12px;

  .title {
    margin: 0;
    font-size: 24px;
    font-weight: normal;
    color: #333;
  }

  p {
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 12px;
    font-weight: normal;
    color: #333;
  }
`;class o extends a.Component{constructor(e){super(e)}render(){const{title:e,description:t}=this.props;return a.createElement(r,null,e?a.createElement("div",{className:"title"},e):null,t?a.createElement("p",null,t):null)}}},5998:(e,t,n)=>{"use strict";n.d(t,{J3:()=>a,tn:()=>i});const a={0:"\u81ea\u52a8",15:"360P \u6d41\u7545",16:"360P \u6d41\u7545",32:"480P \u6e05\u6670",48:"720P \u9ad8\u6e05",64:"720P \u9ad8\u6e05",74:"720P60 \u9ad8\u6e05",80:"1080P \u9ad8\u6e05",112:"1080P \u9ad8\u7801\u7387",116:"1080P 60\u5e27",120:"4K \u8d85\u6e05",125:"HDR \u771f\u5f69",126:"\u675c\u6bd4\u89c6\u754c",127:"8K \u8d85\u9ad8\u6e05"},i=[127,126,125,120,116,112,80,64,32,16];var r,o;(function(e){e["bv"]="bvid",e["av"]="aid",e["ep"]="epId",e["ss"]="ssId"})(r||(r={})),function(e){e["wide"]="wide",e["full"]="full",e["web"]="web",e["normal"]="normal"}(o||(o={}))},6097:(e,t,n)=>{"use strict";n(5542)},6354:(e,t,n)=>{"use strict";n(5093)},6979:(e,t,n)=>{"use strict";function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e){return null!==e&&"object"===a(e)&&Object.prototype.hasOwnProperty.call(e,"current")}n.d(t,{i:()=>i})},7056:(e,t,n)=>{"use strict";n.d(t,{k:()=>a});const a={"paper-blue-grey-900":"#263238","dark-divider-opacity":"0.12","dark-disabled-opacity":"0.38","dark-secondary-opacity":"0.54","dark-primary-opacity":"0.87","light-divider-opacity":"0.12","light-disabled-opacity":"0.3","light-secondary-opacity":"0.7","light-primary-opacity":"1.0"}},7096:(e,t,n)=>{"use strict";n.d(t,{A:()=>P});var a=n(1653),i=n(6540),r=n(3205),o=n(5999),s=n(8285),l=n(8221),c=n.n(l),d=n(2398),u=n(8768);const p=o.Ay.div.attrs({className:"account-block"})`
  display: flex;
  margin-bottom: 8px;
  padding: 1px 1px 8px;
  width: 100%;
  border-bottom: 1px solid #f7f7f7;
  box-sizing: border-box;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 1px;
    border-bottom: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  .avatar {
    flex-shrink: 0;
    margin-right: 16px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 2px #b9b9b9;
    overflow: hidden;
    cursor: pointer;
  }

  .info {
    flex-grow: 1;
    padding: 2px 0;
    max-width: 350px;
    box-sizing: border-box;

    h6 {
      display: flex;
      align-items: center;
      margin: 0 0 4px 0;
      font-size: 14px;

      .level {
        margin-left: 8px;
        padding: 0 6px;
        border-radius: 3px;
        color: #fff;
        zoom: 0.7;

        &.lv0 {
          background-color: #bfbfbf;
        }

        &.lv1 {
          background-color: #bfbfbf;
        }

        &.lv2 {
          background-color: #95ddb2;
        }

        &.lv3 {
          background-color: #93d1e4;
        }

        &.lv4 {
          background-color: #ffb37c;
        }

        &.lv5 {
          background-color: #fe6c06;
        }

        &.lv6 {
          background-color: #fe0202;
        }
      }

      .add-btn {
        display: inline-block;
        margin-left: auto;
        height: 20px;
        vertical-align: bottom;
        font-size: 12px;
        background-color: var(--bilibili-blue);
        color: var(--google-grey-50);
      }

      .cancel-btn {
        display: inline-block;
        margin-left: auto;
        height: 20px;
        vertical-align: bottom;
        font-size: 12px;
        background-color: var(--google-grey-400);
        color: var(--google-grey-50);
      }
    }

    p {
      margin: 0 0 4px 0;
      color: #585858;
      overflow: hidden;
      white-space: break-spaces;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      span, a {
        margin-right: 12px
      }
    }

    i {
      font-style: normal;
    }
  }

  .action-box {
    flex-shrink: 0;

    .button {
      margin-top: 15.5px;
      background-color: var(--bilibili-blue);
      color: var(--google-grey-50);
    }
  }
`,h=e=>{const{added:t,mid:n,uname:r,face:o,level:s,videos:l,fans:c,sign:d,onOpenUserSpace:u,onClickAttentionBtn:h}=e,g=o.match("noface.gif$")?o:o+"@140w_140h.webp";return i.createElement(p,null,i.createElement("div",{className:"avatar",onClick:()=>u(n)},i.createElement(a._V,{url:g.replace(/^(http:\/\/|\/\/)/,"https://"),sign:r})),i.createElement("div",{className:"info"},i.createElement("h6",null,i.createElement("a",{onClick:()=>u(n)},r),s?i.createElement("span",{className:`level lv${s}`},"Lv.",s):null,i.createElement(a.sL,{className:t?"cancel-btn":"add-btn",onClick:()=>h(n)},t?"\u53d6\u6d88":"\u6dfb\u52a0")),(l||c)&&i.createElement("p",null,l&&i.createElement("span",null,"\u7a3f\u4ef6\u6570\uff1a",i.createElement("i",null,l)),c&&i.createElement("span",null,"\u7c89\u4e1d\u6570\uff1a",i.createElement("i",null,c))),d?i.createElement("p",{className:"sign",title:d},d):null))},g=(0,o.Ay)(a.aF)`
	width: 500px;
`,m=o.Ay.div`
	.search-bar {
		display: flex;
		
		input {
			flex-grow: 1;
			outline: none;
			padding: 6px 10px;
			margin-right: 12px;
		}
		
		.button {
			flex-shrink: 0;
			vertical-align: middle;
			background-color: var(--bilibili-blue);
			color: var(--google-grey-50);
			height: auto;
		}
	}
	
	.result-box {
		min-height: 20px;
		
		.list {
			position: relative;
			padding: 8px;
			height: 300px;
			border: 1px dashed rgb(238, 238, 238);
			border-radius: 6px;
			box-sizing: border-box;
			overflow: auto;
		}
		
		.has-more-block {
			height: 50px;
		}
	}
`;class f extends i.Component{constructor(e){super(e),this.state={modalOn:!1,searching:!1,searchResult:[],resultCount:0,hasMore:!1,keyword:"",pn:1},this.searchResultListRef=i.createRef(),this.bottomObserverRef=i.createRef()}componentDidMount(){this.searchResultListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver(((e,t)=>{this.state.hasMore&&e.length&&0!==e[0].intersectionRatio&&this.sendSearchRequest(this.state.keyword,this.state.pn)}),{root:this.searchResultListRef.current}),this.observer.observe(this.bottomObserverRef.current))}createTab(e){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}handleOnCreateUserSpaceTab=e=>{this.createTab("https://space.bilibili.com/"+e)};handleOnClickOpenModal=()=>{this.setState({modalOn:!0})};handleOnClickCloseModal=()=>{this.setState({modalOn:!1})};handleOnUserInputChange=e=>{e.persist(),this._onChange||(this._onChange=c()((e=>{const t=e.target.value.trim();t&&this.setState({keyword:t,pn:1,searchResult:[],hasMore:!1},(()=>{this.handleOnSearchUser(t,this.state.pn)}))}),700)),this._onChange(e)};handleOnSearchUser=(e,t=1)=>{e&&new Promise((e=>{this.searching?this.cancelSearchRequest().then((t=>e(!t))):e(!1)})).then((n=>{n||(this.searching=!0,this.sendSearchRequest(e,t).then((()=>{this.searchResultListRef.current.scrollTo(0,0)})))}))};sendSearchRequest=async(e,t=1)=>{if(!e)return;const n="https://api.bilibili.com/x/web-interface/search/type",a={search_type:"bili_user",page:t,order:0,order_sort:0,user_type:0,keyword:e},i=(0,u.Rj)(n,a);return this.fetchPassword=Date.now(),new Promise((e=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:i,options:{contentType:"json",controlPassword:this.fetchPassword}},(({data:n})=>{if(this.searching=!1,n&&n.data&&n.data.result&&n.data.result.length>0){const{searchResult:a}=this.state;a.push(...n.data.result),this.setState({searchResult:a,resultCount:n.data.numResults,hasMore:t<n.data.numPages,pn:t+1}),e()}else e()}))}))};cancelSearchRequest=()=>new Promise((e=>{chrome.runtime.sendMessage({target:"requestController",event:"cancel",controlPassword:this.fetchPassword},(t=>{e(t)}))}));render(){const{modalOn:e=!1,title:t,addedUidList:n,onClickAccountBtn:r,onClickClose:o}=this.props,{searchResult:s,resultCount:l}=this.state;return i.createElement(g,{open:e,title:t,footer:i.createElement(i.Fragment,null,i.createElement(a.sL,{onClick:o},"\u5173\u95ed")),onClickMask:o},i.createElement(m,null,i.createElement("div",{className:"search-bar"},i.createElement(d.p,{onChange:this.handleOnUserInputChange,type:"text",placeholder:"\u8f93\u5165\u7528\u6237\u540d\u8fdb\u884c\u641c\u7d22"}),i.createElement(a.sL,null,"\u641c\u7d22")),i.createElement("div",{className:"result-box"},i.createElement("p",null,"\u641c\u7d22\u7ed3\u679c",l?i.createElement("span",null," ~ \u5171\u627e\u5230 ",1e3===l?"1000+":l," \u4e2a\u7528\u6237"):null),i.createElement("div",{className:"list",ref:this.searchResultListRef},s.length>0?s.map((e=>i.createElement(h,{key:e.mid,...e,face:e.upic,sign:e.usign,added:n.has(e.mid),onOpenUserSpace:this.handleOnCreateUserSpaceTab,onClickAttentionBtn:r}))):"\u6ca1\u6709\u6570\u636e\uff0c\u8f93\u5165\u5173\u952e\u8bcd\u5f00\u59cb\u641c\u7d22",i.createElement("div",{className:"has-more-block",ref:this.bottomObserverRef})))))}}const b=(0,o.Ay)(a.aF)`
	width: 500px;
`,v=o.Ay.div`
	.search-bar {
		display: flex;
		
		input {
			flex-grow: 1;
			outline: none;
			padding: 6px 10px;
			margin-right: 12px;
		}
		
		.button {
			flex-shrink: 0;
			vertical-align: middle;
			background-color: var(--bilibili-blue);
			color: var(--google-grey-50);
			height: auto;
		}
	}
	
	.result-box {
		position: relative;
		min-height: 20px;
		
		.list {
			padding: 8px;
			height: 300px;
			border: 1px dashed rgb(238, 238, 238);
			border-radius: 6px;
			box-sizing: border-box;
			overflow: auto;
			transform: scale(1);
		}
		
		.has-more-block {
			height: 50px;
		}
	}
`;class y extends i.Component{constructor(e){super(e),this.state={modalOn:!1,searching:!1,searchResult:[],resultCount:0,hasMore:!1,keyword:"",pn:1,listType:"all"},this.searchResultListRef=i.createRef(),this.bottomObserverRef=i.createRef()}initialized=!1;componentDidMount(){this.searchResultListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver(((e,t)=>{this.state.hasMore&&this.props.modalOn&&e.length&&0!==e[0].intersectionRatio&&this.sendSearchRequest(this.state.pn)}),{root:this.searchResultListRef.current}),this.observer.observe(this.bottomObserverRef.current))}componentDidUpdate(){!this.initialized&&this.props.bilibiliAccount&&this.props.modalOn&&(this.initialized=!0,this.sendSearchRequest(1))}createTab(e){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}handleOnCreateUserSpaceTab=e=>{this.createTab("https://space.bilibili.com/"+e)};handleOnClickOpenModal=()=>{this.setState({modalOn:!0})};handleOnClickCloseModal=()=>{this.setState({modalOn:!1})};handleOnUserInputChange=e=>{e.persist(),this._onChange||(this._onChange=c()((e=>{const t=e.target.value.trim();t?this.setState({keyword:t,pn:1,searchResult:[],hasMore:!1},(()=>{this.handleOnSearchUser(this.state.pn)})):this.setState({keyword:"",pn:1,hasMore:!1},(()=>{this.handleOnSearchUser(this.state.pn)}))}),700)),this._onChange(e)};handleOnSearchUser=(e=1)=>{new Promise((e=>{this.searching?this.cancelSearchRequest().then((t=>e(!t))):e(!1)})).then((t=>{t||(this.searching=!0,this.sendSearchRequest(e).then((()=>{this.searchResultListRef.current.scrollTo(0,0)})))}))};sendSearchRequest=async(e=1,t=20)=>{let n="https://api.bilibili.com/x/relation/followings";const a={vmid:this.props.bilibiliAccount.uid,pn:e,ps:t,order:"desc",order_type:"attention"};this.state.keyword&&(n="https://api.bilibili.com/x/relation/followings/search",a.name=this.state.keyword);const i=(0,u.Rj)(n,a);return this.fetchPassword=Date.now(),new Promise((n=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:i,options:{contentType:"json",controlPassword:this.fetchPassword}},(({data:a})=>{if(this.searching=!1,a&&a.data&&a.data.list){if(a.data.list.length>0){let{searchResult:n}=this.state;1===e?n=a.data.list:n.push(...a.data.list),this.setState({searchResult:n,resultCount:a.data.total,hasMore:a.data.list.length===t,pn:e+1})}else this.setState({hasMore:!1});n()}else n()}))}))};cancelSearchRequest=()=>new Promise((e=>{chrome.runtime.sendMessage({target:"requestController",event:"cancel",controlPassword:this.fetchPassword},(t=>{e(t)}))}));render(){const{modalOn:e=!1,title:t,addedUidList:n,onClickAccountBtn:r,onClickClose:o}=this.props,{searchResult:s,resultCount:l,keyword:c}=this.state;return i.createElement(b,{open:e,title:t,footer:i.createElement(i.Fragment,null,i.createElement(a.sL,{onClick:o},"\u5173\u95ed")),onClickMask:o},i.createElement(v,null,i.createElement("div",{className:"search-bar"},i.createElement(d.p,{onChange:this.handleOnUserInputChange,type:"text",placeholder:"\u8f93\u5165\u7528\u6237\u540d\u8fdb\u884c\u641c\u7d22"}),i.createElement(a.sL,{onClick:()=>this.handleOnSearchUser(this.state.pn)},"\u641c\u7d22")),i.createElement("div",{className:"result-box"},i.createElement("p",null,"\u641c\u7d22\u7ed3\u679c",c&&l?i.createElement("span",null," ~ \u5171\u627e\u5230 ",1e3===l?"1000+":l," \u4e2a\u7528\u6237"):null),i.createElement("div",{className:"list",ref:this.searchResultListRef},e&&s.length>0?s.map((e=>i.createElement(h,{key:e.mid,...e,added:n.has(e.mid),onOpenUserSpace:this.handleOnCreateUserSpaceTab,onClickAttentionBtn:r}))):"\u6ca1\u6709\u6570\u636e\uff0c\u8f93\u5165\u5173\u952e\u8bcd\u5f00\u59cb\u641c\u7d22",i.createElement("div",{className:"has-more-block",ref:this.bottomObserverRef})))))}}var S=n(8016),w=n(9983),C=n(5851),E=n(5522),O=n(7177),x=n(9551),k=n(8909);const M=(0,o.Ay)(s.YW)`
  overflow: auto;

  .add-btn {
    background-color: var(--bilibili-blue);
    color: var(--bilibili-gray);
  }

  .follow {
    margin-right: 8px;
  }
`,T=((0,o.Ay)(a.aF)`
  width: 500px;
`,o.Ay.div`
  .search-bar {
    display: flex;

    input {
      flex-grow: 1;
      outline: none;
      padding: 6px 10px;
      margin-right: 8px;
    }

    .button {
      flex-shrink: 0;
      vertical-align: middle;
      background-color: var(--bilibili-blue);
      color: var(--google-grey-50);
    }
  }

  .result-box {
    min-height: 20px;

    .list {
      position: relative;
      padding: 8px;
      height: 300px;
      border: 1px solid #eee;
      border-radius: 2px;
      box-sizing: border-box;
      overflow: auto;
    }
  }
`,o.Ay.div`
  display: flex;
  margin-bottom: 4px;
  padding: 8px 4px 8px 8px;
  border-radius: 6px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #f5f5f5;
  }

  .avatar {
    flex-shrink: 0;
    margin-right: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }

  .info {
    flex: 1;

    h6 {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: normal;
      margin: 0;

      a {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      .level {
        margin-left: 8px;
        padding: 0 6px;
        border-radius: 3px;
        color: #fff;
        zoom: 0.7;

        &.lv0 {
          background-color: #bfbfbf;
        }

        &.lv1 {
          background-color: #bfbfbf;
        }

        &.lv2 {
          background-color: #95ddb2;
          background-color: #95ddb2;
        }

        &.lv3 {
          background-color: #93d1e4;
        }

        &.lv4 {
          background-color: #ffb37c;
        }

        &.lv5 {
          background-color: #fe6c06;
        }

        &.lv6 {
          background-color: #fe0202;
        }
      }
    }

    /*p {
      margin-top: 2px;
      margin-bottom: 0;
      color: #999;
      display: -webkit-box;
      white-space: nowrap;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }*/

    .button {
      margin-left: auto;
      height: 20px;
      font-size: 12px;
      background-color: var(--google-grey-400);
      color: var(--google-grey-50);
    }
  }

  .auto-like-coin-collect-box {
    display: flex;
    margin-top: 6px;

    .config-item {
      display: flex;
      align-items: center;
      margin-right: 30px;
      line-height: 12px;
    }

    input[type="checkbox"] {
      vertical-align: middle;
      margin: 0 4px 0 0;
    }

    label {
      vertical-align: middle;
    }

    .coin-number {
      margin: 0 0 0 2px;
      padding: 0 0 0 2px;
      width: 30px;
      border: 0;
    }

    .collection-id {
      margin: 0 0 0 2px;
      padding: 0 0 0 2px;
      border: 0;
      font-size: 12px;
    }
  }
`),D=function({index:e,username:t,uid:n,level:r,face:o,sign:s,onClickUserName:l,onClickAttentionBtn:c,onDragMove:d,onDrop:u,autoLikeCoinCollectConfig:p,handleOnClickAutoLikeCoinCollect:h,collectionList:g}){const m=i.useRef(null),[,f]=(0,E.H)({accept:"account-block",hover(t,n){if(!m.current)return;const a=t.index,i=e;if(a===i)return;const r=m.current.getBoundingClientRect(),o=(r.bottom-r.top)/2,s=n.getClientOffset(),l=s.y-r.top;a<i&&l<o||a>i&&l>o||(d(a,i),t.index=i)}}),[{isDragging:b},v]=(0,O.i)({item:{type:"account-block",id:n,index:e},collect:e=>({isDragging:e.isDragging()}),end(){u()}}),y=i.useCallback((()=>{l(n)}),[n]),S=i.useCallback((()=>{c(n)}),[n]),w=i.useCallback((e=>{e.stopPropagation();const t=+e.target.value;t>=1&&t<=2&&h(n,"coinNumber",t)}),[h,p]),C=i.useCallback((e=>{let t;e.stopPropagation(),p&&p.collectionId?t=p.collectionId:g&&(t=g[0].id),h(n,"collect",e.target.checked,t)}),[h,p,g]),x=i.useCallback((e=>{e.stopPropagation();const t=e.target.value;h(n,"collectionId",t)}),[h,p,g]);return v(f(m)),i.createElement(T,{key:n,ref:m,className:"user",style:{opacity:b?0:1}},i.createElement("div",{className:"avatar",onClick:y},i.createElement(a._V,{url:o})),i.createElement("div",{className:"info"},i.createElement("h6",null,i.createElement("a",{onClick:y},t),i.createElement("span",{className:`level lv${r}`},"Lv.",r),i.createElement(a.sL,{onClick:S},"\u53d6\u6d88\u7279\u5173")),i.createElement("div",{className:"auto-like-coin-collect-box"},i.createElement("div",{className:["config-item","like",p&&p.like?"active":""].join(" ")},i.createElement("input",{id:n+"like",type:"checkbox",checked:!!p&&!!p.like,onChange:()=>h(n,"like",!(p&&p.like))}),i.createElement("label",{htmlFor:n+"like"},"\u70b9\u8d5e")),i.createElement("div",{className:["config-item","coin",p&&p.coin?"active":""].join(" ")},i.createElement("div",null,i.createElement("input",{id:n+"coin",type:"checkbox",checked:!!p&&!!p.coin,onChange:()=>h(n,"coin",!(p&&p.coin),p&&p.coinNumber||2)}),i.createElement("label",{htmlFor:n+"coin"},"\u6295\u5e01")),i.createElement("input",{className:"coin-number",type:"number",max:2,min:1,step:1,value:p&&p.coinNumber||2,onChange:w}),"\u679a"),i.createElement("div",{className:["config-item","collect",p&&p.collect?"active":""].join(" ")},i.createElement("input",{id:n+"collect",type:"checkbox",checked:!!p&&!!p.collect,onChange:C}),i.createElement("label",{htmlFor:n+"collect"},"\u6536\u85cf")," \u81f3",i.createElement("select",{className:"collection-id",onChange:x,value:p?p.collectionId:g?g[0]:null},g.length>0?g.map((e=>i.createElement("option",{key:e.id,value:e.id},e.title))):i.createElement("option",null,"\u6ca1\u6709\u6570\u636e"))))))};class I extends i.Component{constructor(e){super(e)}static contextType=w.T;state={uidList:new Set,attentionList:[],searchModalOn:!1,followModalOn:!1,searching:!1,searchResult:{},collectionList:[],autoLikeCoinCollectConfigMap:new Map};searchResultListRef=i.createRef();fetchPassword;searching=!1;componentDidMount(){this.updateAccountList(),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"getFeatureConfig"},(e=>(e&&this.setState({autoLikeCoinCollectConfigMap:new Map(e)}),!0)))}updateAccountList=()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionAccountList"},(e=>{e&&this.setState({attentionList:e,uidList:new Set(e.map((({uid:e})=>String(e))))})})),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"fetchCollectionList"},(e=>{e&&this.setState({collectionList:e})}))};handleOnClickOpenSearchModal=()=>{const{uidList:e}=this.state;if(20===e.size)return a.QB.info("\u6dfb\u52a0\u4eba\u6570\u5df2\u8fbe\u5230\u4e0a\u9650");this.setState({searchModalOn:!0})};handleOnClickCloseSearchModal=()=>{this.setState({searchModalOn:!1})};handleOnClickOpenFollowModal=()=>{const{uidList:e}=this.state;if(20===e.size)return a.QB.info("\u6dfb\u52a0\u4eba\u6570\u5df2\u8fbe\u5230\u4e0a\u9650");this.setState({followModalOn:!0})};handleOnClickCloseFollowModal=()=>{this.setState({followModalOn:!1})};createTab(e){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}handleOnCreateUserSpaceTab=e=>{this.createTab("https://space.bilibili.com/"+e)};handleOnAddSpecialAttention=e=>{const{uidList:t}=this.state;if(20===t.size)return a.QB.info("\u6dfb\u52a0\u4eba\u6570\u5df2\u8fbe\u5230\u4e0a\u9650");chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:e},(t=>{if(t){this.context.uploadSettings("specialAttention");const{uidList:n}=this.state;n.add(e),this.setState({uidList:n},(()=>{const{attentionList:e}=this.state;e.push(t),this.setState({attentionList:e})}))}}))};handleOnRemoveSpecialAttention=e=>{chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:String(e)},(t=>{if(t){this.context.uploadSettings("specialAttention");const{uidList:t}=this.state;t.delete(String(e)),this.setState({uidList:t},(()=>{const{attentionList:t}=this.state,n=t.findIndex((t=>String(t.uid)===String(e)));n>=0&&(t.splice(n,1),this.setState({attentionList:t}))}))}})),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"removeUserConfig",uid:String(e)},(t=>{if(t){this.context.uploadSettings("autoLikeCoinCollect");const{autoLikeCoinCollectConfigMap:t}=this.state;t.has(String(e))&&(t.delete(String(e)),this.setState({autoLikeCoinCollectConfigMap:t}))}}))};handleOnClickAttentionBtn=e=>{const t=this.state.uidList.has(String(e));t?this.handleOnRemoveSpecialAttention(String(e)):this.handleOnAddSpecialAttention(String(e))};handleOnMoveAccount=(e,t)=>{const{uidList:n,attentionList:a}=this.state,i=Array.from(n),r=i[e];i.splice(e,1),i.splice(t,0,r);const o=a[e];a.splice(e,1),a.splice(t,0,o),this.setState({uidList:new Set(i),attentionList:a})};handleOnDropAccount=()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"setSpecialAttentionList",uidList:Array.from(this.state.uidList)},(()=>{this.context.uploadSettings("specialAttention")}))};updateAutoLikeCoinCollectConfigMap=(e,t)=>{const{autoLikeCoinCollectConfigMap:n}=this.state;n.set(e,t),this.setState({autoLikeCoinCollectConfigMap:new Map(n)},(()=>{this.context.uploadSettings("autoLikeCoinCollect")}))};handleOnClickAutoLikeCoinCollect=(e,t,n,a)=>{chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"setFeatureConfig",uid:e,type:t,value:n,extraValue:a},(a=>{if(a){const{autoLikeCoinCollectConfigMap:a}=this.state;let i=a.get(e);i?n?i[t]=n:(delete i[t],"coin"===t?delete i.coinNumber:"collect"===t&&delete i.collectionId):i={[t]:n},this.updateAutoLikeCoinCollectConfigMap(e,i)}}))};render(){const{uidList:e,searchModalOn:t,followModalOn:n,attentionList:r,autoLikeCoinCollectConfigMap:o,collectionList:l}=this.state,{hasLogin:c,bilibiliAccount:d}=this.context;return i.createElement(M,null,i.createElement(C.h,{title:"\u7279\u522b\u5173\u6ce8\u8bbe\u7f6e",description:"ACG\u52a9\u624b\u4f1a\u4e3b\u52a8\u63a8\u9001\u5728\u7279\u522b\u5173\u6ce8\u5217\u8868\u4e2d\u7528\u6237\u7684\u52a8\u6001\u5185\u5bb9\uff0c\u4e5f\u7528\u4e8e\u5728\u6269\u5c55\u7a97\u53e3\u4e2d\u5feb\u6377\u6d4f\u89c8"}),i.createElement(s.KK,{title:"\u7279\u522b\u5173\u6ce8\u5217\u8868\u7ba1\u7406",description:"\u7279\u522b\u5173\u6ce8\u7684UP\u4e3b\u9700\u8981\u540c\u65f6\u5728b\u7ad9\u5173\u6ce8\u624d\u80fd\u6536\u5230\u63a8\u9001\u54e6"},i.createElement(s.wn,{title:i.createElement(i.Fragment,null,"\u5df2\u6dfb\u52a0\u5217\u8868",r&&r.length>0?i.createElement("span",null,"(",r.length+"/20",")"):null),description:"\u62d6\u52a8\u5217\u8868\u9879\u76ee\u53ef\u4ee5\u6392\u5e8f",hasLogin:c,active:c,toolbar:i.createElement(i.Fragment,null,i.createElement(a.sL,{disabled:r.length>=20||!c,disableEvent:!1,className:"add-btn follow",onClick:this.handleOnClickOpenFollowModal},"\u4ece\u5173\u6ce8\u5217\u8868\u6dfb\u52a0"),i.createElement(a.sL,{disabled:r.length>=20||!c,disableEvent:!1,className:"add-btn search",onClick:this.handleOnClickOpenSearchModal},"\u641c\u7d22\u6dfb\u52a0")),helperArea:i.createElement(i.Fragment,null,"\u9700\u767b\u5f55",i.createElement(a.In,{size:16,icon:"bilibili"}),"\u8d26\u53f7\u548c",i.createElement(a.In,{size:16,icon:"acghelper"}),"\u8d26\u53f7",i.createElement("br",null),i.createElement("br",null),"\u6dfb\u52a0\u4e3a\u7279\u522b\u5173\u6ce8\u540e\u53ef\u4f7f\u7528\u81ea\u5b9a\u4e49\u4e00\u952e\u4e09\u8fde\u529f\u80fd\uff0c",i.createElement("br",null),"\u80fd\u591f\u5206\u522b\u6307\u5b9a\u70b9\u8d5e\u3001\u6295\u5e01\u6570\u91cf\u548c\uff08\u6216\uff09\u6536\u85cf\u7684\u6536\u85cf\u5939",i.createElement("br",null),i.createElement("b",null,"\u6253\u5f00\u89c6\u9891\u9875\u9762\u540e\u4f1a\u66ff\u60a8\u6267\u884c\u8bbe\u7f6e\u597d\u7684\u4e09\u8fde\u64cd\u4f5c"))},i.createElement(x.Q,{backend:k.t2},i.createElement("div",{className:"added-list"},r.map(((e,t)=>i.createElement(D,{key:e.uid,...e,index:t,onClickUserName:this.handleOnCreateUserSpaceTab,onClickAttentionBtn:this.handleOnClickAttentionBtn,onDragMove:this.handleOnMoveAccount,onDrop:this.handleOnDropAccount,autoLikeCoinCollectConfig:o.get(e.uid),handleOnClickAutoLikeCoinCollect:this.handleOnClickAutoLikeCoinCollect,collectionList:l}))),0===r.length?"\u6ca1\u6709\u5185\u5bb9":null)))),i.createElement(f,{modalOn:t,title:"\u641c\u7d22\u6dfb\u52a0\u300c\u52a9\u624b\u7684\u7279\u522b\u5173\u6ce8\u300d",addedUidList:e,onClickAccountBtn:this.handleOnClickAttentionBtn,onClickClose:this.handleOnClickCloseSearchModal}),i.createElement(y,{modalOn:n,title:"\u4ece\u300c\u5df2\u5173\u6ce8\u5217\u8868\u300d\u6dfb\u52a0\u300c\u52a9\u624b\u7684\u7279\u522b\u5173\u6ce8\u300d",addedUidList:e,onClickAccountBtn:this.handleOnClickAttentionBtn,onClickClose:this.handleOnClickCloseFollowModal,bilibiliAccount:this.context.bilibiliAccount}),i.createElement(S.g,{show:!c||!d},"\u8be5\u9875\u9762\u529f\u80fd\u9700\u8981\u60a8\u540c\u65f6\u767b\u5f55",i.createElement(a.In,{icon:"bilibili",size:16}),"\u8d26\u53f7\u548c",i.createElement(a.In,{icon:"acghelper",size:16}),"\u8d26\u53f7"))}}const P=(0,r.y)(I)},7112:(e,t,n)=>{"use strict";n.d(t,{M:()=>ft,s:()=>bt});var a=n(6540);function i(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var r=function(){return"function"===typeof Symbol&&Symbol.observable||"@@observable"}(),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},s={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function l(e){if("object"!==typeof e||null===e)return!1;var t=e;while(null!==Object.getPrototypeOf(t))t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,n){var a;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error(i(0));if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error(i(1));return n(c)(e,t)}if("function"!==typeof e)throw new Error(i(2));var o=e,d=t,u=[],p=u,h=!1;function g(){p===u&&(p=u.slice())}function m(){if(h)throw new Error(i(3));return d}function f(e){if("function"!==typeof e)throw new Error(i(4));if(h)throw new Error(i(5));var t=!0;return g(),p.push(e),function(){if(t){if(h)throw new Error(i(6));t=!1,g();var n=p.indexOf(e);p.splice(n,1),u=null}}}function b(e){if(!l(e))throw new Error(i(7));if("undefined"===typeof e.type)throw new Error(i(8));if(h)throw new Error(i(9));try{h=!0,d=o(d,e)}finally{h=!1}for(var t=u=p,n=0;n<t.length;n++){var a=t[n];a()}return e}function v(e){if("function"!==typeof e)throw new Error(i(10));o=e,b({type:s.REPLACE})}function y(){var e,t=f;return e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(i(11));function n(){e.next&&e.next(m())}n();var a=t(n);return{unsubscribe:a}}},e[r]=function(){return this},e}return b({type:s.INIT}),a={dispatch:b,subscribe:f,getState:m,replaceReducer:v},a[r]=y,a}var d="dnd-core/INIT_COORDS",u="dnd-core/BEGIN_DRAG",p="dnd-core/PUBLISH_DRAG_SOURCE",h="dnd-core/HOVER",g="dnd-core/DROP",m="dnd-core/END_DRAG",f=function(e,t){return e===t};function b(e,t){return!e&&!t||!(!e||!t)&&(e.x===t.x&&e.y===t.y)}function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f;if(e.length!==t.length)return!1;for(var a=0;a<e.length;++a)if(!n(e[a],t[a]))return!1;return!0}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case d:case u:return{initialSourceClientOffset:n.sourceClientOffset,initialClientOffset:n.clientOffset,clientOffset:n.clientOffset};case h:return b(e.clientOffset,n.clientOffset)?e:S(S({},e),{},{clientOffset:n.clientOffset});case m:case g:return C;default:return e}}var O="dnd-core/ADD_SOURCE",x="dnd-core/ADD_TARGET",k="dnd-core/REMOVE_SOURCE",M="dnd-core/REMOVE_TARGET";function T(e){return{type:O,payload:{sourceId:e}}}function D(e){return{type:x,payload:{targetId:e}}}function I(e){return{type:k,payload:{sourceId:e}}}function P(e){return{type:M,payload:{targetId:e}}}function A(e){return A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function N(e,t,n){return t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:n||null}),e)}function _(e,t){return e.filter((function(e){return e!==t}))}function L(e){return"object"===A(e)}function R(e,t){var n=new Map,a=function(e){n.set(e,n.has(e)?n.get(e)+1:1)};e.forEach(a),t.forEach(a);var i=[];return n.forEach((function(e,t){1===e&&i.push(t)})),i}function B(e,t){return e.filter((function(e){return t.indexOf(e)>-1}))}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){U(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case u:return V(V({},e),{},{itemType:n.itemType,item:n.item,sourceId:n.sourceId,isSourcePublic:n.isSourcePublic,dropResult:null,didDrop:!1});case p:return V(V({},e),{},{isSourcePublic:!0});case h:return V(V({},e),{},{targetIds:n.targetIds});case M:return-1===e.targetIds.indexOf(n.targetId)?e:V(V({},e),{},{targetIds:_(e.targetIds,n.targetId)});case g:return V(V({},e),{},{dropResult:n.dropResult,didDrop:!0,targetIds:[]});case m:return V(V({},e),{},{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}}function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:case x:return e+1;case k:case M:return e-1;default:return e}}var W=[],Y=[];function z(e,t){if(e===W)return!1;if(e===Y||"undefined"===typeof t)return!0;var n=B(t,e);return n.length>0}function K(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:break;case O:case x:case M:case k:return W;case u:case p:case m:case g:default:return Y}var t=e.payload,n=t.targetIds,a=void 0===n?[]:n,i=t.prevTargetIds,r=void 0===i?[]:i,o=R(a,r),s=o.length>0||!v(a,r);if(!s)return W;var l=r[r.length-1],c=a[a.length-1];return l!==c&&(l&&o.push(l),c&&o.push(c)),o}function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e+1}function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){X(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{dirtyHandlerIds:K(e.dirtyHandlerIds,{type:t.type,payload:q(q({},t.payload),{},{prevTargetIds:N(e,"dragOperation.targetIds",[])})}),dragOffset:E(e.dragOffset,t),refCount:H(e.refCount,t),dragOperation:j(e.dragOperation,t),stateId:G(e.stateId)}}W.__IS_NONE__=!0,Y.__IS_ALL__=!0;var Z=n(2954);function ee(e,t){return{type:d,payload:{sourceClientOffset:t||null,clientOffset:e||null}}}var te={type:d,payload:{clientOffset:null,sourceClientOffset:null}};function ne(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{publishSource:!0},a=n.publishSource,i=void 0===a||a,r=n.clientOffset,o=n.getSourceClientOffset,s=e.getMonitor(),l=e.getRegistry();e.dispatch(ee(r)),ae(t,s,l);var c=oe(t,s);if(null!==c){var d=null;if(r){if(!o)throw new Error("getSourceClientOffset must be defined");ie(o),d=o(c)}e.dispatch(ee(r,d));var p=l.getSource(c),h=p.beginDrag(s,c);re(h),l.pinSource(c);var g=l.getSourceType(c);return{type:u,payload:{itemType:g,item:h,sourceId:c,clientOffset:r||null,sourceClientOffset:d||null,isSourcePublic:!!i}}}e.dispatch(te)}}function ae(e,t,n){(0,Z.V)(!t.isDragging(),"Cannot call beginDrag while dragging."),e.forEach((function(e){(0,Z.V)(n.getSource(e),"Expected sourceIds to be registered.")}))}function ie(e){(0,Z.V)("function"===typeof e,"When clientOffset is provided, getSourceClientOffset must be a function.")}function re(e){(0,Z.V)(L(e),"Item must be an object.")}function oe(e,t){for(var n=null,a=e.length-1;a>=0;a--)if(t.canDragSource(e[a])){n=e[a];break}return n}function se(e){return function(){var t=e.getMonitor();if(t.isDragging())return{type:p}}}function le(e,t){return null===t?null===e:Array.isArray(e)?e.some((function(e){return e===t})):e===t}function ce(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.clientOffset;de(t);var i=t.slice(0),r=e.getMonitor(),o=e.getRegistry();ue(i,r,o);var s=r.getItemType();return pe(i,o,s),he(i,r,o),{type:h,payload:{targetIds:i,clientOffset:a||null}}}}function de(e){(0,Z.V)(Array.isArray(e),"Expected targetIds to be an array.")}function ue(e,t,n){(0,Z.V)(t.isDragging(),"Cannot call hover while not dragging."),(0,Z.V)(!t.didDrop(),"Cannot call hover after drop.");for(var a=0;a<e.length;a++){var i=e[a];(0,Z.V)(e.lastIndexOf(i)===a,"Expected targetIds to be unique in the passed array.");var r=n.getTarget(i);(0,Z.V)(r,"Expected targetIds to be registered.")}}function pe(e,t,n){for(var a=e.length-1;a>=0;a--){var i=e[a],r=t.getTargetType(i);le(r,n)||e.splice(a,1)}}function he(e,t,n){e.forEach((function(e){var a=n.getTarget(e);a.hover(t,e)}))}function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){fe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.getMonitor(),a=e.getRegistry();ve(n);var i=we(n);i.forEach((function(i,r){var o=ye(i,r,a,n),s={type:g,payload:{dropResult:me(me({},t),o)}};e.dispatch(s)}))}}function ve(e){(0,Z.V)(e.isDragging(),"Cannot call drop while not dragging."),(0,Z.V)(!e.didDrop(),"Cannot call drop twice during one drag operation.")}function ye(e,t,n,a){var i=n.getTarget(e),r=i?i.drop(a,e):void 0;return Se(r),"undefined"===typeof r&&(r=0===t?{}:a.getDropResult()),r}function Se(e){(0,Z.V)("undefined"===typeof e||L(e),"Drop result must either be an object or undefined.")}function we(e){var t=e.getTargetIds().filter(e.canDropOnTarget,e);return t.reverse(),t}function Ce(e){return function(){var t=e.getMonitor(),n=e.getRegistry();Ee(t);var a=t.getSourceId();if(null!=a){var i=n.getSource(a,!0);i.endDrag(t,a),n.unpinSource()}return{type:m}}}function Ee(e){(0,Z.V)(e.isDragging(),"Cannot call endDrag while not dragging.")}function Oe(e){return{beginDrag:ne(e),publishDragSource:se(e),hover:ce(e),drop:be(e),endDrag:Ce(e)}}function xe(e,t){return{x:e.x+t.x,y:e.y+t.y}}function ke(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Me(e){var t=e.clientOffset,n=e.initialClientOffset,a=e.initialSourceClientOffset;return t&&n&&a?ke(xe(t,a),n):null}function Te(e){var t=e.clientOffset,n=e.initialClientOffset;return t&&n?ke(t,n):null}function De(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ie(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Pe(e,t,n){return t&&Ie(e.prototype,t),n&&Ie(e,n),e}var Ae,Ne=function(){function e(t,n){De(this,e),this.store=t,this.registry=n}return Pe(e,[{key:"subscribeToStateChange",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{handlerIds:void 0},a=n.handlerIds;(0,Z.V)("function"===typeof e,"listener must be a function."),(0,Z.V)("undefined"===typeof a||Array.isArray(a),"handlerIds, when specified, must be an array of strings.");var i=this.store.getState().stateId,r=function(){var n=t.store.getState(),r=n.stateId;try{var o=r===i||r===i+1&&!z(n.dirtyHandlerIds,a);o||e()}finally{i=r}};return this.store.subscribe(r)}},{key:"subscribeToOffsetChange",value:function(e){var t=this;(0,Z.V)("function"===typeof e,"listener must be a function.");var n=this.store.getState().dragOffset,a=function(){var a=t.store.getState().dragOffset;a!==n&&(n=a,e())};return this.store.subscribe(a)}},{key:"canDragSource",value:function(e){if(!e)return!1;var t=this.registry.getSource(e);return(0,Z.V)(t,"Expected to find a valid source."),!this.isDragging()&&t.canDrag(this,e)}},{key:"canDropOnTarget",value:function(e){if(!e)return!1;var t=this.registry.getTarget(e);if((0,Z.V)(t,"Expected to find a valid target."),!this.isDragging()||this.didDrop())return!1;var n=this.registry.getTargetType(e),a=this.getItemType();return le(n,a)&&t.canDrop(this,e)}},{key:"isDragging",value:function(){return Boolean(this.getItemType())}},{key:"isDraggingSource",value:function(e){if(!e)return!1;var t=this.registry.getSource(e,!0);if((0,Z.V)(t,"Expected to find a valid source."),!this.isDragging()||!this.isSourcePublic())return!1;var n=this.registry.getSourceType(e),a=this.getItemType();return n===a&&t.isDragging(this,e)}},{key:"isOverTarget",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shallow:!1};if(!e)return!1;var n=t.shallow;if(!this.isDragging())return!1;var a=this.registry.getTargetType(e),i=this.getItemType();if(i&&!le(a,i))return!1;var r=this.getTargetIds();if(!r.length)return!1;var o=r.indexOf(e);return n?o===r.length-1:o>-1}},{key:"getItemType",value:function(){return this.store.getState().dragOperation.itemType}},{key:"getItem",value:function(){return this.store.getState().dragOperation.item}},{key:"getSourceId",value:function(){return this.store.getState().dragOperation.sourceId}},{key:"getTargetIds",value:function(){return this.store.getState().dragOperation.targetIds}},{key:"getDropResult",value:function(){return this.store.getState().dragOperation.dropResult}},{key:"didDrop",value:function(){return this.store.getState().dragOperation.didDrop}},{key:"isSourcePublic",value:function(){return Boolean(this.store.getState().dragOperation.isSourcePublic)}},{key:"getInitialClientOffset",value:function(){return this.store.getState().dragOffset.initialClientOffset}},{key:"getInitialSourceClientOffset",value:function(){return this.store.getState().dragOffset.initialSourceClientOffset}},{key:"getClientOffset",value:function(){return this.store.getState().dragOffset.clientOffset}},{key:"getSourceClientOffset",value:function(){return Me(this.store.getState().dragOffset)}},{key:"getDifferenceFromInitialOffset",value:function(){return Te(this.store.getState().dragOffset)}}]),e}(),_e=0;function Le(){return _e++}function Re(e){return Re="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Re(e)}function Be(e){(0,Z.V)("function"===typeof e.canDrag,"Expected canDrag to be a function."),(0,Z.V)("function"===typeof e.beginDrag,"Expected beginDrag to be a function."),(0,Z.V)("function"===typeof e.endDrag,"Expected endDrag to be a function.")}function Fe(e){(0,Z.V)("function"===typeof e.canDrop,"Expected canDrop to be a function."),(0,Z.V)("function"===typeof e.hover,"Expected hover to be a function."),(0,Z.V)("function"===typeof e.drop,"Expected beginDrag to be a function.")}function Ve(e,t){t&&Array.isArray(e)?e.forEach((function(e){return Ve(e,!1)})):(0,Z.V)("string"===typeof e||"symbol"===Re(e),t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}(function(e){e["SOURCE"]="SOURCE",e["TARGET"]="TARGET"})(Ae||(Ae={}));const Ue="undefined"!==typeof global?global:self,Qe=Ue.MutationObserver||Ue.WebKitMutationObserver;function je(e){return function(){const t=setTimeout(a,0),n=setInterval(a,50);function a(){clearTimeout(t),clearInterval(n),e()}}}function He(e){let t=1;const n=new Qe(e),a=document.createTextNode("");return n.observe(a,{characterData:!0}),function(){t=-t,a.data=t}}const We="function"===typeof Qe?He:je;class Ye{enqueueTask(e){const{queue:t,requestFlush:n}=this;t.length||(n(),this.flushing=!0),t[t.length]=e}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:e}=this;while(this.index<e.length){const t=this.index;if(this.index++,e[t].call(),this.index>this.capacity){for(let t=0,n=e.length-this.index;t<n;t++)e[t]=e[t+this.index];e.length-=this.index,this.index=0}}e.length=0,this.index=0,this.flushing=!1},this.registerPendingError=e=>{this.pendingErrors.push(e),this.requestErrorThrow()},this.requestFlush=We(this.flush),this.requestErrorThrow=je((()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()}))}}class ze{call(){try{this.task&&this.task()}catch(e){this.onError(e)}finally{this.task=null,this.release(this)}}constructor(e,t){this.onError=e,this.release=t,this.task=null}}class Ke{create(e){const t=this.freeTasks,n=t.length?t.pop():new ze(this.onError,(e=>t[t.length]=e));return n.task=e,n}constructor(e){this.onError=e,this.freeTasks=[]}}const Ge=new Ye,$e=new Ke(Ge.registerPendingError);function qe(e){Ge.enqueueTask($e.create(e))}function Xe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Je(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Ze(e,t,n){return t&&Je(e.prototype,t),n&&Je(e,n),e}function et(e,t){return rt(e)||it(e,t)||nt(e,t)||tt()}function tt(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function nt(e,t){if(e){if("string"===typeof e)return at(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?at(e,t):void 0}}function at(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function it(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done);a=!0)if(n.push(o.value),t&&n.length===t)break}catch(e){i=!0,r=e}finally{try{a||null==s["return"]||s["return"]()}finally{if(i)throw r}}return n}}function rt(e){if(Array.isArray(e))return e}function ot(e){var t=Le().toString();switch(e){case Ae.SOURCE:return"S".concat(t);case Ae.TARGET:return"T".concat(t);default:throw new Error("Unknown Handler Role: ".concat(e))}}function st(e){switch(e[0]){case"S":return Ae.SOURCE;case"T":return Ae.TARGET;default:(0,Z.V)(!1,"Cannot parse handler ID: ".concat(e))}}function lt(e,t){var n=e.entries(),a=!1;do{var i=n.next(),r=i.done,o=et(i.value,2),s=o[1];if(s===t)return!0;a=!!r}while(!a);return!1}var ct=function(){function e(t){Xe(this,e),this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=t}return Ze(e,[{key:"addSource",value:function(e,t){Ve(e),Be(t);var n=this.addHandler(Ae.SOURCE,e,t);return this.store.dispatch(T(n)),n}},{key:"addTarget",value:function(e,t){Ve(e,!0),Fe(t);var n=this.addHandler(Ae.TARGET,e,t);return this.store.dispatch(D(n)),n}},{key:"containsHandler",value:function(e){return lt(this.dragSources,e)||lt(this.dropTargets,e)}},{key:"getSource",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,Z.V)(this.isSourceId(e),"Expected a valid source ID.");var n=t&&e===this.pinnedSourceId,a=n?this.pinnedSource:this.dragSources.get(e);return a}},{key:"getTarget",value:function(e){return(0,Z.V)(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}},{key:"getSourceType",value:function(e){return(0,Z.V)(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}},{key:"getTargetType",value:function(e){return(0,Z.V)(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}},{key:"isSourceId",value:function(e){var t=st(e);return t===Ae.SOURCE}},{key:"isTargetId",value:function(e){var t=st(e);return t===Ae.TARGET}},{key:"removeSource",value:function(e){var t=this;(0,Z.V)(this.getSource(e),"Expected an existing source."),this.store.dispatch(I(e)),qe((function(){t.dragSources.delete(e),t.types.delete(e)}))}},{key:"removeTarget",value:function(e){(0,Z.V)(this.getTarget(e),"Expected an existing target."),this.store.dispatch(P(e)),this.dropTargets.delete(e),this.types.delete(e)}},{key:"pinSource",value:function(e){var t=this.getSource(e);(0,Z.V)(t,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=t}},{key:"unpinSource",value:function(){(0,Z.V)(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}},{key:"addHandler",value:function(e,t,n){var a=ot(e);return this.types.set(a,t),e===Ae.SOURCE?this.dragSources.set(a,n):e===Ae.TARGET&&this.dropTargets.set(a,n),a}}]),e}();function dt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ut(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function pt(e,t,n){return t&&ut(e.prototype,t),n&&ut(e,n),e}function ht(e){var t="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__;return c(J,e&&t&&t({name:"dnd-core",instanceId:"dnd-core"}))}var gt=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];dt(this,e),this.isSetUp=!1,this.handleRefCountChange=function(){var e=t.store.getState().refCount>0;t.backend&&(e&&!t.isSetUp?(t.backend.setup(),t.isSetUp=!0):!e&&t.isSetUp&&(t.backend.teardown(),t.isSetUp=!1))};var a=ht(n);this.store=a,this.monitor=new Ne(a,new ct(a)),a.subscribe(this.handleRefCountChange)}return pt(e,[{key:"receiveBackend",value:function(e){this.backend=e}},{key:"getMonitor",value:function(){return this.monitor}},{key:"getBackend",value:function(){return this.backend}},{key:"getRegistry",value:function(){return this.monitor.registry}},{key:"getActions",value:function(){var e=this,t=this.store.dispatch;function n(n){return function(){for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];var o=n.apply(e,i);"undefined"!==typeof o&&t(o)}}var a=Oe(this);return Object.keys(a).reduce((function(e,t){var i=a[t];return e[t]=n(i),e}),{})}},{key:"dispatch",value:function(e){this.store.dispatch(e)}}]),e}();function mt(e,t,n,a){var i=new gt(a),r=e(i,t,n);return i.receiveBackend(r),i}var ft=a.createContext({dragDropManager:void 0});function bt(e,t,n,a){return{dragDropManager:mt(e,t,n,a)}}},7177:(e,t,n)=>{"use strict";n.d(t,{i:()=>B});var a=n(6540),i=n(2954),r=n(7645),o=n(8395),s=n(3207),l=n(3716);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}var p=!1,h=!1,g=function(){function e(t){c(this,e),this.sourceId=null,this.internalMonitor=t.getMonitor()}return u(e,[{key:"receiveHandlerId",value:function(e){this.sourceId=e}},{key:"getHandlerId",value:function(){return this.sourceId}},{key:"canDrag",value:function(){(0,i.V)(!p,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return p=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{p=!1}}},{key:"isDragging",value:function(){if(!this.sourceId)return!1;(0,i.V)(!h,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return h=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{h=!1}}},{key:"subscribeToStateChange",value:function(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}},{key:"isDraggingSource",value:function(e){return this.internalMonitor.isDraggingSource(e)}},{key:"isOverTarget",value:function(e,t){return this.internalMonitor.isOverTarget(e,t)}},{key:"getTargetIds",value:function(){return this.internalMonitor.getTargetIds()}},{key:"isSourcePublic",value:function(){return this.internalMonitor.isSourcePublic()}},{key:"getSourceId",value:function(){return this.internalMonitor.getSourceId()}},{key:"subscribeToOffsetChange",value:function(e){return this.internalMonitor.subscribeToOffsetChange(e)}},{key:"canDragSource",value:function(e){return this.internalMonitor.canDragSource(e)}},{key:"canDropOnTarget",value:function(e){return this.internalMonitor.canDropOnTarget(e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}]),e}(),m=n(1972),f=n(6979),b=n(9194);function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function S(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),e}var w=function(){function e(t){var n=this;v(this,e),this.hooks=(0,m.i)({dragSource:function(e,t){n.clearDragSource(),n.dragSourceOptions=t||null,(0,f.i)(e)?n.dragSourceRef=e:n.dragSourceNode=e,n.reconnectDragSource()},dragPreview:function(e,t){n.clearDragPreview(),n.dragPreviewOptions=t||null,(0,f.i)(e)?n.dragPreviewRef=e:n.dragPreviewNode=e,n.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}return S(e,[{key:"receiveHandlerId",value:function(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}},{key:"reconnect",value:function(){this.reconnectDragSource(),this.reconnectDragPreview()}},{key:"reconnectDragSource",value:function(){var e=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();t&&this.disconnectDragSource(),this.handlerId&&(e?t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)):this.lastConnectedDragSource=e)}},{key:"reconnectDragPreview",value:function(){var e=this.dragPreview,t=this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();t&&this.disconnectDragPreview(),this.handlerId&&(e?t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=e,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,e,this.dragPreviewOptions)):this.lastConnectedDragPreview=e)}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didConnectedDragSourceChange",value:function(){return this.lastConnectedDragSource!==this.dragSource}},{key:"didConnectedDragPreviewChange",value:function(){return this.lastConnectedDragPreview!==this.dragPreview}},{key:"didDragSourceOptionsChange",value:function(){return!(0,b.b)(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}},{key:"didDragPreviewOptionsChange",value:function(){return!(0,b.b)(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}},{key:"disconnectDragSource",value:function(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}},{key:"disconnectDragPreview",value:function(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}},{key:"clearDragSource",value:function(){this.dragSourceNode=null,this.dragSourceRef=null}},{key:"clearDragPreview",value:function(){this.dragPreviewNode=null,this.dragPreviewRef=null}},{key:"connectTarget",get:function(){return this.dragSource}},{key:"dragSourceOptions",get:function(){return this.dragSourceOptionsInternal},set:function(e){this.dragSourceOptionsInternal=e}},{key:"dragPreviewOptions",get:function(){return this.dragPreviewOptionsInternal},set:function(e){this.dragPreviewOptionsInternal=e}},{key:"dragSource",get:function(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}},{key:"dragPreview",get:function(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}}]),e}();function C(e,t){return M(e)||k(e,t)||O(e,t)||E()}function E(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(e,t){if(e){if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function k(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done);a=!0)if(n.push(o.value),t&&n.length===t)break}catch(e){i=!0,r=e}finally{try{a||null==s["return"]||s["return"]()}finally{if(i)throw r}}return n}}function M(e){if(Array.isArray(e))return e}function T(e){return T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function D(){var e=(0,l.u)(),t=(0,a.useMemo)((function(){return new g(e)}),[e]),n=(0,a.useMemo)((function(){return new w(e.getBackend())}),[e]);return[t,n]}function I(e,t,n){var r=(0,l.u)(),c=(0,a.useMemo)((function(){return{beginDrag:function(){var n=e.current,a=n.begin,r=n.item;if(a){var o=a(t);return(0,i.V)(null==o||"object"===T(o),"dragSpec.begin() must either return an object, undefined, or null"),o||r||{}}return r||{}},canDrag:function(){return"boolean"===typeof e.current.canDrag?e.current.canDrag:"function"!==typeof e.current.canDrag||e.current.canDrag(t)},isDragging:function(n,a){var i=e.current.isDragging;return i?i(t):a===n.getSourceId()},endDrag:function(){var a=e.current.end;a&&a(t.getItem(),t),n.reconnect()}}}),[]);(0,o.E)((function(){var a=(0,s.V)(e.current.item.type,c,r),i=C(a,2),o=i[0],l=i[1];return t.receiveHandlerId(o),n.receiveHandlerId(o),l}),[])}function P(e,t){return R(e)||L(e,t)||N(e,t)||A()}function A(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(e,t){if(e){if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function L(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done);a=!0)if(n.push(o.value),t&&n.length===t)break}catch(e){i=!0,r=e}finally{try{a||null==s["return"]||s["return"]()}finally{if(i)throw r}}return n}}function R(e){if(Array.isArray(e))return e}function B(e){var t=(0,a.useRef)(e);t.current=e,(0,i.V)(null!=e.item,"item must be defined"),(0,i.V)(null!=e.item.type,"item type must be defined");var n=D(),s=P(n,2),l=s[0],c=s[1];I(t,l,c);var d=(0,r.F)(l,t.current.collect||function(){return{}},(function(){return c.reconnect()})),u=(0,a.useMemo)((function(){return c.hooks.dragSource()}),[c]),p=(0,a.useMemo)((function(){return c.hooks.dragPreview()}),[c]);return(0,o.E)((function(){c.dragSourceOptions=t.current.options||null,c.reconnect()}),[c]),(0,o.E)((function(){c.dragPreviewOptions=t.current.previewOptions||null,c.reconnect()}),[c]),[d,u,p]}},7289:(e,t,n)=>{"use strict";n(3432)},7348:(e,t,n)=>{"use strict";n.d(t,{A:()=>O});var a,i=n(1653);n(3376),n(4707);class r extends Error{name="DownloaderError";code;constructor(e,t){super(t),this.code=e}toJSON(){return{name:this.name,code:this.code,message:this.message}}}(function(e){e[e["NOT_SUPPORTED"]=0]="NOT_SUPPORTED",e[e["NOT_SUPPORT_PGC_CONTENT"]=1]="NOT_SUPPORT_PGC_CONTENT",e[e["CANCEL"]=2]="CANCEL",e[e["ERROR_REQUEST_DATA"]=3]="ERROR_REQUEST_DATA",e[e["WRITABLE_IS_NOT_AVAILABLE"]=4]="WRITABLE_IS_NOT_AVAILABLE",e[e["FAILED_TO_FETCH"]=5]="FAILED_TO_FETCH",e[e["FLV_IS_MP4"]=6]="FLV_IS_MP4",e[e["INVALID_FLV_HEADER"]=7]="INVALID_FLV_HEADER",e[e["BODY_STREAM_BUFFER_WAS_ABORTED"]=8]="BODY_STREAM_BUFFER_WAS_ABORTED",e[e["COMPATIBILITY_ERROR"]=9]="COMPATIBILITY_ERROR",e[e["UNLOGIN_ERROR"]=10]="UNLOGIN_ERROR",e[e["REDUNDANT_CLICK"]=11]="REDUNDANT_CLICK",e[e["DOWNLOAD_OPTION_EXPIRED"]=12]="DOWNLOAD_OPTION_EXPIRED",e[e["DOWNLOAD_TOO_FREQUENTLY"]=13]="DOWNLOAD_TOO_FREQUENTLY",e[e["PROTECTED_BY_DRM"]=14]="PROTECTED_BY_DRM"})(a||(a={}));new r(a.NOT_SUPPORTED,"\u975e\u5e38\u62b1\u6b49\uff0c\u76ee\u524d\u4e0d\u652f\u6301\u4e0b\u8f7d"),new r(a.NOT_SUPPORT_PGC_CONTENT,"\u975e\u5e38\u62b1\u6b49\uff0c\u5e94\u7ad9\u65b9\u8981\u6c42\u76ee\u524d\u65e0\u6cd5\u63d0\u4f9b\u7248\u6743\u89c6\u9891\u4e0b\u8f7d"),new r(a.CANCEL,"\u4e0b\u8f7d\u5df2\u53d6\u6d88"),new r(a.ERROR_REQUEST_DATA,"\u8bf7\u6c42\u6570\u636e\u4e0d\u6b63\u786e"),new r(a.WRITABLE_IS_NOT_AVAILABLE,"\u6587\u4ef6\u65e0\u6cd5\u5199\u5165"),new r(a.FAILED_TO_FETCH,"\u6570\u636e\u83b7\u53d6\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u7f51\u9875\u91cd\u8bd5"),new r(a.FLV_IS_MP4,"\u8fd9\u4e2aFLV\u6587\u4ef6\u5176\u5b9e\u5305\u542b\u4e86MP4\u6570\u636e"),new r(a.INVALID_FLV_HEADER,"\u9519\u8bef\u7684FLV\u6587\u4ef6\u5934"),new r(a.BODY_STREAM_BUFFER_WAS_ABORTED,"BodyStreamBuffer\u5df2\u88ab\u4e2d\u6b62"),new r(a.COMPATIBILITY_ERROR,"\u5f53\u524d\u6d4f\u89c8\u5668\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u8bf7\u4f7f\u7528\u5176\u4ed6\u6d4f\u89c8\u5668"),new r(a.UNLOGIN_ERROR,"\u8bf7\u767b\u5f55bilibili\u7ad9\u8d26\u53f7\u5e76\u5237\u65b0\u7f51\u9875\u540e\u91cd\u8bd5"),new r(a.REDUNDANT_CLICK,"\u8bf7\u52ff\u91cd\u590d\u70b9\u51fb\u4e0b\u8f7d\uff0c\u8bf7\u68c0\u67e5\u662f\u5426\u5df2\u7ecf\u6709\u6253\u5f00\u7684\u300c\u53e6\u5b58\u4e3a\u300d\u5f39\u7a97"),new r(a.DOWNLOAD_OPTION_EXPIRED,"\u6570\u636e\u6e90\u8fc7\u671f\uff0c\u6b63\u5728\u5c1d\u8bd5\u91cd\u65b0\u83b7\u53d6\u4e0b\u8f7d\u6e90"),new r(a.DOWNLOAD_TOO_FREQUENTLY,"\u4e0b\u8f7d\u9891\u7387\u8fc7\u9ad8\uff0c\u8bf7\u7a0d\u540e\u65f6\u95f4\u518d\u8bd5"),new r(a.PROTECTED_BY_DRM,"\u975e\u5e38\u62b1\u6b49\uff0c\u8be5\u89c6\u9891\u53d7DRM\u4fdd\u62a4\uff0c\u65e0\u6cd5\u63d0\u4f9b\u4e0b\u8f7d\u670d\u52a1"),a.NOT_SUPPORTED,a.NOT_SUPPORT_PGC_CONTENT;var o,s,l,c,d,u;(function(e){e["video"]="video",e["audio"]="audio"})(o||(o={})),function(e){e["PGC"]="/pgc/player/web/v2/playurl",e["UGC"]="/x/player/wbi/playurl"}(s||(s={})),function(e){e["avc"]="avc1",e["hevc"]="hev1",e["av1"]="av01",e["dvh"]="dvh"}(l||(l={})),function(e){e["mp4a402"]="mp4a.40.2",e["mp4a405"]="mp4a.40.5"}(c||(c={})),function(e){e[e["QN_0"]=0]="QN_0",e[e["QN_15"]=15]="QN_15",e[e["QN_16"]=16]="QN_16",e[e["QN_32"]=32]="QN_32",e[e["QN_48"]=48]="QN_48",e[e["QN_64"]=64]="QN_64",e[e["QN_74"]=74]="QN_74",e[e["QN_80"]=80]="QN_80",e[e["QN_112"]=112]="QN_112",e[e["QN_116"]=116]="QN_116",e[e["QN_120"]=120]="QN_120",e[e["QN_125"]=125]="QN_125",e[e["QN_126"]=126]="QN_126",e[e["QN_127"]=127]="QN_127"}(d||(d={})),function(e){e[e["QN_30216"]=30216]="QN_30216",e[e["QN_30232"]=30232]="QN_30232",e[e["QN_30280"]=30280]="QN_30280",e[e["QN_30250"]=30250]="QN_30250",e[e["QN_30251"]=30251]="QN_30251",e[e["QN_30255"]=30255]="QN_30255",e[e["QN_100010"]=100010]="QN_100010",e[e["QN_100009"]=100009]="QN_100009",e[e["QN_100008"]=100008]="QN_100008"}(u||(u={}));const p={[d.QN_0]:"\u81ea\u52a8",[d.QN_15]:"360P \u6d41\u7545",[d.QN_16]:"360P \u6d41\u7545",[d.QN_32]:"480P \u6e05\u6670",[d.QN_48]:"720P \u9ad8\u6e05",[d.QN_64]:"720P \u9ad8\u6e05",[d.QN_74]:"720P60 \u9ad8\u6e05",[d.QN_80]:"1080P \u9ad8\u6e05",[d.QN_112]:"1080P \u9ad8\u7801\u7387",[d.QN_116]:"1080P 60\u5e27",[d.QN_120]:"4K \u8d85\u6e05",[d.QN_125]:"HDR \u771f\u5f69",[d.QN_126]:"\u675c\u6bd4\u89c6\u754c",[d.QN_127]:"8K \u8d85\u9ad8\u6e05"},h=(u.QN_30216,u.QN_30232,u.QN_30280,u.QN_30250,u.QN_30251,u.QN_30255,u.QN_100010,u.QN_100009,u.QN_100008,l.avc,l.hevc,l.av1,c.mp4a402,c.mp4a405,o.video,o.audio,d.QN_80,d.QN_74,d.QN_64,d.QN_48,[d.QN_127,d.QN_126,d.QN_125,d.QN_120,d.QN_116,d.QN_112]),g=(u.QN_30250,u.QN_30251,u.QN_30255,[...h,d.QN_80,d.QN_74,d.QN_64,d.QN_48,d.QN_32,d.QN_16,d.QN_15]);var m=n(6540),f=n(3205),b=n(5999),v=n(9983),y=n(8285),S=n(5808),w=n.n(S);delete p[d.QN_0];const C=b.Ay.div`
	.input-section {
		.body {
			.rename-wrapper, .aria2c-wrapper {
				display: flex;
				margin-bottom: 12px;
				
				label {
					margin-right: 12px;
					display: inline-block;
					flex-shrink: 0;
					width: fit-content;
					line-height: 32px;
					font-size: 14px;
				}
				
				.rename-input, .aria3c-input {
					flex-grow: 1;
					padding: 6px 10px;
				}
				
				.button {
					margin-left: 8px;
					flex-shrink: 0;
					height: 32px;
				}
			}
		}
	}
`;class E extends m.Component{constructor(e){super(e)}static contextType=v.T;state={renameOn:!1,videoFilename:"",newVideoFilename:"",videoCoverFilename:"",newVideoCoverFilename:"",videoScreenshotFilename:"",newVideoScreenshotFilename:"",videoDanmuFilename:"",newVideoDanmuFilename:"",audioFilename:"",newAudioFilename:"",subtitleFilename:"",newSubtitleFilename:"",liveScreenshotFilename:"",newLiveScreenshotFilename:"",aria2cOn:!1,aria2cProtocol:"http",aria2cHost:"localhost",newAria2cHost:"localhost",aria2cPort:6800,newAria2cPort:6800,aria2cPath:"jsonrpc",newAria2cPath:"jsonrpc",aria2cSecret:"",newAria2cSecret:"",downloader:null};componentDidMount(){chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},(e=>{this.setState({renameOn:e.on,videoFilename:e.videoFilename,newVideoFilename:e.videoFilename,videoCoverFilename:e.videoCoverFilename,newVideoCoverFilename:e.videoCoverFilename,videoScreenshotFilename:e.videoScreenshotFilename,newVideoScreenshotFilename:e.videoScreenshotFilename,videoDanmuFilename:e.videoDanmuFilename,newVideoDanmuFilename:e.videoDanmuFilename,subtitleFilename:e.subtitleFilename,newSubtitleFilename:e.subtitleFilename,audioFilename:e.audioFilename,newAudioFilename:e.audioFilename,liveScreenshotFilename:e.liveScreenshotFilename,newLiveScreenshotFilename:e.liveScreenshotFilename})})),chrome.runtime.sendMessage({target:"videoDownload",event:"getSetting"},(e=>{this.setState({downloader:e.downloader})})),chrome.runtime.sendMessage({target:"aria2c",event:"getSetting"},(e=>{this.setState({aria2cOn:e.on,aria2cProtocol:e.protocol,aria2cHost:e.host,newAria2cHost:e.host,aria2cPort:e.port,newAria2cPort:e.port,aria2cPath:e.path,newAria2cPath:e.path,aria2cSecret:e.secret,newAria2cSecret:e.secret})}))}handleOnChangeRenameInput=(e,t)=>{this.setState({[`new${w()(e)}Filename`]:t.target.value?.replaceAll(" ","")})};handleOnClickChangeRenameButton=e=>{const{bhAccount:t}=this.context;if(!t||!t.isVIP)return this.context.handleOnClickShowPaymentModal();const n=this.state[`new${w()(e)}Filename`];chrome.runtime.sendMessage({target:"renameDownloadFile",event:"setSetting",[`${e}Filename`]:n},(()=>{this.context.uploadSettings("renameDownloadFile"),this.setState({[`${e}Filename`]:n})}))};handleOnSetDefaultQuality=e=>{const t=e.target.value;if(this.state.downloader&&this.state.downloader?.defaultSelected?.quality!==t){const e={...this.state.downloader};e.defaultSelected.quality=+t,chrome.runtime.sendMessage({target:"videoDownload",event:"setSetting",downloader:e},(()=>{this.context.uploadSettings("videoDownload"),this.setState({downloader:e})}))}};render(){const{renameOn:e,videoFilename:t,newVideoFilename:n,videoCoverFilename:a,newVideoCoverFilename:r,videoScreenshotFilename:o,newVideoScreenshotFilename:s,videoDanmuFilename:l,newVideoDanmuFilename:c,subtitleFilename:d,newSubtitleFilename:u,audioFilename:h,newAudioFilename:f,liveScreenshotFilename:b,newLiveScreenshotFilename:v,downloader:S}=this.state,{hasLogin:w,bhAccount:E}=this.context,O=!!E&&E.isVIP;return m.createElement(C,null,m.createElement(y.hE,{title:"\u4e0b\u8f7d\u8bbe\u7f6e"}),m.createElement(y.KK,{title:m.createElement(m.Fragment,null,"\u4e3b\u7ad9\u89c6\u9891\u4e0b\u8f7d\u8bbe\u7f6e"),active:e},m.createElement(y.wn,{title:"\u9ed8\u8ba4\u4e0b\u8f7d\u753b\u8d28",description:"\u5982\u679c\u6ca1\u6709\u5339\u914d\u5230\u60a8\u9009\u62e9\u7684\u753b\u8d28\uff0c\u4f1a\u81ea\u52a8\u9009\u62e9\u66f4\u4f4e\u4e00\u6863\u7684\u753b\u8d28",className:"input-section",hasLogin:w,toolbar:m.createElement(i.MD,{value:S?.defaultSelected?.quality,data:[...g.map((e=>({value:+e,title:`${p[e]} (${e})`})))],onChange:this.handleOnSetDefaultQuality})})),m.createElement(y.KK,{title:m.createElement(m.Fragment,null,"\u81ea\u5b9a\u4e49\u4e0b\u8f7d\u6587\u4ef6\u540d ",m.createElement(i.Ap,null)),active:e},m.createElement(y.wn,{className:"input-section",hasLogin:w,isVIP:O,needVIP:!0,helperArea:m.createElement(m.Fragment,null,"\u53ef\u4f7f\u7528\u5173\u952e\u8bcd\uff1a",m.createElement("br",null),"\u89c6\u9891/\u76f4\u64ad\u95f4\u6807\u9898\uff1a ",m.createElement("b",null,"__TITLE__"),m.createElement("br",null),"\u89c6\u9891\u9009\u96c6\u6807\u9898\uff1a",m.createElement("b",null,"__SUBTITLE__"),m.createElement("br",null),"\u89c6\u9891\u524d\u7f6e\u6807\u9898\uff1a",m.createElement("b",null,"__PRE_TITLE__"),"\uff08\u5982\uff1aP2\uff0c\u7b2c\u51e0\u96c6\uff09",m.createElement("br",null),"\u89c6\u9891\u9009\u96c6\u5e8f\u53f7\uff1a",m.createElement("b",null,"__PN__"),m.createElement("br",null),"\u89c6\u9891aid\uff1a ",m.createElement("b",null,"__AID__"),m.createElement("br",null),"\u89c6\u9891cid\uff1a ",m.createElement("b",null,"__CID__"),m.createElement("br",null),"\u89c6\u9891bvid\uff1a ",m.createElement("b",null,"__BVID__"),m.createElement("br",null),"\u89c6\u9891\u53d1\u5e03\u65f6\u95f4\uff1a ",m.createElement("b",null,"__TIME__"),m.createElement("br",null),"\u89c6\u9891\u53d1\u5e03\u65e5\u671f\uff1a ",m.createElement("b",null,"__DATE__"),m.createElement("br",null),"\u89c6\u9891\u753b\u8d28\u4ee3\u53f7\uff1a ",m.createElement("b",null,"__QUALITY__"),m.createElement("br",null),"\u89c6\u9891\u4e0a\u4f20\u8005\u6635\u79f0\uff1a ",m.createElement("b",null,"__UPPER__"),m.createElement("br",null),"\u89c6\u9891\u4e0a\u4f20\u8005UID\uff1a ",m.createElement("b",null,"__UID__"),m.createElement("br",null),"\u5b57\u5e55\u8bed\u8a00\uff1a ",m.createElement("b",null,"__LANG__"),m.createElement("br",null),"\u5207\u7247\u7f16\u53f7\uff1a ",m.createElement("b",null,"__SEGMENTS__"),m.createElement("br",null),m.createElement("br",null),"\u76f4\u64ad\u95f4ID\uff1a ",m.createElement("b",null,"__ROOM_ID__"),m.createElement("br",null),m.createElement("br",null),"\u5f53\u524d\u65e5\u671f\uff1a ",m.createElement("b",null,"__NOW_DATE__"),m.createElement("br",null),"\u5f53\u524d\u65f6\u95f4\uff1a ",m.createElement("b",null,"__NOW_TIME__"),m.createElement("br",null),m.createElement("br",null),"\u6269\u5c55\u540d\uff1a ",m.createElement("b",null,"__FORMAT__"),m.createElement("br",null),m.createElement("br",null),"\u9ed8\u8ba4\u4e3a\uff1a__TITLE__.__CID__.__FORMAT__",m.createElement("br",null),"\u6ce8\u610f\uff1a\u5173\u952e\u8bcd\u5fc5\u987b\u4e3a\u5927\u5199\u548c\u4e0b\u5212\u7ebf\u7ec4\u6210\u7684\u5b8c\u6574\u9884\u8bbe\u540d\u79f0",m.createElement("br",null),m.createElement("br",null),"\u547d\u540d\u4e2d\u53ef\u4f7f\u7528\u5173\u952e\u8bcd\u81ea\u7531\u7ec4\u5408\uff0c\u5982\uff1a",m.createElement("br",null),"video-__AID__.__TITLE__-\u5c0f\u5f20\u7684\u89c6\u9891.__FORMAT__",m.createElement("br",null),m.createElement("br",null),"\u4e0a\u8ff0\u4f8b\u5b50\u4f1a\u5f97\u5230\u5982\u300c",m.createElement("b",null,"video-123456.\u793a\u4f8b\u6807\u9898-\u5c0f\u5f20\u7684\u89c6\u9891.flv"),"\u300d\u8fd9\u6837\u7684\u547d\u540d",m.createElement("br",null),"\u5176\u4e2d __AID__ \u2192 123456\uff0c__TITLE__ \u2192 \u793a\u4f8b\u6807\u9898\uff0c__FORMAT__ \u2192 flv")},m.createElement("div",{className:"rename-wrapper"},m.createElement("label",{htmlFor:"videoRenameInput"},"\u89c6\u9891\u6587\u4ef6"),m.createElement(i.pd,{id:"videoRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("video",e),value:n}),m.createElement(i.sL,{className:n!==t?"primary":"border",disabled:n===t,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("video")},"\u786e\u8ba4\u4fee\u6539")),m.createElement("div",{className:"rename-wrapper"},m.createElement("label",{htmlFor:"videoCoverRenameInput"},"\u89c6\u9891\u5c01\u9762"),m.createElement(i.pd,{id:"videoCoverRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("videoCover",e),value:r}),m.createElement(i.sL,{className:r!==a?"primary":"border",disabled:r===a,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("videoCover")},"\u786e\u8ba4\u4fee\u6539")),m.createElement("div",{className:"rename-wrapper"},m.createElement("label",{htmlFor:"videoScreenshotRenameInput"},"\u89c6\u9891\u622a\u56fe"),m.createElement(i.pd,{id:"videoScreenshotRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("videoScreenshot",e),value:s}),m.createElement(i.sL,{className:s!==o?"primary":"border",disabled:s===o,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("videoScreenshot")},"\u786e\u8ba4\u4fee\u6539")),m.createElement("div",{className:"rename-wrapper"},m.createElement("label",{htmlFor:"videoDanmuRenameInput"},"\u5f39\u5e55\u6587\u4ef6"),m.createElement(i.pd,{id:"videoDanmuRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("videoDanmu",e),value:c}),m.createElement(i.sL,{className:c!==l?"primary":"border",disabled:c===l,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("videoDanmu")},"\u786e\u8ba4\u4fee\u6539")),m.createElement("div",{className:"rename-wrapper"},m.createElement("label",{htmlFor:"videoSubtitleRenameInput"},"\u5b57\u5e55\u6587\u4ef6"),m.createElement(i.pd,{id:"videoSubtitleRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("subtitle",e),value:u}),m.createElement(i.sL,{className:u!==d?"primary":"border",disabled:u===d,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("subtitle")},"\u786e\u8ba4\u4fee\u6539")),m.createElement("div",{className:"rename-wrapper"},m.createElement("label",{htmlFor:"audioRenameInput"},"\u76f4\u64ad\u622a\u5c4f"),m.createElement(i.pd,{id:"audioRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("liveScreenshot",e),value:v}),m.createElement(i.sL,{className:v!==b?"primary":"border",disabled:v===b,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("liveScreenshot")},"\u786e\u8ba4\u4fee\u6539")))))}}const O=(0,f.y)(E)},7398:(e,t,n)=>{"use strict";n.d(t,{A:()=>w});var a=n(1653),i=n(2398),r=n(3376),o=n(6540),s=n(3205),l=n(5999),c=n(3240),d=(n(4053),n(8285)),u=n(5851),p=n(5522),h=n(7177),g=n(9551),m=n(8909),f=n(9983);const b=l.Ay.div`
	.system, .custom {
		//max-width: 700px;
		//margin-bottom: 22px;
		
		.add-btn {
			background-color: var(--bilibili-blue);
			color: var(--bilibili-gray);
		}
		
		.list {
			.list-item {
				display: flex;
				align-items: center;
				width: 100%;
				height: 28px;
				
				& > span {
					
					&:first-of-type {
						width: 80px;
						flex-shrink: 0;
					}
					
					&:nth-child(2) {
						width: 70px;
					}
				}
				
				.url {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					flex-grow: 1;
				}
				
				.action-box {
					display: flex;
					margin-left: 12px;
					
					.button {
						margin-right: 12px;
						
						&:last-of-type {
							margin-right: 0;
						}
					}
				}
			}
		}
	}
	
	.menu-editing-modal {
		width: 500px;
		
		.modal-body {
			display: flex;
			flex-direction: column;
			
			label {
				margin-bottom: 16px;
				
				&:last-of-type {
					margin-bottom: 0;
				}
				
				p {
					margin-top: 0;
					margin-bottom: 2px;
				}
				
				input {
					width: calc(100% - 22px);
					padding: 6px 10px;
					outline: none;
				}
			}
		}
		
		.btn-group {
			display: flex;
			
			.button {
				margin-left: 12px;
				
				&:first-of-type {
					margin-left: 0;
				}
			}
			
			.confirm {
				background-color: var(--bilibili-blue);
				color: var(--bilibili-gray);
			}
		}
	}
	
	.range-section {
		.body {
			.resize-change-range {
				display: inline-block;
				width: 100px;
				font-size: 14px;
			}
			
			.range {
				width: 210px;
				vertical-align: sub;
			}
		}
	}
`,v=function({index:e,children:t,onDragMove:n,onDrop:a,...i}){const r=o.useRef(null),[,s]=(0,p.H)({accept:"sortable-list-item",hover(t,a){if(!r.current)return;const i=t.index,o=e;if(i===o)return;const s=r.current.getBoundingClientRect(),l=(s.bottom-s.top)/2,c=a.getClientOffset(),d=c.y-s.top;i<o&&d<l||i>o&&d>l||(n(i,o),t.index=o)}}),[{isDragging:l},c]=(0,h.i)({item:{type:"sortable-list-item",index:e},collect:e=>({isDragging:e.isDragging()}),end(){a()}});return c(s(r)),o.createElement("div",{className:"sortable-list-item",ref:r,style:{opacity:l?0:1},...i},t)},y=function({index:e,info:t,onEditMenu:n,onDeleteMenu:i,onDragMove:r,onDrop:s}){const l=o.useCallback((()=>{n({index:e,...t})}),[t]),c=o.useCallback((()=>{i(e)}),[e]);return o.createElement(v,{className:"list-item",index:e,onDragMove:r,onDrop:s},o.createElement("span",null,t.title),o.createElement("span",{className:"url"},t.url),o.createElement("span",{className:"action-box"},o.createElement(a.sL,{onClick:l},"\u7f16\u8f91"),o.createElement(a.sL,{onClick:c},"\u5220\u9664")))};class S extends o.Component{constructor(e){super(e)}static contextType=f.T;state={sectionShow:[],showTag:!0,resizeRate:1,videoOpenMethod:"direct",activeIfExist:!1,temporaryShowLatestSection:!1,homeContentType:"default",homeShowCarousel:!0,homeOpenMethod:"recentVideo",homeShowLiveBar:!0,homeVideoType:"recentVideo",liveOpenMethod:"direct",options:[],custom:[],openEditModal:!1,modalState:"add",editingInfo:{index:"",title:"",url:""},columns:1,videoCardType:"simple"};sectionOrderChanged=!1;systemMenuOrderChanged=!1;customMenuOrderChanged=!1;menuInputCompositionStart=!1;menuTitleInputRef=o.createRef();menuUrlInputRef=o.createRef();componentDidMount(){chrome.runtime.sendMessage({target:"popup",event:"getSetting"},(({resizeRate:e})=>{this.setState({resizeRate:e})})),chrome.runtime.sendMessage({target:"mainHome",event:"getSetting"},(({contentType:e,openMethod:t,showCarousel:n,showLiveBar:a,videoType:i})=>{this.setState({homeContentType:e,homeOpenMethod:t,homeShowCarousel:n,homeShowLiveBar:a,homeVideoType:i})})),chrome.runtime.sendMessage({target:"mainLive",event:"getSetting"},(({openMethod:e})=>{this.setState({liveOpenMethod:e})})),chrome.runtime.sendMessage({target:"popupMain",event:"getSetting"},(({columns:e,videoCardType:t,sectionShow:n,showTag:a,videoOpenMethod:i,activeIfExist:r,temporaryShowLatestSection:o})=>{this.setState({columns:e,videoCardType:t,sectionShow:n,showTag:a,videoOpenMethod:i,activeIfExist:r,temporaryShowLatestSection:o})})),this.updateMenuList()}handleOnSetResizeRate=e=>{e.persist();const t=+e.target.value;this.setState({resizeRate:t},(()=>{chrome.runtime.sendMessage({target:"popup",event:"setSetting",resizeRate:t},(()=>{this.context.uploadSettings("popup")}))}))};handleOnClickSectionShow=(e,t)=>{const{sectionShow:n}=this.state,a=[...n],i=n.find((({key:t})=>t===e));i.on=t,chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",sectionShow:a},(e=>{e&&(this.context.uploadSettings("popupMain"),this.setState({sectionShow:a}))}))};handleOnClickTagShow=()=>{const{showTag:e}=this.state;chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",showTag:!e},(t=>{t&&(this.context.uploadSettings("popupMain"),this.setState({showTag:!e}))}))};handleOnClickTemporaryShowLatestSection=()=>{const{temporaryShowLatestSection:e}=this.state;chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",temporaryShowLatestSection:!e},(t=>{t&&(this.context.uploadSettings("popupMain"),this.setState({temporaryShowLatestSection:!e}))}))};handleOnMouseUpResizeRate=e=>{e.persist()};handleOnSetColumns=e=>{const t=e.target.value,{columns:n}=this.state;n!==+t&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",columns:+t},(()=>{this.context.uploadSettings("popupMain"),this.setState({columns:+t})}))};handleOnSetVideoCardType=e=>{const t=e.target.value,{videoCardType:n}=this.state;n!==t&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",videoCardType:t},(()=>{this.context.uploadSettings("popupMain"),this.setState({videoCardType:t})}))};handleOnSetActiveIfExist=()=>{const{activeIfExist:e}=this.state;chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",activeIfExist:!e},(()=>{this.context.uploadSettings("popupMain"),this.setState({activeIfExist:!e})}))};handleOnSetVideoOpenMethod=e=>{const t=e.target.value,{hasLogin:n,bhAccount:a}=this.context,i=a?.["isVIP"];n&&i&&this.state.videoOpenMethod!==t&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",videoOpenMethod:t},(()=>{this.context.uploadSettings("popupMain"),this.setState({videoOpenMethod:t})}))};handleOnSetHomeVideoType=e=>{const t=e.target.value;this.state.homeVideoType!==t&&chrome.runtime.sendMessage({target:"mainHome",event:"setSetting",videoType:t},(()=>{this.context.uploadSettings("mainHome"),chrome.runtime.sendMessage({target:"mainHome",event:"clearPopupScrollPosition"}),this.setState({homeVideoType:t})}))};handleOnSetHomeShowLiveBar=()=>{chrome.runtime.sendMessage({target:"mainHome",event:"setSetting",showLiveBar:!this.state.homeShowLiveBar},(()=>{this.context.uploadSettings("mainHome"),this.setState({homeShowLiveBar:!this.state.homeShowLiveBar})}))};updateMenuList=()=>{chrome.runtime.sendMessage({target:"popupMenu",event:"getMenuList"},(e=>{e&&this.setState(e)}))};handleOnClickSystemMenu=(e,t)=>{chrome.runtime.sendMessage({target:"popupMenu",event:"setSystemMenuState",key:e,on:t},(e=>{this.context.uploadSettings("popupMenu"),e&&this.updateMenuList()}))};handleOnCreateNewMenu=()=>{const{custom:e}=this.state,{bhAccount:t}=this.context;return!(Object.values(e).length>=10&&Object.values(e).length<=10)||t&&t.isVIP&&t.isSuperVIP?Object.values(e).length>=10?a.QB.info("\u81ea\u5b9a\u4e49\u5bfc\u822a\u6700\u591a\u53ea\u80fd\u52a010\u6761\uff0c\u672a\u6765\u4f1a\u5f00\u653e\u66f4\u9ad8\u4e0a\u9650"):void this.setState({openEditModal:!0,modalState:"add",editingInfo:{index:e.length,title:"",url:""}}):this.context.handleOnClickShowPaymentModal()};handleOnEditMenu=({index:e,title:t,url:n})=>{this.setState({openEditModal:!0,modalState:"edit",editingInfo:{index:e,title:t,url:n}})};handleOnCloseModal=()=>{this.setState({openEditModal:!1})};handOnConfirmUpdateMenu=()=>{const{editingInfo:e,modalState:t,custom:n}=this.state;e.title&&e.url&&new Promise(((a,i)=>{if("add"===t){const t=n.find((({title:t})=>t===e.title));t&&0!==t.length?i():a()}else a()})).then((()=>{chrome.runtime.sendMessage({target:"popupMenu",event:"updateCustomMenu",index:e.index,title:e.title,url:e.url},(e=>{e&&(this.context.uploadSettings("popupMenu"),this.updateMenuList(),this.setState({openEditModal:!1}))}))}))};handleOnDeleteCustomMenu=e=>{chrome.runtime.sendMessage({target:"popupMenu",event:"deleteCustomMenu",index:e},(e=>{e&&(this.context.uploadSettings("popupMenu"),this.updateMenuList())}))};onChangeTitle=e=>{const{editingInfo:t}=this.state;this.menuInputCompositionStart?t.title=e.target.value:t.title=e.target.value.slice(0,6),this.setState({editingInfo:t})};onTitleCompositionStart=()=>{this.menuInputCompositionStart=!0};onTitleCompositionEnd=e=>{this.menuInputCompositionStart=!1;const{editingInfo:t}=this.state;t.title=e.target.value.slice(0,6),this.setState({editingInfo:t})};onChangeURL=e=>{const{editingInfo:t}=this.state;this.menuInputCompositionStart?t.url=e.target.value:t.url=e.target.value.slice(0,256),this.setState({editingInfo:t})};onURLCompositionStart=()=>{this.menuInputCompositionStart=!0};onURLCompositionEnd=e=>{this.menuInputCompositionStart=!1;const{editingInfo:t}=this.state;t.url=e.target.value.slice(0,256),this.setState({editingInfo:t})};onDragMoveSection=(e,t)=>{if(e!==t){this.sectionOrderChanged=!0;const{sectionShow:n}=this.state,a=n[e];n.splice(e,1),n.splice(t,0,a),this.setState({sectionShow:n})}};onDropSection=()=>{this.sectionOrderChanged&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",sectionShow:this.state.sectionShow},(()=>{this.sectionOrderChanged=!1,this.context.uploadSettings("popupMain")}))};onDragMoveSystemMenu=(e,t)=>{if(e!==t){this.systemMenuOrderChanged=!0;const{options:n}=this.state,a=n[e];n.splice(e,1),n.splice(t,0,a),this.setState({options:n})}};onDropSystemMenu=()=>{this.systemMenuOrderChanged&&chrome.runtime.sendMessage({target:"popupMenu",event:"setOptionsMenuList",list:this.state.options},(()=>{this.systemMenuOrderChanged=!1,this.context.uploadSettings("popupMenu")}))};onDragMoveCustomMenu=(e,t)=>{if(e!==t){this.customMenuOrderChanged=!0;const{custom:n}=this.state,a=n[e];n.splice(e,1),n.splice(t,0,a),this.setState({custom:n})}};onDropCustomMenu=()=>{this.customMenuOrderChanged&&chrome.runtime.sendMessage({target:"popupMenu",event:"setCustomMenuList",list:this.state.custom},(()=>{this.customMenuOrderChanged=!1,this.context.uploadSettings("popupMenu")}))};handleOnClickGotoBrowserShortcuts=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"chrome://extensions/shortcuts"})};render(){const{resizeRate:e,sectionShow:t,videoOpenMethod:n,activeIfExist:s,showTag:l,homeOpenMethod:p,homeVideoType:h,homeShowLiveBar:f,homeShowCarousel:S,liveOpenMethod:w,options:C,custom:E,openEditModal:O,modalState:x,editingInfo:k,columns:M,videoCardType:T,temporaryShowLatestSection:D}=this.state,{hasLogin:I,bhAccount:P={}}=this.context,A=!!P&&P["isVIP"],N=t.reduce(((e,{on:t})=>(e+=t?1:0,e)),0);return o.createElement(b,null,o.createElement(u.h,{title:"\u5e94\u7528\u7a0b\u5e8f\u5f39\u7a97\u8bbe\u7f6e"}),o.createElement(d.KK,{title:"\u6269\u5c55\u5f39\u7a97\u901a\u7528\u8bbe\u7f6e"},o.createElement(d.wn,{className:"range-section",title:"\u7a97\u53e3\u7f29\u653e\u6bd4\u4f8b\u8c03\u8282",description:"\u70b9\u51fb\u540e\u53ef\u4ee5\u5de6\u53f3\u65b9\u5411\u952e\u8c03\u8282\uff0c\u9ed8\u8ba41x",helperArea:"\u5c06\u6269\u5c55\u5f39\u7a97\u8c03\u6574\u5230\u559c\u6b22\u7684\u5927\u5c0f"},o.createElement("div",null,o.createElement("span",{className:"resize-change-range"},e,"x"),o.createElement(a.Q6,{value:e,max:3,min:.1,step:.02,onChange:this.handleOnSetResizeRate}))),o.createElement(d.wn,{title:"5\u5206\u949f\u5185\u5c55\u793a\u4e0a\u4e00\u6b21\u67e5\u770b\u7684\u677f\u5757",toolbar:o.createElement(r.w9,{onClick:this.handleOnClickTemporaryShowLatestSection,on:D})}),o.createElement(d.wn,{title:"\u6269\u5c55\u5f39\u7a97\u5feb\u6377\u952e\u8bbe\u7f6e",toolbar:o.createElement(a.sL,{className:"border",onClick:this.handleOnClickGotoBrowserShortcuts},"\u524d\u5f80\u8bbe\u7f6e")})),o.createElement(d.KK,{title:"\u677f\u5757\u901a\u7528\u8bbe\u7f6e"},o.createElement(d.wn,{title:"\u76f4\u63a5\u8df3\u8f6c\u5230\u5df2\u5b58\u5728\u7684\u9875\u9762",toolbar:o.createElement(r.w9,{onClick:this.handleOnSetActiveIfExist,on:s}),description:"\u6682\u65f6\u65e0\u6cd5\u5904\u7406\u76f4\u64ad\u95f4\u77ed\u53f7\u81ea\u52a8\u91cd\u5b9a\u5411\u5bfc\u81f4\u7684\u91cd\u590d\u6253\u5f00\u95ee\u9898"}),o.createElement(d.wn,{title:"\u89c6\u9891\u5361\u7247\u663e\u793a\u4e3b\u9898\u6807\u7b7e",toolbar:o.createElement(r.w9,{onClick:this.handleOnClickTagShow,on:l})}),o.createElement(d.wn,{title:"\u5185\u5bb9\u5c55\u793a\u5217\u6570",toolbar:o.createElement(a.MD,{value:M,data:[{value:1,title:"\u4e00\u5217\u5e03\u5c40"},{value:2,title:"\u4e24\u5217\u5e03\u5c40"}]}),onChange:this.handleOnSetColumns}),o.createElement(d.wn,{title:"\u89c6\u9891\u5361\u7247\u98ce\u683c",toolbar:o.createElement(a.MD,{value:T,data:[{value:"simple",title:"\u7cbe\u7b80\u89c6\u9891\u5217\u8868"},{value:"old",title:"\u7b80\u7ea6\u89c6\u9891\u5361\u7247"},{value:"new",title:"\u8be6\u7ec6\u89c6\u9891\u5217\u8868"}],onChange:this.handleOnSetVideoCardType})}),o.createElement(d.wn,{title:o.createElement(o.Fragment,null,"\u6253\u5f00\u65b9\u5f0f ",o.createElement(a.Ap,null)),isVIP:A,active:A,needVIP:!0,hasLogin:I,helperArea:o.createElement(o.Fragment,null,"\u9759\u9ed8\u6253\u5f00: \u5728\u6269\u5c55\u5f39\u7a97\u6253\u5f00\u7f51\u9875\u65f6\u7a97\u53e3\u4ecd\u4fdd\u6301\u6253\u5f00",o.createElement("br",null),o.createElement("b",null,"\u8be5\u9009\u9879\u5728\u706b\u72d0\u6d4f\u89c8\u5668\u4e2d\u53ea\u80fd\u56fa\u5b9a\u4e3a\u300c\u9759\u9ed8\u6253\u5f00\u300d\u65b9\u5f0f")),toolbar:o.createElement(a.MD,{value:A?n:"direct",data:[{key:"direct",title:"\u76f4\u63a5\u6253\u5f00",value:"direct"},{key:"silent",title:"\u9759\u9ed8\u6253\u5f00",value:"silent",description:"\u5728\u6269\u5c55\u5f39\u7a97\u6253\u5f00\u7f51\u9875\u65f6\u7a97\u53e3\u4ecd\u4fdd\u6301\u6253\u5f00"}],onChange:this.handleOnSetVideoOpenMethod})}),o.createElement(d.wn,{title:o.createElement(o.Fragment,null,"\u53ef\u9009\u677f\u5757 ",o.createElement(a.Ap,null)),description:"\u62d6\u52a8\u5bfc\u822a\u53ef\u4ee5\u8fdb\u884c\u6392\u5e8f\uff0c\u81f3\u5c11\u9009\u62e9\u4e24\u4e2a\u677f\u5757",columns:1,isVIP:A,needVIP:!0,active:A,hasLogin:I,canCollapsed:!0,defaultCollapsed:!0},o.createElement(g.Q,{backend:m.t2},t.map((({key:e,on:t,toggle:n=!0},a)=>o.createElement(v,{key:e,index:a,onDragMove:this.onDragMoveSection,onDrop:this.onDropSection},o.createElement(r.ck,{key:e,title:(0,c.__)("popupMain_"+e),onClick:()=>N<=2&&t?null:this.handleOnClickSectionShow(e,!t),frontOperation:o.createElement(r.un,{active:t,disabled:N<=2&&t})}))))))),o.createElement(d.KK,{title:"\u7efc\u5408\u677f\u5757\u8bbe\u7f6e"},o.createElement(d.wn,{title:"\u9ed8\u8ba4\u663e\u793a\u5206\u7c7b",toolbar:o.createElement(a.MD,{value:h||"recentVideo",data:[{value:"home",title:"\u9996\u9875\u70ed\u95e8",description:"\u9996\u9875\u7f6e\u9876\u548c\u7efc\u5408\u70ed\u95e8\u89c6\u9891"},{value:"recentVideo",title:"\u6700\u8fd1\u6295\u7a3f"}],onChange:this.handleOnSetHomeVideoType})}),o.createElement(d.wn,{title:"\u5c55\u793a\u76f4\u64ad\u680f",toolbar:o.createElement(r.w9,{onClick:this.handleOnSetHomeShowLiveBar,on:f})})),o.createElement(d.KK,{title:"\u5bfc\u822a\u680f\u8bbe\u7f6e"},o.createElement(d.wn,{title:"\u7cfb\u7edf\u9884\u8bbe",description:"\u62d6\u52a8\u5bfc\u822a\u53ef\u4ee5\u8fdb\u884c\u6392\u5e8f",columns:1,className:"system",canCollapsed:!0},o.createElement(g.Q,{backend:m.t2},C.map((({needLogin:e,description:t="",...n})=>({...n,description:t+(e?" \u9700\u8981\u767b\u5f55":"")}))).map(((e,t)=>{const{key:n,title:a=null,description:i=null,on:s=!1,toggle:l=!0}=e,c={};return c.frontOperation=o.createElement(r.un,{disabled:!l,active:s?1:0}),o.createElement(v,{key:n,index:t,onDragMove:this.onDragMoveSystemMenu,onDrop:this.onDropSystemMenu},o.createElement(r.ck,{title:a,description:i,onClick:!!l&&(()=>this.handleOnClickSystemMenu(n,!s)),...c}))})))),o.createElement(d.wn,{className:"custom",title:o.createElement(o.Fragment,null,"\u81ea\u5b9a\u4e49\u5bfc\u822a (",Object.values(E).length,"/",A?10:5,") ",o.createElement(a.Ap,null)),description:"\u62d6\u52a8\u5bfc\u822a\u53ef\u4ee5\u8fdb\u884c\u6392\u5e8f",toolbar:o.createElement(a.sL,{className:"add-btn",onClick:this.handleOnCreateNewMenu},"\u6dfb\u52a0")},o.createElement("div",{className:"list"},o.createElement(g.Q,{backend:m.t2},Object.values(E).map(((e,t)=>o.createElement(y,{index:t,key:e.title,info:e,onEditMenu:this.handleOnEditMenu,onDeleteMenu:this.handleOnDeleteCustomMenu,onDragMove:this.onDragMoveCustomMenu,onDrop:this.onDropCustomMenu}))))))),o.createElement(a.aF,{open:O,className:"menu-editing-modal",title:"add"===x?"\u65b0\u589e\u5feb\u6377\u5bfc\u822a":"\u7f16\u8f91\u5feb\u6377\u5bfc\u822a",onClickMask:this.handleOnCloseModal,footer:o.createElement("div",{className:"btn-group"},o.createElement(a.sL,{onClick:this.handleOnCloseModal},"\u53d6\u6d88"),o.createElement(a.sL,{className:"confirm",onClick:this.handOnConfirmUpdateMenu},"\u786e\u8ba4"))},o.createElement("label",{from:"title"},o.createElement("p",null,"\u5bfc\u822a\u6807\u9898 (\u4e0d\u957f\u4e8e6\u4e2a\u5b57\u7b26)"),o.createElement(i.p,{id:"title",ref:this.menuTitleInputRef,onChange:this.onChangeTitle,onCompositionStart:this.onTitleCompositionStart,onCompositionEnd:this.onTitleCompositionEnd,placeholder:"\u4e0d\u80fd\u91cd\u590d, \u4e0d\u5927\u4e8e4\u4e2a\u4e2d\u6587\u6c49\u5b57\u5bbd\u5ea6",value:k.title})),o.createElement("label",{from:"url"},o.createElement("p",null,"\u8df3\u8f6c\u5730\u5740 (\u4e0d\u957f\u4e8e256\u4e2a\u5b57\u7b26)"),o.createElement(i.p,{id:"url",ref:this.menuUrlInputRef,onChange:this.onChangeURL,onCompositionStart:this.onURLCompositionStart,onCompositionEnd:this.onURLCompositionEnd,placeholder:"\u8f93\u5165\u5bfc\u822a\u680f\u8df3\u8f6c\u7684\u76ee\u6807\u94fe\u63a5",value:k.url}))))}}const w=(0,s.y)(S)},7645:(e,t,n)=>{"use strict";n.d(t,{F:()=>y});var a=n(8395),i=n(9194),r=n(6540);function o(e,t){return u(e)||d(e,t)||l(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done);a=!0)if(n.push(o.value),t&&n.length===t)break}catch(e){i=!0,r=e}finally{try{a||null==s["return"]||s["return"]()}finally{if(i)throw r}}return n}}function u(e){if(Array.isArray(e))return e}function p(e,t,n){var s=(0,r.useState)((function(){return t(e)})),l=o(s,2),c=l[0],d=l[1],u=(0,r.useCallback)((function(){var a=t(e);(0,i.b)(c,a)||(d(a),n&&n())}),[c,e,n]);return(0,a.E)(u,[]),[c,u]}function h(e,t){return v(e)||b(e,t)||m(e,t)||g()}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function b(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done);a=!0)if(n.push(o.value),t&&n.length===t)break}catch(e){i=!0,r=e}finally{try{a||null==s["return"]||s["return"]()}finally{if(i)throw r}}return n}}function v(e){if(Array.isArray(e))return e}function y(e,t,n){var i=p(e,t,n),r=h(i,2),o=r[0],s=r[1];return(0,a.E)((function(){var t=e.getHandlerId();if(null!=t)return e.subscribeToStateChange(s,{handlerIds:[t]})}),[e,s]),o}},7924:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var a=n(8087),i=n(5093),r=n.n(i),o=n(6540),s=n(3205),l=n(5999),c=n(8285),d=n(9983);const u=l.Ay.div`
	.title {
		display: flex;
		align-items: center;
	}
	
	.load-order-list-btn {
		display: inline-flex;
		margin-left: 20px;
		vertical-align: bottom;
		font-size: 14px;
		
		.button-view {
			padding: 0 10px;
		}
	}
`;class p extends o.Component{constructor(e){super(e)}static contextType=d.T;state={orderList:[],redeemList:[],loaded:!1};componentDidMount(){}handleOnClickLoadOrder=()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"queryOrderAndRedeemList"},(e=>{"string"!==typeof e?this.setState({...e,loaded:!0}):a.QB.error(e)}))};render(){const{orderList:e,redeemList:t,loaded:n}=this.state;return o.createElement(u,null,o.createElement(c.hE,{title:o.createElement(o.Fragment,null,"\u7528\u6237\u8ba2\u5355",n?null:o.createElement(a.sL,{className:"load-order-list-btn primary",onClick:this.handleOnClickLoadOrder},"\u70b9\u51fb\u52a0\u8f7d\u8ba2\u5355")),description:o.createElement(o.Fragment,null,"\u5982\u9700\u5f00\u7968\u8bf7\u5728\u652f\u4ed8\u6210\u529f\u540e30\u65e5\u5185",o.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u79c1\u4fe1\u52a9\u624b\u732b"))}),o.createElement(c.KK,{title:"\u4ed8\u8d39\u8ba2\u5355\u5217\u8868"},e.length>0?e.map((e=>o.createElement(c.wn,{key:e.out_trade_no,title:"ACG\u52a9\u624b\u4f1a\u5458 "+e.duration+"\u5929",description:r()(e.gmt_create).format("YYYY-MM-DD HH:mm:ss"),operation:o.createElement("span",null,"\uffe5 ",e.total_amount)}))):o.createElement(c.wn,{title:"\u65e0\u6570\u636e"})),o.createElement(c.KK,{title:"\u5151\u6362\u7801\u5217\u8868"},t.length>0?t.map((e=>o.createElement(c.wn,{key:e.code,title:e.code,description:`${e.generateType} / ${e.name} / ${r()(e.createDateTime).format("YYYY-MM-DD HH:mm:ss")}`,toolbar:e.used?"\u5df2\u4f7f\u7528":e.active?"\u672a\u4f7f\u7528":"\u4e0d\u53ef\u7528"}))):o.createElement(c.wn,{title:"\u65e0\u6570\u636e"})))}}const h=(0,s.y)(p)},8016:(e,t,n)=>{"use strict";n.d(t,{g:()=>c});var a=n(6540),i=n(5999),r=n(8087),o=n(9983);const s=(0,i.Ay)(r.aF)`
  .introduction {
    text-align: center;

    .bilibili-helper-2-icon-bilibili {
      padding: 0 4px;
      width: fit-content;
      vertical-align: baseline;
      color: var(--bilibili-pink);
    }

    .bilibili-helper-2-icon-acghelper {
      padding: 0 4px;
      width: fit-content;
      color: var(--bilibili-pink);
    }
  }

  .description {
    font-size: 12px;
    color: var(--bilibili-pink);
    text-align: center;

    a {
      color: var(--bilibili-blue);
      cursor: pointer;
    }
  }
`,l=i.Ay.div`
  margin: 30px auto;
  width: fit-content;

  .button {
    margin: 12px 0;
    width: fit-content;
    min-width: 180px;
    height: 40px;
    line-height: 40px;

    button {
      line-height: 38px;
      font-size: 14px;
    }

    &.primary {
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
    }

    &.border {
      border: 1px solid #ddd;
      box-sizing: border-box;
    }

    //.bilibili-helper-2-icon-bilibili, .bilibili-helper-2-icon-acghelper {
    //  color: var(--bilibili-gray);
    //}
  }
`;class c extends a.Component{constructor(e){super(e)}static contextType=o.T;state={loading:!1,loginModalShow:!0,hasBilibiliAccountLogin:!1};handleOnClickLogin=()=>{this.state.loading||(this.setState({loading:!0}),this.context.handleOnClickLogin((e=>{e?this.setState({loading:!1,loginModalShow:!1}):this.setState({loading:!1,loginModalShow:!0})})))};handleOnClickRegister=()=>{this.state.loading||(this.setState({loading:!0}),this.context.handleOnClickRegister((e=>{e?this.setState({loading:!1,loginModalShow:!1}):this.setState({loading:!1,loginModalShow:!0})})))};handleOnClickMask=()=>{this.setState({loginModalShow:!1})};handleOnLoginOtherBilibiliAccount=()=>{this.context.handleOnLoginOtherBilibiliAccount().then((()=>{this.setState({hasBilibiliAccountLogin:!0})}))};handleOnClickGoToOverview=()=>{location.href=chrome.runtime.getURL("/html/config.html#/"),this.context.handleOnClickShowLoginModal()};render(){const{hasLogin:e}=this.context,{children:t}=this.props,{loginModalShow:n}=this.state;return a.createElement(s,{open:this.props.show&&n&&!e,onClickMask:this.handleOnClickMask,className:"need-login-mask"},t&&a.createElement("p",{className:"introduction"},t),a.createElement(l,null,a.createElement(r.sL,{className:"primary",onClick:this.handleOnClickGoToOverview},a.createElement("div",null,"\u524d\u5f80\u767b\u5f55"))),a.createElement("footer",{className:"description"},a.createElement("span",null,a.createElement("b",{style:{marginRight:4}},"\u203b"),"\u70b9\u51fb\u767b\u5f55\u5373\u8868\u793a\u60a8\u5df2\u540c\u610f",a.createElement("a",{href:"https://acghelper.com/licence.html",target:"_blank",rel:"noreferrer"},"\u300a\u4f7f\u7528\u6761\u6b3e\u300b"),"\u548c",a.createElement("a",{href:"https://acghelper.com/privacy.html",target:"_blank",rel:"noreferrer"},"\u300a\u9690\u79c1\u534f\u8bae\u300b"))))}}},8087:(e,t,n)=>{"use strict";n.d(t,{$6:()=>i.$6,Ap:()=>i.Ap,In:()=>i.In,MD:()=>i.MD,Q6:()=>i.Q6,QB:()=>i.QB,_V:()=>i._V,aF:()=>i.aF,ck:()=>a.ck,pd:()=>i.pd,sL:()=>i.sL,un:()=>a.un,w9:()=>a.w9,x3:()=>a.x3});var a=n(3376),i=n(1653)},8285:(e,t,n)=>{"use strict";n.d(t,{YW:()=>C,wn:()=>w,hE:()=>a.h,KK:()=>s});var a=n(5851),i=n(6540),r=n(5999);const o=r.Ay.div`
	margin-bottom: 32px;
	
	& > .header {
		position: sticky;
		top: 0;
		display: flex;
		margin-bottom: 8px;
		//padding: 0 0 0 8px;
		width: 697px;
		//border-bottom: 1px solid #bbb;
		//border-radius: 6px;
		background-color: rgb(247 247 247);
		z-index: 2;
		
		.title {
			font-size: 16px;
			
			h2 {
				display: flex;
				align-items: center;
				margin: 0;
				padding: 4px 0 4px;
				font-size: 14px;
				color: #333;
			}
			
			p {
				//margin-top: 4px;
				margin-top: 0;
				margin-bottom: 4px;
				font-size: 12px;
				font-weight: normal;
				color: #333;
			}
		}
		
		.toolbar {
			display: flex;
			align-items: center;
			flex-shrink: 0;
			margin-left: auto;
			margin-right: 14px;
			padding: 4px 10px 4px 0px;
		}
	}
	
	& > .content {
		width: fit-content;
		box-shadow: rgba(113, 113, 113, 0.1) 0px 3px 7px;
		background-color: rgb(255, 255, 255);
		border-radius: 6px;
		
		&.toggle-off {
			filter: grayscale(1);
			pointer-events: none;
			user-select: none;
			
			&::after {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				border-radius: 6px;
				background-color: #fff;
				opacity: 0.6;
				visibility: visible;
				z-index: 1;
				cursor: not-allowed;
			}
		}
		
		section + section {
			border-top: 1px solid #eee;
		}
	}

`;class s extends i.Component{constructor(e){super(e)}render(){const{active:e,toolbar:t}=this.props;return i.createElement(o,null,this.props.title||this.props.description?i.createElement("div",{className:"header"},this.props.title||this.props.description?i.createElement("div",{className:"title"},this.props.title?i.createElement("h2",null,this.props.title):null,this.props.description?i.createElement("p",null,this.props.description):null):null,t?i.createElement("div",{className:"toolbar"},t):null):null,i.createElement("div",{className:["content",void 0===e||e?null:"toggle-off"].join(" ")},this.props.children))}}var l=n(6156),c=n(6942),d=n.n(c),u=n(8087),p=n(3240),h=n(9983);const g=r.Ay.div`
	position: absolute;
	left: 100%;
	margin-left: 8px;
	padding: 12px;
	min-width: 400px;
	height: 100%;
	//border-left: 1px dashed var(--bilibili-pink);
	
	.description {
		margin-top: 0;
		font-size: 14px;
	}
	
	b {
		display: inline-block;
		padding: 0 4px;
		color: var(--bilibili-pink);
	}
	
	.bilibili-helper-2-icon-bilibili {
		padding: 0 4px;
		width: fit-content;
		vertical-align: baseline;
		color: var(--bilibili-pink);
	}
	
	.bilibili-helper-2-icon-acghelper {
		padding: 0 4px;
		width: fit-content;
		color: var(--bilibili-pink);
	}
`;class m extends i.Component{constructor(e){super(e)}render(){const{title:e,description:t,children:n}=this.props;return i.createElement(g,null,e&&i.createElement("h3",null,e),t||n?i.createElement("div",{className:"description"},t||n):null)}}const f=(0,p.oq)(),b=r.Ay.section`
	position: relative;
	display: flex;
	//margin-bottom: 16px;
	width: fit-content;
	
	.header {
		display: flex;
		align-items: center;
		//margin-bottom: 10px;
		
		&:empty {
			padding: 0;
			border-bottom: none;
		}
		
		&.no-border {
			margin-bottom: 0;
			border-bottom: none;
		}
		
		p {
			margin: 0;
			font-size: 14px;
		}
		
		> .title {
			margin-right: 20px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			flex-grow: 1;
			font-size: 16px;
			
			> p.title {
				display: flex;
				align-items: center;
			}
		}
		
		.description {
			font-size: 12px;
			color: var(--paper-grey-800);
		}
		
		.toolbar-wrapper {
			display: flex;
			align-items: center;
			flex-shrink: 0;
			margin-left: auto;
			
			.toolbar {
				display: flex;
				align-items: center;
				flex-shrink: 0;
			}
			
			.button {
				//margin-right: -4px;
			}
		}
	}
	
	& > .content {
		flex-shrink: 0;
		position: relative;
		width: 653px;
		padding: 12px 12px 12px 20px;
		/*box-shadow: rgb(113 113 113 / 10%) 0px 3px 7px;
		background-color: #fff;
		border-radius: 6px;*/
		
		& > .header + .body {
			position: relative;
			display: grid;
			margin-top: 12px;
			padding-top: 12px;
			padding-bottom: 6px;
			border-top: 1px dashed #eee;
			transition: filter .3s;
			
			&::after {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background-color: #fff;
				opacity: 0;
				cursor: not-allowed;
				visibility: hidden;
				z-index: -1;
				transition: visibility 0s .3s, z-index 0s .3s, opacity .3s;
			}
			
			& > .list-item {
				margin-left: 16px;
				border-top: none;
			}
			
			&.collapsed {
				//margin: 0;
				//padding: 0;
				//height: 0px;
				display: none;
			}
		}
	}
	
	& > .content > .body.toggle-off {
		filter: grayscale(1);
		pointer-events: none;
		user-select: none;
		
		&::after {
			opacity: 0.5;
			visibility: visible;
			pointer-events: auto;
			transition: visibility 0s, z-index 0s, opacity .3s;
			z-index: 1;
		}
	}
`,v=r.Ay.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	//margin: -8px;
	padding: 0 20px;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	border-radius: 3px;
	background-color: rgb(244 244 244 / 70%);
	z-index: 1;
	
	.button {
		color: var(--bilibili-gray);
		
		.button-view {
			padding: 0 32px;
			background-color: var(--bilibili-blue);
		}
	}
`,y=r.Ay.div`
	.toolbar + & {
		margin-left: 12px;
		padding-left: 6px;
		border-left: 1px solid var(--bilibili-gray);
	}
`,S=(0,r.Ay)(u.sL)`
	position: relative;
	border-radius: 100px;
	width: 30px;
	height: 30px;
	
	.button-view {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 26px;
		
		svg {
			width: 20px;
			height: 20px;
		}
	}
`,w=e=>{const{handleOnClickShowPaymentModal:t,handleOnClickShowFirefoxModal:n,handleOnClickShowLoginModal:a}=(0,i.useContext)(h.T),{active:r,title:o,description:s,children:c,toolbar:p,rows:g=0,columns:w=1,helperArea:C,hasLogin:E,isVIP:O,needVIP:x=!1,canCollapsed:k=!1,defaultCollapsed:M=!1,...T}=e,[D,I]=(0,i.useState)(M),P=(0,i.useCallback)((()=>{k&&I(!D)}),[k,D]),A=(0,i.useCallback)((()=>{if("boolean"===typeof E){if(!E){const e=f?n:a;return i.createElement(v,null,i.createElement(u.sL,{onClick:e},x?"\u4f1a\u5458\u529f\u80fd\uff0c":"","\u70b9\u51fb\u767b\u5f55\u540e\u4f7f\u7528"))}if(x&&"boolean"===typeof O&&!O)return f?i.createElement(v,null,i.createElement(u.sL,null,"\u706b\u72d0\u6d4f\u89c8\u5668\u6682\u4e0d\u63d0\u4f9b\u4ed8\u8d39\u529f\u80fd")):i.createElement(v,null,i.createElement(u.sL,{onClick:t},"\u70b9\u51fb\u5f00\u901a\u52a9\u624b\u4f1a\u5458\u540e\u4f7f\u7528"))}return null}),[E,O,x,t,n,a]);return(0,i.useEffect)((()=>{r&&I(!1)}),[r]),i.createElement(b,{...T},i.createElement("div",{className:"content"},o||s?i.createElement("div",{className:["header",c?null:"no-border"].filter(Boolean).join(" ")},o||s?i.createElement("div",{className:"title"},o?i.createElement("p",{className:"title"},o):null,s?i.createElement("p",{className:"description"},s):null):null,i.createElement("div",{className:"toolbar-wrapper"},p?i.createElement("div",{className:"toolbar"},p):null,k?i.createElement(y,null,i.createElement(S,{onClick:P,horizontalPadding:0},D?i.createElement(l.CaretDownIcon,null):i.createElement(l.CaretUpIcon,null))):null)):null,c&&i.createElement("div",{className:d()("body",{collapsed:D,"toggle-off":void 0!==r&&!r}),style:{gridTemplateRows:g?`repeat(${g}, 1fr)`:"auto",gridTemplateColumns:`repeat(${w}, 1fr)`}},c),A()),C?i.createElement(m,{className:"helper-area",style:{marginTop:(s?10:0)+"px"}},C):null)},C=r.Ay.section`
	//max-width: 700px;
	min-width: 500px;
	outline: none;
	
	section {
		.radio-button-wrapper {
			margin-bottom: 8px;
			width: fit-content;
		}
		
		.link {
			margin: 0 2px;
			padding: 0 2px;
			color: var(--bilibili-blue);
		}
	}
`},8395:(e,t,n)=>{"use strict";n.d(t,{E:()=>i});var a=n(6540),i="undefined"!==typeof window?a.useLayoutEffect:a.useEffect},8735:(e,t,n)=>{"use strict";n.d(t,{v:()=>r});var a=n(2074);const i=(0,a.o)(),r=()=>{try{return!i||"/_generated_background_page.html"===new URL(location.href).pathname}catch(e){return!0}}},8754:(e,t,n)=>{var a=n(5160);function i(e,t,n){var i=e.length;return n=void 0===n?i:n,!t&&n>=i?e:a(e,t,n)}e.exports=i},8768:(e,t,n)=>{"use strict";n.d(t,{B9:()=>s,NP:()=>o,Rj:()=>i,c1:()=>r});var a=n(5542);const i=(e,t={})=>{const n=Object.keys(t).map((e=>{const n=t[e];return void 0!==n&&null!==n&&`${e}=${t[e]}`})).filter(Boolean).join("&");return[e,n].filter(Boolean).join("?")},r=(e="font_1690169_6hxr570d2oh")=>{(0,a.p0)(e,`https://at.alicdn.com/t/${e}.css`)},o=(e="font_1690169_b4tjv3p6054")=>{(0,a.p0)(e,chrome.runtime.getURL(`statics/iconfonts/${e}/iconfont.css`),!0)},s=e=>{const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())}},8909:(e,t,n)=>{"use strict";n.d(t,{t2:()=>K});var a={};function i(e){var t=null,n=function(){return null==t&&(t=e()),t};return n}function r(e,t){return e.filter((function(e){return e!==t}))}function o(e,t){var n=new Set,a=function(e){return n.add(e)};e.forEach(a),t.forEach(a);var i=[];return n.forEach((function(e){return i.push(e)})),i}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}n.r(a),n.d(a,{FILE:()=>O,TEXT:()=>k,URL:()=>x});var d=function(){function e(t){s(this,e),this.entered=[],this.isNodeInDocument=t}return c(e,[{key:"enter",value:function(e){var t=this,n=this.entered.length,a=function(n){return t.isNodeInDocument(n)&&(!n.contains||n.contains(e))};return this.entered=o(this.entered.filter(a),[e]),0===n&&this.entered.length>0}},{key:"leave",value:function(e){var t=this.entered.length;return this.entered=r(this.entered.filter(this.isNodeInDocument),e),t>0&&0===this.entered.length}},{key:"reset",value:function(){this.entered=[]}}]),e}(),u=i((function(){return/firefox/i.test(navigator.userAgent)})),p=i((function(){return Boolean(window.safari)}));function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),e}var f=function(){function e(t,n){h(this,e);for(var a=t.length,i=[],r=0;r<a;r++)i.push(r);i.sort((function(e,n){return t[e]<t[n]?-1:1}));for(var o,s,l=[],c=[],d=[],u=0;u<a-1;u++)o=t[u+1]-t[u],s=n[u+1]-n[u],c.push(o),l.push(s),d.push(s/o);for(var p=[d[0]],g=0;g<c.length-1;g++){var m=d[g],f=d[g+1];if(m*f<=0)p.push(0);else{o=c[g];var b=c[g+1],v=o+b;p.push(3*v/((v+b)/m+(v+o)/f))}}p.push(d[d.length-1]);for(var y,S=[],w=[],C=0;C<p.length-1;C++){y=d[C];var E=p[C],O=1/c[C],x=E+p[C+1]-y-y;S.push((y-E-x)*O),w.push(x*O*O)}this.xs=t,this.ys=n,this.c1s=p,this.c2s=S,this.c3s=w}return m(e,[{key:"interpolate",value:function(e){var t=this.xs,n=this.ys,a=this.c1s,i=this.c2s,r=this.c3s,o=t.length-1;if(e===t[o])return n[o];var s,l=0,c=r.length-1;while(l<=c){s=Math.floor(.5*(l+c));var d=t[s];if(d<e)l=s+1;else{if(!(d>e))return n[s];c=s-1}}o=Math.max(0,c);var u=e-t[o],p=u*u;return n[o]+a[o]*u+i[o]*p+r[o]*u*p}}]),e}(),b=1;function v(e){var t=e.nodeType===b?e:e.parentElement;if(!t)return null;var n=t.getBoundingClientRect(),a=n.top,i=n.left;return{x:i,y:a}}function y(e){return{x:e.clientX,y:e.clientY}}function S(e){var t;return"IMG"===e.nodeName&&(u()||!(null===(t=document.documentElement)||void 0===t?void 0:t.contains(e)))}function w(e,t,n,a){var i=e?t.width:n,r=e?t.height:a;return p()&&e&&(r/=window.devicePixelRatio,i/=window.devicePixelRatio),{dragPreviewWidth:i,dragPreviewHeight:r}}function C(e,t,n,a,i){var r=S(t),o=r?e:t,s=v(o),l={x:n.x-s.x,y:n.y-s.y},c=e.offsetWidth,d=e.offsetHeight,u=a.anchorX,h=a.anchorY,g=w(r,t,c,d),m=g.dragPreviewWidth,b=g.dragPreviewHeight,y=function(){var e=new f([0,.5,1],[l.y,l.y/d*b,l.y+b-d]),t=e.interpolate(h);return p()&&r&&(t+=(window.devicePixelRatio-1)*b),t},C=function(){var e=new f([0,.5,1],[l.x,l.x/c*m,l.x+m-c]);return e.interpolate(u)},E=i.offsetX,O=i.offsetY,x=0===E||E,k=0===O||O;return{x:x?E:C(),y:k?O:y()}}var E,O="__NATIVE_FILE__",x="__NATIVE_URL__",k="__NATIVE_TEXT__";function M(e,t,n){var a=t.reduce((function(t,n){return t||e.getData(n)}),"");return null!=a?a:n}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=(E={},T(E,O,{exposeProperties:{files:function(e){return Array.prototype.slice.call(e.files)},items:function(e){return e.items}},matchesTypes:["Files"]}),T(E,x,{exposeProperties:{urls:function(e,t){return M(e,t,"").split("\n")}},matchesTypes:["Url","text/uri-list"]}),T(E,k,{exposeProperties:{text:function(e,t){return M(e,t,"")}},matchesTypes:["Text","text/plain"]}),E);function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function A(e,t,n){return t&&P(e.prototype,t),n&&P(e,n),e}var N=function(){function e(t){I(this,e),this.config=t,this.item={},this.initializeExposedProperties()}return A(e,[{key:"initializeExposedProperties",value:function(){var e=this;Object.keys(this.config.exposeProperties).forEach((function(t){Object.defineProperty(e.item,t,{configurable:!0,enumerable:!0,get:function(){return null}})}))}},{key:"loadDataTransfer",value:function(e){var t=this;if(e){var n={};Object.keys(this.config.exposeProperties).forEach((function(a){n[a]={value:t.config.exposeProperties[a](e,t.config.matchesTypes),configurable:!0,enumerable:!0}})),Object.defineProperties(this.item,n)}}},{key:"canDrag",value:function(){return!0}},{key:"beginDrag",value:function(){return this.item}},{key:"isDragging",value:function(e,t){return t===e.getSourceId()}},{key:"endDrag",value:function(){}}]),e}();function _(e,t){var n=new N(D[e]);return n.loadDataTransfer(t),n}function L(e){if(!e)return null;var t=Array.prototype.slice.call(e.types||[]);return Object.keys(D).filter((function(e){var n=D[e].matchesTypes;return n.some((function(e){return t.indexOf(e)>-1}))}))[0]||null}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function F(e,t,n){return t&&B(e.prototype,t),n&&B(e,n),e}var V=function(){function e(t){R(this,e),this.globalContext=t}return F(e,[{key:"window",get:function(){return this.globalContext?this.globalContext:"undefined"!==typeof window?window:void 0}},{key:"document",get:function(){if(this.window)return this.window.document}}]),e}();function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Y(e,t,n){return t&&W(e.prototype,t),n&&W(e,n),e}var z=function(){function e(t,n){var a=this;H(this,e),this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.getSourceClientOffset=function(e){var t=a.sourceNodes.get(e);return t&&v(t)||null},this.endDragNativeItem=function(){a.isDraggingNativeItem()&&(a.actions.endDrag(),a.currentNativeHandle&&a.registry.removeSource(a.currentNativeHandle),a.currentNativeHandle=null,a.currentNativeSource=null)},this.isNodeInDocument=function(e){return Boolean(e&&a.document&&a.document.body&&document.body.contains(e))},this.endDragIfSourceWasRemovedFromDOM=function(){var e=a.currentDragSourceNode;a.isNodeInDocument(e)||a.clearCurrentDragSourceNode()&&a.actions.endDrag()},this.handleTopDragStartCapture=function(){a.clearCurrentDragSourceNode(),a.dragStartSourceIds=[]},this.handleTopDragStart=function(e){if(!e.defaultPrevented){var t=a.dragStartSourceIds;a.dragStartSourceIds=null;var n=y(e);a.monitor.isDragging()&&a.actions.endDrag(),a.actions.beginDrag(t||[],{publishSource:!1,getSourceClientOffset:a.getSourceClientOffset,clientOffset:n});var i=e.dataTransfer,r=L(i);if(a.monitor.isDragging()){if(i&&"function"===typeof i.setDragImage){var o=a.monitor.getSourceId(),s=a.sourceNodes.get(o),l=a.sourcePreviewNodes.get(o)||s;if(l){var c=a.getCurrentSourcePreviewNodeOptions(),d=c.anchorX,u=c.anchorY,p=c.offsetX,h=c.offsetY,g={anchorX:d,anchorY:u},m={offsetX:p,offsetY:h},f=C(s,l,n,g,m);i.setDragImage(l,f.x,f.y)}}try{null===i||void 0===i||i.setData("application/json",{})}catch(e){}a.setCurrentDragSourceNode(e.target);var b=a.getCurrentSourcePreviewNodeOptions(),v=b.captureDraggingState;v?a.actions.publishDragSource():setTimeout((function(){return a.actions.publishDragSource()}),0)}else if(r)a.beginDragNativeItem(r);else{if(i&&!i.types&&(e.target&&!e.target.hasAttribute||!e.target.hasAttribute("draggable")))return;e.preventDefault()}}},this.handleTopDragEndCapture=function(){a.clearCurrentDragSourceNode()&&a.actions.endDrag()},this.handleTopDragEnterCapture=function(e){a.dragEnterTargetIds=[];var t=a.enterLeaveCounter.enter(e.target);if(t&&!a.monitor.isDragging()){var n=e.dataTransfer,i=L(n);i&&a.beginDragNativeItem(i,n)}},this.handleTopDragEnter=function(e){var t=a.dragEnterTargetIds;if(a.dragEnterTargetIds=[],a.monitor.isDragging()){a.altKeyPressed=e.altKey,u()||a.actions.hover(t,{clientOffset:y(e)});var n=t.some((function(e){return a.monitor.canDropOnTarget(e)}));n&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=a.getCurrentDropEffect()))}},this.handleTopDragOverCapture=function(){a.dragOverTargetIds=[]},this.handleTopDragOver=function(e){var t=a.dragOverTargetIds;if(a.dragOverTargetIds=[],!a.monitor.isDragging())return e.preventDefault(),void(e.dataTransfer&&(e.dataTransfer.dropEffect="none"));a.altKeyPressed=e.altKey,a.actions.hover(t||[],{clientOffset:y(e)});var n=(t||[]).some((function(e){return a.monitor.canDropOnTarget(e)}));n?(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=a.getCurrentDropEffect())):a.isDraggingNativeItem()?e.preventDefault():(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=function(e){a.isDraggingNativeItem()&&e.preventDefault();var t=a.enterLeaveCounter.leave(e.target);t&&a.isDraggingNativeItem()&&a.endDragNativeItem()},this.handleTopDropCapture=function(e){var t;(a.dropTargetIds=[],e.preventDefault(),a.isDraggingNativeItem())&&(null===(t=a.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer));a.enterLeaveCounter.reset()},this.handleTopDrop=function(e){var t=a.dropTargetIds;a.dropTargetIds=[],a.actions.hover(t,{clientOffset:y(e)}),a.actions.drop({dropEffect:a.getCurrentDropEffect()}),a.isDraggingNativeItem()?a.endDragNativeItem():a.endDragIfSourceWasRemovedFromDOM()},this.handleSelectStart=function(e){var t=e.target;"function"===typeof t.dragDrop&&("INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable||(e.preventDefault(),t.dragDrop()))},this.options=new V(n),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.enterLeaveCounter=new d(this.isNodeInDocument)}return Y(e,[{key:"profile",value:function(){var e,t;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:(null===(e=this.dragStartSourceIds)||void 0===e?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:(null===(t=this.dragOverTargetIds)||void 0===t?void 0:t.length)||0}}},{key:"setup",value:function(){if(void 0!==this.window){if(this.window.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");this.window.__isReactDndBackendSetUp=!0,this.addEventListeners(this.window)}}},{key:"teardown",value:function(){void 0!==this.window&&(this.window.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.window),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId&&this.window.cancelAnimationFrame(this.asyncEndDragFrameId))}},{key:"connectDragPreview",value:function(e,t,n){var a=this;return this.sourcePreviewNodeOptions.set(e,n),this.sourcePreviewNodes.set(e,t),function(){a.sourcePreviewNodes.delete(e),a.sourcePreviewNodeOptions.delete(e)}}},{key:"connectDragSource",value:function(e,t,n){var a=this;this.sourceNodes.set(e,t),this.sourceNodeOptions.set(e,n);var i=function(t){return a.handleDragStart(t,e)},r=function(e){return a.handleSelectStart(e)};return t.setAttribute("draggable","true"),t.addEventListener("dragstart",i),t.addEventListener("selectstart",r),function(){a.sourceNodes.delete(e),a.sourceNodeOptions.delete(e),t.removeEventListener("dragstart",i),t.removeEventListener("selectstart",r),t.setAttribute("draggable","false")}}},{key:"connectDropTarget",value:function(e,t){var n=this,a=function(t){return n.handleDragEnter(t,e)},i=function(t){return n.handleDragOver(t,e)},r=function(t){return n.handleDrop(t,e)};return t.addEventListener("dragenter",a),t.addEventListener("dragover",i),t.addEventListener("drop",r),function(){t.removeEventListener("dragenter",a),t.removeEventListener("dragover",i),t.removeEventListener("drop",r)}}},{key:"addEventListeners",value:function(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}},{key:"removeEventListeners",value:function(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}},{key:"getCurrentSourceNodeOptions",value:function(){var e=this.monitor.getSourceId(),t=this.sourceNodeOptions.get(e);return Q({dropEffect:this.altKeyPressed?"copy":"move"},t||{})}},{key:"getCurrentDropEffect",value:function(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}},{key:"getCurrentSourcePreviewNodeOptions",value:function(){var e=this.monitor.getSourceId(),t=this.sourcePreviewNodeOptions.get(e);return Q({anchorX:.5,anchorY:.5,captureDraggingState:!1},t||{})}},{key:"isDraggingNativeItem",value:function(){var e=this.monitor.getItemType();return Object.keys(a).some((function(t){return a[t]===e}))}},{key:"beginDragNativeItem",value:function(e,t){this.clearCurrentDragSourceNode(),this.currentNativeSource=_(e,t),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}},{key:"setCurrentDragSourceNode",value:function(e){var t=this;this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;var n=1e3;this.mouseMoveTimeoutTimer=setTimeout((function(){return t.window&&t.window.addEventListener("mousemove",t.endDragIfSourceWasRemovedFromDOM,!0)}),n)}},{key:"clearCurrentDragSourceNode",value:function(){return!!this.currentDragSourceNode&&(this.currentDragSourceNode=null,this.window&&(this.window.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.window.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)),this.mouseMoveTimeoutTimer=null,!0)}},{key:"handleDragStart",value:function(e,t){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(t))}},{key:"handleDragEnter",value:function(e,t){this.dragEnterTargetIds.unshift(t)}},{key:"handleDragOver",value:function(e,t){null===this.dragOverTargetIds&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(t)}},{key:"handleDrop",value:function(e,t){this.dropTargetIds.unshift(t)}},{key:"window",get:function(){return this.options.window}},{key:"document",get:function(){return this.options.document}}]),e}(),K=function(e,t){return new z(e,t)}},9194:(e,t,n)=>{"use strict";function a(e,t,n,a){var i=n?n.call(a,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<r.length;l++){var c=r[l];if(!s(c))return!1;var d=e[c],u=t[c];if(i=n?n.call(a,d,u,c):void 0,!1===i||void 0===i&&d!==u)return!1}return!0}n.d(t,{b:()=>a})},9551:(e,t,n)=>{"use strict";n.d(t,{Q:()=>g});var a=n(6540),i=n(7112);function r(e,t){return d(e)||c(e,t)||s(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function c(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done);a=!0)if(n.push(o.value),t&&n.length===t)break}catch(e){i=!0,r=e}finally{try{a||null==s["return"]||s["return"]()}finally{if(i)throw r}}return n}}function d(e){if(Array.isArray(e))return e}function u(e,t){if(null==e)return{};var n,a,i=p(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function p(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}var h=0,g=(0,a.memo)((function(e){var t=e.children,n=u(e,["children"]),o=m(n),s=r(o,2),l=s[0],c=s[1];return a.useEffect((function(){return c&&h++,function(){if(c&&(h--,0===h)){var e=v();e[f]=null}}}),[]),a.createElement(i.M.Provider,{value:l},t)}));function m(e){if("manager"in e){var t={dragDropManager:e.manager};return[t,!1]}var n=b(e.backend,e.context,e.options,e.debugMode),a=!e.context;return[n,a]}g.displayName="DndProvider";var f=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v(),n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,r=t;return r[f]||(r[f]=(0,i.s)(e,t,n,a)),r[f]}function v(){return"undefined"!==typeof n.g?n.g:window}},9698:e=>{var t="\\ud800-\\udfff",n="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",r=n+a+i,o="\\ufe0e\\ufe0f",s="\\u200d",l=RegExp("["+s+t+r+o+"]");function c(e){return l.test(e)}e.exports=c},9738:(e,t,n)=>{"use strict";n.d(t,{L:()=>a,__:()=>s});n(3432);const a=()=>new Promise((e=>{window&&chrome.runtime.sendMessage({target:"language",event:"getI18nMap"},(t=>{self.i18nMap=t,e()}))}));let i,r="zh-CN",o=1e3;const s=(e,t=null)=>{if(i||(i=setTimeout((()=>{r="zh-CN",i=null}),o)),"auto"===r||r===chrome.i18n.getUILanguage())return chrome.i18n.getMessage(e,t);if(self.i18nMap&&r in self.i18nMap){const n=self.i18nMap[r][e];if(n){const{message:e,placeholders:a={}}=n;let i=e;const r=/\$(.+?)\$/g.exec(e);if(r){const n=r.slice(1);n.map((e=>e.toLowerCase())).map((n=>{n in a&&(i=e.replaceAll(new RegExp(`\\$${n}\\$`,"ig"),(()=>t.shift())))}))}return i}return""}return""}},9751:(e,t,n)=>{"use strict";var a=n(6540);a.createContext({})},9830:(e,t,n)=>{"use strict";n.d(t,{A:()=>E});var a=n(8087),i=(n(3376),n(6540)),r=n(5522),o=n(7177),s=n(9551),l=n(8909),c=n(3205),d=n(5999),u=n(8285),p=n(9983),h=n(4707);const{FREE_NUMBER:g,MAX_NUMBER:m,FREE_MAX_LENGTH:f,VIP_MAX_LENGTH:b}=h.Xy,v=d.Ay.div`
	.list {
		.list-item {
			display: flex;
			align-items: center;
			width: 100%;
			height: 28px;
			
			& > span {
				
				&:first-of-type {
					width: 20px;
					flex-shrink: 0;
				}
				
				&:nth-child(2) {
					width: 70px;
				}
			}
			
			.text {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				flex-grow: 1;
				
				&.off {
					text-decoration: line-through;
				}
			}
			
			.action-box {
				display: flex;
				margin-left: 12px;
				
				.button {
					margin-right: 12px;
					
					&:last-of-type {
						margin-right: 0;
					}
				}
			}
		}
	}
	
	.whisper-message-editing-modal {
		width: 500px;
		
		.modal-body {
			display: flex;
			flex-direction: column;
			font-size: 14px;
			
			label {
				margin-bottom: 16px;
				
				&:last-of-type {
					margin-bottom: 0;
				}
				
				p {
					margin-top: 0;
					margin-bottom: 2px;
				}
				
				input {
					width: calc(100% - 22px);
					padding: 6px 10px;
					outline: none;
				}
			}
			
			section {
				margin: 0;
				
				& > .content {
					width: 100%;
					
					.title {
						font-size: 14px;
					}
				}
			}
		}
	}
`,y=d.Ay.textarea`
	width: calc(100% - 18px);
	min-height: 50px;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 6px;
`,S=function({index:e,info:t,onEditMessage:n,onDeleteMessage:r,onDragMove:o,onDrop:s}){const l=i.useCallback((()=>{n({index:e,...t})}),[t]),c=i.useCallback((()=>{r(e)}),[e]);return i.createElement(w,{className:"list-item",index:e,onDragMove:o,onDrop:s},i.createElement("span",null,e+1,"."),i.createElement("span",{className:["text",t.on?"on":"off"].join(" ")},t.autoEnter?"[\u70b9\u51fb\u53d1\u9001] ":"",t.text),i.createElement("span",{className:"action-box"},i.createElement(a.sL,{className:"border",onClick:l},"\u7f16\u8f91"),i.createElement(a.sL,{className:"border",onClick:c},"\u5220\u9664")))},w=function({index:e,children:t,onDragMove:n,onDrop:a,...s}){const l=i.useRef(null),[,c]=(0,r.H)({accept:"sortable-list-item",hover(t,a){if(!l.current)return;const i=t.index,r=e;if(i===r)return;const o=l.current.getBoundingClientRect(),s=(o.bottom-o.top)/2,c=a.getClientOffset(),d=c.y-o.top;i<r&&d<s||i>r&&d>s||(n(i,r),t.index=r)}}),[{isDragging:d},u]=(0,o.i)({item:{type:"sortable-list-item",index:e},collect:e=>({isDragging:e.isDragging()}),end(){a()}});return u(c(l)),i.createElement("div",{ref:l,className:"sortable-list-item",style:{opacity:d?0:1},...s},t)};class C extends i.Component{constructor(e){super(e)}state={customWhisperMessages:[],modalState:"add",showEditModal:!1,editingInfo:{index:"",on:!0,text:""},cvImageDownload:!1,autoTakeVipPrivilege:!1,autoTakeVipPrivilegePushNotification:!1};static contextType=p.T;menuInputCompositionStart=!1;customOrderChanged=!1;menuTextInputRef=i.createRef();componentDidMount(){chrome.runtime.sendMessage({target:"customWhisperMessage",event:"getSetting"},(({on:e,resizeRate:t})=>{this.setState({resizeRate:t})})),chrome.runtime.sendMessage({target:"cvImageDownload",event:"getSetting"},(({on:e})=>{this.setState({cvImageDownload:e})})),chrome.runtime.sendMessage({target:"autoTakeVipPrivilege",event:"getSetting"},(e=>{this.setState({autoTakeVipPrivilege:e.on,pushAutoTakeVipPrivilegeNotification:e.pushNotification})})),this.updateMenuList()}updateMenuList=()=>{chrome.runtime.sendMessage({target:"customWhisperMessage",event:"getMessages"},(e=>{e&&this.setState({customWhisperMessages:e})}))};handleOnToggleAutoTakeVipPrivilege=()=>{chrome.runtime.sendMessage({target:"autoTakeVipPrivilege",event:"setSetting",on:!this.state.autoTakeVipPrivilege},(()=>{this.context.uploadSettings("autoTakeVipPrivilege"),this.setState({autoTakeVipPrivilege:!this.state.autoTakeVipPrivilege})}))};handleOnToggleAutoTakeVipPrivilegeNotification=()=>{chrome.runtime.sendMessage({target:"autoTakeVipPrivilege",event:"setSetting",pushNotification:!this.state.pushAutoTakeVipPrivilegeNotification},(()=>{this.context.uploadSettings("autoTakeVipPrivilege"),this.setState({pushAutoTakeVipPrivilegeNotification:!this.state.pushAutoTakeVipPrivilegeNotification})}))};handleOnCloseModal=()=>{this.setState({showEditModal:!1})};handleOnCreateNewMessage=()=>{const{customWhisperMessages:e}=this.state,{bhAccount:t}=this.context;return!(Object.values(e).length>=g&&Object.values(e).length<=m)||t&&t.isVIP?Object.values(e).length>=m?a.QB.info(`\u81ea\u5b9a\u4e49\u6d88\u606f\u6700\u591a\u53ea\u80fd\u52a0${m}\u6761\uff0c\u672a\u6765\u4f1a\u5f00\u653e\u66f4\u9ad8\u4e0a\u9650`):void this.setState({showEditModal:!0,modalState:"add",editingInfo:{index:e.length,text:"",on:!0,autoEnter:!1}}):this.context.handleOnClickShowPaymentModal()};onTextCompositionStart=()=>{this.menuInputCompositionStart=!0};onTextCompositionEnd=e=>{this.menuInputCompositionStart=!1;const{editingInfo:t}=this.state,{hasLogin:n,bhAccount:i={}}=this.context,r=!!i&&i["isVIP"],o=r?b:f;return n?e.target?.value.length>o?a.QB.error(`\u5b57\u6570${e.target?.value.length}\uff0c\u5df2\u8d85\u8fc7\u4e0a\u9650${o}`):(t.text=e.target.value.slice(0,o),void this.setState({editingInfo:t})):a.QB.error("\u767b\u5f55\u52a9\u624b\u8d26\u53f7\u540e\u4f7f\u7528\u8be5\u529f\u80fd")};handOnConfirmUpdateMessage=()=>{const{editingInfo:e,modalState:t,customWhisperMessages:n}=this.state;e.text?chrome.runtime.sendMessage({target:"customWhisperMessage",event:"setMessage",index:e.index,on:e.on,text:e.text,autoEnter:e.autoEnter},(e=>{e?(this.context.uploadSettings("customWhisperMessage"),this.updateMenuList(),this.setState({showEditModal:!1})):a.QB.error("\u63d2\u5165/\u66f4\u65b0\u81ea\u5b9a\u4e49\u6d88\u606f\u5931\u8d25")})):a.QB.error("\u8bf7\u8f93\u5165\u5185\u5bb9")};handleOnEditMessage=({index:e,text:t,on:n,autoEnter:a})=>{this.setState({showEditModal:!0,modalState:"edit",editingInfo:{index:e,text:t,on:n,autoEnter:a}})};handleOnDeleteCustomMessage=e=>{chrome.runtime.sendMessage({target:"customWhisperMessage",event:"deleteMessage",index:e},(e=>{e&&(this.context.uploadSettings("customWhisperMessage"),this.updateMenuList())}))};onChangeText=e=>{const{editingInfo:t}=this.state,{hasLogin:n,bhAccount:i={}}=this.context;if(!n)return a.QB.error("\u767b\u5f55\u52a9\u624b\u8d26\u53f7\u540e\u4f7f\u7528\u8be5\u529f\u80fd");const r=!!i&&i["isVIP"],o=r?b:f;if(e.target?.value.length>o)return a.QB.error(`\u5b57\u6570${e.target?.value.length}\uff0c\u5df2\u8d85\u8fc7\u4e0a\u9650${o}`);this.menuInputCompositionStart?t.text=e.target.value:t.text=e.target.value.slice(0,o),this.setState({editingInfo:t})};onChangeOn=()=>{const{editingInfo:e}=this.state;e.on=!e.on,this.setState({editingInfo:e})};onChangeAutoEnter=()=>{const{editingInfo:e}=this.state;e.autoEnter=!e.autoEnter,this.setState({editingInfo:e})};onDragMoveCustomMessage=(e,t)=>{if(e!==t){this.customOrderChanged=!0;const{customWhisperMessages:n}=this.state,a=n[e];n.splice(e,1),n.splice(t,0,a),this.setState({customWhisperMessages:n})}};onDropCustomMessage=()=>{this.customOrderChanged&&chrome.runtime.sendMessage({target:"customWhisperMessage",event:"setMessageList",list:this.state.customWhisperMessages},(()=>{this.customOrderChanged=!1,this.context.uploadSettings("customWhisperMessage")}))};handleOnToggleCvImageDownload=()=>{chrome.runtime.sendMessage({target:"cvImageDownload",event:"setSetting",on:!this.state.cvImageDownload},(()=>{this.context.uploadSettings("cvImageDownload"),this.setState({cvImageDownload:!this.state.cvImageDownload})}))};render(){const{customWhisperMessages:e,showEditModal:t,editingInfo:n,modalState:r,autoTakeVipPrivilege:o,pushAutoTakeVipPrivilegeNotification:c}=this.state,{hasLogin:d,bilibiliAccount:p,bhAccount:h={}}=this.context,w=!!h&&h["isVIP"];return i.createElement(v,null,i.createElement(u.KK,{title:"\u5927\u4f1a\u5458\u76f8\u5173"},i.createElement(u.wn,{title:"\u81ea\u52a8\u9886\u53d6\u5927\u4f1a\u5458\u798f\u5229",description:"\u8be5\u529f\u80fd\u6bcf\u5929\u90fd\u4f1a\u5e2e\u4f60\u68c0\u67e5\uff0c\u6bcf\u4e2a\u6708\u9886\u53d6\u4e00\u6b21",hasLogin:d,toolbar:i.createElement(a.w9,{disable:!p,onClick:this.handleOnToggleAutoTakeVipPrivilege,on:o}),active:o&&!!p&&d},i.createElement(a.ck,{title:"\u63a8\u9001\u901a\u77e5",operation:i.createElement(a.w9,{on:c,onClick:this.handleOnToggleAutoTakeVipPrivilegeNotification})}))),i.createElement(u.KK,{title:"\u4e13\u680f"},i.createElement(u.wn,{title:"\u56fe\u7247\u4e0b\u8f7d",toolbar:i.createElement(a.w9,{onClick:this.handleOnToggleCvImageDownload,on:this.state.cvImageDownload}),active:this.state.cvImageDownload})),i.createElement(u.KK,{title:"\u6d88\u606f\u4e2d\u5fc3"},i.createElement("div",{className:"list-wrapper custom"},i.createElement(u.wn,{title:i.createElement(i.Fragment,null,"\u81ea\u5b9a\u4e49\u5feb\u6377\u6d88\u606f (",Object.values(e).length,"/",w?m:g,") ",i.createElement(a.Ap,null)),description:"\u62d6\u52a8\u5bfc\u822a\u53ef\u4ee5\u8fdb\u884c\u6392\u5e8f",hasLogin:d,toolbar:i.createElement(a.sL,{className:"add-btn border",onClick:this.handleOnCreateNewMessage},"\u6dfb\u52a0"),helperArea:i.createElement(i.Fragment,null,"\u6d88\u606f\u6570\u91cf\u4e0a\u9650\uff1a",g,i.createElement("br",null),"\u6d88\u606f\u5b57\u7b26\u4e0a\u9650\uff1a",f,i.createElement("br",null),i.createElement("br",null),i.createElement("b",null,"\u4f1a\u5458\u6d88\u606f\u6570\u91cf\u4e0a\u9650\uff1a",m),i.createElement("br",null),i.createElement("b",null,"\u4f1a\u5458\u6d88\u606f\u5b57\u7b26\u4e0a\u9650\uff1a",b))},i.createElement("div",{className:"list"},i.createElement(s.Q,{backend:l.t2},Object.values(e).map(((e,t)=>i.createElement(S,{index:t,key:e.text,info:e,onEditMessage:this.handleOnEditMessage,onDeleteMessage:this.handleOnDeleteCustomMessage,onDragMove:this.onDragMoveCustomMessage,onDrop:this.onDropCustomMessage})))))))),i.createElement(a.aF,{open:t,className:"whisper-message-editing-modal",title:"add"===r?"\u65b0\u589e\u5feb\u6377\u6d88\u606f":"\u7f16\u8f91\u5feb\u6377\u6d88\u606f",onClickMask:this.handleOnCloseModal,footer:i.createElement("div",{className:"btn-group",style:{display:"flex"}},i.createElement(a.sL,{onClick:this.handleOnCloseModal},"\u53d6\u6d88"),i.createElement(a.sL,{className:"confirm primary",onClick:this.handOnConfirmUpdateMessage},"\u786e\u8ba4"))},i.createElement("label",{from:"text"},i.createElement("p",null,"\u6d88\u606f\u5185\u5bb9 (\u4e0d\u957f\u4e8e",w?b:f,"\u4e2a\u5b57\u7b26)"),i.createElement(y,{id:"text",ref:this.menuTextInputRef,onChange:this.onChangeText,onCompositionStart:this.onTextCompositionStart,onCompositionEnd:this.onTextCompositionEnd,placeholder:`\u4e0d\u5927\u4e8e${w?b:f}\u4e2a\u4e2d\u6587\u6c49\u5b57\u5bbd\u5ea6`,value:n.text})),i.createElement(u.wn,{title:"\u70b9\u51fb\u76f4\u63a5\u53d1\u9001",active:n.autoEnter,toolbar:i.createElement(a.w9,{onClick:this.onChangeAutoEnter,on:n.autoEnter})}),i.createElement(u.wn,{title:"\u542f\u7528",active:n.on,toolbar:i.createElement(a.w9,{onClick:this.onChangeOn,on:n.on})})))}}const E=(0,c.y)(C)},9899:(e,t,n)=>{"use strict";n.d(t,{V:()=>a});class a{constructor(...e){this.set(...e)}get zero(){return new this.constructor(0,0)}get infinity(){return new this.constructor(1/0,1/0)}get NaN(){return new this.constructor(NaN,NaN)}get unit(){return new this.constructor(1,1)}x;y;__valid=!1;__needUpdate=!0;get valid(){return this.__needUpdate&&(this.__valid=Number.isInteger(this.x)&&Number.isInteger(this.y),this.__needUpdate=!1),this.__valid}get area(){return this.x*this.y}set=(...e)=>{if(isNaN(+e[0])||isNaN(+e[1])){if(e[0]instanceof Array&&2===e[0].length)this.set(...e[0]);else if(e[0]instanceof a){const{x:t,y:n}=e[0];this.set(t,n)}}else this.__needUpdate=!0,this.x=+e[0],this.y=+e[1];return this};setX=e=>(this.x=e,this.__needUpdate=!0,this);setY=e=>(this.y=e,this.__needUpdate=!0,this);add=e=>(this.x+=e.x,this.y+=e.y,this);addX=e=>(this.x+=e,this);addY=e=>(this.y+=e,this);sub=e=>(this.x-=e.x,this.y-=e.y,this);subX=e=>this.addX(-e);subY=e=>this.addY(-e);multiply=e=>0===e?this.set(0,0):(this.x*=e,this.y*=e,this);multiplyX=e=>(0===e?this.x=1/0:this.x*=e,this);multiplyY=e=>(0===e?this.y=1/0:this.y*=e,this);divide=e=>0===e?this.set(1/0,1/0):this.multiply(1/e);divideX=e=>this.multiplyX(1/e);divideY=e=>this.multiplyY(1/e);dot=e=>this.x*e.x+this.y+e.y;equal=(...e)=>{if("number"===typeof e[0]&&"number"===typeof e[1])return e[0]===this.x&&e[1]===this.y;if(e[0]instanceof Array&&2===e.length)return this.equal(...e[0]);if(e[0]instanceof a){const{x:t,y:n}=e[0];return this.equal(t,n)}return!1};normalize=()=>{const e=Math.sqrt(this.x**2+this.y**2);return this.divide(e)};negtiveX=()=>(this.x*=-1,this);negtiveY=()=>(this.y*=-1,this);negtive=()=>this.negtiveX().negtiveY();round=()=>(this.x=Math.round(this.x),this.y=Math.round(this.y),this);roundX=()=>(this.x=Math.round(this.x),this);roundY=()=>(this.y=Math.round(this.y),this);floor=()=>(this.x=Math.floor(this.x),this.y=Math.floor(this.y),this);floorX=()=>(this.x=Math.floor(this.x),this);floorY=()=>(this.y=Math.floor(this.y),this);ceil=()=>(this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this);ceilX=()=>(this.x=Math.ceil(this.x),this);ceilY=()=>(this.y=Math.ceil(this.y),this);trunc=()=>(this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this);truncX=()=>(this.x=Math.trunc(this.x),this);truncY=()=>(this.y=Math.trunc(this.y),this);clone=()=>new this.constructor(this.x,this.y);toArray=()=>[this.x,this.y];toObject=()=>({x:this.x,y:this.y});toString=(e="x",t="y")=>`${e}${this.x}${t}${this.y}`}},9927:(e,t,n)=>{"use strict";n.d(t,{R:()=>a});const a=function(e,t){let n=self?.navigator?.mimeTypes;for(let a in n)if(n[a][e]===t)return!0;return!1}},9983:(e,t,n)=>{"use strict";n.d(t,{T:()=>i});var a=n(6540);const i=a.createContext({})}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,(()=>{var e="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",a="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",i=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},r=n=>n.map((n=>{if(null!==n&&"object"===typeof n){if(n[e])return n;if(n.then){var r=[];r.d=0,n.then((e=>{o[t]=e,i(r)}),(e=>{o[a]=e,i(r)}));var o={};return o[e]=e=>e(r),o}}var s={};return s[e]=e=>{},s[t]=n,s}));n.a=(n,o,s)=>{var l;s&&((l=[]).d=-1);var c,d,u,p=new Set,h=n.exports,g=new Promise(((e,t)=>{u=t,d=e}));g[t]=h,g[e]=e=>(l&&e(l),p.forEach(e),g["catch"]((e=>{}))),n.exports=g,o((n=>{var i;c=r(n);var o=()=>c.map((e=>{if(e[a])throw e[a];return e[t]})),s=new Promise((t=>{i=()=>t(o),i.r=0;var n=e=>e!==l&&!p.has(e)&&(p.add(e),e&&!e.d&&(i.r++,e.push(i)));c.map((t=>t[e](n)))}));return i.r?s:o()}),(e=>(e?u(g[a]=e):d(h),i(l)))),l&&l.d<0&&(l.d=0)}})(),(()=>{var e=[];n.O=(t,a,i,r)=>{if(!a){var o=1/0;for(d=0;d<e.length;d++){for(var[a,i,r]=e[d],s=!0,l=0;l<a.length;l++)(!1&r||o>=r)&&Object.keys(n.O).every((e=>n.O[e](a[l])))?a.splice(l--,1):(s=!1,r<o&&(o=r));if(s){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,i,r]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{n.j=840})(),(()=>{var e={840:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var i,r,[o,s,l]=a,c=0;if(o.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var d=l(n)}for(t&&t(a);c<o.length;c++)r=o[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},a=self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),(()=>{n.nc=void 0})();var a=n.O(void 0,[236,61],(()=>n(4224)));a=n.O(a)})();