"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[476],{4518:function(e,t,r){var n=r(7294);t.Z=e=>n.createElement("div",{className:"pCard"},n.createElement("div",{className:"Card"},n.createElement("img",{src:e.image}),n.createElement("h3",null,e.title),n.createElement("h4",null,"S: ",e.size)))},7306:function(e,t,r){var n=r(4578),a=r(7294),l=r(1883),o=r(1198);let c=function(e){function t(t){var r;return(r=e.call(this,t)||this).handleScroll=e=>{window.pageYOffset>50?r.setState({hasScrolled:!0}):r.setState({hasScrolled:!1})},r.state={hasScrolled:!1},r}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},r.render=function(){return a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScroll":"Header"},a.createElement("div",{className:"HeaderGroup"},a.createElement(l.rU,{to:"/"},a.createElement("img",{src:o.Z})),a.createElement(l.rU,{to:"/men"},"Home"),a.createElement(l.rU,{to:"/men"},"Men"),a.createElement(l.rU,{to:"/women"},"Women"),a.createElement(l.rU,{to:"/kids"},"Kids"),a.createElement(l.rU,{to:"/about"},"About Us"),a.createElement(l.rU,{to:"/contact"},"Contact Us")))},t}(a.Component);t.Z=c},8678:function(e,t,r){var n=r(7294),a=r(1883);r(7306),r(4518);t.Z=e=>{let{children:t}=e;(0,a.K2)("3649515864");return n.createElement(n.Fragment,null,n.createElement("div",null,n.createElement("main",null,t)))}},9357:function(e,t,r){var n=r(7294),a=r(1883);t.Z=function(e){var t,r;let{description:l,title:o,children:c}=e;const{site:i}=(0,a.K2)("63159454"),m=l||i.siteMetadata.description,s=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,s?o+" | "+s:o),n.createElement("meta",{name:"description",content:m}),n.createElement("meta",{property:"og:title",content:o}),n.createElement("meta",{property:"og:description",content:m}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(r=i.siteMetadata)||void 0===r?void 0:r.author)||""}),n.createElement("meta",{name:"twitter:title",content:o}),n.createElement("meta",{name:"twitter:description",content:m}),c)}},9698:function(e,t,r){r.r(t),r.d(t,{Head:function(){return c}});var n=r(7294),a=r(1883),l=r(8678),o=r(9357);const c=()=>n.createElement(o.Z,{title:"Using SSR"});t.default=e=>{let{serverData:t}=e;return n.createElement(l.Z,null,n.createElement("h1",null,"This page is ",n.createElement("b",null,"rendered server-side")),n.createElement("p",null,"This page is rendered server side every time the page is requested. Reload it to see a(nother) random photo from"," ",n.createElement("code",null,"dog.ceo/api/breed/shiba/images/random"),":"),n.createElement("img",{style:{width:"320px",borderRadius:"var(--border-radius)"},alt:"A random dog",src:t.message}),n.createElement("p",null,"To learn more, head over to our"," ",n.createElement("a",{href:"https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/"},"documentation about Server Side Rendering"),"."),n.createElement(a.rU,{to:"/"},"Go back to the homepage"))}},1198:function(e,t,r){t.Z=r.p+"static/logo-4e71fccbeb49f497b7f9241f2a0d38a0.png"}}]);
//# sourceMappingURL=component---src-pages-using-ssr-js-f728668bc73dcbee6180.js.map