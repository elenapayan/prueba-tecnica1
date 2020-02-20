(this["webpackJsonpprueba-mirai"]=this["webpackJsonpprueba-mirai"]||[]).push([[0],{23:function(e,a,t){e.exports=t(35)},28:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(15),r=t.n(l),o=(t(28),t(16)),s=t(17),i=t(21),m=t(18),h=t(9),u=t(22),d=(t(29),t(5)),p=t(6);var f=function(e){function a(a){e.handleChange({hotelId:a.target.id})}return c.a.createElement("form",{className:"form-container",action:"",method:"get"},c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("div",{className:"row"},c.a.createElement("legend",{className:"col-form-label col-sm-2 pt-0"},"Elige hotel:"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("div",{className:"form-check"},c.a.createElement("label",{className:"form-check-label",htmlFor:"44069509"},c.a.createElement("input",{type:"radio",className:"form-check-input",id:"44069509",name:"hotel",value:e.hotelId,onChange:a}),"Hotel Baqueira Val de Neu")),c.a.createElement("div",{className:"form-check"},c.a.createElement("label",{className:"form-check-label",htmlFor:"10030559"},c.a.createElement("input",{type:"radio",className:"form-check-input",id:"10030559",name:"hotel",value:e.hotelId,onChange:a}),"Hotel Moderno")),c.a.createElement("div",{className:"form-check"},c.a.createElement("label",{className:"form-check-label",htmlFor:"100376478"},c.a.createElement("input",{type:"radio",className:"form-check-input",id:"100376478",name:"hotel",value:e.hotelId,onChange:a}),"Hotel Grand Luxor"))))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label",htmlFor:"date-checkIn"},"Fecha del check-in"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("input",{type:"date",className:"form-control",id:"date-checkIn",name:"date-checkIn",value:e.checkin,onChange:function(a){e.handleChange({checkin:a.target.value})},required:!0}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label",htmlFor:"nights"},"N\xfamero de noches"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("input",{type:"number",className:"form-control",id:"nights",name:"nights",min:"1",max:"30",value:e.nights,placeholder:"1",required:!0,onChange:function(a){e.handleChange({nights:a.target.value})}}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("div",{className:"col-sm-10"},c.a.createElement(p.b,{to:"/roomsList"},c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:e.handleSearch},"Buscar oferta m\xe1s barata!")))))};var g=function(e){return c.a.createElement("li",{className:"list-group-item"},c.a.createElement(p.b,{to:"/"},c.a.createElement("span",null,"<")," Volver"),c.a.createElement("h3",{className:"list-group-item"},"Room: ",e.roomName),c.a.createElement("p",{className:"list-group-item"},"Offer: ",e.offerName),c.a.createElement("p",{className:"list-group-item"},"Board: ",e.boardName),c.a.createElement("div",{className:"list-group-item"},"Occupancy:",c.a.createElement("p",null,"Adults: ",e.occupancyAdults),c.a.createElement("p",null,"Childs: ",e.occupancyChilds),c.a.createElement("p",null,"Babies: ",e.occupancyBabies)),c.a.createElement("p",{className:"list-group-item"},"Price: ",e.netPrice,"\u20ac"))};var E=function(e){return console.log(e.data),e.data?c.a.createElement("ul",{className:"card"},e.data.sort((function(e,a){return e.netPrice-a.netPrice})).map((function(e,a){return c.a.createElement(g,{key:a,roomName:e.roomName,offerName:e.offerName,boardName:e.boardName,occupancyAdults:e.occupancy.numAdults,occupancyChilds:e.occupancy.numChilds,occupancyBabies:e.occupancy.numBabies,netPrice:e.netPrice})}))):c.a.createElement("p",null,"Lo sentimos, no hay tarifas disponibles roomList")},b=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={data:[],hotelId:"",checkin:"",nights:"",validatedForm:""},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t.handleSearch=t.handleSearch.bind(Object(h.a)(t)),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"formValidated",value:function(){var e=this.state.hotelId,a=parseInt(this.state.nights),t=this.state.checkin;t=t.split("-").join("");var n=new Date,c=n.getFullYear().toString(),l=(n.getMonth()+1).toString();l.length<2&&(l="0"+l);var r=n.getDate().toString();e&&t>=c+l+r&&a>=1&&a<=30?this.setState({validatedForm:!0}):this.setState({validatedForm:!1})}},{key:"handleChange",value:function(e){var a=this;this.setState(e,(function(){a.formValidated()}))}},{key:"handleSearch",value:function(e){var a=this,t=parseInt(this.state.hotelId),n=parseInt(this.state.nights),l=this.state.checkin.split("-").reverse().join("/"),r="https://api-pre.mirai.com/MiraiWebService/availableRate/get?hotelId=".concat(t,"&checkin=").concat(l,"&nights=").concat(n);if(!0!==!!this.state.validatedForm)return e.preventDefault(),c.a.createElement("p",null,"Lo sentimos, no hay tarifas disponibles APP+");fetch(r,{headers:{Authorization:"Basic ".concat(btoa("user1:user1Pass"))}}).then((function(e){return e.json()})).then((function(e){a.setState({data:e.availableRates[t]})}))}},{key:"render",value:function(){return console.log(this.state.data),console.log(this.state.validatedForm),c.a.createElement(c.a.Fragment,null,c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/"},c.a.createElement(f,{handleChange:this.handleChange,hotelId:this.state.hotelId,checkin:this.state.checkin,nights:this.state.nights,handleSearch:this.handleSearch})),c.a.createElement(d.a,{exact:!0,path:"/roomsList"},c.a.createElement(E,{data:this.state.data}))))}}]),a}(c.a.Component);r.a.render(c.a.createElement(p.a,null,c.a.createElement(b,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.3076fc25.chunk.js.map