"use strict";function init(){var t=function(t,e,s){var i=this.getWebviewList(),r=this.state.currentWebviewID;i[r].shareBtnShow=!0,i[r].shareWithTicket=!1,this.setState({list:i}),s({errMsg:t+":ok"})},e=function(t,e,s){var i=this.getWebviewList(),r=this.state.currentWebviewID;i[r].shareBtnShow=!0,i[r].shareWithTicket=!0,this.setState({list:i}),s({errMsg:t+":ok"})},s=function(t,e,s){var i=this.getWebviewList(),r=this.state.currentWebviewID;i[r].shareBtnShow=!1,i[r].shareWithTicket=!1,this.setState({list:i}),s({errMsg:t+":ok"})},i=function(t,e,s){var i=this,r=e.args,a=this.state.currentWebviewID,h=this.state.list[a].shareDataURI,n=this.state.list[a].shareWithTicket,o=function(e,a){if(null===e){var h={show:!0,title:r.title,desc:r.desc,imgUrl:r.imgUrl,shareWithTicket:n,dataURI:a,callback:s};i.setState({shareInfo:h})}else s({errMsg:t+":fail"})};h?o(null,h):this.doSimulaterActions("CAPTRUE_WEBVIEW",{},o)};_exports={showShareMenu:t,shareAppMessage:i,hideShareMenu:s,showShareMenuWithShareTicket:e}}var _exports;init(),module.exports=_exports;