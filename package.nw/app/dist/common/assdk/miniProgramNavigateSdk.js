"use strict";function init(){var r=require("../../common/request/request.js"),e=require("../../config/urlConfig.js"),i=require("../../actions/windowActions.js"),o=require("../../stores/projectStores.js"),a=function(r,e){i.showSimulatorConfirm({content:r,callback:e})},t=function(i,t){var n=i.args,s=n.appId,c=o.getCurrentProject()||{},p=i.appid,g=i.ext_appid;r({url:e.checkJumpWeapp+"?appid="+p+"&ext_appid="+g+"&platform="+(c.platform?1:0),body:JSON.stringify({scene:1037,jump_appid:s}),method:"post",needToken:1},function(r,e,i){try{if(!r){var o=JSON.parse(i),n=o.baseresponse,s=o.baseresponse.errcode;o.actioncode;if(0!=s)return t({errMsg:"navigateToMiniProgram:fail "+n.errmsg});if(0==s){var c=o.actioncode;if(1==c)return a(o.alert_msg,function(r){r&&o.alert_url&&nw.Shell.openExternal(o.alert_url)}),t({errMsg:"navigateToMiniProgram:fail "+o.alert_msg})}}}catch(r){}t({errMsg:"navigateToMiniProgram:ok"})})},n=function(r,e){e({errMsg:"navigateBackMiniProgram:ok"})},s=function(r,e){e({errMsg:"exitMiniProgram:ok"})};_exports={navigateToMiniProgram:t,navigateBackMiniProgram:n,exitMiniProgram:s}}var _exports;init(),module.exports=_exports;