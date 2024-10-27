(function(g){var window=this;'use strict';var P5=function(a,b){g.S.call(this,{I:"button",Ka:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Y:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},W:[{I:"svg",Y:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},W:[{I:"g",Y:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},W:[{I:"g",Y:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
W:[{I:"path",Y:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.J=a;this.listen("click",this.onClick,this);this.updateValue("title",g.bS(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});this.addOnDisposeCallback(g.$R(b.Xe(),this.element))},xmb=function(a){g.S.call(this,
{I:"div",
N:"ytp-miniplayer-ui"});this.V=this.G=!1;this.player=a;this.S(a,"minimized",this.Eh);this.S(a,"onStateChange",this.qfa);this.S(a,"documentpictureinpicturechange",this.yba)},ymb=function(a,b){g.Cp(a.player.getRootNode(),"ytp-player-minimized",b);
a.player.L("web_cairo_modern_miniplayer")&&g.Cp(a.player.getRootNode(),"ytp-modern-miniplayer",b);a.player.L("web_cairo_modern_miniplayer_inset_progress_bar")&&g.Cp(a.player.getRootNode(),"ytp-miniplayer-alternate-ui",b)},zmb=function(a){var b=a.player.ob().getPlayerSize().width,c=0,d=b;
if(a.player.L("web_cairo_modern_miniplayer")&&!a.V&&!a.player.L("web_cairo_modern_miniplayer_infobar")||a.player.L("web_cairo_modern_miniplayer_inset_progress_bar"))c=12,d=b-24;g.G4a(a.progressBar,c,d,!1);g.pZ(a.progressBar)},Amb=function(a){g.YX.call(this,a);
this.B=new g.XF(this);this.j=new xmb(this.player);this.j.hide();g.jS(this.player,this.j.element,4);a.isMinimized()&&(this.load(),g.Cp(a.getRootNode(),"ytp-player-minimized",!0))};
g.z(P5,g.S);P5.prototype.onClick=function(){this.J.eb("onExpandMiniplayer")};g.z(xmb,g.S);g.k=xmb.prototype;
g.k.show=function(){this.j=new g.pp(this.x5,null,this);this.j.start();if(!this.G){this.tooltip=new g.ZZ(this.player,this);g.P(this,this.tooltip);g.jS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.ue=new g.yY(this.player);g.P(this,this.ue);this.progressBar=new g.oZ(this.player,this);g.P(this,this.progressBar);g.jS(this.player,this.progressBar.element,4);this.player.L("web_cairo_modern_miniplayer_infobar")&&g.yp(this.player.getRootNode(),"ytp-always-showing-infobar");this.B=new g.S({I:"div",
N:"ytp-miniplayer-scrim"});g.P(this,this.B);this.B.Ha(this.element);this.S(this.B.element,"click",this.X0);var a=new g.S({I:"button",Ka:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},W:[g.Sx()]});g.P(this,a);a.Ha(this.B.element);this.S(a.element,"click",this.HV);a=new P5(this.player,this);g.P(this,a);a.Ha(this.B.element);this.C=new g.S({I:"div",N:"ytp-miniplayer-controls"});g.P(this,this.C);this.C.Ha(this.B.element);this.player.L("web_cairo_modern_miniplayer")||this.S(this.C.element,
"click",this.X0);var b=new g.S({I:"div",N:"ytp-miniplayer-button-container"});g.P(this,b);b.Ha(this.C.element);a=new g.S({I:"div",N:"ytp-miniplayer-play-button-container"});g.P(this,a);a.Ha(this.C.element);var c=new g.S({I:"div",N:"ytp-miniplayer-button-container"});g.P(this,c);c.Ha(this.C.element);this.X=new g.jZ(this.player,this,!1);g.P(this,this.X);this.X.Ha(b.element);b=new g.iZ(this.player,this);g.P(this,b);b.Ha(a.element);this.nextButton=new g.jZ(this.player,this,!0);g.P(this,this.nextButton);
this.nextButton.Ha(c.element);this.K=this.player.L("web_cairo_modern_miniplayer")?new g.SZ(this.player,this,0):new g.SZ(this.player,this);g.P(this,this.K);this.K.Ha(this.B.element);this.D=new g.S({I:"div",N:"ytp-miniplayer-buttons"});g.P(this,this.D);g.jS(this.player,this.D.element,4);a=new g.S({I:"button",Ka:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},W:[g.Sx()]});g.P(this,a);a.Ha(this.D.element);this.S(a.element,"click",this.HV);a=new g.S({I:"button",Ka:["ytp-miniplayer-replay-button",
"ytp-button"],Y:{"aria-label":"Close"},W:[g.Yx()]});g.P(this,a);a.Ha(this.D.element);this.S(a.element,"click",this.Dca);this.player.L("web_cairo_modern_miniplayer")&&(a=new P5(this.player,this),g.P(this,a),a.Ha(this.D.element));this.S(this.player,"presentingplayerstatechange",this.y5);this.S(this.player,"appresize",this.kc);this.S(this.player,"fullscreentoggled",this.kc);this.player.L("web_cairo_modern_miniplayer")&&this.S(this.player,"onPlaylistUpdate",this.VS);this.kc();this.G=!0}this.player.getPlayerState()!==
0&&g.S.prototype.show.call(this);this.progressBar.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.j&&(this.j.dispose(),this.j=void 0);g.S.prototype.hide.call(this);this.player.isMinimized()||(this.G&&this.progressBar.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.j&&(this.j.dispose(),this.j=void 0);g.S.prototype.va.call(this)};
g.k.HV=function(){this.player.L("kevlar_watch_while_v2")||this.player.stopVideo();this.player.eb("onCloseMiniplayer")};
g.k.Dca=function(){this.player.playVideo()};
g.k.X0=function(a){if(a.target===this.B.element||a.target===this.C.element)this.player.getPlayerStateObject().isOrWillBePlaying()?this.player.pauseVideo():this.player.playVideo()};
g.k.Eh=function(){ymb(this,this.player.isMinimized());this.player.L("web_cairo_modern_miniplayer")&&this.VS()};
g.k.yba=function(){ymb(this,this.player.lj());this.player.L("web_cairo_modern_miniplayer")&&this.VS();g.Cp(this.player.getRootNode(),"ytp-player-document-picture-in-picture",this.player.lj())};
g.k.Ig=function(){this.progressBar.Rc();this.K.Rc()};
g.k.x5=function(){this.Ig();this.j&&this.j.start()};
g.k.y5=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.VS=function(){this.V=(this.player.isMinimized()||this.player.lj())&&!!this.player.getPlaylist();g.Cp(this.player.getRootNode(),"ytp-has-playlist-data",this.V);zmb(this)};
g.k.kc=function(){zmb(this)};
g.k.qfa=function(a){this.player.isMinimized()&&(a===0?this.hide():this.show())};
g.k.Xe=function(){return this.tooltip};
g.k.bz=function(a,b,c,d,e){var f=0,h=0,l=0,m=g.Om(a);d=b&&(g.xp(b,"ytp-prev-button")||g.xp(b,"ytp-next-button"));if(b){c=g.xp(b,"ytp-play-button");var n=g.xp(b,"ytp-miniplayer-expand-watch-page-button");d?f=l=12:c?(b=g.Mm(b,this.element),l=b.x,f=b.y-12):n&&(l=g.xp(b,"ytp-miniplayer-button-top-left"),f=g.Mm(b,this.element),b=g.Om(b),l?(l=8,f=f.y+40):(l=f.x-m.width+b.width,f=f.y-20))}else l=c-m.width/2,h=25+(e||0);b=this.player.ob().getPlayerSize();e=f+(e||0);m=g.yg(l,0,b.width-m.width-12);e?(a.style.top=
e+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=h+"px");a.style.left=m+"px";this.player.L("web_cairo_modern_miniplayer")&&(h=g.xp(a,"ytp-preview"),a.style.visibility=d&&h&&b.height<225?"hidden":"")};g.z(Amb,g.YX);g.k=Amb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Cp(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.YX.prototype.create.call(this);this.B.S(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.On=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.XX("miniplayer",Amb);})(_yt_player);
