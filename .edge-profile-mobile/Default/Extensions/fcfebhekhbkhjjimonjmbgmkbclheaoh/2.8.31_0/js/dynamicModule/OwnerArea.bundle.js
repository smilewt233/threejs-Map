"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[350],{146:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var i=a(3879),r=a(724),n=a(4271),o=a(5093),l=a.n(o),s=a(6540),c=a(961),p=a(5999),m=a(9751),d=a(4707);const g=p.Ay.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: visibility 0.2s, opacity 0.2s;
  backdrop-filter: blur(10px);
  z-index: 33;

  .mask {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    background-color: rgb(255 255 255 / 80%);
    z-index: -1;
  }

  @supports not (backdrop-filter: blur(10px)) {
    .mask {
      background-color: rgb(255 255 255);
    }
  }

  &.show {
    opacity: 1;
    visibility: visible;
    pointer-events: inherit;
  }

  &.columns-1 {
    //width: 400px;
    height: 500px;
  }

  &.columns-2 {
    //width: 800px;
    height: 500px;
  }

  .close-button {
    position: fixed;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    .button-view {
      padding: 0;
    }
  }

  & > main {
    padding: 12px;
  }

  @media (prefers-color-scheme: dark) {
    color: var(--bilibili-gray);

    .mask {
      background-color: rgb(0 0 0 / 88%);
    }

    @supports not (backdrop-filter: blur(10px)) {
      .mask {
        background-color: rgb(31 31 31);
      }
    }
  }
`,b=p.Ay.section`
	position: relative;
	padding: 6px;
	border-radius: 12px;
	background-color: transparent;
	border: 1px solid transparent;
	box-sizing: border-box;
	transition: background-color .2s, border-color .2s;
	
	.topic {
		margin: 0 0 4px 0;
		padding: 4px 4px 4px 8px;
		background-color: rgb(255 255 255 / 16%);
		border-radius: 2px;
	}
	
	&:hover {
		background-color: rgb(255 255 255 / 5%);
	}
	
	@media (prefers-color-scheme: dark) {
		&:hover {
			background-color: rgb(255 255 255 / 2%);
		}
		
		.topic {
			background-color: rgb(255 255 255 / 8%);
		}
	}
`,u=(0,p.Ay)(b)`
	display: flex;
	
	.avatar {
		position: relative;
		flex-shrink: 0;
		width: 60px;
		height: 60px;
		border: 3px solid var(--paper-grey-100);
		border-radius: 50%;
		overflow: hidden;
		
		
		&:hover {
			.space-anchor {
				opacity: 1;
			}
		}
		
		.space-anchor {
			position: absolute;
			top: 0;
			bottom: 0;
			width: 100%;
			z-index: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: rgb(0 0 0 / 60%);
			color: var(--bilibili-gray);
			opacity: 0;
			transition: opacity .2s;
			cursor: pointer;
		}
	}
	
	.info {
		flex-grow: 1;
		margin-left: 12px;
		font-size: 18px;
		
		.username-box {
			display: flex;
			flex-wrap: nowrap;
			margin: 0;
			white-space: nowrap;
		}
		
		.identity-tags {
			position: absolute;
			top: 6px;
			right: 6px;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			margin-left: 0;
			width: fit-content;
			
			i {
				display: inline-block;
				margin-bottom: 5px;
				padding: 2px 8px;
				line-height: 20px;
				vertical-align: bottom;
				border-radius: 6px;
				font-style: normal;
				font-size: 12px;
				background-color: rgb(0 0 0 / 10%);
				color: var(--bilibili-gray);
				white-space: nowrap;
				box-sizing: border-box;
				//transform: scale(0.9);
				transform-origin: top right;
				
				&.bilibili-vip {
					background-color: rgb(251 114 153 / 60%);
				}
				
				&.bilibili-helper-vip {
					background-color: rgb(251 114 153 / 80%);
					
					.bilibili-helper-2-icon-cat-paw {
						zoom: .8;
						transform: rotate(-35deg);
						margin-right: 6px;
					}
				}
			}
		}
		
		.level-box {
			width: 40%;
			
			.level-value {
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				
				.exp {
					margin-left: auto;
				}
			}
			
			.level-bar {
				width: 100%;
				height: 2px;
				background-color: rgb(121 121 121 / 50%);
				
				.current-level-bar {
					height: 100%;
					background-color: var(--bilibili-pink);
				}
			}
		}
		
		.wallet {
			margin-top: 4px;
			font-size: 12px;
			
			& > span {
				margin-left: -4px;
				margin-right: 12px;
				padding: 0 4px;
				background-color: transparent;
				transition: background-color .2s;
				cursor: pointer;
				
				&:last-of-type {
					margin-right: 0;
				}
				
				&:hover {
					background-color: rgb(255 255 255 / 40%);
				}
				
				&:active {
					background-color: rgb(255 255 255 / 20%);
				}
				
				i {
					font-style: normal;
				}
			}
		}
	}
	
	@media (prefers-color-scheme: dark) {
		.avatar {
			border-color: var(--paper-grey-800);
		}
		
		.info {
			.tags {
				i {
					background-color: rgb(255 255 255 / 10%);
				}
			}
			
			.wallet {
				& > span {
					&:hover {
						background-color: rgb(255 255 255 / 20%);
					}
					
					&:active {
						background-color: rgb(255 255 255 / 10%);
					}
				}
			}
			
			.identity-tags {
				i {
					cursor: pointer;
					
					&.bilibili-helper-vip {
						background-color: rgb(251 114 153 / 60%);
					}
					
					&.bilibili-vip {
						background-color: rgb(251 114 153 / 40%);
					}
				}
			}
		}
	}
`,h=(0,p.Ay)(b)`
	main {
		display: flex;
		justify-content: space-between;
		margin-bottom: 4px;
		
		&:last-of-type {
			margin-bottom: 0;
		}
		
		.task {
			position: relative;
			display: flex;
			flex-grow: 1;
			margin-right: 4px;
			padding: 6px 22px 6px 10px;
			border-radius: 6px;
			background-color: hsl(0deg 0% 88% / 16%);
			white-space: nowrap;
			
			&:last-of-type {
				margin-right: 0;
			}
			
			::after {
				content: '';
				position: absolute;
				right: 10px;
				bottom: 8px;
				display: block;
				width: 4px;
				height: 4px;
				background-color: var(--paper-grey-400);
				box-shadow: 4px 0 0 0 var(--paper-grey-400), 8px 0 0 0 var(--paper-grey-400), 0px -4px 0 0 var(--paper-grey-400);
				transform: rotate(-45deg) scale(0.7);
			}
			
			&.done {
				::after {
					background-color: var(--google-green-500);
					box-shadow: 4px 0 0 0 var(--google-green-500), 8px 0 0 0 var(--google-green-500), 0px -4px 0 0 var(--google-green-500);
				}
			}
			
			.sup {
				zoom: 0.75;
				font-style: normal;
			}
		}
	}
	
	@media (prefers-color-scheme: dark) {
		main {
			.task {
				background-color: rgba(255, 255, 255, 0.08);
				
				::after {
					background-color: var(--paper-grey-700);
					box-shadow: 4px 0 0 0 var(--paper-grey-700), 8px 0 0 0 var(--paper-grey-700), 0px -4px 0 0 var(--paper-grey-700);
				}
			}
		}
	}
`,x=(0,p.Ay)(b)`
	main {
		display: flex;
		//justify-content: space-between;
		
		.section {
			position: relative;
			display: flex;
			justify-content: space-between;
			margin-right: 4px;
			padding: 6px 10px 6px 10px;
			width: fit-content;
			border-radius: 6px;
			background-color: hsl(0deg 0% 88% / 16%);
			cursor: pointer;
			transition: background-color .2s;
			
			&:last-of-type {
				margin-right: 0;
			}
			
			&:hover {
				background-color: rgb(255 255 255 / 25%);
			}
			
			i {
				margin-left: 22px;
				font-style: normal;
			}
		}
	}
	
	@media (prefers-color-scheme: dark) {
		main {
			.section {
				background-color: rgb(255 255 255 / 8%);
			}
		}
	}
`;class v extends s.Component{constructor(e){super(e),this.modalElement=document.createElement("div"),this.modalElement.id="ownerArea",document.getElementById("root").querySelector(".content-wrapper").appendChild(this.modalElement)}static contextType=m.T;state={navData:null,memberData:null,dailyTaskData:null,statisticalData:null,privilegeData:null};hasInitData=!1;componentDidUpdate(e,t,a){e.active||!this.props.active||this.hasInitData||(this.hasInitData=!0,this.getVIPInfo(),this.getMemberInfo(),this.getDailyTaskState(),this.getStatisticalData(),this.getPrivilegeStatus())}getVIPInfo=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/web-interface/nav",options:{contentType:"json"}},(({data:e})=>{0===e.code&&this.setState({navData:e.data})}))};getMemberInfo=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/member/web/account",options:{contentType:"json"}},(({data:e})=>{0===e.code&&this.setState({memberData:e.data})}))};getDailyTaskState=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/member/web/exp/reward",options:{contentType:"json"}},(({data:e})=>{0===e.code&&this.setState({dailyTaskData:e.data})}))};getStatisticalData=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/web-interface/nav/stat",options:{contentType:"json"}},(({data:e})=>{0===e.code&&this.setState({statisticalData:e.data})}))};getPrivilegeStatus=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/vip/privilege/my",options:{contentType:"json"}},(({data:e})=>{0===e.code&&this.setState({privilegeData:e.data})}))};openPage=e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})};renderCatIdentities=()=>{const{bhAccount:e}=this.context;return e?e.identities.map((e=>{const t=d.y8[e.name],a=e.to>Date.now()||!e.hasDateTimeLimit;return a&&t?s.createElement("i",{key:e.name,className:"bilibili-helper-vip",title:`${l()(e.to).format("YYYY-MM-DD")} \u5230\u671f`},s.createElement(i.I,{icon:"cat-paw",size:12}),t):null})).filter(Boolean):null};renderBasicArea=()=>{const{navData:e}=this.state;return e?s.createElement(u,null,(()=>{const{face:t,uname:a,level_info:i,wallet:r,money:o,vipStatus:l,vip_label:c}=e,{current_level:p,next_exp:m,current_exp:d}=i,{text:g}=c,{bcoin_balance:b}=r;return s.createElement(s.Fragment,null,s.createElement("div",{className:"avatar"},s.createElement(n._,{url:t}),s.createElement("div",{className:"space-anchor",onClick:()=>this.openPage("https://space.bilibili.com/")},"\u4e2a\u4eba\u7a7a\u95f4")),s.createElement("div",{className:"info"},s.createElement("h5",{className:"username-box"},a),s.createElement("span",{className:"identity-tags"},this.renderCatIdentities(),l?s.createElement("i",{className:"bilibili-vip",onClick:()=>this.openPage("https://account.bilibili.com/account/big")},g):null),s.createElement("div",{className:"level-box"},s.createElement("div",{className:"level-value"},"LV",p," ",s.createElement("span",{className:"exp"},d,"/",m)),s.createElement("div",{className:"level-bar"},s.createElement("div",{className:"current-level-bar",style:{width:d/m*100+"%"}}))),s.createElement("div",{className:"wallet"},s.createElement("span",{onClick:()=>this.openPage("https://account.bilibili.com/account/coin")},"\u786c\u5e01: ",s.createElement("i",null,o)),s.createElement("span",{onClick:()=>this.openPage("https://pay.bilibili.com/paywallet-fe/bb_balance.html")},"B\u5e01: ",s.createElement("i",null,b)))))})()):null};renderStatisticalData=()=>{const{bilibiliAccount:e}=this.context,{statisticalData:t}=this.state,a=`https://space.bilibili.com/${e.uid}`;return t?s.createElement(x,null,s.createElement("main",null,s.createElement("div",{className:"section",onClick:()=>this.openPage(`${a}/fans/follow`)},"\u5173\u6ce8",s.createElement("i",null,t.following)),s.createElement("div",{className:"section",onClick:()=>this.openPage(`${a}/fans/fans`)},"\u7c89\u4e1d",s.createElement("i",null,t.follower)),s.createElement("div",{className:"section",onClick:()=>this.openPage(`${a}/dynamic`)},"\u52a8\u6001",s.createElement("i",null,t.dynamic_count)))):null};renderDailyTask=()=>{const{dailyTaskData:e,privilegeData:t}=this.state;return s.createElement(s.Fragment,null,s.createElement(h,null,s.createElement("main",null,e?s.createElement(s.Fragment,null,s.createElement("div",{className:["task",e.login?"done":null].join(" ")},"\u6bcf\u65e5\u767b\u5f55"),s.createElement("div",{className:["task",e.watch?"done":null].join(" ")},"\u6bcf\u65e5\u89c2\u770b\u89c6\u9891"),s.createElement("div",{className:["task",50===e.coins?"done":null].join(" ")},"\u6bcf\u65e5\u6295\u5e01\uff08",e.coins,"/50\uff09")):null),s.createElement("main",null,e?s.createElement(s.Fragment,null,s.createElement("div",{className:["task",e.share?"done":null].join(" ")},"\u6bcf\u65e5\u5206\u4eab\u89c6\u9891",s.createElement("i",{className:"sup"},"(\u5ba2\u6237\u7aef)"))):null)),s.createElement(h,null,s.createElement("main",null,t&&t.list&&t.list.length>0?s.createElement(s.Fragment,null,s.createElement("div",{className:["task",t.list[0].state?"done":null].join(" ")},"\u5e74\u5ea6\u4e13\u4eabB\u5e01\u5238\u8d60\u9001"),s.createElement("div",{className:["task",t.list[1].state?"done":null].join(" ")},"\u5e74\u5ea6\u4e13\u4eab\u4f1a\u5458\u8d2d\u4f18\u60e0\u5238")):null)))};render(){const{columns:e,bilibiliAccount:t}=this.context,{active:a,onClose:i}=this.props;return c.createPortal(s.createElement(g,{className:["owner-modal",a?"show":"hide",1===e?"columns-1":"columns-2"].join(" ")},s.createElement("div",{className:"mask"}),s.createElement("main",null,this.renderBasicArea(),this.renderStatisticalData(),this.renderDailyTask()),s.createElement(r.$,{className:"close-button",icon:"close",iconSize:20,onClick:i})),this.modalElement)}}}}]);