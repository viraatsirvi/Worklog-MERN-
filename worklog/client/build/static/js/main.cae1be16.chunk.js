(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(32),r=a.n(s),o=(a(77),a(11)),i=a(12),c=a(16),m=a(15),u=a(17),d=a(176),h=a(178),p=a(174),g=(a(78),a(33)),E=a(177),v=a(53),f=a.n(v),N="http://localhost:3001/auth/",b=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,null,[{key:"postApi",value:function(e,t){return f.a.post(N+e,t)}},{key:"getApi",value:function(e){return f.a.get(N+e)}}]),e}(),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.getLogin=function(){console.log("in login",a.state.email,a.state.password),b.postApi("login",{email:a.state.email,password:a.state.password}).then(function(e){e.data.result&&e.data.result.length>0?(localStorage.setItem("auth",JSON.stringify(e.data.result)),a.props.history.push("/ ")):a.props.history.push("/login-register")}).catch(function(e){alert("login failed. Try later!")})},a.getRegister=function(){var e={firstName:a.state.firstName,lastName:a.state.lastName,userName:a.state.username,email:a.state.email,password:a.state.password};b.postApi("register",e).then(function(e){console.log(e.data,"response of register api----"),"200"===e.data.responseCode&&(a.props.history.push("/login-register"),a.setState({Islogin:"Login"}))}).catch(function(e){console.log(e)})},a.login=function(){return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",{className:"form-container"},l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"email",name:"email",className:"form-elemant",onChange:a.handleChange,value:a.state.email})),l.a.createElement("div",{className:"form-container"},l.a.createElement("label",null,"Password "),l.a.createElement("input",{type:"password",name:"password",className:"form-elemant",onChange:a.handleChange,value:a.state.password})),l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"btn-submit",onClick:a.getLogin},"Login"),l.a.createElement("span",null,"Not registered? "),l.a.createElement("span",{onClick:function(){a.setState({Islogin:"Registration"})},className:"login",an:!0},"Create  account"))))},a.register=function(){return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",{className:"form-container"},l.a.createElement("label",null,"First Name"),l.a.createElement("input",{type:"text",name:"firstName",className:"form-elemant",onChange:a.handleChange,value:a.state.firstName})),l.a.createElement("div",{className:"form-container"},l.a.createElement("label",null,"Last Name"),l.a.createElement("input",{type:"text",name:"lastName",className:"form-elemant",onChange:a.handleChange,value:a.state.lastName})),l.a.createElement("div",{className:"form-container"},l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"email",name:"email",className:"form-elemant",onChange:a.handleChange,value:a.state.email})),l.a.createElement("div",{className:"form-container"},l.a.createElement("label",null,"Password "),l.a.createElement("input",{type:"password",name:"password",className:"form-elemant",onChange:a.handleChange,value:a.state.password})),l.a.createElement("div",{className:"form-container"},l.a.createElement("label",null,"Confirm Password"),l.a.createElement("input",{type:"username",name:"cnfmpassword",className:"form-elemant",onChange:a.handleChange,value:a.state.cnfmpassword})),l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"btn-submit",onClick:a.getRegister},"Register"),l.a.createElement("span",null,"Already have an account?")," ",l.a.createElement("span",{onClick:function(){a.setState({Islogin:"Login"})},className:"login",an:!0},"Login"))))},a.state={firstName:"",lastName:"",username:"",email:"",password:"",cnfmpassword:"",Islogin:"Login"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"form-wrapper"},l.a.createElement("h2",null,this.state.Islogin),"Login"==this.state.Islogin?this.login():this.register())}}]),t}(l.a.Component),y=Object(E.a)(k),C=a(173),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={data:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("auth"));t?b.postApi("getTaskDetails",{email:t[0].email}).then(function(t){t.data.result.length>0?e.setState({data:t.data.result}):e.props.history.push("/create")}).catch(function(e){console.log("error-----------",e)}):this.props.history.push("/login-register")}},{key:"render",value:function(){var e=this.state.data;return l.a.createElement("div",{className:"task"},l.a.createElement("h2",null,"Task Details"),l.a.createElement("div",null,l.a.createElement("div",{className:"task-wrapper"},l.a.createElement("div",{className:"task-container",style:{width:"40px"}},"S.NO."),l.a.createElement("div",{className:"task-container"},"Task"),l.a.createElement("div",{className:"task-container"},"Project"),l.a.createElement("div",{className:"task-container"},"Date"),l.a.createElement("div",{className:"task-container"},"Start Time"),l.a.createElement("div",{className:"task-container"},"End Time")),e?e.map(function(e,t){var a=e.Date.split("T")[0];return l.a.createElement("div",{className:"task-wrapper"},l.a.createElement("div",{className:"task-container",style:{width:"40px"}},t+1),l.a.createElement("div",{className:"task-container"},e.taskName),l.a.createElement("div",{className:"task-container"},e.taskType),l.a.createElement("div",{className:"task-container"},a),l.a.createElement("div",{className:"task-container"},e.startTime),l.a.createElement("div",{className:"task-container"},e.endTime))}):""),l.a.createElement("div",{className:"create-task"},l.a.createElement(C.a,{to:"/create"},l.a.createElement("i",null,"+"))))}}]),t}(l.a.Component),O=a(69),j=a.n(O),M=(a(101),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).taskCreate=function(){var e=JSON.parse(localStorage.getItem("auth"))[0].email,t={taskName:a.state.taskName,taskType:a.state.taskType,date:a.state.date,email:e,starttime:a.state.starttimeHH+":"+a.state.starttimeMM,endtime:a.state.endtimeHH+":"+a.state.endtimeMM};a.state.taskName&&a.state.taskType&&a.state.date&&a.state.starttimeHH&&a.state.starttimeMM&&a.state.endtimeHH&&a.state.endtimeMM?b.postApi("taskDetails",t).then(function(e){200===e.data.responseCode&&(console.log("done"),a.props.history.push("/"))}).catch(function(e){console.log("error-----------",e)}):a.setState({color:"red"})},a.handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.state={taskName:"",taskType:"",date:new Date,email:"",starttimeHH:"",starttimeMM:"",endtimeHH:"",endtimeMM:"",color:"#ddd"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"form-wrapper"},l.a.createElement("h2",null,"Create Task"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-container"},l.a.createElement("label",null,"Task Name"),l.a.createElement("input",{type:"text",style:{borderColor:this.state.taskName?"#ddd":this.state.color},name:"taskName",className:"form-elemant",onChange:this.handleChange,value:this.state.taskName})),l.a.createElement("div",{className:"form-container"},l.a.createElement("label",null,"Project"),l.a.createElement("select",{style:{borderColor:this.state.taskType?"#ddd":this.state.color},name:"taskType",className:"form-elemant",onChange:this.handleChange,value:this.state.taskType},l.a.createElement("option",{vlaue:"Indocan"},"Indocan"),l.a.createElement("option",{vlaue:"asad"},"asad"),l.a.createElement("option",{vlaue:"qaz"},"qaz"),l.a.createElement("option",{vlaue:"wsx"},"wsx"),l.a.createElement("option",{vlaue:"rfv"},"rfv"))),l.a.createElement("div",{className:"form-container"},l.a.createElement("label",null,"Date"),l.a.createElement(j.a,{showPopperArrow:!1,selected:this.state.date,onChange:function(t){e.setState({date:t})},dateFormat:"dd/MM/yyyy",className:"form-elemant"})),l.a.createElement("div",{className:"form-container"},l.a.createElement("input",{type:"hidden",name:"email",className:"form-elemant",onChange:this.handleChange,value:this.state.email})),l.a.createElement("div",{className:"form-container"},l.a.createElement("label",null,"start time "),l.a.createElement("div",{className:"time-container"},l.a.createElement("input",{type:"text",style:{borderColor:this.state.starttimeHH?"#ddd":this.state.color},name:"starttimeHH",className:"time-elemant",placeholder:"HH",onChange:this.handleChange,value:this.state.starttimeHH}),l.a.createElement("span",null,":"),l.a.createElement("input",{type:"text",style:{borderColor:this.state.starttimeMM?"#ddd":this.state.color},name:"starttimeMM",className:"time-elemant",placeholder:"MM",onChange:this.handleChange,value:this.state.starttimeMM}))),l.a.createElement("div",{className:"form-container"},l.a.createElement("label",null,"end time"),l.a.createElement("div",{className:"time-container"},l.a.createElement("input",{type:"text",style:{borderColor:this.state.endtimeHH?"#ddd":this.state.color},name:"endtimeHH",className:"time-elemant",placeholder:"HH",onChange:this.handleChange,value:this.state.endtimeHH}),l.a.createElement("span",null,":"),l.a.createElement("input",{type:"text",style:{borderColor:this.state.endtimeMM?"#ddd":this.state.color},name:"endtimeMM",className:"time-elemant",placeholder:"MM",onChange:this.handleChange,value:this.state.endtimeMM}))),l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"btn-submit",onClick:this.taskCreate},"Create"))))}}]),t}(l.a.Component)),H=a(175),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this))).logout=function(){localStorage.clear(),a.setState({login:"Login"})},a.state={login:"Logout"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return JSON.parse(localStorage.getItem("auth"))?l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement("div",{className:"right"},l.a.createElement("div",null,l.a.createElement(C.a,{to:"/"},"Home")),l.a.createElement("div",null,l.a.createElement(C.a,{to:"/create"},"Create"))),l.a.createElement("div",{className:"left"},l.a.createElement("div",null,JSON.parse(localStorage.getItem("auth"))?JSON.parse(localStorage.getItem("auth"))[0].firstName:""),l.a.createElement("div",{onClick:this.logout},this.state.login))):l.a.createElement(H.a,{to:"/login-register"})}}]),t}(l.a.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:""},l.a.createElement(S,null),l.a.createElement(h.a,null,l.a.createElement(p.a,{exact:!0,path:"/",component:w}),l.a.createElement(p.a,{exact:!0,path:"/create",component:M}),l.a.createElement(p.a,{path:"/login-register",component:y}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.hydrate(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){e.exports=a(168)},77:function(e,t,a){},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.cae1be16.chunk.js.map