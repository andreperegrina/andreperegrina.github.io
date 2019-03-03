webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");
/* harmony import */ var _components_AppSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/AppSection */ "./components/AppSection.js");
/* harmony import */ var _components_GithubRepositorySection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/GithubRepositorySection */ "./components/GithubRepositorySection.js");
















var index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(index, _Component);

  function index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(index).call(this, props));
    _this.state = {
      githubRepositories: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var urls = ['https://api.github.com/repos/andreperegrina/open-hours', 'https://api.github.com/repos/andreperegrina/core-mvc-boilerplate-api', 'https://api.github.com/repos/andreperegrina/grails-spring-security-oauth2-outlook'];

      _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(urls.map(function (u) {
        return fetch(u);
      })).then(function (responses) {
        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(responses.map(function (res) {
          return res.json();
        }));
      }).then(function (data) {
        return _this2.setState({
          githubRepositories: data
        });
      });
    }
  }, {
    key: "onLeave",
    value: function onLeave(origin, destination, direction) {
      if (destination.index < 4) {
        document.body.classList.remove("section-body" + origin.index);
        document.body.classList.add("section-body" + destination.index);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var githubRepositories = this.state.githubRepositories;
      var firstApp = {
        title: "Honda App",
        subtitle: "Get to know everything about your Honda",
        imageUrl: "/static/images/device1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " + " nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in."
      };
      var secondApp = {
        title: "Let's eat",
        subtitle: "A smart home app to control your household appliances",
        imageUrl: "/static/images/device2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " + " nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in."
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7___default.a, {
        onLeave: this.onLeave.bind(this),
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        render: function render(_ref) {
          var state = _ref.state,
              fullpageApi = _ref.fullpageApi;
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7___default.a.Wrapper, {
            sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent', 'transparent']
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "section fade-in",
            id: "section0"
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_11__["default"], null), console.log(state)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "section",
            id: "section1"
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_AppSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
            title: firstApp.title,
            subtitle: firstApp.subtitle,
            description: firstApp.description,
            imageUrl: firstApp.imageUrl,
            buttonClassName: "btn-outline-warning",
            isAnimated: state.destination && state.direction === "down" && state.destination.index === 1
          })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "section",
            id: "section2"
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_AppSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
            title: secondApp.title,
            subtitle: secondApp.subtitle,
            description: secondApp.description,
            imageUrl: secondApp.imageUrl,
            buttonClassName: "btn-outline-light",
            isAnimated: state.destination && state.direction === "down" && state.destination.index === 2
          })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "section",
            id: "section3"
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_GithubRepositorySection__WEBPACK_IMPORTED_MODULE_13__["default"], {
            githubRepositories: githubRepositories,
            isAnimated: state.destination && state.direction === "down" && state.destination.index === 3
          })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "section fp-auto-height",
            id: "section4"
          }));
        }
      }));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.a48fe1508e56cb8aec6e.hot-update.js.map