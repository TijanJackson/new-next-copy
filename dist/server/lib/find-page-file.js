"use strict";exports.__esModule=true;exports.findPageFile=findPageFile;var _path=require("path");var _chalk=_interopRequireDefault(require("chalk"));var _isWriteable=require("../../build/is-writeable");var _log=require("../../build/output/log");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}async function findPageFile(rootDir,normalizedPagePath,pageExtensions){let foundPagePaths=[];for(const extension of pageExtensions){const relativePagePath=`${normalizedPagePath}.${extension}`;const pagePath=(0,_path.join)(rootDir,relativePagePath);if(await(0,_isWriteable.isWriteable)(pagePath)){foundPagePaths.push(relativePagePath);}const relativePagePathWithIndex=(0,_path.join)(normalizedPagePath,`index.${extension}`);const pagePathWithIndex=(0,_path.join)(rootDir,relativePagePathWithIndex);if(await(0,_isWriteable.isWriteable)(pagePathWithIndex)){foundPagePaths.push(relativePagePathWithIndex);}}if(foundPagePaths.length<1){return null;}if(foundPagePaths.length>1){(0,_log.warn)(`Duplicate page detected. ${_chalk.default.cyan((0,_path.join)('pages',foundPagePaths[0]))} and ${_chalk.default.cyan((0,_path.join)('pages',foundPagePaths[1]))} both resolve to ${_chalk.default.cyan(normalizedPagePath)}.`);}return foundPagePaths[0];}