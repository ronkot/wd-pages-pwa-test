parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"9FPA":[function(require,module,exports) {
module.exports="wd-pages-pwa-test/redbull-hero-thumb.8e5356ee.jpg";
},{}],"xtL0":[function(require,module,exports) {
module.exports="wd-pages-pwa-test/redbull-hero.097c2124.png";
},{}],"RBa5":[function(require,module,exports) {
module.exports="wd-pages-pwa-test/redbull-mockup-thumb.a8fdfdff.jpg";
},{}],"7mqs":[function(require,module,exports) {
module.exports="wd-pages-pwa-test/redbull-mockup.cef6b22b.png";
},{}],"PTK7":[function(require,module,exports) {
module.exports="wd-pages-pwa-test/redbull-photo1-thumb.f6ab7faf.jpg";
},{}],"PD2z":[function(require,module,exports) {
module.exports="wd-pages-pwa-test/redbull-photo1.f1a34cd7.png";
},{}],"UL5c":[function(require,module,exports) {
module.exports="wd-pages-pwa-test/redbull-photo2-thumb.326b820f.jpg";
},{}],"l++h":[function(require,module,exports) {
module.exports="wd-pages-pwa-test/redbull-photo2.370d3387.png";
},{}],"rdyv":[function(require,module,exports) {
module.exports="wd-pages-pwa-test/redbull-summary.6cbfd0da.svg";
},{}],"lrbe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=k(require("react")),t=v(require("react-helmet")),a=v(require("../../../components/CssVars")),l=v(require("../../../components/MainTitle")),n=v(require("../../../components/SubTitle")),r=v(require("../../../components/Keywords")),u=v(require("../../../components/Image")),i=v(require("../../../components/Chapter")),o=v(require("../../../components/Summary")),d=v(require("../../../components/DatLine")),s=v(require("./redbull-hero-thumb.jpg")),c=v(require("./redbull-hero.png")),h=v(require("./redbull-mockup-thumb.jpg")),f=v(require("./redbull-mockup.png")),m=v(require("./redbull-photo1-thumb.jpg")),p=v(require("./redbull-photo1.png")),g=v(require("./redbull-photo2-thumb.jpg")),w=v(require("./redbull-photo2.png")),b=v(require("./redbull-summary.svg"));function v(e){return e&&e.__esModule?e:{default:e}}function k(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};l.get||l.set?Object.defineProperty(t,a,l):t[a]=e[a]}return t.default=e,t}var E=function(){return e.default.createElement(e.Fragment,null,e.default.createElement(a.default,null,{"--color-accent":"#f8f8f8","--color-text-on-accent":"#000"}),e.default.createElement(l.default,null,"Red Bull"),e.default.createElement(n.default,{useAsMetaTitle:!0},"A marketing campaign game in two weeks? Game on."),e.default.createElement(d.default,null),e.default.createElement(r.default,null,"UI design, UX design, game design, full-stack development"),e.default.createElement(u.default,{thumbSrc:s.default,src:c.default,alt:"Redbull hero"}),e.default.createElement(i.default,null,e.default.createElement("h4",null,"Setting the scene"),e.default.createElement("p",null,"Picture this: it’s winter 2016 and Red Bull Crashed Ice, an extreme winter sport world tour, is about to kick off for its seventh year – and it’s bigger and better than ever. The event is ice cross downhill, the fastest sport on skates, sending athletes on a high-octane trip on a steep downhill track that takes in hairpin twists and turns, high drops, and hair-raising gaps, all at speeds of up to 80 km/h.")),e.default.createElement(u.default,{thumbSrc:m.default,src:p.default,alt:"Red Bull race pic"}),e.default.createElement(i.default,null,e.default.createElement("h4",null,"The bright idea"),e.default.createElement("p",null,"What if there was an engaging online game that shared the buzz of downhill skating and info on the event?"),e.default.createElement("p",null,"Some great video material could be used to really showcase the sport, engaging the audience with interesting questions related to its (literal) twists and turns. To top it all off, the whole campaign could be promoted on Red Bull cans before the event – with one lucky player winning an exciting prize!")),e.default.createElement(i.default,null,e.default.createElement("h4",null,"The inevitable challenge"),e.default.createElement("p",null,"The event was starting soon so the game needed to be up and running in 'just a few weeks and available to consumers across a full range of devices. It goes without saying that visuals are everything in this kind of marketing, so as well as being fun to play the game needed to dovetail perfectly with Red Bull’s iconic brand – but with a topping of cool Crashed Ice.")),e.default.createElement(u.default,{thumbSrc:h.default,src:f.default,alt:"Red Bull mockup photo"}),e.default.createElement(i.default,null,e.default.createElement("h4",null,"Our quick-thinking solution"),e.default.createElement("p",null,"We built a task force of three team players: one focused on design, one on development, and one on simply getting it done. Everyone knew our tight constraints and the project priorities: namely creating an unforgettable consumer experience. With time most definitely not on our side, it was crucial that the team worked as closely with the customer as possible, so we packed up our computers and decamped to the Red Bull office for two weeks."),e.default.createElement("p",null,"For those two weeks, iterations were run on a daily basis. The plan was to get the first version up and running fast, and then continuously improve it until the deadline. It wasn’t always plain sailing, but in collaboration with the Red Bull team all the challenges faced were tackled and solved in high spirits. And when some special technical competence was needed, the team could count on invaluable help from other colleagues at Wunderdog.")),e.default.createElement(i.default,null,e.default.createElement("h4",null,"So how did it go?"),e.default.createElement("p",null,"The game was launched for the 2017 Crashed Ice event in Finland, with customer activation on Red Bull cans. There were some amazing players who reached crazy high scores after repeated attempts, and in the end the lucky winner was picked from several hundred high scores submitted."),e.default.createElement("p",null,"From a technology perspective the game worked well, especially considering the difficult technical challenge of using videos and overlaid content on mobile devices.")),e.default.createElement(i.default,null,e.default.createElement("h4",null,"Success that speaks for itself"),e.default.createElement("p",null,"In just two weeks, thanks to the knowledge and experience of our team, we achieved a marketing campaign that could easily be modified for repeated use. The same technology has since been reused several times to run similar campaigns in 2017 and 2018 for Red Bull Crashed Ice in Canada, and modified further to run during the Red Bull Soapbox Car Race in 2017. Our ice-cool team delivered and then some by getting their skates on, taking on an extreme challenge, and crushing it, with a success that just keeps on repeating.")),e.default.createElement(u.default,{thumbSrc:g.default,src:w.default,alt:"Red Bull prize pic"}),e.default.createElement(o.default,null,e.default.createElement(u.default,{src:b.default,alt:""}),e.default.createElement("h4",null,"The challenge"),e.default.createElement("p",null,"Develop an engaging companion game for the Red Bull Crashed Ice extreme sport event – in just two weeks."),e.default.createElement("h4",null,"The result"),e.default.createElement("p",null,"A successful game, launched on time, which has been easily modified for repeated use in similar Red Bull campaigns.")))};exports.default=E;
},{"react":"1n8/","react-helmet":"jT85","../../../components/CssVars":"8c8v","../../../components/MainTitle":"yhea","../../../components/SubTitle":"qoDn","../../../components/Keywords":"3dnc","../../../components/Image":"cDXe","../../../components/Chapter":"2+jS","../../../components/Summary":"kow8","../../../components/DatLine":"pQA3","./redbull-hero-thumb.jpg":"9FPA","./redbull-hero.png":"xtL0","./redbull-mockup-thumb.jpg":"RBa5","./redbull-mockup.png":"7mqs","./redbull-photo1-thumb.jpg":"PTK7","./redbull-photo1.png":"PD2z","./redbull-photo2-thumb.jpg":"UL5c","./redbull-photo2.png":"l++h","./redbull-summary.svg":"rdyv"}]},{},[], null)
//# sourceMappingURL=wd-pages-pwa-test/RedBull.c199b437.map