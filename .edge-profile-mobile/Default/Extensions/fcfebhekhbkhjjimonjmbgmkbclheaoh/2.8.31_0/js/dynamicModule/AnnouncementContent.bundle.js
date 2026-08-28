"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[784],{3514:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var i=o(724),r=o(961),n=o(6540),l=o(5999),a=o(9751);const p=l.Ay.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 20px;
  width: calc(100% - 40px) !important;
  height: calc(100% - 64px) !important;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 14px, rgba(0, 0, 0, 0.2) 0px 2px 12px, rgba(0, 0, 0, 0.1) 0px 2px 8px;
  background-color: rgb(236 236 236);
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: visibility 0.3s, opacity 0.3s;
  //backdrop-filter: blur(10px);
  z-index: 31;
  

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    z-index: -1;
  }

  &.show {
    opacity: 1;
    visibility: visible;
    pointer-events: inherit;
  }

  &.columns-1 {
    width: 400px;
    height: 500px;
  }

  &.columns-2 {
    width: 500px;
    height: 500px;
  }

  @supports not (backdrop-filter: blur(10px)) {
    background-color: rgb(0 0 0 / 88%);
    &::before {
      background-color: rgb(255 255 255);
    }
  }

  @media (prefers-color-scheme: dark) {
    color: #999999;
    background-color: rgb(27 27 27);

    /*@supports not (backdrop-filter: blur(10px)) {
      background-color: #999;
      //&::before {
      //  background-color: #999;
      //}
    }*/
  }


`,s=l.Ay.div`
  padding-bottom: 46px;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;

  footer {
    position: fixed;
    right: 0;
    bottom: 40px;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 32px;
    height: 52px;
    text-align: right;

    .button {
      width: 100%;
      height: 28px;
      font-size: 14px;
      background-color: var(--bilibili-pink);
      font-weight: bold;

      .button-view {
        padding: 0 16px;
      }
    }
  }
`,c=l.Ay.div`
  //position: absolute;
  margin: 24px 12px 12px;
  border-radius: 4px;
  //box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  //background-color: rgb(236 236 236);
  overflow: hidden;

  &:first-of-type {
    margin-top: 12px;
  }

  &.hide {
    main {
      height: 0;
      margin: 6px;
    }
  }

  .close-btn {
    position: absolute;
    right: 0;
  }

  .title {
    text-align: center;
    margin: 18px 12px 12px;
    font-size: 16px;
    font-weight: bold;
  }

  main {
    margin: 0 12px 40px;
    line-height: 24px;
    font-size: 14px;
    white-space: pre-line;
    word-break: break-all;
    overflow: auto;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(27 27 27);
  }
`;class d extends n.Component{constructor(e){super(e),this.modalElement=document.createElement("div"),this.modalElement.id="announcementContent",document.getElementById("root").querySelector(".content-wrapper").appendChild(this.modalElement)}static contextType=a.T;render(){const{active:e,list:t,handleOnCloseButton:o}=this.props,{columns:l,hasLogin:a}=this.context;return r.createPortal(n.createElement(p,{className:["announcement-modal",e?"show":"hide",1===l?"columns-1":"columns-2"].join(" ")},n.createElement(s,null,t.map((({title:e,content:t,id:o},i)=>n.createElement(c,{key:i},n.createElement("h2",{className:"title"},e),n.createElement("main",{dangerouslySetInnerHTML:{__html:t}})))),n.createElement("footer",null,n.createElement(i.$,{className:"primary",onClick:o},"\u77e5\u9053\u5566")))),this.modalElement)}}}}]);