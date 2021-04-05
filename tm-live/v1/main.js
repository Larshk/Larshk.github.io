(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\trackmania\tm-live\src\main.ts */"zUnb");


/***/ }),

/***/ "8xUC":
/*!*******************************************************!*\
  !*** ./src/app/blocks/racetime/racetime.component.ts ***!
  \*******************************************************/
/*! exports provided: RacetimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RacetimeComponent", function() { return RacetimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pipes_race_timer_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/race-timer-pipe */ "ZNFS");


class RacetimeComponent {
    constructor() { }
    ngOnInit() {
    }
}
RacetimeComponent.ɵfac = function RacetimeComponent_Factory(t) { return new (t || RacetimeComponent)(); };
RacetimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RacetimeComponent, selectors: [["app-racetime"]], inputs: { milliseconds: "milliseconds" }, decls: 5, vars: 3, consts: [[1, "live-data-block"]], template: function RacetimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "raceTimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Race timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.milliseconds));
    } }, pipes: [_pipes_race_timer_pipe__WEBPACK_IMPORTED_MODULE_1__["RaceTimerPipe"]], styles: ["p[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhY2V0aW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InJhY2V0aW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });


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
    wsEndpoint: 'ws://localhost:1337'
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

/***/ "DMQw":
/*!***********************************************************************!*\
  !*** ./src/app/services/local-openplanet/local-openplanet.service.ts ***!
  \***********************************************************************/
/*! exports provided: WS_ENDPOINT, LocalOpenplanetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WS_ENDPOINT", function() { return WS_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalOpenplanetService", function() { return LocalOpenplanetService; });
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/webSocket */ "3uOa");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





const WS_ENDPOINT = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].wsEndpoint;
const RECONNECT_INTERVAL = 5000;
class LocalOpenplanetService {
    constructor() {
        this.messagesSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    connect(cfg = { reconnect: false }) {
        if (!this.socket$ || this.socket$.closed) {
            this.socket$ = this.getNewWebSocket();
            this.socket$.subscribe(msg => this.messagesSubject$.next(msg), // Called whenever there is a message from the server.
            // Called whenever there is a message from the server.
            err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
            () => console.log('complete') // Called when connection is closed (for whatever reason).
            );
        }
    }
    reconnect(observable) {
        return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(errors => errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(val => console.log('[Data Service] Try to reconnect', val)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delayWhen"])(_ => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(RECONNECT_INTERVAL)))));
    }
    getNewWebSocket() {
        return Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_0__["webSocket"])({
            url: WS_ENDPOINT,
            closeObserver: {
                next: () => {
                    console.log('[DataService]: connection closed');
                    this.socket$ = undefined;
                    this.connect({ reconnect: true });
                }
            }
        });
    }
    sendMessage(msg) {
        this.socket$.next(msg);
    }
    close() {
        this.socket$.complete();
    }
}
LocalOpenplanetService.ɵfac = function LocalOpenplanetService_Factory(t) { return new (t || LocalOpenplanetService)(); };
LocalOpenplanetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LocalOpenplanetService, factory: LocalOpenplanetService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QxtA":
/*!*************************************************************!*\
  !*** ./src/app/blocks/speedometer/speedometer.component.ts ***!
  \*************************************************************/
/*! exports provided: SpeedometerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedometerComponent", function() { return SpeedometerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");


class SpeedometerComponent {
    constructor() {
        this.view = [400, 250];
        this.unit = "km/h";
        this.legend = false;
        this.legendPosition = 'below';
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        this.chartData = [];
    }
    ngOnInit() {
        this.ngOnChanges();
    }
    ngOnChanges() {
        this.chartData = [
            {
                name: 'Speed',
                value: this.numberValue
            }
        ];
    }
    formatValue(value) {
        return "" + Math.floor(value);
    }
}
SpeedometerComponent.ɵfac = function SpeedometerComponent_Factory(t) { return new (t || SpeedometerComponent)(); };
SpeedometerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpeedometerComponent, selectors: [["app-speedometer"]], inputs: { numberValue: "numberValue" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 9, consts: [[3, "view", "scheme", "results", "legend", "legendPosition", "animations", "max", "units", "valueFormatting"]], template: function SpeedometerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-charts-gauge", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Current speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.chartData)("legend", ctx.legend)("legendPosition", ctx.legendPosition)("animations", false)("max", 1000)("units", ctx.unit)("valueFormatting", ctx.formatValue);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__["GaugeComponent"]], styles: ["p[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWVkb21ldGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNwZWVkb21ldGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_local_openplanet_local_openplanet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/local-openplanet/local-openplanet.service */ "DMQw");
/* harmony import */ var _live_race_live_race_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-race/live-race.component */ "UGgW");



class AppComponent {
    constructor(localOpenplanetService) {
        this.localOpenplanetService = localOpenplanetService;
        this.title = 'tm-live';
        this.localOpenplanetService.connect();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_openplanet_local_openplanet_service__WEBPACK_IMPORTED_MODULE_1__["LocalOpenplanetService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-live-race");
    } }, directives: [_live_race_live_race_component__WEBPACK_IMPORTED_MODULE_2__["LiveRaceComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "UGgW":
/*!**************************************************!*\
  !*** ./src/app/live-race/live-race.component.ts ***!
  \**************************************************/
/*! exports provided: LiveRaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveRaceComponent", function() { return LiveRaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_local_openplanet_local_openplanet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/local-openplanet/local-openplanet.service */ "DMQw");
/* harmony import */ var _blocks_speedometer_speedometer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/speedometer/speedometer.component */ "QxtA");
/* harmony import */ var _blocks_gearmeter_gearmeter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/gearmeter/gearmeter.component */ "XTvd");
/* harmony import */ var _blocks_racetime_racetime_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/racetime/racetime.component */ "8xUC");





class LiveRaceComponent {
    constructor(localOpenplanetService) {
        this.localOpenplanetService = localOpenplanetService;
        this.speed = 0;
        this.gear = 0;
        this.racetime = 0;
        this.localOpenplanetService.connect();
    }
    ngOnInit() {
        this.liveData$ = this.localOpenplanetService.messagesSubject$.subscribe(msg => {
            this.speed = msg.speed;
            this.gear = msg.gear;
            this.racetime = msg.racetime;
        });
    }
    ngOnDestroy() {
        this.liveData$.unsubscribe();
    }
}
LiveRaceComponent.ɵfac = function LiveRaceComponent_Factory(t) { return new (t || LiveRaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_openplanet_local_openplanet_service__WEBPACK_IMPORTED_MODULE_1__["LocalOpenplanetService"])); };
LiveRaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiveRaceComponent, selectors: [["app-live-race"]], decls: 4, vars: 3, consts: [[1, "flexed"], [3, "numberValue"], [3, "milliseconds"]], template: function LiveRaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-speedometer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-gearmeter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-racetime", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("numberValue", ctx.speed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("numberValue", ctx.gear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("milliseconds", ctx.racetime);
    } }, directives: [_blocks_speedometer_speedometer_component__WEBPACK_IMPORTED_MODULE_2__["SpeedometerComponent"], _blocks_gearmeter_gearmeter_component__WEBPACK_IMPORTED_MODULE_3__["GearmeterComponent"], _blocks_racetime_racetime_component__WEBPACK_IMPORTED_MODULE_4__["RacetimeComponent"]], styles: [".flexed[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpdmUtcmFjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMkJBQTJCO0FBQy9CIiwiZmlsZSI6ImxpdmUtcmFjZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXhlZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "XTvd":
/*!*********************************************************!*\
  !*** ./src/app/blocks/gearmeter/gearmeter.component.ts ***!
  \*********************************************************/
/*! exports provided: GearmeterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GearmeterComponent", function() { return GearmeterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");


class GearmeterComponent {
    constructor() {
        this.view = [400, 250];
        this.unit = "";
        this.legend = false;
        this.legendPosition = 'below';
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        this.chartData = [];
    }
    ngOnInit() {
        this.ngOnChanges();
    }
    ngOnChanges() {
        this.chartData = [
            {
                name: 'Gear',
                value: this.numberValue
            }
        ];
    }
}
GearmeterComponent.ɵfac = function GearmeterComponent_Factory(t) { return new (t || GearmeterComponent)(); };
GearmeterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GearmeterComponent, selectors: [["app-gearmeter"]], inputs: { numberValue: "numberValue" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 7, consts: [[3, "view", "scheme", "value", "units", "animations", "min", "max"]], template: function GearmeterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-charts-linear-gauge", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Current gear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("value", ctx.numberValue)("units", ctx.unit)("animations", false)("min", 1)("max", 5);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__["LinearGaugeComponent"]], styles: ["p[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlYXJtZXRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJnZWFybWV0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _live_race_live_race_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./live-race/live-race.component */ "UGgW");
/* harmony import */ var _blocks_speedometer_speedometer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/speedometer/speedometer.component */ "QxtA");
/* harmony import */ var _blocks_gearmeter_gearmeter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/gearmeter/gearmeter.component */ "XTvd");
/* harmony import */ var _blocks_racetime_racetime_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/racetime/racetime.component */ "8xUC");
/* harmony import */ var _pipes_race_timer_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/race-timer-pipe */ "ZNFS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__["NgxChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pipes_race_timer_pipe__WEBPACK_IMPORTED_MODULE_8__["RaceTimerPipe"],
        _live_race_live_race_component__WEBPACK_IMPORTED_MODULE_4__["LiveRaceComponent"],
        _blocks_speedometer_speedometer_component__WEBPACK_IMPORTED_MODULE_5__["SpeedometerComponent"],
        _blocks_gearmeter_gearmeter_component__WEBPACK_IMPORTED_MODULE_6__["GearmeterComponent"],
        _blocks_racetime_racetime_component__WEBPACK_IMPORTED_MODULE_7__["RacetimeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__["NgxChartsModule"]] }); })();


/***/ }),

/***/ "ZNFS":
/*!******************************************!*\
  !*** ./src/app/pipes/race-timer-pipe.ts ***!
  \******************************************/
/*! exports provided: RaceTimerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceTimerPipe", function() { return RaceTimerPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RaceTimerPipe {
    transform(value) {
        let minutes = Math.floor(value / 60000);
        let seconds = Math.floor(value % 60000 / 1000);
        let milliseconds = Math.floor(value % 1000);
        return this.pad(minutes, 2) + ":" + this.pad(seconds, 2) + "." + this.pad(milliseconds, 3);
    }
    pad(num, size) {
        let s = num + "";
        while (s.length < size)
            s = "0" + s;
        return s;
    }
}
RaceTimerPipe.ɵfac = function RaceTimerPipe_Factory(t) { return new (t || RaceTimerPipe)(); };
RaceTimerPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "raceTimer", type: RaceTimerPipe, pure: true });


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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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