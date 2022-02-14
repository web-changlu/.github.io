"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var instance=null,timer=null,Timepiece=function(){function e(){_classCallCheck(this,e),_defineProperty(this,"ZHCNArr",["零","一","二","三","四","五","六","七","八","九","十"]),_defineProperty(this,"dateInfo",null),_defineProperty(this,"rotateInfo",null),_defineProperty(this,"$el",null),_defineProperty(this,"els",null),this.init()}return _createClass(e,[{key:"init",value:function(){if(timer)return timer;console.log("init timepiece...");var e=$('<ul><hr/><li class="cl-clock-bg"></li></ul>');e[0].classList.add("clock"),e[0].setAttribute("id","helang-clock"),e.appendTo("#page-header"),this.$el=e,timer=this.$el;e=new Date;this.dateInfo={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours(),minute:e.getMinutes(),sec:e.getSeconds()},this.setDate(),this.setHour()}},{key:"changeZHCN",value:function(e){if(e<10)return this.ZHCNArr[e];var t=e.toString(),n="";return 0==t.charAt(1)?(1!=t.charAt(0)&&(n=this.ZHCNArr[parseInt(t.charAt(0),10)]),n+=this.ZHCNArr[10]):n=e<20?this.ZHCNArr[10]+this.ZHCNArr[parseInt(t.charAt(1),10)]:this.ZHCNArr[parseInt(t.charAt(0),10)]+this.ZHCNArr[10]+this.ZHCNArr[parseInt(t.charAt(1),10)]}},{key:"setDate",value:function(){for(var e,t,n="",i=this.dateInfo.year.toString(),a=0;a<i.length;a++)n+=this.changeZHCN(parseInt(i.charAt(a),10));e=this.changeZHCN(this.dateInfo.month),t=this.changeZHCN(this.dateInfo.day),this.els?this.els.date.html(n+"年"+e+"月"+t+"日"):this.$el.append('<li class="date">'+n+"年"+e+"月"+t+"日</li>")}},{key:"setHour",value:function(){for(var e=this,t="",n=[],i=1;i<=24;i++)n.push(15*(i-1)*-1),t+="<div><div>"+this.changeZHCN(i)+"时</div></div>";this.$el.append('<li class="hour on-hour">'+t+"</li>"),setTimeout(function(){e.$el.find(".on-hour>div").each(function(e,t){$(t).css({transform:"rotate("+n[e]+"deg)"})}),setTimeout(function(){e.setMinute()},300)},100)}},{key:"setMinute",value:function(){for(var e=this,t="",n=[],i=1;i<=60;i++)n.push(6*(i-1)*-1),t+="<div><div>"+this.changeZHCN(i)+"分</div></div>";this.$el.append('<li class="hour minute on-minute">'+t+"</li>"),setTimeout(function(){e.$el.find(".on-minute>div").each(function(e,t){$(t).css({transform:"rotate("+n[e]+"deg)"})}),setTimeout(function(){e.setSec()},300)},100)}},{key:"setSec",value:function(){for(var e=this,t="",n=[],i=1;i<=60;i++)n.push(6*(i-1)*-1),t+="<div><div>"+this.changeZHCN(i)+"秒</div></div>";this.$el.append('<li class="hour sec on-sec">'+t+"</li>"),setTimeout(function(){e.$el.find(".on-sec>div").each(function(e,t){$(t).css({transform:"rotate("+n[e]+"deg)"})}),setTimeout(function(){e.initRotate()},1300)},100)}},{key:"initRotate",value:function(){var e=this;this.rotateInfo={h:15*(this.dateInfo.hour-1),m:6*(this.dateInfo.minute-1),s:6*(this.dateInfo.sec-1)},this.els={date:this.$el.find(".date"),hour:this.$el.find(".on-hour"),minute:this.$el.find(".on-minute"),sec:this.$el.find(".on-sec")},this.els.hour.css({transform:"rotate("+this.rotateInfo.h+"deg)"}),this.els.minute.css({transform:"rotate("+this.rotateInfo.m+"deg)"}),this.els.sec.css({transform:"rotate("+this.rotateInfo.s+"deg)"}),setTimeout(function(){e.$el.find("hr").addClass("active"),e.start()},300)}},{key:"start",value:function(){var t=this;setTimeout(function(){var e;t.dateInfo.sec<=60?(t.dateInfo.sec++,e=6*(t.dateInfo.sec-1),t.els.sec.css({transform:"rotate("+e+"deg)"}),t.minuteAdd(),t.start()):console.log(t.dateInfo.sec)},1e3)}},{key:"minuteAdd",value:function(){var t=this;61==this.dateInfo.sec&&setTimeout(function(){t.els.sec.css({transform:"rotate(0deg)","transition-duration":"0s"}),t.dateInfo.sec=1,setTimeout(function(){t.els.sec.attr("style","transform:rotate(0deg)")},100),t.dateInfo.minute++;var e=6*(t.dateInfo.minute-1);t.els.minute.css({transform:"rotate("+e+"deg)"}),t.hourAdd()},300)}},{key:"hourAdd",value:function(){var t=this;61==this.dateInfo.minute&&setTimeout(function(){t.els.minute.css({transform:"rotate(0deg)","transition-duration":"0s"}),t.dateInfo.minute=1,setTimeout(function(){t.els.minute.attr("style","transform:rotate(0deg)")},100),t.dateInfo.hour++;var e=15*(t.dateInfo.hour-1);t.els.hour.css({transform:"rotate("+e+"deg)"}),t.dayAdd()},300)}},{key:"dayAdd",value:function(){var t=this;25==this.dateInfo.hour&&setTimeout(function(){t.els.hour.css({transform:"rotate(0deg)","transition-duration":"0s"}),t.dateInfo.hour=1,setTimeout(function(){t.els.hour.attr("style","transform:rotate(0deg)")},100);var e=new Date;t.dateInfo.year=e.getFullYear(),t.dateInfo.month=e.getMonth()+1,t.dateInfo.day=e.getDate(),t.setDate()},300)}}]),e}(),MyEvents=function(){function e(){if(_classCallCheck(this,e),instance)return instance;(instance=this).init()}return _createClass(e,[{key:"init",value:function(){var e=this;console.log("init user events"),this.checkPageSize(),$(window).resize(function(){e.checkPageSize()})}},{key:"checkPageSize",value:function(){$(window).width()<=720?(timer&&(timer.remove(),timer=null),$("#page-header").attr("page-size","min")):new Timepiece}}]),e}(),PWA=function(){function e(){_classCallCheck(this,e),this.insertRemindDom(),"serviceWorker"in navigator&&(navigator.serviceWorker.controller&&navigator.serviceWorker.addEventListener("controllerchange",function(){!function(){{var e,t;GLOBAL_CONFIG.Snackbar?(e="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark,t=GLOBAL_CONFIG.Snackbar.position,Snackbar.show({text:"已更新最新版本",backgroundColor:e,duration:5e5,pos:t,actionText:"点击刷新",actionTextColor:"#fff",onActionClick:function(e){location.reload()}})):(t="light"===document.documentElement.getAttribute("data-theme")?"#49b1f5":"#1f1f1f",t="top: 0; background: ".concat(t,";"),document.getElementById("app-refresh").style.cssText=t)}}()}),window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js")}))}return _createClass(e,[{key:"insertRemindDom",value:function(){$('<div class="app-refresh" id="app-refresh">\n        <div class="app-refresh-wrap">\n          <label>✨ 网站已更新最新版本 👉</label>\n          <a href="javascript:void(0)" onclick="location.reload()">点击刷新</a>\n        </div>\n      </div>').appendTo("body")}}]),e}(),InsertDom=function(){function e(){var t=this;_classCallCheck(this,e),_defineProperty(this,"ap",null),_defineProperty(this,"options",null),_defineProperty(this,"apDom",null),_defineProperty(this,"aplayerContainer",null),_defineProperty(this,"apFlod",null),this.addAplayer(),this.addApFlod(),this.addWaves(),this.options={container:this.apDom[0],autoplay:!1,theme:"#FAEB6C",loop:"all",order:"random",preload:"auto",volume:.7,mutex:!0,listFolded:!0,listMaxHeight:180,lrcType:3,audio:[{name:"觅红",artist:"兔裹煎蛋卷",url:"/music/觅红.mp3",cover:"/music/mihong.png",lrc:""},{name:"你的样子（钢琴版）",artist:"Killed by Moy",url:"/music/你的样子（钢琴版）.flac",cover:"/music/cover.png",lrc:""},{name:"奢香夫人",artist:"潘柚彤",url:"/music/奢香夫人-潘.m4a",cover:"/music/pyt.png",lrc:""}]},this.ap=new APlayer(this.options),this.bindAplayerMove(),this.bindaplayerFlod();var n=new XMLHttpRequest;this.setTheme(this.ap.list.index,n),this.ap.on("listswitch",function(e){e=e.index;t.setTheme(e,n)})}return _createClass(e,[{key:"addAplayer",value:function(){var e=$("<div class='aplayer-container'></div>"),t=$("<div></div>");t[0].classList.add("aplayer"),$('<p class=\'aplayer-title\'><i class="fa fa-music"></i>音乐鉴赏</p><i class="fa fa-times closemusic"></i>').appendTo(e),t.appendTo(e),e.appendTo("body"),this.apDom=t,this.aplayerContainer=e}},{key:"addApFlod",value:function(){var e=$("<div class='aplayer-flod'></div>");e.appendTo("body"),e.attr("flod",!1),this.apFlod=e}},{key:"addWaves",value:function(){var e=$('\n            <div id=\'waves\'>\n                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">\n                    <defs>\n                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>\n                    </defs>\n                    <g class="parallax">\n                        <use xlink:href="#gentle-wave" x="48" y="0"></use>\n                        <use xlink:href="#gentle-wave" x="48" y="3"></use>\n                        <use xlink:href="#gentle-wave" x="48" y="5"></use>\n                        <use xlink:href="#gentle-wave" x="48" y="7"></use>\n                    </g>\n                </svg>\n            </div>\n        ');$("#page-header").after(e)}},{key:"setTheme",value:function(n,e){var i=new Image,a=this,o=new ColorThief;a.ap.list.audios[n].theme||(e.onload=function(){var t=URL.createObjectURL(this.response);i.onload=function(){var e=o.getColor(i);a.ap.theme("rgb(".concat(e[0],", ").concat(e[1],", ").concat(e[2],")"),n),URL.revokeObjectURL(t)},i.src=t},e.open("GET",a.ap.list.audios[n].cover,!0),e.responseType="blob",e.send())}},{key:"bindaplayerFlod",value:function(){var i=this;$(".closemusic").bind("click",function(e){var t=e.screenX,n=window.innerWidth,e={};i.aplayerContainer.css({width:0,border:"none"}),e.left=t<n/2;t="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark,n=GLOBAL_CONFIG.Snackbar.position;Snackbar.show(_defineProperty({text:"点击".concat(e.left?"左":"右","下角按钮可再次开启音乐播放器"),backgroundColor:t,actionText:"我知道了",actionTextColor:"#fff",duration:5e5,pos:n},"actionTextColor","#F8A061")),setTimeout(function(){i.apFlod.attr("flod",!0)},3e3),e.left?i.apFlod.attr("left",!0):i.apFlod.attr("left",!1)}),this.apFlod.bind("click",function(e){i.apFlod.attr("flod",!1),i.apFlod.removeAttr("left"),i.aplayerContainer.css({width:"18rem",border:"3px solid #fff"})})}},{key:"bindAplayerMove",value:function(){var l=this;$(".aplayer-title").bind("mousedown",function(e){var a=e.clientX-l.aplayerContainer[0].offsetLeft,o=e.clientY-l.aplayerContainer[0].offsetTop,r=l.aplayerContainer.height(),s=l.aplayerContainer.width();document.onmousemove=function(e){var t=e.clientX-a,n=e.clientY-o,i=window.innerHeight-r,e=window.innerWidth-s;i<=n?n=i:n<0&&(n=0),t<0?t=0:e<=t&&(t=e),l.aplayerContainer.css({left:t+"px",top:n+"px"})},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}})}}]),e}();btf.isJqueryLoad(function(){new MyEvents,new InsertDom,new PWA});