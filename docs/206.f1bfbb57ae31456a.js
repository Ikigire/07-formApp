"use strict";(self.webpackChunkformApp=self.webpackChunkformApp||[]).push([[206],{7206:(G,m,o)=>{o.r(m),o.d(m,{AuthModule:()=>X});var c=o(6814),h=o(1523),i=o(95),e=o(4946),A=o(1772),p=o(5592),T=o(7394);class y extends T.w0{constructor(t,r){super()}schedule(t,r=0){return this}}const d={setInterval(n,t,...r){const{delegate:s}=d;return s?.setInterval?s.setInterval(n,t,...r):setInterval(n,t,...r)},clearInterval(n){const{delegate:t}=d;return(t?.clearInterval||clearInterval)(n)},delegate:void 0};var F=o(9039);const f={now:()=>(f.delegate||Date).now(),delegate:void 0};class u{constructor(t,r=u.now){this.schedulerActionCtor=t,this.now=r}schedule(t,r=0,s){return new this.schedulerActionCtor(this,t).schedule(s,r)}}u.now=f.now;const g=new class q extends u{constructor(t,r=u.now){super(t,r),this.actions=[],this._active=!1}flush(t){const{actions:r}=this;if(this._active)return void r.push(t);let s;this._active=!0;do{if(s=t.execute(t.state,t.delay))break}while(t=r.shift());if(this._active=!1,s){for(;t=r.shift();)t.unsubscribe();throw s}}}(class U extends y{constructor(t,r){super(t,r),this.scheduler=t,this.work=r,this.pending=!1}schedule(t,r=0){var s;if(this.closed)return this;this.state=t;const l=this.id,a=this.scheduler;return null!=l&&(this.id=this.recycleAsyncId(a,l,r)),this.pending=!0,this.delay=r,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(a,this.id,r),this}requestAsyncId(t,r,s=0){return d.setInterval(t.flush.bind(t,this),s)}recycleAsyncId(t,r,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return r;null!=r&&d.clearInterval(r)}execute(t,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(t,r);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,r){let l,s=!1;try{this.work(t)}catch(a){s=!0,l=a||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),l}unsubscribe(){if(!this.closed){const{id:t,scheduler:r}=this,{actions:s}=r;this.work=this.state=this.scheduler=null,this.pending=!1,(0,F.P)(s,this),null!=t&&(this.id=this.recycleAsyncId(r,t,null)),this.delay=null,super.unsubscribe()}}}),I=g;var C=o(5211),Z=o(8180),P=o(9360),w=o(8251),x=o(2420),S=o(975),N=o(1631),j=o(4829);function v(n,t){return t?r=>(0,C.z)(t.pipe((0,Z.q)(1),function b(){return(0,P.e)((n,t)=>{n.subscribe((0,w.x)(t,x.Z))})}()),r.pipe(v(n))):(0,N.z)((r,s)=>(0,j.Xf)(n(r,s)).pipe((0,Z.q)(1),(0,S.h)(r)))}var R=o(671);let E=(()=>{class n{validate(r){const s=r.value;return new p.y(a=>{"yael@gmail.com"===s&&(a.next({emailTaken:!0}),a.complete()),a.next(null),a.complete()}).pipe(function J(n,t=g){const r=function V(n=0,t,r=I){let s=-1;return null!=t&&((0,R.K)(t)?r=t:s=t),new p.y(l=>{let a=function L(n){return n instanceof Date&&!isNaN(n)}(n)?+n-r.now():n;a<0&&(a=0);let k=0;return r.schedule(function(){l.closed||(l.next(k++),0<=s?this.schedule(void 0,s):l.complete())},a)})}(n,t);return v(()=>r)}(2e3))}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function Y(n,t){1&n&&(e.TgZ(0,"span",13),e._uU(1," Debe de ser en formato de nombre y apellido "),e.qZA())}function O(n,t){1&n&&(e.TgZ(0,"span",13),e._uU(1," mensaje de error del email "),e.qZA())}function M(n,t){1&n&&(e.TgZ(0,"span",13),e._uU(1," El username no puede ser Strider "),e.qZA())}function z(n,t){1&n&&(e.TgZ(0,"span",13),e._uU(1," La contrase\xf1a debe de ser mayor de 6 caracteres. "),e.qZA())}function Q(n,t){1&n&&(e.TgZ(0,"span",13),e._uU(1," Las contrase\xf1as deben de ser iguales "),e.qZA())}const B=[{path:"",children:[{path:"sign-up",component:(()=>{class n{isValidField(r){return this.validatorService.isValidField(this.regForm,r)}constructor(r,s,l){this.fb=r,this.validatorService=s,this.ev=l,this.regForm=this.fb.group({name:["",[i.kI.required,i.kI.pattern(this.validatorService.firstNameAndLastnamePattern)]],email:["",[i.kI.required,i.kI.pattern(this.validatorService.emailPattern)],[this.ev.validate]],username:["",[i.kI.required,this.validatorService.cantBeStrider]],password:["",[i.kI.required,i.kI.minLength(6)]],confirmPass:["",[i.kI.required]]},{validators:[this.validatorService.idFieldOneEqualsToFieldTwo("password","confirmPass")]})}onSubmit(){this.regForm.markAllAsTouched()}}return n.\u0275fac=function(r){return new(r||n)(e.Y36(i.qu),e.Y36(A.S),e.Y36(E))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:79,vars:33,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","name","placeholder","Nombre del usuario",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","email","formControlName","email","placeholder","Email del usuario",1,"form-control"],["type","text","formControlName","username","placeholder","Nombre c\xf3digo del usuario",1,"form-control"],["type","password","formControlName","password","placeholder","Password de su cuenta",1,"form-control"],["type","password","formControlName","confirmPass","placeholder","Confirmar la contrase\xf1a",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(r,s){1&r&&(e.TgZ(0,"h2"),e._uU(1,"Validaciones Reactivas"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"form",2),e.NdJ("ngSubmit",function(){return s.onSubmit()}),e.TgZ(6,"div",3)(7,"label",4),e._uU(8,"Nombre"),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"input",6),e.YNc(11,Y,2,0,"span",7),e.qZA()(),e.TgZ(12,"div",3)(13,"label",4),e._uU(14,"Email"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"input",8),e.YNc(17,O,2,0,"span",7),e.qZA()(),e.TgZ(18,"div",3)(19,"label",4),e._uU(20,"Username"),e.qZA(),e.TgZ(21,"div",5),e._UZ(22,"input",9),e.YNc(23,M,2,0,"span",7),e.qZA()(),e.TgZ(24,"div",3)(25,"label",4),e._uU(26,"Password"),e.qZA(),e.TgZ(27,"div",5),e._UZ(28,"input",10),e.YNc(29,z,2,0,"span",7),e.qZA()(),e.TgZ(30,"div",3)(31,"label",4),e._uU(32,"Confirmar"),e.qZA(),e.TgZ(33,"div",5),e._UZ(34,"input",11),e.YNc(35,Q,2,0,"span",7),e.qZA()(),e.TgZ(36,"div",0)(37,"div",1)(38,"button",12),e._uU(39," Crear "),e.qZA()()()()()(),e.TgZ(40,"h2"),e._uU(41),e.ALo(42,"json"),e.qZA(),e.TgZ(43,"h2"),e._uU(44),e.ALo(45,"json"),e.qZA(),e.TgZ(46,"h2"),e._uU(47),e.ALo(48,"json"),e.qZA(),e.TgZ(49,"h2"),e._uU(50,"Form errors"),e.qZA(),e.TgZ(51,"pre"),e._uU(52),e.ALo(53,"json"),e.qZA(),e.TgZ(54,"h5"),e._uU(55,"Nombre"),e.qZA(),e.TgZ(56,"pre"),e._uU(57),e.ALo(58,"json"),e.qZA(),e.TgZ(59,"h5"),e._uU(60,"Email"),e.qZA(),e.TgZ(61,"pre"),e._uU(62),e.ALo(63,"json"),e.qZA(),e.TgZ(64,"h5"),e._uU(65,"Username"),e.qZA(),e.TgZ(66,"pre"),e._uU(67),e.ALo(68,"json"),e.qZA(),e.TgZ(69,"h5"),e._uU(70,"Password"),e.qZA(),e.TgZ(71,"pre"),e._uU(72),e.ALo(73,"json"),e.qZA(),e.TgZ(74,"h5"),e._uU(75,"Confirmar"),e.qZA(),e.TgZ(76,"pre"),e._uU(77),e.ALo(78,"json"),e.qZA()),2&r&&(e.xp6(5),e.Q6J("formGroup",s.regForm),e.xp6(6),e.Q6J("ngIf",s.isValidField("name")),e.xp6(6),e.Q6J("ngIf",s.isValidField("email")),e.xp6(6),e.Q6J("ngIf",s.isValidField("username")),e.xp6(6),e.Q6J("ngIf",s.isValidField("password")),e.xp6(6),e.Q6J("ngIf",s.isValidField("confirmPass")),e.xp6(6),e.hij("Form Valid: ",e.lcZ(42,15,s.regForm.valid),""),e.xp6(3),e.hij("Form Status: ",e.lcZ(45,17,s.regForm.status),""),e.xp6(3),e.hij("Form Pending: ",e.lcZ(48,19,s.regForm.pending),""),e.xp6(5),e.Oqu(e.lcZ(53,21,s.regForm.errors)),e.xp6(5),e.Oqu(e.lcZ(58,23,s.regForm.controls.name.errors)),e.xp6(5),e.Oqu(e.lcZ(63,25,s.regForm.controls.email.errors)),e.xp6(5),e.Oqu(e.lcZ(68,27,s.regForm.controls.username.errors)),e.xp6(5),e.Oqu(e.lcZ(73,29,s.regForm.controls.password.errors)),e.xp6(5),e.Oqu(e.lcZ(78,31,s.regForm.controls.confirmPass.errors)))},dependencies:[c.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,c.Ts],encapsulation:2}),n})()},{path:"**",redirectTo:"sign-up"}]}];let D=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.Bz.forChild(B),h.Bz]}),n})(),X=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,D,i.UX]}),n})()}}]);