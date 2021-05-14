"use strict";var _interopRequireDefault=require("@babel/runtime-corejs2/helpers/interopRequireDefault");exports.__esModule=true;exports.Container=Container;exports.createUrl=createUrl;exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));var _react=_interopRequireDefault(require("react"));var _utils=require("../next-server/lib/utils");exports.AppInitialProps=_utils.AppInitialProps;/**
 * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
 * This allows for keeping state between navigation, custom error handling, injecting additional data.
 */function appGetInitialProps(_x){return _appGetInitialProps.apply(this,arguments);}function _appGetInitialProps(){_appGetInitialProps=(0,_asyncToGenerator2.default)(function*(_ref){var{Component,ctx}=_ref;var pageProps=yield(0,_utils.loadGetInitialProps)(Component,ctx);return{pageProps};});return _appGetInitialProps.apply(this,arguments);}class App extends _react.default.Component{// Kept here for backwards compatibility.
// When someone ended App they could call `super.componentDidCatch`.
// @deprecated This method is no longer needed. Errors are caught at the top level
componentDidCatch(error,_errorInfo){throw error;}render(){var{router,Component,pageProps}=this.props;var url=createUrl(router);return _react.default.createElement(Component,(0,_extends2.default)({},pageProps,{url:url}));}}exports.default=App;App.origGetInitialProps=appGetInitialProps;App.getInitialProps=appGetInitialProps;var warnContainer;var warnUrl;if(process.env.NODE_ENV!=='production'){warnContainer=(0,_utils.execOnce)(()=>{console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");});warnUrl=(0,_utils.execOnce)(()=>{console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");});}// @deprecated noop for now until removal
function Container(p){if(process.env.NODE_ENV!=='production')warnContainer();return p.children;}function createUrl(router){// This is to make sure we don't references the router object at call time
var{pathname,asPath,query}=router;return{get query(){if(process.env.NODE_ENV!=='production')warnUrl();return query;},get pathname(){if(process.env.NODE_ENV!=='production')warnUrl();return pathname;},get asPath(){if(process.env.NODE_ENV!=='production')warnUrl();return asPath;},back:()=>{if(process.env.NODE_ENV!=='production')warnUrl();router.back();},push:(url,as)=>{if(process.env.NODE_ENV!=='production')warnUrl();return router.push(url,as);},pushTo:(href,as)=>{if(process.env.NODE_ENV!=='production')warnUrl();var pushRoute=as?href:'';var pushUrl=as||href;return router.push(pushRoute,pushUrl);},replace:(url,as)=>{if(process.env.NODE_ENV!=='production')warnUrl();return router.replace(url,as);},replaceTo:(href,as)=>{if(process.env.NODE_ENV!=='production')warnUrl();var replaceRoute=as?href:'';var replaceUrl=as||href;return router.replace(replaceRoute,replaceUrl);}};}