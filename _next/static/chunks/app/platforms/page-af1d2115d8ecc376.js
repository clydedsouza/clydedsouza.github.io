(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85,444],{115:function(e,t,n){Promise.resolve().then(n.bind(n,489)),Promise.resolve().then(n.bind(n,3507))},3055:function(e,t,n){"use strict";n.d(t,{FN:function(){return a},Gx:function(){return s},VI:function(){return c},lO:function(){return l}});var r=n(4681),i=n.n(r);n(6188);let a=()=>{try{i().init("6c905af7861c30571d76bbc6d67696ef",{debug:!0,track_pageview:!0,ignore_dnt:!0,persistence:"localStorage"})}catch(e){}},c=e=>{try{i().track("Page view",{page:e})}catch(e){}},s=e=>{try{i().track("Link clicked",{destination_url:e.link,link_type:e.type,page_location:e.location})}catch(e){}},l=e=>{try{i().track("Navigation clicked",{page:e})}catch(e){}}},8329:function(e,t,n){"use strict";n.d(t,{O:function(){return o}});let r=new Map;var i=n(2074),a=n(8472);let c="https://api.clydedsouza.net/",s=e=>{switch(e){case i.c.Cta:return"".concat(c,"cta.json");case i.c.Highlights:return"".concat(c,"highlights.json");case i.c.Platforms:return"".concat(c,"platforms.json");case i.c.Portfolio:default:return"".concat(c,"portfolio.json")}},l=async e=>{let t=s(e);return a.Z.get(t).then(e=>e.data).catch(e=>{throw Error("API error",e)})},o=async e=>{if(!r.has(e)){let t=await l(e).catch(t=>(r.delete(e),Promise.reject(t)));r.set(e,t)}return r.get(e)||Promise.resolve({app:{},data:[]})}},6188:function(e,t,n){"use strict";var r,i;n.d(t,{H:function(){return a},y:function(){return r}});let a="6c905af7861c30571d76bbc6d67696ef";(i=r||(r={})).Cta="Cta",i.SocialIcons="Social icons",i.CardGitHub="GitHub",i.CardWebsite="Website",i.GeneralWebsite="External website"},489:function(e,t,n){"use strict";n.d(t,{PageViewAnalytics:function(){return c}});var r=n(7437),i=n(3055),a=n(2265);let c=e=>{let{page:t}=e;return(0,a.useEffect)(()=>{(0,i.VI)(t)},[]),(0,r.jsx)(r.Fragment,{})}},3507:function(e,t,n){"use strict";n.d(t,{default:function(){return m}});var r=n(7437),i=n(2265),a=n(8329),c=n(4598),s=n(5202);n(2559);var l=n(3055),o=n(6188),u=n(2146),d=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"globe-svg",children:(0,r.jsx)("path",{d:"M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"})})})};n(9795);var f=function(e){return e.website||e.github?(0,r.jsxs)("div",{className:"card-links",children:[e.website&&(0,r.jsx)("a",{href:e.website,target:"_blank",rel:"noreferrer",onClick:()=>(0,l.Gx)({link:e.website,type:o.y.CardWebsite}),children:(0,r.jsx)(d,{})}),e.github&&(0,r.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",onClick:()=>(0,l.Gx)({link:e.github,type:o.y.CardGitHub}),children:(0,r.jsx)(u.Z,{})})]}):(0,r.jsx)(r.Fragment,{})};n(4281);var h=function(e){return!e.madeUsing||e.madeUsing.length<1?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("div",{className:"made-using",children:e.madeUsing&&e.madeUsing.map(e=>(0,r.jsx)("span",{children:e},e))})},g=function(e){return(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{style:{backgroundImage:"url(".concat(e.image,'), url("https://files.clydedsouza.net/site/project-placeholder.png")')},"aria-label":e.imageDescription,children:e.category?(0,r.jsx)("span",{children:e.category}):(0,r.jsx)(r.Fragment,{})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:e.title}),(0,r.jsx)("p",{children:e.description}),(0,r.jsx)(h,{...e}),(0,r.jsx)(f,{...e})]})]})};n(1714);var m=function(e){let{pageType:t,maxCardsToBeDisplayed:n}=e,[l,o]=(0,i.useState)([]),[u,d]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{d(!0),(0,a.O)(t).then(e=>{o(e.data)}).catch(()=>{o([])}).finally(()=>{d(!1)})},[t]),(0,r.jsx)(r.Fragment,{children:u?(0,r.jsx)(c.Z,{variant:s.k.Primary}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"cards",children:l.length>0?l.sort((e,t)=>e.date&&t.date?Number(new Date(t.date))-Number(new Date(e.date)):0).slice(0,n).map(e=>(0,i.createElement)(g,{...e,key:e.id})):(0,r.jsx)("p",{children:"Couldn‘t load the data at this stage"})})})})}},2146:function(e,t,n){"use strict";var r=n(7437);t.Z=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",className:"github-svg",children:(0,r.jsx)("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})})}},4598:function(e,t,n){"use strict";var r=n(7437);n(6576),t.Z=function(e){let{variant:t}=e;return(0,r.jsx)("div",{className:"loading-icon",role:"progressbar","aria-label":"Contents are loading...",children:(0,r.jsxs)("svg",{width:"120",height:"30",viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:t&&"primary"===t?"#009688":"#fff",children:[(0,r.jsxs)("circle",{cx:"15",cy:"15",r:"15",children:[(0,r.jsx)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),(0,r.jsxs)("circle",{cx:"60",cy:"15",r:"9",fillOpacity:"0.3",children:[(0,r.jsx)("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),(0,r.jsxs)("circle",{cx:"105",cy:"15",r:"15",children:[(0,r.jsx)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})})}},5202:function(e,t,n){"use strict";var r,i;n.d(t,{k:function(){return r}}),(i=r||(r={})).Primary="primary",i.Inverse="inverse"},2074:function(e,t,n){"use strict";var r,i;n.d(t,{c:function(){return r}}),(i=r||(r={})).About="About",i.Portfolio="Portfolio",i.Platforms="Platforms",i.Highlights="Highlights",i.Cta="Cta"},2559:function(){},9795:function(){},4281:function(){},1714:function(){},6576:function(){}},function(e){e.O(0,[853,513,603,472,971,23,744],function(){return e(e.s=115)}),_N_E=e.O()}]);