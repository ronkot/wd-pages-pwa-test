parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"AOSy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("react")),t=l(require("../../../components/Button")),r=l(require("../../../components/TransitionLink"));function l(e){return e&&e.__esModule?e:{default:e}}function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};l.get||l.set?Object.defineProperty(t,r,l):t[r]=e[r]}return t.default=e,t}var a=function(){return e.default.createElement(e.Fragment,null,e.default.createElement("h1",null,"Open positions"),e.default.createElement("p",null,e.default.createElement(r.default,{to:"https://wunderdog.breezy.hr/p/9aa01a0d81cd-fullstack-developer-helsinki-finland"},"Full-stack developer, Helsinki"),e.default.createElement("br",null),e.default.createElement(r.default,{to:"https://wunderdog.breezy.hr/p/4512f54c796a-fullstack-developer-d-f-m--berlin--germany"},"Full-stack developer, Berlin"),e.default.createElement("br",null),e.default.createElement(r.default,{to:"https://wunderdog.breezy.hr/p/9fdd4744af8f-fullstack-developer-malm--sweden"},"Full-stack developer, Malmö"),e.default.createElement("br",null)),e.default.createElement(t.default,{to:"https://wunderdog.breezy.hr/",reversed:!0},"All Positions"))};exports.default=a;
},{"react":"1n8/","../../../components/Button":"23qF","../../../components/TransitionLink":"vtB9"}]},{},[], null)
//# sourceMappingURL=/OpenPositions2.6977e90d.map