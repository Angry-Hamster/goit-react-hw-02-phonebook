(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),i=n(8),o=n.n(i),s=(n(16),n(10)),l=n(2),u=n(3),d=n(5),h=n(4),b=(n(17),n(6)),j=n.n(b),m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handlefilter=function(e){var t=e.filter,n=e.contacts,a=[];return""==t?n:(n.map((function(e){e.name.toLowerCase().includes(t.toLowerCase())&&a.push({id:e.id,name:e.name,number:e.number})})),a)},e.handleDelete=function(t){window.confirm("Delete ".concat(t.target.parentNode.firstChild.textContent,"?"))&&e.props.deleteContact(t.target.parentNode.id)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("ul",{className:j.a.contactList,children:this.handlefilter(this.props.users).map((function(t){return Object(a.jsxs)("li",{id:t.id,children:[Object(a.jsxs)("span",{children:[t.name,": ",t.number]}),Object(a.jsxs)("button",{onClick:e.handleDelete,children:[" ","Delete"," "]})]},t.id)}))})}}]),n}(r.Component),f=n(9),p=n(20),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",id:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(f.a)({},a,r)),e.setState({id:Object(p.a)()})},e.handleSubmit=function(t){t.preventDefault(),void 0==e.props.users.contacts.find((function(t){return t.name.toLowerCase()==e.state.name.toLowerCase()}))?e.props.addNewContact(e.state):alert("".concat(e.state.name," is alredy in contacs")),t.target.children[1].value="",t.target.children[3].value=""},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{id:"name",name:"name",type:"text",placeholder:"Enter your name",onChange:this.handleChange,required:!0}),Object(a.jsx)("label",{htmlFor:"number",children:"Phone"}),Object(a.jsx)("input",{id:"number",name:"number",type:"tel",placeholder:"Enter your phone",onChange:this.handleChange,required:!0}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(r.Component),C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){var n=t.target.value;e.props.filter(n)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:j.a.filter,children:[Object(a.jsx)("label",{htmlFor:"filter",children:"Find contacts buy name"}),Object(a.jsx)("input",{name:"filter",id:"filter",onChange:this.handleChange})]})}}]),n}(r.Component),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addNewContact=function(t){e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[t])}}))},e.getFilter=function(t){e.setState({filter:t})},e.deleteContact=function(t){var n=e.state.contacts,a=[];n.map((function(e){n.find((function(e){return e.id==t}))!=e&&a.push(e)})),e.setState({contacts:a})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(O,{addNewContact:this.addNewContact,users:this.state}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(C,{filter:this.getFilter}),Object(a.jsx)(m,{users:this.state,deleteContact:this.deleteContact})]})}}]),n}(r.Component);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"style_form__39ps6",filter:"style_filter__1OCpJ",contactList:"style_contactList__WgU4J"}}},[[18,1,2]]]);
//# sourceMappingURL=main.064ec12b.chunk.js.map