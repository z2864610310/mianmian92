webpackJsonp([4,10],{"97ac":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("yL+Y"),o=(n("NMWD"),[]),a={name:"items",props:{treeStructure:{type:Boolean,default:function(){return!1}},text:{type:String},pageTitle:{type:String},PermissionGroupsList:{type:Array}},data:function(){return{type:"menu",showMenuBlock:!0,showPointBlock:!1,dialogFormVisible:!1,typeStatus:!1,notPointDataList:[],parentDataList:[],formMenu:{pid:"",is_point:"",code:"",title:""},formPoints:{pid:"",is_point:"",code:"",title:""},codepast:"",ruleInline:{title:[{required:!0,message:"标题不能为空",trigger:"blur"}],code:[{required:!0,validator:function t(e,n,i){var a=o.formMenu.code;if(""===n)i(new Error("代码不能为空"));else{t.ifHave=!1;var r=o.formMenu.pid;t.ifHaveCodeExciting=function(e){for(var n=0;n<e.length;n++)e[n].childs&&e[n].childs.length>0&&t.ifHaveCodeExciting(e[n].childs),e[n].points&&e[n].points.length>0&&e[n].id===r&&t.doPoints(e[n].points)},t.doPoints=function(e){for(var n=0;n<e.length;n++)e[n].code&&e[n].code===a&&(t.ifHave=!0)},t.ifHaveCodeExciting(o.parentDataList),i()}},trigger:"blur"}]},leafCount:[]}},computed:{},methods:{dialogFormV:function(){this.dialogFormVisible=!0},dialogFormH:function(){this.dialogFormVisible=!1},handleChooseType:function(){"menu"===this.type&&o.changeToMenu(),"points"===this.type&&o.changeToPoints()},changeType:function(t){"menu"===t&&(this.type="menu",o.changeToMenu()),"points"===t&&(this.type="points",o.changeToPoints()),this.typeStatus=!0},changeArays:function(){!function t(e){for(var n=0;n<e.length;n++)void 0!==e[n].code&&o.notPointDataList.push(e[n]),e[n].childs&&e[n].childs.length>0&&t(e[n].childs)}(o.parentDataList)},changeToMenu:function(){o.showMenuBlock=!0,o.showPointBlock=!1,o.notPointDataList=[],this.changeArays()},changeToPoints:function(){o.showMenuBlock=!1,o.showPointBlock=!0,o.formMenu=o.formPoints,o.formMenu.pid=o.formPoints.pid,o.formMenu.code=o.formPoints.code,o.formMenu.title=o.formPoints.title,o.notPointDataList=[],this.changeArays()},handleClose:function(){this.$emit("handleCloseModal")},handle_Edit:function(t){var e=this;Object(i.f)(this.formMenu).then(function(){e.$emit("handleCloseModal"),e.$emit("newDataes",e.formMenu)})},select_Add:function(){var t=this;Object(i.a)(this.formMenu).then(function(){o.handleResetForm(),t.$emit("handleCloseModal"),t.$emit("newDataes",t.formMenu)})},handle_Add:function(t){"points"===o.type?(this.formMenu.is_point=!0,this.select_Add()):(this.formMenu.is_point=!1,this.select_Add())},handleSubmit:function(t){var e=this;(o.formMenu.pid=Number(o.formMenu.pid),o.formMenu.id)?o.formMenu.code===this.codepast?(this.$refs.formMenu.validateField("title"),o.handle_Edit(t)):o.$refs[t].validate(function(n){n?o.handle_Edit(t):e.$Message.error("表单验证失败")}):o.$refs[t].validate(function(n){n?o.handle_Add(t):e.$Message.error("表单验证失败")})},dataRest:function(t){for(var e=0;e<t.length;e++){if(t[e].childs&&t[e].childs.length>0)for(var n=0;n<t[e].childs.length;n++)this.$set(t[e].childs[n],"layer",1);this.$set(t[e],"layer",0)}},hanldeEditForm:function(t){var e=this;this.formMenu.id=t,Object(i.c)().then(function(t){o.parentDataList=t.data,o.notPointDataList=[],e.dataRest(t.data),e.changeArays()}),Object(i.b)({id:t}).then(function(t){e.formMenu.id=t.data.id,e.formMenu.pid=t.data.pid,e.formMenu.title=t.data.title,e.formMenu.code=t.data.code,e.formMenu.is_point=t.data.is_point;var n=t.data;"points"===e.type&&(e.formMenu.code=t.data.code),null===n.pid&&(e.formMenu.pid=0)})},handleResetForm:function(){var t=this;this.formMenu.id="",this.formMenu.pid=0,this.formMenu.title="",this.formMenu.code="",o.typeStatus=!1,o.type="menu",Object(i.c)().then(function(e){o.parentDataList=e.data,o.notPointDataList=o.parentDataList,t.dataRest(e.data),o.changeToMenu()})}},mounted:function(){},created:function(){o=this},updated:function(){}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-form"},[n("el-dialog",{attrs:{title:t.text+t.pageTitle,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{ref:"formMenu",staticStyle:{width:"400px","margin-left":"120px"},attrs:{rules:t.ruleInline,model:t.formMenu,"label-position":"left","label-width":"120px"}},[n("el-form-item",{attrs:{label:t.$t("table.permissionUser")}},[n("el-radio-group",{staticClass:"choose-type",on:{change:t.handleChooseType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("el-radio",{staticClass:"choose-item",attrs:{label:"menu",disabled:t.typeStatus}},[t._v("菜单")]),t._v(" "),n("el-radio",{staticClass:"choose-item",attrs:{label:"points",disabled:t.typeStatus}},[t._v("权限点")])],1)],1),t._v(" "),n("el-form-item",{attrs:{label:t.$t("table.permissionUser")}},[n("el-select",{model:{value:t.formMenu.pid,callback:function(e){t.$set(t.formMenu,"pid",e)},expression:"formMenu.pid"}},[n("el-option",{attrs:{value:0,label:t.$t("table.powerNav")}},[t._v("主导航")]),t._v(" "),t._l(t.notPointDataList,function(e){return n("el-option",{key:e.id,class:"moveIn"+e.layer,attrs:{value:e.id,label:e.title,disabled:"points"===t.type&&!!e.childs}})})],2)],1),t._v(" "),t.showMenuBlock?n("div",[n("el-form-item",{attrs:{label:t.$t("table.powerCode"),prop:"code"}},[n("el-input",{model:{value:t.formMenu.code,callback:function(e){t.$set(t.formMenu,"code",e)},expression:"formMenu.code"}})],1),t._v(" "),n("el-form-item",{attrs:{label:t.$t("table.powerTitle"),prop:"title"}},[n("el-input",{model:{value:t.formMenu.title,callback:function(e){t.$set(t.formMenu,"title",e)},expression:"formMenu.title"}})],1)],1):t._e(),t._v(" "),t.showPointBlock?n("div",{attrs:{model:t.formPoints}},[n("el-form-item",{attrs:{label:t.$t("table.powerCode"),prop:"code"}},[n("el-input",{model:{value:t.formPoints.code,callback:function(e){t.$set(t.formPoints,"code",e)},expression:"formPoints.code"}})],1),t._v(" "),n("el-form-item",{attrs:{label:t.$t("table.powerTitle"),prop:"title"}},[n("el-input",{model:{value:t.formPoints.title,callback:function(e){t.$set(t.formPoints,"title",e)},expression:"formPoints.title"}})],1)],1):t._e()],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.handleClose}},[t._v(t._s(t.$t("table.cancel")))]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit("formMenu")}}},[t._v(t._s(t.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]};var s=n("VU/8")(a,r,!1,function(t){n("lOh/"),n("Sa9k")},"data-v-6d3af64f",null);e.default=s.exports},NMWD:function(t,e,n){"use strict";var i=n("c/Tr"),o=n.n(i),a=n("7+uW");function r(t){if(!(this instanceof r))return new r(t,null,null)}r.treeToArray=function(t,e,n,i){var s=[];return o()(t).forEach(function(t){void 0===t._expanded&&a.default.set(t,"_expanded",i),e&&a.default.set(t,"_parent",e);var o=0;if(void 0!==n&&null!==n&&(o=n+1),a.default.set(t,"_level",o),s.push(t),t.childs&&t.childs.length>0){var l=r.treeToArray(t.childs,t,o,i);s=s.concat(l)}if(t.points&&t.points.length>0){var d=r.treeToArray(t.points,t,o,i);s=s.concat(d)}}),s},e.a=r},Sa9k:function(t,e){},lC7o:function(t,e){},"lOh/":function(t,e){},onuK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("NMWD"),o={name:"TableExpand",functional:!0,props:{row:Object,render:Function,index:Number,column:{type:Object,default:null}},render:function(t,e){var n={row:e.props.row,index:e.props.index};return e.props.column&&(n.column=e.props.column),e.props.render(t,n)}},a={name:"treeTable",components:{expand:n("VU/8")(o,null,!1,null,null,null).exports},props:{treeStructure:{type:Boolean,default:function(){return!1}},data:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},listLoading:{type:Boolean,default:!1},defaultExpandAll:{type:Boolean,default:function(){return!0}}},computed:{formatData:function(){return this.treeStructure?i.a.treeToArray(this.data,null,null,this.defaultExpandAll):this.data}},methods:{rowClassStatus:function(){this.$emit("rowClassStatus")},handleUpdate:function(t){this.$emit("handleUpdate",t)},handleDelete:function(t){this.$emit("removeUser",t)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.formatData,"row-class-name":t.rowClassStatus,"element-loading-text":"给我一点时间",fit:"","highlight-current-row":""}},[t._l(t.columns,function(e,i){return n("el-table-column",{key:e.prop,attrs:{width:e.width,prop:e.prop,label:e.text},scopedSlots:t._u([{key:"default",fn:function(o){return[e.render?n("expand",{attrs:{render:e.render,row:o.row,index:i,column:e}}):n("span",[t._v("\n        "+t._s(o.row[e.value])+"\n      ")])]}}])})}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"260",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){t.handleUpdate(e.row)}}},[t._v("\n        修改\n      ")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){t.handleDelete(e.row.id)}}},[t._v("\n        删除\n      ")])]}}])})],2)},staticRenderFns:[]};var s=n("VU/8")(a,r,!1,function(t){n("qAzS"),n("qS/w")},"data-v-d7b52fbe",null).exports,l=n("97ac"),d=n("yL+Y"),u=[],c={name:"treeTableDemo",components:{treeTable:s,MenuAdd:l.default},data:function(){return{MenuAdd:"menuAdd",listLoading:!0,dataList:[],newArray:[],pageTitle:"菜单",text:"",PermissionGroupsList:[],parentDataList:[],notPointDataList:[],columns:[{text:"标题",value:"title",width:200,render:function(t,e){return t("div",[t("i",{class:"ivu-icon "+e.row.icon,style:{marginLeft:20*e.row.layer+"px",marginRight:"5px",fontSize:"16px"}}),t("i",e.row.title)])}},{text:"权限点代码",value:"code"}]}},methods:{handleLoadData:function(t){var e=this;this.listLoading=!0,Object(d.c)(t).then(function(t){e.dataList=t.data,e.listLoading=!1;var n=[],i=function(t,e){var n;return n=e.is_point?" el-icon-view":e.childs&&e.childs.length>0?" fa fa-folder-open-o fa-fw":"fa fa-file-o fa-fw",{id:e.id,pid:e.pid,layer:t,is_point:e.is_point,code:e.code,title:e.title,icon:n}},o=function(t,e){a(++t,e),t--};function a(t,e){for(var a=0;a<e.length;a++)n.push(i(t,e[a])),e[a].childs&&e[a].childs.length>0&&o(t,e[a].childs),e[a].points&&e[a].points.length>0&&o(t,e[a].points)}a(0,u.dataList),u.dataList=n})},setupData:function(){var t=this;simple().then(function(e){t.PermissionGroupsList=e.data})},handleLoadDataList:function(){},rowClassStatus:function(t){return 1===t.row.is_deleted?"disabled":""},handleCreate:function(){this.text="创建",this.$refs.editMenu.dialogFormV(),this.$refs.editMenu.handleResetForm()},handleCloseModal:function(){this.$refs.editMenu.dialogFormH()},handleUpdate:function(t){var e=t.is_point?"points":"menu";u.$refs.editMenu.changeType(e),u.$refs.editMenu.dialogFormV(),u.$refs.editMenu.hanldeEditForm(t.id)},removeUser:function(t){var e=this;this.$confirm("此操作将永久删除用户 , 是否继续?","提示",{type:"warning"}).then(function(){Object(d.d)({id:t}).then(function(n){e.$message.success("成功删除了用户!"),e.dataList.splice(t,1),e.handleLoadData(e.requestParameters)}).catch(function(t){e.$message.error("删除失败!")})}).catch(function(){e.$message.info("已取消操作!")})}},mounted:function(){this.handleLoadData()},created:function(){u=this},updated:function(){},beforeUpdate:function(){}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-container"},[n("div",{staticClass:"app-container"},[n("el-card",{attrs:{shadow:"never"}},[n("el-button",{staticClass:"filter-item fr",staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v(t._s(t.$t("table.add")))]),t._v(" "),n("tree-table",{attrs:{border:"",data:t.dataList,columns:t.columns,"tree-structure":!0,listLoading:t.listLoading,rowClassStatus:t.rowClassStatus},on:{handleUpdate:t.handleUpdate,removeUser:t.removeUser}}),t._v(" "),n(t.MenuAdd,{ref:"editMenu",tag:"component",attrs:{text:t.text,pageTitle:t.pageTitle,PermissionGroupsList:t.PermissionGroupsList,notPointDataList:t.notPointDataList,parentDataList:t.parentDataList},on:{newDataes:t.handleLoadData,handleCloseModal:t.handleCloseModal}})],1)],1)])},staticRenderFns:[]};var p=n("VU/8")(c,f,!1,function(t){n("lC7o"),n("p6OL")},"data-v-370cf2e7",null);e.default=p.exports},p6OL:function(t,e){},qAzS:function(t,e){},"qS/w":function(t,e){}});
//# sourceMappingURL=4.748099afa235b08df336.js.map