"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[480],{3382:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var i=n(6540),o=n(5999),r=n(9751);const a=10,l=o.Ay.div.attrs((({show:e})=>({className:e?"show":null})))`
  position: absolute;
  right: 0;
  bottom: calc(100% + 1px);
  padding: 4px;
  width: max-content;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  background-color: rgb(236 236 236);
  visibility: hidden;
  transition: visibility 0.2s, opacity 0.2s, transform .2s;
  transform: translateY(6px);
  opacity: 0;
  pointer-events: none;


  &.show {
    visibility: visible;
    transform: translateY(0px);
    opacity: 1;
    pointer-events: initial;
  }

  .list {
    margin: 0 0 6px;
    padding: 0;
    list-style: none;

    .list-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
      min-width: 250px;
      white-space: nowrap;
      font-size: 16px;
      zoom: 0.6;

      .add-button {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
          color: dodgerblue;
        }
      }
    }

    .line {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 3px 0 3px 4px;
      max-width: 250px;
      cursor: pointer;

      &:hover {
        background-color: var(--paper-grey-300);
        border-radius: 2px;
      }

      .keyword {
        flex: 1;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .clear-btn {
        flex-shrink: 0;
        margin-left: 8px;
        color: var(--paper-grey-800);
        zoom: 0.6;

        &:hover {
          color: var(--paper-grey-600);
        }
      }
    }
  }

  input {
    padding: 2px 4px;
    width: calc(100% - 10px);
    min-width: 150px;

    &::placeholder {
      font-size: 12px;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(27 27 27);
    .list .line {
      color: var(--bilibili-gray);

      &:hover {
        background-color: var(--paper-grey-900);
      }
    }
  }
`;class s extends i.Component{constructor(e){super(e)}static contextType=r.T;handleOnClickLogin=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("html/config.html")})};handleOnClickAddAccount=()=>{chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_toolbar",action:"click_bind_button"}),chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"bind"})};handleOnClickBoundAccount=e=>{chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_toolbar",action:"click_bound_account"}),chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"createTabByAccount",uid:e})};handleOnUnbind=(e,t)=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"umami",event:"send",hitType:"event",category:"popup_toolbar",action:"click_unbind_account"}),chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"unbind",uid:t},(()=>{this.props.updateList()}))};renderBindButton=()=>{const{list:e}=this.props,{hasLogin:t,isVIP:n,handleOnClickPayment:o}=this.context;return t?n?e.length>0?e.map((e=>i.createElement("div",{key:e.uid,className:"line",onClick:()=>this.handleOnClickBoundAccount(e.uid)},e.username))):i.createElement("div",{className:"line",onClick:this.handleOnClickAddAccount},"\u7ed1\u5b9a\u65b0\u8d26\u53f7"):i.createElement("div",{className:"line",onClick:o},"\u70b9\u51fb\u5f00\u901a\u52a9\u624b\u4f1a\u5458"):i.createElement("div",{className:"line",onClick:this.handleOnClickLogin},"\u4f1a\u5458\u529f\u80fd\uff0c\u70b9\u51fb\u767b\u5f55")};render(){const{active:e,list:t,handleOnCloseButton:n,...o}=this.props,{columns:r,hasLogin:s,isVIP:c}=this.context;return i.createElement(l,{show:e,...o},i.createElement("div",{className:"list"},i.createElement("div",{className:"list-header"},"\u591a\u8d26\u53f7\u5217\u8868",c&&t.length>0&&t.length<a?i.createElement("span",{className:"add-button",onClick:this.handleOnClickAddAccount},"\u7ed1\u5b9a\u65b0\u8d26\u53f7"):null),this.renderBindButton()))}}}}]);