webpackJsonp(["main"],{

/***/ "./src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_list_component__ = __webpack_require__("./src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swapi_service__ = __webpack_require__("./src/app/swapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_bar_search_bar_component__ = __webpack_require__("./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_pipe__ = __webpack_require__("./src/app/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modal_modal_component__ = __webpack_require__("./src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dropdown_filter_dropdown_filter_component__ = __webpack_require__("./src/app/dropdown-filter/dropdown-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__search_bar_search_bar_component__["a" /* SearchBarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__search_pipe__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_10__modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dropdown_filter_dropdown_filter_component__["a" /* DropdownFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routes__["b" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* appRoutingProviders */], __WEBPACK_IMPORTED_MODULE_6__swapi_service__["a" /* SWAPIService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list__ = __webpack_require__("./src/app/list/index.ts");


var AppRoutes = [
    { path: 'star-wars-universe', component: __WEBPACK_IMPORTED_MODULE_1__list__["a" /* ListComponent */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(AppRoutes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "./src/app/dropdown-filter/dropdown-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<select class=\"column\" [(ngModel)]=\"dropdownFilter\" (ngModelChange)=\"filterOptionSelected.emit(dropdownFilter)\">\n\t<option value=\"all\" selected=\"\">All</option>\n\t<option *ngFor=\"let category of categories\" [ngValue]=\"category\">Filter By {{ category }}</option>\n</select>"

/***/ }),

/***/ "./src/app/dropdown-filter/dropdown-filter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/dropdown-filter/dropdown-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownFilterComponent = (function () {
    function DropdownFilterComponent() {
        this.filterOptionSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.dropdownFilter = 'all';
    }
    DropdownFilterComponent.prototype.ngOnInit = function () {
    };
    return DropdownFilterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DropdownFilterComponent.prototype, "categories", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], DropdownFilterComponent.prototype, "filterOptionSelected", void 0);
DropdownFilterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dropdown-filter',
        template: __webpack_require__("./src/app/dropdown-filter/dropdown-filter.component.html"),
        styles: [__webpack_require__("./src/app/dropdown-filter/dropdown-filter.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DropdownFilterComponent);

//# sourceMappingURL=dropdown-filter.component.js.map

/***/ }),

/***/ "./src/app/dropdown-filter/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown_filter_component__ = __webpack_require__("./src/app/dropdown-filter/dropdown-filter.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dropdown_filter_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter) {
        if (filter === 'all') {
            return items;
        }
        else {
            return items.filter(function (item) { return item.category === filter; });
        }
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "./src/app/list/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_component__ = __webpack_require__("./src/app/list/list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__list_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container container\">\n\t<div class=\"hero\">\n\t\t<h1>Star Wars Universe</h1>\n\t\t<div class=\"columns search-filter-container\">\n\t\t\t<div class=\"dropdown-filter-container column is-half\">\n\t\t\t\t<dropdown-filter class=\"columns\" [categories]=\"categories\" (filterOptionSelected)=\"filterOptionSelected($event)\"></dropdown-filter>\n\t\t\t</div>\n\t\t\t<div class=\"search-bar-container column is-half\">\n\t\t\t\t<search-bar class=\"columns\" (search)=\"search($event)\"></search-bar>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"columns is-multiline\" *ngIf=\"!loading\">\n\t\t<div class=\"column is-3\" *ngFor=\"let item of service.data | search: searchInput | filter: filterOption\">\n\t\t\t<div (click)=\"viewDetails(item)\"*ngIf=\"item !== -1\">\n\t\t\t\t<h4 class=\"grid-item-title\">{{ item?.title ? item?.title : item?.name }}</h4>\n\t\t\t\t<a href=\"{{ item?.url }}\">View Source</a>\n\t\t\t\t<p class=\"category\">Category: {{ item?.category }}</p>\n\t\t\t\t<p class=\"view-details\">View Details</p>\n\t\t\t</div>\n\t\t\t<p class=\"no-match-message\" *ngIf=\"item === -1\">These aren't the droids you're looking for. No matches.</p>\n\t\t</div>\n\t</div>\n\t<div class=\"loader\" *ngIf=\"loading\"></div>\n</div>\n<app-modal *ngIf=\"modalOpen\" [modalItem]=\"modalItem\" (modalClosed)=\"modalClosed()\"></app-modal>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swapi_service__ = __webpack_require__("./src/app/swapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_bar__ = __webpack_require__("./src/app/search-bar/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_filter__ = __webpack_require__("./src/app/dropdown-filter/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListComponent = (function () {
    function ListComponent(service, searchBar) {
        var _this = this;
        this.service = service;
        this.searchBar = searchBar;
        this.itemsPerPage = 10;
        this.searchInput = '';
        this.loadedCategories = [];
        this.modalOpen = false;
        this.loading = true;
        this.filterOption = 'all';
        this.categories = ['films', 'people', 'planets', 'species', 'starships', 'vehicles'];
        if (this.service.data === undefined) {
            this.service.data = [];
            this.categories.forEach(function (cat) { return setTimeout(function () { return _this.getData(cat); }, 1000); });
        }
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.search = function (input) {
        this.searchInput = input;
    };
    ListComponent.prototype.filterOptionSelected = function (value) {
        this.filterOption = value;
    };
    ListComponent.prototype.getData = function (category) {
        var _this = this;
        this.service.getData(category, 1)
            .subscribe(function (res) {
            if (res.next !== null) {
                var count = res.count;
                var numOfPages = Math.ceil((count - res.results.length) / _this.itemsPerPage);
                var pages_1 = Array.from({ length: numOfPages }, function (v, i) { return i + 1; });
                setTimeout(function () {
                    pages_1.map(function (i) {
                        _this.service.getData(category, i)
                            .subscribe(function (res) { return _this.handleData(res, category); }, function (err) { return console.error(err); });
                    });
                }, 1000);
            }
            else {
                _this.handleData(res, category);
            }
        }, function (err) { return console.error(err); });
    };
    ListComponent.prototype.handleData = function (data, category) {
        this.service.data = this.service.data.concat(data.results.map(function (item) {
            item.category = category;
            return item;
        }));
        this.loadedCategories.push(category);
        this.loading = Array.from(new Set(this.loadedCategories)).length === this.categories.length ? false : true;
    };
    ListComponent.prototype.viewDetails = function (item) {
        this.modalOpen = true;
        this.modalItem = item;
    };
    ListComponent.prototype.modalClosed = function () {
        this.modalOpen = false;
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("./src/app/list/list.component.html"),
        styles: [__webpack_require__("./src/app/list/list.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__search_bar__["a" /* SearchBarComponent */], __WEBPACK_IMPORTED_MODULE_4__dropdown_filter__["a" /* DropdownFilterComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__swapi_service__["a" /* SWAPIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__swapi_service__["a" /* SWAPIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__search_bar__["a" /* SearchBarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__search_bar__["a" /* SearchBarComponent */]) === "function" && _b || Object])
], ListComponent);

var _a, _b;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "./src/app/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" style=\"display:block\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-card\">\n    <header class=\"modal-card-head\">\n      <p class=\"modal-card-title\">{{ modalItem?.title ? modalItem?.title : modalItem?.name }}</p>\n      <button class=\"delete\" aria-label=\"close\" (click)=\"modalClosed.emit()\"></button>\n    </header>\n    <section class=\"modal-card-body\">\n      <p>Category: {{ modalItem?.category }}</p>\n      <div *ngIf=\"modalItem?.category === 'people'\">\n        <p>Birthday: {{ modalItem?.birth_year }}</p>\n        <p>Hair Color: {{ modalItem?.hair_color }}</p>\n        <p>Height: {{ modalItem?.height }}</p>\n        <p>Gender: {{ modalItem?.gender }}</p>\n        <p>Species: {{ getSpecies(modalItem) }}</p>\n      </div>\n      <div *ngIf=\"modalItem?.category === 'films'\">\n        <p>Director: {{ modalItem?.director }}</p>\n        <p>Episode: {{ modalItem?.episode_id }}</p>\n        <p>Releae Date: {{ modalItem?.release_date }}</p>\n      </div>\n      <div *ngIf=\"modalItem?.category === 'starships'\">\n        <p>Cargo Capacity: {{ modalItem?.cargo_capacity }}</p>\n        <p>Consumables: {{ modalItem?.consumables }}</p>\n        <p>Passengers: {{ modalItem?.passengers }}</p>\n        <p>Manufacturer: {{ modalItem?.manufacturer }}</p>\n        <p>Hyperdrive Rating: {{ modalItem?.hyperdrive_rating }}</p>\n      </div>\n      <div *ngIf=\"modalItem?.category === 'vehicles'\">\n        <p>Cargo Capacity: {{ modalItem?.cargo_capacity }}</p>\n        <p>Consumables: {{ modalItem?.consumables }}</p>\n        <p>Passengers: {{ modalItem?.passengers }}</p>\n        <p>Manufacturer: {{ modalItem?.manufacturer }}</p>\n        <p>Model: {{ modalItem?.model }}</p>\n      </div>\n      <div *ngIf=\"modalItem?.category === 'species'\">\n        <p>Average Height: {{ modalItem?.average_height }}</p>\n        <p>Average Lifespan: {{ modalItem?.average_lifespan }}</p>\n        <p>Language: {{ modalItem?.language }}</p>\n        <p>Classification: {{ modalItem?.classification }}</p>\n        <p>Skin Colors: {{ modalItem?.skin_colors }}</p>\n      </div>\n      <div *ngIf=\"modalItem?.category === 'planets'\">\n        <p>Climate: {{ modalItem?.climate }}</p>\n        <p>Diameter: {{ modalItem?.diameter }}</p>\n        <p>Orbital Period: {{ modalItem?.orbital_period }}</p>\n        <p>Population: {{ modalItem?.population }}</p>\n        <p>Terrain: {{ modalItem?.terrain }}</p>\n        <p>Rotation Period: {{ modalItem?.rotation_period }}</p>\n      </div>\n    </section>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modal/modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.modalClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    return ModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "modalItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "modalClosed", void 0);
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-modal',
        template: __webpack_require__("./src/app/modal/modal.component.html"),
        styles: [__webpack_require__("./src/app/modal/modal.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "./src/app/search-bar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_bar_component__ = __webpack_require__("./src/app/search-bar/search-bar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__search_bar_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<input class=\"column\" type=\"text\" name=\"search\" [(ngModel)]=\"searchInput\" placeholder=\"search\" (keypress)=\"keypressed($event)\">\n<button class=\"column\" class=\"is-hidden-touch\" (click)=\"search.emit(searchInput)\">Search</button>"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBarComponent = (function () {
    function SearchBarComponent() {
        this.searchInput = '';
        this.search = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.keypressed = function (event) {
        if (event.keyCode === 13) {
            this.search.emit(this.searchInput);
        }
    };
    return SearchBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SearchBarComponent.prototype, "search", void 0);
SearchBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'search-bar',
        template: __webpack_require__("./src/app/search-bar/search-bar.component.html"),
        styles: [__webpack_require__("./src/app/search-bar/search-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchBarComponent);

//# sourceMappingURL=search-bar.component.js.map

/***/ }),

/***/ "./src/app/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, search) {
        if (search === '') {
            return items;
        }
        else {
            var result = items.filter(function (item) {
                var match = false;
                for (var _i = 0, _a = Object.entries(item); _i < _a.length; _i++) {
                    var _b = _a[_i], key = _b[0], value = _b[1];
                    if ((key === 'title' || key === 'name') && value.toString().toLowerCase().includes(search.toString().toLowerCase())) {
                        match = true;
                    }
                }
                if (match) {
                    return item;
                }
            });
            if (result.length === 0) {
                return [-1];
            }
            return result;
        }
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'search'
    })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ "./src/app/swapi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SWAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SWAPIService = (function () {
    function SWAPIService(http) {
        this.http = http;
        this.apiUrl = 'https://swapi.co/api/';
    }
    SWAPIService.prototype.getData = function (endpoint, page) {
        return this.http.get("" + this.apiUrl + endpoint + "/?page=" + page)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SWAPIService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return SWAPIService;
}());
SWAPIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SWAPIService);

var _a;
//# sourceMappingURL=swapi.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map