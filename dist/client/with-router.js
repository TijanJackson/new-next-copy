"use strict";var _interopRequireDefault=require("@babel/runtime-corejs2/helpers/interopRequireDefault");exports.__esModule=true;exports.default=withRouter;var _extends2=_interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));var _react=_interopRequireDefault(require("react"));var _router=require("./router");function withRouter(ComposedComponent){function WithRouterWrapper(props){return _react.default.createElement(ComposedComponent,(0,_extends2.default)({router:(0,_router.useRouter)()},props));}WithRouterWrapper.getInitialProps=ComposedComponent.getInitialProps// This is needed to allow checking for custom getInitialProps in _app
;WithRouterWrapper.origGetInitialProps=ComposedComponent.origGetInitialProps;if(process.env.NODE_ENV!=='production'){var name=ComposedComponent.displayName||ComposedComponent.name||'Unknown';WithRouterWrapper.displayName="withRouter("+name+")";}return WithRouterWrapper;}