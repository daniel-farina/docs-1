"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8774],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(k,a(a({ref:n},c),{},{components:t})):o.createElement(k,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1338:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var o=t(3117),r=t(102),i=(t(7294),t(3905)),a=["components"],p={id:"cw20-bonding",sidebar_position:3,title:"CW20 Bonding"},s="CW20 Bonding",l={unversionedId:"cw20-bonding",id:"cw20-bonding",title:"CW20 Bonding",description:"Source code is at cw20-bonding.",source:"@site/cw-tokens/cw20-bonding.md",sourceDirName:".",slug:"/cw20-bonding",permalink:"/cw-tokens/cw20-bonding",editUrl:"https://github.com/InterWasm/docs/edit/main/cw-tokens/cw20-bonding.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"cw20-bonding",sidebar_position:3,title:"CW20 Bonding"},sidebar:"cwPlus",previous:{title:"CW20 Atomic Swap",permalink:"/cw-tokens/cw20-atomic-swap"},next:{title:"CW20 Escrow",permalink:"/cw-tokens/cw20-escrow"}},c={},u=[{value:"Design",id:"design",level:2},{value:"Math",id:"math",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cw20-bonding"},"CW20 Bonding"),(0,i.kt)("p",null,"Source code is at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-tokens/tree/main/contracts/cw20-bonding"},"cw20-bonding"),"."),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("p",null,"There are two variants - accepting native tokens and accepting cw20 tokens as the ",(0,i.kt)("em",{parentName:"p"},"reserve")," token (this is the token\nthat is input to the bonding curve)."),(0,i.kt)("p",null,"Minting: When the input is sent to the contract (either via ",(0,i.kt)("inlineCode",{parentName:"p"},"HandleMsg::Buy{}"),"\nwith native tokens, or via ",(0,i.kt)("inlineCode",{parentName:"p"},"HandleMsg::Receive{}")," with cw20 tokens), those tokens remain on the contract and it issues\nit's own token to the sender's account (known as ",(0,i.kt)("em",{parentName:"p"},"supply")," token)."),(0,i.kt)("p",null,"Burning: We override the burn function to not only burn the requested tokens, but also release a proper number of the\ninput tokens to the account that burnt the custom token"),(0,i.kt)("p",null,"Curves: ",(0,i.kt)("inlineCode",{parentName:"p"},"handle")," specifies a bonding function, which is sent to parameterize\n",(0,i.kt)("inlineCode",{parentName:"p"},"handle_fn")," (which does all the work). The curve is set when compiling the contract. In fact many contracts can just\nwrap ",(0,i.kt)("inlineCode",{parentName:"p"},"cw20-bonding")," and specify the custom curve parameter."),(0,i.kt)("p",null,"Read more about ",(0,i.kt)("a",{parentName:"p",href:"https://yos.io/2018/11/10/bonding-curves/"},"bonding curve math here")),(0,i.kt)("p",null,"Note: the first version only accepts native tokens as the"),(0,i.kt)("h3",{id:"math"},"Math"),(0,i.kt)("p",null,"Given a price curve ",(0,i.kt)("inlineCode",{parentName:"p"},"f(x)")," = price of the ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"th token, we want to figure out how to buy into and sell from the bonding\ncurve. In fact we can look at the total supply issued. let ",(0,i.kt)("inlineCode",{parentName:"p"},"F(x)")," be the integral of ",(0,i.kt)("inlineCode",{parentName:"p"},"f(x)"),". We have issued\n",(0,i.kt)("inlineCode",{parentName:"p"},"x")," tokens for ",(0,i.kt)("inlineCode",{parentName:"p"},"F(x)")," sent to the contract. Or, in reverse, if we send\n",(0,i.kt)("inlineCode",{parentName:"p"},"x")," tokens to the contract, it will mint ",(0,i.kt)("inlineCode",{parentName:"p"},"F^-1(x)")," tokens."),(0,i.kt)("p",null,"From this we can create some formulas. Assume we currently have issued ",(0,i.kt)("inlineCode",{parentName:"p"},"S"),"\ntokens in exchange for ",(0,i.kt)("inlineCode",{parentName:"p"},"N = F(S)")," input tokens. If someone sends us ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," tokens, how much will we issue?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"F^-1(N+x) - F^-1(N)")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"F^-1(N+x) - S")),(0,i.kt)("p",null,"And if we sell ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," tokens, how much we will get out:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"F(S) - F(S-x)")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"N - F(S-x)")),(0,i.kt)("p",null,"Just one calculation each side. To be safe, make sure to round down and always check against ",(0,i.kt)("inlineCode",{parentName:"p"},"F(S)")," when using ",(0,i.kt)("inlineCode",{parentName:"p"},"F^-1(S)"),"\nto estimate how much should be issued. This will also safely give us how many tokens to return."),(0,i.kt)("p",null,"There is built in support for\nsafely ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/primitive.i128.html#method.checked_pow"},"raising i128 to an integer power"),". There\nis also a crate\nto ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/num-integer/0.1.43/num_integer/trait.Roots.html"},"provide nth-root of for all integers"),". With these\ntwo, we can handle most math except for logs/exponents."),(0,i.kt)("p",null,"Compare this\nto ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/7b7ff729b82ea73ea168e495d9c94cb901ae95ce/contracts/math/Power.sol"},"writing it all in solidity")),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("p",null,"Price Constant: ",(0,i.kt)("inlineCode",{parentName:"p"},"f(x) = k")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"F(x) = kx")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"F^-1(x) = x/k")),(0,i.kt)("p",null,"Price Linear: ",(0,i.kt)("inlineCode",{parentName:"p"},"f(x) = kx")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"F(x) = kx^2/2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"F^-1(x) = (2x/k)^(0.5)")),(0,i.kt)("p",null,"Price Square Root: ",(0,i.kt)("inlineCode",{parentName:"p"},"f(x) = x^0.5")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"F(x) = x^1.5/1.5")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"F^-1(x) = (1.5*x)^(2/3)")),(0,i.kt)("p",null,"We will only implement these curves to start with, and leave it to others to import this with more complex curves,"))}m.isMDXComponent=!0}}]);