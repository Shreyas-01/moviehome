(this.webpackJsonpday4=this.webpackJsonpday4||[]).push([[0],{27:function(e,t,a){e.exports=a(61)},33:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),r=a.n(c),o=(a(32),a(8)),i=a(1),m=(a(33),a(10)),u=a(11),s=a.n(u),d={headers:{"Access-Control-Allow-Origin":"*"}},E=(a(51),l.a.memo((function(e){var t=e.movie,a=Object(i.f)();return l.a.createElement("div",{className:"col-lg-4 col-md-6 m-auto p-0"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"bd-placeholder-img card-img-top cardImage"},l.a.createElement("img",{src:t.Poster,alt:"Movie poster"})),l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("h5",{className:"card-title"},t.Title),l.a.createElement("hr",null),l.a.createElement("p",{className:"card-text text-center text-uppercase"}," YEAR: ",t.Year," | CATEGORY: ",t.Type," "),l.a.createElement("button",{className:"btn detailsbtn rounded-pill",onClick:function(){a.push("/details/".concat(t.imdbID))}},"View details"))),l.a.createElement("br",null))})));a(57);function h(e){var t=e.elements||[],a=e.component;return l.a.createElement("div",{className:"row"},t.map((function(e){return t=e,l.a.createElement(a,{movie:t,key:t.imdbID});var t})))}a(58);function b(e){var t=e.value;return l.a.createElement("div",{className:"background"},l.a.createElement("div",{className:"input-group mb-3 col-4"},l.a.createElement("input",{type:"text",className:"search form-control",placeholder:"Search your movie here",value:t,onChange:function(t){return e.onChange(t.target.value)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn searchbtn btn-outline-danger",type:"button",onClick:function(){return e.onSubmit(t)}},"Search"))))}function f(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(m.a)(r,2),i=o[0],u=o[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{value:a,onChange:c,onSubmit:function(e){var t="".concat("/","omdb/search?title=").concat(e);s.a.get(t,d).then((function(e){return function(e){e&&e.data&&e.data.Search instanceof Array&&u(e.data.Search)}(e)})).catch((function(e){return console.error(e)}))}}),l.a.createElement("br",null),l.a.createElement(h,{elements:i,component:E}))}a(59);function p(){var e=Object(i.g)(),t=Object(n.useState)(),a=Object(m.a)(t,2),c=a[0],r=a[1];if(Object(n.useEffect)((function(){var t="".concat("/","omdb/imdb/").concat(e.imdbID);s.a.get(t,d).then((function(e){e&&e.data&&r(e.data)})).catch((function(e){return console.error(e)}))}),[]),console.log(c),null!=c){var o=void 0!==c.Ratings[1]?c.Ratings[1].Value:"N/A",u=void 0!==c.Ratings[2]?c.Ratings[2].Value:"N/A";return l.a.createElement("div",{className:"info col-8"},l.a.createElement("h5",{className:"text-center"},c.Title),l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,"Director(s): ",c.Director),l.a.createElement("hr",null),l.a.createElement("li",null,"Actors: ",c.Actors),l.a.createElement("hr",null),l.a.createElement("li",null,"Production: ",c.Production),l.a.createElement("hr",null),l.a.createElement("li",null,"Writer(s): ",c.Writer),l.a.createElement("hr",null),l.a.createElement("li",null,"Plot: ",c.Plot),l.a.createElement("hr",null),l.a.createElement("li",null,"Runtime: ",c.Runtime),l.a.createElement("hr",null),l.a.createElement("li",null,"Age rating: ",c.Rated),l.a.createElement("hr",null),l.a.createElement("li",null,"Ratings:"),l.a.createElement("ul",{className:"ratings"},l.a.createElement("li",null,"Metacritic: ",u),l.a.createElement("li",null,"Rotten Tomatoes: ",o),l.a.createElement("li",null,"imdb: ",c.imdbRating)),l.a.createElement("hr",null),l.a.createElement("li",null,"Awards won: ",c.Awards),l.a.createElement("hr",null),l.a.createElement("li",null,"Box-office collection: ",c.BoxOffice)))}return null}a(60);function v(){var e=Object(i.f)();return l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:" text text-center addShadow"},"Search any Movie!"),l.a.createElement("button",{type:"button",onClick:function(){e.push("/search")},className:"btn btn1 btn-lg col-2 btn-outline-success"},"Start"))}var g=function(){return l.a.createElement("div",{className:"container-fluid remove-padding"},l.a.createElement(o.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/search",component:f}),l.a.createElement(i.a,{path:"/details/:imdbID",component:p}),l.a.createElement(i.a,{path:"/",component:v}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.ca2b24da.chunk.js.map