(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+BML":
/*!***************************************************************!*\
  !*** ./src/app/components/tot-header/tot-header.component.ts ***!
  \***************************************************************/
/*! exports provided: TotHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotHeaderComponent", function() { return TotHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_app_components_tot_search_tot_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web/app/components/tot-search/tot-search.component */ "TG/j");


class TotHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
TotHeaderComponent.ɵfac = function TotHeaderComponent_Factory(t) { return new (t || TotHeaderComponent)(); };
TotHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TotHeaderComponent, selectors: [["tot-header"]], decls: 5, vars: 0, consts: [["id", "header"], ["id", "logo"], [1, "wave-bar"]], template: function TotHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TOTVS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tot-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_web_app_components_tot_search_tot_search_component__WEBPACK_IMPORTED_MODULE_1__["TotSearchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3QtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /www/totvs/src/main.ts */"zUnb");


/***/ }),

/***/ "9q0p":
/*!********************************************!*\
  !*** ./src/app/store/application.state.ts ***!
  \********************************************/
/*! exports provided: applicationState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationState", function() { return applicationState; });
;
;
const applicationState = {
    searchText: '',
    searchItems: [],
};


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CgbI":
/*!**********************************************************************************************!*\
  !*** ./src/app/navigation-components/tot-result-item-page/tot-result-item-page.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TotResultItemPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotResultItemPageComponent", function() { return TotResultItemPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TotResultItemPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
TotResultItemPageComponent.ɵfac = function TotResultItemPageComponent_Factory(t) { return new (t || TotResultItemPageComponent)(); };
TotResultItemPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TotResultItemPageComponent, selectors: [["tot-result-item-page"]], decls: 2, vars: 0, template: function TotResultItemPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Item Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RvdC1yZXN1bHQtaXRlbS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJ0b3QtcmVzdWx0LWl0ZW0tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "CjjP":
/*!*********************************************!*\
  !*** ./src/app/store/reducers/functions.ts ***!
  \*********************************************/
/*! exports provided: upinsert, changeSearchText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upinsert", function() { return upinsert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSearchText", function() { return changeSearchText; });
function upinsert(state, payload) {
    return Object.assign(Object.assign({}, state), { searchItems: payload });
}
function changeSearchText(state, payload) {
    return Object.assign(Object.assign({}, state), { searchText: payload });
}


/***/ }),

/***/ "E4Bg":
/*!************************************************************!*\
  !*** ./src/app/components/tot-header/tot-header.module.ts ***!
  \************************************************************/
/*! exports provided: TotHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotHeaderModule", function() { return TotHeaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _web_app_components_tot_header_tot_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web/app/components/tot-header/tot-header.component */ "+BML");
/* harmony import */ var _web_app_components_tot_search_tot_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web/app/components/tot-search/tot-search.component */ "TG/j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class TotHeaderModule {
}
TotHeaderModule.ɵfac = function TotHeaderModule_Factory(t) { return new (t || TotHeaderModule)(); };
TotHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TotHeaderModule });
TotHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TotHeaderModule, { declarations: [_web_app_components_tot_header_tot_header_component__WEBPACK_IMPORTED_MODULE_2__["TotHeaderComponent"],
        _web_app_components_tot_search_tot_search_component__WEBPACK_IMPORTED_MODULE_3__["TotSearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"]], exports: [_web_app_components_tot_header_tot_header_component__WEBPACK_IMPORTED_MODULE_2__["TotHeaderComponent"]] }); })();


/***/ }),

/***/ "Isrs":
/*!***************************************!*\
  !*** ./src/app/tot-main.component.ts ***!
  \***************************************/
/*! exports provided: TotMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotMainComponent", function() { return TotMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_app_components_tot_header_tot_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web/app/components/tot-header/tot-header.component */ "+BML");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class TotMainComponent {
    constructor() {
        this.title = 'totvs';
    }
}
TotMainComponent.ɵfac = function TotMainComponent_Factory(t) { return new (t || TotMainComponent)(); };
TotMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TotMainComponent, selectors: [["tot-main"]], decls: 2, vars: 0, template: function TotMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tot-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_web_app_components_tot_header_tot_header_component__WEBPACK_IMPORTED_MODULE_1__["TotHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3QtbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "J32O":
/*!********************************************!*\
  !*** ./src/app/tot-main-routing.module.ts ***!
  \********************************************/
/*! exports provided: TotMainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotMainRoutingModule", function() { return TotMainRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _web_app_navigation_components_tot_search_results_tot_search_results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web/app/navigation-components/tot-search-results/tot-search-results.component */ "xY6g");
/* harmony import */ var _navigation_components_tot_result_item_page_tot_result_item_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-components/tot-result-item-page/tot-result-item-page.component */ "CgbI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _web_app_navigation_components_tot_search_results_tot_search_results_component__WEBPACK_IMPORTED_MODULE_1__["TotSearchResultsComponent"],
    },
    {
        path: 'home',
        component: _web_app_navigation_components_tot_search_results_tot_search_results_component__WEBPACK_IMPORTED_MODULE_1__["TotSearchResultsComponent"],
    },
    {
        path: 'item-screen',
        component: _navigation_components_tot_result_item_page_tot_result_item_page_component__WEBPACK_IMPORTED_MODULE_2__["TotResultItemPageComponent"],
    },
];
class TotMainRoutingModule {
}
TotMainRoutingModule.ɵfac = function TotMainRoutingModule_Factory(t) { return new (t || TotMainRoutingModule)(); };
TotMainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TotMainRoutingModule });
TotMainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TotMainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "KjWH":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tot-results-modal/tot-results-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TotResultsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotResultsModalComponent", function() { return TotResultsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TotResultsModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tem certeza que deseja ir para a tela?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TotResultsModalComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "N\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TotResultsModalComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goToItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sim");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TotResultsModalComponent {
    constructor(router) {
        this.router = router;
        this.open = false;
        this.destination = '';
    }
    ngOnInit() {
    }
    closeModal() {
        this.open = false;
    }
    goToItem() {
        this.router.navigate(['/', 'item-screen']);
    }
}
TotResultsModalComponent.ɵfac = function TotResultsModalComponent_Factory(t) { return new (t || TotResultsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TotResultsModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TotResultsModalComponent, selectors: [["tot-results-modal"]], inputs: { open: "open", destination: "destination" }, decls: 1, vars: 1, consts: [["id", "lightbox", 4, "ngIf"], ["id", "lightbox"], [1, "modal"], [3, "click"]], template: function TotResultsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TotResultsModalComponent_div_0_Template, 8, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.open);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3QtcmVzdWx0cy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "NTK7":
/*!***************************************************************************************!*\
  !*** ./src/app/navigation-components/tot-search-results/tot-search-results.module.ts ***!
  \***************************************************************************************/
/*! exports provided: TotSearchResultsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotSearchResultsModule", function() { return TotSearchResultsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _web_app_navigation_components_tot_search_results_tot_search_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web/app/navigation-components/tot-search-results/tot-search-results.component */ "xY6g");
/* harmony import */ var _web_app_components_tot_search_result_tot_search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web/app/components/tot-search-result/tot-search-result.component */ "O/Qv");
/* harmony import */ var _web_app_components_tot_results_modal_tot_results_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web/app/components/tot-results-modal/tot-results-modal.component */ "KjWH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class TotSearchResultsModule {
}
TotSearchResultsModule.ɵfac = function TotSearchResultsModule_Factory(t) { return new (t || TotSearchResultsModule)(); };
TotSearchResultsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: TotSearchResultsModule });
TotSearchResultsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TotSearchResultsModule, { declarations: [_web_app_navigation_components_tot_search_results_tot_search_results_component__WEBPACK_IMPORTED_MODULE_2__["TotSearchResultsComponent"],
        _web_app_components_tot_search_result_tot_search_result_component__WEBPACK_IMPORTED_MODULE_3__["TotSearchResultComponent"],
        _web_app_components_tot_results_modal_tot_results_modal_component__WEBPACK_IMPORTED_MODULE_4__["TotResultsModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"]], exports: [_web_app_navigation_components_tot_search_results_tot_search_results_component__WEBPACK_IMPORTED_MODULE_2__["TotSearchResultsComponent"]] }); })();


/***/ }),

/***/ "O/Qv":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tot-search-result/tot-search-result.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TotSearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotSearchResultComponent", function() { return TotSearchResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TotSearchResultComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TotSearchResultComponent_div_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.showModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ver mais");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.description);
} }
class TotSearchResultComponent {
    constructor() {
        this.idNumber = 0;
        this.title = '';
        this.description = '';
        this.icon = '';
        this.onShowModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.open = false;
        this.optionText = 'Ver';
        this.optionIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronDown"];
    }
    ngOnInit() {
    }
    showModal() {
        this.onShowModal.emit({
            id: this.idNumber,
            show: true,
        });
    }
    toogle() {
        if (this.open) {
            this.optionText = 'Ver';
            this.open = false;
            this.optionIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronDown"];
            return;
        }
        this.optionText = 'Ocultar';
        this.open = true;
        this.optionIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronUp"];
    }
}
TotSearchResultComponent.ɵfac = function TotSearchResultComponent_Factory(t) { return new (t || TotSearchResultComponent)(); };
TotSearchResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TotSearchResultComponent, selectors: [["tot-search-result"]], inputs: { idNumber: "idNumber", title: "title", description: "description", icon: "icon" }, outputs: { onShowModal: "onShowModal" }, decls: 9, vars: 6, consts: [["id", "search-result"], [1, "title"], [3, "src", "alt"], [3, "click"], [3, "icon"], ["class", "description", 4, "ngIf"], [1, "description"]], template: function TotSearchResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TotSearchResultComponent_Template_a_click_5_listener() { return ctx.toogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TotSearchResultComponent_div_8_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.optionText, " detalhe da a\u00E7\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.optionIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.open);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3Qtc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "PHOQ":
/*!******************************************************!*\
  !*** ./src/app/store/actions/application.actions.ts ***!
  \******************************************************/
/*! exports provided: SearchChange, SearchItemsFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchChange", function() { return SearchChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItemsFill", function() { return SearchItemsFill; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const SearchChange = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Search Component] Change', (payload) => ({ payload }));
const SearchItemsFill = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[SearchItems Component] Fill', (payload) => ({ payload }));


/***/ }),

/***/ "TG/j":
/*!***************************************************************!*\
  !*** ./src/app/components/tot-search/tot-search.component.ts ***!
  \***************************************************************/
/*! exports provided: TotSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotSearchComponent", function() { return TotSearchComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _web_app_store_actions_application_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web/app/store/actions/application.actions */ "PHOQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _web_app_navigation_components_tot_search_results_tot_search_results_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web/app/navigation-components/tot-search-results/tot-search-results.service */ "b985");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = ["searchField"];
const _c1 = ["wrapper"];
function TotSearchComponent_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TotSearchComponent_ul_7_li_1_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); return ctx_r5.search($event, _r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r4.title, " ");
} }
function TotSearchComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TotSearchComponent_ul_7_li_1_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.previewItems);
} }
class TotSearchComponent {
    constructor(store, router, searchResults) {
        this.store = store;
        this.router = router;
        this.searchResults = searchResults;
        this.searchText = '';
        this.previewItems = [];
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSearch"];
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const element = this.searchField.nativeElement;
        this.subscriptions.push(this.store.select((state) => state.application)
            .subscribe((state) => this.searchText = state.searchText), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(($event) => this.preview($event.target.value)), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, 'mouseup')
            .subscribe(($event) => this.clearPreview($event)));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
    clearPreview($event, force = false) {
        if (!force &&
            (!this.haveItems() ||
                $event.path.includes(this.wrapper.nativeElement))) {
            return;
        }
        this.previewItems = [];
    }
    preview(find) {
        if (find === '') {
            this.previewItems = [];
            return;
        }
        this.subscriptions.push(this.searchResults.getResults(find)
            .subscribe((items) => this.previewItems = items));
    }
    search($event, searchField) {
        $event.preventDefault();
        this.subscriptions.push(this.searchResults.getResults(searchField.value)
            .subscribe((items) => {
            this.store.dispatch(Object(_web_app_store_actions_application_actions__WEBPACK_IMPORTED_MODULE_3__["SearchItemsFill"])(items));
            this.store.dispatch(Object(_web_app_store_actions_application_actions__WEBPACK_IMPORTED_MODULE_3__["SearchChange"])(searchField.value));
        }));
        this.clearPreview($event, true);
        this.router.navigate(['/']);
    }
    haveItems() {
        return this.previewItems.length > 0;
    }
}
TotSearchComponent.ɵfac = function TotSearchComponent_Factory(t) { return new (t || TotSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_web_app_navigation_components_tot_search_results_tot_search_results_service__WEBPACK_IMPORTED_MODULE_7__["TotSearchResultsService"])); };
TotSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TotSearchComponent, selectors: [["tot-search"]], viewQuery: function TotSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
    } }, decls: 8, vars: 3, consts: [["id", "search"], ["wrapper", ""], ["method", "post"], ["type", "text", "placeholder", "Digite o nome de uma fruta", 3, "value"], ["searchField", ""], [1, "submit", 3, "click"], [3, "icon"], [4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function TotSearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TotSearchComponent_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); return ctx.search($event, _r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TotSearchComponent_ul_7_Template, 2, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.haveItems());
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3Qtc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "b985":
/*!****************************************************************************************!*\
  !*** ./src/app/navigation-components/tot-search-results/tot-search-results.service.ts ***!
  \****************************************************************************************/
/*! exports provided: TotSearchResultsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotSearchResultsService", function() { return TotSearchResultsService; });
/* harmony import */ var _web_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web/environments/environment */ "AytR");
/* harmony import */ var api_self_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/self-api */ "qNzv");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class TotSearchResultsService {
    constructor(http) {
        this.http = http;
        this.results$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    getResults(find) {
        if (_web_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(api_self_api__WEBPACK_IMPORTED_MODULE_1__["selfApi"].fetchItems({
                db: 'frutas',
                field: 'title_like',
                find,
            }));
        }
        const endpoint = _web_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + find;
        return this.http.get(endpoint);
    }
}
TotSearchResultsService.ɵfac = function TotSearchResultsService_Factory(t) { return new (t || TotSearchResultsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
TotSearchResultsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TotSearchResultsService, factory: TotSearchResultsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eLJW":
/*!*******************************************************!*\
  !*** ./src/app/store/reducers/application.reducer.ts ***!
  \*******************************************************/
/*! exports provided: applicationReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationReducer", function() { return applicationReducer; });
/* harmony import */ var _web_app_store_application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web/app/store/application.state */ "9q0p");
/* harmony import */ var _web_app_store_actions_application_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web/app/store/actions/application.actions */ "PHOQ");
/* harmony import */ var _web_app_store_reducers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web/app/store/reducers/functions */ "CjjP");



function applicationReducer(state = _web_app_store_application_state__WEBPACK_IMPORTED_MODULE_0__["applicationState"], action) {
    // console.log([state, action]);
    switch (action.type) {
        case _web_app_store_actions_application_actions__WEBPACK_IMPORTED_MODULE_1__["SearchItemsFill"].type:
            return Object(_web_app_store_reducers_functions__WEBPACK_IMPORTED_MODULE_2__["upinsert"])(state, action.payload);
        case _web_app_store_actions_application_actions__WEBPACK_IMPORTED_MODULE_1__["SearchChange"].type:
            return Object(_web_app_store_reducers_functions__WEBPACK_IMPORTED_MODULE_2__["changeSearchText"])(state, action.payload);
        default:
            return state;
    }
}


/***/ }),

/***/ "itMd":
/*!************************************!*\
  !*** ./src/app/tot-main.module.ts ***!
  \************************************/
/*! exports provided: TotMainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotMainModule", function() { return TotMainModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _web_app_store_reducers_application_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web/app/store/reducers/application.reducer */ "eLJW");
/* harmony import */ var _web_app_tot_main_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web/app/tot-main-routing.module */ "J32O");
/* harmony import */ var _web_app_tot_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web/app/tot-main.component */ "Isrs");
/* harmony import */ var _web_app_components_tot_header_tot_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web/app/components/tot-header/tot-header.module */ "E4Bg");
/* harmony import */ var _web_app_navigation_components_tot_search_results_tot_search_results_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web/app/navigation-components/tot-search-results/tot-search-results.module */ "NTK7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










class TotMainModule {
}
TotMainModule.ɵfac = function TotMainModule_Factory(t) { return new (t || TotMainModule)(); };
TotMainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: TotMainModule, bootstrap: [_web_app_tot_main_component__WEBPACK_IMPORTED_MODULE_5__["TotMainComponent"]] });
TotMainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({ application: _web_app_store_reducers_application_reducer__WEBPACK_IMPORTED_MODULE_3__["applicationReducer"] }),
            _web_app_tot_main_routing_module__WEBPACK_IMPORTED_MODULE_4__["TotMainRoutingModule"],
            _web_app_components_tot_header_tot_header_module__WEBPACK_IMPORTED_MODULE_6__["TotHeaderModule"],
            _web_app_navigation_components_tot_search_results_tot_search_results_module__WEBPACK_IMPORTED_MODULE_7__["TotSearchResultsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TotMainModule, { declarations: [_web_app_tot_main_component__WEBPACK_IMPORTED_MODULE_5__["TotMainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreRootModule"], _web_app_tot_main_routing_module__WEBPACK_IMPORTED_MODULE_4__["TotMainRoutingModule"],
        _web_app_components_tot_header_tot_header_module__WEBPACK_IMPORTED_MODULE_6__["TotHeaderModule"],
        _web_app_navigation_components_tot_search_results_tot_search_results_module__WEBPACK_IMPORTED_MODULE_7__["TotSearchResultsModule"]] }); })();


/***/ }),

/***/ "qNzv":
/*!*************************!*\
  !*** ./api/self-api.ts ***!
  \*************************/
/*! exports provided: selfApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selfApi", function() { return selfApi; });
const resources = {
    "frutas": [
        {
            "id": 1,
            "title": "morango",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 2,
            "title": "maca",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 3,
            "title": "banana",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 4,
            "title": "pera",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 5,
            "title": "ameixa",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 6,
            "title": "pessego",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 7,
            "title": "amora",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 8,
            "title": "melancia",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 9,
            "title": "melao",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 10,
            "title": "pitaya",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 11,
            "title": "uva",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 12,
            "title": "abacaxi",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 13,
            "title": "mamao",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 14,
            "title": "kiwi",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 15,
            "title": "graviola",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        }
    ]
};
class SelfApi {
    constructor() {
    }
    filter(field, value) {
        return field === value;
    }
    filterLike(field, rx) {
        return rx.test(field);
    }
    processRequest(search) {
        const collection = resources[search.db];
        const query = { field: '', value: '' };
        query.field = search.field;
        query.value = search.find;
        if (search.field.indexOf('_like') > -1) {
            query.field = search.field.split('_')[0];
            query.value = new RegExp(search.find, 'i');
        }
        return collection
            .filter((item) => {
            const fieldValue = item[query.field];
            return this.filter(fieldValue, query.value) ||
                this.filterLike(fieldValue, query.value);
        });
    }
    fetchItems(search) {
        return this.processRequest(search);
    }
}
const selfApi = new SelfApi();


/***/ }),

/***/ "xY6g":
/*!******************************************************************************************!*\
  !*** ./src/app/navigation-components/tot-search-results/tot-search-results.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TotSearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotSearchResultsComponent", function() { return TotSearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_app_navigation_components_tot_search_results_tot_search_results_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web/app/navigation-components/tot-search-results/tot-search-results.service */ "b985");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _web_app_components_tot_results_modal_tot_results_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web/app/components/tot-results-modal/tot-results-modal.component */ "KjWH");
/* harmony import */ var _web_app_components_tot_search_result_tot_search_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web/app/components/tot-search-result/tot-search-result.component */ "O/Qv");






function TotSearchResultsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Voc\u00EA ainda n\u00E3o realizou nenhuma busca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TotSearchResultsComponent_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tot-search-result", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onShowModal", function TotSearchResultsComponent_ul_2_li_1_Template_tot_search_result_onShowModal_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.showModal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idNumber", i_r4)("title", item_r3.title)("description", item_r3.description)("icon", "assets/result-icon.png");
} }
function TotSearchResultsComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TotSearchResultsComponent_ul_2_li_1_Template, 2, 4, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.foundedItems);
} }
class TotSearchResultsComponent {
    constructor(searchResults, store) {
        this.searchResults = searchResults;
        this.store = store;
        this.subscriptions = [];
        this.foundedItems = [];
        this.canShowModal = false;
        this.modalDestinationUrl = '';
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
    ngAfterViewInit() {
        this.subscriptions.push(this.store.select((state) => state.application)
            .subscribe((state) => this.foundedItems = state.searchItems));
    }
    showModal($event) {
        this.canShowModal = $event;
    }
    haveItems() {
        return this.foundedItems.length > 0;
    }
}
TotSearchResultsComponent.ɵfac = function TotSearchResultsComponent_Factory(t) { return new (t || TotSearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_web_app_navigation_components_tot_search_results_tot_search_results_service__WEBPACK_IMPORTED_MODULE_1__["TotSearchResultsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
TotSearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TotSearchResultsComponent, selectors: [["tot-search-results"]], decls: 4, vars: 4, consts: [["id", "search-results"], ["class", "clean", 4, "ngIf"], [4, "ngIf"], [3, "open", "destination"], [1, "clean"], ["src", "assets/search.png", "alt", "search-no-items-image"], [4, "ngFor", "ngForOf"], [3, "idNumber", "title", "description", "icon", "onShowModal"]], template: function TotSearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TotSearchResultsComponent_div_1_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TotSearchResultsComponent_ul_2_Template, 2, 1, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tot-results-modal", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.haveItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.haveItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", ctx.canShowModal)("destination", ctx.modalDestinationUrl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _web_app_components_tot_results_modal_tot_results_modal_component__WEBPACK_IMPORTED_MODULE_4__["TotResultsModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _web_app_components_tot_search_result_tot_search_result_component__WEBPACK_IMPORTED_MODULE_5__["TotSearchResultComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3Qtc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_app_tot_main_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web/app/tot-main.module */ "itMd");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_web_app_tot_main_module__WEBPACK_IMPORTED_MODULE_2__["TotMainModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map