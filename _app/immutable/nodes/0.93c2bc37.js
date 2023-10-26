import{s as Z,n as W,c as re,d as se,u as le,g as ne,e as ie}from"../chunks/scheduler.b0c1c2c3.js";import{S as ee,i as te,g as n,s as I,h as i,j as _,f as v,c as q,x as C,k as e,a as ae,y as a,r as ue,u as oe,v as ce,d as X,t as Y,w as fe}from"../chunks/index.d7ad0bb1.js";import{p as de}from"../chunks/stores.d366ac48.js";import{e as O}from"../chunks/singletons.d8c3e914.js";/* empty css                     */const ve=!0,xe=Object.freeze(Object.defineProperty({__proto__:null,prerender:ve},Symbol.toStringTag,{value:"Module"}));function pe(p){let t,u,o,h,f,m,s,g,d,w="<span>Home</span>",c,r,l,b,D="<span>Blog</span>",j,N,L,E,R="<span>Feature</span>",V,z,x,H,B="<span>Contact</span>",k,F,T,K='<img class="p-2" src="sun.png" alt="sun.png"/>';return{c(){t=n("header"),u=n("div"),o=n("div"),h=I(),f=n("div"),m=n("div"),s=n("ul"),g=n("li"),d=n("a"),d.innerHTML=w,r=I(),l=n("li"),b=n("a"),b.innerHTML=D,N=I(),L=n("li"),E=n("a"),E.innerHTML=R,z=I(),x=n("li"),H=n("a"),H.innerHTML=B,F=I(),T=n("div"),T.innerHTML=K,this.h()},l($){t=i($,"HEADER",{});var y=_(t);u=i(y,"DIV",{});var A=_(u);o=i(A,"DIV",{class:!0}),_(o).forEach(v),h=q(A),f=i(A,"DIV",{class:!0});var P=_(f);m=i(P,"DIV",{class:!0});var S=_(m);s=i(S,"UL",{class:!0});var M=_(s);g=i(M,"LI",{class:!0,"aria-current":!0});var U=_(g);d=i(U,"A",{href:!0,class:!0,"data-svelte-h":!0}),C(d)!=="svelte-xrubxi"&&(d.innerHTML=w),U.forEach(v),r=q(M),l=i(M,"LI",{class:!0,"aria-current":!0});var G=_(l);b=i(G,"A",{href:!0,class:!0,"data-svelte-h":!0}),C(b)!=="svelte-1i0ythp"&&(b.innerHTML=D),G.forEach(v),N=q(M),L=i(M,"LI",{class:!0,"aria-current":!0});var J=_(L);E=i(J,"A",{href:!0,class:!0,"data-svelte-h":!0}),C(E)!=="svelte-1o727sj"&&(E.innerHTML=R),J.forEach(v),z=q(M),x=i(M,"LI",{class:!0,"aria-current":!0});var Q=_(x);H=i(Q,"A",{href:!0,class:!0,"data-svelte-h":!0}),C(H)!=="svelte-152m1af"&&(H.innerHTML=B),Q.forEach(v),M.forEach(v),F=q(S),T=i(S,"DIV",{class:!0,"data-svelte-h":!0}),C(T)!=="svelte-bd3t18"&&(T.innerHTML=K),S.forEach(v),P.forEach(v),A.forEach(v),y.forEach(v),this.h()},h(){e(o,"class","w-full h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400"),e(d,"href",O+"/"),e(d,"class","svelte-150qyu3"),e(g,"class","pt-2 svelte-150qyu3"),e(g,"aria-current",c=p[0].url.pathname==="/"?"1":void 0),e(b,"href",O+"/blog"),e(b,"class","svelte-150qyu3"),e(l,"class","pt-2 svelte-150qyu3"),e(l,"aria-current",j=p[0].url.pathname==="/blog"?"1":void 0),e(E,"href",O+"/feature"),e(E,"class","svelte-150qyu3"),e(L,"class","pt-2 svelte-150qyu3"),e(L,"aria-current",V=p[0].url.pathname==="/feature"?"1":void 0),e(H,"href",O+"/contact"),e(H,"class","svelte-150qyu3"),e(x,"class","pt-2 svelte-150qyu3"),e(x,"aria-current",k=p[0].url.pathname==="/contact"?"1":void 0),e(s,"class","flex gap-8 text-base font-medium"),e(T,"class","w-12 rounded-xl bg-white"),e(m,"class","flex justify-between w-4/5"),e(f,"class","flex justify-center pt-5 bg-black pb-1")},m($,y){ae($,t,y),a(t,u),a(u,o),a(u,h),a(u,f),a(f,m),a(m,s),a(s,g),a(g,d),a(s,r),a(s,l),a(l,b),a(s,N),a(s,L),a(L,E),a(s,z),a(s,x),a(x,H),a(m,F),a(m,T)},p($,[y]){y&1&&c!==(c=$[0].url.pathname==="/"?"1":void 0)&&e(g,"aria-current",c),y&1&&j!==(j=$[0].url.pathname==="/blog"?"1":void 0)&&e(l,"aria-current",j),y&1&&V!==(V=$[0].url.pathname==="/feature"?"1":void 0)&&e(L,"aria-current",V),y&1&&k!==(k=$[0].url.pathname==="/contact"?"1":void 0)&&e(x,"aria-current",k)},i:W,o:W,d($){$&&v(t)}}}function _e(p,t,u){let o;return re(p,de,h=>u(0,o=h)),[o]}class he extends ee{constructor(t){super(),te(this,t,_e,pe,Z,{})}}function me(p){let t,u,o,h,f,m,s,g='<p class="text-center">visit <a class="font-bold" href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>',d;o=new he({});const w=p[1].default,c=se(w,p,p[0],null);return{c(){t=n("div"),u=n("div"),ue(o.$$.fragment),h=I(),f=n("main"),c&&c.c(),m=I(),s=n("footer"),s.innerHTML=g,this.h()},l(r){t=i(r,"DIV",{class:!0});var l=_(t);u=i(l,"DIV",{class:!0});var b=_(u);oe(o.$$.fragment,b),b.forEach(v),h=q(l),f=i(l,"MAIN",{class:!0});var D=_(f);c&&c.l(D),D.forEach(v),m=q(l),s=i(l,"FOOTER",{class:!0,"data-svelte-h":!0}),C(s)!=="svelte-10l9j51"&&(s.innerHTML=g),l.forEach(v),this.h()},h(){e(u,"class","sticky top-0 mb-10 z-10"),e(f,"class","flex flex-1 flex-col items-center"),e(s,"class","flex flex-col pt-10"),e(t,"class","flex flex-col bg-black min-h-screen text-white w-full")},m(r,l){ae(r,t,l),a(t,u),ce(o,u,null),a(t,h),a(t,f),c&&c.m(f,null),a(t,m),a(t,s),d=!0},p(r,[l]){c&&c.p&&(!d||l&1)&&le(c,w,r,r[0],d?ie(w,r[0],l,null):ne(r[0]),null)},i(r){d||(X(o.$$.fragment,r),X(c,r),d=!0)},o(r){Y(o.$$.fragment,r),Y(c,r),d=!1},d(r){r&&v(t),fe(o),c&&c.d(r)}}}function ge(p,t,u){let{$$slots:o={},$$scope:h}=t;return p.$$set=f=>{"$$scope"in f&&u(0,h=f.$$scope)},[h,o]}class He extends ee{constructor(t){super(),te(this,t,ge,me,Z,{})}}export{He as component,xe as universal};
