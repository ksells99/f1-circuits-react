(this["webpackJsonpf1-app"]=this["webpackJsonpf1-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(39)},,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){var n={"./1.png":17,"./10.png":18,"./11.png":19,"./12.png":20,"./13.png":21,"./14.png":22,"./15.png":23,"./16.png":24,"./17.png":25,"./18.png":26,"./19.png":27,"./2.png":28,"./20.png":29,"./21.png":30,"./22.png":31,"./3.png":32,"./4.png":33,"./5.png":34,"./6.png":35,"./7.png":36,"./8.png":37,"./9.png":38};function c(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id=16},function(e,t,a){e.exports=a.p+"static/media/1.46894607.png"},function(e,t,a){e.exports=a.p+"static/media/10.f14af202.png"},function(e,t,a){e.exports=a.p+"static/media/11.866c0cfa.png"},function(e,t,a){e.exports=a.p+"static/media/12.966da757.png"},function(e,t,a){e.exports=a.p+"static/media/13.84b97842.png"},function(e,t,a){e.exports=a.p+"static/media/14.c10b9a74.png"},function(e,t,a){e.exports=a.p+"static/media/15.65f2abaa.png"},function(e,t,a){e.exports=a.p+"static/media/16.eb355d70.png"},function(e,t,a){e.exports=a.p+"static/media/17.87082ff3.png"},function(e,t,a){e.exports=a.p+"static/media/18.5975b0cc.png"},function(e,t,a){e.exports=a.p+"static/media/19.c8dbb2c8.png"},function(e,t,a){e.exports=a.p+"static/media/2.d48c09ae.png"},function(e,t,a){e.exports=a.p+"static/media/20.6e0db014.png"},function(e,t,a){e.exports=a.p+"static/media/21.5597964a.png"},function(e,t,a){e.exports=a.p+"static/media/22.cd53b75b.png"},function(e,t,a){e.exports=a.p+"static/media/3.e5e92659.png"},function(e,t,a){e.exports=a.p+"static/media/4.97718961.png"},function(e,t,a){e.exports=a.p+"static/media/5.39cb4ea4.png"},function(e,t,a){e.exports=a.p+"static/media/6.bc1d468a.png"},function(e,t,a){e.exports=a.p+"static/media/7.ee438d52.png"},function(e,t,a){e.exports=a.p+"static/media/8.4d0efab5.png"},function(e,t,a){e.exports=a.p+"static/media/9.0d31f88d.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(4),i=a.n(o),r=(a(11),a(12),a(13),a(1)),p=a.n(r),s=a(5),l=a(2),u=(a(15),function(e){var t=e.round,n=e.title,o=e.track,i=e.date;return c.a.createElement("div",null,c.a.createElement("h1",{className:"mt-3 display-4"},"Round ",t),c.a.createElement("h1",null,c.a.createElement("b",null,n)),c.a.createElement("p",null,c.a.createElement("i",null,o)),c.a.createElement("p",null,i),c.a.createElement("img",{src:a(16)("./".concat(t,".png")),alt:"Round ".concat(t)}))}),m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)("1"),r=Object(l.a)(i,2),m=r[0],f=r[1];Object(n.useEffect)((function(){d()}),[m]);var d=function(){var e=Object(s.a)(p.a.mark((function e(){var t,a,n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/2020/".concat(m,".json"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=Object.values(a.MRData.RaceTable),c=Object.values(n[2]),o(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"mt-4"},c.a.createElement("i",{className:"fa fa-flag-checkered mr-3"}),"2020 F1 Circuits"),c.a.createElement("p",{className:"pl-2 pr-2"},"F1 circuit list for the 2020 season, built using React.js."),c.a.createElement("form",{className:"search-form mt-4"},c.a.createElement("select",{className:"search-bar custom-select",value:m,onChange:function(e){f(e.target.value)}},c.a.createElement("option",{value:"1"},"Australia"),c.a.createElement("option",{value:"2"},"Bahrain"),c.a.createElement("option",{value:"3"},"Vietnam"),c.a.createElement("option",{value:"4"},"China (*Postponed)"),c.a.createElement("option",{value:"5"},"Netherlands"),c.a.createElement("option",{value:"6"},"Spain"),c.a.createElement("option",{value:"7"},"Monaco"),c.a.createElement("option",{value:"8"},"Azerbaijan"),c.a.createElement("option",{value:"9"},"Canada"),c.a.createElement("option",{value:"10"},"France"),c.a.createElement("option",{value:"11"},"Austria"),c.a.createElement("option",{value:"12"},"Britain"),c.a.createElement("option",{value:"13"},"Hungary"),c.a.createElement("option",{value:"14"},"Belgium"),c.a.createElement("option",{value:"15"},"Italy"),c.a.createElement("option",{value:"16"},"Singapore"),c.a.createElement("option",{value:"17"},"Russia"),c.a.createElement("option",{value:"18"},"Japan"),c.a.createElement("option",{value:"19"},"USA"),c.a.createElement("option",{value:"20"},"Mexico"),c.a.createElement("option",{value:"21"},"Brazil"),c.a.createElement("option",{value:"22"},"Abu Dhabi"))),c.a.createElement("div",{className:"circuits"},a.map((function(e){return c.a.createElement(u,{round:e.round,title:e.raceName,track:e.Circuit.circuitName,date:e.date,key:e.round})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.6bdf9c6b.chunk.js.map