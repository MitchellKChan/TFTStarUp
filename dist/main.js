/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// Declare object for the page's body\nconst body = document.querySelector(\"body\");\n\n// Declare objects for the top section, which contains the title, timer,\n// nav links, and settings\nconst title = document.createElement(\"div\");\nconst timer = document.createElement(\"div\");\nconst navLinks = document.createElement(\"div\");\nconst settings = document.createElement(\"div\");\nconst topSection = document.createElement(\"div\");\nconst topRight = document.createElement(\"div\");\n\n// Declare objects for the bottom section, which contains the\n// bench and shop\nconst bench = document.createElement(\"div\");\nconst shop = document.createElement(\"div\");\nconst bottomSection = document.createElement(\"div\");\n\n// set inner text and classess for top section objects\ntitle.innerText = \"TFT Star Up\";\ntitle.classList.add(\"title\", \"section\");\ntimer.innerText = \"timer\";\ntimer.classList.add(\"timer\", \"section\");\nnavLinks.innerText = \"navLinks\";\nsettings.innerText = \"settings\";\nsettings.classList.add(\"settings\");\ntopRight.append(navLinks, settings);\ntopRight.classList.add(\"top-right\", \"section\");\ntopSection.classList.add(\"top\");\ntopSection.append(title, timer, topRight);\n\n// set inner text and classess for top section objects\nbench.innerText = \"bench\";\nbench.classList.add(\"bench\", \"section\");\nshop.innerText = \"shop\";\nshop.classList.add(\"shop\", \"section\");\nbottomSection.classList.add(\"bottom\");\nbottomSection.append(bench, shop);\nbody.append(topSection, bottomSection);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50IiwidGltZXIiLCJuYXZMaW5rcyIsInNldHRpbmdzIiwidG9wU2VjdGlvbiIsInRvcFJpZ2h0IiwiYmVuY2giLCJzaG9wIiwiYm90dG9tU2VjdGlvbiIsImlubmVyVGV4dCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGZ0c3RhcnVwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVjbGFyZSBvYmplY3QgZm9yIHRoZSBwYWdlJ3MgYm9keVxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4vLyBEZWNsYXJlIG9iamVjdHMgZm9yIHRoZSB0b3Agc2VjdGlvbiwgd2hpY2ggY29udGFpbnMgdGhlIHRpdGxlLCB0aW1lcixcbi8vIG5hdiBsaW5rcywgYW5kIHNldHRpbmdzXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0b3BTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRvcFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gRGVjbGFyZSBvYmplY3RzIGZvciB0aGUgYm90dG9tIHNlY3Rpb24sIHdoaWNoIGNvbnRhaW5zIHRoZVxuLy8gYmVuY2ggYW5kIHNob3BcbmNvbnN0IGJlbmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHNob3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgYm90dG9tU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vIHNldCBpbm5lciB0ZXh0IGFuZCBjbGFzc2VzcyBmb3IgdG9wIHNlY3Rpb24gb2JqZWN0c1xudGl0bGUuaW5uZXJUZXh0ID0gXCJURlQgU3RhciBVcFwiO1xudGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIsIFwic2VjdGlvblwiKTtcblxudGltZXIuaW5uZXJUZXh0ID0gXCJ0aW1lclwiO1xudGltZXIuY2xhc3NMaXN0LmFkZChcInRpbWVyXCIsIFwic2VjdGlvblwiKTtcblxubmF2TGlua3MuaW5uZXJUZXh0ID0gXCJuYXZMaW5rc1wiO1xuXG5zZXR0aW5ncy5pbm5lclRleHQgPSBcInNldHRpbmdzXCI7XG5zZXR0aW5ncy5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3NcIik7XG5cbnRvcFJpZ2h0LmFwcGVuZChuYXZMaW5rcywgc2V0dGluZ3MpO1xudG9wUmlnaHQuY2xhc3NMaXN0LmFkZChcInRvcC1yaWdodFwiLCBcInNlY3Rpb25cIiwpO1xuXG50b3BTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b3BcIik7XG50b3BTZWN0aW9uLmFwcGVuZCh0aXRsZSwgdGltZXIsIHRvcFJpZ2h0KTtcblxuLy8gc2V0IGlubmVyIHRleHQgYW5kIGNsYXNzZXNzIGZvciB0b3Agc2VjdGlvbiBvYmplY3RzXG5iZW5jaC5pbm5lclRleHQgPSBcImJlbmNoXCI7XG5iZW5jaC5jbGFzc0xpc3QuYWRkKFwiYmVuY2hcIiwgXCJzZWN0aW9uXCIpO1xuXG5zaG9wLmlubmVyVGV4dCA9IFwic2hvcFwiO1xuc2hvcC5jbGFzc0xpc3QuYWRkKFwic2hvcFwiLCBcInNlY3Rpb25cIik7XG5cbmJvdHRvbVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImJvdHRvbVwiKTtcbmJvdHRvbVNlY3Rpb24uYXBwZW5kKGJlbmNoLCBzaG9wKTtcblxuYm9keS5hcHBlbmQodG9wU2VjdGlvbiwgYm90dG9tU2VjdGlvbik7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsTUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7O0FBRTNDO0FBQ0E7QUFDQSxNQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEtBQUssQ0FBQztBQUMzQyxNQUFNQyxLQUFLLEdBQUdKLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEtBQUssQ0FBQztBQUMzQyxNQUFNRSxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEtBQUssQ0FBQztBQUM5QyxNQUFNRyxRQUFRLEdBQUdOLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEtBQUssQ0FBQztBQUM5QyxNQUFNSSxVQUFVLEdBQUdQLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEtBQUssQ0FBQztBQUNoRCxNQUFNSyxRQUFRLEdBQUdSLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEtBQUssQ0FBQzs7QUFFOUM7QUFDQTtBQUNBLE1BQU1NLEtBQUssR0FBR1QsUUFBUSxDQUFDRyxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQzNDLE1BQU1PLElBQUksR0FBR1YsUUFBUSxDQUFDRyxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQzFDLE1BQU1RLGFBQWEsR0FBR1gsUUFBUSxDQUFDRyxhQUFhLENBQUMsS0FBSyxDQUFDOztBQUVuRDtBQUNBRCxLQUFLLENBQUNVLFNBQVMsR0FBRyxhQUFhO0FBQy9CVixLQUFLLENBQUNXLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7QUFFdkNWLEtBQUssQ0FBQ1EsU0FBUyxHQUFHLE9BQU87QUFDekJSLEtBQUssQ0FBQ1MsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztBQUV2Q1QsUUFBUSxDQUFDTyxTQUFTLEdBQUcsVUFBVTtBQUUvQk4sUUFBUSxDQUFDTSxTQUFTLEdBQUcsVUFBVTtBQUMvQk4sUUFBUSxDQUFDTyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFFbENOLFFBQVEsQ0FBQ08sTUFBTSxDQUFDVixRQUFRLEVBQUVDLFFBQVEsQ0FBQztBQUNuQ0UsUUFBUSxDQUFDSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBVSxDQUFDO0FBRS9DUCxVQUFVLENBQUNNLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUMvQlAsVUFBVSxDQUFDUSxNQUFNLENBQUNiLEtBQUssRUFBRUUsS0FBSyxFQUFFSSxRQUFRLENBQUM7O0FBRXpDO0FBQ0FDLEtBQUssQ0FBQ0csU0FBUyxHQUFHLE9BQU87QUFDekJILEtBQUssQ0FBQ0ksU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztBQUV2Q0osSUFBSSxDQUFDRSxTQUFTLEdBQUcsTUFBTTtBQUN2QkYsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDO0FBRXJDSCxhQUFhLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNyQ0gsYUFBYSxDQUFDSSxNQUFNLENBQUNOLEtBQUssRUFBRUMsSUFBSSxDQUFDO0FBRWpDWCxJQUFJLENBQUNnQixNQUFNLENBQUNSLFVBQVUsRUFBRUksYUFBYSxDQUFDIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZnRzdGFydXAvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;