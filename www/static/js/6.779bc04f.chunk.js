(this["webpackJsonprouter-react"]=this["webpackJsonprouter-react"]||[]).push([[6],{148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},272:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(16),c=a(21),i=a(19),s=a(20),o=a(0),l=a.n(o),m=(a(148),function(e){return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"\u9996\u9875"),l.a.createElement("div",{className:"icon"},l.a.createElement("span",{className:"app-react iconfont icon-yingyong"}),l.a.createElement("span",{className:"app-search iconfont icon-search",onClick:function(){e.props.history.push("/home/search")}})))}),u=(a(149),a(117)),p=[{id:1,imgUrl:"https://axhub.im/pro/511b96895ac139d6/images/%E9%A6%96%E9%A1%B5/u3142.png",title:"\u5982\u4f55\u8ba9\u4f60\u7684\u8bbe\u8ba1\u53d8\u5f97\u66f4\u6709\u5546\u4e1a\u4ef7\u503c"},{id:2,imgUrl:"https://axhub.im/pro/511b96895ac139d6/images/%E9%A6%96%E9%A1%B5/u3144.png",title:"VR\u6e38\u620f\u5e02\u573a\u5c06\u589e\u957f75%"},{id:3,imgUrl:"https://axhub.im/pro/511b96895ac139d6/images/%E9%A6%96%E9%A1%B5/u3146.png",title:"\u667a\u6167\u51fa\u884c|ADAS\u4f53\u9a8c\u8bbe\u8ba1\u7684\u591a\u7ef4\u5ea6\u5256\u6790"}],h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).swiper=Object(o.createRef)(),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"swiper-container",ref:this.swiper},l.a.createElement("div",{className:"swiper-wrapper"},p.map((function(e){return l.a.createElement("div",{className:"swiper-slide",key:e.id},l.a.createElement("img",{src:e.imgUrl,alt:""}),l.a.createElement("div",{className:"text-context"},e.title))}))))}},{key:"componentDidMount",value:function(){new u.a(this.swiper.current,{direction:"horizontal",loop:!0})}}]),t}(o.Component),d=a(1),f=a.n(d),v=a(3),E=a(31),b=a(34),N=(a(150),[]),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).SWiper=Object(o.createRef)(),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;this.props.ContentList.length&&(N=this.props.ContentList);var t="",a="",n="";return N.length&&(a=l.a.createElement("div",{className:"hotnews"},l.a.createElement("div",{className:"title"},"\u6d3b\u52a8\u7cbe\u9009"),l.a.createElement("div",{className:"swiper-container",ref:this.SWiper},l.a.createElement("div",{className:"swiper-wrapper"},N.map((function(t){return l.a.createElement("div",{className:"swiper-slide",key:t.id+1,onClick:e.PushDetailRoute.bind(e,t.id,t.objectType)},l.a.createElement("div",{className:"bgimg"},l.a.createElement("img",{src:t.cover,alt:""})),l.a.createElement("div",{className:"text-desc"},"\u5168\u6808\u5de5\u7a0b\u5e08\u7ebf\u4e0b\u57f9\u8bad\u8bfe\u7a0b"),l.a.createElement("span",{className:"eyes-more iconfont icon-xiaoyanjing"},t.viewCount))}))))),t=N.map((function(t,a){if(a<=1)return l.a.createElement("li",{className:"list border-bottom",key:t.id,onClick:e.PushDetailRoute.bind(e,t.id,t.objectType)},l.a.createElement("div",{className:"context"},l.a.createElement("div",{className:"title"},t.title),l.a.createElement("div",{className:"desc"},l.a.createElement("span",{className:"eyes iconfont icon-xiaoyanjing"},t.viewCount),l.a.createElement("span",{className:"author"},t.creatorObj.username," ",t.publishTimeDiffStr))),l.a.createElement("div",{className:"imgdesc"},l.a.createElement("img",{src:t.cover,alt:""})))})),n=N.map((function(e,t){if(t<N.length&&t>=2)return l.a.createElement("li",{className:"list border-bottom",key:e.id},l.a.createElement("div",{className:"context"},l.a.createElement("div",{className:"title"},e.title),l.a.createElement("div",{className:"desc"},l.a.createElement("span",{className:"eyes iconfont icon-xiaoyanjing"},e.viewCount),l.a.createElement("span",{className:"author"},e.creatorObj.username," ",e.publishTimeDiffStr))),l.a.createElement("div",{className:"imgdesc"},l.a.createElement("img",{src:e.cover,alt:""})))}))),l.a.createElement("div",{className:"homepages"},l.a.createElement("ul",{className:"item"},t),a,l.a.createElement("ul",{className:"item"},n),l.a.createElement("div",{className:"list-footer"},l.a.createElement("button",{className:"Loadmore",onClick:this.LoadMoreData.bind(this)},"\u67e5\u770b\u66f4\u591a")))}},{key:"PushDetailRoute",value:function(e,t){this.props.props.history.push("/home/detail/".concat(e).concat(t))}},{key:"LoadMoreData",value:function(){this.props.getMoreContentData()}},{key:"componentDidMount",value:function(){this.FetchContentData()}},{key:"componentDidUpdate",value:function(){new u.a(this.SWiper.current,{slidesPerView:"auto"})}},{key:"FetchContentData",value:function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.props.getContentData();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()}]),t}(o.PureComponent),j=Object(E.b)((function(e){return{ContentList:e.maincontent.ContentList}}),(function(e){return{getContentData:function(){var t=Object(v.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(b.b)(),t.next=3,e(a);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getMoreContentData:function(){var t=Object(b.c)();e(t)}}}))(g);a(151);a.d(t,"default",(function(){return y}));var y=function(e){function t(e){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).call(this,e))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"main"},l.a.createElement(m,{props:this.props}),l.a.createElement("div",{className:"content",ref:function(t){e.scroll=t}},l.a.createElement("div",{className:"wrap"},l.a.createElement(h,null),l.a.createElement(j,{props:this.props}))))}},{key:"componentDidMount",value:function(){var e=this;this.SCroll=new window.IScroll(this.scroll,{probeType:3,scrollY:!0}),this.SCroll.on("beforeScrollStart",(function(){e.SCroll.refresh()}))}}]),t}(o.Component)}}]);
//# sourceMappingURL=6.779bc04f.chunk.js.map