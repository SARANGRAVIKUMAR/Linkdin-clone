(this.webpackJsonplinkdin=this.webpackJsonplinkdin||[]).push([[0],{117:function(n,e,t){"use strict";t.r(e);var i,c,a,r,o,s,d,j,p,l,x,b,g,h,O,u,f,m,v,w,y,k,z,S,A,C,E,I,F,L,W,_,M,D,Q,H,R,P,G,B,K,q,J,X,Y,T,V,Z,N,U,$,nn,en,tn,cn,an,rn,on,sn,dn,jn,pn,ln,xn,bn,gn,hn,On,un,fn,mn,vn,wn,yn,kn,zn,Sn,An,Cn,En,In,Fn,Ln,Wn,_n,Mn,Dn,Qn=t(2),Hn=t.n(Qn),Rn=t(30),Pn=t.n(Rn),Gn=(t(82),t(38)),Bn=Object(Gn.b)({name:"user",initialState:{user:null},reducers:{login:function(n,e){n.user=e.payload},logout:function(n){n.user=null}}}),Kn=Bn.actions,qn=(Kn.login,Kn.logout,Bn.reducer),Jn=Object(Gn.b)({name:"post",initialState:{posts:[]},reducers:{postDetails:function(n,e){n.posts=e.payload}}}),Xn=Jn.actions.postDetails,Yn=function(n){return n.post.posts},Tn=Jn.reducer,Vn=Object(Gn.a)({reducer:{user:qn,post:Tn}}),Zn=t(36),Nn=(t(88),t(4)),Un=t(5),$n=t(3),ne=Un.a.button(i||(i=Object(Nn.a)(["\n  margin-right: 12px;\n  border-radius: 4px;\n  border: none;\n  background-color: #fff;\n  padding: 0 12px 0 12px;\n  height: 40px;\n  font-size: 16px;\n  transition: all 0.25s ease-out;\n  text-decoration: none solid rgba(0, 0, 0, 0.9);\n  cursor: pointer;\n  color: gray;\n  &:hover {\n    background-color: lightgray;\n    color: black;\n  }\n"]))),ee=Un.a.button(c||(c=Object(Nn.a)(["\n  border-radius: 24px;\n  padding: 0 24px 0 24px;\n  height: 40px;\n  border-color: rgb(10, 102, 194);\n  background-color: #fff;\n  color: #0a66c2;\n  font-weight: 600;\n  font-size: 16px;\n  border-width: 0.5px;\n  transition: all 0.15s ease;\n  cursor: pointer;\n  &:hover {\n    background-color: #c6e5f0;\n    box-shadow: rgb(10, 102, 194) 0 0 0 1px;\n  }\n"]))),te=Un.a.img(a||(a=Object(Nn.a)(["\n  width: 100%;\n  object-fit: contain;\n  height: 100%;\n  cursor: pointer;\n"]))),ie=Un.a.div(r||(r=Object(Nn.a)(["\n  max-width: 1128px;\n  padding-top: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 auto;\n"]))),ce=Un.a.div(o||(o=Object(Nn.a)(["\n  max-width: 150px;\n  height: 34px;\n"]))),ae=Un.a.div(s||(s=Object(Nn.a)(["\n  display: flex;\n  align-items: center;\n"]))),re=function(){return Object($n.jsxs)(ie,{children:[Object($n.jsx)(ce,{children:Object($n.jsx)(te,{src:"images/login-logo.svg"})}),Object($n.jsxs)(ae,{children:[Object($n.jsx)(ne,{children:" Join now"}),Object($n.jsx)(ee,{children:"Sign in"})]})]})},oe=Un.a.img(d||(d=Object(Nn.a)(["\n  margin-left: auto;\n  position: absolute;\n  right: 150px;\n  top: 200px;\n  z-index: -1;\n  width: 700px;\n  height: 700px;\n"]))),se=Un.a.li(j||(j=Object(Nn.a)(['\n  list-style: none;\n  position: relative;\n  margin-bottom: 20px;\n  padding-left: 10px;\n  font-size: 20px;\n  border: 1px solid gray;\n  height: 60px;\n  padding-top: 20px;\n  width: 408px;\n  border-radius: 5px;\n  border-color: whitesmoke;\n  transition: all 0.25 ease-in;\n  border: 0.2px solid lightgrey;\n\n  &:hover {\n    box-shadow: rgba(0, 0, 0, 0.15) 0 2px 6px 0px;\n  }\n  ::after {\n    content: ">";\n    position: absolute;\n    right: 20px;\n    color: gray;\n  }\n']))),de=Un.a.h1(p||(p=Object(Nn.a)(["\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 70px;\n  color: #2977c9;\n  max-width: 700px;\n"]))),je=Un.a.ul(l||(l=Object(Nn.a)(["\n  padding-top: 100px;\n"]))),pe=Un.a.div(x||(x=Object(Nn.a)(["\n  padding: 200px 0px 138px 0;\n  max-width: 1128px;\n  margin: 0px auto;\n  display: flex;\n  flex-direction: column;\n"]))),le=function(){return Object($n.jsxs)(pe,{children:[Object($n.jsx)(de,{children:"Welcome to your professional community"}),Object($n.jsx)(oe,{src:"images/login-hero.svg"}),Object($n.jsxs)(je,{children:[Object($n.jsx)(se,{children:"Search For a job "}),Object($n.jsx)(se,{children:"Find a person you know"}),Object($n.jsx)(se,{children:"Learn a new skill"})]})]})},xe=function(){return Object($n.jsxs)("div",{children:[Object($n.jsx)(re,{}),Object($n.jsx)(le,{})]})},be=t(75),ge=t(12),he=t(18),Oe=Un.a.div(b||(b=Object(Nn.a)(["\n  padding-left: 10px;\n  padding-top: 5px;\n"]))),ue=Un.a.h3(g||(g=Object(Nn.a)(["\n  padding-bottom: 8px;\n  text-transform: capitalize;\n"]))),fe=Un.a.li(h||(h=Object(Nn.a)(["\n  list-style: none;\n  font-weight: 300;\n  color: gray;\n  font-size: 15px;\n  text-transform: capitalize;\n  padding-bottom: 8px;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),me=Un.a.div(O||(O=Object(Nn.a)([""]))),ve=Un.a.h3(u||(u=Object(Nn.a)(["\n  font-weight: 400;\n  font-size: 16px;\n"]))),we=Un.a.div(f||(f=Object(Nn.a)(["\n  display: flex;\n  align-items: center;\n  img {\n    height: 56px;\n    width: 56px;\n    object-fit: contain;\n    border-radius: 50px;\n    padding-right: 10px;\n  }\n"]))),ye=Un.a.h3(m||(m=Object(Nn.a)(["\n  text-transform: uppercase;\n"]))),ke=Un.a.div(v||(v=Object(Nn.a)(["\n  position: absolute;\n  top: 60px;\n  right: 30px;\n  border: none;\n  background: white;\n  border-radius: 0 0 5px 5px;\n  width: 264px;\n  box-shadow: 3px 5px 10px 0px rgba(41, 50, 50, 0.37);\n\n  button {\n    width: 100%;\n    margin-top: 20px;\n    color: #0a66c2;\n    border-color: #0a66c2;\n    border-radius: 50px;\n    background: transparent;\n    padding: 2px 12px;\n    text-transform: capitalize;\n    transition: all 0.2s ease-in-out;\n    &:hover {\n      background-color: #c6e5f0;\n      box-shadow: rgb(10, 102, 194) 0 0 0 1px;\n    }\n  }\n  hr {\n    border: 0.5px solid whitesmoke;\n    margin-top: 10px;\n  }\n"]))),ze=Un.a.div(w||(w=Object(Nn.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Se=Un.a.div(y||(y=Object(Nn.a)(["\n  display: flex;\n"]))),Ae=Un.a.div(k||(k=Object(Nn.a)(["\n  position: relative;\n  padding-right: 30px;\n  border-right: 0.5px solid lightgrey;\n"]))),Ce=Un.a.div(z||(z=Object(Nn.a)(["\n  border-radius: 50%;\n  img {\n    height: 25px;\n    width: 25px;\n    border-radius: 50px;\n  }\n"]))),Ee=Un.a.div(S||(S=Object(Nn.a)(["\n  display: flex;\n  align-items: center;\n"]))),Ie=Un.a.img(A||(A=Object(Nn.a)(["\n  position: absolute;\n  top: 15px;\n  padding-left: 10px;\n"]))),Fe=Un.a.div(C||(C=Object(Nn.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-right: 30px;\n  position: relative;\n  cursor: pointer;\n  span {\n    font-size: 11px;\n    font-weight: 400;\n    color: gray;\n    text-transform: capitalize;\n    transition: all 0.25s ease;\n    &:hover {\n      color: black;\n    }\n  }\n"]))),Le=Un.a.img(E||(E=Object(Nn.a)(["\n  width: 25px;\n"]))),We=Un.a.img(I||(I=Object(Nn.a)(["\n  height: 50px;\n  width: 50px;\n  object-fit: contain;\n  padding-right: 10px;\n"]))),_e=Un.a.div(F||(F=Object(Nn.a)(["\n  display: flex;\n  max-width: 1128px;\n  margin: 0 auto;\n  justify-content: space-between;\n"]))),Me=Un.a.div(L||(L=Object(Nn.a)(["\n  display: flex;\n  align-items: center;\n  div {\n    position: relative;\n    border-radius: 4px;\n    background-color: #eef3f8;\n    input {\n      background: transparent;\n      outline: none;\n      border: none;\n      padding: 14px;\n      padding-left: 30px;\n      transition: all 0.15s ease-in;\n      &:focus {\n        width: 300px;\n        font-size: 16px;\n      }\n    }\n  }\n"]))),De=Un.a.div(W||(W=Object(Nn.a)(["\n  display: flex;\n  align-items: center;\n"]))),Qe=Un.a.div(_||(_=Object(Nn.a)(["\n  position: sticky;\n  top: 0;\n  z-index: 999999;\n  background-color: #fff;\n  padding: 10px;\n"]))),He=function(){var n=Object(Qn.useRef)(),e=Object(Qn.useState)(!1),t=Object(he.a)(e,2),i=t[0],c=t[1];console.log(n);var a=function(e){n.current.contains(e.target)||c(!1)};return Object(Qn.useEffect)((function(){return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}),[]),Object($n.jsx)(Qe,{children:Object($n.jsxs)(_e,{children:[Object($n.jsxs)(Me,{children:[Object($n.jsx)(We,{src:"/images/home-logo.svg"}),Object($n.jsxs)("div",{children:[Object($n.jsx)(Ie,{src:"images/search-icon.svg"}),Object($n.jsx)("input",{type:"text",placeholder:"search"})]})]}),Object($n.jsxs)(De,{children:[Object($n.jsxs)(Fe,{children:[Object($n.jsx)(Le,{src:"images/nav-home.svg"}),Object($n.jsx)("span",{children:"Home"})]}),Object($n.jsxs)(Fe,{children:[Object($n.jsx)(Le,{src:"images/nav-network.svg"}),Object($n.jsx)("span",{children:"My network"})]}),Object($n.jsxs)(Fe,{children:[Object($n.jsx)(Le,{src:"images/nav-jobs.svg"}),Object($n.jsx)("span",{children:"Jobs"})]}),Object($n.jsxs)(Fe,{children:[Object($n.jsx)(Le,{src:"images/nav-messaging.svg"}),Object($n.jsx)("span",{children:"Messaging"})]}),Object($n.jsxs)(Fe,{children:[Object($n.jsx)(Le,{src:"images/nav-notifications.svg"}),Object($n.jsx)("span",{children:"notifications"})]}),Object($n.jsx)(Fe,{children:Object($n.jsxs)(Ae,{ref:n,onClick:function(){return c(!i)},children:[Object($n.jsx)(Ce,{children:Object($n.jsx)("img",{src:"https://media-exp1.licdn.com/dms/image/C5603AQEp7EKFR2h0MQ/profile-displayphoto-shrink_100_100/0/1602657165540?e=1628726400&v=beta&t=YIpi102uzXGqMAfWDggO_0CHnWtb9BP6Hmthrw1IIgA"})}),Object($n.jsxs)(Ee,{children:[Object($n.jsx)("span",{children:"Me"}),Object($n.jsx)("img",{src:"/images/down-icon.svg"})]}),i&&Object($n.jsxs)(ke,{children:[Object($n.jsxs)(we,{children:[Object($n.jsx)("img",{src:"https://media-exp1.licdn.com/dms/image/C5603AQEp7EKFR2h0MQ/profile-displayphoto-shrink_100_100/0/1602657165540?e=1628726400&v=beta&t=YIpi102uzXGqMAfWDggO_0CHnWtb9BP6Hmthrw1IIgA"}),Object($n.jsxs)(me,{children:[Object($n.jsx)(ye,{children:"Sarang Ravikumar"}),Object($n.jsx)(ve,{children:"Student at toch institure"})]})]}),Object($n.jsx)("button",{children:"view profile"}),Object($n.jsx)("hr",{}),Object($n.jsxs)(Oe,{children:[Object($n.jsx)(ue,{children:"Account"}),Object($n.jsx)(fe,{children:"Setting and privacy "}),Object($n.jsx)(fe,{children:"help"}),Object($n.jsx)(fe,{children:"language"}),Object($n.jsx)("hr",{}),Object($n.jsx)(ue,{children:"manage"}),Object($n.jsx)(fe,{children:"post and activity "}),Object($n.jsx)(fe,{children:"job posting account"})]})]})]})}),Object($n.jsx)(Fe,{children:Object($n.jsxs)(ze,{children:[Object($n.jsx)("img",{src:"images/nav-work.svg"}),Object($n.jsxs)(Se,{children:[Object($n.jsx)("span",{children:"Work"}),Object($n.jsx)("img",{src:"images/down-icon.svg"})]})]})})]})]})})},Re=t(43),Pe=t(50),Ge=t.n(Pe),Be=t(51),Ke=t.n(Be),qe=t(73),Je=t.n(qe),Xe=t(74),Ye=t.n(Xe),Te=t(55),Ve=t.n(Te),Ze=t(56),Ne=t.n(Ze),Ue=t(71),$e=t.n(Ue),nt=t(57),et=t.n(nt),tt=t(49),it=t.n(tt),ct=Un.a.div(M||(M=Object(Nn.a)([""]))),at=Un.a.div(D||(D=Object(Nn.a)(["\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),rt=Un.a.div(Q||(Q=Object(Nn.a)(["\n  padding-right: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  "," {\n    color: gray;\n  }\n"])),Ve.a),ot=Un.a.div(H||(H=Object(Nn.a)(["\n  padding-right: 30px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  "," {\n    color: gray;\n  }\n"])),Ne.a),st=Un.a.div(R||(R=Object(Nn.a)(["\n  padding-right: 10px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  "," {\n    color: gray;\n  }\n"])),et.a),dt=Un.a.div(P||(P=Object(Nn.a)(["\n  padding-left: 20px;\n  display: flex;\n  align-items: center;\n  span {\n    padding-right: 10px;\n    font-size: 12px;\n    color: #4b4a4a;\n  }\n"]))),jt=Object(Un.a)($e.a)(G||(G=Object(Nn.a)(["\n  color: #0a66c2;\n  padding-left: 5px;\n"]))),pt=Un.a.div(B||(B=Object(Nn.a)(["\n  padding-top: 20px;\n  img {\n    width: 100%;\n    object-fit: contain;\n  }\n"]))),lt=Un.a.h4(K||(K=Object(Nn.a)(["\n  padding-left: 20px;\n  padding-top: 10px;\n  word-wrap: break-word;\n  font-weight: normal;\n  font-size: 14px;\n  span {\n    color: gray;\n    cursor: pointer;\n    &:hover {\n      color: #0a66c2;\n      text-decoration: underline;\n    }\n  }\n"]))),xt=Un.a.h2(q||(q=Object(Nn.a)(["\n  font-weight: 600;\n  line-height: 20px;\n  font-size: 15px;\n  &:hover {\n    color: #0a66c2;\n    text-decoration: underline;\n  }\n"]))),bt=Un.a.h2(J||(J=Object(Nn.a)(["\n  font-size: 12px;\n  color: gray;\n"]))),gt=Object(Un.a)(bt)(X||(X=Object(Nn.a)([""]))),ht=Un.a.div(Y||(Y=Object(Nn.a)(["\n  max-width: 540px;\n  hr {\n    border: 0.5px solid whitesmoke;\n  }\n"]))),Ot=Un.a.div(T||(T=Object(Nn.a)(["\n  padding-left: 20px;\n  display: flex;\n  align-items: center;\n  padding-top: 10px;\n"]))),ut=Un.a.img(V||(V=Object(Nn.a)(["\n  width: 50px;\n"]))),ft=Un.a.div(Z||(Z=Object(Nn.a)(["\n  padding-left: 10px;\n"]))),mt=function(n){var e=n.username,t=n.mail,i=n.time,c=n.description,a=n.image,r=n.video,o=Object(Qn.useState)(!1),s=Object(he.a)(o,2),d=s[0],j=s[1];return Object($n.jsxs)(ht,{children:[Object($n.jsxs)(Ot,{children:[Object($n.jsx)(ut,{src:"https://lh3.googleusercontent.com/a-/AOh14GgYu5dL-VHzVWzJzSXZKoDy9FTAQzFkw1rh-fQZ_A=s96-c"}),Object($n.jsxs)(ft,{children:[Object($n.jsx)(xt,{children:e}),Object($n.jsx)(bt,{children:t}),Object($n.jsx)(gt,{children:i})]})]}),Object($n.jsxs)(lt,{children:[d?c:null===c||void 0===c?void 0:c.slice(0,100),(null===c||void 0===c?void 0:c.length)>100&&Object($n.jsx)("span",{onClick:function(){return j(!d)},children:d?" ...read less":" ...read more"})]}),a&&Object($n.jsx)(pt,{children:Object($n.jsx)("img",{src:a})}),r&&Object($n.jsx)(ct,{children:Object($n.jsx)(it.a,{width:"100%",url:r})}),Object($n.jsxs)(dt,{children:[Object($n.jsx)(jt,{}),Object($n.jsx)("span",{children:" 0 likes"}),Object($n.jsx)("span",{children:"0 comments"})]}),Object($n.jsx)("hr",{}),Object($n.jsxs)(at,{children:[Object($n.jsxs)(rt,{children:[Object($n.jsx)(Ve.a,{}),Object($n.jsx)("span",{children:"Like"})]}),Object($n.jsxs)(ot,{children:[Object($n.jsx)(Ne.a,{}),Object($n.jsx)("span",{children:"Comment"})]}),Object($n.jsxs)(st,{children:[Object($n.jsx)(et.a,{}),Object($n.jsx)("span",{children:"Share"})]})]})]})},vt=t(72),wt=t.n(vt),yt=t(133),kt=t(46),zt=kt.a.initializeApp({apiKey:"AIzaSyBccpb5EyDnE6gD51kaqOGtvNrTtPnCns0",authDomain:"linkdin-245d4.firebaseapp.com",projectId:"linkdin-245d4",storageBucket:"linkdin-245d4.appspot.com",messagingSenderId:"822862569420",appId:"1:822862569420:web:7a8ec12bb9d41255158769"}).firestore(),St=(kt.a.auth(),new kt.a.auth.GoogleAuthProvider,kt.a.storage(),zt),At=Un.a.div(N||(N=Object(Nn.a)(["\n  text-align: center;\n  img {\n    width: 100%;\n  }\n"]))),Ct=Un.a.button(U||(U=Object(Nn.a)(["\n  border-radius: 50px;\n  padding: 10px 20px;\n  background: #297dd1;\n  font-weight: 600;\n  color: #fff;\n  cursor: pointer;\n  &:hover {\n    background: #000061;\n  }\n"]))),Et=Un.a.div($||($=Object(Nn.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  padding-bottom: 10px;\n"]))),It=Un.a.div(nn||(nn=Object(Nn.a)(["\n  color: gray;\n  display: flex;\n  align-items: center;\n"]))),Ft=Object(Un.a)(Ge.a)(en||(en=Object(Nn.a)(["\n  cursor: pointer;\n  border-radius: 10px;\n  &:hover {\n    background-color: #c8c5c5;\n  }\n"]))),Lt=Object(Un.a)(Ke.a)(tn||(tn=Object(Nn.a)(["\n  margin-left: 20px;\n  border-radius: 10px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #c8c5c5;\n  }\n"]))),Wt=Un.a.h2(cn||(cn=Object(Nn.a)(["\n  padding-top: 5px;\n  font-size: 22px;\n  font-weight: 400;\n"]))),_t=Un.a.h3(an||(an=Object(Nn.a)(["\n  padding-left: 10px;\n  text-transform: capitalize;\n"]))),Mt=Un.a.img(rn||(rn=Object(Nn.a)(["\n  border-radius: 50px;\n  width: 50px;\n"]))),Dt=Un.a.div(on||(on=Object(Nn.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  margin-left: 20px;\n  margin-top: 20px;\n"]))),Qt=Un.a.div(sn||(sn=Object(Nn.a)(["\n  display: flex;\n  justify-content: space-between;\n  color: gray;\n  font-size: 22px;\n  padding: 20px;\n  line-height: 28px;\n  font-weight: 300;\n"]))),Ht=Un.a.form(dn||(dn=Object(Nn.a)(["\n  hr {\n    border: 1px solid whitesmoke;\n  }\n  position: relative;\n  margin: 0 auto;\n  margin-top: 120px;\n  max-width: 550px;\n  background-color: #fff;\n  border-radius: 6px;\n  input {\n    outline: none;\n    margin: 20px;\n    width: 400px;\n    border: none;\n    background: transparent;\n  }\n"]))),Rt=Un.a.div(jn||(jn=Object(Nn.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  left: 0;\n  right: 0;\n  z-index: 999;\n"]))),Pt=function(n){var e=n.setFormToggle,t=(Object(Zn.b)(),Object(Qn.useState)("")),i=Object(he.a)(t,2),c=i[0],a=i[1],r=Object(Qn.useState)(""),o=Object(he.a)(r,2),s=o[0],d=o[1],j=Object(Qn.useState)(""),p=Object(he.a)(j,2),l=p[0],x=p[1],b=Object(Qn.useState)(!1),g=Object(he.a)(b,2),h=g[0],O=g[1],u=Object(Qn.useState)(!1),f=Object(he.a)(u,2),m=f[0],v=f[1],w=Object(Qn.useState)([]),y=Object(he.a)(w,2),k=(y[0],y[1],Object(Qn.useRef)()),z=function(n){k.current.contains(n.target)||e(!1)};Object(Qn.useEffect)((function(){return document.addEventListener("mousedown",z),function(){document.removeEventListener("mousedown",z)}}),[]);return Object($n.jsx)(Rt,{children:Object($n.jsxs)(Ht,{onSubmit:function(n){n.preventDefault(),St.collection("posts").add({description:l,image:c,video:s}),x(""),a(""),d(""),e(!1)},ref:k,children:[Object($n.jsxs)(Qt,{children:[Object($n.jsx)(Wt,{children:"Create a Post"}),Object($n.jsx)(yt.a,{onClick:function(){return e(!1)},children:Object($n.jsx)(wt.a,{})})]}),Object($n.jsx)("hr",{}),Object($n.jsxs)(Dt,{children:[Object($n.jsx)(Mt,{src:"https://lh3.googleusercontent.com/a-/AOh14GgYu5dL-VHzVWzJzSXZKoDy9FTAQzFkw1rh-fQZ_A=s96-c"}),Object($n.jsx)(_t,{children:"Sarang Ravikumar"})]}),Object($n.jsx)("input",{type:"text",value:l,onChange:function(n){return x(n.target.value)},required:!0,placeholder:"What do you want to talk about"}),m&&Object($n.jsxs)(At,{children:[h&&Object($n.jsxs)($n.Fragment,{children:[Object($n.jsx)("input",{type:"file",accept:"image/gif,image/jpeg, image/png",name:"image",id:"file",style:{display:"none"},onChange:function(n){var e=n.target.files[0];""!==e&&void 0!==e?a(URL.createObjectURL(e)):alert("is not a image the file is ".concat(typeof e))}}),Object($n.jsx)("p",{children:Object($n.jsx)("label",{htmlFor:"file",children:"Select a image"})}),c&&Object($n.jsx)("img",{src:c})]}),!h&&Object($n.jsxs)($n.Fragment,{children:[Object($n.jsx)("input",{type:"text",placeholder:"input a video url",value:s,onChange:function(n){return d(n.target.value)},style:{border:"1px solid black",padding:"10px",marginLeft:"-90px"}}),s&&Object($n.jsx)($n.Fragment,{children:Object($n.jsx)(it.a,{width:"100%",url:s})})]})]}),Object($n.jsxs)(Et,{children:[Object($n.jsxs)(It,{onClick:function(){return v(!0)},children:[Object($n.jsx)(Ft,{onClick:function(){return O(!0)}}),Object($n.jsx)(Lt,{onClick:function(){return O(!1)}})]}),Object($n.jsx)(Ct,{disabled:!l,type:"submit",children:"Post"})]})]})})},Gt=Un.a.div(pn||(pn=Object(Nn.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Bt=Un.a.div(ln||(ln=Object(Nn.a)(["\n  margin-top: 20px;\n  padding-top: 20px;\n  border-radius: 10px;\n  border: 1px solid lightgray;\n  background-color: #fff;\n"]))),Kt=Un.a.div(xn||(xn=Object(Nn.a)(["\n  background-color: white;\n  border-radius: 10px;\n"]))),qt=Object(Un.a)(Ge.a)(bn||(bn=Object(Nn.a)(["\n  color: lightblue; ;\n"]))),Jt=Object(Un.a)(Ke.a)(gn||(gn=Object(Nn.a)(["\n  color: green;\n"]))),Xt=Object(Un.a)(Je.a)(hn||(hn=Object(Nn.a)(["\n  color: orange;\n"]))),Yt=Object(Un.a)(Ye.a)(On||(On=Object(Nn.a)(["\n  color: #e48595;\n"]))),Tt=Un.a.div(un||(un=Object(Nn.a)(["\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border-radius: 5px;\n  span {\n    font-size: 16px;\n    text-transform: capitalize;\n    color: #474747;\n  }\n  &:hover {\n    background-color: lightgrey;\n  }\n"]))),Vt=Un.a.div(fn||(fn=Object(Nn.a)(["\n  padding: 10px 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),Zt=Un.a.div(mn||(mn=Object(Nn.a)(["\n  padding-top: 10px;\n  display: flex;\n  padding-left: 20px;\n  align-items: center;\n  img {\n    border-radius: 50px;\n    width: 50px;\n  }\n  button {\n    width: 100%;\n    border-radius: 50px;\n    border: 1px solid lightgray;\n    margin: 0 10px;\n    padding: 10px;\n    cursor: pointer;\n    text-align: left;\n    font-size: 15px;\n    color: #575454;\n    background: transparent;\n    &:hover {\n      background: lightgray;\n    }\n  }\n"]))),Nt=Un.a.div(vn||(vn=Object(Nn.a)([""]))),Ut=function(){var n=Object(Zn.c)(Yn),e=Object(Zn.b)(),t=Object(Qn.useState)(!1),i=Object(he.a)(t,2),c=i[0],a=i[1];return console.log("===================================="),console.log(n[0]),console.log("===================================="),Object(Qn.useEffect)((function(){St.collection("posts").onSnapshot((function(n){var t=n.docs.map((function(n){return Object(Re.a)({id:n.id},n.data())}));e(Xn(t))}))}),[]),Object($n.jsxs)(Nt,{children:[Object($n.jsxs)(Gt,{children:[Object($n.jsxs)(Kt,{onClick:function(){return a(!0)},children:[Object($n.jsxs)(Zt,{children:[Object($n.jsx)("img",{src:"https://media-exp1.licdn.com/dms/image/C5603AQEp7EKFR2h0MQ/profile-displayphoto-shrink_100_100/0/1602657165540?e=1628726400&v=beta&t=YIpi102uzXGqMAfWDggO_0CHnWtb9BP6Hmthrw1IIgA"}),Object($n.jsx)("button",{onClick:function(){return a(!0)},children:"Start a post"})]}),Object($n.jsxs)(Vt,{children:[Object($n.jsxs)(Tt,{children:[Object($n.jsx)(qt,{}),Object($n.jsx)("span",{children:"Photo"})]}),Object($n.jsxs)(Tt,{children:[Object($n.jsx)(Jt,{}),Object($n.jsx)("span",{children:"video"})]}),Object($n.jsxs)(Tt,{children:[Object($n.jsx)(Xt,{}),Object($n.jsx)("span",{children:"Events"})]}),Object($n.jsxs)(Tt,{children:[Object($n.jsx)(Yt,{}),Object($n.jsx)("span",{children:"Articles"})]})]})]}),n.map((function(n){return Object($n.jsx)(Bt,{children:Object($n.jsx)(mt,{username:"sarang",mail:"mailid",time:"time",description:null===n||void 0===n?void 0:n.description,image:null===n||void 0===n?void 0:n.image,video:null===n||void 0===n?void 0:n.video})})}))]}),c&&Object($n.jsx)(Pt,{setFormToggle:a})]})},$t=Un.a.div(wn||(wn=Object(Nn.a)(["\n  padding: 20px;\n"]))),ni=Un.a.h2(yn||(yn=Object(Nn.a)(["\n  font-size: 16px;\n  font-weight: 600;\n"]))),ei=Un.a.li(kn||(kn=Object(Nn.a)(["\n  padding-top: 15px;\n  font-size: 14px;\n  font-weight: 400;\n"]))),ti=Un.a.div(zn||(zn=Object(Nn.a)(["\n  display: flex;\n  padding: 10px 0;\n  align-items: center;\n  color: #444141;\n  img {\n    padding-right: 5px;\n    padding-left: 10px;\n  }\n"]))),ii=Un.a.div(Sn||(Sn=Object(Nn.a)(["\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-bottom: 30px;\n  h4 {\n    color: #575555;\n    font-size: 13px;\n    line-height: 16px;\n    font-weight: 600;\n    padding-bottom: 10px;\n    a {\n      color: #0a66c2;\n      padding-left: 30px;\n    }\n    &:hover {\n      background-color: lightgray;\n    }\n  }\n  span {\n    font-size: 13px;\n    color: #575555;\n    line-height: 16px;\n    a {\n      color: #0a66c2;\n      padding-left: 100px;\n    }\n    h5 {\n      font-weight: 600;\n      color: black;\n      font-size: 13px;\n      text-transform: capitalize;\n    }\n  }\n"]))),ci=Un.a.div(An||(An=Object(Nn.a)(["\n  word-wrap: break-word;\n  padding: 25px;\n"]))),ai=Un.a.h3(Cn||(Cn=Object(Nn.a)(["\n  padding-top: 10px;\n  font-weight: 600;\n  font-size: 16px;\n  text-transform: uppercase;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),ri=Un.a.h4(En||(En=Object(Nn.a)(["\n  font-size: 12px;\n  color: gray;\n  padding-top: 6px;\n  font-weight: 400;\n  text-align: center;\n"]))),oi=Un.a.img(In||(In=Object(Nn.a)(["\n  width: 223px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n"]))),si=Un.a.img(Fn||(Fn=Object(Nn.a)(["\n  position: absolute;\n  right: 85px;\n  top: 20px;\n  width: 60px;\n  border-radius: 50px;\n"]))),di=Un.a.div(Ln||(Ln=Object(Nn.a)(["\n  max-width: 1128px;\n  margin: 0 auto;\n  margin-top: 50px;\n  display: flex;\n  justify-content: space-between;\n"]))),ji=Un.a.div(Wn||(Wn=Object(Nn.a)(["\n  top: 90px;\n  margin-right: 10px;\n  border: 1px solid lightgray;\n  position: relative;\n  width: 225px;\n  height: 320px;\n  background-color: #fff;\n  position: sticky;\n  border-radius: 10px;\n  transition: all 0.2s ease-in;\n  hr {\n    border: 0.5px solid whitesmoke;\n  }\n"]))),pi=Un.a.div(_n||(_n=Object(Nn.a)(["\n  min-width: 500px;\n  word-wrap: wrap;\n"]))),li=Un.a.div(Mn||(Mn=Object(Nn.a)(["\n  border: 1px solid lightgray;\n  position: sticky;\n  top: 90px;\n  margin-left: 10px;\n  background-color: #fff;\n  border-radius: 10px;\n  min-width: 250px;\n  height: 200px;\n  overflow: hidden;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n"]))),xi=function(){return Object($n.jsxs)(di,{children:[Object($n.jsxs)(ji,{children:[Object($n.jsx)(oi,{src:"images/card-bg.svg"}),Object($n.jsx)(si,{src:"https://media-exp1.licdn.com/dms/image/C5603AQEp7EKFR2h0MQ/profile-displayphoto-shrink_100_100/0/1602657165540?e=1628726400&v=beta&t=YIpi102uzXGqMAfWDggO_0CHnWtb9BP6Hmthrw1IIgA"}),Object($n.jsxs)(ci,{children:[Object($n.jsx)(ai,{children:"Sarang Ravikumar"}),Object($n.jsx)(ri,{children:"Student at toch institute of technology"})]}),Object($n.jsx)("hr",{}),Object($n.jsxs)(ii,{children:[Object($n.jsxs)("h4",{children:["Who viewed your profile ",Object($n.jsx)("a",{children:"8"})]}),Object($n.jsxs)("span",{children:["Connections ",Object($n.jsx)("a",{children:"112"}),Object($n.jsx)("h5",{children:"grow your network"})]})]}),Object($n.jsx)("hr",{}),Object($n.jsxs)(ti,{children:[Object($n.jsx)("img",{src:"images/item-icon.svg"}),Object($n.jsx)("span",{children:"My Items"})]})]}),Object($n.jsx)(pi,{children:Object($n.jsx)(Ut,{})}),Object($n.jsx)(li,{children:Object($n.jsxs)($t,{children:[Object($n.jsx)(ni,{children:"Linkdin News"}),Object($n.jsx)(ei,{children:"Lorem ipsum dolor sit amet."}),Object($n.jsx)(ei,{children:"Lorem ipsum dolor sit amet."}),Object($n.jsx)(ei,{children:"Lorem ipsum dolor sit amet."}),Object($n.jsx)(ei,{children:"Lorem ipsum dolor sit amet."})]})})]})},bi=Un.a.div(Dn||(Dn=Object(Nn.a)(["\n  background-color: #f3f2ef;\n  flex-wrap: wrap;\n  min-height: 100vh;\n"]))),gi=function(){return Object($n.jsxs)(bi,{children:[Object($n.jsx)(He,{}),Object($n.jsx)(xi,{})]})};var hi=function(){return Object($n.jsx)("div",{className:"app",children:Object($n.jsx)(be.a,{children:Object($n.jsxs)(ge.c,{children:[Object($n.jsx)(ge.a,{exact:!0,path:"/",children:Object($n.jsx)(xe,{})}),Object($n.jsx)(ge.a,{path:"/home",children:Object($n.jsx)(gi,{})})]})})})};Pn.a.render(Object($n.jsx)(Hn.a.StrictMode,{children:Object($n.jsx)(Zn.a,{store:Vn,children:Object($n.jsx)(hi,{})})}),document.getElementById("root"))},82:function(n,e,t){},88:function(n,e,t){}},[[117,1,2]]]);
//# sourceMappingURL=main.4fc2c165.chunk.js.map