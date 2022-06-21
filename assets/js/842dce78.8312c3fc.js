"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4493],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,w=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(w,c(c({ref:t},u),{},{components:n})):r.createElement(w,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6301:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),c=["components"],i={id:"cw20-escrow",sidebar_position:3,title:"CW20 Escrow"},s="CW20 Escrow",l={unversionedId:"cw20-escrow",id:"cw20-escrow",title:"CW20 Escrow",description:"Source code is at cw20-escrow.",source:"@site/cw-tokens/cw20-escrow.md",sourceDirName:".",slug:"/cw20-escrow",permalink:"/cw-tokens/cw20-escrow",editUrl:"https://github.com/InterWasm/docs/edit/main/cw-tokens/cw20-escrow.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"cw20-escrow",sidebar_position:3,title:"CW20 Escrow"},sidebar:"cwPlus",previous:{title:"CW20 Bonding",permalink:"/cw-tokens/cw20-bonding"},next:{title:"CW20 Merkle Airdrop",permalink:"/cw-tokens/cw20-merkle-airdrop"}},u={},p=[{value:"Token types",id:"token-types",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cw20-escrow"},"CW20 Escrow"),(0,a.kt)("p",null,"Source code is at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-tokens/tree/main/contracts/cw20-escrow"},"cw20-escrow"),"."),(0,a.kt)("p",null,"This is an escrow meta-contract that allows multiple users to create independent escrows. Each escrow has a sender,\nrecipient, and arbiter. It also has a unique id (for future calls to reference it)\nand an optional timeout."),(0,a.kt)("p",null,"The basic function is the sender creates an escrow with funds. The arbiter may at any time decide to release the funds\nto either the intended recipient or the original sender (but no one else), and if it passes with optional timeout,\nanyone can refund the locked tokens to the original sender."),(0,a.kt)("p",null,'We also add a function called "top_up", which allows anyone to add more funds to the contract at any time.'),(0,a.kt)("h2",{id:"token-types"},"Token types"),(0,a.kt)("p",null,'This contract is meant not just to be functional, but also to work as a simple example of an cw20 "Receiver". And\ndemonstrate how the same calls can be fed native tokens (via typical ',(0,a.kt)("inlineCode",{parentName:"p"},"HandleMsg")," route), or cw20 tokens (via ",(0,a.kt)("inlineCode",{parentName:"p"},"Receiver"),"\ninterface)."),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"top_up")," can be called directly (with a payload of native tokens), or from a cw20 contract using\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Receiver")," interface. This means we can load the escrow with any number of native or cw20 tokens (or a mix), allow of which get released when the arbiter decides."))}f.isMDXComponent=!0}}]);