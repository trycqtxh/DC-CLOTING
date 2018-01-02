webpackJsonp([90],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(250)
}
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(252)
/* template */
var __vue_template__ = __webpack_require__(253)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c8618a96"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\application\\components\\desain\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c8618a96", Component.options)
  } else {
    hotAPI.reload("data-v-c8618a96", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(38)("6479aab8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8618a96\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8618a96\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(undefined);
// imports


// module
exports.push([module.i, "\n.actions[data-v-c8618a96] {\n  width: 150px;\n}\n", ""]);

// exports


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'Index',
	data: function data() {
		return {
			url: '/api/dc/desain'
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({ 'table': 'table/table', 'token': 'token' })),
	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
		setTableVuex: 'table/setTable',
		showLoad: 'showLoading',
		hideLoading: 'hideLoading'
	}), {
		setTable: function setTable() {
			var self = this;
			self.showLoad();
			self.$http.get('' + self.url, {
				headers: {
					Authorization: 'Bearer ' + self.token
				}
			}).then(function (res) {
				self.setTableVuex(res.data).then(function () {
					self.hideLoading();
				});
			}).catch(function (error) {
				if (error.status === 401) {
					setTimeout(function () {
						self.setTable();
					}, 1000);
				}
			});
		},
		hapus: function hapus(id) {
			var self = this;
			self.$swal({
				title: "Apakah anda yakin menghapus Data Ini ?",
				text: "Data yang terhapus Selamanya",
				type: "warning",
				showCancelButton: true
			}).then(function (result) {
				if (result.value) {
					self.$http.delete(self.url + '/' + id, {
						headers: {
							Authorization: 'Bearer ' + self.token
						}
					}).then(function (res) {
						self.$swal({
							text: res.data.message,
							type: "success",
							timer: 5000
						}).then(function () {
							self.setTable();
						});
					}).catch(function (error) {
						if (error.status === 401) {
							setTimeout(function () {
								self.hapus(id);
							}, 1000);
						}
					});
				}
			});
		}
	}),
	beforeMount: function beforeMount() {
		this.setTable();
	}
});

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "breadcrumb-line" },
      [
        _c("ul", { staticClass: "breadcrumb" }, [
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: { name: "content" } } }, [
                _vm._v("Home")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "active" }, [_vm._v("Desain")])
        ]),
        _vm._v(" "),
        _c(
          "router-link",
          {
            staticClass: "btn btn-success btn-xs pull-right",
            attrs: { to: { name: "desain-tambah" } }
          },
          [_vm._v("Tambah")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      _vm._l(_vm.table, function(item) {
        return _c("div", { staticClass: "col-lg-3 col-md-6 col-sm-6" }, [
          _c("div", { staticClass: "block" }, [
            _c("div", { staticClass: "thumbnail" }, [
              _c(
                "div",
                {
                  staticStyle: {
                    position: "absolute",
                    right: "20px",
                    top: "20px"
                  }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-sm btn-danger",
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          _vm.hapus(item.id)
                        }
                      }
                    },
                    [_c("i", { staticClass: "icon-remove" })]
                  )
                ]
              ),
              _vm._v(" "),
              _c("img", { attrs: { src: item.gambar, alt: "" } }),
              _vm._v(" "),
              _c("div", { staticClass: "caption text-center" }, [
                _c("h6", [
                  _vm._v("menyukai : " + _vm._s(item.like_count) + " "),
                  _c("br"),
                  _vm._v(" tidak menyukai : " + _vm._s(item.dislike_count)),
                  _c("small", [
                    _vm._v("Dibuat oleh: " + _vm._s(item.desainable.nama))
                  ])
                ])
              ])
            ])
          ])
        ])
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c8618a96", module.exports)
  }
}

/***/ })

});