import{s as k,n as p,c as S,u as D,g as I,d as N}from"../chunks/scheduler.DtGJeGpk.js";import{S as x,i as E,g as _,h as d,x as O,k as v,a as w,f as m,m as g,j as $,n as y,y as h,r as L,s as T,u as A,c as C,v as F,d as j,t as b,w as M}from"../chunks/index.ZrwjJIiC.js";function P(o){let e,s='<ul class="nav-links svelte-jh5pfy"><li><a href="/" class="svelte-jh5pfy">Home</a></li> <li><a href="/portfolio" class="svelte-jh5pfy">Portfolio</a></li> <li><a href="/about" class="svelte-jh5pfy">About</a></li> <li><a href="/blog" class="svelte-jh5pfy">Blog</a></li> <li><a href="/contact" class="svelte-jh5pfy">Contact</a></li> <li><a href="/landing" class="svelte-jh5pfy">Landing</a></li></ul> <button>Toggle</button>';return{c(){e=_("nav"),e.innerHTML=s,this.h()},l(n){e=d(n,"NAV",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-4lszc9"&&(e.innerHTML=s),this.h()},h(){v(e,"class","svelte-jh5pfy")},m(n,l){w(n,e,l)},p,i:p,o:p,d(n){n&&m(e)}}}class V extends x{constructor(e){super(),E(this,e,null,P,k,{})}}const q="Sturke";function z(o){let e,s,n=q+"",l,i,c=new Date().getFullYear()+"",f;return{c(){e=_("footer"),s=_("p"),l=g(n),i=g(" © "),f=g(c),this.h()},l(u){e=d(u,"FOOTER",{class:!0});var a=$(e);s=d(a,"P",{class:!0});var t=$(s);l=y(t,n),i=y(t," © "),f=y(t,c),t.forEach(m),a.forEach(m),this.h()},h(){v(s,"class","svelte-k2ae0s"),v(e,"class","svelte-k2ae0s")},m(u,a){w(u,e,a),h(e,s),h(s,l),h(s,i),h(s,f)},p,i:p,o:p,d(u){u&&m(e)}}}class B extends x{constructor(e){super(),E(this,e,null,z,k,{})}}function R(o){let e,s,n,l,i,c,f;s=new V({});const u=o[1].default,a=S(u,o,o[0],null);return c=new B({}),{c(){e=_("div"),L(s.$$.fragment),n=T(),l=_("main"),a&&a.c(),i=T(),L(c.$$.fragment),this.h()},l(t){e=d(t,"DIV",{class:!0});var r=$(e);A(s.$$.fragment,r),n=C(r),l=d(r,"MAIN",{class:!0});var H=$(l);a&&a.l(H),H.forEach(m),i=C(r),A(c.$$.fragment,r),r.forEach(m),this.h()},h(){v(l,"class","svelte-10df6r7"),v(e,"class","layout svelte-10df6r7")},m(t,r){w(t,e,r),F(s,e,null),h(e,n),h(e,l),a&&a.m(l,null),h(e,i),F(c,e,null),f=!0},p(t,[r]){a&&a.p&&(!f||r&1)&&D(a,u,t,t[0],f?N(u,t[0],r,null):I(t[0]),null)},i(t){f||(j(s.$$.fragment,t),j(a,t),j(c.$$.fragment,t),f=!0)},o(t){b(s.$$.fragment,t),b(a,t),b(c.$$.fragment,t),f=!1},d(t){t&&m(e),M(s),a&&a.d(t),M(c)}}}function Y(o,e,s){let{$$slots:n={},$$scope:l}=e;return o.$$set=i=>{"$$scope"in i&&s(0,l=i.$$scope)},[l,n]}class K extends x{constructor(e){super(),E(this,e,Y,R,k,{})}}export{K as component};
