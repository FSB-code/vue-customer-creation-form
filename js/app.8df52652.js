(function(e){function t(t){for(var s,n,o=t[0],l=t[1],u=t[2],m=0,d=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,o=1;o<r.length;o++){var l=r[o];0!==i[l]&&(s=!1)}s&&(a.splice(t--,1),e=n(n.s=r[0]))}return e}var s={},i={app:0},a=[];function n(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=s,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/vue-customer-creation-form/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),i=r("1dce"),a=r.n(i),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("ClientForm")],1)},o=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"customer-form"},[r("div",{staticClass:"form-wrapper"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submitHandler(t)}}},[r("h1",[e._v("Форма создания клиента")]),r("Information",{ref:"information"}),r("Adress",{ref:"adress"}),r("Document",{ref:"document"}),e._m(0),e.showSuccessMessage?r("div",{staticClass:"success-message"},[e._v("Клиент успешно добавлен !")]):e._e(),r("button",{attrs:{type:"submit"}},[e._v("Сохранить")])],1)])])},u=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"require-message"},[e._v("Поля отмеченные "),r("span",{staticClass:"required-star"},[e._v("*")]),e._v(" обязательны для заполнения")])}],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("h2",[e._v("Информация:")]),r("div",{staticClass:"form-item"},[r("label",{class:{invalid:e.$v.lastName.$error},attrs:{for:"lastName"}},[e._v("Фамилия")]),r("span",{staticClass:"required-star"},[e._v("*")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.lastName.$model,expression:"$v.lastName.$model",modifiers:{trim:!0}}],class:{invalid:e.$v.lastName.$error},attrs:{id:"lastName"},domProps:{value:e.$v.lastName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.lastName,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.lastName.$dirty&&!e.$v.lastName.required?r("small",{staticClass:"input-error"},[e._v(" Поле не должно быть пустым ")]):e._e(),e.$v.lastName.minLength?e._e():r("small",{staticClass:"input-error"},[e._v(" Имя не должно быть меньше 4 букв ")])]),r("div",{staticClass:"form-item"},[r("label",{class:{invalid:e.$v.firstName.$error},attrs:{for:"firstName"}},[e._v("Имя")]),r("span",{staticClass:"required-star"},[e._v("*")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.firstName.$model,expression:"$v.firstName.$model",modifiers:{trim:!0}}],class:{invalid:e.$v.firstName.$error},attrs:{id:"firstName"},domProps:{value:e.$v.firstName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.firstName,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.firstName.$dirty&&!e.$v.firstName.required?r("small",{staticClass:"input-error"},[e._v(" Поле не должно быть пустым ")]):e._e(),e.$v.firstName.minLength?e._e():r("small",{staticClass:"input-error"},[e._v(" Имя не должно быть меньше 4 букв ")])]),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"patronymic"}},[e._v("Отчество")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.patronymic,expression:"patronymic",modifiers:{trim:!0}}],domProps:{value:e.patronymic},on:{input:function(t){t.target.composing||(e.patronymic=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-item"},[r("label",{class:{invalid:e.$v.birthDay.$error},attrs:{for:"birthDay"}},[e._v("Дата рождения")]),r("span",{staticClass:"required-star"},[e._v("*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.birthDate,expression:"birthDate"}],class:{invalid:e.$v.birthDay.$error},attrs:{id:"patronymic",type:"date"},domProps:{value:e.birthDate},on:{input:[function(t){t.target.composing||(e.birthDate=t.target.value)},e.$v.birthDay.$touch]}}),e.$v.birthDay.$dirty&&!e.$v.birthDay.required?r("small",{staticClass:"input-error"},[e._v(" Поле не должно быть пустым ")]):e._e(),e.$v.birthDay.between?e._e():r("small",{staticClass:"input-error"},[e._v(" День рождение не должно быть раньше 1 января 1920 года и позже сегодняшней даты ")])]),r("div",{staticClass:"form-item"},[r("label",{class:{invalid:e.$v.phoneNumber.$dirty&&15!=e.phoneNumber.length||"7"!==e.phoneNumber[0]},attrs:{for:"phoneNumber"}},[e._v("Номер телефона")]),r("span",{staticClass:"required-star"},[e._v("*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.phoneNumber.$model,expression:"$v.phoneNumber.$model"}],class:{invalid:e.$v.phoneNumber.$dirty&&15!=e.phoneNumber.length||"7"!==e.phoneNumber[0]},attrs:{id:"phoneNumber"},domProps:{value:e.$v.phoneNumber.$model},on:{input:[function(t){t.target.composing||e.$set(e.$v.phoneNumber,"$model",t.target.value)},e.acceptNumber]}}),"7"!==e.phoneNumber[0]?r("small",{staticClass:"input-error"},[e._v(" Номер телефона должен начинаться с цифры 7 ")]):e.$v.phoneNumber.$dirty&&15!=e.phoneNumber.length?r("small",{staticClass:"input-error"},[e._v(" Номер телефона должен состоять из 11 цифр ")]):e._e()]),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"gender"}},[e._v("Пол")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.gender,expression:"gender",modifiers:{trim:!0}}],attrs:{id:"gender"},domProps:{value:e.gender},on:{input:function(t){t.target.composing||(e.gender=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-item",class:{invalid:e.$v.clientsGroup.$dirty&&!e.$v.clientsGroup.selectedGroupValid}},[r("label",{class:{invalid:e.$v.clientsGroup.$dirty&&!e.$v.clientsGroup.selectedGroupValid},attrs:{for:"clientsGroup"}},[e._v("Группа клиентов")]),r("span",{staticClass:"required-star"},[e._v("*")]),r("CustomSelect",{attrs:{"array-data":e.clientsGroup,"is-multiselect":!0,"set-value":e.setClientsGroup}}),e.$v.clientsGroup.$dirty&&!e.$v.clientsGroup.selectedGroupValid?r("small",{staticClass:"input-error"},[e._v(" Нужно выбрать хотябы 1 пункт ")]):e._e()],1),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"doctors"}},[e._v("Лечащий врач")]),r("CustomSelect",{attrs:{"array-data":e.doctors,"is-multiselect":!1,"set-value":e.setDoctor}})],1),r("div",{staticClass:"form-item"},[r("label",{staticClass:"checkbox-label",attrs:{for:"notification"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.sendingSMS,expression:"sendingSMS"}],attrs:{type:"checkbox",id:"notification"},domProps:{checked:Array.isArray(e.sendingSMS)?e._i(e.sendingSMS,null)>-1:e.sendingSMS},on:{change:function(t){var r=e.sendingSMS,s=t.target,i=!!s.checked;if(Array.isArray(r)){var a=null,n=e._i(r,a);s.checked?n<0&&(e.sendingSMS=r.concat([a])):n>-1&&(e.sendingSMS=r.slice(0,n).concat(r.slice(n+1)))}else e.sendingSMS=i}}}),e._m(0)]),r("label",{staticClass:"checkbox-label"},[e._v("Не отправлять СМС")])])])},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"check-wrap"},[r("i",{staticClass:"ok"})])}],d=(r("ac1f"),r("466d"),r("5319"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"select-wrapper"},[r("div",{staticClass:"selected",on:{click:e.onDropDown}},[e._v(e._s(e.items))]),e.isDropDown?r("div",{staticClass:"close-drop-down",on:{click:e.onDropDown}}):e._e(),e.isDropDown?r("ul",{staticClass:"drop-down"},e._l(e.arrayData,(function(t,s){return r("li",{key:s,class:{active:e.selectedString===t||e.selectedItems.includes(t)},on:{click:function(r){return e.selectItem(t)}}},[e._v(" "+e._s(t)+" ")])})),0):e._e()]),e.isDropDown?r("div",{staticClass:"close-drop-down",on:{click:e.onDropDown}}):e._e()])}),p=[],v=(r("caad"),r("c975"),r("a434"),r("d3b7"),r("25f0"),r("2532"),{name:"CustomSelect",props:["arrayData","isMultiselect","setValue"],data:function(){return{selectedString:"",selectedItems:[],isDropDown:!1}},computed:{items:function(){return this.isMultiselect?this.selectedItems.toString():this.selectedString}},methods:{onDropDown:function(){this.isDropDown=!this.isDropDown},selectItem:function(e){this.isMultiselect?(this.selectedItems.includes(e)?this.selectedItems.splice(this.selectedItems.indexOf(e),1):this.selectedItems.push(e),this.setValue(this.selectedItems),this.onDropDown()):(this.selectedString=e,this.setValue(e.value),this.onDropDown())}}}),f=v,h=(r("fda1"),r("2877")),$=Object(h["a"])(f,d,p,!1,null,null,null),b=$.exports,g=r("b5ae"),y={name:"Information",components:{CustomSelect:b},data:function(){return{lastName:"",firstName:"",patronymic:"",birthDate:"",phoneNumber:"7",gender:"",selectedGroup:[],selectedDoctor:"",sendingSMS:!1,clientsGroup:["VIP","Проблемные","ОМС"],doctors:["Иванов","Захаров","Чернышева"]}},validations:{lastName:{required:g["required"],minLength:Object(g["minLength"])(4)},firstName:{required:g["required"],minLength:Object(g["minLength"])(4)},birthDay:{required:g["required"],between:Object(g["between"])(new Date("1920-01-01"),new Date)},phoneNumber:{required:g["required"]},clientsGroup:{selectedGroupValid:function(){return this.selectedGroup.length>0}}},computed:{birthDay:function(){return this.birthDate?new Date(this.birthDate):null}},methods:{acceptNumber:function(){var e=this.phoneNumber.replace(/\D/g,"").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);this.phoneNumber=e[2]?e[1]+"-"+e[2]+(e[3]?"-"+e[3]:"")+(e[4]?"-"+e[4]:"")+(e[5]?"-"+e[5]:""):e[1]},setClientsGroup:function(e){this.selectedGroup=e},setDoctor:function(e){this.selectedDoctor=e}}},_=y,C=Object(h["a"])(_,c,m,!1,null,null,null),w=C.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("h2",[e._v("Адрес:")]),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"postcode"}},[e._v("Индекс")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.postcode,expression:"postcode",modifiers:{trim:!0}}],attrs:{type:"number",id:"postcode"},domProps:{value:e.postcode},on:{input:function(t){t.target.composing||(e.postcode=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"country"}},[e._v("Страна")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.country,expression:"country",modifiers:{trim:!0}}],attrs:{id:"country"},domProps:{value:e.country},on:{input:function(t){t.target.composing||(e.country=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"region"}},[e._v("Регион")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.region,expression:"region",modifiers:{trim:!0}}],attrs:{id:"region"},domProps:{value:e.region},on:{input:function(t){t.target.composing||(e.region=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-item"},[r("label",{class:{invalid:e.$v.city.$error},attrs:{for:"city"}},[e._v("Город")]),r("span",{staticClass:"required-star"},[e._v("*")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.city.$model,expression:"$v.city.$model",modifiers:{trim:!0}}],class:{invalid:e.$v.city.$error},attrs:{id:"city"},domProps:{value:e.$v.city.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.city,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.city.$dirty&&!e.$v.city.required?r("small",{staticClass:"input-error"},[e._v(" Поле не должно быть пустым ")]):e._e(),e.$v.city.minLength?e._e():r("small",{staticClass:"input-error"},[e._v(" Город не должен быть меньше 4 букв ")])]),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"street"}},[e._v("Улица")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.street,expression:"street",modifiers:{trim:!0}}],attrs:{id:"street"},domProps:{value:e.street},on:{input:function(t){t.target.composing||(e.street=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"house"}},[e._v("Дом")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.house,expression:"house",modifiers:{trim:!0}}],attrs:{id:"house"},domProps:{value:e.house},on:{input:function(t){t.target.composing||(e.house=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])])},N=[],O={name:"Adress",data:function(){return{postcode:"",country:"",region:"",city:"",street:"",house:""}},validations:{city:{required:g["required"],minLength:Object(g["minLength"])(4)}}},P=O,S=Object(h["a"])(P,D,N,!1,null,null,null),I=S.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("h2",[e._v("Документ:")]),r("div",{staticClass:"form-item",class:{invalid:e.$v.documentTypes.$dirty&&!e.$v.documentTypes.selectedDocumentValid}},[r("label",{class:{invalid:e.$v.documentTypes.$dirty&&!e.$v.documentTypes.selectedDocumentValid},attrs:{for:"documentTypes"}},[e._v("Тип документа")]),r("span",{staticClass:"required-star"},[e._v("*")]),r("CustomSelect",{attrs:{"array-data":e.documentTypes,"is-multiselect":!1,"set-value":e.setDocumentType}}),e.$v.documentTypes.$dirty&&!e.$v.documentTypes.selectedDocumentValid?r("small",{staticClass:"input-error"},[e._v(" Выберите тип документа ")]):e._e()],1),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"seriesOfPassport"}},[e._v("Серия")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.seriesOfPassport,expression:"seriesOfPassport",modifiers:{trim:!0}}],attrs:{type:"number",id:"seriesOfPassport"},domProps:{value:e.seriesOfPassport},on:{input:function(t){t.target.composing||(e.seriesOfPassport=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"numberOfPassport"}},[e._v("Номер")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.numberOfPassport,expression:"numberOfPassport",modifiers:{trim:!0}}],attrs:{type:"number",id:"numberOfPassport"},domProps:{value:e.numberOfPassport},on:{input:function(t){t.target.composing||(e.numberOfPassport=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"whoIssuedPassport"}},[e._v("Кем выдан")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.whoIssuedPassport,expression:"whoIssuedPassport",modifiers:{trim:!0}}],attrs:{id:"whoIssuedPassport"},domProps:{value:e.whoIssuedPassport},on:{input:function(t){t.target.composing||(e.whoIssuedPassport=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-item"},[r("label",{class:{invalid:e.$v.dateOfItem.$error},attrs:{for:"date-of-issue"}},[e._v("Дата выдачи")]),r("span",{staticClass:"required-star"},[e._v("*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dateOfIssue,expression:"dateOfIssue"}],class:{invalid:e.$v.dateOfItem.$error},attrs:{id:"dateOfIssue",type:"date"},domProps:{value:e.dateOfIssue},on:{input:[function(t){t.target.composing||(e.dateOfIssue=t.target.value)},e.$v.dateOfItem.$touch]}}),e.$v.dateOfItem.$dirty&&!e.$v.dateOfItem.required?r("small",{staticClass:"input-error"},[e._v(" Поле не должно быть пустым ")]):e._e(),e.$v.dateOfItem.between?e._e():r("small",{staticClass:"input-error"},[e._v(" День рождение не должна быть раньше 1 января 1920 года и позже сегодняшней даты ")])])])},q=[],M={name:"Document",components:{CustomSelect:b},data:function(){return{selectedDocumentType:"",documentTypes:["Паспорт","Свидетельство о рождении","Вод. удостоверение"],seriesOfPassport:"",numberOfPassport:"",whoIssuedPassport:"",dateOfIssue:""}},validations:{documentTypes:{selectedDocumentValid:function(){return""!==this.selectedDocumentType}},dateOfItem:{required:g["required"],between:Object(g["between"])(new Date("1920-01-01"),new Date)}},computed:{dateOfItem:function(){return this.dateOfIssue?new Date(this.dateOfIssue):null}},methods:{setDocumentType:function(e){this.selectedDocumentType=e}}},j=M,G=Object(h["a"])(j,x,q,!1,null,null,null),T=G.exports,k={name:"ClientForm",components:{Information:w,Adress:I,Document:T},data:function(){return{showSuccessMessage:!1}},methods:{submitHandler:function(){var e=this,t=this.$refs.document.$v.$invalid||this.$refs.adress.$v.$invalid||this.$refs.information.$v.$invalid;if(t)return this.$refs.information.$v.$touch(),this.$refs.adress.$v.$touch(),void this.$refs.document.$v.$touch();this.showSuccessMessage=!0,setTimeout((function(){return e.showSuccessMessage=!1}),4e3)}}},U=k,V=(r("b26e"),Object(h["a"])(U,l,u,!1,null,null,null)),L=V.exports,A={name:"App",components:{ClientForm:L}},E=A,F=Object(h["a"])(E,n,o,!1,null,null,null),H=F.exports;s["a"].config.productionTip=!1,s["a"].config.devtools=!0,s["a"].use(a.a),new s["a"]({render:function(e){return e(H)}}).$mount("#app")},a3fe:function(e,t,r){},b26e:function(e,t,r){"use strict";var s=r("d8a1"),i=r.n(s);i.a},d8a1:function(e,t,r){},fda1:function(e,t,r){"use strict";var s=r("a3fe"),i=r.n(s);i.a}});
//# sourceMappingURL=app.8df52652.js.map