(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(2),i=a.n(s),l=a(10),c=a.n(l);var r=function(){return Object(n.jsx)("header",{className:"flex items-center justify-center",children:Object(n.jsx)("h1",{className:"bg-gray-300 text-5xl p-4 m-2 inline shadow-lg",children:"CV Application"})})},h=a(4),d=a(5),o=a(1),m=a(7),b=a(6),u=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={input:"",value:""},n.buttonRef=i.a.createRef(),n.formRef=i.a.createRef(),n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleClick=n.handleClick.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(d.a)(a,[{key:"handleClick",value:function(){this.buttonRef.current.classList.add("hidden"),this.formRef.current.classList.remove("hidden")}},{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.buttonRef.current.classList.remove("hidden"),this.formRef.current.classList.add("hidden"),this.setState({value:this.state.input,input:""})}},{key:"render",value:function(){var e=""===this.state.value?this.props.name:this.state.value,t="Phone"===this.props.name?Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"inline",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{d:"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"})}):"Email"===this.props.name?Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"inline",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"})}):"";return Object(n.jsxs)("div",{className:"my-1.5",children:[Object(n.jsxs)("p",{className:"normal"===this.props.size?"text-l inline":"text-5xl inline",children:[t," ",e]}),Object(n.jsx)("button",{className:"mx-2 bg-white shadow-md px-2 py-0.5",onClick:this.handleClick,ref:this.buttonRef,children:"Edit"}),Object(n.jsxs)("form",{className:"hidden inline mx-2",onSubmit:this.handleSubmit,ref:this.formRef,children:[Object(n.jsx)("input",{type:"text",onChange:this.handleChange}),Object(n.jsx)("button",{className:"mx-2 bg-white shadow-md px-2 py-1",type:"Submit",children:"Submit"})]})]})}}]),a}(i.a.Component);var j=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(u,{name:"Name",size:"big"}),Object(n.jsx)(u,{name:"Phone",size:"normal"}),Object(n.jsx)(u,{name:"Email",size:"normal"})]})},x=a(3),f=a.n(x),g=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={items:[],title:"",name:"",from:"",to:"",responsib:""},n.showForm=n.showForm.bind(Object(o.a)(n)),n.handleChangeTitle=n.handleChangeTitle.bind(Object(o.a)(n)),n.handleChangeName=n.handleChangeName.bind(Object(o.a)(n)),n.handleChangeFrom=n.handleChangeFrom.bind(Object(o.a)(n)),n.handleChangeTo=n.handleChangeTo.bind(Object(o.a)(n)),n.handleChangeResponsib=n.handleChangeResponsib.bind(Object(o.a)(n)),n.handleCancel=n.handleCancel.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n.handleDelete=n.handleDelete.bind(Object(o.a)(n)),n.formRef=i.a.createRef(),n.buttonRef=i.a.createRef(),n}return Object(d.a)(a,[{key:"showForm",value:function(){this.formRef.current.classList.remove("hidden"),this.buttonRef.current.classList.add("hidden")}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.formRef.current.classList.add("hidden"),this.buttonRef.current.classList.remove("hidden"),this.setState({items:this.state.items.concat({title:this.state.title,name:this.state.name,from:this.state.from,to:this.state.to,responsib:this.state.responsib}),title:"",name:"",from:"",to:"",responsib:""})}},{key:"handleCancel",value:function(){this.formRef.current.classList.add("hidden"),this.buttonRef.current.classList.remove("hidden"),this.setState({title:"",name:"",from:"",to:"",responsib:""})}},{key:"handleDelete",value:function(e){for(var t,a=e.target.parentElement.firstChild.textContent,n=0;n<this.state.items.length;n++)this.state.items[n].title===a&&(t=n);this.setState({items:this.state.items.filter((function(e,a){return a!==t}))})}},{key:"handleChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"handleChangeFrom",value:function(e){this.setState({from:e.target.value})}},{key:"handleChangeTo",value:function(e){this.setState({to:e.target.value})}},{key:"handleChangeResponsib",value:function(e){this.setState({responsib:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.items.map((function(t){return Object(n.jsx)("li",{className:"bg-gray-300 rounded-lg mb-3 p-2",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"text-xl inline-block",children:t.title}),Object(n.jsx)("button",{className:"mx-2 bg-white shadow-md px-2 py-0 float-right text-red-600",onClick:e.handleDelete,children:"x"}),Object(n.jsxs)("p",{className:"italic",children:[t.name," / ",t.from,"-",t.to]}),Object(n.jsx)("ul",{className:"list-disc list-inside",children:t.responsib.split("\n").map((function(e){return Object(n.jsx)("li",{className:" break-words",children:e},f()())}))})]})},f()())}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"text-3xl mb-1",children:"Work Experience"}),Object(n.jsxs)("div",{className:"p-4 bg-gray-700 inline-block rounded-lg md:min-w-1/2 md:max-w-3/4 min-w-3/4",children:[Object(n.jsx)("ul",{children:t}),Object(n.jsx)("button",{className:"mr-2 bg-white shadow-md px-2 py-1",onClick:this.showForm,ref:this.buttonRef,children:"Add"}),Object(n.jsxs)("form",{ref:this.formRef,className:"hidden space-y-3 bg-gray-300 rounded-lg p-2",onSubmit:this.handleSubmit,children:[Object(n.jsx)("label",{htmlFor:"degree",children:"Title"}),Object(n.jsx)("input",{className:"mx-2",type:"text",id:"degree",onChange:this.handleChangeTitle,value:this.state.title}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"name",children:"Company"}),Object(n.jsx)("input",{className:"mx-2",type:"text",id:"name",onChange:this.handleChangeName,value:this.state.name}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"from",children:"From"}),Object(n.jsx)("input",{className:"mx-2",type:"text",id:"from",placeholder:"YYYY",onChange:this.handleChangeFrom,value:this.state.from}),Object(n.jsx)("label",{htmlFor:"to",children:"To"}),Object(n.jsx)("input",{className:"mx-2 w-52",type:"text",id:"to",placeholder:"YYYY, Leave blank if ongoing",onChange:this.handleChangeTo,value:this.state.to}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"responsib",children:"Responsibilities"}),Object(n.jsx)("br",{}),Object(n.jsx)("textarea",{className:"w-full",id:"responsib",onChange:this.handleChangeResponsib,placeholder:"A short description of your responsibilties in that position",value:this.state.responsib}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"mr-2 bg-white shadow-md px-2 py-1",onClick:this.handleCancel,type:"button",children:"Cancel"}),Object(n.jsx)("button",{className:"mr-2 bg-white shadow-md px-2 py-1",type:"submit",children:"Add"})]})]})]})}}]),a}(i.a.Component),p=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={items:[],degree:"",name:"",from:"",to:""},n.showForm=n.showForm.bind(Object(o.a)(n)),n.handleChangeDegree=n.handleChangeDegree.bind(Object(o.a)(n)),n.handleChangeName=n.handleChangeName.bind(Object(o.a)(n)),n.handleChangeFrom=n.handleChangeFrom.bind(Object(o.a)(n)),n.handleChangeTo=n.handleChangeTo.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n.handleCancel=n.handleCancel.bind(Object(o.a)(n)),n.handleDelete=n.handleDelete.bind(Object(o.a)(n)),n.formRef=i.a.createRef(),n.buttonRef=i.a.createRef(),n}return Object(d.a)(a,[{key:"showForm",value:function(){this.formRef.current.classList.remove("hidden"),this.buttonRef.current.classList.add("hidden")}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.formRef.current.classList.add("hidden"),this.buttonRef.current.classList.remove("hidden"),this.setState({items:this.state.items.concat({degree:this.state.degree,name:this.state.name,from:this.state.from,to:this.state.to}),degree:"",name:"",from:"",to:""})}},{key:"handleCancel",value:function(){this.formRef.current.classList.add("hidden"),this.buttonRef.current.classList.remove("hidden"),this.setState({degree:"",name:"",from:"",to:""})}},{key:"handleDelete",value:function(e){for(var t,a=e.target.parentElement.firstChild.textContent,n=0;n<this.state.items.length;n++)this.state.items[n].degree===a&&(t=n);this.setState({items:this.state.items.filter((function(e,a){return a!==t}))})}},{key:"handleChangeDegree",value:function(e){this.setState({degree:e.target.value})}},{key:"handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"handleChangeFrom",value:function(e){this.setState({from:e.target.value})}},{key:"handleChangeTo",value:function(e){this.setState({to:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.items.map((function(t){return Object(n.jsx)("li",{className:"bg-gray-300 rounded-lg mb-3 p-2",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"text-xl inline-block",children:t.degree}),Object(n.jsx)("button",{className:"mx-2 bg-white shadow-md px-2 py-0 float-right text-red-600",onClick:e.handleDelete,children:"x"}),Object(n.jsxs)("p",{className:"italic",children:[t.name," / ",t.from,"-",t.to]})]})},f()())}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"text-3xl mb-1",children:"Education"}),Object(n.jsxs)("div",{className:"p-4 bg-gray-700 inline-block rounded-lg md:min-w-1/2 md:max-w-3/4 min-w-3/4",children:[Object(n.jsx)("ul",{children:t}),Object(n.jsx)("button",{className:"mr-2 bg-white shadow-md px-2 py-1",onClick:this.showForm,ref:this.buttonRef,children:"Add"}),Object(n.jsxs)("form",{ref:this.formRef,className:"hidden space-y-3 bg-gray-300 rounded-lg p-2",onSubmit:this.handleSubmit,children:[Object(n.jsx)("label",{htmlFor:"degree",children:"Degree"}),Object(n.jsx)("input",{className:"mx-2",type:"text",id:"degree",onChange:this.handleChangeDegree,value:this.state.degree}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"name",children:"School name"}),Object(n.jsx)("input",{className:"mx-2",type:"text",id:"name",onChange:this.handleChangeName,value:this.state.name}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"from",children:"From"}),Object(n.jsx)("input",{className:"mx-2",type:"text",id:"from",placeholder:"YYYY",onChange:this.handleChangeFrom,value:this.state.from}),Object(n.jsx)("label",{htmlFor:"to",children:"To"}),Object(n.jsx)("input",{className:"mx-2 w-52",type:"text",id:"to",placeholder:"YYYY, Leave blank if ongoing",onChange:this.handleChangeTo,value:this.state.to}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"mr-2 bg-white shadow-md px-2 py-1",onClick:this.handleCancel,type:"button",children:"Cancel"}),Object(n.jsx)("button",{className:"mr-2 bg-white shadow-md px-2 py-1",type:"submit",children:"Add"})]})]})]})}}]),a}(i.a.Component),O=a(9),v=function(){var e=Object(s.useState)([]),t=Object(O.a)(e,2),a=t[0],l=t[1],c=Object(s.useState)(""),r=Object(O.a)(c,2),h=r[0],d=r[1],o=i.a.createRef(),m=i.a.createRef(),b=function(e){var t=e.target.parentElement.textContent.replace("x",""),n=a.indexOf(t);l(a.filter((function(e,t){return t!==n})))},u=a.map((function(e){return Object(n.jsxs)("li",{className:"my-1 break-words",children:[e,Object(n.jsx)("button",{className:"mx-2 bg-white shadow-md px-2 py-0 float-right text-red-600",onClick:b,children:"x"})]},f()())})),j=0!==a.length?Object(n.jsx)("ul",{className:"bg-gray-300 p-2 rounded mb-3 list-inside list-disc",children:u}):"";return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"text-3xl mb-1",children:"Skills"}),Object(n.jsxs)("div",{className:"bg-gray-700 inline-block rounded-lg p-4 md:min-w-1/2 md:max-w-3/4 min-w-3/4",children:[j,Object(n.jsx)("button",{className:"mr-2 bg-white shadow-md px-2 py-1",onClick:function(){o.current.classList.add("hidden"),m.current.classList.remove("hidden")},ref:o,children:"Add"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.current.classList.remove("hidden"),m.current.classList.add("hidden"),l(a.concat(h)),d("")},ref:m,className:"hidden",children:[Object(n.jsx)("input",{type:"text",onChange:function(e){d(e.target.value),l(a.filter((function(e){return""!==e})))},value:h}),Object(n.jsx)("button",{className:"mx-2 bg-white shadow-md px-2 py-1",onClick:function(){o.current.classList.remove("hidden"),m.current.classList.add("hidden"),d("")},type:"button",children:"Cancel"}),Object(n.jsx)("button",{className:"mr-2 bg-white shadow-md px-2 py-1",type:"submit",children:"Add"})]})]})]})};var C=function(){return Object(n.jsxs)("div",{className:"bg-gray-700 min-h-screen m-0 p-3",children:[Object(n.jsx)(r,{}),Object(n.jsx)("div",{className:"bg-black rounded-lg p-0 m-3 transform translate-y-2",children:Object(n.jsxs)("div",{className:"bg-gray-300 m-2 ml-1  rounded-lg transform -translate-x-4 -translate-y-4 p-4 space-y-4",children:[Object(n.jsx)(j,{}),Object(n.jsx)(g,{}),Object(n.jsx)(p,{}),Object(n.jsx)(v,{})]})})]})};a(17);c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7cf3deff.chunk.js.map