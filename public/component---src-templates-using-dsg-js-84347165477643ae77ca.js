"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[713],{4518:function(e,t,n){var a=n(7294);t.Z=e=>a.createElement("div",{className:"pCard"},a.createElement("div",{className:"Card"},a.createElement("img",{src:e.image}),a.createElement("h3",null,e.title),a.createElement("h4",null,"S: ",e.size)))},7306:function(e,t,n){var a=n(4578),r=n(7294),l=n(1883),c=n(1198);let o=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleScroll=e=>{window.pageYOffset>50?n.setState({hasScrolled:!0}):n.setState({hasScrolled:!1})},n.state={hasScrolled:!1},n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.render=function(){return r.createElement("div",{className:this.state.hasScrolled?"Header HeaderScroll":"Header"},r.createElement("div",{className:"HeaderGroup"},r.createElement(l.rU,{to:"/"},r.createElement("img",{src:c.Z})),r.createElement(l.rU,{to:"/men"},"Home"),r.createElement(l.rU,{to:"/men"},"Men"),r.createElement(l.rU,{to:"/women"},"Women"),r.createElement(l.rU,{to:"/kids"},"Kids"),r.createElement(l.rU,{to:"/about"},"About Us"),r.createElement(l.rU,{to:"/contact"},"Contact Us")))},t}(r.Component);t.Z=o},8678:function(e,t,n){var a=n(7294),r=n(1883);n(7306),n(4518);t.Z=e=>{let{children:t}=e;(0,r.K2)("3649515864");return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("main",null,t)))}},9357:function(e,t,n){var a=n(7294),r=n(1883);t.Z=function(e){var t,n;let{description:l,title:c,children:o}=e;const{site:i}=(0,r.K2)("63159454"),m=l||i.siteMetadata.description,s=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,s?c+" | "+s:c),a.createElement("meta",{name:"description",content:m}),a.createElement("meta",{property:"og:title",content:c}),a.createElement("meta",{property:"og:description",content:m}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=i.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:c}),a.createElement("meta",{name:"twitter:description",content:m}),o)}},4808:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var a=n(7294),r=n(1883),l=n(8678),c=n(9357);const o=()=>a.createElement(c.Z,{title:"Using DSG"});t.default=()=>a.createElement(l.Z,null,a.createElement("h1",null,"Hello from a ",a.createElement("b",null,"DSG Page")),a.createElement("p",null,"This page is not created until requested by a user."),a.createElement("p",null,"To learn more, head over to our"," ",a.createElement("a",{href:"https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/"},"documentation about Deferred Static Generation"),"."),a.createElement(r.rU,{to:"/"},"Go back to the homepage"))},1198:function(e,t,n){t.Z=n.p+"static/logo-4e71fccbeb49f497b7f9241f2a0d38a0.png"}}]);
//# sourceMappingURL=component---src-templates-using-dsg-js-84347165477643ae77ca.js.map