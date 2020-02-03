webpackJsonp([7,24],{SE5N:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Dd8w"),r=a.n(s),i=a("/xqb"),o={name:"usersAdd",props:["text","pageTitle","PermissionGroupsList","formBase","ruleInline"],data:function(){return{dialogFormVisible:!1}},computed:{},methods:{dialogFormV:function(){this.dialogFormVisible=!0},dialogFormH:function(){this.dialogFormVisible=!1},handleClose:function(){this.$emit("handleCloseModal")},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){e.$emit("handleCloseModal");var a=r()({},e.formBase);e.formBase.id?Object(i.e)(a).then(function(){e.$emit("newDataes",e.formBase)}):Object(i.a)(e.formBase).then(function(){e.$emit("newDataes",e.formBase)})}else e.$Message.error("*号为必填项!")})}},mounted:function(){},created:function(){},updated:function(){}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add-form"},[a("el-dialog",{attrs:{title:e.text+e.pageTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"120px"},attrs:{rules:e.ruleInline,model:e.formBase,"label-position":"left","label-width":"120px"}},[a("el-form-item",{attrs:{label:e.$t("table.username"),prop:"username"}},[a("el-input",{model:{value:e.formBase.username,callback:function(t){e.$set(e.formBase,"username",t)},expression:"formBase.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.email"),prop:"email"}},[a("el-input",{model:{value:e.formBase.email,callback:function(t){e.$set(e.formBase,"email",t)},expression:"formBase.email"}})],1),e._v(" "),void 0!=e.formBase.password?a("el-form-item",{attrs:{label:e.$t("table.paddword"),prop:"password"}},[a("el-input",{model:{value:e.formBase.password,callback:function(t){e.$set(e.formBase,"password",t)},expression:"formBase.password"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.role"),prop:"role"}},[a("el-input",{model:{value:e.formBase.role,callback:function(t){e.$set(e.formBase,"role",t)},expression:"formBase.role"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.permissionUser"),prop:"permission_group_id"}},[a("el-select",{staticClass:"filter-item",model:{value:e.formBase.permission_group_id,callback:function(t){e.$set(e.formBase,"permission_group_id",t)},expression:"formBase.permission_group_id"}},e._l(e.PermissionGroupsList,function(e){return a("el-option",{key:e.key,attrs:{value:e.id,label:e.title}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.phone"),prop:"phone"}},[a("el-input",{model:{value:e.formBase.phone,callback:function(t){e.$set(e.formBase,"phone",t)},expression:"formBase.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.introduction")}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"Please input"},model:{value:e.formBase.introduction,callback:function(t){e.$set(e.formBase,"introduction",t)},expression:"formBase.introduction"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleClose}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(o,n,!1,function(e){a("rIFq")},null,null);t.default=l.exports},e4ZG:function(e,t){},fgO8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("f0da"),r=a("/xqb"),i=a("Hed1"),o={name:"base-users",components:{UserAdd:a("SE5N").default,PageTool:i.default},data:function(){return{UserAdd:"userAdd",pageTitle:"用户",text:"",tableKey:0,deletedDate:!1,showDate:!0,dataList:[],PermissionGroupsList:[],total:null,listLoading:!0,dialogStatus:"",alertText:"",requestParameters:{page:1,pagesize:10},formData:{email:"",phone:"",username:"",password:"",role:"",permission_group_id:"",permission_group_title:"",avatar:"",introduction:""},ruleInline:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},computed:{},methods:{getList:function(e){var t=this;this.listLoading=!0,Object(r.c)(this.requestParameters).then(function(e){t.dataList=e.data.list,t.total=e.data.counts,t.alertText="共 "+t.total+" 条记录",t.listLoading=!1}).catch(function(e){t.$message.e("错了哦，这是一条错误消息")})},setupData:function(){var e=this;Object(s.e)().then(function(t){e.PermissionGroupsList=t.data})},resetForm:function(){this.$refs.requestParameters.resetFields()},handleFilter:function(){this.requestParameters.page=1,this.getList(this.requestParameters)},handleSizeChange:function(e){this.requestParameters.pagesize=e,1===this.requestParameters.page&&this.getList(this.requestParameters)},handleCurrentChange:function(e){this.requestParameters.page=e,this.getList()},handleLoadDataList:function(){this.getList()},rowClassStatus:function(e){return 1===e.row.is_deleted?(this.deletedDate=!0,this.showDate=!1,"disabled"):""},query:function(){this.formData={email:"",phone:"",username:"",role:"",password:"",permission_group_id:"",avatar:"",introduction:""}},handleCreate:function(){this.query(),this.text="创建",this.$refs.editUser.dialogFormV(),this.setupData()},handleCloseModal:function(){this.$refs.editUser.dialogFormH()},hanldeEditForm:function(e){var t=this;this.formData.id=e,this.setupData(),Object(r.b)({id:e}).then(function(e,a){var s=e.data;if(a)return a;t.formData.id=s.id,t.formData.email=s.email,t.formData.phone=s.phone,t.formData.username=s.username,t.formData.role=s.role,t.formData.password=s.password,t.formData.avatar=s.avatar,t.formData.introduction=s.introduction,t.formData.permission_group_id=s.permission_group_id,t.formData.permission_group_title=s.permission_group_title})},handleUpdate:function(e){this.query();this.text="编辑",this.$refs.editUser.dialogFormV(),this.hanldeEditForm(e)},removeUser:function(e){var t=this;this.$confirm("此操作将永久删除用户 , 是否继续?","提示",{type:"warning"}).then(function(){Object(r.d)({id:e}).then(function(a){t.$message.success("成功删除了用户!"),t.dataList.splice(e,1),t.getList(t.requestParameters)}).catch(function(e){t.$message.error("删除失败!")})}).catch(function(){t.$message.info("已取消操作!")})}},mounted:function(){},created:function(){this.getList();var e=this;document.onkeydown=function(t){13===window.event.keyCode&&e.handleFilter(this.requestParameters)}},updated:function(){}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-container"},[a("div",{staticClass:"app-container"},[a("el-card",{attrs:{shadow:"never"}},[a("el-form",{ref:"requestParameters",attrs:{model:e.requestParameters}},[a("div",{staticClass:"filter-container"},[a("el-form-item",[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("table.search")},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.requestParameters.username,callback:function(t){e.$set(e.requestParameters,"username",t)},expression:"requestParameters.username"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary"},on:{click:e.resetForm}},[e._v("重置")])],1),e._v(" "),a("el-button",{staticClass:"filter-item fr",staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(e._s(e.$t("table.addUser")))])],1)]),e._v(" "),""!==e.alertText?a("el-alert",{staticClass:"alert",attrs:{title:e.alertText,type:"info",closable:!1,"show-icon":""}}):e._e(),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.dataList,"row-class-name":e.rowClassStatus,"element-loading-text":"给我一点时间",fit:"","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{align:"center",label:e.$t("table.id")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("table.email")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.email))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.phone")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.phone))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("table.username")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.username))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("table.permissionUser")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.permission_group_title))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("table.role")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.role))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("table.actions"),"class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t.row.id)}}},[e._v(e._s(e.$t("table.edit")))]),e._v(" "),"deleted"!=t.row.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.removeUser(t.row.id)}}},[e._v(e._s(e.$t("table.delete")))]):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("PageTool",{attrs:{paginationPage:e.requestParameters.page,paginationPagesize:e.requestParameters.pagesize,total:e.total},on:{pageChange:e.handleCurrentChange,pageSizeChange:e.handleSizeChange}})],1),e._v(" "),a(e.UserAdd,{ref:"editUser",tag:"component",attrs:{formData:e.requestParameters,text:e.text,pageTitle:e.pageTitle,formBase:e.formData,ruleInline:e.ruleInline,PermissionGroupsList:e.PermissionGroupsList},on:{"update:formData":function(t){e.requestParameters=t},newDataes:e.handleLoadDataList,handleCloseModal:e.handleCloseModal}})],1)],1)])},staticRenderFns:[]};var l=a("VU/8")(o,n,!1,function(e){a("rThW"),a("e4ZG")},"data-v-7d96554f",null);t.default=l.exports},rIFq:function(e,t){},rThW:function(e,t){}});
//# sourceMappingURL=7.e434fb092aa13419fb16.js.map