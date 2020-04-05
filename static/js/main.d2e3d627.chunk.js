(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{190:function(e,t,a){e.exports=a(395)},388:function(e,t,a){},389:function(e,t,a){},390:function(e,t,a){},391:function(e,t,a){},392:function(e,t,a){},395:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(58),i=a.n(c),o=a(161),s=a(23);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(8),u=a(40),m=a(63),d=a(19),h=a(20),v=a(11),f=a(21),p=a(22),b=a(27),y=a.n(b),S=a(148),E=a.n(S),k=a(91),g=a.n(k),C=a(149),O=a.n(C),N=a(13),j=a(94),w=a.n(j),V=w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(t,"t0",2);case 2:e.next=0;break;case 4:case"end":return e.stop()}}),e)})),D=(a(388),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={},e}return Object(h.a)(a,[{key:"getColors",value:function(){var e=this.props,t=e.colors,a=e.data,n=e.keys,r=a[a.length-1],c=V(Array.from(t)),i={};return n.sort((function(e,t){return Number(r[e])-Number(r[t])})).forEach((function(e){return i[e]=c.next().value})),i}},{key:"getMaxValue",value:function(e){var t=0;return e.forEach((function(e){Object.entries(e).forEach((function(e){var a=Object(l.a)(e,2),n=a[0],r=a[1];if("timestamp"!==n){var c=Number(r);c>t&&(t=c)}}))})),t}},{key:"onDotEnter",value:function(e){this.setState({activePoint:e})}},{key:"onDotLeave",value:function(){this.setState({activePoint:null})}},{key:"getTooltip",value:function(){var e=this.state.activePoint;return e?r.a.createElement(N.f,{content:function(){return r.a.createElement("div",{className:"MyLineChart--custom-tooltip"},r.a.createElement("div",{style:{paddingBottom:"4px"}},e.payload.timestamp),r.a.createElement("span",{style:{color:e.fill}},e.dataKey,": ",e.value))}}):r.a.createElement(N.f,{isAnimationActive:!0,itemSorter:function(e){return-1*Number(e.payload[e.name])}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.keys,c=this.getColors();return r.a.createElement("div",{className:"MyLineChart"},r.a.createElement(N.e,null,r.a.createElement(N.d,{data:a,margin:{top:5,right:20,left:10,bottom:5}},r.a.createElement(N.b,{wrapperStyle:{paddingBottom:"10px"},verticalAlign:"top"}),r.a.createElement(N.a,{stroke:"#f5f5f5"}),r.a.createElement(N.g,{dataKey:"timestamp"}),r.a.createElement(N.h,{domain:["log"===this.props.scale?"auto":0,this.getMaxValue(a)],scale:this.props.scale}),this.getTooltip(),n.map((function(t,a){return r.a.createElement(N.c,{activeDot:{onMouseOver:e.onDotEnter.bind(e),onMouseOut:e.onDotLeave.bind(e)},dataKey:t,dot:!1,key:t,stroke:c[t],strokeWidth:2,type:"monotone"})})))))}}]),a}(r.a.Component));D.defaultProps={colors:["red","orange","green","blue","purple","violet","#3b3b3b"]};var _=a(59),x=(a(389),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;Object(d.a)(this,a),n=t.call(this,e);var r={visible:!1,activeTab:"countries"};return e.options.forEach((function(e){return r[e.key]=!1})),e.selectedValues.forEach((function(e){return r[e]=!0})),n.state=r,n.onClickTab=n.onClickTab.bind(Object(v.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(v.a)(n)),n.onSubmit=n.onSubmit.bind(Object(v.a)(n)),n.clearSelections=n.clearSelections.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault();var t=!this.state.visible;if(!t){var a=Object.entries(this.state).filter((function(e){var t=Object(l.a)(e,2),a=t[0];return t[1]&&"visible"!==a&&"activeTab"!==a})).map((function(e){var t=Object(l.a)(e,2),a=t[0];t[1];return a}));this.props.onSubmit(a)}this.setState({visible:t})}},{key:"clearSelections",value:function(){var e={};this.props.options.forEach((function(t){return e[t.key]=!1})),this.setState(e)}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.checked;this.setState(Object(_.a)({},a,n))}},{key:"onClickTab",value:function(e){this.setState({activeTab:e.target.dataset.name})}},{key:"getOptionsByName",value:function(e){var t={countries:[],states:[],counties:[]};return e.sort((function(e,t){return e.key.localeCompare(t.key)})).forEach((function(e){var a=e.key;if(a)if("US"!==a&&a.startsWith("US")){var n=a.split(" - ").length;2===n?t.states.push(e):3===n&&t.counties.push(e)}else t.countries.push(e)})),t}},{key:"render",value:function(){var e=this,t=this.props,a=t.heading,n=t.options,c=this.state,i=c.activeTab,o=c.visible,s=o?"":"CheckSheet--hidden",u=this.getOptionsByName(n);return r.a.createElement("div",{className:"CheckSheet"},r.a.createElement("div",{className:"clearfix"},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"CheckSheet-heading"},a)),r.a.createElement("div",{className:"right"},r.a.createElement("button",{onClick:this.onSubmit},o?"Update":"Select Locations"),o?r.a.createElement("button",{className:"clear-button",onClick:this.clearSelections},"Clear selections"):null)),r.a.createElement("div",{className:s},r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"CheckSheet-tab-bar"},[["countries","Countries / Provinces"],["states","U.S. States / Territories"],["counties","U.S. Counties"]].map((function(t){var a=Object(l.a)(t,2),n=a[0],c=a[1];return r.a.createElement("span",{className:"\n                      CheckSheet-tab\n                      ".concat(n===i?"CheckSheet-tab--active":"","\n                    "),"data-name":n,onClick:e.onClickTab,key:"CheckSheet-tab-".concat(n)},c)})))),r.a.createElement("div",{className:"\n            CheckSheet-sheet-container\n            ".concat("counties"===i?"CheckSheet--two-cols":"","\n          ")},["countries","states","counties"].map((function(t){return r.a.createElement("div",{className:"\n                    CheckSheet-sheet\n                    ".concat(t===i?"":"CheckSheet--hidden","\n                  "),key:"CheckSheet-sheet-".concat(t)},u[t].map((function(t){return r.a.createElement("label",{key:t.key},r.a.createElement("input",{checked:e.state[t.key],name:t.key,onChange:e.handleInputChange,type:"checkbox"}),t.key)})))})))))}}]),a}(r.a.Component)),A=(a(390),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={locationSelectedValues:e.locationSelectedValues,periodSelectedValue:e.periodSelectedValue,scaleSelectedValue:e.scaleSelectedValue},n.onSubmit=n.onSubmit.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"makeOptions",value:function(e){return e.map((function(e){return{key:e}}))}},{key:"makePeriodOption",value:function(e){var t="All time";return 0!==e&&(t="Last ".concat(e," days")),{key:t,value:e}}},{key:"render",value:function(){var e=this,t=[3,7,10,14,21,30,60,0].map(this.makePeriodOption),a=this.makeOptions(this.props.keys),n=this.makeOptions(["log","linear"]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"clearfix"},r.a.createElement("div",{className:"left"},r.a.createElement("span",null,"Period")),r.a.createElement("div",{className:"period-selector right"},r.a.createElement("select",{onChange:function(t){return e.onPeriodChange(t)},value:this.state.periodSelectedValue},t.map((function(e){return r.a.createElement("option",{key:e.key,value:e.value},e.key)})))))),r.a.createElement("div",null,r.a.createElement("div",{className:"clearfix"},r.a.createElement("div",{className:"left"},r.a.createElement("span",null,"Scale")),r.a.createElement("div",{className:"scale-selector right"},n.map((function(t){return r.a.createElement("label",{key:t.key},r.a.createElement("input",{checked:t.key===e.state.scaleSelectedValue,name:"scale",value:t.key,onChange:function(t){return e.onScaleChange(t)},type:"radio"}),t.key)}))))),r.a.createElement("div",{className:"location-selector"},r.a.createElement(x,{heading:"Country / State",options:a,onSubmit:function(t){return e.onLocationChange(t)},selectedValues:this.props.locationSelectedValues})))}},{key:"onLocationChange",value:function(e){this.setState({locationSelectedValues:e},this.onSubmit)}},{key:"onPeriodChange",value:function(e){this.setState({periodSelectedValue:Number(e.target.value)},this.onSubmit)}},{key:"onScaleChange",value:function(e){this.setState({scaleSelectedValue:e.target.value},this.onSubmit)}},{key:"onSubmit",value:function(){this.props.onSubmit({scale:this.state.scaleSelectedValue,period:this.state.periodSelectedValue,selectedLocations:this.state.locationSelectedValues})}}]),a}(r.a.Component)),L=(a(391),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={confirmed:{header:null,rows:[],data:[]},deaths:{header:null,rows:[],data:[]},allLocations:[],selectedLocations:["Italy","Spain","France","US","China - Hubei"],period:0,scale:"log",loading:!0},e.onSubmit=e.onSubmit.bind(Object(v.a)(e)),e}return Object(h.a)(a,[{key:"getDeserializedState",value:function(e){var t=decodeURIComponent(e.location.search).replace(/--/g," - ").replace(/_/g," ");if(t){var a={},n=g.a.parse(t,{parseNumbers:!0,arrayFormat:"separator",arrayFormatSeparator:"|"}),r=n.period,c=n.scale,i=n.locations;return void 0!==r&&(a.period=r),void 0!==c&&(a.scale=c),a.selectedLocations=void 0!==i?"string"===typeof i?[i]:i:[],a}}},{key:"getSerializedState",value:function(e){var t=e.selectedLocations.map((function(e){return e.replace(/ - /g,"--").replace(/ /g,"_")}));return"?"+encodeURIComponent(g.a.stringify({period:e.period,scale:e.scale,locations:t},{arrayFormat:"separator",arrayFormatSeparator:"|"}))}},{key:"componentDidMount",value:function(){var e=this,t=this.getDeserializedState(this.props)||{};Promise.all([window.fetch("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv").then((function(e){return e.text()})).then((function(e){return T(e)})).then((function(e){return U(e)})),window.fetch("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv").then((function(e){return e.text()})).then((function(e){return T(e)})).then((function(e){return U(e)})),window.fetch("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv").then((function(e){return e.text()})).then((function(e){return T(e)})).then((function(e){return M(e)})),window.fetch("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv").then((function(e){return e.text()})).then((function(e){return T(e)})).then((function(e){return M(e,!0)}))]).then(P).then((function(a){return e.setState(Object.assign(a,t),(function(){return e.navigate(e.state)}))}))}},{key:"componentWillReceiveProps",value:function(e){var t=this.getDeserializedState(e);this.updateState(t)}},{key:"updateState",value:function(e){var t=Object(m.a)({},this.state,{},e,{},{loading:!1}),a=t.period,n=t.selectedLocations;["deaths","confirmed"].forEach((function(e){var r=t[e],c=r.header,i=r.rows,o=0;0!==a&&(o=c.length-a);var s=c.slice(o).map((function(e,t){var a={timestamp:e};return n.forEach((function(e){a[e]=i[e][o+t]})),a}));t[e]={data:s,header:c,rows:i}})),this.setState(t)}},{key:"onSubmit",value:function(e){this.navigate(e)}},{key:"navigate",value:function(e){this.props.history.push(this.getSerializedState(e))}},{key:"render",value:function(){var e=this.state,t=e.confirmed,a=e.deaths,n=e.allLocations,c=e.selectedLocations,i=e.period,o=e.scale;return e.loading?null:r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"App-Header"},"The Coronavirus Curve"),r.a.createElement("div",{className:"App-Form"},r.a.createElement(A,{periodSelectedValue:i,locationSelectedValues:c,scaleSelectedValue:o,keys:n,onSubmit:this.onSubmit})),r.a.createElement("h2",{className:"App-Header"},"Deaths"),r.a.createElement("div",{className:"App-Chart-container"},r.a.createElement("div",null,r.a.createElement(D,{data:a.data,keys:c,scale:o}))),r.a.createElement("div",{className:"spacer"}),r.a.createElement("h2",{className:"App-Header"},"Confirmed Cases"),r.a.createElement("div",{className:"App-Chart-container"},r.a.createElement("div",null,r.a.createElement(D,{data:t.data,keys:c,scale:o}))),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"about"},r.a.createElement("div",null,"Data: "),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/CSSEGISandData/COVID-19"},"Johns Hopkins CSSE")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/nytimes/covid-19-data"},"The New York Times")," (View the NYT data on their ",r.a.createElement("a",{href:"https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html"},"interactive tracking page"),")")),r.a.createElement("div",{className:"spacer"}),r.a.createElement("h2",{className:"App-Header"},"Understanding the Data"),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"center video-wrapper"},r.a.createElement("div",{className:"center video-container"},r.a.createElement("iframe",{src:"https://www.youtube.com/embed/Kas0tIxDvrg",frameBorder:"0",title:"Understanding the data",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"about"},"Credit: ",r.a.createElement("a",{href:"https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw"},"3Blue1Brown")),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"footer"})))}}]),a}(r.a.Component));function I(e,t,a){return e&&t&&a?"".concat(e," - ").concat(t," - ").concat(a):e&&t?"".concat(e," - ").concat(t):e||(t||"")}function T(e){return E.a.parse(e).data}function U(e){var t,a={},n=e[0],r=e.slice(1),c=n.slice(4),i=Object(u.a)(r);try{for(i.s();!(t=i.n()).done;){var o=t.value;a[I(o[1],o[0])]=o.slice(4)}}catch(s){i.e(s)}finally{i.f()}return{timestamps:c,data:a}}function M(e){var t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r={},c=e.slice(1),i=a?4:3,o=a?5:4,s=a?function(e){return I("US",e[2],e[1])}:function(e){return I("US",e[1])},l=new Set,m=new Set,d=Object(u.a)(c);try{for(d.s();!(t=d.n()).done;){var h=t.value,v=y()(h[0],"YYYY-MM-DD").format("M/DD/YY");l.add(v),h[0]=v;var f=s(h);m.add(f),h[1]=f}}catch(V){d.e(V)}finally{d.f()}var p,b=Array.from(l).sort((function(e,t){return e.localeCompare(t)})),S=Object(u.a)(m);try{for(S.s();!(p=S.n()).done;){var E=p.value;n[E]=Array.from({length:b.length},(function(e){return""})),r[E]=Array.from({length:b.length},(function(e){return""}))}}catch(V){S.e(V)}finally{S.f()}var k={};b.forEach((function(e,t){return k[e]=t}));var g,C=Object(u.a)(c);try{for(C.s();!(g=C.n()).done;){var O=g.value,N=O[0],j=O[1],w=k[N];r[j][w]=O[i],n[j][w]=O[o]}}catch(V){C.e(V)}finally{C.f()}return{timestamps:b,deaths:n,confirmed:r}}function P(e){var t,a=Object(l.a)(e,4),n=a[0],r=a[1],c=a[2],i=a[3],o=e.map((function(e){var t=e.timestamps;return[t[0],t[t.length-1]]})).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return[y()(a),y()(n)]})),s=o.reduce((function(e,t){var a=Object(l.a)(e,2),n=a[0],r=a[1],c=Object(l.a)(t,2),i=c[0],o=c[1];return[y.a.max(n,i),y.a.max(r,o)]})),d=Object(l.a)(s,2),h=d[0],v=d[1],f=o.map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return[h.diff(a,"days"),v.diff(n,"days")]})),p=Object(u.a)(O()(e,f));try{var b=function(){for(var e=Object(l.a)(t.value,2),a=e[0],n=a.timestamps,r=a.deaths,c=a.confirmed,i=Object(l.a)(e[1],2),o=i[0],s=i[1],u=0;u<o;u++)n.shift();[r,c].filter((function(e){return e})).forEach((function(e){return Object.values(e).forEach((function(e){for(var t=0;t<o;t++)e.shift()}))}));for(var m=y()(n[n.length-1]),d=0;d<o;d++)n.push(m.add(1,"days").format("M/DD/YY"));[r,c].filter((function(e){return e})).forEach((function(e){return Object.values(e).forEach((function(e){for(var t=0;t<s;t++)e.push(void 0)}))}))};for(p.s();!(t=p.n()).done;)b()}catch(g){p.e(g)}finally{p.f()}var S=e[0].timestamps,E=Object(m.a)({},n.data,{},c.deaths,{},i.deaths),k=Object(m.a)({},r.data,{},c.confirmed,{},i.confirmed);return{allLocations:Object.keys(E),deaths:{rows:E,header:S,data:[]},confirmed:{rows:k,header:S,data:[]}}}a(392);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:L}),r.a.createElement(s.a,{to:"/"})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[190,1,2]]]);
//# sourceMappingURL=main.d2e3d627.chunk.js.map