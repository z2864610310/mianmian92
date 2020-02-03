webpackJsonp([12],{"4v/2":function(t,e){},Fj8w:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("VfcS"),i={name:"DetailItem",data:function(){return{barSearch:{expandInputs:!1,expandBtnText:"",alertText:""},items:[],pagination:{total:0,pageSize:10,pageSizes:[10,20,50,80,100],currentPage:1},loading:!1}},computed:{},methods:{doQuery:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;this.pagination.currentPage=e,this.pagination.pageSize=a,this.loading=!0,this.barSearch.alertText="",this.items=[],Object(n.a)({page:e,limit:a}).then(function(e){t.items=e.data.items,t.pagination.total=e.data.total,t.barSearch.alertText="共 "+t.pagination.total+" 条记录",t.loading=!1}).catch(function(e){console.log(e),t.loading=!1})},getSummaries:function(t){var e=t.columns,a=t.data,n=[];return e.forEach(function(t,e){if(0!==e){if(a.map(function(t){t.moneyall=Number(t.number*t.price)}),4===e||5===e){var i=a.map(function(e){return Number(e[t.property])});i.every(function(t){return isNaN(t)})?n[e]="--":(n[e]=i.reduce(function(t,e){var a=Number(e);return isNaN(a)?t:t+e},0),n[e]+="")}}else n[e]="总价"}),n},handleDelete:function(t,e){var a=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"}),a.items.splice(t,1)}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},handleSizeChange:function(t){this.doQuery(1,t)},handleCurrentChange:function(t){this.doQuery(t,this.pagination.pageSize)}},created:function(){this.doQuery()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a("div",{staticClass:"app-container"},[a("el-card",{attrs:{shadow:"never"}},[a("div",{staticClass:"box border"},[a("div",{staticClass:"title"},[a("span",[t._v("退款申请")])]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("label",[t._v("取货单号：")]),t._v("\t1000000000\n            ")])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("label",[t._v("状态：")]),t._v("已取货\n            ")])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("label",[t._v("销售单号：")]),t._v("123456789\n            ")])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("label",[t._v("子订单：")]),t._v("123456789\n            ")])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple-light"})]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"})])],1)],1),t._v(" "),a("div",{staticClass:"box border"},[a("div",{staticClass:"title"},[a("span",[t._v("用户信息")])]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("label",[t._v("用户姓名：")]),t._v("小编\n            ")])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("label",[t._v("联系电话：")]),t._v("15698789655\n            ")])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("label",[t._v("常用快递：")]),t._v("顺丰快递\n            ")])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("label",[t._v("取货地址：")]),t._v("北京市海淀区西三旗\n            ")])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("label",[t._v("备注：")]),a("span",[t._v("暂无")])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"})])],1)],1),t._v(" "),a("div",{staticClass:"box border"},[a("div",{staticClass:"title"},[a("span",[t._v("退货商品")])]),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.items,"summary-method":t.getSummaries,"show-summary":""}},[a("el-table-column",{attrs:{prop:"id",label:"商品编号",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"barcode",label:"商品条码",width:"260"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"单价",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"number",label:"数量（件）",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"moneyall",label:"金额",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{"current-page":t.pagination.currentPage,"page-sizes":t.pagination.pageSizes,"page-size":t.pagination.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("div",{staticClass:"box border"},[a("div",{staticClass:"title"},[a("span",[t._v("退货商品")])]),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.items}},[a("el-table-column",{attrs:{prop:"display_time",label:"时间",width:"260"}}),t._v(" "),a("el-table-column",{attrs:{prop:"step",label:"当前进度"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",width:"260"},scopedSlots:t._u([{key:"default",fn:function(e){return["进行中"===e.row.status?a("i",{staticClass:"icon iconBlue"}):t._e(),t._v(" "),"成功"===e.row.status?a("i",{staticClass:"icon iconGreen"}):t._e(),t._v(" "),"失败"===e.row.status?a("i",{staticClass:"icon iconRed"}):t._e(),t._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.status))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"nameId",label:"操作员ID",width:"260"}}),t._v(" "),a("el-table-column",{attrs:{prop:"time",label:"耗时",width:"260"}})],1),t._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{"current-page":t.pagination.currentPage,"page-sizes":t.pagination.pageSizes,"page-size":t.pagination.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])],1)])},staticRenderFns:[]};var s=a("VU/8")(i,l,!1,function(t){a("4v/2"),a("PaIV")},"data-v-78dca7e0",null);e.default=s.exports},PaIV:function(t,e){},VfcS:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("vLgD"),i=function(t){return Object(n.a)("/details/list","get",t)}}});
//# sourceMappingURL=12.82b8f90b9458f85ff950.js.map