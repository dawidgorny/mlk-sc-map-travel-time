/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return create; });
/* harmony import */ var _src_frontend_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/frontend-app */ "./src/frontend-app.js");


const createApp = __webpack_require__(/*! dg-utils/frontend/create-app */ "./node_modules/dg-utils/frontend/create-app.js");

const lang = __webpack_require__(/*! ./lang */ "./lang.js");

function create (mapContainer, mapStyle, mapboxAccessToken, translation, assetsPathPrefix = '', options) {
  let transl = translation || lang['pl'];
  const frontend = new _src_frontend_app__WEBPACK_IMPORTED_MODULE_0__["default"](mapContainer, mapStyle, mapboxAccessToken, transl, assetsPathPrefix, options);
  const app = createApp(frontend);
  return frontend;
}

if (window) {
  window.travelTimeMap = { create, lang };
}


/***/ }),

/***/ "./lang.js":
/*!*****************!*\
  !*** ./lang.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

const pl = {
  'destinations': {
    '222994523564': 'Baildon',
    '_mariacka': 'Mariacka',
    '536905763044408': 'Muchowiec',
    '_park_slaski_pola_marsowe': 'Park Śląski',
    '199178653443636': 'plac Grunwaldzki',
    '137853539570833': 'plac Rady Europy',
    '312939122099638': 'plac Rostka',
    '179603073902': 'plac Sejmu Śląskiego',
    '_filharmonia_slaska': 'plac Wolności',
    '105251459590505': 'Raciborska',
    '202111499818994': 'rondo Ziętka',
    '201695066515967': 'Rynek',
    '334195793031': 'Strefa Kultury',
    '119773141689786': 'Park Trzy Stawy'
  },
  'tooltip.districtLabel': '',
  'tooltip.addressCountLabel': 'adresy w tym obszarze: ',
  'tooltip.durationLabel': 'czas dojazdu: ',
  'tooltip.diffDescriptionEqual': 'Identyczny czas przejazdu komunikacją publiczną i samochodem (__transitDurationText__)',
  'tooltip.diffDescriptionFasterTransit': '<strong>__durationText__ szybciej</strong> komunikacją publiczną (__transitDurationText__) niż samochodem (__drivingDurationText__)',
  'tooltip.diffDescriptionSlowerTransit': '<strong>__durationText__ wolniej</strong> komunikacją publiczną (__transitDurationText__) niż samochodem (__drivingDurationText__)'
};

const en = {
  'destinations': {
    '222994523564': 'Baildon',
    '_mariacka': 'Mariacka Street',
    '536905763044408': 'Muchowiec Park',
    '_park_slaski_pola_marsowe': 'Silesian Park',
    '199178653443636': 'Grunwaldzki Square',
    '137853539570833': 'Rady Europy Square',
    '312939122099638': 'Rostek Square',
    '179603073902': 'Sejmu Śląskiego Square',
    '_filharmonia_slaska': 'Wolności Square',
    '105251459590505': 'Raciborska Street',
    '202111499818994': 'Ziętek Roundabout',
    '201695066515967': 'Main Square',
    '334195793031': 'Culture Zone',
    '119773141689786': 'Trzy Stawy Park'
  },
  'tooltip.districtLabel': 'district: ',
  'tooltip.addressCountLabel': 'address points: ',
  'tooltip.durationLabel': 'travel time: ',
  'tooltip.diffDescriptionEqual': 'identical journey time by public transport and by car (__transitDurationText__)',
  'tooltip.diffDescriptionFasterTransit': '<strong>__durationText__ faster</strong> by public transport (__transitDurationText__) than by car (__drivingDurationText__)',
  'tooltip.diffDescriptionSlowerTransit': '<strong>__durationText__ slower</strong> by public transport (__transitDurationText__) than by car (__drivingDurationText__)'
};

module.exports = { pl, en };


/***/ }),

/***/ "./node_modules/@thi.ng/checks/is-arraylike.js":
/*!*****************************************************!*\
  !*** ./node_modules/@thi.ng/checks/is-arraylike.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isArrayLike(x) {
    return (x != null && typeof x !== "function" && x.length !== undefined);
}
exports.isArrayLike = isArrayLike;


/***/ }),

/***/ "./node_modules/@thi.ng/compare/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@thi.ng/compare/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function compare(a, b) {
    if (a === b) {
        return 0;
    }
    if (a == null) {
        return b == null ? 0 : -1;
    }
    if (b == null) {
        return a == null ? 0 : 1;
    }
    if (typeof a.compare === "function") {
        return a.compare(b);
    }
    if (typeof b.compare === "function") {
        return -b.compare(a);
    }
    return a < b ? -1 : a > b ? 1 : 0;
}
exports.compare = compare;


/***/ }),

/***/ "./node_modules/@thi.ng/dcons/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@thi.ng/dcons/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const is_arraylike_1 = __webpack_require__(/*! @thi.ng/checks/is-arraylike */ "./node_modules/@thi.ng/checks/is-arraylike.js");
const compare_1 = __webpack_require__(/*! @thi.ng/compare */ "./node_modules/@thi.ng/compare/index.js");
const equiv_1 = __webpack_require__(/*! @thi.ng/equiv */ "./node_modules/@thi.ng/equiv/index.js");
const illegal_arguments_1 = __webpack_require__(/*! @thi.ng/errors/illegal-arguments */ "./node_modules/@thi.ng/errors/illegal-arguments.js");
const illegal_state_1 = __webpack_require__(/*! @thi.ng/errors/illegal-state */ "./node_modules/@thi.ng/errors/illegal-state.js");
const reduced_1 = __webpack_require__(/*! @thi.ng/transducers/reduced */ "./node_modules/@thi.ng/transducers/reduced.js");
class DCons {
    constructor(src) {
        this._length = 0;
        if (src) {
            this.into(src);
        }
    }
    get length() {
        return this._length;
    }
    copy() {
        return new DCons(this);
    }
    empty() {
        return new DCons();
    }
    clear() {
        this.release();
    }
    release() {
        let cell = this.head, next;
        while (cell) {
            next = cell.next;
            delete cell.value;
            delete cell.prev;
            delete cell.next;
            cell = next;
        }
        delete this.head;
        delete this.tail;
        this._length = 0;
        return true;
    }
    compare(o) {
        if (this._length < o._length) {
            return -1;
        }
        else if (this._length > o._length) {
            return 1;
        }
        else {
            let ca = this.head;
            let cb = o.head;
            let res = 0;
            while (ca && res == 0) {
                res = compare_1.compare(ca.value, cb.value);
                ca = ca.next;
                cb = cb.next;
            }
            return res;
        }
    }
    equiv(o) {
        if ((o instanceof DCons || is_arraylike_1.isArrayLike(o)) && this._length === o.length) {
            let cell = this.head;
            for (let x of o) {
                if (!equiv_1.equiv(cell.value, x)) {
                    return false;
                }
                cell = cell.next;
            }
            return true;
        }
        return false;
    }
    *[Symbol.iterator]() {
        let cell = this.head;
        while (cell) {
            yield cell.value;
            cell = cell.next;
        }
    }
    *cycle() {
        while (true) {
            yield* this;
        }
    }
    $reduce(rfn, acc) {
        let cell = this.head;
        while (cell && !reduced_1.isReduced(acc)) {
            acc = rfn(acc, cell.value);
            cell = cell.next;
        }
        return acc;
    }
    drop() {
        const cell = this.head;
        if (cell) {
            this.head = cell.next;
            if (this.head) {
                delete this.head.prev;
            }
            else {
                delete this.tail;
            }
            this._length--;
            return cell.value;
        }
    }
    cons(value) {
        const cell = { value, next: this.head };
        if (this.head) {
            this.head.prev = cell;
        }
        else {
            this.tail = cell;
        }
        this.head = cell;
        this._length++;
        return this;
    }
    insertBefore(cell, value) {
        if (!cell) {
            illegal_arguments_1.illegalArgs("cell is undefined");
        }
        const newCell = { value, next: cell, prev: cell.prev };
        if (cell.prev) {
            cell.prev.next = newCell;
        }
        else {
            this.head = newCell;
        }
        cell.prev = newCell;
        this._length++;
        return this;
    }
    insertAfter(cell, value) {
        if (!cell) {
            illegal_arguments_1.illegalArgs("cell is undefined");
        }
        const newCell = { value, next: cell.next, prev: cell };
        if (cell.next) {
            cell.next.prev = newCell;
        }
        else {
            this.tail = newCell;
        }
        cell.next = newCell;
        this._length++;
        return this;
    }
    insertBeforeNth(n, x) {
        if (n < 0) {
            n += this._length;
        }
        if (n <= 0) {
            return this.cons(x);
        }
        else {
            return this.insertBefore(this.nthCell(n), x);
        }
    }
    insertAfterNth(n, x) {
        if (n < 0) {
            n += this._length;
        }
        if (n >= this._length - 1) {
            return this.push(x);
        }
        else {
            return this.insertAfter(this.nthCell(n), x);
        }
    }
    insertSorted(value, cmp) {
        cmp = cmp || compare_1.compare;
        let cell = this.head;
        while (cell) {
            if (cmp(value, cell.value) <= 0) {
                return this.insertBefore(cell, value);
            }
            cell = cell.next;
        }
        return this.push(value);
    }
    find(value) {
        let cell = this.head;
        while (cell) {
            if (cell.value === value) {
                return cell;
            }
            cell = cell.next;
        }
    }
    findWith(fn) {
        let cell = this.head;
        while (cell) {
            if (fn(cell.value)) {
                return cell;
            }
            cell = cell.next;
        }
    }
    concat(...slices) {
        const res = this.copy();
        for (let slice of slices) {
            res.into(slice);
        }
        return res;
    }
    into(src) {
        for (let x of src) {
            this.push(x);
        }
    }
    slice(from = 0, to = this.length) {
        let a = from < 0 ? from + this._length : from;
        let b = to < 0 ? to + this._length : to;
        if (a < 0 || b < 0) {
            illegal_arguments_1.illegalArgs("invalid indices: ${from} / ${to}");
        }
        const res = new DCons();
        let cell = this.nthCell(a);
        while (cell && ++a <= b) {
            res.push(cell.value);
            cell = cell.next;
        }
        return res;
    }
    splice(at, del = 0, insert) {
        let cell;
        if (typeof at === "number") {
            if (at < 0) {
                at += this._length;
            }
            cell = this.nthCell(at);
        }
        else {
            cell = at;
        }
        const res = new DCons();
        if (del > 0) {
            while (cell && del-- > 0) {
                this.remove(cell);
                res.push(cell.value);
                cell = cell.next;
            }
        }
        else if (cell) {
            cell = cell.next;
        }
        if (insert) {
            if (cell) {
                for (let i of insert) {
                    this.insertBefore(cell, i);
                }
            }
            else {
                for (let i of insert) {
                    this.push(i);
                }
            }
        }
        return res;
    }
    remove(cell) {
        if (cell.prev) {
            cell.prev.next = cell.next;
        }
        else {
            this.head = cell.next;
        }
        if (cell.next) {
            cell.next.prev = cell.prev;
        }
        else {
            this.tail = cell.prev;
        }
        this._length--;
        return this;
    }
    swap(a, b) {
        if (a !== b) {
            const t = a.value;
            a.value = b.value;
            b.value = t;
        }
        return this;
    }
    push(value) {
        if (this.tail) {
            const cell = { value, prev: this.tail };
            this.tail.next = cell;
            this.tail = cell;
            this._length++;
            return this;
        }
        else {
            return this.cons(value);
        }
    }
    pop() {
        const cell = this.tail;
        !cell && illegal_state_1.illegalState("can't pop, empty");
        this.tail = cell.prev;
        if (this.tail) {
            delete this.tail.next;
        }
        else {
            delete this.head;
        }
        this._length--;
        return cell.value;
    }
    first() {
        return this.head && this.head.value;
    }
    peek() {
        return this.tail && this.tail.value;
    }
    setHead(v) {
        if (this.head) {
            this.head.value = v;
            return this;
        }
        return this.cons(v);
    }
    setTail(v) {
        if (this.tail) {
            this.tail.value = v;
            return this;
        }
        return this.push(v);
    }
    setNth(n, v) {
        const cell = this.nthCell(n);
        !cell && illegal_arguments_1.illegalArgs(`index out of bounds: ${n}`);
        cell.value = v;
        return this;
    }
    nth(n, notFound) {
        const cell = this.nthCell(n);
        return cell ? cell.value : notFound;
    }
    nthCell(n) {
        if (n < 0) {
            n += this._length;
        }
        if (n < 0 || n >= this._length) {
            return;
        }
        let cell, dir;
        if (n <= this._length >> 1) {
            cell = this.head;
            dir = "next";
        }
        else {
            cell = this.tail;
            dir = "prev";
            n = this._length - n - 1;
        }
        while (n-- > 0 && cell) {
            cell = cell[dir];
        }
        return cell;
    }
    rotateLeft() {
        switch (this._length) {
            case 0:
            case 1:
                return this;
            case 2:
                return this.swap(this.head, this.tail);
            default:
                return this.push(this.drop());
        }
    }
    rotateRight() {
        switch (this._length) {
            case 0:
            case 1:
                return this;
            case 2:
                return this.swap(this.head, this.tail);
            default:
                const x = this.peek();
                this.pop();
                return this.cons(x);
        }
    }
    map(fn) {
        const res = new DCons();
        let cell = this.head;
        while (cell) {
            res.push(fn(cell.value));
            cell = cell.next;
        }
        return res;
    }
    filter(pred) {
        const res = new DCons();
        let cell = this.head;
        while (cell) {
            pred(cell.value) && res.push(cell.value);
            cell = cell.next;
        }
        return res;
    }
    reduce(rfn, initial) {
        let acc = initial;
        let cell = this.head;
        while (cell) {
            // TODO add early termination support
            acc = rfn(acc, cell.value);
            cell = cell.next;
        }
        return acc;
    }
    shuffle() {
        let n = this._length;
        let cell = this.tail;
        while (n > 0) {
            let i = Math.floor(Math.random() * n);
            this.swap(this.nthCell(i), cell);
            cell = cell.prev;
            n--;
        }
        return this;
    }
    reverse() {
        let head = this.head;
        let tail = this.tail;
        let n = (this._length >>> 1) + (this._length & 1);
        while (head && tail && n > 0) {
            const t = head.value;
            head.value = tail.value;
            tail.value = t;
            head = head.next;
            tail = tail.prev;
            n--;
        }
        return this;
    }
    asHead(cell) {
        if (cell === this.head) {
            return this;
        }
        this.remove(cell);
        this.head.prev = cell;
        cell.next = this.head;
        cell.prev = undefined;
        this.head = cell;
        this._length++;
        return this;
    }
    asTail(cell) {
        if (cell === this.tail) {
            return this;
        }
        this.remove(cell);
        this.tail.next = cell;
        cell.prev = this.tail;
        cell.next = undefined;
        this.tail = cell;
        this._length++;
        return this;
    }
    toString() {
        let res = [];
        let cell = this.head;
        while (cell) {
            res.push(cell.value != null ?
                cell.value.toString() :
                cell.value === undefined ? "undefined" : "null");
            cell = cell.next;
        }
        return res.join(", ");
    }
    toJSON() {
        return [...this];
    }
}
exports.DCons = DCons;


/***/ }),

/***/ "./node_modules/@thi.ng/equiv/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@thi.ng/equiv/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const OBJP = Object.getPrototypeOf({});
const FN = "function";
const STR = "string";
exports.equiv = (a, b) => {
    let proto;
    if (a === b) {
        return true;
    }
    if (a != null) {
        if (typeof a.equiv === FN) {
            return a.equiv(b);
        }
    }
    else {
        return a == b;
    }
    if (b != null) {
        if (typeof b.equiv === FN) {
            return b.equiv(a);
        }
    }
    else {
        return a == b;
    }
    if (typeof a === STR || typeof b === STR) {
        return false;
    }
    if ((proto = Object.getPrototypeOf(a), proto == null || proto === OBJP) &&
        (proto = Object.getPrototypeOf(b), proto == null || proto === OBJP)) {
        return exports.equivObject(a, b);
    }
    if (typeof a !== FN && a.length !== undefined &&
        typeof b !== FN && b.length !== undefined) {
        return exports.equivArrayLike(a, b);
    }
    if (a instanceof Set && b instanceof Set) {
        return exports.equivSet(a, b);
    }
    if (a instanceof Map && b instanceof Map) {
        return exports.equivMap(a, b);
    }
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    if (a instanceof RegExp && b instanceof RegExp) {
        return a.toString() === b.toString();
    }
    // NaN
    return (a !== a && b !== b);
};
exports.equivArrayLike = (a, b, _equiv = exports.equiv) => {
    let l = a.length;
    if (l === b.length) {
        while (--l >= 0 && _equiv(a[l], b[l]))
            ;
    }
    return l < 0;
};
exports.equivSet = (a, b, _equiv = exports.equiv) => (a.size === b.size) &&
    _equiv([...a.keys()].sort(), [...b.keys()].sort());
exports.equivMap = (a, b, _equiv = exports.equiv) => (a.size === b.size) &&
    _equiv([...a].sort(), [...b].sort());
exports.equivObject = (a, b, _equiv = exports.equiv) => {
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for (let k in a) {
        if (!b.hasOwnProperty(k) || !_equiv(a[k], b[k])) {
            return false;
        }
    }
    return true;
};


/***/ }),

/***/ "./node_modules/@thi.ng/errors/illegal-arguments.js":
/*!**********************************************************!*\
  !*** ./node_modules/@thi.ng/errors/illegal-arguments.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class IllegalArgumentError extends Error {
    constructor(msg) {
        super("illegal argument(s)" + (msg !== undefined ? ": " + msg : ""));
    }
}
exports.IllegalArgumentError = IllegalArgumentError;
function illegalArgs(msg) {
    throw new IllegalArgumentError(msg);
}
exports.illegalArgs = illegalArgs;


/***/ }),

/***/ "./node_modules/@thi.ng/errors/illegal-arity.js":
/*!******************************************************!*\
  !*** ./node_modules/@thi.ng/errors/illegal-arity.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class IllegalArityError extends Error {
    constructor(n) {
        super(`illegal arity: ${n}`);
    }
}
exports.IllegalArityError = IllegalArityError;
function illegalArity(n) {
    throw new IllegalArityError(n);
}
exports.illegalArity = illegalArity;


/***/ }),

/***/ "./node_modules/@thi.ng/errors/illegal-state.js":
/*!******************************************************!*\
  !*** ./node_modules/@thi.ng/errors/illegal-state.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class IllegalStateError extends Error {
    constructor(msg) {
        super("illegal state" + (msg !== undefined ? ": " + msg : ""));
    }
}
exports.IllegalStateError = IllegalStateError;
function illegalState(msg) {
    throw new IllegalStateError(msg);
}
exports.illegalState = illegalState;


/***/ }),

/***/ "./node_modules/@thi.ng/errors/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@thi.ng/errors/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./illegal-arguments */ "./node_modules/@thi.ng/errors/illegal-arguments.js"));
__export(__webpack_require__(/*! ./illegal-arity */ "./node_modules/@thi.ng/errors/illegal-arity.js"));
__export(__webpack_require__(/*! ./illegal-state */ "./node_modules/@thi.ng/errors/illegal-state.js"));
__export(__webpack_require__(/*! ./unsupported */ "./node_modules/@thi.ng/errors/unsupported.js"));


/***/ }),

/***/ "./node_modules/@thi.ng/errors/unsupported.js":
/*!****************************************************!*\
  !*** ./node_modules/@thi.ng/errors/unsupported.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class UnsupportedOperationError extends Error {
    constructor(msg) {
        super("unsupported operation" + (msg !== undefined ? ": " + msg : ""));
    }
}
exports.UnsupportedOperationError = UnsupportedOperationError;
function unsupported(msg) {
    throw new UnsupportedOperationError(msg);
}
exports.unsupported = unsupported;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/butlast.js":
/*!***************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/butlast.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* butLast(input) {
    let iter = iterator_1.iterator(input);
    let v;
    let prev;
    let first = true;
    while (((v = iter.next()), !v.done)) {
        if (!first) {
            yield prev;
        }
        prev = v.value;
        first = false;
    }
}
exports.butLast = butLast;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/cached.js":
/*!**************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/cached.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function cached(input) {
    let cache = [];
    let iter = iterator_1.iterator(input);
    let done = false;
    return function () {
        let i = 0;
        return {
            [Symbol.iterator]() { return this; },
            next() {
                if (i < cache.length) {
                    return { done: false, value: cache[i++] };
                }
                else if (!done) {
                    let v = iter.next();
                    if (!v.done) {
                        i++;
                        cache.push(v.value);
                        return { done: false, value: v.value };
                    }
                    done = true;
                }
                return { done, value: undefined };
            }
        };
    };
}
exports.cached = cached;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/concat.js":
/*!**************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/concat.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ensure_1 = __webpack_require__(/*! ./ensure */ "./node_modules/@thi.ng/iterators/ensure.js");
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* concat(...inputs) {
    let iter = iterator_1.iterator(inputs);
    let v;
    while (((v = iter.next()), !v.done)) {
        if (v.value != null) {
            yield* ensure_1.ensureIterable(v.value);
        }
    }
}
exports.concat = concat;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/constantly.js":
/*!******************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/constantly.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function constantly(x) {
    return () => x;
}
exports.constantly = constantly;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/consume.js":
/*!***************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/consume.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function consume(iter, n = Infinity) {
    while (n-- > 0 && !iter.next().done) { }
    return iter;
}
exports.consume = consume;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/cycle.js":
/*!*************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/cycle.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* cycle(input) {
    let cache = [];
    let iter = iterator_1.iterator(input);
    let v;
    while (((v = iter.next()), !v.done)) {
        cache.push(v.value);
        yield v.value;
    }
    if (cache.length > 0) {
        while (true) {
            yield* cache;
        }
    }
}
exports.cycle = cycle;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/dedupe-with.js":
/*!*******************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/dedupe-with.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* dedupeWith(equiv, input) {
    let iter = iterator_1.iterator(input);
    let v;
    let prev;
    while (((v = iter.next()), !v.done)) {
        if (prev === undefined || !equiv(prev, v.value)) {
            prev = v.value;
            yield v.value;
        }
    }
}
exports.dedupeWith = dedupeWith;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/dedupe.js":
/*!**************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/dedupe.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* dedupe(input) {
    let iter = iterator_1.iterator(input);
    let v;
    let prev;
    while (((v = iter.next()), !v.done)) {
        if (v.value !== prev) {
            prev = v.value;
            yield v.value;
        }
    }
}
exports.dedupe = dedupe;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/dense.js":
/*!*************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/dense.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_1 = __webpack_require__(/*! ./filter */ "./node_modules/@thi.ng/iterators/filter.js");
function dense(input) {
    return filter_1.filter(x => x != null, input);
}
exports.dense = dense;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/drop-nth.js":
/*!****************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/drop-nth.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ensure_1 = __webpack_require__(/*! ./ensure */ "./node_modules/@thi.ng/iterators/ensure.js");
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
const take_1 = __webpack_require__(/*! ./take */ "./node_modules/@thi.ng/iterators/take.js");
function* dropNth(n, input) {
    let iter = ensure_1.ensureIterable(iterator_1.iterator(input));
    do {
        yield* take_1.take(n - 1, iter);
    } while (!iter.next().done);
}
exports.dropNth = dropNth;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/drop-while.js":
/*!******************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/drop-while.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ensure_1 = __webpack_require__(/*! ./ensure */ "./node_modules/@thi.ng/iterators/ensure.js");
function* dropWhile(pred, input) {
    let iter = ensure_1.ensureIterator(input);
    let v;
    while (((v = iter.next()), !v.done && pred(v.value) === true)) { }
    if (v.value !== undefined) {
        yield v.value;
        yield* iter;
    }
}
exports.dropWhile = dropWhile;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/drop.js":
/*!************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/drop.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const consume_1 = __webpack_require__(/*! ./consume */ "./node_modules/@thi.ng/iterators/consume.js");
const ensure_1 = __webpack_require__(/*! ./ensure */ "./node_modules/@thi.ng/iterators/ensure.js");
function* drop(n, input) {
    let iter = ensure_1.ensureIterator(input);
    consume_1.consume(iter, n);
    yield* iter;
}
exports.drop = drop;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/ensure.js":
/*!**************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/ensure.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const illegal_arguments_1 = __webpack_require__(/*! @thi.ng/errors/illegal-arguments */ "./node_modules/@thi.ng/errors/illegal-arguments.js");
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function ensureIterable(x) {
    if (!(x != null && x[Symbol.iterator])) {
        illegal_arguments_1.illegalArgs(`value is not iterable: ${x}`);
    }
    return x;
}
exports.ensureIterable = ensureIterable;
function ensureIterator(x) {
    return ensureIterable(iterator_1.iterator(x));
}
exports.ensureIterator = ensureIterator;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/every.js":
/*!*************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/every.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function every(pred, input) {
    let iter = iterator_1.iterator(input);
    let v;
    let empty = true;
    while (((v = iter.next()), !v.done)) {
        if (pred(v.value) !== true) {
            return false;
        }
        empty = false;
    }
    return !empty;
}
exports.every = every;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/filter.js":
/*!**************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/filter.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* filter(pred, input) {
    let iter = iterator_1.iterator(input);
    let v;
    while (((v = iter.next()), !v.done)) {
        if (pred(v.value) === true) {
            yield v.value;
        }
    }
}
exports.filter = filter;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/flatten-with.js":
/*!********************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/flatten-with.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* flattenWith(tx, input) {
    let iter = iterator_1.iterator(input);
    let v, val, res;
    while (((v = iter.next()), !v.done)) {
        val = v.value;
        if (val != null && ((res = tx(val)) !== undefined)) {
            yield* flattenWith(tx, res);
        }
        else {
            yield val;
        }
    }
}
exports.flattenWith = flattenWith;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/flatten.js":
/*!***************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/flatten.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const flatten_with_1 = __webpack_require__(/*! ./flatten-with */ "./node_modules/@thi.ng/iterators/flatten-with.js");
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
const object_iterator_1 = __webpack_require__(/*! ./object-iterator */ "./node_modules/@thi.ng/iterators/object-iterator.js");
function flatten(input, includeObjects = true) {
    return flatten_with_1.flattenWith((x) => (typeof x !== "string" &&
        (iterator_1.maybeIterator(x) ||
            (includeObjects && object_iterator_1.maybeObjectIterator(x)))) ||
        undefined, input);
}
exports.flatten = flatten;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/fnil.js":
/*!************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/fnil.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __webpack_require__(/*! @thi.ng/errors */ "./node_modules/@thi.ng/errors/index.js");
function fnil(fn, ...ctors) {
    let [cta, ctb, ctc] = ctors;
    switch (ctors.length) {
        case 1:
            return (...args) => {
                if (args[0] == null) {
                    args[0] = cta();
                }
                return fn.apply(null, args);
            };
        case 2:
            return (...args) => {
                if (args[0] == null) {
                    args[0] = cta();
                }
                if (args[1] == null) {
                    args[1] = ctb();
                }
                return fn.apply(null, args);
            };
        case 3:
            return (...args) => {
                if (args[0] == null) {
                    args[0] = cta();
                }
                if (args[1] == null) {
                    args[1] = ctb();
                }
                if (args[2] == null) {
                    args[2] = ctc();
                }
                return fn.apply(null, args);
            };
        default:
            errors_1.illegalArity(ctors.length);
    }
}
exports.fnil = fnil;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/fork.js":
/*!************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/fork.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dcons_1 = __webpack_require__(/*! @thi.ng/dcons */ "./node_modules/@thi.ng/dcons/index.js");
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function fork(src, cacheLimit = 16) {
    const iter = iterator_1.iterator(src);
    const cache = new dcons_1.DCons();
    const forks = [];
    let done = false;
    let total = 0;
    function consume() {
        if (!done) {
            if (cache.length === cacheLimit) {
                cache.drop();
                for (let i = forks.length - 1; i >= 0; i--) {
                    forks[i] = Math.max(forks[i] - 1, 0);
                }
            }
            const v = iter.next();
            if (!v.done) {
                cache.push(v.value);
                total++;
            }
            done = v.done;
            return v.value;
        }
    }
    return function () {
        const id = forks.length;
        forks.push(0);
        return {
            [Symbol.iterator]() { return this; },
            next() {
                if (forks[id] < cache.length) {
                    if (forks[id] < total) {
                        return { done: false, value: cache.nth(forks[id]++) };
                    }
                }
                else {
                    const value = consume();
                    if (!done) {
                        forks[id]++;
                    }
                    return { done, value };
                }
            }
        };
    };
}
exports.fork = fork;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/frequencies.js":
/*!*******************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/frequencies.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* frequencies(input, key) {
    let freqs = {};
    let iter = iterator_1.iterator(input);
    let v;
    while (((v = iter.next()), !v.done)) {
        let k = key ? key(v.value) : v.value;
        let id = JSON.stringify(k);
        let bin = freqs[id];
        if (bin) {
            bin[1]++;
        }
        else {
            freqs[id] = [k, 1];
        }
    }
    yield* Object.keys(freqs).map((id) => freqs[id]);
}
exports.frequencies = frequencies;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/group-by.js":
/*!****************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/group-by.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function groupBy(key, input) {
    let groups = {};
    let iter = iterator_1.iterator(input);
    let v;
    while (((v = iter.next()), !v.done)) {
        let id = JSON.stringify(key(v.value));
        let g = groups[id];
        if (g) {
            g.push(v.value);
        }
        else {
            groups[id] = [v.value];
        }
    }
    return groups;
}
exports.groupBy = groupBy;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/identity.js":
/*!****************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/identity.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function identity(x) {
    return x;
}
exports.identity = identity;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./butlast */ "./node_modules/@thi.ng/iterators/butlast.js"));
__export(__webpack_require__(/*! ./cached */ "./node_modules/@thi.ng/iterators/cached.js"));
__export(__webpack_require__(/*! ./concat */ "./node_modules/@thi.ng/iterators/concat.js"));
__export(__webpack_require__(/*! ./constantly */ "./node_modules/@thi.ng/iterators/constantly.js"));
__export(__webpack_require__(/*! ./consume */ "./node_modules/@thi.ng/iterators/consume.js"));
__export(__webpack_require__(/*! ./cycle */ "./node_modules/@thi.ng/iterators/cycle.js"));
__export(__webpack_require__(/*! ./dedupe-with */ "./node_modules/@thi.ng/iterators/dedupe-with.js"));
__export(__webpack_require__(/*! ./dedupe */ "./node_modules/@thi.ng/iterators/dedupe.js"));
__export(__webpack_require__(/*! ./dense */ "./node_modules/@thi.ng/iterators/dense.js"));
__export(__webpack_require__(/*! ./drop-nth */ "./node_modules/@thi.ng/iterators/drop-nth.js"));
__export(__webpack_require__(/*! ./drop-while */ "./node_modules/@thi.ng/iterators/drop-while.js"));
__export(__webpack_require__(/*! ./drop */ "./node_modules/@thi.ng/iterators/drop.js"));
__export(__webpack_require__(/*! ./ensure */ "./node_modules/@thi.ng/iterators/ensure.js"));
__export(__webpack_require__(/*! ./every */ "./node_modules/@thi.ng/iterators/every.js"));
__export(__webpack_require__(/*! ./filter */ "./node_modules/@thi.ng/iterators/filter.js"));
__export(__webpack_require__(/*! ./flatten-with */ "./node_modules/@thi.ng/iterators/flatten-with.js"));
__export(__webpack_require__(/*! ./flatten */ "./node_modules/@thi.ng/iterators/flatten.js"));
__export(__webpack_require__(/*! ./fnil */ "./node_modules/@thi.ng/iterators/fnil.js"));
__export(__webpack_require__(/*! ./fork */ "./node_modules/@thi.ng/iterators/fork.js"));
__export(__webpack_require__(/*! ./frequencies */ "./node_modules/@thi.ng/iterators/frequencies.js"));
__export(__webpack_require__(/*! ./group-by */ "./node_modules/@thi.ng/iterators/group-by.js"));
__export(__webpack_require__(/*! ./identity */ "./node_modules/@thi.ng/iterators/identity.js"));
__export(__webpack_require__(/*! ./indexed */ "./node_modules/@thi.ng/iterators/indexed.js"));
__export(__webpack_require__(/*! ./interleave */ "./node_modules/@thi.ng/iterators/interleave.js"));
__export(__webpack_require__(/*! ./interpose */ "./node_modules/@thi.ng/iterators/interpose.js"));
__export(__webpack_require__(/*! ./iterate */ "./node_modules/@thi.ng/iterators/iterate.js"));
__export(__webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js"));
__export(__webpack_require__(/*! ./juxt */ "./node_modules/@thi.ng/iterators/juxt.js"));
__export(__webpack_require__(/*! ./last */ "./node_modules/@thi.ng/iterators/last.js"));
__export(__webpack_require__(/*! ./map-indexed */ "./node_modules/@thi.ng/iterators/map-indexed.js"));
__export(__webpack_require__(/*! ./map */ "./node_modules/@thi.ng/iterators/map.js"));
__export(__webpack_require__(/*! ./mapcat */ "./node_modules/@thi.ng/iterators/mapcat.js"));
__export(__webpack_require__(/*! ./object-iterator */ "./node_modules/@thi.ng/iterators/object-iterator.js"));
__export(__webpack_require__(/*! ./partition-by */ "./node_modules/@thi.ng/iterators/partition-by.js"));
__export(__webpack_require__(/*! ./partition */ "./node_modules/@thi.ng/iterators/partition.js"));
__export(__webpack_require__(/*! ./random-sample */ "./node_modules/@thi.ng/iterators/random-sample.js"));
__export(__webpack_require__(/*! ./range */ "./node_modules/@thi.ng/iterators/range.js"));
__export(__webpack_require__(/*! ./reduce */ "./node_modules/@thi.ng/iterators/reduce.js"));
__export(__webpack_require__(/*! ./reductions */ "./node_modules/@thi.ng/iterators/reductions.js"));
__export(__webpack_require__(/*! ./repeat */ "./node_modules/@thi.ng/iterators/repeat.js"));
__export(__webpack_require__(/*! ./repeatedly */ "./node_modules/@thi.ng/iterators/repeatedly.js"));
__export(__webpack_require__(/*! ./reverse */ "./node_modules/@thi.ng/iterators/reverse.js"));
__export(__webpack_require__(/*! ./run */ "./node_modules/@thi.ng/iterators/run.js"));
__export(__webpack_require__(/*! ./some */ "./node_modules/@thi.ng/iterators/some.js"));
__export(__webpack_require__(/*! ./take-last */ "./node_modules/@thi.ng/iterators/take-last.js"));
__export(__webpack_require__(/*! ./take-nth */ "./node_modules/@thi.ng/iterators/take-nth.js"));
__export(__webpack_require__(/*! ./take-while */ "./node_modules/@thi.ng/iterators/take-while.js"));
__export(__webpack_require__(/*! ./take */ "./node_modules/@thi.ng/iterators/take.js"));
__export(__webpack_require__(/*! ./walk */ "./node_modules/@thi.ng/iterators/walk.js"));
__export(__webpack_require__(/*! ./zip */ "./node_modules/@thi.ng/iterators/zip.js"));


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/indexed.js":
/*!***************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/indexed.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const map_indexed_1 = __webpack_require__(/*! ./map-indexed */ "./node_modules/@thi.ng/iterators/map-indexed.js");
function indexed(input) {
    return map_indexed_1.mapIndexed((i, x) => [i, x], input);
}
exports.indexed = indexed;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/interleave.js":
/*!******************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/interleave.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const illegal_arity_1 = __webpack_require__(/*! @thi.ng/errors/illegal-arity */ "./node_modules/@thi.ng/errors/illegal-arity.js");
const cycle_1 = __webpack_require__(/*! ./cycle */ "./node_modules/@thi.ng/iterators/cycle.js");
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
const map_1 = __webpack_require__(/*! ./map */ "./node_modules/@thi.ng/iterators/map.js");
function* interleave(...inputs) {
    let n = inputs.length;
    if (n === 0) {
        illegal_arity_1.illegalArity(0);
    }
    let iter = cycle_1.cycle(map_1.map(iterator_1.iterator, inputs));
    let chunk = [];
    let v;
    while (true) {
        for (let i = 0; i < n; i++) {
            if (((v = iter.next().value.next()), v.done)) {
                return;
            }
            chunk[i] = v.value;
        }
        yield* chunk;
    }
}
exports.interleave = interleave;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/interpose.js":
/*!*****************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/interpose.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* interpose(x, input) {
    let iter = iterator_1.iterator(input);
    let v = iter.next();
    while (!v.done) {
        yield v.value;
        v = iter.next();
        if (!v.done) {
            yield x;
        }
    }
}
exports.interpose = interpose;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function* iterate(fn, seed) {
    while (true) {
        yield seed;
        seed = fn(seed);
    }
}
exports.iterate = iterate;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/iterator.js":
/*!****************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/iterator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function iterator(x) {
    return x[Symbol.iterator]();
}
exports.iterator = iterator;
function maybeIterator(x) {
    return (x != null && x[Symbol.iterator] && x[Symbol.iterator]()) || undefined;
}
exports.maybeIterator = maybeIterator;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/juxt.js":
/*!************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/juxt.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function juxt(...fns) {
    return function (x) {
        let res = [];
        for (let i = 0; i < fns.length; i++) {
            res[i] = fns[i](x);
        }
        return res;
    };
}
exports.juxt = juxt;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/last.js":
/*!************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/last.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function last(input) {
    let iter = iterator_1.iterator(input);
    let v;
    let prev;
    while (((v = iter.next()), !v.done)) {
        prev = v.value;
    }
    return prev;
}
exports.last = last;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/map-indexed.js":
/*!*******************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/map-indexed.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = __webpack_require__(/*! ./map */ "./node_modules/@thi.ng/iterators/map.js");
const range_1 = __webpack_require__(/*! ./range */ "./node_modules/@thi.ng/iterators/range.js");
function mapIndexed(fn, ...inputs) {
    return map_1.map.apply(null, [fn, range_1.range()].concat(inputs));
}
exports.mapIndexed = mapIndexed;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/map.js":
/*!***********************************************!*\
  !*** ./node_modules/@thi.ng/iterators/map.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* map(fn, ...inputs) {
    let v;
    let n = inputs.length;
    switch (n) {
        case 0:
            return;
        case 1:
            let iter = iterator_1.iterator(inputs[0]);
            while (((v = iter.next()), !v.done)) {
                yield fn(v.value);
            }
            return;
        default:
            let iters = inputs.map(iterator_1.iterator);
            while (true) {
                let args = [];
                for (let i = 0; i < n; i++) {
                    v = iters[i].next();
                    if (v.done) {
                        return;
                    }
                    args.push(v.value);
                }
                yield fn.apply(null, args);
            }
    }
}
exports.map = map;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/mapcat.js":
/*!**************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/mapcat.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ensure_1 = __webpack_require__(/*! ./ensure */ "./node_modules/@thi.ng/iterators/ensure.js");
const map_1 = __webpack_require__(/*! ./map */ "./node_modules/@thi.ng/iterators/map.js");
function* mapcat(fn, ...inputs) {
    inputs.unshift(fn);
    let iter = map_1.map.apply(null, inputs);
    let v;
    while (((v = iter.next()), !v.done)) {
        if (v.value != null) {
            yield* ensure_1.ensureIterable(v.value);
        }
    }
}
exports.mapcat = mapcat;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/object-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/object-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = __webpack_require__(/*! ./map */ "./node_modules/@thi.ng/iterators/map.js");
function objectIterator(x) {
    return map_1.map((k) => [k, x[k]], Object.keys(x));
}
exports.objectIterator = objectIterator;
function maybeObjectIterator(x) {
    return (x != null &&
        typeof x === "object" &&
        Object.prototype.toString.call(x) !== "[object Generator]" &&
        objectIterator(x)) || undefined;
}
exports.maybeObjectIterator = maybeObjectIterator;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/partition-by.js":
/*!********************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/partition-by.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* partitionBy(fn, input) {
    let iter = iterator_1.iterator(input);
    let chunk = [];
    let v;
    let prev;
    while (((v = iter.next()), !v.done)) {
        let curr = fn(v.value);
        if (prev !== undefined && prev !== curr) {
            yield chunk;
            chunk = [];
        }
        prev = curr;
        chunk.push(v.value);
    }
    if (chunk.length > 0) {
        yield chunk;
    }
}
exports.partitionBy = partitionBy;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/partition.js":
/*!*****************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/partition.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const illegal_arguments_1 = __webpack_require__(/*! @thi.ng/errors/illegal-arguments */ "./node_modules/@thi.ng/errors/illegal-arguments.js");
const consume_1 = __webpack_require__(/*! ./consume */ "./node_modules/@thi.ng/iterators/consume.js");
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* partition(n, step, input, all = false) {
    if (n < 1) {
        illegal_arguments_1.illegalArgs(`invalid partition size: ${n}`);
    }
    if (step < 1) {
        illegal_arguments_1.illegalArgs(`invalid step size: ${step}`);
    }
    let iter = iterator_1.iterator(input);
    let chunk = [];
    while (true) {
        let i = chunk.length;
        while (i++ < n) {
            let v = iter.next();
            if (v.done) {
                if (all && chunk.length > 0) {
                    yield chunk;
                }
                return;
            }
            chunk.push(v.value);
        }
        yield chunk;
        chunk = step < n ? chunk.slice(step) : [];
        if (step > n) {
            consume_1.consume(iter, step - n);
        }
    }
}
exports.partition = partition;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/random-sample.js":
/*!*********************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/random-sample.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* randomSample(prob, input) {
    let iter = iterator_1.iterator(input);
    let random = Math.random;
    let v;
    while (((v = iter.next()), !v.done)) {
        if (random() < prob) {
            yield v.value;
        }
    }
}
exports.randomSample = randomSample;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/range.js":
/*!*************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/range.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function* range(from, to, step) {
    if (from === undefined) {
        from = 0;
        to = Infinity;
    }
    else if (to === undefined) {
        to = from;
        from = 0;
    }
    step = step === undefined ? (from < to ? 1 : -1) : step;
    if (step > 0) {
        while (from < to) {
            yield from;
            from += step;
        }
    }
    else if (step < 0) {
        while (from > to) {
            yield from;
            from += step;
        }
    }
}
exports.range = range;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/reduce.js":
/*!**************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/reduce.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
class ReducedValue {
    constructor(v) {
        this.value = v;
    }
}
exports.ReducedValue = ReducedValue;
function reduce(rfn, acc, input) {
    let iter = iterator_1.iterator(input);
    let v;
    let _acc = acc;
    while (((v = iter.next()), !v.done)) {
        _acc = rfn(_acc, v.value);
        if (_acc instanceof ReducedValue) {
            return _acc.value;
        }
    }
    return _acc;
}
exports.reduce = reduce;
function reduced(x) {
    return new ReducedValue(x);
}
exports.reduced = reduced;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/reductions.js":
/*!******************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/reductions.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
const reduce_1 = __webpack_require__(/*! ./reduce */ "./node_modules/@thi.ng/iterators/reduce.js");
function* reductions(rfn, acc, input) {
    let iter = iterator_1.iterator(input);
    let v;
    let _acc = acc;
    let empty = true;
    while (((v = iter.next()), !v.done)) {
        _acc = rfn(_acc, v.value);
        if (_acc instanceof reduce_1.ReducedValue) {
            yield _acc.value;
            return;
        }
        yield _acc;
        empty = false;
    }
    if (empty) {
        yield _acc;
    }
}
exports.reductions = reductions;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/repeat.js":
/*!**************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/repeat.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function* repeat(x, n = Infinity) {
    while (n-- > 0) {
        yield x;
    }
}
exports.repeat = repeat;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/repeatedly.js":
/*!******************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/repeatedly.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function* repeatedly(fn, n = Infinity) {
    while (n-- > 0) {
        yield fn();
    }
}
exports.repeatedly = repeatedly;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/reverse.js":
/*!***************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/reverse.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function* reverse(input) {
    if (!(input.constructor === Array || input.length !== undefined)) {
        input = [...input];
    }
    let n = input.length;
    while (--n >= 0) {
        yield input[n];
    }
}
exports.reverse = reverse;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/run.js":
/*!***********************************************!*\
  !*** ./node_modules/@thi.ng/iterators/run.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function run(fn, input) {
    let iter = iterator_1.iterator(input);
    let v;
    while (((v = iter.next()), !v.done)) {
        fn(v.value);
    }
}
exports.run = run;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/some.js":
/*!************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/some.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function some(pred, input) {
    let iter = iterator_1.iterator(input);
    let v;
    while (((v = iter.next()), !v.done)) {
        if (pred(v.value) === true) {
            return v.value;
        }
    }
}
exports.some = some;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/take-last.js":
/*!*****************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/take-last.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* takeLast(n, input) {
    let iter = iterator_1.iterator(input);
    let v;
    let prev = [];
    while (((v = iter.next()), !v.done)) {
        prev.push(v.value);
        if (prev.length > n) {
            prev = prev.slice(1);
        }
    }
    yield* prev;
}
exports.takeLast = takeLast;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/take-nth.js":
/*!****************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/take-nth.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const consume_1 = __webpack_require__(/*! ./consume */ "./node_modules/@thi.ng/iterators/consume.js");
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* takeNth(n, input) {
    let iter = iterator_1.iterator(input);
    let v;
    while (((v = iter.next()), !v.done)) {
        yield v.value;
        consume_1.consume(iter, n - 1);
    }
}
exports.takeNth = takeNth;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/take-while.js":
/*!******************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/take-while.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* takeWhile(pred, input) {
    let iter = iterator_1.iterator(input);
    let v;
    while (((v = iter.next()), !v.done && pred(v.value))) {
        yield v.value;
    }
}
exports.takeWhile = takeWhile;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/take.js":
/*!************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/take.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function* take(n, input) {
    let iter = iterator_1.iterator(input);
    while (n-- > 0) {
        let v = iter.next();
        if (v.done) {
            break;
        }
        yield v.value;
    }
}
exports.take = take;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/walk.js":
/*!************************************************!*\
  !*** ./node_modules/@thi.ng/iterators/walk.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
const object_iterator_1 = __webpack_require__(/*! ./object-iterator */ "./node_modules/@thi.ng/iterators/object-iterator.js");
function walkable(x) {
    return typeof x !== "string" ? iterator_1.maybeIterator(x) || object_iterator_1.maybeObjectIterator(x) : undefined;
}
exports.walkable = walkable;
function walk(fn, ...args) {
    let children;
    let input;
    let postOrder;
    if (args.length === 3) {
        [children, input, postOrder] = args;
    }
    else if (args.length === 2 && typeof args[0] === "function") {
        [children, input] = args;
    }
    else {
        [input, postOrder] = args;
    }
    let inner = (iter) => {
        let v;
        while (((v = iter.next()), !v.done)) {
            if (!postOrder) {
                fn(v.value);
            }
            let cvals;
            if (children) {
                cvals = children(v.value);
            }
            else {
                cvals = v.value;
            }
            if ((cvals = walkable(cvals)) !== undefined) {
                inner(cvals);
            }
            if (postOrder) {
                fn(v.value);
            }
        }
    };
    inner(iterator_1.iterator([input]));
}
exports.walk = walk;
function walkIterator(input, ...args) {
    let children;
    let postOrder;
    if (args.length === 2) {
        [children, postOrder] = args;
    }
    else if (typeof args[0] === "function") {
        children = args[0];
    }
    else {
        postOrder = args[0];
    }
    let walk = function* (iter) {
        let v;
        while (((v = iter.next()), !v.done)) {
            if (!postOrder) {
                yield v.value;
            }
            let cvals;
            if (children) {
                cvals = children(v.value);
            }
            else {
                cvals = v.value;
            }
            if ((cvals = walkable(cvals)) !== undefined) {
                yield* walk(cvals);
            }
            if (postOrder) {
                yield v.value;
            }
        }
    };
    return walk(iterator_1.iterator([input]));
}
exports.walkIterator = walkIterator;


/***/ }),

/***/ "./node_modules/@thi.ng/iterators/zip.js":
/*!***********************************************!*\
  !*** ./node_modules/@thi.ng/iterators/zip.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __webpack_require__(/*! ./iterator */ "./node_modules/@thi.ng/iterators/iterator.js");
function zip(keys, vals, target) {
    let kiter = iterator_1.iterator(keys);
    let viter = iterator_1.iterator(vals);
    let k;
    let v;
    target = target || {};
    while (true) {
        k = kiter.next();
        v = viter.next();
        if (k.done || v.done) {
            return target;
        }
        target[k.value] = v.value;
    }
}
exports.zip = zip;


/***/ }),

/***/ "./node_modules/@thi.ng/transducers/reduced.js":
/*!*****************************************************!*\
  !*** ./node_modules/@thi.ng/transducers/reduced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Reduced {
    constructor(val) {
        this.value = val;
    }
    deref() {
        return this.value;
    }
}
exports.Reduced = Reduced;
function reduced(x) {
    return new Reduced(x);
}
exports.reduced = reduced;
function isReduced(x) {
    return x instanceof Reduced;
}
exports.isReduced = isReduced;
function ensureReduced(x) {
    return x instanceof Reduced ? x : new Reduced(x);
}
exports.ensureReduced = ensureReduced;
function unreduced(x) {
    return x instanceof Reduced ? x.deref() : x;
}
exports.unreduced = unreduced;


/***/ }),

/***/ "./node_modules/@turf/bbox/index.js":
/*!******************************************!*\
  !*** ./node_modules/@turf/bbox/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var meta_1 = __webpack_require__(/*! @turf/meta */ "./node_modules/@turf/meta/index.js");
/**
 * Takes a set of features, calculates the bbox of all input features, and returns a bounding box.
 *
 * @name bbox
 * @param {GeoJSON} geojson any GeoJSON object
 * @returns {BBox} bbox extent in [minX, minY, maxX, maxY] order
 * @example
 * var line = turf.lineString([[-74, 40], [-78, 42], [-82, 35]]);
 * var bbox = turf.bbox(line);
 * var bboxPolygon = turf.bboxPolygon(bbox);
 *
 * //addToMap
 * var addToMap = [line, bboxPolygon]
 */
function bbox(geojson) {
    var result = [Infinity, Infinity, -Infinity, -Infinity];
    meta_1.coordEach(geojson, function (coord) {
        if (result[0] > coord[0]) {
            result[0] = coord[0];
        }
        if (result[1] > coord[1]) {
            result[1] = coord[1];
        }
        if (result[2] < coord[0]) {
            result[2] = coord[0];
        }
        if (result[3] < coord[1]) {
            result[3] = coord[1];
        }
    });
    return result;
}
exports.default = bbox;


/***/ }),

/***/ "./node_modules/@turf/boolean-point-in-polygon/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@turf/boolean-point-in-polygon/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invariant_1 = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/index.js");
// http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule
// modified from: https://github.com/substack/point-in-polygon/blob/master/index.js
// which was modified from http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
/**
 * Takes a {@link Point} and a {@link Polygon} or {@link MultiPolygon} and determines if the point
 * resides inside the polygon. The polygon can be convex or concave. The function accounts for holes.
 *
 * @name booleanPointInPolygon
 * @param {Coord} point input point
 * @param {Feature<Polygon|MultiPolygon>} polygon input polygon or multipolygon
 * @param {Object} [options={}] Optional parameters
 * @param {boolean} [options.ignoreBoundary=false] True if polygon boundary should be ignored when determining if
 * the point is inside the polygon otherwise false.
 * @returns {boolean} `true` if the Point is inside the Polygon; `false` if the Point is not inside the Polygon
 * @example
 * var pt = turf.point([-77, 44]);
 * var poly = turf.polygon([[
 *   [-81, 41],
 *   [-81, 47],
 *   [-72, 47],
 *   [-72, 41],
 *   [-81, 41]
 * ]]);
 *
 * turf.booleanPointInPolygon(pt, poly);
 * //= true
 */
function booleanPointInPolygon(point, polygon, options) {
    if (options === void 0) { options = {}; }
    // validation
    if (!point) {
        throw new Error("point is required");
    }
    if (!polygon) {
        throw new Error("polygon is required");
    }
    var pt = invariant_1.getCoord(point);
    var geom = invariant_1.getGeom(polygon);
    var type = geom.type;
    var bbox = polygon.bbox;
    var polys = geom.coordinates;
    // Quick elimination if point is not inside bbox
    if (bbox && inBBox(pt, bbox) === false) {
        return false;
    }
    // normalize to multipolygon
    if (type === "Polygon") {
        polys = [polys];
    }
    var insidePoly = false;
    for (var i = 0; i < polys.length && !insidePoly; i++) {
        // check if it is in the outer ring first
        if (inRing(pt, polys[i][0], options.ignoreBoundary)) {
            var inHole = false;
            var k = 1;
            // check for the point in any of the holes
            while (k < polys[i].length && !inHole) {
                if (inRing(pt, polys[i][k], !options.ignoreBoundary)) {
                    inHole = true;
                }
                k++;
            }
            if (!inHole) {
                insidePoly = true;
            }
        }
    }
    return insidePoly;
}
exports.default = booleanPointInPolygon;
/**
 * inRing
 *
 * @private
 * @param {Array<number>} pt [x,y]
 * @param {Array<Array<number>>} ring [[x,y], [x,y],..]
 * @param {boolean} ignoreBoundary ignoreBoundary
 * @returns {boolean} inRing
 */
function inRing(pt, ring, ignoreBoundary) {
    var isInside = false;
    if (ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1]) {
        ring = ring.slice(0, ring.length - 1);
    }
    for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        var xi = ring[i][0];
        var yi = ring[i][1];
        var xj = ring[j][0];
        var yj = ring[j][1];
        var onBoundary = (pt[1] * (xi - xj) + yi * (xj - pt[0]) + yj * (pt[0] - xi) === 0) &&
            ((xi - pt[0]) * (xj - pt[0]) <= 0) && ((yi - pt[1]) * (yj - pt[1]) <= 0);
        if (onBoundary) {
            return !ignoreBoundary;
        }
        var intersect = ((yi > pt[1]) !== (yj > pt[1])) &&
            (pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi);
        if (intersect) {
            isInside = !isInside;
        }
    }
    return isInside;
}
/**
 * inBBox
 *
 * @private
 * @param {Position} pt point [x,y]
 * @param {BBox} bbox BBox [west, south, east, north]
 * @returns {boolean} true/false if point is inside BBox
 */
function inBBox(pt, bbox) {
    return bbox[0] <= pt[0] &&
        bbox[1] <= pt[1] &&
        bbox[2] >= pt[0] &&
        bbox[3] >= pt[1];
}


/***/ }),

/***/ "./node_modules/@turf/centroid/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@turf/centroid/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var meta_1 = __webpack_require__(/*! @turf/meta */ "./node_modules/@turf/meta/index.js");
var helpers_1 = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/index.js");
/**
 * Takes one or more features and calculates the centroid using the mean of all vertices.
 * This lessens the effect of small islands and artifacts when calculating the centroid of a set of polygons.
 *
 * @name centroid
 * @param {GeoJSON} geojson GeoJSON to be centered
 * @param {Object} [options={}] Optional Parameters
 * @param {Object} [options.properties={}] an Object that is used as the {@link Feature}'s properties
 * @returns {Feature<Point>} the centroid of the input features
 * @example
 * var polygon = turf.polygon([[[-81, 41], [-88, 36], [-84, 31], [-80, 33], [-77, 39], [-81, 41]]]);
 *
 * var centroid = turf.centroid(polygon);
 *
 * //addToMap
 * var addToMap = [polygon, centroid]
 */
function centroid(geojson, options) {
    if (options === void 0) { options = {}; }
    var xSum = 0;
    var ySum = 0;
    var len = 0;
    meta_1.coordEach(geojson, function (coord) {
        xSum += coord[0];
        ySum += coord[1];
        len++;
    });
    return helpers_1.point([xSum / len, ySum / len], options.properties);
}
exports.default = centroid;


/***/ }),

/***/ "./node_modules/@turf/distance/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@turf/distance/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invariant_1 = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/index.js");
var helpers_1 = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/index.js");
//http://en.wikipedia.org/wiki/Haversine_formula
//http://www.movable-type.co.uk/scripts/latlong.html
/**
 * Calculates the distance between two {@link Point|points} in degrees, radians, miles, or kilometers.
 * This uses the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) to account for global curvature.
 *
 * @name distance
 * @param {Coord} from origin point
 * @param {Coord} to destination point
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] can be degrees, radians, miles, or kilometers
 * @returns {number} distance between the two points
 * @example
 * var from = turf.point([-75.343, 39.984]);
 * var to = turf.point([-75.534, 39.123]);
 * var options = {units: 'miles'};
 *
 * var distance = turf.distance(from, to, options);
 *
 * //addToMap
 * var addToMap = [from, to];
 * from.properties.distance = distance;
 * to.properties.distance = distance;
 */
function distance(from, to, options) {
    if (options === void 0) { options = {}; }
    var coordinates1 = invariant_1.getCoord(from);
    var coordinates2 = invariant_1.getCoord(to);
    var dLat = helpers_1.degreesToRadians((coordinates2[1] - coordinates1[1]));
    var dLon = helpers_1.degreesToRadians((coordinates2[0] - coordinates1[0]));
    var lat1 = helpers_1.degreesToRadians(coordinates1[1]);
    var lat2 = helpers_1.degreesToRadians(coordinates2[1]);
    var a = Math.pow(Math.sin(dLat / 2), 2) +
        Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    return helpers_1.radiansToLength(2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)), options.units);
}
exports.default = distance;


/***/ }),

/***/ "./node_modules/@turf/helpers/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@turf/helpers/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module helpers
 */
/**
 * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
 *
 * @memberof helpers
 * @type {number}
 */
exports.earthRadius = 6371008.8;
/**
 * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.factors = {
    centimeters: exports.earthRadius * 100,
    centimetres: exports.earthRadius * 100,
    degrees: exports.earthRadius / 111325,
    feet: exports.earthRadius * 3.28084,
    inches: exports.earthRadius * 39.370,
    kilometers: exports.earthRadius / 1000,
    kilometres: exports.earthRadius / 1000,
    meters: exports.earthRadius,
    metres: exports.earthRadius,
    miles: exports.earthRadius / 1609.344,
    millimeters: exports.earthRadius * 1000,
    millimetres: exports.earthRadius * 1000,
    nauticalmiles: exports.earthRadius / 1852,
    radians: 1,
    yards: exports.earthRadius / 1.0936,
};
/**
 * Units of measurement factors based on 1 meter.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.unitsFactors = {
    centimeters: 100,
    centimetres: 100,
    degrees: 1 / 111325,
    feet: 3.28084,
    inches: 39.370,
    kilometers: 1 / 1000,
    kilometres: 1 / 1000,
    meters: 1,
    metres: 1,
    miles: 1 / 1609.344,
    millimeters: 1000,
    millimetres: 1000,
    nauticalmiles: 1 / 1852,
    radians: 1 / exports.earthRadius,
    yards: 1 / 1.0936,
};
/**
 * Area of measurement factors based on 1 square meter.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.areaFactors = {
    acres: 0.000247105,
    centimeters: 10000,
    centimetres: 10000,
    feet: 10.763910417,
    inches: 1550.003100006,
    kilometers: 0.000001,
    kilometres: 0.000001,
    meters: 1,
    metres: 1,
    miles: 3.86e-7,
    millimeters: 1000000,
    millimetres: 1000000,
    yards: 1.195990046,
};
/**
 * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
 *
 * @name feature
 * @param {Geometry} geometry input geometry
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature} a GeoJSON Feature
 * @example
 * var geometry = {
 *   "type": "Point",
 *   "coordinates": [110, 50]
 * };
 *
 * var feature = turf.feature(geometry);
 *
 * //=feature
 */
function feature(geom, properties, options) {
    if (options === void 0) { options = {}; }
    var feat = { type: "Feature" };
    if (options.id === 0 || options.id) {
        feat.id = options.id;
    }
    if (options.bbox) {
        feat.bbox = options.bbox;
    }
    feat.properties = properties || {};
    feat.geometry = geom;
    return feat;
}
exports.feature = feature;
/**
 * Creates a GeoJSON {@link Geometry} from a Geometry string type & coordinates.
 * For GeometryCollection type use `helpers.geometryCollection`
 *
 * @name geometry
 * @param {string} type Geometry Type
 * @param {Array<any>} coordinates Coordinates
 * @param {Object} [options={}] Optional Parameters
 * @returns {Geometry} a GeoJSON Geometry
 * @example
 * var type = "Point";
 * var coordinates = [110, 50];
 * var geometry = turf.geometry(type, coordinates);
 * // => geometry
 */
function geometry(type, coordinates, options) {
    if (options === void 0) { options = {}; }
    switch (type) {
        case "Point": return point(coordinates).geometry;
        case "LineString": return lineString(coordinates).geometry;
        case "Polygon": return polygon(coordinates).geometry;
        case "MultiPoint": return multiPoint(coordinates).geometry;
        case "MultiLineString": return multiLineString(coordinates).geometry;
        case "MultiPolygon": return multiPolygon(coordinates).geometry;
        default: throw new Error(type + " is invalid");
    }
}
exports.geometry = geometry;
/**
 * Creates a {@link Point} {@link Feature} from a Position.
 *
 * @name point
 * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Point>} a Point feature
 * @example
 * var point = turf.point([-75.343, 39.984]);
 *
 * //=point
 */
function point(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "Point",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.point = point;
/**
 * Creates a {@link Point} {@link FeatureCollection} from an Array of Point coordinates.
 *
 * @name points
 * @param {Array<Array<number>>} coordinates an array of Points
 * @param {Object} [properties={}] Translate these properties to each Feature
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Point>} Point Feature
 * @example
 * var points = turf.points([
 *   [-75, 39],
 *   [-80, 45],
 *   [-78, 50]
 * ]);
 *
 * //=points
 */
function points(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return point(coords, properties);
    }), options);
}
exports.points = points;
/**
 * Creates a {@link Polygon} {@link Feature} from an Array of LinearRings.
 *
 * @name polygon
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Polygon>} Polygon Feature
 * @example
 * var polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });
 *
 * //=polygon
 */
function polygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    for (var _i = 0, coordinates_1 = coordinates; _i < coordinates_1.length; _i++) {
        var ring = coordinates_1[_i];
        if (ring.length < 4) {
            throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
        }
        for (var j = 0; j < ring[ring.length - 1].length; j++) {
            // Check if first point of Polygon contains two numbers
            if (ring[ring.length - 1][j] !== ring[0][j]) {
                throw new Error("First and last Position are not equivalent.");
            }
        }
    }
    var geom = {
        type: "Polygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.polygon = polygon;
/**
 * Creates a {@link Polygon} {@link FeatureCollection} from an Array of Polygon coordinates.
 *
 * @name polygons
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygon coordinates
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Polygon>} Polygon FeatureCollection
 * @example
 * var polygons = turf.polygons([
 *   [[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]],
 *   [[[-15, 42], [-14, 46], [-12, 41], [-17, 44], [-15, 42]]],
 * ]);
 *
 * //=polygons
 */
function polygons(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return polygon(coords, properties);
    }), options);
}
exports.polygons = polygons;
/**
 * Creates a {@link LineString} {@link Feature} from an Array of Positions.
 *
 * @name lineString
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<LineString>} LineString Feature
 * @example
 * var linestring1 = turf.lineString([[-24, 63], [-23, 60], [-25, 65], [-20, 69]], {name: 'line 1'});
 * var linestring2 = turf.lineString([[-14, 43], [-13, 40], [-15, 45], [-10, 49]], {name: 'line 2'});
 *
 * //=linestring1
 * //=linestring2
 */
function lineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    if (coordinates.length < 2) {
        throw new Error("coordinates must be an array of two or more positions");
    }
    var geom = {
        type: "LineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.lineString = lineString;
/**
 * Creates a {@link LineString} {@link FeatureCollection} from an Array of LineString coordinates.
 *
 * @name lineStrings
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<LineString>} LineString FeatureCollection
 * @example
 * var linestrings = turf.lineStrings([
 *   [[-24, 63], [-23, 60], [-25, 65], [-20, 69]],
 *   [[-14, 43], [-13, 40], [-15, 45], [-10, 49]]
 * ]);
 *
 * //=linestrings
 */
function lineStrings(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return lineString(coords, properties);
    }), options);
}
exports.lineStrings = lineStrings;
/**
 * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
 *
 * @name featureCollection
 * @param {Feature[]} features input features
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {FeatureCollection} FeatureCollection of Features
 * @example
 * var locationA = turf.point([-75.343, 39.984], {name: 'Location A'});
 * var locationB = turf.point([-75.833, 39.284], {name: 'Location B'});
 * var locationC = turf.point([-75.534, 39.123], {name: 'Location C'});
 *
 * var collection = turf.featureCollection([
 *   locationA,
 *   locationB,
 *   locationC
 * ]);
 *
 * //=collection
 */
function featureCollection(features, options) {
    if (options === void 0) { options = {}; }
    var fc = { type: "FeatureCollection" };
    if (options.id) {
        fc.id = options.id;
    }
    if (options.bbox) {
        fc.bbox = options.bbox;
    }
    fc.features = features;
    return fc;
}
exports.featureCollection = featureCollection;
/**
 * Creates a {@link Feature<MultiLineString>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiLineString
 * @param {Array<Array<Array<number>>>} coordinates an array of LineStrings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiLineString>} a MultiLineString feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiLine = turf.multiLineString([[[0,0],[10,10]]]);
 *
 * //=multiLine
 */
function multiLineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiLineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiLineString = multiLineString;
/**
 * Creates a {@link Feature<MultiPoint>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPoint
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPoint>} a MultiPoint feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPt = turf.multiPoint([[0,0],[10,10]]);
 *
 * //=multiPt
 */
function multiPoint(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPoint",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiPoint = multiPoint;
/**
 * Creates a {@link Feature<MultiPolygon>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPolygon
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygons
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPolygon>} a multipolygon feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPoly = turf.multiPolygon([[[[0,0],[0,10],[10,10],[10,0],[0,0]]]]);
 *
 * //=multiPoly
 *
 */
function multiPolygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPolygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiPolygon = multiPolygon;
/**
 * Creates a {@link Feature<GeometryCollection>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name geometryCollection
 * @param {Array<Geometry>} geometries an array of GeoJSON Geometries
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<GeometryCollection>} a GeoJSON GeometryCollection Feature
 * @example
 * var pt = turf.geometry("Point", [100, 0]);
 * var line = turf.geometry("LineString", [[101, 0], [102, 1]]);
 * var collection = turf.geometryCollection([pt, line]);
 *
 * // => collection
 */
function geometryCollection(geometries, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "GeometryCollection",
        geometries: geometries,
    };
    return feature(geom, properties, options);
}
exports.geometryCollection = geometryCollection;
/**
 * Round number to precision
 *
 * @param {number} num Number
 * @param {number} [precision=0] Precision
 * @returns {number} rounded number
 * @example
 * turf.round(120.4321)
 * //=120
 *
 * turf.round(120.4321, 2)
 * //=120.43
 */
function round(num, precision) {
    if (precision === void 0) { precision = 0; }
    if (precision && !(precision >= 0)) {
        throw new Error("precision must be a positive number");
    }
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(num * multiplier) / multiplier;
}
exports.round = round;
/**
 * Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name radiansToLength
 * @param {number} radians in radians across the sphere
 * @param {string} [units="kilometers"] can be degrees, radians, miles, or kilometers inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} distance
 */
function radiansToLength(radians, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = exports.factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return radians * factor;
}
exports.radiansToLength = radiansToLength;
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name lengthToRadians
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, or kilometers inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} radians
 */
function lengthToRadians(distance, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = exports.factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return distance / factor;
}
exports.lengthToRadians = lengthToRadians;
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into degrees
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, centimeters, kilometres, feet
 *
 * @name lengthToDegrees
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, or kilometers inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} degrees
 */
function lengthToDegrees(distance, units) {
    return radiansToDegrees(lengthToRadians(distance, units));
}
exports.lengthToDegrees = lengthToDegrees;
/**
 * Converts any bearing angle from the north line direction (positive clockwise)
 * and returns an angle between 0-360 degrees (positive clockwise), 0 being the north line
 *
 * @name bearingToAzimuth
 * @param {number} bearing angle, between -180 and +180 degrees
 * @returns {number} angle between 0 and 360 degrees
 */
function bearingToAzimuth(bearing) {
    var angle = bearing % 360;
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}
exports.bearingToAzimuth = bearingToAzimuth;
/**
 * Converts an angle in radians to degrees
 *
 * @name radiansToDegrees
 * @param {number} radians angle in radians
 * @returns {number} degrees between 0 and 360 degrees
 */
function radiansToDegrees(radians) {
    var degrees = radians % (2 * Math.PI);
    return degrees * 180 / Math.PI;
}
exports.radiansToDegrees = radiansToDegrees;
/**
 * Converts an angle in degrees to radians
 *
 * @name degreesToRadians
 * @param {number} degrees angle between 0 and 360 degrees
 * @returns {number} angle in radians
 */
function degreesToRadians(degrees) {
    var radians = degrees % 360;
    return radians * Math.PI / 180;
}
exports.degreesToRadians = degreesToRadians;
/**
 * Converts a length to the requested unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @param {number} length to be converted
 * @param {Units} [originalUnit="kilometers"] of the length
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted length
 */
function convertLength(length, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "kilometers"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(length >= 0)) {
        throw new Error("length must be a positive number");
    }
    return radiansToLength(lengthToRadians(length, originalUnit), finalUnit);
}
exports.convertLength = convertLength;
/**
 * Converts a area to the requested unit.
 * Valid units: kilometers, kilometres, meters, metres, centimetres, millimeters, acres, miles, yards, feet, inches
 * @param {number} area to be converted
 * @param {Units} [originalUnit="meters"] of the distance
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted distance
 */
function convertArea(area, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "meters"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(area >= 0)) {
        throw new Error("area must be a positive number");
    }
    var startFactor = exports.areaFactors[originalUnit];
    if (!startFactor) {
        throw new Error("invalid original units");
    }
    var finalFactor = exports.areaFactors[finalUnit];
    if (!finalFactor) {
        throw new Error("invalid final units");
    }
    return (area / startFactor) * finalFactor;
}
exports.convertArea = convertArea;
/**
 * isNumber
 *
 * @param {*} num Number to validate
 * @returns {boolean} true/false
 * @example
 * turf.isNumber(123)
 * //=true
 * turf.isNumber('foo')
 * //=false
 */
function isNumber(num) {
    return !isNaN(num) && num !== null && !Array.isArray(num) && !/^\s*$/.test(num);
}
exports.isNumber = isNumber;
/**
 * isObject
 *
 * @param {*} input variable to validate
 * @returns {boolean} true/false
 * @example
 * turf.isObject({elevation: 10})
 * //=true
 * turf.isObject('foo')
 * //=false
 */
function isObject(input) {
    return (!!input) && (input.constructor === Object);
}
exports.isObject = isObject;
/**
 * Validate BBox
 *
 * @private
 * @param {Array<number>} bbox BBox to validate
 * @returns {void}
 * @throws Error if BBox is not valid
 * @example
 * validateBBox([-180, -40, 110, 50])
 * //=OK
 * validateBBox([-180, -40])
 * //=Error
 * validateBBox('Foo')
 * //=Error
 * validateBBox(5)
 * //=Error
 * validateBBox(null)
 * //=Error
 * validateBBox(undefined)
 * //=Error
 */
function validateBBox(bbox) {
    if (!bbox) {
        throw new Error("bbox is required");
    }
    if (!Array.isArray(bbox)) {
        throw new Error("bbox must be an Array");
    }
    if (bbox.length !== 4 && bbox.length !== 6) {
        throw new Error("bbox must be an Array of 4 or 6 numbers");
    }
    bbox.forEach(function (num) {
        if (!isNumber(num)) {
            throw new Error("bbox must only contain numbers");
        }
    });
}
exports.validateBBox = validateBBox;
/**
 * Validate Id
 *
 * @private
 * @param {string|number} id Id to validate
 * @returns {void}
 * @throws Error if Id is not valid
 * @example
 * validateId([-180, -40, 110, 50])
 * //=Error
 * validateId([-180, -40])
 * //=Error
 * validateId('Foo')
 * //=OK
 * validateId(5)
 * //=OK
 * validateId(null)
 * //=Error
 * validateId(undefined)
 * //=Error
 */
function validateId(id) {
    if (!id) {
        throw new Error("id is required");
    }
    if (["string", "number"].indexOf(typeof id) === -1) {
        throw new Error("id must be a number or a string");
    }
}
exports.validateId = validateId;
// Deprecated methods
function radians2degrees() {
    throw new Error("method has been renamed to `radiansToDegrees`");
}
exports.radians2degrees = radians2degrees;
function degrees2radians() {
    throw new Error("method has been renamed to `degreesToRadians`");
}
exports.degrees2radians = degrees2radians;
function distanceToDegrees() {
    throw new Error("method has been renamed to `lengthToDegrees`");
}
exports.distanceToDegrees = distanceToDegrees;
function distanceToRadians() {
    throw new Error("method has been renamed to `lengthToRadians`");
}
exports.distanceToRadians = distanceToRadians;
function radiansToDistance() {
    throw new Error("method has been renamed to `radiansToLength`");
}
exports.radiansToDistance = radiansToDistance;
function bearingToAngle() {
    throw new Error("method has been renamed to `bearingToAzimuth`");
}
exports.bearingToAngle = bearingToAngle;
function convertDistance() {
    throw new Error("method has been renamed to `convertLength`");
}
exports.convertDistance = convertDistance;


/***/ }),

/***/ "./node_modules/@turf/invariant/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@turf/invariant/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/index.js");
/**
 * Unwrap a coordinate from a Point Feature, Geometry or a single coordinate.
 *
 * @name getCoord
 * @param {Array<number>|Geometry<Point>|Feature<Point>} coord GeoJSON Point or an Array of numbers
 * @returns {Array<number>} coordinates
 * @example
 * var pt = turf.point([10, 10]);
 *
 * var coord = turf.getCoord(pt);
 * //= [10, 10]
 */
function getCoord(coord) {
    if (!coord) {
        throw new Error("coord is required");
    }
    if (!Array.isArray(coord)) {
        if (coord.type === "Feature" && coord.geometry !== null && coord.geometry.type === "Point") {
            return coord.geometry.coordinates;
        }
        if (coord.type === "Point") {
            return coord.coordinates;
        }
    }
    if (Array.isArray(coord) && coord.length >= 2 && !Array.isArray(coord[0]) && !Array.isArray(coord[1])) {
        return coord;
    }
    throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
exports.getCoord = getCoord;
/**
 * Unwrap coordinates from a Feature, Geometry Object or an Array
 *
 * @name getCoords
 * @param {Array<any>|Geometry|Feature} coords Feature, Geometry Object or an Array
 * @returns {Array<any>} coordinates
 * @example
 * var poly = turf.polygon([[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]);
 *
 * var coords = turf.getCoords(poly);
 * //= [[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]
 */
function getCoords(coords) {
    if (Array.isArray(coords)) {
        return coords;
    }
    // Feature
    if (coords.type === "Feature") {
        if (coords.geometry !== null) {
            return coords.geometry.coordinates;
        }
    }
    else {
        // Geometry
        if (coords.coordinates) {
            return coords.coordinates;
        }
    }
    throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
}
exports.getCoords = getCoords;
/**
 * Checks if coordinates contains a number
 *
 * @name containsNumber
 * @param {Array<any>} coordinates GeoJSON Coordinates
 * @returns {boolean} true if Array contains a number
 */
function containsNumber(coordinates) {
    if (coordinates.length > 1 && helpers_1.isNumber(coordinates[0]) && helpers_1.isNumber(coordinates[1])) {
        return true;
    }
    if (Array.isArray(coordinates[0]) && coordinates[0].length) {
        return containsNumber(coordinates[0]);
    }
    throw new Error("coordinates must only contain numbers");
}
exports.containsNumber = containsNumber;
/**
 * Enforce expectations about types of GeoJSON objects for Turf.
 *
 * @name geojsonType
 * @param {GeoJSON} value any GeoJSON object
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function geojsonType(value, type, name) {
    if (!type || !name) {
        throw new Error("type and name required");
    }
    if (!value || value.type !== type) {
        throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + value.type);
    }
}
exports.geojsonType = geojsonType;
/**
 * Enforce expectations about types of {@link Feature} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @name featureOf
 * @param {Feature} feature a feature with an expected geometry type
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} error if value is not the expected type.
 */
function featureOf(feature, type, name) {
    if (!feature) {
        throw new Error("No feature passed");
    }
    if (!name) {
        throw new Error(".featureOf() requires a name");
    }
    if (!feature || feature.type !== "Feature" || !feature.geometry) {
        throw new Error("Invalid input to " + name + ", Feature with geometry required");
    }
    if (!feature.geometry || feature.geometry.type !== type) {
        throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + feature.geometry.type);
    }
}
exports.featureOf = featureOf;
/**
 * Enforce expectations about types of {@link FeatureCollection} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @name collectionOf
 * @param {FeatureCollection} featureCollection a FeatureCollection for which features will be judged
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function collectionOf(featureCollection, type, name) {
    if (!featureCollection) {
        throw new Error("No featureCollection passed");
    }
    if (!name) {
        throw new Error(".collectionOf() requires a name");
    }
    if (!featureCollection || featureCollection.type !== "FeatureCollection") {
        throw new Error("Invalid input to " + name + ", FeatureCollection required");
    }
    for (var _i = 0, _a = featureCollection.features; _i < _a.length; _i++) {
        var feature = _a[_i];
        if (!feature || feature.type !== "Feature" || !feature.geometry) {
            throw new Error("Invalid input to " + name + ", Feature with geometry required");
        }
        if (!feature.geometry || feature.geometry.type !== type) {
            throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + feature.geometry.type);
        }
    }
}
exports.collectionOf = collectionOf;
/**
 * Get Geometry from Feature or Geometry Object
 *
 * @param {Feature|Geometry} geojson GeoJSON Feature or Geometry Object
 * @returns {Geometry|null} GeoJSON Geometry Object
 * @throws {Error} if geojson is not a Feature or Geometry Object
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getGeom(point)
 * //={"type": "Point", "coordinates": [110, 40]}
 */
function getGeom(geojson) {
    if (geojson.type === "Feature") {
        return geojson.geometry;
    }
    return geojson;
}
exports.getGeom = getGeom;
/**
 * Get GeoJSON object's type, Geometry type is prioritize.
 *
 * @param {GeoJSON} geojson GeoJSON object
 * @param {string} [name="geojson"] name of the variable to display in error message
 * @returns {string} GeoJSON type
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getType(point)
 * //="Point"
 */
function getType(geojson, name) {
    if (geojson.type === "FeatureCollection") {
        return "FeatureCollection";
    }
    if (geojson.type === "GeometryCollection") {
        return "GeometryCollection";
    }
    if (geojson.type === "Feature" && geojson.geometry !== null) {
        return geojson.geometry.type;
    }
    return geojson.type;
}
exports.getType = getType;


/***/ }),

/***/ "./node_modules/@turf/meta/index.js":
/*!******************************************!*\
  !*** ./node_modules/@turf/meta/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var helpers = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/index.js");

/**
 * Callback for coordEach
 *
 * @callback coordEachCallback
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Iterate over coordinates in any GeoJSON object, similar to Array.forEach()
 *
 * @name coordEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordEach(features, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function coordEach(geojson, callback, excludeWrapCoord) {
    // Handles null Geometry -- Skips this GeoJSON
    if (geojson === null) return;
    var j, k, l, geometry, stopG, coords,
        geometryMaybeCollection,
        wrapShrink = 0,
        coordIndex = 0,
        isGeometryCollection,
        type = geojson.type,
        isFeatureCollection = type === 'FeatureCollection',
        isFeature = type === 'Feature',
        stop = isFeatureCollection ? geojson.features.length : 1;

    // This logic may look a little weird. The reason why it is that way
    // is because it's trying to be fast. GeoJSON supports multiple kinds
    // of objects at its root: FeatureCollection, Features, Geometries.
    // This function has the responsibility of handling all of them, and that
    // means that some of the `for` loops you see below actually just don't apply
    // to certain inputs. For instance, if you give this just a
    // Point geometry, then both loops are short-circuited and all we do
    // is gradually rename the input until it's called 'geometry'.
    //
    // This also aims to allocate as few resources as possible: just a
    // few numbers and booleans, rather than any temporary arrays as would
    // be required with the normalization approach.
    for (var featureIndex = 0; featureIndex < stop; featureIndex++) {
        geometryMaybeCollection = (isFeatureCollection ? geojson.features[featureIndex].geometry :
            (isFeature ? geojson.geometry : geojson));
        isGeometryCollection = (geometryMaybeCollection) ? geometryMaybeCollection.type === 'GeometryCollection' : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

        for (var geomIndex = 0; geomIndex < stopG; geomIndex++) {
            var multiFeatureIndex = 0;
            var geometryIndex = 0;
            geometry = isGeometryCollection ?
                geometryMaybeCollection.geometries[geomIndex] : geometryMaybeCollection;

            // Handles null Geometry -- Skips this geometry
            if (geometry === null) continue;
            coords = geometry.coordinates;
            var geomType = geometry.type;

            wrapShrink = (excludeWrapCoord && (geomType === 'Polygon' || geomType === 'MultiPolygon')) ? 1 : 0;

            switch (geomType) {
            case null:
                break;
            case 'Point':
                if (callback(coords, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                coordIndex++;
                multiFeatureIndex++;
                break;
            case 'LineString':
            case 'MultiPoint':
                for (j = 0; j < coords.length; j++) {
                    if (callback(coords[j], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                    coordIndex++;
                    if (geomType === 'MultiPoint') multiFeatureIndex++;
                }
                if (geomType === 'LineString') multiFeatureIndex++;
                break;
            case 'Polygon':
            case 'MultiLineString':
                for (j = 0; j < coords.length; j++) {
                    for (k = 0; k < coords[j].length - wrapShrink; k++) {
                        if (callback(coords[j][k], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                        coordIndex++;
                    }
                    if (geomType === 'MultiLineString') multiFeatureIndex++;
                    if (geomType === 'Polygon') geometryIndex++;
                }
                if (geomType === 'Polygon') multiFeatureIndex++;
                break;
            case 'MultiPolygon':
                for (j = 0; j < coords.length; j++) {
                    geometryIndex = 0;
                    for (k = 0; k < coords[j].length; k++) {
                        for (l = 0; l < coords[j][k].length - wrapShrink; l++) {
                            if (callback(coords[j][k][l], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                            coordIndex++;
                        }
                        geometryIndex++;
                    }
                    multiFeatureIndex++;
                }
                break;
            case 'GeometryCollection':
                for (j = 0; j < geometry.geometries.length; j++)
                    if (coordEach(geometry.geometries[j], callback, excludeWrapCoord) === false) return false;
                break;
            default:
                throw new Error('Unknown Geometry Type');
            }
        }
    }
}

/**
 * Callback for coordReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback coordReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Reduce coordinates in any GeoJSON object, similar to Array.reduce()
 *
 * @name coordReduce
 * @param {FeatureCollection|Geometry|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentCoord, coordIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordReduce(features, function (previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentCoord;
 * });
 */
function coordReduce(geojson, callback, initialValue, excludeWrapCoord) {
    var previousValue = initialValue;
    coordEach(geojson, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
        if (coordIndex === 0 && initialValue === undefined) previousValue = currentCoord;
        else previousValue = callback(previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
    }, excludeWrapCoord);
    return previousValue;
}

/**
 * Callback for propEach
 *
 * @callback propEachCallback
 * @param {Object} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over properties in any GeoJSON object, similar to Array.forEach()
 *
 * @name propEach
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentProperties, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propEach(features, function (currentProperties, featureIndex) {
 *   //=currentProperties
 *   //=featureIndex
 * });
 */
function propEach(geojson, callback) {
    var i;
    switch (geojson.type) {
    case 'FeatureCollection':
        for (i = 0; i < geojson.features.length; i++) {
            if (callback(geojson.features[i].properties, i) === false) break;
        }
        break;
    case 'Feature':
        callback(geojson.properties, 0);
        break;
    }
}


/**
 * Callback for propReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback propReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {*} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Reduce properties in any GeoJSON object into a single value,
 * similar to how Array.reduce works. However, in this case we lazily run
 * the reduction, so an array of all properties is unnecessary.
 *
 * @name propReduce
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentProperties, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propReduce(features, function (previousValue, currentProperties, featureIndex) {
 *   //=previousValue
 *   //=currentProperties
 *   //=featureIndex
 *   return currentProperties
 * });
 */
function propReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    propEach(geojson, function (currentProperties, featureIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentProperties;
        else previousValue = callback(previousValue, currentProperties, featureIndex);
    });
    return previousValue;
}

/**
 * Callback for featureEach
 *
 * @callback featureEachCallback
 * @param {Feature<any>} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name featureEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.featureEach(features, function (currentFeature, featureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 * });
 */
function featureEach(geojson, callback) {
    if (geojson.type === 'Feature') {
        callback(geojson, 0);
    } else if (geojson.type === 'FeatureCollection') {
        for (var i = 0; i < geojson.features.length; i++) {
            if (callback(geojson.features[i], i) === false) break;
        }
    }
}

/**
 * Callback for featureReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback featureReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name featureReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.featureReduce(features, function (previousValue, currentFeature, featureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   return currentFeature
 * });
 */
function featureReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    featureEach(geojson, function (currentFeature, featureIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentFeature;
        else previousValue = callback(previousValue, currentFeature, featureIndex);
    });
    return previousValue;
}

/**
 * Get all coordinates from any GeoJSON object.
 *
 * @name coordAll
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @returns {Array<Array<number>>} coordinate position array
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * var coords = turf.coordAll(features);
 * //= [[26, 37], [36, 53]]
 */
function coordAll(geojson) {
    var coords = [];
    coordEach(geojson, function (coord) {
        coords.push(coord);
    });
    return coords;
}

/**
 * Callback for geomEach
 *
 * @callback geomEachCallback
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */

/**
 * Iterate over each geometry in any GeoJSON object, similar to Array.forEach()
 *
 * @name geomEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomEach(features, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 * });
 */
function geomEach(geojson, callback) {
    var i, j, g, geometry, stopG,
        geometryMaybeCollection,
        isGeometryCollection,
        featureProperties,
        featureBBox,
        featureId,
        featureIndex = 0,
        isFeatureCollection = geojson.type === 'FeatureCollection',
        isFeature = geojson.type === 'Feature',
        stop = isFeatureCollection ? geojson.features.length : 1;

    // This logic may look a little weird. The reason why it is that way
    // is because it's trying to be fast. GeoJSON supports multiple kinds
    // of objects at its root: FeatureCollection, Features, Geometries.
    // This function has the responsibility of handling all of them, and that
    // means that some of the `for` loops you see below actually just don't apply
    // to certain inputs. For instance, if you give this just a
    // Point geometry, then both loops are short-circuited and all we do
    // is gradually rename the input until it's called 'geometry'.
    //
    // This also aims to allocate as few resources as possible: just a
    // few numbers and booleans, rather than any temporary arrays as would
    // be required with the normalization approach.
    for (i = 0; i < stop; i++) {

        geometryMaybeCollection = (isFeatureCollection ? geojson.features[i].geometry :
            (isFeature ? geojson.geometry : geojson));
        featureProperties = (isFeatureCollection ? geojson.features[i].properties :
            (isFeature ? geojson.properties : {}));
        featureBBox = (isFeatureCollection ? geojson.features[i].bbox :
            (isFeature ? geojson.bbox : undefined));
        featureId = (isFeatureCollection ? geojson.features[i].id :
            (isFeature ? geojson.id : undefined));
        isGeometryCollection = (geometryMaybeCollection) ? geometryMaybeCollection.type === 'GeometryCollection' : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

        for (g = 0; g < stopG; g++) {
            geometry = isGeometryCollection ?
                geometryMaybeCollection.geometries[g] : geometryMaybeCollection;

            // Handle null Geometry
            if (geometry === null) {
                if (callback(null, featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                continue;
            }
            switch (geometry.type) {
            case 'Point':
            case 'LineString':
            case 'MultiPoint':
            case 'Polygon':
            case 'MultiLineString':
            case 'MultiPolygon': {
                if (callback(geometry, featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                break;
            }
            case 'GeometryCollection': {
                for (j = 0; j < geometry.geometries.length; j++) {
                    if (callback(geometry.geometries[j], featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                }
                break;
            }
            default:
                throw new Error('Unknown Geometry Type');
            }
        }
        // Only increase `featureIndex` per each feature
        featureIndex++;
    }
}

/**
 * Callback for geomReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback geomReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */

/**
 * Reduce geometry in any GeoJSON object, similar to Array.reduce().
 *
 * @name geomReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomReduce(features, function (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=previousValue
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 *   return currentGeometry
 * });
 */
function geomReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    geomEach(geojson, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentGeometry;
        else previousValue = callback(previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId);
    });
    return previousValue;
}

/**
 * Callback for flattenEach
 *
 * @callback flattenEachCallback
 * @param {Feature} currentFeature The current flattened feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */

/**
 * Iterate over flattened features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name flattenEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex, multiFeatureIndex)
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenEach(features, function (currentFeature, featureIndex, multiFeatureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 * });
 */
function flattenEach(geojson, callback) {
    geomEach(geojson, function (geometry, featureIndex, properties, bbox, id) {
        // Callback for single geometry
        var type = (geometry === null) ? null : geometry.type;
        switch (type) {
        case null:
        case 'Point':
        case 'LineString':
        case 'Polygon':
            if (callback(helpers.feature(geometry, properties, {bbox: bbox, id: id}), featureIndex, 0) === false) return false;
            return;
        }

        var geomType;

        // Callback for multi-geometry
        switch (type) {
        case 'MultiPoint':
            geomType = 'Point';
            break;
        case 'MultiLineString':
            geomType = 'LineString';
            break;
        case 'MultiPolygon':
            geomType = 'Polygon';
            break;
        }

        for (var multiFeatureIndex = 0; multiFeatureIndex < geometry.coordinates.length; multiFeatureIndex++) {
            var coordinate = geometry.coordinates[multiFeatureIndex];
            var geom = {
                type: geomType,
                coordinates: coordinate
            };
            if (callback(helpers.feature(geom, properties), featureIndex, multiFeatureIndex) === false) return false;
        }
    });
}

/**
 * Callback for flattenReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback flattenReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */

/**
 * Reduce flattened features in any GeoJSON object, similar to Array.reduce().
 *
 * @name flattenReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex, multiFeatureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenReduce(features, function (previousValue, currentFeature, featureIndex, multiFeatureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   return currentFeature
 * });
 */
function flattenReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    flattenEach(geojson, function (currentFeature, featureIndex, multiFeatureIndex) {
        if (featureIndex === 0 && multiFeatureIndex === 0 && initialValue === undefined) previousValue = currentFeature;
        else previousValue = callback(previousValue, currentFeature, featureIndex, multiFeatureIndex);
    });
    return previousValue;
}

/**
 * Callback for segmentEach
 *
 * @callback segmentEachCallback
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 * @returns {void}
 */

/**
 * Iterate over 2-vertex line segment in any GeoJSON object, similar to Array.forEach()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex)
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentEach(polygon, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //=currentSegment
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   //=segmentIndex
 * });
 *
 * // Calculate the total number of segments
 * var total = 0;
 * turf.segmentEach(polygon, function () {
 *     total++;
 * });
 */
function segmentEach(geojson, callback) {
    flattenEach(geojson, function (feature, featureIndex, multiFeatureIndex) {
        var segmentIndex = 0;

        // Exclude null Geometries
        if (!feature.geometry) return;
        // (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
        var type = feature.geometry.type;
        if (type === 'Point' || type === 'MultiPoint') return;

        // Generate 2-vertex line segments
        var previousCoords;
        var previousFeatureIndex = 0;
        var previousMultiIndex = 0;
        var prevGeomIndex = 0;
        if (coordEach(feature, function (currentCoord, coordIndex, featureIndexCoord, multiPartIndexCoord, geometryIndex) {
            // Simulating a meta.coordReduce() since `reduce` operations cannot be stopped by returning `false`
            if (previousCoords === undefined || featureIndex > previousFeatureIndex || multiPartIndexCoord > previousMultiIndex || geometryIndex > prevGeomIndex) {
                previousCoords = currentCoord;
                previousFeatureIndex = featureIndex;
                previousMultiIndex = multiPartIndexCoord;
                prevGeomIndex = geometryIndex;
                segmentIndex = 0;
                return;
            }
            var currentSegment = helpers.lineString([previousCoords, currentCoord], feature.properties);
            if (callback(currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) === false) return false;
            segmentIndex++;
            previousCoords = currentCoord;
        }) === false) return false;
    });
}

/**
 * Callback for segmentReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback segmentReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 */

/**
 * Reduce 2-vertex line segment in any GeoJSON object, similar to Array.reduce()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (previousValue, currentSegment, currentIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentReduce(polygon, function (previousSegment, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //= previousSegment
 *   //= currentSegment
 *   //= featureIndex
 *   //= multiFeatureIndex
 *   //= geometryIndex
 *   //= segmentInex
 *   return currentSegment
 * });
 *
 * // Calculate the total number of segments
 * var initialValue = 0
 * var total = turf.segmentReduce(polygon, function (previousValue) {
 *     previousValue++;
 *     return previousValue;
 * }, initialValue);
 */
function segmentReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    var started = false;
    segmentEach(geojson, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
        if (started === false && initialValue === undefined) previousValue = currentSegment;
        else previousValue = callback(previousValue, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex);
        started = true;
    });
    return previousValue;
}

/**
 * Callback for lineEach
 *
 * @callback lineEachCallback
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */

/**
 * Iterate over line or ring coordinates in LineString, Polygon, MultiLineString, MultiPolygon Features or Geometries,
 * similar to Array.forEach.
 *
 * @name lineEach
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @example
 * var multiLine = turf.multiLineString([
 *   [[26, 37], [35, 45]],
 *   [[36, 53], [38, 50], [41, 55]]
 * ]);
 *
 * turf.lineEach(multiLine, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function lineEach(geojson, callback) {
    // validation
    if (!geojson) throw new Error('geojson is required');

    flattenEach(geojson, function (feature, featureIndex, multiFeatureIndex) {
        if (feature.geometry === null) return;
        var type = feature.geometry.type;
        var coords = feature.geometry.coordinates;
        switch (type) {
        case 'LineString':
            if (callback(feature, featureIndex, multiFeatureIndex, 0, 0) === false) return false;
            break;
        case 'Polygon':
            for (var geometryIndex = 0; geometryIndex < coords.length; geometryIndex++) {
                if (callback(helpers.lineString(coords[geometryIndex], feature.properties), featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
            }
            break;
        }
    });
}

/**
 * Callback for lineReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback lineReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed.
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */

/**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name lineReduce
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var multiPoly = turf.multiPolygon([
 *   turf.polygon([[[12,48],[2,41],[24,38],[12,48]], [[9,44],[13,41],[13,45],[9,44]]]),
 *   turf.polygon([[[5, 5], [0, 0], [2, 2], [4, 4], [5, 5]]])
 * ]);
 *
 * turf.lineReduce(multiPoly, function (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentLine
 * });
 */
function lineReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    lineEach(geojson, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentLine;
        else previousValue = callback(previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex);
    });
    return previousValue;
}

/**
 * Finds a particular 2-vertex LineString Segment from a GeoJSON using `@turf/meta` indexes.
 *
 * Negative indexes are permitted.
 * Point & MultiPoint will always return null.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.featureIndex=0] Feature Index
 * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
 * @param {number} [options.geometryIndex=0] Geometry Index
 * @param {number} [options.segmentIndex=0] Segment Index
 * @param {Object} [options.properties={}] Translate Properties to output LineString
 * @param {BBox} [options.bbox={}] Translate BBox to output LineString
 * @param {number|string} [options.id={}] Translate Id to output LineString
 * @returns {Feature<LineString>} 2-vertex GeoJSON Feature LineString
 * @example
 * var multiLine = turf.multiLineString([
 *     [[10, 10], [50, 30], [30, 40]],
 *     [[-10, -10], [-50, -30], [-30, -40]]
 * ]);
 *
 * // First Segment (defaults are 0)
 * turf.findSegment(multiLine);
 * // => Feature<LineString<[[10, 10], [50, 30]]>>
 *
 * // First Segment of 2nd Multi Feature
 * turf.findSegment(multiLine, {multiFeatureIndex: 1});
 * // => Feature<LineString<[[-10, -10], [-50, -30]]>>
 *
 * // Last Segment of Last Multi Feature
 * turf.findSegment(multiLine, {multiFeatureIndex: -1, segmentIndex: -1});
 * // => Feature<LineString<[[-50, -30], [-30, -40]]>>
 */
function findSegment(geojson, options) {
    // Optional Parameters
    options = options || {};
    if (!helpers.isObject(options)) throw new Error('options is invalid');
    var featureIndex = options.featureIndex || 0;
    var multiFeatureIndex = options.multiFeatureIndex || 0;
    var geometryIndex = options.geometryIndex || 0;
    var segmentIndex = options.segmentIndex || 0;

    // Find FeatureIndex
    var properties = options.properties;
    var geometry;

    switch (geojson.type) {
    case 'FeatureCollection':
        if (featureIndex < 0) featureIndex = geojson.features.length + featureIndex;
        properties = properties || geojson.features[featureIndex].properties;
        geometry = geojson.features[featureIndex].geometry;
        break;
    case 'Feature':
        properties = properties || geojson.properties;
        geometry = geojson.geometry;
        break;
    case 'Point':
    case 'MultiPoint':
        return null;
    case 'LineString':
    case 'Polygon':
    case 'MultiLineString':
    case 'MultiPolygon':
        geometry = geojson;
        break;
    default:
        throw new Error('geojson is invalid');
    }

    // Find SegmentIndex
    if (geometry === null) return null;
    var coords = geometry.coordinates;
    switch (geometry.type) {
    case 'Point':
    case 'MultiPoint':
        return null;
    case 'LineString':
        if (segmentIndex < 0) segmentIndex = coords.length + segmentIndex - 1;
        return helpers.lineString([coords[segmentIndex], coords[segmentIndex + 1]], properties, options);
    case 'Polygon':
        if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
        if (segmentIndex < 0) segmentIndex = coords[geometryIndex].length + segmentIndex - 1;
        return helpers.lineString([coords[geometryIndex][segmentIndex], coords[geometryIndex][segmentIndex + 1]], properties, options);
    case 'MultiLineString':
        if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
        if (segmentIndex < 0) segmentIndex = coords[multiFeatureIndex].length + segmentIndex - 1;
        return helpers.lineString([coords[multiFeatureIndex][segmentIndex], coords[multiFeatureIndex][segmentIndex + 1]], properties, options);
    case 'MultiPolygon':
        if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
        if (geometryIndex < 0) geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
        if (segmentIndex < 0) segmentIndex = coords[multiFeatureIndex][geometryIndex].length - segmentIndex - 1;
        return helpers.lineString([coords[multiFeatureIndex][geometryIndex][segmentIndex], coords[multiFeatureIndex][geometryIndex][segmentIndex + 1]], properties, options);
    }
    throw new Error('geojson is invalid');
}

/**
 * Finds a particular Point from a GeoJSON using `@turf/meta` indexes.
 *
 * Negative indexes are permitted.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.featureIndex=0] Feature Index
 * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
 * @param {number} [options.geometryIndex=0] Geometry Index
 * @param {number} [options.coordIndex=0] Coord Index
 * @param {Object} [options.properties={}] Translate Properties to output Point
 * @param {BBox} [options.bbox={}] Translate BBox to output Point
 * @param {number|string} [options.id={}] Translate Id to output Point
 * @returns {Feature<Point>} 2-vertex GeoJSON Feature Point
 * @example
 * var multiLine = turf.multiLineString([
 *     [[10, 10], [50, 30], [30, 40]],
 *     [[-10, -10], [-50, -30], [-30, -40]]
 * ]);
 *
 * // First Segment (defaults are 0)
 * turf.findPoint(multiLine);
 * // => Feature<Point<[10, 10]>>
 *
 * // First Segment of the 2nd Multi-Feature
 * turf.findPoint(multiLine, {multiFeatureIndex: 1});
 * // => Feature<Point<[-10, -10]>>
 *
 * // Last Segment of last Multi-Feature
 * turf.findPoint(multiLine, {multiFeatureIndex: -1, coordIndex: -1});
 * // => Feature<Point<[-30, -40]>>
 */
function findPoint(geojson, options) {
    // Optional Parameters
    options = options || {};
    if (!helpers.isObject(options)) throw new Error('options is invalid');
    var featureIndex = options.featureIndex || 0;
    var multiFeatureIndex = options.multiFeatureIndex || 0;
    var geometryIndex = options.geometryIndex || 0;
    var coordIndex = options.coordIndex || 0;

    // Find FeatureIndex
    var properties = options.properties;
    var geometry;

    switch (geojson.type) {
    case 'FeatureCollection':
        if (featureIndex < 0) featureIndex = geojson.features.length + featureIndex;
        properties = properties || geojson.features[featureIndex].properties;
        geometry = geojson.features[featureIndex].geometry;
        break;
    case 'Feature':
        properties = properties || geojson.properties;
        geometry = geojson.geometry;
        break;
    case 'Point':
    case 'MultiPoint':
        return null;
    case 'LineString':
    case 'Polygon':
    case 'MultiLineString':
    case 'MultiPolygon':
        geometry = geojson;
        break;
    default:
        throw new Error('geojson is invalid');
    }

    // Find Coord Index
    if (geometry === null) return null;
    var coords = geometry.coordinates;
    switch (geometry.type) {
    case 'Point':
        return helpers.point(coords, properties, options);
    case 'MultiPoint':
        if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
        return helpers.point(coords[multiFeatureIndex], properties, options);
    case 'LineString':
        if (coordIndex < 0) coordIndex = coords.length + coordIndex;
        return helpers.point(coords[coordIndex], properties, options);
    case 'Polygon':
        if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
        if (coordIndex < 0) coordIndex = coords[geometryIndex].length + coordIndex;
        return helpers.point(coords[geometryIndex][coordIndex], properties, options);
    case 'MultiLineString':
        if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
        if (coordIndex < 0) coordIndex = coords[multiFeatureIndex].length + coordIndex;
        return helpers.point(coords[multiFeatureIndex][coordIndex], properties, options);
    case 'MultiPolygon':
        if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
        if (geometryIndex < 0) geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
        if (coordIndex < 0) coordIndex = coords[multiFeatureIndex][geometryIndex].length - coordIndex;
        return helpers.point(coords[multiFeatureIndex][geometryIndex][coordIndex], properties, options);
    }
    throw new Error('geojson is invalid');
}

exports.coordEach = coordEach;
exports.coordReduce = coordReduce;
exports.propEach = propEach;
exports.propReduce = propReduce;
exports.featureEach = featureEach;
exports.featureReduce = featureReduce;
exports.coordAll = coordAll;
exports.geomEach = geomEach;
exports.geomReduce = geomReduce;
exports.flattenEach = flattenEach;
exports.flattenReduce = flattenReduce;
exports.segmentEach = segmentEach;
exports.segmentReduce = segmentReduce;
exports.lineEach = lineEach;
exports.lineReduce = lineReduce;
exports.findSegment = findSegment;
exports.findPoint = findPoint;


/***/ }),

/***/ "./node_modules/assert/assert.js":
/*!***************************************!*\
  !*** ./node_modules/assert/assert.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(/*! util/ */ "./node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/build-url/dist/build-url.js":
/*!**************************************************!*\
  !*** ./node_modules/build-url/dist/build-url.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * build-url - A small library that builds a URL given its components
 * @version v1.3.2
 * @link https://github.com/steverydz/build-url#readme
 * @license MIT
 */
;(function () {
  'use strict';

  var root = this;
  var previousBuildUrl = root.buildUrl;

  var buildUrl = function (url, options) {
    var queryString = [];
    var key;
    var builtUrl;
    var caseChange; 
    
    // 'lowerCase' parameter default = false,  
    if (options && options.lowerCase) {
        caseChange = !!options.lowerCase;
    } else {
        caseChange = false;
    }

    if (url === null) {
      builtUrl = '';
    } else if (typeof(url) === 'object') {
      builtUrl = '';
      options = url;
    } else {
      builtUrl = url;
    }

    if(builtUrl && builtUrl[builtUrl.length - 1] === '/') {
      builtUrl = builtUrl.slice(0, -1);
    } 

    if (options) {
      if (options.path) {
          var localVar = String(options.path).trim(); 
          if (caseChange) {
            localVar = localVar.toLowerCase();
          }
          if (localVar.indexOf('/') === 0) {
              builtUrl += localVar;
          } else {
            builtUrl += '/' + localVar;
          }
      }

      if (options.queryParams) {
        for (key in options.queryParams) {
          if (options.queryParams.hasOwnProperty(key) && options.queryParams[key] !== void 0) {
            var encodedParam;
            if (options.disableCSV && Array.isArray(options.queryParams[key]) && options.queryParams[key].length) {
              for(var i = 0; i < options.queryParams[key].length; i++) {
                encodedParam = encodeURIComponent(String(options.queryParams[key][i]).trim());
                queryString.push(key + '=' + encodedParam);
              }
            } else {              
              if (caseChange) {
                encodedParam = encodeURIComponent(String(options.queryParams[key]).trim().toLowerCase());
              }
              else {
                encodedParam = encodeURIComponent(String(options.queryParams[key]).trim());
              }
              queryString.push(key + '=' + encodedParam);
            }
          }
        }
        builtUrl += '?' + queryString.join('&');
      }

      if (options.hash) {
        if(caseChange)
            builtUrl += '#' + String(options.hash).trim().toLowerCase();
        else
            builtUrl += '#' + String(options.hash).trim();
      }
    } 
    return builtUrl;
  };

  buildUrl.noConflict = function () {
    root.buildUrl = previousBuildUrl;
    return buildUrl;
  };

  if (true) {
    if ( true && module.exports) {
      exports = module.exports = buildUrl;
    }
    exports.buildUrl = buildUrl;
  } else {}
}).call(this);


/***/ }),

/***/ "./node_modules/choo-devtools/index.js":
/*!*********************************************!*\
  !*** ./node_modules/choo-devtools/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter
var window = __webpack_require__(/*! global/window */ "./node_modules/global/window.js")

var storage = __webpack_require__(/*! ./lib/storage */ "./node_modules/choo-devtools/lib/storage.js")
var logger = __webpack_require__(/*! ./lib/logger */ "./node_modules/choo-devtools/lib/logger.js")
var debug = __webpack_require__(/*! ./lib/debug */ "./node_modules/choo-devtools/lib/debug.js")
var copy = __webpack_require__(/*! ./lib/copy */ "./node_modules/choo-devtools/lib/copy.js")
var help = __webpack_require__(/*! ./lib/help */ "./node_modules/choo-devtools/lib/help.js")
var perf = __webpack_require__(/*! ./lib/perf */ "./node_modules/choo-devtools/lib/perf.js")
var log = __webpack_require__(/*! ./lib/log */ "./node_modules/choo-devtools/lib/log.js")
var getAllRoutes = __webpack_require__(/*! wayfarer/get-all-routes */ "./node_modules/wayfarer/get-all-routes.js")

module.exports = expose

function expose (opts) {
  opts = opts || {}
  store.storeName = 'choo-devtools'
  return store
  function store (state, emitter, app) {
    var localEmitter = new EventEmitter()

    if (typeof window !== 'undefined') {
      logger(state, emitter, opts)
    }

    emitter.on('DOMContentLoaded', function () {
      if (typeof window === 'undefined') return
      window.choo = {}

      window.choo.state = state
      window.choo.emit = function (eventName, data) {
        emitter.emit(eventName, data)
      }
      window.choo.on = function (eventName, listener) {
        emitter.on(eventName, listener)
      }

      debug(state, emitter, app, localEmitter)

      log(state, emitter, app, localEmitter)
      perf(state, emitter, app, localEmitter)
      window.choo.copy = copy
      if (app.router && app.router.router) {
        window.choo.routes = Object.keys(getAllRoutes(app.router.router))
      }

      storage()
      help()
    })
  }
}


/***/ }),

/***/ "./node_modules/choo-devtools/lib/copy.js":
/*!************************************************!*\
  !*** ./node_modules/choo-devtools/lib/copy.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var stateCopy = __webpack_require__(/*! state-copy */ "./node_modules/state-copy/index.js")
var pluck = __webpack_require__(/*! plucker */ "./node_modules/plucker/index.js")

module.exports = copy

function copy (state) {
  var isStateString = state && typeof state === 'string'
  var isChooPath = isStateString && arguments.length === 1 && state.indexOf('state.') === 0

  if (!state || typeof state === 'function') state = window.choo.state
  if (isChooPath) [].push.call(arguments, {state: window.choo.state})

  stateCopy(isStateString ? pluck.apply(this, arguments) : state)
}


/***/ }),

/***/ "./node_modules/choo-devtools/lib/debug.js":
/*!*************************************************!*\
  !*** ./node_modules/choo-devtools/lib/debug.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var onChange = __webpack_require__(/*! object-change-callsite */ "./node_modules/object-change-callsite/index.js")
var nanologger = __webpack_require__(/*! nanologger */ "./node_modules/nanologger/index.js")
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js")

var enabledMessage = 'Debugging enabled. To disable run: `choo.debug = false`'
var disabledMessage = 'Debugging disabled. We hope it was helpful! 🙌'

module.exports = debug

function debug (state, emitter, app, localEmitter) {
  var log = nanologger('choo-devtools')
  var enabled = window.localStorage.logLevel === 'debug'
  if (enabled) log.info(enabledMessage)

  state = onChange(state, function (attr, value, callsite) {
    if (!enabled) return
    callsite = callsite.split('\n')[1].replace(/^ +/, '')
    log.info('state.' + attr, value, '\n' + callsite)
  })

  app.state = state

  Object.defineProperty(window.choo, 'debug', {
    get: function () {
      window.localStorage.logLevel = 'debug'
      localEmitter.emit('debug', true)
      enabled = true
      return enabledMessage
    },
    set: function (bool) {
      assert.equal(typeof bool, 'boolean', 'choo-devtools.debug: bool should be type boolean')
      window.localStorage.logLevel = bool ? 'debug' : 'info'
      enabled = bool
      localEmitter.emit('debug', enabled)
      if (enabled) log.info(enabledMessage)
      else log.info(disabledMessage)
    }
  })
}


/***/ }),

/***/ "./node_modules/choo-devtools/lib/help.js":
/*!************************************************!*\
  !*** ./node_modules/choo-devtools/lib/help.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = help

function help () {
  Object.defineProperty(window.choo, 'help', {
    get: get,
    set: noop
  })

  function get () {
    setTimeout(function () {
      print('copy', 'Serialize the current state to the clipboard.')
      print('debug', 'Enable Choo debug mode.')
      print('emit', 'Emit an event in the Choo emitter.')
      print('help', 'Print usage information.')
      print('log', 'Print the last 150 events emitted.')
      print('on', 'Listen for an event in the Choo emitter.')
      print('once', 'Listen for an event once in the Choo emitter.')
      print('perf', 'Print out performance metrics')
      print('state', 'Print the Choo state object.')
      print('storage', 'Print browser storage information.')
    }, 0)
    return 'Choo command overview'
  }
}

function print (cmd, desc) {
  var color = '#cc99cc'
  console.log('  %cchoo.' + cmd, 'color: ' + color, '— ' + desc)
}

function noop () {}


/***/ }),

/***/ "./node_modules/choo-devtools/lib/log.js":
/*!***********************************************!*\
  !*** ./node_modules/choo-devtools/lib/log.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var removeItems = __webpack_require__(/*! remove-array-items */ "./node_modules/remove-array-items/index.js")
var scheduler = __webpack_require__(/*! nanoscheduler */ "./node_modules/nanoscheduler/index.js")()
var nanologger = __webpack_require__(/*! nanologger */ "./node_modules/nanologger/index.js")
var _log = nanologger('choo')
var clone = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js")

var MAX_HISTORY_LENGTH = 150   // How many items we should keep around

module.exports = log

function log (state, emitter, app, localEmitter) {
  var shouldDebug = window.localStorage.logLevel === 'debug'
  var history = []
  var i = 0
  var shouldWarn = true

  localEmitter.on('debug', function (bool) {
    shouldDebug = bool
  })

  window.choo._history = history
  window.choo.history = showHistory

  Object.defineProperty(window.choo, 'log', { get: showHistory, set: noop })
  Object.defineProperty(window.choo, 'history', { get: showHistory, set: noop })

  emitter.on('*', function (name, data) {
    i += 1
    var entry = new Event(name, data, state)
    history.push(entry)
    scheduler.push(function () {
      var length = history.length
      if (length > MAX_HISTORY_LENGTH) {
        removeItems(history, 0, length - MAX_HISTORY_LENGTH)
      }
    })
  })

  function showHistory () {
    setTimeout(function () {
      console.table(history)
    }, 0)
    var events = i === 1 ? 'event' : 'events'
    var msg = i + ' ' + events + ' recorded, showing the last ' + MAX_HISTORY_LENGTH + '.'
    if (shouldDebug === false) {
      msg += ' Enable state capture by calling `choo.debug`.'
    } else {
      msg += ' Disable state capture by calling `choo.debug = false`.'
    }
    return msg
  }

  function Event (name, data, state) {
    this.name = name
    this.data = data === undefined ? '<no data>' : data
    this.state = shouldDebug
      ? tryClone(state)
      : '<disabled>'
  }

  function tryClone (state) {
    try {
      var _state = clone(state)
      if (!shouldWarn) shouldWarn = true
      return _state
    } catch (ex) {
      if (shouldWarn) {
        _log.warn('Could not clone your app state. Make sure to have a serializable state so it can be cloned')
        shouldWarn = false
      }
      return '<unserializable>'
    }
  }
}

function noop () {}


/***/ }),

/***/ "./node_modules/choo-devtools/lib/logger.js":
/*!**************************************************!*\
  !*** ./node_modules/choo-devtools/lib/logger.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var scheduler = __webpack_require__(/*! nanoscheduler */ "./node_modules/nanoscheduler/index.js")()
var nanologger = __webpack_require__(/*! nanologger */ "./node_modules/nanologger/index.js")
var Hooks = __webpack_require__(/*! choo-hooks */ "./node_modules/choo-hooks/index.js")

module.exports = logger

function logger (state, emitter, opts) {
  var initialRender = true
  var hooks = Hooks(emitter)
  var log = nanologger('choo')

  hooks.on('log:debug', logger('debug'))
  hooks.on('log:info', logger('info'))
  hooks.on('log:warn', logger('warn'))
  hooks.on('log:error', logger('error'))
  hooks.on('log:fatal', logger('fatal'))

  hooks.on('event', function (eventName, data, timing) {
    if (opts.filter && !opts.filter(eventName, data, timing)) return

    if (timing) {
      var duration = timing.duration.toFixed()
      var level = duration < 50 ? 'info' : 'warn'
      if (data !== undefined) logger(level)(eventName, data, duration + 'ms')
      else logger(level)(eventName, duration + 'ms')
    } else {
      if (data !== undefined) logger('info')(eventName, data)
      else logger('info')(eventName)
    }
  })

  hooks.on('use', function (count, duration) {
    logger('debug')('use', { count: count }, duration + 'ms')
  })

  hooks.on('unhandled', function (eventName, data) {
    logger('error')('No listeners for ' + eventName)
  })

  hooks.on('DOMContentLoaded', function (timing) {
    if (!timing) return logger('info')('DOMContentLoaded')
    var level = timing.interactive < 1000 ? 'info' : 'warn'
    logger(level)('DOMContentLoaded', timing.interactive + 'ms to interactive')
  })

  hooks.on('render', function (timings) {
    if (!timings || !timings.render) return logger('info')('render')
    var duration = timings.render.duration.toFixed()
    var msg = 'render'

    if (initialRender) {
      initialRender = false
      msg = 'initial ' + msg
    }

    // each frame has 10ms available for userland stuff
    var fps = Math.min((600 / duration).toFixed(), 60)

    if (fps === 60) {
      logger('info')(msg, fps + 'fps', duration + 'ms')
    } else {
      var times = {
        render: timings.render.duration.toFixed() + 'ms'
      }
      if (timings.morph) times.morph = timings.morph.duration.toFixed() + 'ms'
      logger('warn')(msg, fps + 'fps', duration + 'ms', times)
    }
  })

  hooks.on('resource-timing-buffer-full', function () {
    logger('error')("The browser's Resource Resource timing buffer is full. Cannot store any more timing information")
  })

  hooks.start()

  function logger (level) {
    return function () {
      var args = []
      for (var i = 0, len = arguments.length; i < len; i++) {
        args.push(arguments[i])
      }
      scheduler.push(function () {
        log[level].apply(log, args)
      })
    }
  }
}


/***/ }),

/***/ "./node_modules/choo-devtools/lib/perf.js":
/*!************************************************!*\
  !*** ./node_modules/choo-devtools/lib/perf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var onPerformance = __webpack_require__(/*! on-performance */ "./node_modules/on-performance/browser.js")

var BAR = '█'

module.exports = perf

function perf (state, emitter, app, localEmitter) {
  var stats = {}

  window.choo.perf = {}

  // Print all events
  var all = new Perf(stats, 'all')
  Object.defineProperty(window.choo.perf, 'all', {
    get: all.get.bind(all),
    set: noop
  })

  // Print only Choo core events
  var core = new Perf(stats, 'core', function (name) {
    return /^choo/.test(name)
  })
  Object.defineProperty(window.choo.perf, 'core', {
    get: core.get.bind(core),
    set: noop
  })

  // Print component data
  var components = new Perf(stats, 'components', function (name) {
    return !/^choo/.test(name) && !/^bankai/.test(name)
  })
  Object.defineProperty(window.choo.perf, 'components', {
    get: components.get.bind(components),
    set: noop
  })

  // Print choo userland events (event emitter)
  var events = new Perf(stats, 'events', function (name) {
    return /^choo\.emit/.test(name)
  }, function (name) {
    return name.replace(/^choo\.emit\('/, '').replace(/'\)$/, '')
  })
  Object.defineProperty(window.choo.perf, 'events', {
    get: events.get.bind(events),
    set: noop
  })

  onPerformance(function (entry) {
    if (entry.entryType !== 'measure') return
    var name = entry.name.replace(/ .*$/, '')

    if (!stats[name]) {
      stats[name] = {
        name: name,
        count: 0,
        entries: []
      }
    }

    var stat = stats[name]
    stat.count += 1
    stat.entries.push(entry.duration)
  })
}

// Create a new Perf instance by passing it a filter
function Perf (stats, name, filter, rename) {
  this.stats = stats
  this.name = name
  this.filter = filter || function () { return true }
  this.rename = rename || function (name) { return name }
}

// Compute a table of performance entries based on a filter
Perf.prototype.get = function () {
  var filtered = Object.keys(this.stats).filter(this.filter)
  var self = this

  var maxTime = 0
  var maxMedian = 0
  var fmt = filtered.map(function (key) {
    var stat = self.stats[key]
    var totalTime = Number(stat.entries.reduce(function (time, entry) {
      return time + entry
    }, 0).toFixed(2))
    if (totalTime > maxTime) maxTime = totalTime

    var median = getMedian(stat.entries)
    if (median > maxMedian) maxMedian = median

    var name = self.rename(stat.name)
    return new PerfEntry(name, totalTime, median, stat.count)
  })

  var barLength = 10
  fmt.forEach(function (entry) {
    var totalTime = entry['Total Time (ms)']
    var median = entry['Median (ms)']
    entry[' '] = createBar(totalTime / maxTime * 100 / barLength)
    entry['  '] = createBar(median / maxMedian * 100 / barLength)
  })

  function createBar (len) {
    var str = ''
    for (var i = 0, max = Math.round(len); i < max; i++) {
      str += BAR
    }
    return str
  }

  var res = fmt.sort(function (a, b) {
    return b['Total Time (ms)'] - a['Total Time (ms)']
  })
  console.table(res)
  return "Showing performance events for '" + this.name + "'"
}

// An entry for the performance timeline.
function PerfEntry (name, totalTime, median, count) {
  this['Name'] = name
  this['Total Time (ms)'] = totalTime
  this[' '] = 0
  this['Median (ms)'] = median
  this['  '] = 0
  this['Total Count'] = count
}

// Get the median from an array of numbers.
function getMedian (args) {
  if (!args.length) return 0
  var numbers = args.slice(0).sort(function (a, b) { return a - b })
  var middle = Math.floor(numbers.length / 2)
  var isEven = numbers.length % 2 === 0
  var res = isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle]
  return Number(res.toFixed(2))
}

// Do nothing.
function noop () {}


/***/ }),

/***/ "./node_modules/choo-devtools/lib/storage.js":
/*!***************************************************!*\
  !*** ./node_modules/choo-devtools/lib/storage.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pretty = __webpack_require__(/*! prettier-bytes */ "./node_modules/prettier-bytes/index.js")

module.exports = storage

function storage () {
  Object.defineProperty(window.choo, 'storage', {
    get: get,
    set: noop
  })

  function get () {
    if (navigator.storage) {
      navigator.storage.estimate().then(function (estimate) {
        var value = (estimate.usage / estimate.quota).toFixed()
        clr('Max storage:', fmt(estimate.quota))
        clr('Storage used:', fmt(estimate.usage) + ' (' + value + '%)')
        navigator.storage.persisted().then(function (bool) {
          var val = bool ? 'enabled' : 'disabled'
          clr('Persistent storage:', val)
        })
      })
      return 'Calculating storage quota…'
    } else {
      var protocol = window.location.protocol
      return (/https/.test(protocol))
        ? "The Storage API is unavailable in this browser. We're sorry!"
        : 'The Storage API is unavailable. Serving this site over HTTPS might help enable it!'
    }
  }
}

function clr (msg, arg) {
  var color = '#cc99cc'
  console.log('%c' + msg, 'color: ' + color, arg)
}

function fmt (num) {
  return pretty(num).replace(' ', '')
}

function noop () {}


/***/ }),

/***/ "./node_modules/choo-hooks/index.js":
/*!******************************************!*\
  !*** ./node_modules/choo-hooks/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var onPerformance = __webpack_require__(/*! on-performance */ "./node_modules/on-performance/browser.js")
var scheduler = __webpack_require__(/*! nanoscheduler */ "./node_modules/nanoscheduler/index.js")()
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js")

module.exports = ChooHooks

function ChooHooks (emitter) {
  if (!(this instanceof ChooHooks)) return new ChooHooks(emitter)

  assert.equal(typeof emitter, 'object')

  this.hasWindow = typeof window !== 'undefined'
  this.hasIdleCallback = this.hasWindow && window.requestIdleCallback
  this.hasPerformance = this.hasWindow &&
    window.performance &&
    window.performance.getEntriesByName

  this.emitter = emitter
  this.listeners = {}
  this.buffer = {
    use: [],
    render: {},
    events: {}
  }
}

ChooHooks.prototype.on = function (name, handler) {
  this.listeners[name] = handler
}

ChooHooks.prototype.start = function () {
  var self = this
  if (this.hasPerformance) {
    window.performance.onresourcetimingbufferfull = function () {
      var listener = self.listeners['resource-timing-buffer-full']
      if (listener) listener()
    }
  }

  // TODO also handle log events
  onPerformance(function (timing) {
    if (!timing) return
    if (timing.entryType !== 'measure') return

    var eventName = timing.name
    if (/choo\.morph/.test(eventName)) {
      self.buffer.render.morph = timing
    } else if (/choo\.route/.test(eventName)) {
      self.buffer.render.route = timing
    } else if (/choo\.render/.test(eventName)) {
      self.buffer.render.render = timing
    } else if (/choo\.use/.test(eventName)) {
      self.buffer.use.push(timing)
    } else if (/choo\.emit/.test(eventName) && !/log:/.test(eventName)) {
      var eventListener = self.listeners['event']
      if (eventListener) {
        var timingName = eventName.match(/choo\.emit\('(.*)'\)/)[1]
        if (timingName === 'render' || timingName === 'DOMContentLoaded') return

        var traceId = eventName.match(/\[(\d+)\]/)[1]
        var data = self.buffer.events[traceId]

        self.buffer.events[traceId] = null
        eventListener(timingName, data, timing)
      }
    }

    var rBuf = self.buffer.render
    if (rBuf.render && rBuf.route && rBuf.morph) {
      var renderListener = self.listeners['render']
      if (!renderListener) return
      var timings = {}
      while (self.buffer.render.length) {
        var _timing = self.buffer.render.pop()
        var name = _timing.name
        if (/choo\.render/.test(name)) timings.render = _timing
        else if (/choo\.morph/.test(name)) timings.morph = _timing
        else timings.route = _timing
      }
      rBuf.render = rBuf.route = rBuf.morph = void 0
      renderListener(timings)
    }
  })

  // Check if there's timings without any listeners
  // and trigger the DOMContentLoaded event.
  // If the timing API is not available, we handle all events here
  this.emitter.on('*', function (eventName, data, uuid) {
    var logLevel = /^log:(\w{4,5})/.exec(eventName)

    if (!self.hasPerformance && eventName === 'render') {
      // Render
      var renderListener = self.listeners['render']
      if (renderListener) renderListener()
    } else if (eventName === 'DOMContentLoaded') {
      // DOMContentLoaded
      self._emitLoaded()
    } else if (logLevel) {
      logLevel = logLevel[1]
      // Log:*
      var logListener = self.listeners['log:' + logLevel]
      if (logListener) {
        logListener.apply(null, Array.prototype.slice.call(arguments, 0, arguments.length - 1))
      }
    } else if (!self.emitter.listeners(eventName).length) {
      // Unhandled
      var unhandledListener = self.listeners['unhandled']
      if (unhandledListener) unhandledListener(eventName, data)
    } else if (eventName !== 'render') {
      // *
      if (self.hasPerformance) self.buffer.events[uuid] = data
    }
  })
}

// compute and log time till interactive when DOMContentLoaded event fires
ChooHooks.prototype._emitLoaded = function () {
  var self = this
  scheduler.push(function clear () {
    var listener = self.listeners['DOMContentLoaded']
    var usesListener = self.listeners['use']

    var timing = self.hasWindow && window.performance && window.performance.timing

    if (listener && timing) {
      listener({
        interactive: timing.domInteractive - timing.navigationStart,
        loaded: timing.domContentLoadedEventEnd - timing.navigationStart
      })
    }

    if (self.hasPerformance) {
      var duration = sumDurations(self.buffer.use)
      if (usesListener) usesListener(self.buffer.use.length, duration)
    } else {
      usesListener()
    }
  })
}

function sumDurations (timings) {
  return timings.reduce(function (sum, timing) {
    return sum + timing.duration
  }, 0).toFixed()
}


/***/ }),

/***/ "./node_modules/choo/component/cache.js":
/*!**********************************************!*\
  !*** ./node_modules/choo/component/cache.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")
var LRU = __webpack_require__(/*! nanolru */ "./node_modules/nanolru/index.js")

module.exports = ChooComponentCache

function ChooComponentCache (state, emit, lru) {
  assert.ok(this instanceof ChooComponentCache, 'ChooComponentCache should be created with `new`')

  assert.equal(typeof state, 'object', 'ChooComponentCache: state should be type object')
  assert.equal(typeof emit, 'function', 'ChooComponentCache: emit should be type function')

  if (typeof lru === 'number') this.cache = new LRU(lru)
  else this.cache = lru || new LRU(100)
  this.state = state
  this.emit = emit
}

// Get & create component instances.
ChooComponentCache.prototype.render = function (Component, id) {
  assert.equal(typeof Component, 'function', 'ChooComponentCache.render: Component should be type function')
  assert.ok(typeof id === 'string' || typeof id === 'number', 'ChooComponentCache.render: id should be type string or type number')

  var el = this.cache.get(id)
  if (!el) {
    var args = []
    for (var i = 2, len = arguments.length; i < len; i++) {
      args.push(arguments[i])
    }
    args.unshift(Component, id, this.state, this.emit)
    el = newCall.apply(newCall, args)
    this.cache.set(id, el)
  }

  return el
}

// Because you can't call `new` and `.apply()` at the same time. This is a mad
// hack, but hey it works so we gonna go for it. Whoop.
function newCall (Cls) {
  return new (Cls.bind.apply(Cls, arguments)) // eslint-disable-line
}


/***/ }),

/***/ "./node_modules/choo/component/index.js":
/*!**********************************************!*\
  !*** ./node_modules/choo/component/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! nanocomponent */ "./node_modules/nanocomponent/index.js")


/***/ }),

/***/ "./node_modules/choo/html/index.js":
/*!*****************************************!*\
  !*** ./node_modules/choo/html/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! nanohtml */ "./node_modules/nanohtml/lib/browser.js")


/***/ }),

/***/ "./node_modules/choo/html/raw.js":
/*!***************************************!*\
  !*** ./node_modules/choo/html/raw.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! nanohtml/raw */ "./node_modules/nanohtml/lib/raw-browser.js")


/***/ }),

/***/ "./node_modules/choo/index.js":
/*!************************************!*\
  !*** ./node_modules/choo/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var scrollToAnchor = __webpack_require__(/*! scroll-to-anchor */ "./node_modules/scroll-to-anchor/index.js")
var documentReady = __webpack_require__(/*! document-ready */ "./node_modules/document-ready/index.js")
var nanotiming = __webpack_require__(/*! nanotiming */ "./node_modules/nanotiming/browser.js")
var nanorouter = __webpack_require__(/*! nanorouter */ "./node_modules/nanorouter/index.js")
var nanomorph = __webpack_require__(/*! nanomorph */ "./node_modules/nanomorph/index.js")
var nanoquery = __webpack_require__(/*! nanoquery */ "./node_modules/nanoquery/browser.js")
var nanohref = __webpack_require__(/*! nanohref */ "./node_modules/nanohref/index.js")
var nanoraf = __webpack_require__(/*! nanoraf */ "./node_modules/nanoraf/index.js")
var nanobus = __webpack_require__(/*! nanobus */ "./node_modules/nanobus/index.js")
var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")

var Cache = __webpack_require__(/*! ./component/cache */ "./node_modules/choo/component/cache.js")

module.exports = Choo

var HISTORY_OBJECT = {}

function Choo (opts) {
  if (!(this instanceof Choo)) return new Choo(opts)
  opts = opts || {}

  assert.equal(typeof opts, 'object', 'choo: opts should be type object')

  var self = this

  // define events used by choo
  this._events = {
    DOMCONTENTLOADED: 'DOMContentLoaded',
    DOMTITLECHANGE: 'DOMTitleChange',
    REPLACESTATE: 'replaceState',
    PUSHSTATE: 'pushState',
    NAVIGATE: 'navigate',
    POPSTATE: 'popState',
    RENDER: 'render'
  }

  // properties for internal use only
  this._historyEnabled = opts.history === undefined ? true : opts.history
  this._hrefEnabled = opts.href === undefined ? true : opts.href
  this._hashEnabled = opts.hash === undefined ? true : opts.hash
  this._hasWindow = typeof window !== 'undefined'
  this._cache = opts.cache
  this._loaded = false
  this._stores = []
  this._tree = null

  // state
  var _state = {
    events: this._events,
    components: {}
  }
  if (this._hasWindow) {
    this.state = window.initialState
      ? xtend(window.initialState, _state)
      : _state
    delete window.initialState
  } else {
    this.state = _state
  }

  // properties that are part of the API
  this.router = nanorouter({ curry: true })
  this.emitter = nanobus('choo.emit')
  this.emit = this.emitter.emit.bind(this.emitter)

  // listen for title changes; available even when calling .toString()
  if (this._hasWindow) this.state.title = document.title
  this.emitter.prependListener(this._events.DOMTITLECHANGE, function (title) {
    assert.equal(typeof title, 'string', 'events.DOMTitleChange: title should be type string')
    self.state.title = title
    if (self._hasWindow) document.title = title
  })
}

Choo.prototype.route = function (route, handler) {
  assert.equal(typeof route, 'string', 'choo.route: route should be type string')
  assert.equal(typeof handler, 'function', 'choo.handler: route should be type function')
  this.router.on(route, handler)
}

Choo.prototype.use = function (cb) {
  assert.equal(typeof cb, 'function', 'choo.use: cb should be type function')
  var self = this
  this._stores.push(function (state) {
    var msg = 'choo.use'
    msg = cb.storeName ? msg + '(' + cb.storeName + ')' : msg
    var endTiming = nanotiming(msg)
    cb(state, self.emitter, self)
    endTiming()
  })
}

Choo.prototype.start = function () {
  assert.equal(typeof window, 'object', 'choo.start: window was not found. .start() must be called in a browser, use .toString() if running in Node')

  var self = this
  if (this._historyEnabled) {
    this.emitter.prependListener(this._events.NAVIGATE, function () {
      self._matchRoute()
      if (self._loaded) {
        self.emitter.emit(self._events.RENDER)
        setTimeout(scrollToAnchor.bind(null, window.location.hash), 0)
      }
    })

    this.emitter.prependListener(this._events.POPSTATE, function () {
      self.emitter.emit(self._events.NAVIGATE)
    })

    this.emitter.prependListener(this._events.PUSHSTATE, function (href) {
      assert.equal(typeof href, 'string', 'events.pushState: href should be type string')
      window.history.pushState(HISTORY_OBJECT, null, href)
      self.emitter.emit(self._events.NAVIGATE)
    })

    this.emitter.prependListener(this._events.REPLACESTATE, function (href) {
      assert.equal(typeof href, 'string', 'events.replaceState: href should be type string')
      window.history.replaceState(HISTORY_OBJECT, null, href)
      self.emitter.emit(self._events.NAVIGATE)
    })

    window.onpopstate = function () {
      self.emitter.emit(self._events.POPSTATE)
    }

    if (self._hrefEnabled) {
      nanohref(function (location) {
        var href = location.href
        var hash = location.hash
        if (href === window.location.href) {
          if (!self._hashEnabled && hash) scrollToAnchor(hash)
          return
        }
        self.emitter.emit(self._events.PUSHSTATE, href)
      })
    }
  }

  this._setCache(this.state)
  this._stores.forEach(function (initStore) {
    initStore(self.state)
  })

  this._matchRoute()
  this._tree = this._prerender(this.state)
  assert.ok(this._tree, 'choo.start: no valid DOM node returned for location ' + this.state.href)

  this.emitter.prependListener(self._events.RENDER, nanoraf(function () {
    var renderTiming = nanotiming('choo.render')
    var newTree = self._prerender(self.state)
    assert.ok(newTree, 'choo.render: no valid DOM node returned for location ' + self.state.href)

    assert.equal(self._tree.nodeName, newTree.nodeName, 'choo.render: The target node <' +
      self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' +
      newTree.nodeName.toLowerCase() + '>.')

    var morphTiming = nanotiming('choo.morph')
    nanomorph(self._tree, newTree)
    morphTiming()

    renderTiming()
  }))

  documentReady(function () {
    self.emitter.emit(self._events.DOMCONTENTLOADED)
    self._loaded = true
  })

  return this._tree
}

Choo.prototype.mount = function mount (selector) {
  if (typeof window !== 'object') {
    assert.ok(typeof selector === 'string', 'choo.mount: selector should be type String')
    this.selector = selector
    return this
  }

  assert.ok(typeof selector === 'string' || typeof selector === 'object', 'choo.mount: selector should be type String or HTMLElement')

  var self = this

  documentReady(function () {
    var renderTiming = nanotiming('choo.render')
    var newTree = self.start()
    if (typeof selector === 'string') {
      self._tree = document.querySelector(selector)
    } else {
      self._tree = selector
    }

    assert.ok(self._tree, 'choo.mount: could not query selector: ' + selector)
    assert.equal(self._tree.nodeName, newTree.nodeName, 'choo.mount: The target node <' +
      self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' +
      newTree.nodeName.toLowerCase() + '>.')

    var morphTiming = nanotiming('choo.morph')
    nanomorph(self._tree, newTree)
    morphTiming()

    renderTiming()
  })
}

Choo.prototype.toString = function (location, state) {
  this.state = xtend(this.state, state || {})

  assert.notEqual(typeof window, 'object', 'choo.mount: window was found. .toString() must be called in Node, use .start() or .mount() if running in the browser')
  assert.equal(typeof location, 'string', 'choo.toString: location should be type string')
  assert.equal(typeof this.state, 'object', 'choo.toString: state should be type object')

  var self = this
  this._setCache(this.state)
  this._stores.forEach(function (initStore) {
    initStore(self.state)
  })

  this._matchRoute(location)
  var html = this._prerender(this.state)
  assert.ok(html, 'choo.toString: no valid value returned for the route ' + location)
  assert(!Array.isArray(html), 'choo.toString: return value was an array for the route ' + location)
  return typeof html.outerHTML === 'string' ? html.outerHTML : html.toString()
}

Choo.prototype._matchRoute = function (locationOverride) {
  var location, queryString
  if (locationOverride) {
    location = locationOverride.replace(/\?.+$/, '').replace(/\/$/, '')
    if (!this._hashEnabled) location = location.replace(/#.+$/, '')
    queryString = locationOverride
  } else {
    location = window.location.pathname.replace(/\/$/, '')
    if (this._hashEnabled) location += window.location.hash.replace(/^#/, '/')
    queryString = window.location.search
  }
  var matched = this.router.match(location)
  this._handler = matched.cb
  this.state.href = location
  this.state.query = nanoquery(queryString)
  this.state.route = matched.route
  this.state.params = matched.params
  return this.state
}

Choo.prototype._prerender = function (state) {
  var routeTiming = nanotiming("choo.prerender('" + state.route + "')")
  var res = this._handler(state, this.emit)
  routeTiming()
  return res
}

Choo.prototype._setCache = function (state) {
  var cache = new Cache(state, this.emitter.emit.bind(this.emitter), this._cache)
  state.cache = renderComponent

  function renderComponent (Component, id) {
    assert.equal(typeof Component, 'function', 'choo.state.cache: Component should be type function')
    var args = []
    for (var i = 0, len = arguments.length; i < len; i++) {
      args.push(arguments[i])
    }
    return cache.render.apply(cache, args)
  }

  // When the state gets stringified, make sure `state.cache` isn't
  // stringified too.
  renderComponent.toJSON = function () {
    return null
  }
}


/***/ }),

/***/ "./node_modules/clipboard-copy/index.js":
/*!**********************************************!*\
  !*** ./node_modules/clipboard-copy/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global DOMException */

module.exports = clipboardCopy

function clipboardCopy (text) {
  // Use the Async Clipboard API when available. Requires a secure browing
  // context (i.e. HTTPS)
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text).catch(function (err) {
      throw (err !== undefined ? err : new DOMException('The request is not allowed', 'NotAllowedError'))
    })
  }

  // ...Otherwise, use document.execCommand() fallback

  // Put the text to copy into a <span>
  var span = document.createElement('span')
  span.textContent = text

  // Preserve consecutive spaces and newlines
  span.style.whiteSpace = 'pre'

  // Add the <span> to the page
  document.body.appendChild(span)

  // Make a selection object representing the range of text selected by the user
  var selection = window.getSelection()
  var range = window.document.createRange()
  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  // Copy text to the clipboard
  var success = false
  try {
    success = window.document.execCommand('copy')
  } catch (err) {
    console.log('error', err)
  }

  // Cleanup
  selection.removeAllRanges()
  window.document.body.removeChild(span)

  return success
    ? Promise.resolve()
    : Promise.reject(new DOMException('The request is not allowed', 'NotAllowedError'))
}


/***/ }),

/***/ "./node_modules/clone/clone.js":
/*!*************************************!*\
  !*** ./node_modules/clone/clone.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if ( true && module.exports) {
  module.exports = clone;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/app.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/app.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/components/address-search/style.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/components/address-search/style.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".address-search__components-address-search-style__mlk-sc-map-travel-time--3nyge {\n  background-color: rgba(225, 225, 225, 0.9);\n  z-index: 1;\n  width: 320px;\n  font-size: 10pt;\n  color: #10069f; }\n\n.input-field-container__components-address-search-style__mlk-sc-map-travel-time--3DDkz {\n  background: no-repeat right 7px top 0;\n  background-size: 5%;\n  line-height: 1; }\n\n.input-field__components-address-search-style__mlk-sc-map-travel-time--3Rsvw:focus, .input-field__components-address-search-style__mlk-sc-map-travel-time--3Rsvw {\n  width: 85%;\n  color: #10069f;\n  font-size: 10pt; }\n\n.input-field__components-address-search-style__mlk-sc-map-travel-time--3Rsvw:focus, .input-field__components-address-search-style__mlk-sc-map-travel-time--3Rsvw, .search-button__components-address-search-style__mlk-sc-map-travel-time--19_Bl {\n  border: 0;\n  background: transparent;\n  outline: 0; }\n\n.results__components-address-search-style__mlk-sc-map-travel-time--2anlQ {\n  color: #10069f; }\n\n.results__components-address-search-style__mlk-sc-map-travel-time--2anlQ a {\n  cursor: pointer;\n  padding-right: .25rem; }\n\n.results__components-address-search-style__mlk-sc-map-travel-time--2anlQ a:focus, .results__components-address-search-style__mlk-sc-map-travel-time--2anlQ a:hover {\n  background: #10069f;\n  color: #fff;\n  margin-left: -.5rem;\n  padding-left: .5rem; }\n\n.pac-container {\n  margin-top: 17px;\n  background-color: rgba(225, 225, 225, 0.9);\n  border: 0;\n  box-shadow: none;\n  width: 256px !important;\n  font-family: inherit; }\n\n.pac-container .pac-item {\n  border: 0;\n  color: #10069f; }\n\n.pac-container .pac-item-selected {\n  border: 0;\n  color: #10069f;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.pac-container .pac-item-query {\n  color: #10069f; }\n\n.hdpi.pac-logo:after, .pac-container .pac-icon-marker {\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%); }\n\n.hdpi.pac-logo:after {\n  opacity: .5;\n  margin-right: 2px;\n  margin-bottom: 2px; }\n", ""]);

// Exports
exports.locals = {
	"address-search": "address-search__components-address-search-style__mlk-sc-map-travel-time--3nyge",
	"input-field-container": "input-field-container__components-address-search-style__mlk-sc-map-travel-time--3DDkz",
	"input-field": "input-field__components-address-search-style__mlk-sc-map-travel-time--3Rsvw",
	"search-button": "search-button__components-address-search-style__mlk-sc-map-travel-time--19_Bl",
	"results": "results__components-address-search-style__mlk-sc-map-travel-time--2anlQ"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/components/dropdown/style.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/components/dropdown/style.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./icon-ios7-arrow-down-128.png */ "./src/components/dropdown/icon-ios7-arrow-down-128.png"));

// Module
exports.push([module.i, ".dropdown-control__components-dropdown-style__mlk-sc-map-travel-time--2oSG4 {\n  border: none; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs {\n  max-width: 300px;\n  width: 100%; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .drop-down {\n  background: url(" + ___CSS_LOADER_URL___0___ + ") 100% 60%/16px 16px no-repeat;\n  border: none;\n  border-bottom: 1px solid #10069f;\n  border-radius: 0;\n  color: #10069f;\n  height: 44px;\n  font-size: 14px;\n  line-height: 22px;\n  padding: 10px;\n  width: 100%;\n  max-width: 590px; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .drop-down[disabled] {\n  -webkit-text-fill-color: #10069f; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .menu, .dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  border: 0;\n  padding: 0; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs ul {\n  padding: 0;\n  margin: 0 0 1px; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .hide {\n  display: none; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .show {\n  display: block; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .clipped {\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px !important;\n  overflow: hidden;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .no-select {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .dropdown-container {\n  max-width: 590px;\n  float: right;\n  width: 100%;\n  font-weight: 700; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .pseudo-select {\n  display: inline-block;\n  text-decoration: none; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .pseudo-select-focus {\n  border: none;\n  border-bottom: 1px solid #0f059e;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  outline: none; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .pseudo-select:focus {\n  border: none;\n  border-bottom: 1px solid #0f059e;\n  outline: none; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .options {\n  max-height: 372px;\n  overflow: scroll;\n  border: none;\n  border-bottom: 1px solid #0f059e;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  background: #fafafa;\n  position: absolute;\n  width: 100%;\n  z-index: 5;\n  max-width: 300px;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .options li {\n  height: 35px;\n  line-height: 35px;\n  list-style-type: none; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .options a {\n  display: inline-block;\n  font-size: 14px;\n  color: #0f059e;\n  font-weight: 400;\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 100%;\n  width: 100%;\n  text-decoration: none; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .options a:focus {\n  background: #0f059e;\n  color: #fafafa;\n  outline: none; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .pseudo-select-composite {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  height: 42px;\n  border: 0;\n  width: auto;\n  padding-right: 20px; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .pseudo-select-composite:focus {\n  border: 0;\n  background: #e3edf7; }\n\n.dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs .options-composite {\n  margin-top: 44px; }\n", ""]);

// Exports
exports.locals = {
	"dropdown-control": "dropdown-control__components-dropdown-style__mlk-sc-map-travel-time--2oSG4",
	"dropdown": "dropdown__components-dropdown-style__mlk-sc-map-travel-time--3HPAs"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/components/legend/style.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/components/legend/style.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".legend__components-legend-style__mlk-sc-map-travel-time--2nvQo {\n  border: 0; }\n", ""]);

// Exports
exports.locals = {
	"legend": "legend__components-legend-style__mlk-sc-map-travel-time--2nvQo"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/components/loading-overlay/style.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/components/loading-overlay/style.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".loading-overlay__components-loading-overlay-style__mlk-sc-map-travel-time--2jk6M {\n  background-clip: content-box;\n  padding-bottom: 130px; }\n\n.loader-anim__components-loading-overlay-style__mlk-sc-map-travel-time--1yBcE {\n  width: 100%;\n  height: 100%;\n  background: url(\"data:image/gif;base64,R0lGODlhqgAZAOMAACQiJKyqrHRydOzu7ExOTLS2tDQyNKyurHx+fPz+/AAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBgAKACwAAAAAqgAZAAAE/lDJSau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AEaJALBYDGoJxWQBkAEwjQROIEhGaoRWZUVqbz29hmqlasZlDYs1mDzSCtjxhyBjmbYFmgF8fNGp9bxlxfXR2hgl6GXx9f2mGgxiFfXUYd4aLGI14jxiBeJIXlHiWF5h9mhecc54XoHOiFqRzphaoeKoWrHKuFrByshW0crYVuHO6FbxtvhXAbcIUxG3GFMhyyhTMbM4U0G5widYT2Hl7ht4T4GvSE9Rs5BLmbNoT3H6AkeKG8gr0a+xJwJdAnQR2CdxJgLfGH0BF6BzpE8SvEqJMETtNDFWx1MVUbBlbbYzVsdbHXCF7jQxWstjJZCmbrYzWstrLbDG7zQxHaNzNc4zS7WxXM97PejnzZdAShQsGL1acYIDyhQwGM1HQYGDKxOkFqFGkXqBqxeoFrEy0BlnLtq3bt3Djyp1Lt67du3jz6t3Lt6+JCAAh+QQJBgANACwAAAAAqgAZAIMkIiSsqqzc3tx0cnRMTkzU0tQ0MjS0trT8/vwsKiysrqzs7ux8fnwAAAAAAAAAAAAE/rDJSau9OOvNu/9gKI5kaZ5oqq5s675fIcx0bdMJrO88uCDAoHAYNPSOyOSPyBQak9Boa9lsPqXY7IhaJV4lhIN4TAZkAOT0gaAJqMcMDeMtDmjC9IMZg86zM250cRVcXU4VA11fFQldAxqFQgoaClULGolVixSNVY8ZkUGThIZMi5lWGQaOkFWjGJVNlxmopqqsoK4WoYanihmdTZ8YvAivF7FMsxi1XsC4xLqkpUO+mreerU3HFslEyxfN1djC2kzcDcXXFOKHGMFMwxfF6BTeQ+AW7UXP2bnbu6iNY/cLwyp/0QBmuCckH6KCFw6W+3cuoEB+BNddgEdEnsWKfQstYYJogeMQj9NAUlCXKmPLiNDmSYMlkhbJChLjmSOCjqUtlz83xvzIk1JNZjc5DU1ZlKnARXjo7LnQh84fDIHeDMIwh46dDFHfTLVQ9c3VC1nVbJ3g05mWt3A3tB0Yt67ddBcx3t2rRcaNvzVy8B1MuLDhw4gTK17MmEQEACH5BAkGAA0ALAAAAACqABkAgyQiJKyqrNze3HRydExOTNTS1DQyNLS2tPz+/CwqLKyurOzu7Hx+fAAAAAAAAAAAAAT+sMlJq7046827/2AojmRpnmiqrmzrvl8hzHRt0wms7zy4IMCgcBg09I7I5I/IFBqT0Ghr2Ww+pdjsiFolXiWEg3hMBmQA5PSBoAmoxwwN4y0OaML0gxmDzrMzbnRxFVxdThUDXV8VCV0DGoVCChoKVQsaiVWLFI1VjxmRQZOEhkyLmVYZBo6QVaMYlU2XGaimqqygrhahhqeKGZ1Nnxi8CK8XsUyzGLVewLjEuqSlQ76at56tTccWyUTLF83V2MLaTNwNxdcU4ocYwUzDF8XoFN5D4BbtRc/Zudu7qI1j9wvDKn/RAGa4JyQfooIXDpb7dy6gQH4E112AR0SexYp9Cy1hgmiB4xCP00BSUJcqY8uI0OZJgyWSFskKEuOZI4KOpS2XPzfG/MiTUk1mNzkNTVmUqcBFeOjsudCHzh8Mgd4MwjCHjp0MUd9MtVD1zdULWdVsneDTmZa3cDe0HRi3rt10FzHe3atFxo2/NXLwHUy4sOHDiBMrXsyYRAQAIfkECQYADwAsAAAAAKoAGQCDJCIknJqc1NLUZGJkTE5MrKqs7O7sNDI0dHJ0tLa0LCos3N7crK6s/P78fH58AAAABP7wyUmrvTjrzbv/YCiOZGmeaKqubOu+n7DMdG3TyhPcvD3AwKDL0Cgaj0jj4cFIOpEIoXRaIj6vy+b1GaV6vxvrNpkdO7vgtPohNiuZbmgFkKjb7wRN4c53aBx8dwUaBIF3ABl0hnV5GXuLfhVtcWVxRmgSCluYFpNHDBpaTgYaCFtLGJpXnJJXoK2WRZWxnAebGp5GrxiiSaQZplgZtqu4rp2xsnDJnKpcxk+7F71IvxjBT6gXzmfQTtISuWOzlrW3GeIN4BXUR9YX2E7aFsTP6MewseRxzecY6esotDPyzkI8Mhm4JWFFASCyZPvcmCt2L1qoKwUrHEQyr0K9bpMVvz3Ut4xWBYVyQiYJOGFgkYwUNh7pSAHlEYYTHOazFNHMRHv/8PHCWOrUMH8XdDZM1qDnmH4Ug1rM4LIBzAky36RCOnJlV0oly81ZxEgP2UgYAC0alKEQWUQYFC1qhOGRIbQ5mTrluqavkHTCqkb1SxgI4Gxh+RVeDENGj8c5djzu8YOx5cuYM2vezLmz588wIgAAIfkECQYADwAsAAAAAKoAGQCDJCIknJqc1NLUZGJkTE5MrKqs7O7sNDI0dHJ0tLa0LCos3N7crK6s/P78fH58AAAABP7wyUmrvTjrzbv/YCiOZGmeaKqubOu+n7DMdG3TyhPcvD3AwKDL0Cgaj0jj4cFIOpEIoXRaIj6vy+b1GaV6vxvrNpkdO7vgtPohNiuZbmgFkKjb7wRN4c53aBx8dwUaBIF3ABl0hnV5GXuLfhVtcWVxRmgSCluYFpNHDBpaTgYaCFtLGJpXnJJXoK2WRZWxnAebGp5GrxiiSaQZplgZtqu4rp2xsnDJnKpcxk+7F71IvxjBT6gXzmfQTtISuWOzlrW3GeIN4BXUR9YX2E7aFsTP6MewseRxzecY6esotDPyzkI8Mhm4JWFFASCyZPvcmCt2L1qoKwUrHEQyr0K9bpMVvz3Ut4xWBYVyQiYJOGFgkYwUNh7pSAHlEYYTHOazFNHMRHv/8PHCWOrUMH8XdDZM1qDnmH4Ug1rM4LIBzAky36RCOnJlV0oly81ZxEgP2UgYAC0alKEQWUQYFC1qhOGRIbQ5mTrluqavkHTCqkb1SxgI4Gxh+RVeDENGj8c5djzu8YOx5cuYM2vezLmz588wIgAAIfkECQYAEgAsAAAAAKoAGQCEDA4MnJqczM7MTE5MtLa0JCIkpKak7O7sdHJ0rK6sFBIU3N7cZGJkzMrMNDI0rKqs/P78fH58AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf6gJI5kaZ5oqq5s675wLM90bd94ru987/9AUmBBLBqPRYaEgWweA8GodJeAWK/Y7BUhQWi/2cR0PDY0zuh0GjCqgt9c7xssJtuBgjlW0dZ/435adXeEO3mBfCJugVtdjFiDIw8ElJWVESoRlpsPKgObmwUpBaCWAyqTpQSYJ4d+iRKLj4CPVpEiB2+3JbJZBypyYA4pDnNcKbl0KK56sL2BtLW7yV+7JM9XvynBX8MoxXAq1ILLjM61VtGP07oq2FbaKNxa3ifgYMco42HliH3o6hixU5biHYR4J+ZlqWfi3h9x7VqZ+1crYKCB1dy9QWhCIRaGJRxqyXdiH6R+r7AoznKEDiO5ghuBzQFJQmQWkiZMXrEmgdmccwBZSssZEYVBjiU8XqE5wiYWnCV02kLZTCUji35c8oMJBikJpVaYinDaCFnREj7fAK0odB1RgkZjbptJzBhEuGgnKkIHAaueXalKsUKhSVWnFJ9UERCFgpTiUykCgxqc19/eoGDPFtpcw4yaz2fYXGabGS/n01MMhiudEbVrKUOcyFbCRLYTKK9z697Nu7fv38CDCw8SAgAh+QQJBgASACwAAAAAqgAZAIQMDgycmpzMzsxMTky0trQkIiSkpqTs7ux0cnSsrqwUEhTc3txkYmTMysw0MjSsqqz8/vx8fnwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF/qAkjmRpnmiqrmzrvnAsz3Rt33iu73zv/0BSYEEsGo9FhoSBbB4Dwah0l4BYr9jsFSFBaL/ZxHQ8NjTO6HQaMKqC31zvGywm24GCOVbR1n/jflp1d4Q7eYF8Im6BW12MWIMjDwSUlZURKhGWmw8qA5ubBSkFoJYDKpOlBJgnh36JEouPgI9WkSIHb7clslkHKnJgDikOc1wpuXQornqwvYG0tbvJX7skz1e/KcFfwyjFcCrUgsuMzrVW0Y/TuirYVtoo3FreJ+BgxyjjYeWIfejqGLFTluIdhHgn5mWpZ+LeH3HtWpn7VytgoIHV3L1BaEIhFoYlHGrJd2IfpH6vsCjOcoQOI7mCG4HNAUlCZBaSJkxesSaB2ZxzAFlKyxkRhUGOJTxeoTnCJhacJXTaQtlMJSOLflzygwkGKQmlVpiKcNoIWdESPt8ArSh0HVGCRmNum0nMGES4aCcqQgcBq55dqUqxQqFJVacUn1QREIWClOJTKQKDGpzX396gYM8W2lzDjJrPZ9hcZpsZL+fTUwyGK50RtWspQ5zIVsJEthMor3Pr3s27t+/fwIMLDxICACH5BAkGABMALAAAAACqABkAhCQiJJyanGRiZNTS1Dw+PLS2tHx+fOzu7DQyNKyqrExOTCwqLHRydNze3MzKzIyOjPz+/KyurFRSVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX+4CSOZGmeaKqubOu+cCzPdG3feK7vfO//wJygQSwaj8XAZIFsHgfBqHTHgFiv2Ow1MkFov9nDdDxmOM7odJowqoLfXO8bLCbbgY85VtLWf+N+WnV3hCgGBYiJiQkoeYF8Im6BW12TWIMjh4qKjCkKm5sAKQCgigoqCaWIBioRb5gkjn6QE5KWgJZWsBOudCq2WggpC3MMKgdwra+Nk7TAgbi5u71fuyTPWMIocmDGKchgXCnUgsyPfbkQ0ZbTyynYV9onxG/eKOB/yr4nsnrO6eoqpWu3DwU8K/JMcPti7wQ+LeJQkAtjbha6XOsmEaz2a07CEvS6HUs2zp2JfnOt/qXLGGhjuXceUyzU0tDEwywRT0y8VNHfxVsCpZnYecXaz2DDio0Mp48jv2ZHoQVlN9TkiYMQPpKYmaVmiZtYclYtWALlG5UYp2oc69RgTBQhGS7Nl0JTqU4noUYCyNLPLrug8J74pKqAKBSkCp9KkUoVKx5mwaAFytVvocs5zKjZfIbN3pVqW2IefQcr08p6jJJezWOIk9dKmLx2AoW17du4c+vezbu3798sQgAAIfkECQYAEwAsAAAAAKoAGQCEJCIknJqcZGJk1NLUPD48tLa0fH587O7sNDI0rKqsTE5MLCosdHJ03N7czMrMjI6M/P78rK6sVFJUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf7gJI5kaZ5oqq5s675wLM90bd94ru987//AnKBBLBqPxcBkgWweB8GodMeAWK/Y7DUyQWi/2cN0PGY4zuh0mjCqgt9c7xssJtuBjzlW0tZ/435adXeEKAYFiImJCSh5gXwiboFbXZNYgyOHioqMKQqbmwApAKCKCioJpYgGKhFvmCSOfpATkpaAllawE650KrZaCCkLcwwqB3Ctr42TtMCBuLm7vV+7JM9YwihyYMYpyGBcKdSCzI99uRDRltPLKdhX2ifEb94o4H/Kvieyes7p6iqla7cPBTwr8kxw+2LvBD4t4lCQC2NuFrpc6yYRrPZrTsIS9LodSzbOnYl+c63+pcsYaGO5dx5TLNTS0MTDLBFPTLxU0d/FWwKlmdh5xdrPYMOKjQynjyO/ZkehBWU31OSJgxA+kpiZpWaJm1hyVi1YAuUblRinahzr1GBMFCEZLs2XQlOpTiehRgLI0s8uu6DwnvikqoAoFKQKn0qRShUrHmbBoAXK1W+hyznMqNl8hs3elWpbYh59ByvTynqMkl7NY4iT10qYvHYChbXt27hz697Nu7fv3yxCAAAh+QQJBgARACwAAAAAqgAZAIQkIiSsqqx0cnTc3tw8PjzMysw0MjS0trSMjoz8/vxMTkwsKiysrqx8fnzs7uzU0tRUUlQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF/mAkjmRpnmiqrmzrvnAsz3Rt33iu73zv/8BgazEoGo9I40NUSDqRC6F0ejMkrtisFusQObZgrYFKFhIK6LRaLRgtwvBEN/KNg8flfA9ixyJGVn1ac3WCWHh6Og0HjI2NASoKjpMHACcKhn8igYZXhJ2HJZKUjZYoAKSNCioBqQcNKgxwcygCcYgkfIKaEZydn6AJuBG2cMMkb3BtKYVbDLGzKsVhxxGYu4DBcl7aw9N3Kb5byyjNWs8psmG0J99b1bp9vOKCwKDetynJYeQn5lnoUKgDw86EOzGXMmULZq8TPmPh4vQz8Q9LwBMDtxQscTALPIWbtDU09JCaPokqtipeuWgi4yBp+Uxck7cQ1EhBJcGhoJdlYgmVCViWcJllI4mOoUzEszNPJLdgOd+dVJYSjlASRLnAhCgTZC+ndLpxjHmCJxafJIBeHZHV01aTSr2ajXOzT1SEKPaBQTtCrYpFqSClGJXKlCi5YIFyHUGYlGETqFytStEqFaxEJ5bGacrw6T3MoG2cWUMaDbm50cJCDc2aCup1nh22nh2EyJPbSyI8uH07Cu3fwIMLH068uPHjZEIAACH5BAkGABEALAAAAACqABkAhCQiJKyqrHRydNze3Dw+PMzKzDQyNLS2tIyOjPz+/ExOTCwqLKyurHx+fOzu7NTS1FRSVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX+YCSOZGmeaKqubOu+cCzPdG3feK7vfO//wGBrMSgaj0jjQ1RIOpELoXR6MySu2KwW6xA5tmCtgUoWEgrotFotGC3C8EQ38o2Dx+V8D2LHIkZWfVpzdYJYeHo6DQeMjY0BKgqOkwcAJwqGfyKBhleEnYclkpSNligApI0KKgGpBw0qDHBzKAJxiCR8gpoRnJ2foAm4EbZwwyRvcG0phVsMsbMqxWHHEZi7gMFyXtrD03cpvlvLKM1azymyYbQn31vVun284oLAoN63Kclh5CfmWehQqAPDzoQ7MZcyZQtmrxM+Y+Hi9DPxD0vAEwO3FCxxMAs8hZu0NTT0kJo+iSq2Kl65aCLjIGn5TFyTtxDUSEElwaGgl2ViCZUJWJZwmWUjiY6hTMSzM08kt2A5351UlhKOUBJEucCEKBNkL6d0unGMeYInFp8kgF4dkdXTVpNKvZqNc7NPVIQo9oFBO0KtikWpIKUYlcqUKLlggXIdQZiUYROoXK1K0SoVrEQnlsZpyvDpPcygbZxZQxoNubnRwkINzZoK6nWeHbaeHYTIk9tLIjy4fTsK7d/AgwsfTry48eNkQgAAIfkECQYAFAAsAAAAAKoAGQCEDA4MnJqczM7MTE5MtLa0JCIk7O7spKakdHJ03N7cNDI0rK6sFBIU1NLUZGJkzMrMLCos/P78rKqsfH58AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf4gJY5kaZ5oqq5s675wLM90bd94ru987//AoJDSSBiPyOQRQgkon0nHcEqtGSLYrHabVVAW3PAWUS0DAY+0er0+kK7iuBccF5PN+B2jrhW8+WFzgFx3eSQTBImKihIqA4uQBAUpBZGLAyd7g34jcINdX59ahSKVlomYKRKnBBMqdGEGKgh1XigQdaQjAJ+cIp6igqJYurhxuiXAWwuvcbIptHIpCrmZvX/DEcLDutTHKspazCmwXM8o0WK2J8Z2J7yb2MPbosXVKeFZ4yjlW+cn6QJNu1dCEyBfFPLxofepG8ETCiPsO9FPyz8TAbmsM9EuDDIK8A7KCxYqm71v+LXiTDRRMcvFEhm3bCzhzZ0Jg3wQRpTWko9DlCgirizRM8JLEjG1zCTRkdC7a52yaSvJrUTTMeBUNhNzdERSUChqerQWL2o2hoN+2gyqlZyzWbVSXB31tOwvqWgBnVwLsS0KRKcapXjEahIKU6dSFYR69yzVeiUQW1J8YtUpV4b0ME6I93HDzKBpoGFDOo0bs/M8pw3NespOdar1tp4NpAiU20yc3IYihbbv38CDCx9OvLjxEyEAACH5BAkGABQALAAAAACqABkAhAwODJyanMzOzExOTLS2tCQiJOzu7KSmpHRydNze3DQyNKyurBQSFNTS1GRiZMzKzCwqLPz+/KyqrHx+fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX+ICWOZGmeaKqubOu+cCzPdG3feK7vfO//wKCQ0kgYj8jkEUIJKJ9Jx3BKrRki2Kx2m1VQFtzwFlEtAwGPtHq9PpCu4rgXHBeTzfgdo64VvPlhc4Bcd3kkEwSJiooSKgOLkAQFKQWRiwMne4N+I3CDXV+fWoUilZaJmCkSpwQTKnRhBioIdV4oEHWkIwCfnCKeooKiWLq4cbolwFsLr3GyKbRyKQq5mb1/wxHCw7rUxyrKWswpsFzPKNFitifGdie8m9jD26LF1SnhWeMo5VvnJ+kCTbtXQhMgXxTy8aH3qRvBEwoj7DvRT8s/EwG5rDPRLgwyCvAOygsWKpu9b/i14kw0UTHLxRIZt2ws4c2dCYN8EEaU1pKPQ5QoIq4s0TPCSxIxtcwk0ZHQu2udsmkrya1E0zHgVDYTc3REUlAoanq0Fi9qNoaDftoMqpWcs1m1Ulwd9bTsL6loAZ1cC7EtCkSnGqV4xGoSClOnUhWEevcs1XolEFtSfGLVKVeG9DBOiPdxw8ygaaBhQzqNG7PzPKcNzXrKTnWq9baeDaQIlNtMnNyGIoW279/AgwsfTry48RMhAAAh+QQJBgASACwAAAAAqgAZAIQMDgycmpzMzsxMTky0trQkIiSkpqTs7ux0cnSsrqwUEhTc3txkYmTMysw0MjSsqqz8/vx8fnwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF/qAkjmRpnmiqrmzrvnAsz3Rt33iu73zv/8Cg0BZYGI/I5JEhYSifycBwSq0lINisdptFSBDc8DZRLQcNjbR6vQaMruK4FxwXk814nqCuVbz5YXOAXHc5EQSIiYkPKgOKjwQFKQWQigMqD5WIESh7g34icINdX6NahSOZmpwpolwHKnRiDikOdV4pB3GoJJ6AoBKuo4KmWLwSunYqwlqwKbJhtCi2cirJYccivnzAzIDExcfXhMtxzijQXNIn1GK4KONjnaPdxVjgpuK75WLnJ+lb1ploF8javhPb6tSzh2+UPmWtzMWqI7AEQS7vTsQ7Ne/TH4al7D3Exi+MPxMAsLVUJHFxS0YTG7Nkk5AwzsJiDQeNJBex38Q4K0e01PKyRExjHX99xBkyHMyDKLxhOVkiZZagIoaSygW1RE0xN03lBLRTXk+TP2fVumUQoomvYcIOa5rvqdsThzQxSuFIU6RJfglcSqGqEqu39JaKpevQRGFIh/NI9po4lD0IY/nMnMy5BRo2oNO4sQzSap3NnVPvkMrWdFfVsHkUgUKbiRPaUKTE3s27t+/fwIML5xwCACH5BAkGABIALAAAAACqABkAhAwODJyanMzOzExOTLS2tCQiJKSmpOzu7HRydKyurBQSFNze3GRiZMzKzDQyNKyqrPz+/Hx+fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX+oCSOZGmeaKqubOu+cCzPdG3feK7vfO//wKDQFlgYj8jkkSFhKJ/JwHBKrSUg2Kx2m0VIENzwNlEtBw2NtHq9Boyu4rgXHBeTzXieoK5VvPlhc4BcdzkRBIiJiQ8qA4qPBAUpBZCKAyoPlYgRKHuDfiJwg11fo1qFI5manCmiXAcqdGIOKQ51XikHcagknoCgEq6jgqZYvBK6dirCWrApsmG0KLZyKslhxyK+fMDMgMTFx9eEy3HOKNBc0ifUYrgo42Odo93FWOCm4rvlYucn6VvWmWgXyNq+E9vq1LOHb5Q+Za3MxaojsARBLu9OxDs179MfhqXsPcTGL4w/EwCwtVQkcXFLRhMbs2STkDDOwmINB40kF7HfxDgrR7TU8rJETGMdf33EGTIczIMovGE5WSJllqAihpLKBbVETTE3TeUEtFNeT5M/Z9W6ZRCiia9hwg5rmu+p2xOHNDFK4UhTpEl+CVxKoaoSq7f0loql69BEYUiH80j2mjiUPQhj+cyczLkFGjag07ixDNJqnc2dU++QytZ0V9WweRSBQpuJE9pQpMTezbu379/AgwvnHAIAIfkECQYAEwAsAAAAAKoAGQCEJCIknJqcZGJk1NLUPD48tLa0fH587O7sNDI0rKqsTE5MLCosdHJ03N7czMrMjI6M/P78rK6sVFJUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf7gJI5kaZ5oqq5s675wLM90bd94ru987//AoHCIEjSOyKQSGZgsllDlgEityhiQrHbL1UYmiK6Ye7CafwyHes1mE0bYsfwblo/L57zuYd9K4H1idIFdeCQGBYmKigkqCouQBQApAJGLCioJlokGKoibjSd8hH8icYReYKhbhiMRcq0mp2IIKQt2DCoHcyqvdyijgaUTs6iDq1mxE75iyiTFXLUodWO5KbtjXynMhcCow9CBx8jK3GQq4VrSJ7dy1ijYgr2w3qSAyBDjq+X0KelZ60xQE/PuRLwu2lCYY1VP2D1k+lDx++XPTsAS7arp4rWtn4lgfcDhy6cK38Rm6LEsphjYpaCJg1wSnlioxdkEkHZE4otI6GS3inIukshIcGO2eRQ/fnu4imcgn+eAjhE6giUXlyVgbpFpgmayhiGZGitJrqvHE/8gUBVBtKVReR2TlsApRydEsvtMfLIUCsWjTZIoAS6AKYWmTZ1S7I3Ud+5SUyOd9rGpp/ILumPsNsUr0bLnGWnaiFbzBvJOzj0/qxaS9qjVp6tj+zASpXaTJ7WjTJHNu7fv38CDCx/+IgQAIfkECQYAEwAsAAAAAKoAGQCEJCIknJqcZGJk1NLUPD48tLa0fH587O7sNDI0rKqsTE5MLCosdHJ03N7czMrMjI6M/P78rK6sVFJUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf7gJI5kaZ5oqq5s675wLM90bd94ru987//AoHCIEjSOyKQSGZgsllDlgEityhiQrHbL1UYmiK6Ye7CafwyHes1mE0bYsfwblo/L57zuYd9K4H1idIFdeCQGBYmKigkqCouQBQApAJGLCioJlokGKoibjSd8hH8icYReYKhbhiMRcq0mp2IIKQt2DCoHcyqvdyijgaUTs6iDq1mxE75iyiTFXLUodWO5KbtjXynMhcCow9CBx8jK3GQq4VrSJ7dy1ijYgr2w3qSAyBDjq+X0KelZ60xQE/PuRLwu2lCYY1VP2D1k+lDx++XPTsAS7arp4rWtn4lgfcDhy6cK38Rm6LEsphjYpaCJg1wSnlioxdkEkHZE4otI6GS3inIukshIcGO2eRQ/fnu4imcgn+eAjhE6giUXlyVgbpFpgmayhiGZGitJrqvHE/8gUBVBtKVReR2TlsApRydEsvtMfLIUCsWjTZIoAS6AKYWmTZ1S7I3Ud+5SUyOd9rGpp/ILumPsNsUr0bLnGWnaiFbzBvJOzj0/qxaS9qjVp6tj+zASpXaTJ7WjTJHNu7fv38CDCx/+IgQAIfkECQYAEQAsAAAAAKoAGQCEJCIkrKqsdHJ03N7cPD48zMrMNDI0tLa0jI6M/P78TE5MLCosrK6sfH587O7s1NLUVFJUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf5gJI5kaZ5oqq5s675wLM90bd94ru987//AoHDYWwyOyKQS+SA6n1BDYkqtWqkOqHa7IhS+4HBYMFpcz9Ysd82OQNBXxEgKR6tJjYN+vw+oFHyBBwApAIJ8CioBh3oNKnmMfimAjIMnCnVVciJ0mWkmDHB3JwJ1BilmcGQpDnAMKqF2KqVwpyZvngmbEZ25U6MisWfAJbRotie9V6sorWivKcJXxCTGZ8gkmLm7yrnE0p8p1lfYJalozCfOZ9Ao4FXUI+NW5SK4nty+8KCis6Yp3aqkM7HuSrsT77D4q3XJVz59v/jJEvcPxbkzA0sUtHJQ4rCFx07cy/QQ4rd+FKoZoghIJSOJjVU6lkgYMWVIE9rwzYFYkwTNBPFEzKtSr0wdlyNgUpHpEyWKoVSKjqxTUt/JiU8rJjuqQukUpiN+Bo0AdUrRnCR38rz60eY1VFxZuYLllJRWElPhVPVFDNIhSSgoMSKEwlClRCkWMXKUwq8gwJcqWcLpUK3JNpi15EWz11vmz0S8iBn9hRnLOmNBq95yuu7q12uMLJmdpAns27hz697Nu/fuEAAh+QQJBgARACwAAAAAqgAZAIQkIiSsqqx0cnTc3tw8PjzMysw0MjS0trSMjoz8/vxMTkwsKiysrqx8fnzs7uzU0tRUUlQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF/mAkjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcNhbDI7IpBL5IDqfUENiSq1aqQ6odrsiFL7gcFgwWlzP1ix3zY5A0FfESApHq0mNg36/D6gUfIEHACkAgnwKKgGHeg0qeYx+KYCMgycKdVVyInSZaSYMcHcnAnUGKWZwZCkOcAwqoXYqpXCnJm+eCZsRnblToyKxZ8AltGi2J71XqyitaK8pwlfEJMZnyCSYubvKucTSnynWV9glqWjMJ85n0CjgVdQj41blIrie3L7woKKzpindqqQzse5KuxPvsPirdclXPn2/+MkS9w/FuTMDSxS0clDisIXHTtzL9BDit34UqhmiCEglI4mNVTqWSBgxZUgT2vDNgViTBM0E8UTMq1KvTB2XI2BSkekTJYqhVIqOrFNS38mJTysmO6pC6RSmI34GjQB1StGcJHfyvPrR5jVUXFm5guWUlFYSU+FU9UUM0iFJKCgxIoTCUKVEKRYxcpTCryDAlypZwulQrck2mLXkRbPXW+bPRLyIGf2FGcs6Y0Gr3nK67urXa4wsmZ2kCezbuHPr3s279+4QACH5BAkGAA8ALAAAAACqABkAgwwODKSmpOzu7ExOTMzKzCQiJLS2tKyurHRydBQSFKyqrPz+/MzOzDQyNHx+fAAAAAT+8MlJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu7/wGEMCgUBjoGY+gxGLJbDYZGIdhSqUqNIOq1lDIFLbVgUYBnjo00vI1ky1zvW6D2KJ02pfQy+G+FGgQfEsNGQ2BCwgaAoEHGnt8fhmAgYMYhYGIFgCGTxiOd5AYknyUF5Z8mBiKfIwZnnagF6J3pBamd6gUdZsLeRauTrAWsna0FbZ2uBaqd6ydgcEVw07FFMdOyRKau7zOj3+G1BPWTdgUy3bNes/fk4SG5bqbvRW/TdAU0k3hEuNM5RPnnKTztS4SOHeXLmjbNY9CPSb3JuRjsu9BvyX/JARsMpBewVCNByu9uxDPUMMJD/uwG4XwVKJFjT7GCllqZKZt3NR5M9hOZMIMG5l0dChTGM1aNiuUDHRSQsoFESVMFNTy1stVMXeC7FnzZ4WF8qK4WYOhTZkuGL64mYOBTJkzGdKAIXvBLBi0F9SWYZsLZ1MkgAMv5fM3sOEeP4YoBlLksOPHkCNLnky5suXLmDNrjhEBADtvdERvY1VEbFNkZHU3Y3RmejNmSmo2QmhFS3BESDBwdDA0bW01TjNWSjYwZUc5UnFGeC9Oc2pkaTlFbEFEM3B5\") no-repeat;\n  background-position: 50% 50%;\n  background-size: 85px; }\n\n@-webkit-keyframes fade-out-animation__components-loading-overlay-style__mlk-sc-map-travel-time--11z5X {\n  0% {\n    display: block;\n    visibility: visible;\n    z-index: 0; }\n  99% {\n    display: block;\n    visibility: visible;\n    z-index: 0; }\n  100% {\n    display: none;\n    visibility: hidden;\n    z-index: -5; } }\n\n@-moz-keyframes fade-out-animation__components-loading-overlay-style__mlk-sc-map-travel-time--11z5X {\n  0% {\n    display: block;\n    visibility: visible;\n    z-index: 0; }\n  99% {\n    display: block;\n    visibility: visible;\n    z-index: 0; }\n  100% {\n    display: none;\n    visibility: hidden;\n    z-index: -5; } }\n\n@-o-keyframes fade-out-animation__components-loading-overlay-style__mlk-sc-map-travel-time--11z5X {\n  0% {\n    display: block;\n    visibility: visible;\n    z-index: 0; }\n  99% {\n    display: block;\n    visibility: visible;\n    z-index: 0; }\n  100% {\n    display: none;\n    visibility: hidden;\n    z-index: -5; } }\n\n@keyframes fade-out-animation__components-loading-overlay-style__mlk-sc-map-travel-time--11z5X {\n  0% {\n    display: block;\n    visibility: visible;\n    z-index: 0; }\n  99% {\n    display: block;\n    visibility: visible;\n    z-index: 0; }\n  100% {\n    display: none;\n    visibility: hidden;\n    z-index: -5; } }\n\n.fade-out__components-loading-overlay-style__mlk-sc-map-travel-time--2M4rc {\n  -webkit-transition: opacity 1s ease-in-out;\n  -moz-transition: opacity 1s ease-in-out;\n  -ms-transition: opacity 1s ease-in-out;\n  -o-transition: opacity 1s ease-in-out;\n  transition: opacity 1s ease-in-out;\n  opacity: 0;\n  animation: fade-out-animation__components-loading-overlay-style__mlk-sc-map-travel-time--11z5X 1s forwards;\n  -webkit-animation: fade-out-animation__components-loading-overlay-style__mlk-sc-map-travel-time--11z5X 1s forwards;\n  -moz-animation: fade-out-animation__components-loading-overlay-style__mlk-sc-map-travel-time--11z5X 1s forwards;\n  -ms-animation: fade-out-animation__components-loading-overlay-style__mlk-sc-map-travel-time--11z5X 1s forwards;\n  -o-animation: fade-out-animation__components-loading-overlay-style__mlk-sc-map-travel-time--11z5X 1s forwards; }\n", ""]);

// Exports
exports.locals = {
	"loading-overlay": "loading-overlay__components-loading-overlay-style__mlk-sc-map-travel-time--2jk6M",
	"loader-anim": "loader-anim__components-loading-overlay-style__mlk-sc-map-travel-time--1yBcE",
	"fade-out": "fade-out__components-loading-overlay-style__mlk-sc-map-travel-time--2M4rc",
	"fade-out-animation": "fade-out-animation__components-loading-overlay-style__mlk-sc-map-travel-time--11z5X"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/components/mode-switch/style.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/components/mode-switch/style.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mode-switch__components-mode-switch-style__mlk-sc-map-travel-time--2YDOB a {\n  opacity: .5; }\n\na.active__components-mode-switch-style__mlk-sc-map-travel-time--i1PlA {\n  opacity: 1; }\n", ""]);

// Exports
exports.locals = {
	"mode-switch": "mode-switch__components-mode-switch-style__mlk-sc-map-travel-time--2YDOB",
	"active": "active__components-mode-switch-style__mlk-sc-map-travel-time--i1PlA"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/components/tooltip-diff/style.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/components/tooltip-diff/style.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".tooltip__components-tooltip-diff-style__mlk-sc-map-travel-time--3_nLJ {\n  background-color: rgba(225, 225, 225, 0.9);\n  font-size: 10pt;\n  color: #10069f; }\n\n.tooltip__components-tooltip-diff-style__mlk-sc-map-travel-time--3_nLJ p {\n  font-size: 10pt;\n  line-height: 1.5; }\n\n.ico-mood__components-tooltip-diff-style__mlk-sc-map-travel-time--nO0TV {\n  margin-top: 2px; }\n", ""]);

// Exports
exports.locals = {
	"tooltip": "tooltip__components-tooltip-diff-style__mlk-sc-map-travel-time--3_nLJ",
	"ico-mood": "ico-mood__components-tooltip-diff-style__mlk-sc-map-travel-time--nO0TV"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/components/tooltip/style.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/components/tooltip/style.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".tooltip__components-tooltip-style__mlk-sc-map-travel-time--fohGH {\n  background-color: rgba(225, 225, 225, 0.9);\n  font-size: 10pt;\n  color: #10069f; }\n\n.tooltip__components-tooltip-style__mlk-sc-map-travel-time--fohGH p {\n  font-size: 10pt;\n  line-height: 1.5; }\n\n.ico-mood__components-tooltip-style__mlk-sc-map-travel-time--2IokE {\n  margin-top: 2px; }\n", ""]);

// Exports
exports.locals = {
	"tooltip": "tooltip__components-tooltip-style__mlk-sc-map-travel-time--fohGH",
	"ico-mood": "ico-mood__components-tooltip-style__mlk-sc-map-travel-time--2IokE"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/views/main.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/views/main.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mode-switch-container__views-main__mlk-sc-map-travel-time--3st_F {\n  width: 20rem;\n  min-width: 20rem; }\n\n@media screen and (max-width: 650px) {\n  .mode-switch-container__views-main__mlk-sc-map-travel-time--3st_F {\n    width: 80px;\n    max-width: 80px;\n    min-width: 80px;\n    padding-left: .25rem;\n    position: absolute;\n    top: 240px;\n    z-index: 3; } }\n\n.dropdown-container__views-main__mlk-sc-map-travel-time--1IqgL {\n  width: 300px;\n  min-width: 300px;\n  padding-left: 0;\n  padding-right: 0;\n  z-index: 7; }\n\n@media screen and (max-width: 650px) {\n  .dropdown-container__views-main__mlk-sc-map-travel-time--1IqgL {\n    width: 100%;\n    max-width: 100%;\n    padding-left: .5rem;\n    padding-right: .5rem; } }\n\n.legend-container__views-main__mlk-sc-map-travel-time--1Dsh0 {\n  width: 300px;\n  min-width: 300px; }\n\n@media screen and (max-width: 650px) {\n  .legend-container__views-main__mlk-sc-map-travel-time--1Dsh0 {\n    width: 100%;\n    max-width: 100%; } }\n\n.tooltip-container__views-main__mlk-sc-map-travel-time--w25XV {\n  position: absolute;\n  top: 0;\n  pointer-events: none;\n  border: 0;\n  width: 320px; }\n\n.tooltip-container__views-main__mlk-sc-map-travel-time--w25XV .tooltip-body {\n  padding-left: 4rem; }\n\n@media screen and (max-width: 650px) {\n  .tooltip-container__views-main__mlk-sc-map-travel-time--w25XV {\n    width: 100%;\n    z-index: 3;\n    top: unset;\n    bottom: 0; }\n  .tooltip-container__views-main__mlk-sc-map-travel-time--w25XV .tooltip-body {\n    bottom: 0;\n    padding-left: .5rem; } }\n\n.address-search-container__views-main__mlk-sc-map-travel-time--2NIUJ {\n  left: 0;\n  z-index: 3; }\n\n.address-search-container__views-main__mlk-sc-map-travel-time--2NIUJ div.absolute {\n  padding-left: 4rem; }\n\n@media screen and (max-width: 650px) {\n  .address-search-container__views-main__mlk-sc-map-travel-time--2NIUJ {\n    left: 0;\n    z-index: 4; }\n  .address-search-container__views-main__mlk-sc-map-travel-time--2NIUJ div.absolute {\n    padding-left: .5rem;\n    display: block !important; } }\n", ""]);

// Exports
exports.locals = {
	"mode-switch-container": "mode-switch-container__views-main__mlk-sc-map-travel-time--3st_F",
	"dropdown-container": "dropdown-container__views-main__mlk-sc-map-travel-time--1IqgL",
	"legend-container": "legend-container__views-main__mlk-sc-map-travel-time--1Dsh0",
	"tooltip-container": "tooltip-container__views-main__mlk-sc-map-travel-time--w25XV",
	"address-search-container": "address-search-container__views-main__mlk-sc-map-travel-time--2NIUJ"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/dg-utils/frontend/create-app.js":
/*!******************************************************!*\
  !*** ./node_modules/dg-utils/frontend/create-app.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const domready = __webpack_require__(/*! domready */ "./node_modules/domready/ready.js");

const createApp = (app) => {
  domready(function () {
    if(typeof app.init === 'function') {
      app.init();
    }
    if(typeof app.resize === 'function') {
      window.addEventListener('resize', () => { app.resize(); }, false);
    }
    if(typeof app.update === 'function') {
      function update (time) {
        requestAnimationFrame(update);
        app.update(time);
      }
      requestAnimationFrame(update);
    }
  });
  return this;
};

module.exports = createApp


/***/ }),

/***/ "./node_modules/document-ready/index.js":
/*!**********************************************!*\
  !*** ./node_modules/document-ready/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ready

function ready (callback) {
  if (typeof document === 'undefined') {
    throw new Error('document-ready only runs in the browser')
  }
  var state = document.readyState
  if (state === 'complete' || state === 'interactive') {
    return setTimeout(callback, 0)
  }

  document.addEventListener('DOMContentLoaded', function onLoad () {
    callback()
  })
}


/***/ }),

/***/ "./node_modules/domready/ready.js":
/*!****************************************!*\
  !*** ./node_modules/domready/ready.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (true) module.exports = definition()
  else {}

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/fast-safe-stringify/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fast-safe-stringify/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = stringify
stringify.default = stringify
stringify.stable = deterministicStringify
stringify.stableStringify = deterministicStringify

var arr = []
var replacerStack = []

// Regular stringify
function stringify (obj, replacer, spacer) {
  decirc(obj, '', [], undefined)
  var res
  if (replacerStack.length === 0) {
    res = JSON.stringify(obj, replacer, spacer)
  } else {
    res = JSON.stringify(obj, replaceGetterValues(replacer), spacer)
  }
  while (arr.length !== 0) {
    var part = arr.pop()
    if (part.length === 4) {
      Object.defineProperty(part[0], part[1], part[3])
    } else {
      part[0][part[1]] = part[2]
    }
  }
  return res
}
function decirc (val, k, stack, parent) {
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k)
        if (propertyDescriptor.get !== undefined) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, { value: '[Circular]' })
            arr.push([parent, k, val, propertyDescriptor])
          } else {
            replacerStack.push([val, k])
          }
        } else {
          parent[k] = '[Circular]'
          arr.push([parent, k, val])
        }
        return
      }
    }
    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, stack, val)
      }
    } else {
      var keys = Object.keys(val)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        decirc(val[key], key, stack, val)
      }
    }
    stack.pop()
  }
}

// Stable-stringify
function compareFunction (a, b) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}

function deterministicStringify (obj, replacer, spacer) {
  var tmp = deterministicDecirc(obj, '', [], undefined) || obj
  var res
  if (replacerStack.length === 0) {
    res = JSON.stringify(tmp, replacer, spacer)
  } else {
    res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer)
  }
  while (arr.length !== 0) {
    var part = arr.pop()
    if (part.length === 4) {
      Object.defineProperty(part[0], part[1], part[3])
    } else {
      part[0][part[1]] = part[2]
    }
  }
  return res
}

function deterministicDecirc (val, k, stack, parent) {
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k)
        if (propertyDescriptor.get !== undefined) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, { value: '[Circular]' })
            arr.push([parent, k, val, propertyDescriptor])
          } else {
            replacerStack.push([val, k])
          }
        } else {
          parent[k] = '[Circular]'
          arr.push([parent, k, val])
        }
        return
      }
    }
    if (typeof val.toJSON === 'function') {
      return
    }
    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, stack, val)
      }
    } else {
      // Create a temporary object in the required way
      var tmp = {}
      var keys = Object.keys(val).sort(compareFunction)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        deterministicDecirc(val[key], key, stack, val)
        tmp[key] = val[key]
      }
      if (parent !== undefined) {
        arr.push([parent, k, val])
        parent[k] = tmp
      } else {
        return tmp
      }
    }
    stack.pop()
  }
}

// wraps replacer function to handle values we couldn't replace
// and mark them as [Circular]
function replaceGetterValues (replacer) {
  replacer = replacer !== undefined ? replacer : function (k, v) { return v }
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i]
        if (part[1] === key && part[0] === val) {
          val = '[Circular]'
          replacerStack.splice(i, 1)
          break
        }
      }
    }
    return replacer.call(this, key, val)
  }
}


/***/ }),

/***/ "./node_modules/global/document.js":
/*!*****************************************!*\
  !*** ./node_modules/global/document.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = __webpack_require__(/*! min-document */ 0);

var doccy;

if (typeof document !== 'undefined') {
    doccy = document;
} else {
    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }
}

module.exports = doccy;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/hyperscript-attribute-to-property/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/hyperscript-attribute-to-property/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = attributeToProperty

var transform = {
  'class': 'className',
  'for': 'htmlFor',
  'http-equiv': 'httpEquiv'
}

function attributeToProperty (h) {
  return function (tagName, attrs, children) {
    for (var attr in attrs) {
      if (attr in transform) {
        attrs[transform[attr]] = attrs[attr]
        delete attrs[attr]
      }
    }
    return h(tagName, attrs, children)
  }
}


/***/ }),

/***/ "./node_modules/hyperx/index.js":
/*!**************************************!*\
  !*** ./node_modules/hyperx/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var attrToProp = __webpack_require__(/*! hyperscript-attribute-to-property */ "./node_modules/hyperscript-attribute-to-property/index.js")

var VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4
var ATTR_KEY = 5, ATTR_KEY_W = 6
var ATTR_VALUE_W = 7, ATTR_VALUE = 8
var ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10
var ATTR_EQ = 11, ATTR_BREAK = 12
var COMMENT = 13

module.exports = function (h, opts) {
  if (!opts) opts = {}
  var concat = opts.concat || function (a, b) {
    return String(a) + String(b)
  }
  if (opts.attrToProp !== false) {
    h = attrToProp(h)
  }

  return function (strings) {
    var state = TEXT, reg = ''
    var arglen = arguments.length
    var parts = []

    for (var i = 0; i < strings.length; i++) {
      if (i < arglen - 1) {
        var arg = arguments[i+1]
        var p = parse(strings[i])
        var xstate = state
        if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE
        if (xstate === ATTR) xstate = ATTR_KEY
        if (xstate === OPEN) {
          if (reg === '/') {
            p.push([ OPEN, '/', arg ])
            reg = ''
          } else {
            p.push([ OPEN, arg ])
          }
        } else if (xstate === COMMENT && opts.comments) {
          reg += String(arg)
        } else if (xstate !== COMMENT) {
          p.push([ VAR, xstate, arg ])
        }
        parts.push.apply(parts, p)
      } else parts.push.apply(parts, parse(strings[i]))
    }

    var tree = [null,{},[]]
    var stack = [[tree,-1]]
    for (var i = 0; i < parts.length; i++) {
      var cur = stack[stack.length-1][0]
      var p = parts[i], s = p[0]
      if (s === OPEN && /^\//.test(p[1])) {
        var ix = stack[stack.length-1][1]
        if (stack.length > 1) {
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === OPEN) {
        var c = [p[1],{},[]]
        cur[2].push(c)
        stack.push([c,cur[2].length-1])
      } else if (s === ATTR_KEY || (s === VAR && p[1] === ATTR_KEY)) {
        var key = ''
        var copyKey
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_KEY) {
            key = concat(key, parts[i][1])
          } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
            if (typeof parts[i][2] === 'object' && !key) {
              for (copyKey in parts[i][2]) {
                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
                  cur[1][copyKey] = parts[i][2][copyKey]
                }
              }
            } else {
              key = concat(key, parts[i][2])
            }
          } else break
        }
        if (parts[i][0] === ATTR_EQ) i++
        var j = i
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][1])
            else parts[i][1]==="" || (cur[1][key] = concat(cur[1][key], parts[i][1]));
          } else if (parts[i][0] === VAR
          && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][2])
            else parts[i][2]==="" || (cur[1][key] = concat(cur[1][key], parts[i][2]));
          } else {
            if (key.length && !cur[1][key] && i === j
            && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
              // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
              // empty string is falsy, not well behaved value in browser
              cur[1][key] = key.toLowerCase()
            }
            if (parts[i][0] === CLOSE) {
              i--
            }
            break
          }
        }
      } else if (s === ATTR_KEY) {
        cur[1][p[1]] = true
      } else if (s === VAR && p[1] === ATTR_KEY) {
        cur[1][p[2]] = true
      } else if (s === CLOSE) {
        if (selfClosing(cur[0]) && stack.length) {
          var ix = stack[stack.length-1][1]
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === VAR && p[1] === TEXT) {
        if (p[2] === undefined || p[2] === null) p[2] = ''
        else if (!p[2]) p[2] = concat('', p[2])
        if (Array.isArray(p[2][0])) {
          cur[2].push.apply(cur[2], p[2])
        } else {
          cur[2].push(p[2])
        }
      } else if (s === TEXT) {
        cur[2].push(p[1])
      } else if (s === ATTR_EQ || s === ATTR_BREAK) {
        // no-op
      } else {
        throw new Error('unhandled: ' + s)
      }
    }

    if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
      tree[2].shift()
    }

    if (tree[2].length > 2
    || (tree[2].length === 2 && /\S/.test(tree[2][1]))) {
      if (opts.createFragment) return opts.createFragment(tree[2])
      throw new Error(
        'multiple root elements must be wrapped in an enclosing tag'
      )
    }
    if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string'
    && Array.isArray(tree[2][0][2])) {
      tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2])
    }
    return tree[2][0]

    function parse (str) {
      var res = []
      if (state === ATTR_VALUE_W) state = ATTR
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i)
        if (state === TEXT && c === '<') {
          if (reg.length) res.push([TEXT, reg])
          reg = ''
          state = OPEN
        } else if (c === '>' && !quot(state) && state !== COMMENT) {
          if (state === OPEN && reg.length) {
            res.push([OPEN,reg])
          } else if (state === ATTR_KEY) {
            res.push([ATTR_KEY,reg])
          } else if (state === ATTR_VALUE && reg.length) {
            res.push([ATTR_VALUE,reg])
          }
          res.push([CLOSE])
          reg = ''
          state = TEXT
        } else if (state === COMMENT && /-$/.test(reg) && c === '-') {
          if (opts.comments) {
            res.push([ATTR_VALUE,reg.substr(0, reg.length - 1)])
          }
          reg = ''
          state = TEXT
        } else if (state === OPEN && /^!--$/.test(reg)) {
          if (opts.comments) {
            res.push([OPEN, reg],[ATTR_KEY,'comment'],[ATTR_EQ])
          }
          reg = c
          state = COMMENT
        } else if (state === TEXT || state === COMMENT) {
          reg += c
        } else if (state === OPEN && c === '/' && reg.length) {
          // no-op, self closing tag without a space <br/>
        } else if (state === OPEN && /\s/.test(c)) {
          if (reg.length) {
            res.push([OPEN, reg])
          }
          reg = ''
          state = ATTR
        } else if (state === OPEN) {
          reg += c
        } else if (state === ATTR && /[^\s"'=/]/.test(c)) {
          state = ATTR_KEY
          reg = c
        } else if (state === ATTR && /\s/.test(c)) {
          if (reg.length) res.push([ATTR_KEY,reg])
          res.push([ATTR_BREAK])
        } else if (state === ATTR_KEY && /\s/.test(c)) {
          res.push([ATTR_KEY,reg])
          reg = ''
          state = ATTR_KEY_W
        } else if (state === ATTR_KEY && c === '=') {
          res.push([ATTR_KEY,reg],[ATTR_EQ])
          reg = ''
          state = ATTR_VALUE_W
        } else if (state === ATTR_KEY) {
          reg += c
        } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
          res.push([ATTR_EQ])
          state = ATTR_VALUE_W
        } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
          res.push([ATTR_BREAK])
          if (/[\w-]/.test(c)) {
            reg += c
            state = ATTR_KEY
          } else state = ATTR
        } else if (state === ATTR_VALUE_W && c === '"') {
          state = ATTR_VALUE_DQ
        } else if (state === ATTR_VALUE_W && c === "'") {
          state = ATTR_VALUE_SQ
        } else if (state === ATTR_VALUE_DQ && c === '"') {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_SQ && c === "'") {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
          state = ATTR_VALUE
          i--
        } else if (state === ATTR_VALUE && /\s/.test(c)) {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ
        || state === ATTR_VALUE_DQ) {
          reg += c
        }
      }
      if (state === TEXT && reg.length) {
        res.push([TEXT,reg])
        reg = ''
      } else if (state === ATTR_VALUE && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_DQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_SQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_KEY) {
        res.push([ATTR_KEY,reg])
        reg = ''
      }
      return res
    }
  }

  function strfn (x) {
    if (typeof x === 'function') return x
    else if (typeof x === 'string') return x
    else if (x && typeof x === 'object') return x
    else if (x === null || x === undefined) return x
    else return concat('', x)
  }
}

function quot (state) {
  return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ
}

var closeRE = RegExp('^(' + [
  'area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed',
  'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param',
  'source', 'track', 'wbr', '!--',
  // SVG TAGS
  'animate', 'animateTransform', 'circle', 'cursor', 'desc', 'ellipse',
  'feBlend', 'feColorMatrix', 'feComposite',
  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',
  'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',
  'feGaussianBlur', 'feImage', 'feMergeNode', 'feMorphology',
  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',
  'feTurbulence', 'font-face-format', 'font-face-name', 'font-face-uri',
  'glyph', 'glyphRef', 'hkern', 'image', 'line', 'missing-glyph', 'mpath',
  'path', 'polygon', 'polyline', 'rect', 'set', 'stop', 'tref', 'use', 'view',
  'vkern'
].join('|') + ')(?:[\.#][a-zA-Z0-9\u007F-\uFFFF_:-]+)*$')
function selfClosing (tag) { return closeRE.test(tag) }


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/ky/index.js":
/*!**********************************!*\
  !*** ./node_modules/ky/index.js ***!
  \**********************************/
/*! exports provided: default, HTTPError, TimeoutError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPError", function() { return HTTPError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/*! MIT License © Sindre Sorhus */

const getGlobal = property => {
	/* istanbul ignore next */
	if (typeof self !== 'undefined' && self && property in self) {
		return self[property];
	}

	/* istanbul ignore next */
	if (typeof window !== 'undefined' && window && property in window) {
		return window[property];
	}

	return global[property];
};

const document = getGlobal('document');
const Headers = getGlobal('Headers');
const Response = getGlobal('Response');
const fetch = getGlobal('fetch');

const isObject = value => value !== null && typeof value === 'object';

const deepMerge = (...sources) => {
	let returnValue = {};

	for (const source of sources) {
		if (Array.isArray(source)) {
			if (!(Array.isArray(returnValue))) {
				returnValue = [];
			}

			returnValue = [...returnValue, ...source];
		} else if (isObject(source)) {
			for (let [key, value] of Object.entries(source)) {
				if (isObject(value) && Reflect.has(returnValue, key)) {
					value = deepMerge(returnValue[key], value);
				}

				returnValue = {...returnValue, [key]: value};
			}
		}
	}

	return returnValue;
};

const requestMethods = [
	'get',
	'post',
	'put',
	'patch',
	'head',
	'delete'
];

const responseTypes = [
	'json',
	'text',
	'formData',
	'arrayBuffer',
	'blob'
];

const retryMethods = new Set([
	'get',
	'put',
	'head',
	'delete',
	'options',
	'trace'
]);

const retryStatusCodes = new Set([
	408,
	413,
	429,
	500,
	502,
	503,
	504
]);

const retryAfterStatusCodes = new Set([
	413,
	429,
	503
]);

class HTTPError extends Error {
	constructor(response) {
		super(response.statusText);
		this.name = 'HTTPError';
		this.response = response;
	}
}

class TimeoutError extends Error {
	constructor() {
		super('Request timed out');
		this.name = 'TimeoutError';
	}
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const timeout = (promise, ms) => Promise.race([
	promise,
	(async () => {
		await delay(ms);
		throw new TimeoutError();
	})()
]);

const normalizeRequestMethod = input => requestMethods.includes(input) ? input.toUpperCase() : input;

class Ky {
	constructor(input, {
		timeout = 10000,
		hooks,
		throwHttpErrors = true,
		searchParams,
		json,
		...otherOptions
	}) {
		this._retryCount = 0;

		this._options = {
			method: 'get',
			credentials: 'same-origin', // TODO: This can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
			retry: 2,
			...otherOptions
		};
		this._options.method = normalizeRequestMethod(this._options.method);
		this._options.prefixUrl = String(this._options.prefixUrl || '');
		this._input = String(input || '');

		if (this._options.prefixUrl && this._input.startsWith('/')) {
			throw new Error('`input` must not begin with a slash when using `prefixUrl`');
		}
		if (this._options.prefixUrl && !this._options.prefixUrl.endsWith('/')) {
			this._options.prefixUrl += '/';
		}

		this._input = this._options.prefixUrl + this._input;

		if (searchParams) {
			const url = new URL(this._input, document && document.baseURI);
			if (typeof searchParams === 'string' || (URLSearchParams && searchParams instanceof URLSearchParams)) {
				url.search = searchParams;
			} else if (Object.values(searchParams).every(param => typeof param === 'number' || typeof param === 'string')) {
				url.search = new URLSearchParams(searchParams).toString();
			} else {
				throw new Error('The `searchParams` option must be either a string, `URLSearchParams` instance or an object with string and number values');
			}
			this._input = url.toString();
		}

		this._timeout = timeout;
		this._hooks = deepMerge({
			beforeRequest: [],
			afterResponse: []
		}, hooks);
		this._throwHttpErrors = throwHttpErrors;

		const headers = new Headers(this._options.headers || {});

		if (json) {
			headers.set('content-type', 'application/json');
			this._options.body = JSON.stringify(json);
		}

		this._options.headers = headers;

		this._response = this._fetch();

		for (const type of responseTypes) {
			const isRetriableMethod = retryMethods.has(this._options.method.toLowerCase());
			const fn = async () => {
				if (this._retryCount > 0) {
					this._response = this._fetch();
				}

				let response = await this._response;

				for (const hook of this._hooks.afterResponse) {
					// eslint-disable-next-line no-await-in-loop
					const modifiedResponse = await hook(response.clone());

					if (modifiedResponse instanceof Response) {
						response = modifiedResponse;
					}
				}

				if (!response.ok && (isRetriableMethod || this._throwHttpErrors)) {
					throw new HTTPError(response);
				}

				return response.clone()[type]();
			};

			this._response[type] = isRetriableMethod ? this._retry(fn) : fn;
		}

		return this._response;
	}

	_calculateRetryDelay(error) {
		this._retryCount++;

		if (this._retryCount < this._options.retry && !(error instanceof TimeoutError)) {
			if (error instanceof HTTPError) {
				if (!retryStatusCodes.has(error.response.status)) {
					return 0;
				}

				const retryAfter = error.response.headers.get('Retry-After');
				if (retryAfter && retryAfterStatusCodes.has(error.response.status)) {
					let after = Number(retryAfter);
					if (Number.isNaN(after)) {
						after = Date.parse(retryAfter) - Date.now();
					} else {
						after *= 1000;
					}

					return after;
				}

				if (error.response.status === 413) {
					return 0;
				}
			}

			const BACKOFF_FACTOR = 0.3;
			return BACKOFF_FACTOR * (2 ** (this._retryCount - 1)) * 1000;
		}

		return 0;
	}

	_retry(fn) {
		const retry = async () => {
			try {
				return await fn();
			} catch (error) {
				const ms = this._calculateRetryDelay(error);
				if (ms !== 0) {
					await delay(ms);
					return retry();
				}

				if (this._throwHttpErrors) {
					throw error;
				}
			}
		};

		return retry;
	}

	async _fetch() {
		for (const hook of this._hooks.beforeRequest) {
			// eslint-disable-next-line no-await-in-loop
			await hook(this._options);
		}

		return timeout(fetch(this._input, this._options), this._timeout);
	}
}

const createInstance = (defaults = {}) => {
	if (!isObject(defaults) || Array.isArray(defaults)) {
		throw new TypeError('The `defaultOptions` argument must be an object');
	}

	const ky = (input, options) => new Ky(input, deepMerge({}, defaults, options));

	for (const method of requestMethods) {
		ky[method] = (input, options) => new Ky(input, deepMerge({}, defaults, options, {method}));
	}

	ky.extend = defaults => createInstance(defaults);

	return ky;
};

/* harmony default export */ __webpack_exports__["default"] = (createInstance());



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/nanoassert/index.js":
/*!******************************************!*\
  !*** ./node_modules/nanoassert/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

assert.notEqual = notEqual
assert.notOk = notOk
assert.equal = equal
assert.ok = assert

module.exports = assert

function equal (a, b, m) {
  assert(a == b, m) // eslint-disable-line eqeqeq
}

function notEqual (a, b, m) {
  assert(a != b, m) // eslint-disable-line eqeqeq
}

function notOk (t, m) {
  assert(!t, m)
}

function assert (t, m) {
  if (!t) throw new Error(m || 'AssertionError')
}


/***/ }),

/***/ "./node_modules/nanobus/index.js":
/*!***************************************!*\
  !*** ./node_modules/nanobus/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var splice = __webpack_require__(/*! remove-array-items */ "./node_modules/remove-array-items/index.js")
var nanotiming = __webpack_require__(/*! nanotiming */ "./node_modules/nanotiming/browser.js")
var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")

module.exports = Nanobus

function Nanobus (name) {
  if (!(this instanceof Nanobus)) return new Nanobus(name)

  this._name = name || 'nanobus'
  this._starListeners = []
  this._listeners = {}
}

Nanobus.prototype.emit = function (eventName) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.emit: eventName should be type string or symbol')

  var data = []
  for (var i = 1, len = arguments.length; i < len; i++) {
    data.push(arguments[i])
  }

  var emitTiming = nanotiming(this._name + "('" + eventName.toString() + "')")
  var listeners = this._listeners[eventName]
  if (listeners && listeners.length > 0) {
    this._emit(this._listeners[eventName], data)
  }

  if (this._starListeners.length > 0) {
    this._emit(this._starListeners, eventName, data, emitTiming.uuid)
  }
  emitTiming()

  return this
}

Nanobus.prototype.on = Nanobus.prototype.addListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.on: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.on: listener should be type function')

  if (eventName === '*') {
    this._starListeners.push(listener)
  } else {
    if (!this._listeners[eventName]) this._listeners[eventName] = []
    this._listeners[eventName].push(listener)
  }
  return this
}

Nanobus.prototype.prependListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.prependListener: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.prependListener: listener should be type function')

  if (eventName === '*') {
    this._starListeners.unshift(listener)
  } else {
    if (!this._listeners[eventName]) this._listeners[eventName] = []
    this._listeners[eventName].unshift(listener)
  }
  return this
}

Nanobus.prototype.once = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.once: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.once: listener should be type function')

  var self = this
  this.on(eventName, once)
  function once () {
    listener.apply(self, arguments)
    self.removeListener(eventName, once)
  }
  return this
}

Nanobus.prototype.prependOnceListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.prependOnceListener: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.prependOnceListener: listener should be type function')

  var self = this
  this.prependListener(eventName, once)
  function once () {
    listener.apply(self, arguments)
    self.removeListener(eventName, once)
  }
  return this
}

Nanobus.prototype.removeListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.removeListener: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.removeListener: listener should be type function')

  if (eventName === '*') {
    this._starListeners = this._starListeners.slice()
    return remove(this._starListeners, listener)
  } else {
    if (typeof this._listeners[eventName] !== 'undefined') {
      this._listeners[eventName] = this._listeners[eventName].slice()
    }

    return remove(this._listeners[eventName], listener)
  }

  function remove (arr, listener) {
    if (!arr) return
    var index = arr.indexOf(listener)
    if (index !== -1) {
      splice(arr, index, 1)
      return true
    }
  }
}

Nanobus.prototype.removeAllListeners = function (eventName) {
  if (eventName) {
    if (eventName === '*') {
      this._starListeners = []
    } else {
      this._listeners[eventName] = []
    }
  } else {
    this._starListeners = []
    this._listeners = {}
  }
  return this
}

Nanobus.prototype.listeners = function (eventName) {
  var listeners = eventName !== '*'
    ? this._listeners[eventName]
    : this._starListeners

  var ret = []
  if (listeners) {
    var ilength = listeners.length
    for (var i = 0; i < ilength; i++) ret.push(listeners[i])
  }
  return ret
}

Nanobus.prototype._emit = function (arr, eventName, data, uuid) {
  if (typeof arr === 'undefined') return
  if (arr.length === 0) return
  if (data === undefined) {
    data = eventName
    eventName = null
  }

  if (eventName) {
    if (uuid !== undefined) {
      data = [eventName].concat(data, uuid)
    } else {
      data = [eventName].concat(data)
    }
  }

  var length = arr.length
  for (var i = 0; i < length; i++) {
    var listener = arr[i]
    listener.apply(listener, data)
  }
}


/***/ }),

/***/ "./node_modules/nanocomponent/index.js":
/*!*********************************************!*\
  !*** ./node_modules/nanocomponent/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! global/document */ "./node_modules/global/document.js")
var nanotiming = __webpack_require__(/*! nanotiming */ "./node_modules/nanotiming/browser.js")
var morph = __webpack_require__(/*! nanomorph */ "./node_modules/nanomorph/index.js")
var onload = __webpack_require__(/*! on-load */ "./node_modules/on-load/index.js")
var OL_KEY_ID = onload.KEY_ID
var OL_ATTR_ID = onload.KEY_ATTR
var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")

module.exports = Nanocomponent

function makeID () {
  return 'ncid-' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

function Nanocomponent (name) {
  this._hasWindow = typeof window !== 'undefined'
  this._id = null // represents the id of the root node
  this._ncID = null // internal nanocomponent id
  this._olID = null
  this._proxy = null
  this._loaded = false // Used to debounce on-load when child-reordering
  this._rootNodeName = null
  this._name = name || 'nanocomponent'
  this._rerender = false

  this._handleLoad = this._handleLoad.bind(this)
  this._handleUnload = this._handleUnload.bind(this)

  this._arguments = []

  var self = this

  Object.defineProperty(this, 'element', {
    get: function () {
      var el = document.getElementById(self._id)
      if (el) return el.dataset.nanocomponent === self._ncID ? el : undefined
    }
  })
}

Nanocomponent.prototype.render = function () {
  var renderTiming = nanotiming(this._name + '.render')
  var self = this
  var args = new Array(arguments.length)
  var el
  for (var i = 0; i < arguments.length; i++) args[i] = arguments[i]
  if (!this._hasWindow) {
    var createTiming = nanotiming(this._name + '.create')
    el = this.createElement.apply(this, args)
    createTiming()
    renderTiming()
    return el
  } else if (this.element) {
    el = this.element // retain reference, as the ID might change on render
    var updateTiming = nanotiming(this._name + '.update')
    var shouldUpdate = this._rerender || this.update.apply(this, args)
    updateTiming()
    if (this._rerender) this._rerender = false
    if (shouldUpdate) {
      var desiredHtml = this._handleRender(args)
      var morphTiming = nanotiming(this._name + '.morph')
      morph(el, desiredHtml)
      morphTiming()
      if (this.afterupdate) this.afterupdate(el)
    }
    if (!this._proxy) { this._proxy = this._createProxy() }
    renderTiming()
    return this._proxy
  } else {
    this._reset()
    el = this._handleRender(args)
    if (this.beforerender) this.beforerender(el)
    if (this.load || this.unload || this.afterreorder) {
      onload(el, self._handleLoad, self._handleUnload, self._ncID)
      this._olID = el.dataset[OL_KEY_ID]
    }
    renderTiming()
    return el
  }
}

Nanocomponent.prototype.rerender = function () {
  assert(this.element, 'nanocomponent: cant rerender on an unmounted dom node')
  this._rerender = true
  this.render.apply(this, this._arguments)
}

Nanocomponent.prototype._handleRender = function (args) {
  var createElementTiming = nanotiming(this._name + '.createElement')
  var el = this.createElement.apply(this, args)
  createElementTiming()
  if (!this._rootNodeName) this._rootNodeName = el.nodeName
  assert(el instanceof window.Element, 'nanocomponent: createElement should return a DOM node')
  assert.equal(this._rootNodeName, el.nodeName, 'nanocomponent: root node types cannot differ between re-renders')
  this._arguments = args
  return this._brandNode(this._ensureID(el))
}

Nanocomponent.prototype._createProxy = function () {
  var proxy = document.createElement(this._rootNodeName)
  var self = this
  this._brandNode(proxy)
  proxy.id = this._id
  proxy.setAttribute('data-proxy', '')
  proxy.isSameNode = function (el) {
    return (el && el.dataset.nanocomponent === self._ncID)
  }
  return proxy
}

Nanocomponent.prototype._reset = function () {
  this._ncID = makeID()
  this._olID = null
  this._id = null
  this._proxy = null
  this._rootNodeName = null
}

Nanocomponent.prototype._brandNode = function (node) {
  node.setAttribute('data-nanocomponent', this._ncID)
  if (this._olID) node.setAttribute(OL_ATTR_ID, this._olID)
  return node
}

Nanocomponent.prototype._ensureID = function (node) {
  if (node.id) this._id = node.id
  else node.id = this._id = this._ncID
  // Update proxy node ID if it changed
  if (this._proxy && this._proxy.id !== this._id) this._proxy.id = this._id
  return node
}

Nanocomponent.prototype._handleLoad = function (el) {
  if (this._loaded) {
    if (this.afterreorder) this.afterreorder(el)
    return // Debounce child-reorders
  }
  this._loaded = true
  if (this.load) this.load(el)
}

Nanocomponent.prototype._handleUnload = function (el) {
  if (this.element) return // Debounce child-reorders
  this._loaded = false
  if (this.unload) this.unload(el)
}

Nanocomponent.prototype.createElement = function () {
  throw new Error('nanocomponent: createElement should be implemented!')
}

Nanocomponent.prototype.update = function () {
  throw new Error('nanocomponent: update should be implemented!')
}


/***/ }),

/***/ "./node_modules/nanohref/index.js":
/*!****************************************!*\
  !*** ./node_modules/nanohref/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")

var safeExternalLink = /(noopener|noreferrer) (noopener|noreferrer)/
var protocolLink = /^[\w-_]+:/

module.exports = href

function href (cb, root) {
  assert.notEqual(typeof window, 'undefined', 'nanohref: expected window to exist')

  root = root || window.document

  assert.equal(typeof cb, 'function', 'nanohref: cb should be type function')
  assert.equal(typeof root, 'object', 'nanohref: root should be type object')

  window.addEventListener('click', function (e) {
    if ((e.button && e.button !== 0) ||
      e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ||
      e.defaultPrevented) return

    var anchor = (function traverse (node) {
      if (!node || node === root) return
      if (node.localName !== 'a' || node.href === undefined) {
        return traverse(node.parentNode)
      }
      return node
    })(e.target)

    if (!anchor) return

    if (window.location.protocol !== anchor.protocol ||
        window.location.hostname !== anchor.hostname ||
        window.location.port !== anchor.port ||
      anchor.hasAttribute('data-nanohref-ignore') ||
      anchor.hasAttribute('download') ||
      (anchor.getAttribute('target') === '_blank' &&
        safeExternalLink.test(anchor.getAttribute('rel'))) ||
      protocolLink.test(anchor.getAttribute('href'))) return

    e.preventDefault()
    cb(anchor)
  })
}


/***/ }),

/***/ "./node_modules/nanohtml/lib/append-child.js":
/*!***************************************************!*\
  !*** ./node_modules/nanohtml/lib/append-child.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trailingNewlineRegex = /\n[\s]+$/
var leadingNewlineRegex = /^\n[\s]+/
var trailingSpaceRegex = /[\s]+$/
var leadingSpaceRegex = /^[\s]+/
var multiSpaceRegex = /[\n\s]+/g

var TEXT_TAGS = [
  'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'data', 'dfn', 'em', 'i',
  'kbd', 'mark', 'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'amp', 'small', 'span',
  'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr'
]

var VERBATIM_TAGS = [
  'code', 'pre', 'textarea'
]

module.exports = function appendChild (el, childs) {
  if (!Array.isArray(childs)) return

  var nodeName = el.nodeName.toLowerCase()

  var hadText = false
  var value, leader

  for (var i = 0, len = childs.length; i < len; i++) {
    var node = childs[i]
    if (Array.isArray(node)) {
      appendChild(el, node)
      continue
    }

    if (typeof node === 'number' ||
      typeof node === 'boolean' ||
      typeof node === 'function' ||
      node instanceof Date ||
      node instanceof RegExp) {
      node = node.toString()
    }

    var lastChild = el.childNodes[el.childNodes.length - 1]

    // Iterate over text nodes
    if (typeof node === 'string') {
      hadText = true

      // If we already had text, append to the existing text
      if (lastChild && lastChild.nodeName === '#text') {
        lastChild.nodeValue += node

      // We didn't have a text node yet, create one
      } else {
        node = el.ownerDocument.createTextNode(node)
        el.appendChild(node)
        lastChild = node
      }

      // If this is the last of the child nodes, make sure we close it out
      // right
      if (i === len - 1) {
        hadText = false
        // Trim the child text nodes if the current node isn't a
        // node where whitespace matters.
        if (TEXT_TAGS.indexOf(nodeName) === -1 &&
          VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, '')
            .replace(trailingSpaceRegex, '')
            .replace(trailingNewlineRegex, '')
            .replace(multiSpaceRegex, ' ')
          if (value === '') {
            el.removeChild(lastChild)
          } else {
            lastChild.nodeValue = value
          }
        } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
          // The very first node in the list should not have leading
          // whitespace. Sibling text nodes should have whitespace if there
          // was any.
          leader = i === 0 ? '' : ' '
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, leader)
            .replace(leadingSpaceRegex, ' ')
            .replace(trailingSpaceRegex, '')
            .replace(trailingNewlineRegex, '')
            .replace(multiSpaceRegex, ' ')
          lastChild.nodeValue = value
        }
      }

    // Iterate over DOM nodes
    } else if (node && node.nodeType) {
      // If the last node was a text node, make sure it is properly closed out
      if (hadText) {
        hadText = false

        // Trim the child text nodes if the current node isn't a
        // text node or a code node
        if (TEXT_TAGS.indexOf(nodeName) === -1 &&
          VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, '')
            .replace(trailingNewlineRegex, ' ')
            .replace(multiSpaceRegex, ' ')

          // Remove empty text nodes, append otherwise
          if (value === '') {
            el.removeChild(lastChild)
          } else {
            lastChild.nodeValue = value
          }
        // Trim the child nodes but preserve the appropriate whitespace
        } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingSpaceRegex, ' ')
            .replace(leadingNewlineRegex, '')
            .replace(trailingNewlineRegex, ' ')
            .replace(multiSpaceRegex, ' ')
          lastChild.nodeValue = value
        }
      }

      // Store the last nodename
      var _nodeName = node.nodeName
      if (_nodeName) nodeName = _nodeName.toLowerCase()

      // Append the node to the DOM
      el.appendChild(node)
    }
  }
}


/***/ }),

/***/ "./node_modules/nanohtml/lib/bool-props.js":
/*!*************************************************!*\
  !*** ./node_modules/nanohtml/lib/bool-props.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
  'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default',
  'defaultchecked', 'defer', 'disabled', 'formnovalidate', 'hidden',
  'ismap', 'loop', 'multiple', 'muted', 'novalidate', 'open', 'playsinline',
  'readonly', 'required', 'reversed', 'selected'
]


/***/ }),

/***/ "./node_modules/nanohtml/lib/browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanohtml/lib/browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dom */ "./node_modules/nanohtml/lib/dom.js")(document)


/***/ }),

/***/ "./node_modules/nanohtml/lib/direct-props.js":
/*!***************************************************!*\
  !*** ./node_modules/nanohtml/lib/direct-props.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
  'indeterminate'
]


/***/ }),

/***/ "./node_modules/nanohtml/lib/dom.js":
/*!******************************************!*\
  !*** ./node_modules/nanohtml/lib/dom.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hyperx = __webpack_require__(/*! hyperx */ "./node_modules/hyperx/index.js")
var appendChild = __webpack_require__(/*! ./append-child */ "./node_modules/nanohtml/lib/append-child.js")
var SVG_TAGS = __webpack_require__(/*! ./svg-tags */ "./node_modules/nanohtml/lib/svg-tags.js")
var BOOL_PROPS = __webpack_require__(/*! ./bool-props */ "./node_modules/nanohtml/lib/bool-props.js")
// Props that need to be set directly rather than with el.setAttribute()
var DIRECT_PROPS = __webpack_require__(/*! ./direct-props */ "./node_modules/nanohtml/lib/direct-props.js")

var SVGNS = 'http://www.w3.org/2000/svg'
var XLINKNS = 'http://www.w3.org/1999/xlink'

var COMMENT_TAG = '!--'

module.exports = function (document) {
  function nanoHtmlCreateElement (tag, props, children) {
    var el

    // If an svg tag, it needs a namespace
    if (SVG_TAGS.indexOf(tag) !== -1) {
      props.namespace = SVGNS
    }

    // If we are using a namespace
    var ns = false
    if (props.namespace) {
      ns = props.namespace
      delete props.namespace
    }

    // If we are extending a builtin element
    var isCustomElement = false
    if (props.is) {
      isCustomElement = props.is
      delete props.is
    }

    // Create the element
    if (ns) {
      if (isCustomElement) {
        el = document.createElementNS(ns, tag, { is: isCustomElement })
      } else {
        el = document.createElementNS(ns, tag)
      }
    } else if (tag === COMMENT_TAG) {
      return document.createComment(props.comment)
    } else if (isCustomElement) {
      el = document.createElement(tag, { is: isCustomElement })
    } else {
      el = document.createElement(tag)
    }

    // Create the properties
    for (var p in props) {
      if (props.hasOwnProperty(p)) {
        var key = p.toLowerCase()
        var val = props[p]
        // Normalize className
        if (key === 'classname') {
          key = 'class'
          p = 'class'
        }
        // The for attribute gets transformed to htmlFor, but we just set as for
        if (p === 'htmlFor') {
          p = 'for'
        }
        // If a property is boolean, set itself to the key
        if (BOOL_PROPS.indexOf(key) !== -1) {
          if (String(val) === 'true') val = key
          else if (String(val) === 'false') continue
        }
        // If a property prefers being set directly vs setAttribute
        if (key.slice(0, 2) === 'on' || DIRECT_PROPS.indexOf(key) !== -1) {
          el[p] = val
        } else {
          if (ns) {
            if (p === 'xlink:href') {
              el.setAttributeNS(XLINKNS, p, val)
            } else if (/^xmlns($|:)/i.test(p)) {
              // skip xmlns definitions
            } else {
              el.setAttributeNS(null, p, val)
            }
          } else {
            el.setAttribute(p, val)
          }
        }
      }
    }

    appendChild(el, children)
    return el
  }

  function createFragment (nodes) {
    var fragment = document.createDocumentFragment()
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i] == null) continue
      if (Array.isArray(nodes[i])) {
        fragment.appendChild(createFragment(nodes[i]))
      } else {
        if (typeof nodes[i] === 'string') nodes[i] = document.createTextNode(nodes[i])
        fragment.appendChild(nodes[i])
      }
    }
    return fragment
  }

  var exports = hyperx(nanoHtmlCreateElement, {
    comments: true,
    createFragment: createFragment
  })
  exports.default = exports
  exports.createComment = nanoHtmlCreateElement
  return exports
}


/***/ }),

/***/ "./node_modules/nanohtml/lib/raw-browser.js":
/*!**************************************************!*\
  !*** ./node_modules/nanohtml/lib/raw-browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function nanohtmlRawBrowser (tag) {
  var el = document.createElement('div')
  el.innerHTML = tag
  return toArray(el.childNodes)
}

function toArray (arr) {
  return Array.isArray(arr) ? arr : [].slice.call(arr)
}

module.exports = nanohtmlRawBrowser


/***/ }),

/***/ "./node_modules/nanohtml/lib/svg-tags.js":
/*!***********************************************!*\
  !*** ./node_modules/nanohtml/lib/svg-tags.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
  'svg', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
  'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile',
  'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',
  'feComponentTransfer', 'feComposite', 'feConvolveMatrix',
  'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood',
  'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage',
  'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight',
  'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter',
  'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src',
  'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image',
  'line', 'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph',
  'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',
  'set', 'stop', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref',
  'tspan', 'use', 'view', 'vkern'
]


/***/ }),

/***/ "./node_modules/nanologger/index.js":
/*!******************************************!*\
  !*** ./node_modules/nanologger/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js")
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")

var emojis = {
  trace: '🔍',
  debug: '🐛',
  info: '✨',
  warn: '⚠️',
  error: '🚨',
  fatal: '💀'
}

var levels = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
}

var defaultColors = {
  foreground: '#d3c0c8',
  background: '#2d2d2d',
  black: '#2d2d2d',
  red: '#f2777a',
  green: '#99cc99',
  yellow: '#ffcc66',
  blue: '#6699cc',
  magenta: '#cc99cc',
  cyan: '#66cccc',
  white: '#d3d0c8',
  brightBlack: '#747369'
}

module.exports = Nanologger

function Nanologger (name, opts) {
  opts = opts || {}
  if (!(this instanceof Nanologger)) return new Nanologger(name, opts)

  assert.equal(typeof opts, 'object', 'nanologger: opts should be type object')

  this._name = name || ''
  this._colors = xtend(defaultColors, opts.colors || {})

  try {
    this.logLevel = window.localStorage.getItem('logLevel') || 'info'
  } catch (e) {
    this.logLevel = 'info'
  }

  this._logLevel = levels[this.logLevel]
}

Nanologger.prototype.trace = function () {
  var args = [ 'trace' ]
  for (var i = 0, len = arguments.length; i < len; i++) args.push(arguments[i])
  this._print.apply(this, args)
}

Nanologger.prototype.debug = function () {
  var args = [ 'debug' ]
  for (var i = 0, len = arguments.length; i < len; i++) args.push(arguments[i])
  this._print.apply(this, args)
}

Nanologger.prototype.info = function () {
  var args = [ 'info' ]
  for (var i = 0, len = arguments.length; i < len; i++) args.push(arguments[i])
  this._print.apply(this, args)
}

Nanologger.prototype.warn = function () {
  var args = [ 'warn' ]
  for (var i = 0, len = arguments.length; i < len; i++) args.push(arguments[i])
  this._print.apply(this, args)
}

Nanologger.prototype.error = function () {
  var args = [ 'error' ]
  for (var i = 0, len = arguments.length; i < len; i++) args.push(arguments[i])
  this._print.apply(this, args)
}

Nanologger.prototype.fatal = function () {
  var args = [ 'fatal' ]
  for (var i = 0, len = arguments.length; i < len; i++) args.push(arguments[i])
  this._print.apply(this, args)
}

Nanologger.prototype._print = function (level) {
  if (levels[level] < this._logLevel) return

  var time = getTimeStamp()
  var emoji = emojis[level]
  var name = this._name || 'unknown'

  var msgColor = (level === 'error' || level.fatal)
    ? this._colors.red
    : level === 'warn'
      ? this._colors.yellow
      : this._colors.green

  var objs = []
  var args = [ null ]
  var msg = '%c%s ' + emoji + ' %c%s'

  args.push(color(this._colors.brightBlack), time)
  args.push(color(this._colors.magenta), name)

  for (var i = 1, len = arguments.length; i < len; i++) {
    var arg = arguments[i]
    if (typeof arg === 'string') {
      if (i === 1) {
        // first string argument is in color
        msg += ' %c%s'
        args.push(color(msgColor))
        args.push(arg)
      } else if (/ms$/.test(arg)) {
        // arguments finishing with 'ms', grey out
        msg += ' %c%s'
        args.push(color(this._colors.brightBlack))
        args.push(arg)
      } else {
        // normal colors
        msg += ' %c%s'
        args.push(color(this._colors.white))
        args.push(arg)
      }
    } else if (typeof arg === 'number') {
      msg += ' %c%d'
      args.push(color(this._colors.magenta))
      args.push(arg)
    } else {
      objs.push(arg)
    }
  }

  args[0] = msg
  objs.forEach(function (obj) {
    args.push(obj)
  })

  // In IE/Edge console functions don't inherit from Function.prototype
  // so this is necessary to get all the args applied.
  Function.prototype.apply.apply(console.log, [console, args])
}

function color (color) {
  return 'color: ' + color + ';'
}

function getTimeStamp () {
  var date = new Date()
  var hours = pad(date.getHours().toString())
  var minutes = pad(date.getMinutes().toString())
  var seconds = pad(date.getSeconds().toString())
  return hours + ':' + minutes + ':' + seconds
}

function pad (str) {
  return str.length !== 2 ? 0 + str : str
}


/***/ }),

/***/ "./node_modules/nanolru/index.js":
/*!***************************************!*\
  !*** ./node_modules/nanolru/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = LRU

function LRU (opts) {
  if (!(this instanceof LRU)) return new LRU(opts)
  if (typeof opts === 'number') opts = {max: opts}
  if (!opts) opts = {}
  this.cache = {}
  this.head = this.tail = null
  this.length = 0
  this.max = opts.max || 1000
  this.maxAge = opts.maxAge || 0
}

Object.defineProperty(LRU.prototype, 'keys', {
  get: function () { return Object.keys(this.cache) }
})

LRU.prototype.clear = function () {
  this.cache = {}
  this.head = this.tail = null
  this.length = 0
}

LRU.prototype.remove = function (key) {
  if (typeof key !== 'string') key = '' + key
  if (!this.cache.hasOwnProperty(key)) return

  var element = this.cache[key]
  delete this.cache[key]
  this._unlink(key, element.prev, element.next)
  return element.value
}

LRU.prototype._unlink = function (key, prev, next) {
  this.length--

  if (this.length === 0) {
    this.head = this.tail = null
  } else {
    if (this.head === key) {
      this.head = prev
      this.cache[this.head].next = null
    } else if (this.tail === key) {
      this.tail = next
      this.cache[this.tail].prev = null
    } else {
      this.cache[prev].next = next
      this.cache[next].prev = prev
    }
  }
}

LRU.prototype.peek = function (key) {
  if (!this.cache.hasOwnProperty(key)) return

  var element = this.cache[key]

  if (!this._checkAge(key, element)) return
  return element.value
}

LRU.prototype.set = function (key, value) {
  if (typeof key !== 'string') key = '' + key

  var element

  if (this.cache.hasOwnProperty(key)) {
    element = this.cache[key]
    element.value = value
    if (this.maxAge) element.modified = Date.now()

    // If it's already the head, there's nothing more to do:
    if (key === this.head) return value
    this._unlink(key, element.prev, element.next)
  } else {
    element = {value: value, modified: 0, next: null, prev: null}
    if (this.maxAge) element.modified = Date.now()
    this.cache[key] = element

    // Eviction is only possible if the key didn't already exist:
    if (this.length === this.max) this.evict()
  }

  this.length++
  element.next = null
  element.prev = this.head

  if (this.head) this.cache[this.head].next = key
  this.head = key

  if (!this.tail) this.tail = key
  return value
}

LRU.prototype._checkAge = function (key, element) {
  if (this.maxAge && (Date.now() - element.modified) > this.maxAge) {
    this.remove(key)
    return false
  }
  return true
}

LRU.prototype.get = function (key) {
  if (typeof key !== 'string') key = '' + key
  if (!this.cache.hasOwnProperty(key)) return

  var element = this.cache[key]

  if (!this._checkAge(key, element)) return

  if (this.head !== key) {
    if (key === this.tail) {
      this.tail = element.next
      this.cache[this.tail].prev = null
    } else {
      // Set prev.next -> element.next:
      this.cache[element.prev].next = element.next
    }

    // Set element.next.prev -> element.prev:
    this.cache[element.next].prev = element.prev

    // Element is the new head
    this.cache[this.head].next = key
    element.prev = this.head
    element.next = null
    this.head = key
  }

  return element.value
}

LRU.prototype.evict = function () {
  if (!this.tail) return
  this.remove(this.tail)
}


/***/ }),

/***/ "./node_modules/nanomorph/index.js":
/*!*****************************************!*\
  !*** ./node_modules/nanomorph/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(/*! nanoassert */ "./node_modules/nanoassert/index.js")
var morph = __webpack_require__(/*! ./lib/morph */ "./node_modules/nanomorph/lib/morph.js")

var TEXT_NODE = 3
// var DEBUG = false

module.exports = nanomorph

// Morph one tree into another tree
//
// no parent
//   -> same: diff and walk children
//   -> not same: replace and return
// old node doesn't exist
//   -> insert new node
// new node doesn't exist
//   -> delete old node
// nodes are not the same
//   -> diff nodes and apply patch to old node
// nodes are the same
//   -> walk all child nodes and append to old node
function nanomorph (oldTree, newTree, options) {
  // if (DEBUG) {
  //   console.log(
  //   'nanomorph\nold\n  %s\nnew\n  %s',
  //   oldTree && oldTree.outerHTML,
  //   newTree && newTree.outerHTML
  // )
  // }
  assert.equal(typeof oldTree, 'object', 'nanomorph: oldTree should be an object')
  assert.equal(typeof newTree, 'object', 'nanomorph: newTree should be an object')

  if (options && options.childrenOnly) {
    updateChildren(newTree, oldTree)
    return oldTree
  }

  assert.notEqual(
    newTree.nodeType,
    11,
    'nanomorph: newTree should have one root node (which is not a DocumentFragment)'
  )

  return walk(newTree, oldTree)
}

// Walk and morph a dom tree
function walk (newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'walk\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  if (!oldNode) {
    return newNode
  } else if (!newNode) {
    return null
  } else if (newNode.isSameNode && newNode.isSameNode(oldNode)) {
    return oldNode
  } else if (newNode.tagName !== oldNode.tagName || getComponentId(newNode) !== getComponentId(oldNode)) {
    return newNode
  } else {
    morph(newNode, oldNode)
    updateChildren(newNode, oldNode)
    return oldNode
  }
}

function getComponentId (node) {
  return node.dataset ? node.dataset.nanomorphComponentId : undefined
}

// Update the children of elements
// (obj, obj) -> null
function updateChildren (newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'updateChildren\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  var oldChild, newChild, morphed, oldMatch

  // The offset is only ever increased, and used for [i - offset] in the loop
  var offset = 0

  for (var i = 0; ; i++) {
    oldChild = oldNode.childNodes[i]
    newChild = newNode.childNodes[i - offset]
    // if (DEBUG) {
    //   console.log(
    //   '===\n- old\n  %s\n- new\n  %s',
    //   oldChild && oldChild.outerHTML,
    //   newChild && newChild.outerHTML
    // )
    // }
    // Both nodes are empty, do nothing
    if (!oldChild && !newChild) {
      break

    // There is no new child, remove old
    } else if (!newChild) {
      oldNode.removeChild(oldChild)
      i--

    // There is no old child, add new
    } else if (!oldChild) {
      oldNode.appendChild(newChild)
      offset++

    // Both nodes are the same, morph
    } else if (same(newChild, oldChild)) {
      morphed = walk(newChild, oldChild)
      if (morphed !== oldChild) {
        oldNode.replaceChild(morphed, oldChild)
        offset++
      }

    // Both nodes do not share an ID or a placeholder, try reorder
    } else {
      oldMatch = null

      // Try and find a similar node somewhere in the tree
      for (var j = i; j < oldNode.childNodes.length; j++) {
        if (same(oldNode.childNodes[j], newChild)) {
          oldMatch = oldNode.childNodes[j]
          break
        }
      }

      // If there was a node with the same ID or placeholder in the old list
      if (oldMatch) {
        morphed = walk(newChild, oldMatch)
        if (morphed !== oldMatch) offset++
        oldNode.insertBefore(morphed, oldChild)

      // It's safe to morph two nodes in-place if neither has an ID
      } else if (!newChild.id && !oldChild.id) {
        morphed = walk(newChild, oldChild)
        if (morphed !== oldChild) {
          oldNode.replaceChild(morphed, oldChild)
          offset++
        }

      // Insert the node at the index if we couldn't morph or find a matching node
      } else {
        oldNode.insertBefore(newChild, oldChild)
        offset++
      }
    }
  }
}

function same (a, b) {
  if (a.id) return a.id === b.id
  if (a.isSameNode) return a.isSameNode(b)
  if (a.tagName !== b.tagName) return false
  if (a.type === TEXT_NODE) return a.nodeValue === b.nodeValue
  return false
}


/***/ }),

/***/ "./node_modules/nanomorph/lib/events.js":
/*!**********************************************!*\
  !*** ./node_modules/nanomorph/lib/events.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  // attribute events (can be set with attributes)
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseup',
  'onmouseover',
  'onmousemove',
  'onmouseout',
  'onmouseenter',
  'onmouseleave',
  'ontouchcancel',
  'ontouchend',
  'ontouchmove',
  'ontouchstart',
  'ondragstart',
  'ondrag',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondrop',
  'ondragend',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onunload',
  'onabort',
  'onerror',
  'onresize',
  'onscroll',
  'onselect',
  'onchange',
  'onsubmit',
  'onreset',
  'onfocus',
  'onblur',
  'oninput',
  // other common events
  'oncontextmenu',
  'onfocusin',
  'onfocusout'
]


/***/ }),

/***/ "./node_modules/nanomorph/lib/morph.js":
/*!*********************************************!*\
  !*** ./node_modules/nanomorph/lib/morph.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var events = __webpack_require__(/*! ./events */ "./node_modules/nanomorph/lib/events.js")
var eventsLength = events.length

var ELEMENT_NODE = 1
var TEXT_NODE = 3
var COMMENT_NODE = 8

module.exports = morph

// diff elements and apply the resulting patch to the old node
// (obj, obj) -> null
function morph (newNode, oldNode) {
  var nodeType = newNode.nodeType
  var nodeName = newNode.nodeName

  if (nodeType === ELEMENT_NODE) {
    copyAttrs(newNode, oldNode)
  }

  if (nodeType === TEXT_NODE || nodeType === COMMENT_NODE) {
    if (oldNode.nodeValue !== newNode.nodeValue) {
      oldNode.nodeValue = newNode.nodeValue
    }
  }

  // Some DOM nodes are weird
  // https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
  if (nodeName === 'INPUT') updateInput(newNode, oldNode)
  else if (nodeName === 'OPTION') updateOption(newNode, oldNode)
  else if (nodeName === 'TEXTAREA') updateTextarea(newNode, oldNode)

  copyEvents(newNode, oldNode)
}

function copyAttrs (newNode, oldNode) {
  var oldAttrs = oldNode.attributes
  var newAttrs = newNode.attributes
  var attrNamespaceURI = null
  var attrValue = null
  var fromValue = null
  var attrName = null
  var attr = null

  for (var i = newAttrs.length - 1; i >= 0; --i) {
    attr = newAttrs[i]
    attrName = attr.name
    attrNamespaceURI = attr.namespaceURI
    attrValue = attr.value
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName
      fromValue = oldNode.getAttributeNS(attrNamespaceURI, attrName)
      if (fromValue !== attrValue) {
        oldNode.setAttributeNS(attrNamespaceURI, attrName, attrValue)
      }
    } else {
      if (!oldNode.hasAttribute(attrName)) {
        oldNode.setAttribute(attrName, attrValue)
      } else {
        fromValue = oldNode.getAttribute(attrName)
        if (fromValue !== attrValue) {
          // apparently values are always cast to strings, ah well
          if (attrValue === 'null' || attrValue === 'undefined') {
            oldNode.removeAttribute(attrName)
          } else {
            oldNode.setAttribute(attrName, attrValue)
          }
        }
      }
    }
  }

  // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.
  for (var j = oldAttrs.length - 1; j >= 0; --j) {
    attr = oldAttrs[j]
    if (attr.specified !== false) {
      attrName = attr.name
      attrNamespaceURI = attr.namespaceURI

      if (attrNamespaceURI) {
        attrName = attr.localName || attrName
        if (!newNode.hasAttributeNS(attrNamespaceURI, attrName)) {
          oldNode.removeAttributeNS(attrNamespaceURI, attrName)
        }
      } else {
        if (!newNode.hasAttributeNS(null, attrName)) {
          oldNode.removeAttribute(attrName)
        }
      }
    }
  }
}

function copyEvents (newNode, oldNode) {
  for (var i = 0; i < eventsLength; i++) {
    var ev = events[i]
    if (newNode[ev]) {           // if new element has a whitelisted attribute
      oldNode[ev] = newNode[ev]  // update existing element
    } else if (oldNode[ev]) {    // if existing element has it and new one doesnt
      oldNode[ev] = undefined    // remove it from existing element
    }
  }
}

function updateOption (newNode, oldNode) {
  updateAttribute(newNode, oldNode, 'selected')
}

// The "value" attribute is special for the <input> element since it sets the
// initial value. Changing the "value" attribute without changing the "value"
// property will have no effect since it is only used to the set the initial
// value. Similar for the "checked" attribute, and "disabled".
function updateInput (newNode, oldNode) {
  var newValue = newNode.value
  var oldValue = oldNode.value

  updateAttribute(newNode, oldNode, 'checked')
  updateAttribute(newNode, oldNode, 'disabled')

  if (newValue !== oldValue) {
    oldNode.setAttribute('value', newValue)
    oldNode.value = newValue
  }

  if (newValue === 'null') {
    oldNode.value = ''
    oldNode.removeAttribute('value')
  }

  if (!newNode.hasAttributeNS(null, 'value')) {
    oldNode.removeAttribute('value')
  } else if (oldNode.type === 'range') {
    // this is so elements like slider move their UI thingy
    oldNode.value = newValue
  }
}

function updateTextarea (newNode, oldNode) {
  var newValue = newNode.value
  if (newValue !== oldNode.value) {
    oldNode.value = newValue
  }

  if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
    // Needed for IE. Apparently IE sets the placeholder as the
    // node value and vise versa. This ignores an empty update.
    if (newValue === '' && oldNode.firstChild.nodeValue === oldNode.placeholder) {
      return
    }

    oldNode.firstChild.nodeValue = newValue
  }
}

function updateAttribute (newNode, oldNode, name) {
  if (newNode[name] !== oldNode[name]) {
    oldNode[name] = newNode[name]
    if (newNode[name]) {
      oldNode.setAttribute(name, '')
    } else {
      oldNode.removeAttribute(name)
    }
  }
}


/***/ }),

/***/ "./node_modules/nanoquery/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/nanoquery/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var reg = /([^?=&]+)(=([^&]*))?/g
var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")

module.exports = qs

function qs (url) {
  assert.equal(typeof url, 'string', 'nanoquery: url should be type string')

  var obj = {}
  url.replace(/^.*\?/, '').replace(reg, function (a0, a1, a2, a3) {
    var value = decodeURIComponent(a3)
    var key = decodeURIComponent(a1)
    if (obj.hasOwnProperty(key)) {
      if (Array.isArray(obj[key])) obj[key].push(value)
      else obj[key] = [obj[key], value]
    } else {
      obj[key] = value
    }
  })

  return obj
}


/***/ }),

/***/ "./node_modules/nanoraf/index.js":
/*!***************************************!*\
  !*** ./node_modules/nanoraf/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")

module.exports = nanoraf

// Only call RAF when needed
// (fn, fn?) -> fn
function nanoraf (render, raf) {
  assert.equal(typeof render, 'function', 'nanoraf: render should be a function')
  assert.ok(typeof raf === 'function' || typeof raf === 'undefined', 'nanoraf: raf should be a function or undefined')

  if (!raf) raf = window.requestAnimationFrame
  var redrawScheduled = false
  var args = null

  return function frame () {
    if (args === null && !redrawScheduled) {
      redrawScheduled = true

      raf(function redraw () {
        redrawScheduled = false

        var length = args.length
        var _args = new Array(length)
        for (var i = 0; i < length; i++) _args[i] = args[i]

        render.apply(render, _args)
        args = null
      })
    }

    args = arguments
  }
}


/***/ }),

/***/ "./node_modules/nanorouter/index.js":
/*!******************************************!*\
  !*** ./node_modules/nanorouter/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")
var wayfarer = __webpack_require__(/*! wayfarer */ "./node_modules/wayfarer/index.js")

// electron support
var isLocalFile = (/file:\/\//.test(
  typeof window === 'object' &&
  window.location &&
  window.location.origin
))

/* eslint-disable no-useless-escape */
var electron = '^(file:\/\/|\/)(.*\.html?\/?)?'
var protocol = '^(http(s)?(:\/\/))?(www\.)?'
var domain = '[a-zA-Z0-9-_\.]+(:[0-9]{1,5})?(\/{1})?'
var qs = '[\?].*$'
/* eslint-enable no-useless-escape */

var stripElectron = new RegExp(electron)
var prefix = new RegExp(protocol + domain)
var normalize = new RegExp('#')
var suffix = new RegExp(qs)

module.exports = Nanorouter

function Nanorouter (opts) {
  if (!(this instanceof Nanorouter)) return new Nanorouter(opts)
  opts = opts || {}
  this.router = wayfarer(opts.default || '/404')
}

Nanorouter.prototype.on = function (routename, listener) {
  assert.equal(typeof routename, 'string')
  routename = routename.replace(/^[#/]/, '')
  this.router.on(routename, listener)
}

Nanorouter.prototype.emit = function (routename) {
  assert.equal(typeof routename, 'string')
  routename = pathname(routename, isLocalFile)
  return this.router.emit(routename)
}

Nanorouter.prototype.match = function (routename) {
  assert.equal(typeof routename, 'string')
  routename = pathname(routename, isLocalFile)
  return this.router.match(routename)
}

// replace everything in a route but the pathname and hash
function pathname (routename, isElectron) {
  if (isElectron) routename = routename.replace(stripElectron, '')
  else routename = routename.replace(prefix, '')
  return decodeURI(routename.replace(suffix, '').replace(normalize, '/'))
}


/***/ }),

/***/ "./node_modules/nanoscheduler/index.js":
/*!*********************************************!*\
  !*** ./node_modules/nanoscheduler/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")

var hasWindow = typeof window !== 'undefined'

function createScheduler () {
  var scheduler
  if (hasWindow) {
    if (!window._nanoScheduler) window._nanoScheduler = new NanoScheduler(true)
    scheduler = window._nanoScheduler
  } else {
    scheduler = new NanoScheduler()
  }
  return scheduler
}

function NanoScheduler (hasWindow) {
  this.hasWindow = hasWindow
  this.hasIdle = this.hasWindow && window.requestIdleCallback
  this.method = this.hasIdle ? window.requestIdleCallback.bind(window) : this.setTimeout
  this.scheduled = false
  this.queue = []
}

NanoScheduler.prototype.push = function (cb) {
  assert.equal(typeof cb, 'function', 'nanoscheduler.push: cb should be type function')

  this.queue.push(cb)
  this.schedule()
}

NanoScheduler.prototype.schedule = function () {
  if (this.scheduled) return

  this.scheduled = true
  var self = this
  this.method(function (idleDeadline) {
    var cb
    while (self.queue.length && idleDeadline.timeRemaining() > 0) {
      cb = self.queue.shift()
      cb(idleDeadline)
    }
    self.scheduled = false
    if (self.queue.length) self.schedule()
  })
}

NanoScheduler.prototype.setTimeout = function (cb) {
  setTimeout(cb, 0, {
    timeRemaining: function () {
      return 1
    }
  })
}

module.exports = createScheduler


/***/ }),

/***/ "./node_modules/nanostate/index.js":
/*!*****************************************!*\
  !*** ./node_modules/nanostate/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Nanobus = __webpack_require__(/*! nanobus */ "./node_modules/nanobus/index.js")
var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")
var Parallelstate = __webpack_require__(/*! ./parallel-state */ "./node_modules/nanostate/parallel-state.js")

module.exports = Nanostate

function Nanostate (initialState, transitions) {
  if (!(this instanceof Nanostate)) return new Nanostate(initialState, transitions)
  assert.equal(typeof initialState, 'string', 'nanostate: initialState should be type string')
  assert.equal(typeof transitions, 'object', 'nanostate: transitions should be type object')

  this.transitions = transitions
  this.state = initialState
  this.submachines = {}
  this._submachine = null

  Nanobus.call(this)
}

Nanostate.prototype = Object.create(Nanobus.prototype)

Nanostate.prototype.constructor = Nanostate

Nanostate.prototype.emit = function (eventName) {
  var nextState = this._next(eventName)
  assert.ok(nextState, `nanostate.emit: invalid transition ${this.state} -> ${eventName}`)

  if (this._submachine && Object.keys(this.transitions).indexOf(nextState) !== -1) {
    this._unregister()
  }

  this.state = nextState
  Nanobus.prototype.emit.call(this, nextState)
}

Nanostate.prototype.event = function (eventName, machine) {
  this.submachines[eventName] = machine
}

Nanostate.parallel = function (transitions) {
  return new Parallelstate(transitions)
}

Nanostate.prototype._unregister = function () {
  if (this._submachine) {
    this._submachine._unregister()
    this._submachine = null
  }
}

Nanostate.prototype._next = function (eventName) {
  if (this._submachine) {
    var nextState = this._submachine._next(eventName)
    if (nextState) {
      return nextState
    }
  }

  var submachine = this.submachines[eventName]
  if (submachine) {
    this._submachine = submachine
    return submachine.state
  }

  return this.transitions[this.state][eventName]
}


/***/ }),

/***/ "./node_modules/nanostate/parallel-state.js":
/*!**************************************************!*\
  !*** ./node_modules/nanostate/parallel-state.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Nanobus = __webpack_require__(/*! nanobus */ "./node_modules/nanobus/index.js")
var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")

module.exports = Parallelstate

function Parallelstate (transitions) {
  assert.equal(typeof transitions, 'object', 'nanostate: transitions should be type object')

  this.scopes = Object.keys(transitions)
  this.transitions = transitions

  Object.defineProperty(this, 'state', {
    get: function () {
      return this.scopes.reduce(function (state, scope) {
        state[scope] = transitions[scope].state
        return state
      }, {})
    }
  })

  Nanobus.call(this)
}

Parallelstate.prototype = Object.create(Nanobus.prototype)

Parallelstate.prototype.emit = function (eventName) {
  var hasColon = eventName.indexOf(':') >= 0
  assert.ok(hasColon, `nanostate.emit: invalid transition ${this.state} -> ${eventName}. For parallel nanostate eventName must have a colon ":"`)

  var eventNameSplitted = eventName.split(':')
  var scope = eventNameSplitted[0]
  var event = eventNameSplitted[1]
  assert.ok(scope, `nanostate.emit: invalid scope ${scope} for parallel emitting`)

  this.transitions[scope].emit(event)

  Nanobus.prototype.emit.call(this, eventName)
}


/***/ }),

/***/ "./node_modules/nanotiming/browser.js":
/*!********************************************!*\
  !*** ./node_modules/nanotiming/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var scheduler = __webpack_require__(/*! nanoscheduler */ "./node_modules/nanoscheduler/index.js")()
var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")

var perf
nanotiming.disabled = true
try {
  perf = window.performance
  nanotiming.disabled = window.localStorage.DISABLE_NANOTIMING === 'true' || !perf.mark
} catch (e) { }

module.exports = nanotiming

function nanotiming (name) {
  assert.equal(typeof name, 'string', 'nanotiming: name should be type string')

  if (nanotiming.disabled) return noop

  var uuid = (perf.now() * 10000).toFixed() % Number.MAX_SAFE_INTEGER
  var startName = 'start-' + uuid + '-' + name
  perf.mark(startName)

  function end (cb) {
    var endName = 'end-' + uuid + '-' + name
    perf.mark(endName)

    scheduler.push(function () {
      var err = null
      try {
        var measureName = name + ' [' + uuid + ']'
        perf.measure(measureName, startName, endName)
        perf.clearMarks(startName)
        perf.clearMarks(endName)
      } catch (e) { err = e }
      if (cb) cb(err, name)
    })
  }

  end.uuid = uuid
  return end
}

function noop (cb) {
  if (cb) {
    scheduler.push(function () {
      cb(new Error('nanotiming: performance API unavailable'))
    })
  }
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/object-change-callsite/index.js":
/*!******************************************************!*\
  !*** ./node_modules/object-change-callsite/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js")

module.exports = objectChangeCallsite

function objectChangeCallsite (target, callback) {
  assert.equal(typeof target, 'object', 'object-change-callsite: target should be type object')
  assert.equal(typeof callback, 'function', 'object-change-callsite: callback should be type function')

  return new Proxy(target, {
    set: function (obj, prop, value) {
      var err = new Error()
      var trace = strip(err.stack)
      callback(prop, value, trace)
      obj[prop] = value
      return true
    },
    deleteProperty: function (target, prop) {
      var err = new Error()
      var trace = strip(err.stack)
      callback(prop, undefined, trace)
      if (prop in target) {
        delete target[prop]
        return true
      }
      return false
    }
  })
}

function strip (str) {
  var arr = str.split('\n')
  arr = arr.length > 2 ? arr.slice(2) : arr
  arr[0] = arr[0].replace(/^ {4}at /, '')
  return '\n' + arr.join('\n')
}


/***/ }),

/***/ "./node_modules/on-load/index.js":
/*!***************************************!*\
  !*** ./node_modules/on-load/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global MutationObserver */
var document = __webpack_require__(/*! global/document */ "./node_modules/global/document.js")
var window = __webpack_require__(/*! global/window */ "./node_modules/global/window.js")
var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")
var watch = Object.create(null)
var KEY_ID = 'onloadid' + (new Date() % 9e6).toString(36)
var KEY_ATTR = 'data-' + KEY_ID
var INDEX = 0

if (window && window.MutationObserver) {
  var observer = new MutationObserver(function (mutations) {
    if (Object.keys(watch).length < 1) return
    for (var i = 0; i < mutations.length; i++) {
      if (mutations[i].attributeName === KEY_ATTR) {
        eachAttr(mutations[i], turnon, turnoff)
        continue
      }
      eachMutation(mutations[i].removedNodes, turnoff)
      eachMutation(mutations[i].addedNodes, turnon)
    }
  })
  if (document.body) {
    beginObserve(observer)
  } else {
    document.addEventListener('DOMContentLoaded', function (event) {
      beginObserve(observer)
    })
  }
}

function beginObserve (observer) {
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeOldValue: true,
    attributeFilter: [KEY_ATTR]
  })
}

module.exports = function onload (el, on, off, caller) {
  assert(document.body, 'on-load: will not work prior to DOMContentLoaded')
  on = on || function () {}
  off = off || function () {}
  el.setAttribute(KEY_ATTR, 'o' + INDEX)
  watch['o' + INDEX] = [on, off, 0, caller || onload.caller]
  INDEX += 1
  return el
}

module.exports.KEY_ATTR = KEY_ATTR
module.exports.KEY_ID = KEY_ID

function turnon (index, el) {
  if (watch[index][0] && watch[index][2] === 0) {
    watch[index][0](el)
    watch[index][2] = 1
  }
}

function turnoff (index, el) {
  if (watch[index][1] && watch[index][2] === 1) {
    watch[index][1](el)
    watch[index][2] = 0
  }
}

function eachAttr (mutation, on, off) {
  var newValue = mutation.target.getAttribute(KEY_ATTR)
  if (sameOrigin(mutation.oldValue, newValue)) {
    watch[newValue] = watch[mutation.oldValue]
    return
  }
  if (watch[mutation.oldValue]) {
    off(mutation.oldValue, mutation.target)
  }
  if (watch[newValue]) {
    on(newValue, mutation.target)
  }
}

function sameOrigin (oldValue, newValue) {
  if (!oldValue || !newValue) return false
  return watch[oldValue][3] === watch[newValue][3]
}

function eachMutation (nodes, fn) {
  var keys = Object.keys(watch)
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] && nodes[i].getAttribute && nodes[i].getAttribute(KEY_ATTR)) {
      var onloadid = nodes[i].getAttribute(KEY_ATTR)
      keys.forEach(function (k) {
        if (onloadid === k) {
          fn(k, nodes[i])
        }
      })
    }
    if (nodes[i].childNodes.length > 0) {
      eachMutation(nodes[i].childNodes, fn)
    }
  }
}


/***/ }),

/***/ "./node_modules/on-performance/browser.js":
/*!************************************************!*\
  !*** ./node_modules/on-performance/browser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var scheduler = __webpack_require__(/*! nanoscheduler */ "./node_modules/nanoscheduler/index.js")()
var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")

var entryTypes = [
  'frame',
  'measure',
  'navigation',
  'resource',
  'longtask'
]

module.exports = onPerformance

function onPerformance (cb) {
  assert.equal(typeof cb, 'function', 'on-performance: cb should be type function')

  var PerformanceObserver = typeof window !== 'undefined' && window.PerformanceObserver
  if (!PerformanceObserver) return

  // Enable singleton.
  if (window._onperformance) {
    window._onperformance.push(cb)
    return stop
  }

  window._onperformance = [cb]
  var observer = new PerformanceObserver(parseEntries)
  setTimeout(function () {
    parseEntries(window.performance)
    observer.observe({ entryTypes: entryTypes })
  }, 0)

  return stop

  function stop () {
    window._onperformance.splice(window._onperformance.indexOf(cb), 1)
  }

  function parseEntries (list) {
    list.getEntries().forEach(function (entry) {
      scheduler.push(function () {
        clear(entry)
        window._onperformance.forEach(function (cb) {
          cb(entry)
        })
      })
    })
  }

  // Navigation, longtask and frame don't have a clear method (yet)
  // Resource timings can only be cleared in bulk
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Performance/clearMeasures
  function clear (entry) {
    var type = entry.entryType
    if (type === 'measure') window.performance.clearMeasures(entry.name)
    else if (type === 'resource') window.performance.clearResourceTimings()
  }
}


/***/ }),

/***/ "./node_modules/plucker/index.js":
/*!***************************************!*\
  !*** ./node_modules/plucker/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = plucker

function plucker(path, object) {
  return arguments.length >= 2
    ? pluck(path)(object)
    : pluck(path)
}

function pluck(path) {
  path = typeof path === 'string'
    ? String(path).trim().split('.')
    : path

  if (path.length < 2) {
    path = path[0]
    return pluckSingle
  } else {
    var l = path.length
    return pluckPath
  }

  function pluckSingle(object) {
    return object[path]
  }

  function pluckPath(object) {
    for (var i = 0; i < l; i++) {
      if (typeof object === 'undefined') break

      object = object[path[i]]
    }

    return object
  }
}


/***/ }),

/***/ "./node_modules/prettier-bytes/index.js":
/*!**********************************************!*\
  !*** ./node_modules/prettier-bytes/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = prettierBytes

function prettierBytes (num) {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new TypeError('Expected a number, got ' + typeof num)
  }

  var neg = num < 0
  var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  if (neg) {
    num = -num
  }

  if (num < 1) {
    return (neg ? '-' : '') + num + ' B'
  }

  var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1)
  num = Number(num / Math.pow(1000, exponent))
  var unit = units[exponent]

  if (num >= 10 || num % 1 === 0) {
    // Do not show decimals when the number is two-digit, or if the number has no
    // decimal component.
    return (neg ? '-' : '') + num.toFixed(0) + ' ' + unit
  } else {
    return (neg ? '-' : '') + num.toFixed(1) + ' ' + unit
  }
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/remove-array-items/index.js":
/*!**************************************************!*\
  !*** ./node_modules/remove-array-items/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */
module.exports = function removeItems (arr, startIdx, removeCount) {
  var i, length = arr.length

  if (startIdx >= length || removeCount === 0) {
    return
  }

  removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount)

  var len = length - removeCount

  for (i = startIdx; i < len; ++i) {
    arr[i] = arr[i + removeCount]
  }

  arr.length = len
}


/***/ }),

/***/ "./node_modules/resl/index.js":
/*!************************************!*\
  !*** ./node_modules/resl/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global XMLHttpRequest */
var configParameters = [
  'manifest',
  'onDone',
  'onProgress',
  'onError'
]

var manifestParameters = [
  'type',
  'src',
  'stream',
  'credentials',
  'parser'
]

var parserParameters = [
  'onData',
  'onDone'
]

var STATE_ERROR = -1
var STATE_DATA = 0
var STATE_COMPLETE = 1

function raise (message) {
  throw new Error('resl: ' + message)
}

function checkType (object, parameters, name) {
  Object.keys(object).forEach(function (param) {
    if (parameters.indexOf(param) < 0) {
      raise('invalid parameter "' + param + '" in ' + name)
    }
  })
}

function Loader (name, cancel) {
  this.state = STATE_DATA
  this.ready = false
  this.progress = 0
  this.name = name
  this.cancel = cancel
}

module.exports = function resl (config) {
  if (typeof config !== 'object' || !config) {
    raise('invalid or missing configuration')
  }

  checkType(config, configParameters, 'config')

  var manifest = config.manifest
  if (typeof manifest !== 'object' || !manifest) {
    raise('missing manifest')
  }

  function getFunction (name, dflt) {
    if (name in config) {
      var func = config[name]
      if (typeof func !== 'function') {
        raise('invalid callback "' + name + '"')
      }
      return func
    }
    return null
  }

  var onDone = getFunction('onDone')
  if (!onDone) {
    raise('missing onDone() callback')
  }

  var onProgress = getFunction('onProgress')
  var onError = getFunction('onError')

  var assets = {}

  var state = STATE_DATA

  function loadXHR (request) {
    var name = request.name
    var stream = request.stream
    var binary = request.type === 'binary'
    var parser = request.parser

    var xhr = new XMLHttpRequest()
    var asset = null

    var loader = new Loader(name, cancel)

    if (stream) {
      xhr.onreadystatechange = onReadyStateChange
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          onReadyStateChange()
        }
      }
    }

    if (binary) {
      xhr.responseType = 'arraybuffer'
    }

    function onReadyStateChange () {
      if (xhr.readyState < 2 ||
          loader.state === STATE_COMPLETE ||
          loader.state === STATE_ERROR) {
        return
      }
      if (xhr.status !== 200) {
        return abort('error loading resource "' + request.name + '"')
      }
      if (xhr.readyState > 2 && loader.state === STATE_DATA) {
        var response
        if (request.type === 'binary') {
          response = xhr.response
        } else {
          response = xhr.responseText
        }
        if (parser.data) {
          try {
            asset = parser.data(response)
          } catch (e) {
            return abort(e)
          }
        } else {
          asset = response
        }
      }
      if (xhr.readyState > 3 && loader.state === STATE_DATA) {
        if (parser.done) {
          try {
            asset = parser.done()
          } catch (e) {
            return abort(e)
          }
        }
        loader.state = STATE_COMPLETE
      }
      assets[name] = asset
      loader.progress = 0.75 * loader.progress + 0.25
      loader.ready =
        (request.stream && !!asset) ||
        loader.state === STATE_COMPLETE
      notifyProgress()
    }

    function cancel () {
      if (loader.state === STATE_COMPLETE || loader.state === STATE_ERROR) {
        return
      }
      xhr.onreadystatechange = null
      xhr.abort()
      loader.state = STATE_ERROR
    }

    // set up request
    if (request.credentials) {
      xhr.withCredentials = true
    }
    xhr.open('GET', request.src, true)
    xhr.send()

    return loader
  }

  function loadElement (request, element) {
    var name = request.name
    var parser = request.parser

    var loader = new Loader(name, cancel)
    var asset = element

    function handleProgress () {
      if (loader.state === STATE_DATA) {
        if (parser.data) {
          try {
            asset = parser.data(element)
          } catch (e) {
            return abort(e)
          }
        } else {
          asset = element
        }
      }
    }

    function onProgress (e) {
      handleProgress()
      assets[name] = asset
      if (e.lengthComputable) {
        loader.progress = Math.max(loader.progress, e.loaded / e.total)
      } else {
        loader.progress = 0.75 * loader.progress + 0.25
      }
      notifyProgress(name)
    }

    function onComplete () {
      handleProgress()
      if (loader.state === STATE_DATA) {
        if (parser.done) {
          try {
            asset = parser.done()
          } catch (e) {
            return abort(e)
          }
        }
        loader.state = STATE_COMPLETE
      }
      loader.progress = 1
      loader.ready = true
      assets[name] = asset
      removeListeners()
      notifyProgress('finish ' + name)
    }

    function onError () {
      abort('error loading asset "' + name + '"')
    }

    if (request.stream) {
      element.addEventListener('progress', onProgress)
    }
    if (request.type === 'image') {
      element.addEventListener('load', onComplete)
    } else {
      var canPlay = false
      var loadedMetaData = false
      element.addEventListener('loadedmetadata', function () {
        loadedMetaData = true
        if (canPlay) {
          onComplete()
        }
      })
      element.addEventListener('canplay', function () {
        canPlay = true
        if (loadedMetaData) {
          onComplete()
        }
      })
    }
    element.addEventListener('error', onError)

    function removeListeners () {
      if (request.stream) {
        element.removeEventListener('progress', onProgress)
      }
      if (request.type === 'image') {
        element.addEventListener('load', onComplete)
      } else {
        element.addEventListener('canplay', onComplete)
      }
      element.removeEventListener('error', onError)
    }

    function cancel () {
      if (loader.state === STATE_COMPLETE || loader.state === STATE_ERROR) {
        return
      }
      loader.state = STATE_ERROR
      removeListeners()
      element.src = ''
    }

    // set up request
    if (request.credentials) {
      element.crossOrigin = 'use-credentials'
    } else {
      element.crossOrigin = 'anonymous'
    }
    element.src = request.src

    return loader
  }

  var loaders = {
    text: loadXHR,
    binary: function (request) {
      // TODO use fetch API for streaming if supported
      return loadXHR(request)
    },
    image: function (request) {
      return loadElement(request, document.createElement('img'))
    },
    video: function (request) {
      return loadElement(request, document.createElement('video'))
    },
    audio: function (request) {
      return loadElement(request, document.createElement('audio'))
    }
  }

  // First we parse all objects in order to verify that all type information
  // is correct
  var pending = Object.keys(manifest).map(function (name) {
    var request = manifest[name]
    if (typeof request === 'string') {
      request = {
        src: request
      }
    } else if (typeof request !== 'object' || !request) {
      raise('invalid asset definition "' + name + '"')
    }

    checkType(request, manifestParameters, 'asset "' + name + '"')

    function getParameter (prop, accepted, init) {
      var value = init
      if (prop in request) {
        value = request[prop]
      }
      if (accepted.indexOf(value) < 0) {
        raise('invalid ' + prop + ' "' + value + '" for asset "' + name + '", possible values: ' + accepted)
      }
      return value
    }

    function getString (prop, required, init) {
      var value = init
      if (prop in request) {
        value = request[prop]
      } else if (required) {
        raise('missing ' + prop + ' for asset "' + name + '"')
      }
      if (typeof value !== 'string') {
        raise('invalid ' + prop + ' for asset "' + name + '", must be a string')
      }
      return value
    }

    function getParseFunc (name, dflt) {
      if (name in request.parser) {
        var result = request.parser[name]
        if (typeof result !== 'function') {
          raise('invalid parser callback ' + name + ' for asset "' + name + '"')
        }
        return result
      } else {
        return dflt
      }
    }

    var parser = {}
    if ('parser' in request) {
      if (typeof request.parser === 'function') {
        parser = {
          data: request.parser
        }
      } else if (typeof request.parser === 'object' && request.parser) {
        checkType(parser, parserParameters, 'parser for asset "' + name + '"')
        if (!('onData' in parser)) {
          raise('missing onData callback for parser in asset "' + name + '"')
        }
        parser = {
          data: getParseFunc('onData'),
          done: getParseFunc('onDone')
        }
      } else {
        raise('invalid parser for asset "' + name + '"')
      }
    }

    return {
      name: name,
      type: getParameter('type', Object.keys(loaders), 'text'),
      stream: !!request.stream,
      credentials: !!request.credentials,
      src: getString('src', true, ''),
      parser: parser
    }
  }).map(function (request) {
    return (loaders[request.type])(request)
  })

  function abort (message) {
    if (state === STATE_ERROR || state === STATE_COMPLETE) {
      return
    }
    state = STATE_ERROR
    pending.forEach(function (loader) {
      loader.cancel()
    })
    if (onError) {
      if (typeof message === 'string') {
        onError(new Error('resl: ' + message))
      } else {
        onError(message)
      }
    } else {
      console.error('resl error:', message)
    }
  }

  function notifyProgress (message) {
    if (state === STATE_ERROR || state === STATE_COMPLETE) {
      return
    }

    var progress = 0
    var numReady = 0
    pending.forEach(function (loader) {
      if (loader.ready) {
        numReady += 1
      }
      progress += loader.progress
    })

    if (numReady === pending.length) {
      state = STATE_COMPLETE
      onDone(assets)
    } else {
      if (onProgress) {
        onProgress(progress / pending.length, message)
      }
    }
  }

  if (pending.length === 0) {
    setTimeout(function () {
      notifyProgress('done')
    }, 1)
  }
}


/***/ }),

/***/ "./node_modules/scroll-to-anchor/index.js":
/*!************************************************!*\
  !*** ./node_modules/scroll-to-anchor/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = scrollToAnchor

function scrollToAnchor (anchor, options) {
  if (anchor) {
    try {
      var el = document.querySelector(anchor)
      if (el) el.scrollIntoView(options)
    } catch (e) {}
  }
}


/***/ }),

/***/ "./node_modules/state-copy/index.js":
/*!******************************************!*\
  !*** ./node_modules/state-copy/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fastSafeStringify = __webpack_require__(/*! fast-safe-stringify */ "./node_modules/fast-safe-stringify/index.js")
var copy = __webpack_require__(/*! clipboard-copy */ "./node_modules/clipboard-copy/index.js")

function tryStringify (obj) {
  try {
    return JSON.stringify(obj)
  } catch (e) {}
}

function stateCopy (obj) {
  var str = tryStringify(obj) || fastSafeStringify(obj)
  copy(str)
}

module.exports = stateCopy


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/wayfarer/get-all-routes.js":
/*!*************************************************!*\
  !*** ./node_modules/wayfarer/get-all-routes.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js")

module.exports = getAllRoutes

var transform = function (trie, previous) {
  var prev = previous || '/'
  var routes = {}
  var nodes = trie.nodes
  Object.keys(nodes).forEach(function (key) {
    var path = (prev === '/' ? prev : prev + '/') + (key === '$$' ? ':' + trie.name : key)
    var cb = nodes[key].cb
    if (cb !== undefined) {
      routes[path] = cb
    }
    if (Object.keys(nodes[key].nodes).length !== 0) {
      var obj = transform(nodes[key], path)
      Object.keys(obj).forEach(function (r) {
        routes[r] = obj[r]
      })
    }
  })
  return routes
}

// walk a wayfarer trie
// (obj, fn) -> null
function getAllRoutes (router) {
  assert.equal(typeof router, 'function', 'wayfarer.getAllRoutes: router should be an function')

  var trie = router._trie
  assert.equal(typeof trie, 'object', 'wayfarer.getAllRoutes: trie should be an object')

  var tree = trie.trie
  return transform(tree)
}


/***/ }),

/***/ "./node_modules/wayfarer/index.js":
/*!****************************************!*\
  !*** ./node_modules/wayfarer/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js")
var trie = __webpack_require__(/*! ./trie */ "./node_modules/wayfarer/trie.js")

module.exports = Wayfarer

// create a router
// str -> obj
function Wayfarer (dft) {
  if (!(this instanceof Wayfarer)) return new Wayfarer(dft)

  var _default = (dft || '').replace(/^\//, '')
  var _trie = trie()

  emit._trie = _trie
  emit.on = on
  emit.emit = emit
  emit.match = match
  emit._wayfarer = true

  return emit

  // define a route
  // (str, fn) -> obj
  function on (route, fn) {
    assert.equal(typeof route, 'string')
    assert.equal(typeof fn, 'function')

    var cb = fn._wayfarer && fn._trie ? fn : proxy
    route = route || '/'
    cb.route = route

    if (cb._wayfarer && cb._trie) {
      _trie.mount(route, cb._trie.trie)
    } else {
      var node = _trie.create(route)
      node.cb = cb
    }

    return emit

    function proxy () {
      return fn.apply(this, Array.prototype.slice.call(arguments))
    }
  }

  // match and call a route
  // (str, obj?) -> null
  function emit (route) {
    var matched = match(route)

    var args = new Array(arguments.length)
    args[0] = matched.params
    for (var i = 1; i < args.length; i++) {
      args[i] = arguments[i]
    }

    return matched.cb.apply(matched.cb, args)
  }

  function match (route) {
    assert.notEqual(route, undefined, "'route' must be defined")

    var matched = _trie.match(route)
    if (matched && matched.cb) return new Route(matched)

    var dft = _trie.match(_default)
    if (dft && dft.cb) return new Route(dft)

    throw new Error("route '" + route + "' did not match")
  }

  function Route (matched) {
    this.cb = matched.cb
    this.route = matched.cb.route
    this.params = matched.params
  }
}


/***/ }),

/***/ "./node_modules/wayfarer/trie.js":
/*!***************************************!*\
  !*** ./node_modules/wayfarer/trie.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mutate = __webpack_require__(/*! xtend/mutable */ "./node_modules/xtend/mutable.js")
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js")
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")

module.exports = Trie

// create a new trie
// null -> obj
function Trie () {
  if (!(this instanceof Trie)) return new Trie()
  this.trie = { nodes: {} }
}

// create a node on the trie at route
// and return a node
// str -> null
Trie.prototype.create = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')
  // strip leading '/' and split routes
  var routes = route.replace(/^\//, '').split('/')

  function createNode (index, trie) {
    var thisRoute = (routes.hasOwnProperty(index) && routes[index])
    if (thisRoute === false) return trie

    var node = null
    if (/^:|^\*/.test(thisRoute)) {
      // if node is a name match, set name and append to ':' node
      if (!trie.nodes.hasOwnProperty('$$')) {
        node = { nodes: {} }
        trie.nodes['$$'] = node
      } else {
        node = trie.nodes['$$']
      }

      if (thisRoute[0] === '*') {
        trie.wildcard = true
      }

      trie.name = thisRoute.replace(/^:|^\*/, '')
    } else if (!trie.nodes.hasOwnProperty(thisRoute)) {
      node = { nodes: {} }
      trie.nodes[thisRoute] = node
    } else {
      node = trie.nodes[thisRoute]
    }

    // we must recurse deeper
    return createNode(index + 1, node)
  }

  return createNode(0, this.trie)
}

// match a route on the trie
// and return the node
// str -> obj
Trie.prototype.match = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')

  var routes = route.replace(/^\//, '').split('/')
  var params = {}

  function search (index, trie) {
    // either there's no match, or we're done searching
    if (trie === undefined) return undefined
    var thisRoute = routes[index]
    if (thisRoute === undefined) return trie

    if (trie.nodes.hasOwnProperty(thisRoute)) {
      // match regular routes first
      return search(index + 1, trie.nodes[thisRoute])
    } else if (trie.name) {
      // match named routes
      try {
        params[trie.name] = decodeURIComponent(thisRoute)
      } catch (e) {
        return search(index, undefined)
      }
      return search(index + 1, trie.nodes['$$'])
    } else if (trie.wildcard) {
      // match wildcards
      try {
        params['wildcard'] = decodeURIComponent(routes.slice(index).join('/'))
      } catch (e) {
        return search(index, undefined)
      }
      // return early, or else search may keep recursing through the wildcard
      return trie.nodes['$$']
    } else {
      // no matches found
      return search(index + 1)
    }
  }

  var node = search(0, this.trie)

  if (!node) return undefined
  node = xtend(node)
  node.params = params
  return node
}

// mount a trie onto a node at route
// (str, obj) -> null
Trie.prototype.mount = function (route, trie) {
  assert.equal(typeof route, 'string', 'route should be a string')
  assert.equal(typeof trie, 'object', 'trie should be a object')

  var split = route.replace(/^\//, '').split('/')
  var node = null
  var key = null

  if (split.length === 1) {
    key = split[0]
    node = this.create(key)
  } else {
    var head = split.join('/')
    key = split[0]
    node = this.create(head)
  }

  mutate(node.nodes, trie.nodes)
  if (trie.name) node.name = trie.name

  // delegate properties from '/' to the new node
  // '/' cannot be reached once mounted
  if (node.nodes['']) {
    Object.keys(node.nodes['']).forEach(function (key) {
      if (key === 'nodes') return
      node[key] = node.nodes[''][key]
    })
    mutate(node.nodes, node.nodes[''].nodes)
    delete node.nodes[''].nodes
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./node_modules/xtend/mutable.js":
/*!***************************************!*\
  !*** ./node_modules/xtend/mutable.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--4-1!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/src!./app.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/app.css");
var options = {"singleton":true,"hmr":true};
options.insertInto = undefined;

if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) exports.locals = content.locals;

exports.use = exports.ref = function() {
	if(!(refs++)) {
		dispose = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
	}

	return exports;
};

exports.unuse = exports.unref = function() {
  if(refs > 0 && !(--refs)) {
	   dispose();
		 dispose = null;
  }
};
if(false) { var lastRefs; }

/***/ }),

/***/ "./src/components/address-search/ico-search.svg":
/*!******************************************************!*\
  !*** ./src/components/address-search/ico-search.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/components/address-search/ico-search.svg?86f9773baf7ffa1feec39546b97cc676";

/***/ }),

/***/ "./src/components/address-search/index.js":
/*!************************************************!*\
  !*** ./src/components/address-search/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddressSearch; });
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choo/html */ "./node_modules/choo/html/index.js");
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choo_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choo_html_raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choo/html/raw */ "./node_modules/choo/html/raw.js");
/* harmony import */ var choo_html_raw__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choo_html_raw__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! choo/component */ "./node_modules/choo/component/index.js");
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choo_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/components/address-search/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/merge */ "./src/utils/merge.js");
/* harmony import */ var nanostate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nanostate */ "./node_modules/nanostate/index.js");
/* harmony import */ var nanostate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nanostate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_mapbox_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/mapbox-api */ "./src/utils/mapbox-api.js");
/* harmony import */ var _ico_search_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ico-search.svg */ "./src/components/address-search/ico-search.svg");
/* harmony import */ var _ico_search_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ico_search_svg__WEBPACK_IMPORTED_MODULE_7__);











let initGoogleMapsAutocompleteReady = false;
let initGoogleMapsAutocompleteInitialized = false;

window.initGoogleMapsAutocomplete = () => {
  initGoogleMapsAutocompleteReady = true;
};

class AddressSearch extends choo_component__WEBPACK_IMPORTED_MODULE_2___default.a {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.isDirty = false;
    this.local = state.components[id] = Object(_utils_merge__WEBPACK_IMPORTED_MODULE_4__["default"])([{
      enabled: true,
      assetsPathPrefix: '',
      visible: false,
      text: '',
      value: [],
      items: [ /* ... , [label, value], ... */ ],
      bbox: [18.909330207135934, 50.16298654333147, 19.118374382500072, 50.29340052573354],
      newBBox: false
    }, state.components && state.components[id] ? state.components[id] : {}]);
    _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.use();

    this.machine = nanostate__WEBPACK_IMPORTED_MODULE_5___default()('select', {
      select: { click: 'open' },
      open: {
        clickItem: 'select',
        type: 'search'
      },
      search: { updateList: 'open' }
    });
  }

  load (element) {
    
  }

  update () {
    if (this.local.newBBox && this.autocomplete) {
      let bbox = this.local.bbox;
      let sw = new google.maps.LatLng(bbox[1], bbox[0]);
      let ne = new google.maps.LatLng(bbox[3], bbox[2]);
      let bounds = new google.maps.LatLngBounds(sw, ne);
      this.autocomplete.setBounds(bounds);
      this.local.newBBox = false;
    }
    return true;
  }

  createElement () {
    const l = this.local;
    const sl = _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.locals;

    let searchDelay = null;
    const onInputChange = (e) => {
      let query = e.target.value;
      l.text = query;

      /* We use timeout so we dont abuse the api. API query will happen 0.5 second after finished typing */
      if (searchDelay) clearTimeout(searchDelay);
      searchDelay = setTimeout(async () => {
        let ret = await this._search(query);
        ret = ret.filter((it) => it.label.indexOf('Katowice') > -1 ? it : false);
        l.items = ret.map((it) => {
          return [it.label, JSON.stringify(it.coordinates)];
        });
        this._updateList(ret);
        this.isDirty = true;
        this.emit('render');
      }, 600);
    };

    const onItemClick = (e) => {
      let label = e.target.innerText;
      let value = JSON.parse(e.target.getAttribute('data-value'));
      // this.local.text = label;
      this.local.value = value;
      if (searchDelay) clearTimeout(searchDelay);
      this._resetInput();
      this.emit(`${this.id}:value`, value.slice(), label + '');
      return true;
    };

    const onSearchButtonClick = (e) => {
      if (searchDelay) clearTimeout(searchDelay);
      this._resetInput();
      this.element.querySelector(`input.${sl['input-field']}`).focus();
    };

    return choo_html__WEBPACK_IMPORTED_MODULE_0___default.a`
    <div class="absolute top-0 left-0 pt3 pb1 pr3 ${sl['address-search']} ${l.enabled && l.visible ? '' : 'dn'}" style="">
      <p class="w-100 bb pb1 ma0 ${sl['input-field-container']}" style="border-color: #10069F;background-image:url(${l['assetsPathPrefix'] + _ico_search_svg__WEBPACK_IMPORTED_MODULE_7___default.a})">
        <input class="input-reset ${sl['input-field']}" autocomplete="off" tabindex="0" value="${l.text}">
      </p>
      <div class="mv2 ${sl['results']}">
        ${l.items.map((it) => choo_html__WEBPACK_IMPORTED_MODULE_0___default.a`<a class="pv1 dib w-100 link ${it[1] === l.value ? 'selected' : ''}" data-value="${it[1]}" onclick=${onItemClick}>${it[0]}</div>`)}
      </div>
    </div>`;
  }

  afterupdate (element) {
    if (initGoogleMapsAutocompleteReady && !initGoogleMapsAutocompleteInitialized) {
      initGoogleMapsAutocompleteInitialized = true;

      let bbox = this.local.bbox;
      let sw = new google.maps.LatLng(bbox[1], bbox[0]);
      let ne = new google.maps.LatLng(bbox[3], bbox[2]);
      let bounds = new google.maps.LatLngBounds(sw, ne);

      // Create the autocomplete object, restricting the search to geographical
      // location types.
      // https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions
      this.autocomplete = new google.maps.places.Autocomplete(element.querySelector(`input.${_style_css__WEBPACK_IMPORTED_MODULE_3___default.a.locals['input-field']}`), {
        bounds,
        fields: ['formatted_address', 'geometry.location', 'name', 'vicinity'],
        types: ['address']
      });
      
      this.autocomplete.addListener('place_changed', () => {
        let place = this.autocomplete.getPlace();
        if (place['geometry']) {
          let loc = place['geometry']['location'];

          let value = [loc.lng(), loc.lat()];
          let label = place['formatted_address'];
          this.emit(`${this.id}:value`, value.slice(), label + '');
        }
      });
      
    }
  }

  _resetInput () {
    this.local.text = '';
    this.local.value = [];
    this.local.items = [];
    this.rerender();
  }

  async _search (query) {
    return [];
    // return this._searchMapbox(query);
  }

  async _searchMapbox (query) {
    if (!query || query.length === 0) return []; /* return empty results if query is empty */
    let ret = await Object(_utils_mapbox_api__WEBPACK_IMPORTED_MODULE_6__["geocode"])(this.local.mapboxAccessToken, query, {
      bbox: this.local.bbox,
      types: ['address'],
      autocomplete: true,
      limit: 4,
      country: 'pl',
      language: 'pl'
    }).json();
    ret = ret.features.map((f) => {
      let labelParts = f.place_name_pl.split(',');
      let label = '';
      if (labelParts.length > 0) {
        label += labelParts[0].trim();
      }
      if (labelParts.length > 1) {
        label += ', ' + labelParts[1].trim();
      }

      return {
        label,
        coordinates: f.geometry.coordinates
      };
    });
    return ret;
  }

  _updateList (listData) {

  }
}


/***/ }),

/***/ "./src/components/address-search/style.css":
/*!*************************************************!*\
  !*** ./src/components/address-search/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/components/address-search/style.css");
var options = {"singleton":true,"hmr":true};
options.insertInto = undefined;

if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) exports.locals = content.locals;

exports.use = exports.ref = function() {
	if(!(refs++)) {
		dispose = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
	}

	return exports;
};

exports.unuse = exports.unref = function() {
  if(refs > 0 && !(--refs)) {
	   dispose();
		 dispose = null;
  }
};
if(false) { var lastRefs; }

/***/ }),

/***/ "./src/components/dropdown/icon-ios7-arrow-down-128.png":
/*!**************************************************************!*\
  !*** ./src/components/dropdown/icon-ios7-arrow-down-128.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/components/dropdown/icon-ios7-arrow-down-128.png?708e9dd3d9633dde8a37e860b0c0d014";

/***/ }),

/***/ "./src/components/dropdown/index.js":
/*!******************************************!*\
  !*** ./src/components/dropdown/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choo/html */ "./node_modules/choo/html/index.js");
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choo_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choo_html_raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choo/html/raw */ "./node_modules/choo/html/raw.js");
/* harmony import */ var choo_html_raw__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choo_html_raw__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! choo/component */ "./node_modules/choo/component/index.js");
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choo_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/components/dropdown/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/merge */ "./src/utils/merge.js");
/* harmony import */ var _icon_ios7_arrow_down_128_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon-ios7-arrow-down-128.png */ "./src/components/dropdown/icon-ios7-arrow-down-128.png");
/* harmony import */ var _icon_ios7_arrow_down_128_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_icon_ios7_arrow_down_128_png__WEBPACK_IMPORTED_MODULE_5__);








const AccessibleDropdown = __webpack_require__(/*! ./local_modules/accessible-dropdown */ "./src/components/dropdown/local_modules/accessible-dropdown/src/dropdown.js");

class Dropdown extends choo_component__WEBPACK_IMPORTED_MODULE_2___default.a {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.local = state.components[id] = Object(_utils_merge__WEBPACK_IMPORTED_MODULE_4__["default"])([{
      assetsPathPrefix: '',
      visible: false,
      text: '',
      value: '',
      initialIdx: 0,
      items: [ /* [label, value] */ ]
    }, state.components && state.components[id] ? state.components[id] : {}]);
    _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.use();
    this._accessibleDropdownOptions = [];
    this._initialized = false;
  }

  load (element) {
    
  }

  update () {
    if (!this._initialized && this.local.items.length > 0) {
      return true;
    }
    return false;
  }

  createElement () {
    const l = this.local;
    const sl = _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.locals;

    const onSelectChange = (e) => {
      let value = e.target.value;
      this.local.value = value;
      for (let i = 0; i < this.local.items.length; i++) {
        if (this.local.items[i][1] === value) {
          this.local.text = this.local.items[i][0];
          break;
        }
      }
      this.emit(`${this.id}:valueChange`, value);
    };

    return choo_html__WEBPACK_IMPORTED_MODULE_0___default.a`
    <div class="fl ph0 pb3 w-50 db ${sl['dropdown']}" style="${l.visible ? '' : 'visibility:hidden'}">
      <select onchange=${onSelectChange} class="drop-down ${this.id + '__' + sl['dropdown-control']} ${sl['dropdown-control']}" title="Destination" style="background-image:url('${l['assetsPathPrefix'] + _icon_ios7_arrow_down_128_png__WEBPACK_IMPORTED_MODULE_5___default.a}');">
        ${choo_html_raw__WEBPACK_IMPORTED_MODULE_1___default()(l.items.map((it) => `<option value="${it[1]}" ${it[1] === l.value ? 'selected' : ''}>${it[0]}</option>`).join(''))}
      </select>
    </div>`;
  }

  afterupdate (element) {
    if (!this._initialized && this.local.items.length > 0) {
      this._initialized = true;

      let selectNode = element.querySelector('select.' + this.id + '__' + _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.locals['dropdown-control']);

      /* to ensure first selected on chrome */
      selectNode.selectedIndex = this.local.initialIdx;
      selectNode.value = this.local.items[this.local.initialIdx][1];
      /* -- */

      let optionNodeList = Array.prototype.slice.call(selectNode.options);
      optionNodeList.forEach((optionNode) => {
        this._accessibleDropdownOptions.push(optionNode.innerHTML.toLowerCase().trim());
      });
      this._accessibleDropdown = new AccessibleDropdown({
        selectNode: selectNode,
        optionList: this._accessibleDropdownOptions,
        css: {
          hide: 'hide',
          pseudoSelect: 'pseudo-select drop-down',
          pseudoSelectFocus: 'pseudo-select-focus',
          options: 'options'
        }
      });
      this._accessibleDropdown.init();

    }
  }
}


/***/ }),

/***/ "./src/components/dropdown/local_modules/accessible-dropdown/src/dictionary.js":
/*!*************************************************************************************!*\
  !*** ./src/components/dropdown/local_modules/accessible-dropdown/src/dictionary.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Index(optionList) {
  this.optionList = optionList;
}

// returns the index of the first desired option
Index.prototype.getIndexOfDesiredOption = function(desiredOptionStartsWith) {

  var optionList = this.optionList;
  var low = 0, high = optionList.length - 1, mid;
  var currentOptionStartsWith;
  var substrLength = desiredOptionStartsWith.length;
  var desiredOption = -1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2) || 0;
    currentOptionStartsWith = this.optionList[mid].substr(0, substrLength);

    if (currentOptionStartsWith < desiredOptionStartsWith) {
      low = mid + 1;
    }
    else if (currentOptionStartsWith > desiredOptionStartsWith) {
      high = mid - 1;
    }
    else {
      desiredOption = mid;
      high = mid - 1;
    }
  }

  return desiredOption;
};

module.exports = Index;


/***/ }),

/***/ "./src/components/dropdown/local_modules/accessible-dropdown/src/dropdown.js":
/*!***********************************************************************************!*\
  !*** ./src/components/dropdown/local_modules/accessible-dropdown/src/dropdown.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CHANGE_EVENT;

/* istanbul ignore next */
if (typeof Event === 'function') {
  CHANGE_EVENT = new Event('change');
}

var Template = __webpack_require__(/*! ./template */ "./src/components/dropdown/local_modules/accessible-dropdown/src/template.js");
var Dictionary = __webpack_require__(/*! ./dictionary */ "./src/components/dropdown/local_modules/accessible-dropdown/src/dictionary.js");
var StyleUpdater = __webpack_require__(/*! ./style-updater */ "./src/components/dropdown/local_modules/accessible-dropdown/src/style-updater.js");

function Dropdown(config) {
  var css;

  this.selectNode = config.selectNode;
  this.selectedIndex = this.selectNode.selectedIndex;
  this.parentNode = config.parentNode || this.selectNode.parentNode;
  this.correspondingNode = config.correspondingNode;
  this.Template = config.Template || Template;

  css = config.css;

  /* istanbul ignore next */
  this.css = {
    hide: css && css.hide ? css.hide : 'hide',
    pseudoSelect: css && css.pseudoSelect ? css.pseudoSelect : 'pseudo-select',
    pseudoSelectFocus: css && css.pseudoSelectFocus,
    options: css && css.options ? css.options : 'options'
  };

  /* istanbul ignore next */
  this.dictionary = new Dictionary(config.optionList || []);
  this.template = new this.Template({
    selectNode: config.selectNode,
    css: {
      pseudoSelect: this.css.pseudoSelect
    }
  });
  this.desiredOptionStartsWith = '';
  this.isVisible = false;
}

function getOption(option) {
  if(option.tagName.toLowerCase() !== 'a') {
    option = option.querySelector('a');
  }
  return option;
}

function focusOption() {
  var selectedOption = this.optionNodeList[this.selectedIndex];
  selectedOption.focus();
  // selectedOption.scrollIntoView();
}

function showOptions() {
  // set selectedIndex to the selectedIndex the actual selectNode
  this.selectedIndex = this.selectNode.selectedIndex;
  this.optionsContainer.classList.remove(this.css.hide);
  this.pseudoSelectContainer.querySelector('a').setAttribute('aria-expanded', true);
  /* istanbul ignore next */
  if(this.correspondingNode) {
    this.correspondingNode.classList.add(this.css.pseudoSelectFocus);
  } else {
    this.pseudoSelectContainer.querySelector('a').classList.add(this.css.pseudoSelectFocus);
  }
  focusOption.bind(this)();
  this.isVisible = true;
}

function hideOptions() {
  this.optionsContainer.classList.add(this.css.hide);
  this.pseudoSelectContainer.querySelector('a').classList.remove(this.css.pseudoSelectFocus);
  this.pseudoSelectContainer.querySelector('a').setAttribute('aria-expanded', false);
  this.isVisible = false;
}

function showHideOptionsContainer(e) {
  e.preventDefault();
  e.stopPropagation();
  if(this.isVisible) {
    hideOptions.bind(this)();
  } else {
    showOptions.bind(this)();
  }
}

function selectOption(e) {
  var option;
  var value;

  option = getOption(e.target);
  value = option.getAttribute('data-value');

  if(value !== this.selectNode.value) {
    this.pseudoSelectContainer.innerHTML = this.template.getPseudoSelectHTML(option);
    this.selectNode.value = value;
  }
  // focus the anchor tag
  this.pseudoSelectContainer.querySelector('a').focus();
  /* istanbul ignore next */
  if(this.correspondingNode) {
    this.styleUpdater.adjustCorrespondingNodePadding();
  }
  // dispatch change event on the selectNode
  /* istanbul ignore next */
  if(CHANGE_EVENT) {
    this.selectNode.dispatchEvent(CHANGE_EVENT);
  }
  hideOptions.bind(this)();

  e.preventDefault();
  e.stopPropagation();
  return false;
}

function optionsKeydownHandler(e) {
  var optionListLength;

  /*
   * only interested in following keys
   * up arrow      38
   * down arrow    40
   * end           35
   * home          36
   * page up       33
   * page down     34
   * tab           9
   * esc           27
   * space         32
   */

  if(e.keyCode === 38 || e.keyCode === 40 ||
      e.keyCode === 35 || e.keyCode === 36 ||
      e.keyCode === 33 || e.keyCode === 34 ||
      e.keyCode === 32) {

    e.preventDefault();
    e.stopPropagation();

    optionListLength = this.optionNodeList.length;

    switch(e.keyCode) {
      case 38: // up arrow
        if(this.selectedIndex > 0) {
          this.selectedIndex -= 1;
        }
        break;
      case 40: // down arrow
        if(this.selectedIndex < optionListLength - 1) {
          this.selectedIndex += 1;
        }
        break;
      case 35: // end
        this.selectedIndex = optionListLength - 1;
        break;
      case 36: // home
        this.selectedIndex = 0;
        break;
      case 33: // page up
        this.selectedIndex -= 5;
        if(this.selectedIndex < 0) {
          this.selectedIndex = 0;
        }
        break;
      case 34: // page down
        this.selectedIndex += 5;
        if(this.selectedIndex >= optionListLength) {
          this.selectedIndex = optionListLength - 1;
        }
        break;
      case 32: // space
        selectOption.bind(this)(e);
        break;
    }
  }

  focusOption.bind(this)();

  // if tab or esc is pressed hide the options container
  if(e.keyCode === 9 || e.keyCode === 27) {
    hideOptions.bind(this)();
  }

  if(e.keyCode === 27) {
    this.pseudoSelectContainer.querySelector('a').focus();
  }

  // this will be used in optionsMousemoveHandler
  this.event = e.type;
}

function optionsKeypressHandler(e) {
  // http://stackoverflow.com/questions/7330724/event-keycode-not-returning-correct-values-in-firefox#answer-7330817
  /* istanbul ignore next */
  var charCode = (typeof e.which === 'number') ? e.which : e.keyCode;
  var desiredOptionIndex = 0;

  // firefox listens to keypress for tab with charcode 0
  /* istanbul ignore next */
  if (charCode === 0) {
    return;
  }

  e.preventDefault();
  e.stopPropagation();

  this.currentKeyPressTime = new Date().getTime();
  if(this.previousKeyPressTime && (this.currentKeyPressTime - this.previousKeyPressTime) > 500) {
    this.desiredOptionStartsWith = '';
  }
  this.previousKeyPressTime = this.currentKeyPressTime;
  this.desiredOptionStartsWith = this.desiredOptionStartsWith + String.fromCharCode(charCode).toLowerCase();
  // do not update the selectedindex if desiredOptionIndex is -1
  // firefox/windows hack, firefox/windows listening to up/down/right/left arrow keypress
  desiredOptionIndex = this.dictionary.getIndexOfDesiredOption(this.desiredOptionStartsWith);

  if(desiredOptionIndex !== -1) {
    this.selectedIndex = desiredOptionIndex;
    focusOption.bind(this)();
  }

  // this will be used in optionsMousemoveHandler
  this.event = e.type;
}

function pseudoSelectKeydownHandler(e) {
  if(e.keyCode === 38 || e.keyCode === 40) {
    e.preventDefault();
    e.stopPropagation();
    showOptions.bind(this)();
  }
}

function pseudoSelectKeypressHandler(e) {
  // http://stackoverflow.com/questions/7330724/event-keycode-not-returning-correct-values-in-firefox#answer-7330817
  /* istanbul ignore next */
  var charCode = (typeof e.which === 'number') ? e.which : e.keyCode;

  // firefox listens to keypress for tab with charcode 0
  /* istanbul ignore next */
  if (charCode === 0) {
    return;
  }
  if(charCode === 32) {
    e.preventDefault();
    e.stopPropagation();
  }
  showOptions.bind(this)();
}

function optionsMousemoveHandler(e) {

  if( !(this.event === 'keydown' || this.event === 'keypress') ) {
    var option = getOption(e.target);
    option.focus();
    this.selectedIndex = this.optionNodeList.indexOf(option);
  }

  // this will be used in optionsMousemoveHandler (this function)
  this.event = e.type;
}

function injectDropdownContainer() {

  var dropdownContainer;
  var pseudoSelectContainer;
  var optionsContainer;

  /*
   * create a div (dropdownContainer) as the container
   * to wrap pseudoSelectContainer & optionsContainer
   */
  dropdownContainer = document.createElement('div');

  /*
   * required to test, if the container has been injected in the document
   * should it be an id instead of a class?
   */
  dropdownContainer.classList.add('dropdown-container');

  pseudoSelectContainer = document.createElement('div');
  pseudoSelectContainer.innerHTML = this.template.getPseudoSelectHTML();

  optionsContainer = document.createElement('div');
  optionsContainer.classList.add(this.css.hide);
  optionsContainer.setAttribute('tabindex', '-1');
  this.css.options.split(' ').forEach(function(css) {
    optionsContainer.classList.add(css);
  });
  optionsContainer.innerHTML = this.template.getOptionsContainerHTML();

  dropdownContainer.appendChild(pseudoSelectContainer);
  dropdownContainer.appendChild(optionsContainer);

  /* istanbul ignore next */
  if(this.correspondingNode) {
    this.parentNode.insertBefore(dropdownContainer, this.correspondingNode);
  } else {
    this.parentNode.appendChild(dropdownContainer);
  }

  this.dropdownContainer = dropdownContainer;
  this.pseudoSelectContainer = pseudoSelectContainer;
  this.optionsContainer = optionsContainer;
}

Dropdown.prototype.init = function() {
  injectDropdownContainer.bind(this)();

  this.optionNodeList = Array.prototype.slice.call(this.optionsContainer.querySelectorAll('a'));

  this.selectNode.classList.add(this.css.hide);

  this.pseudoSelectContainer.addEventListener('click', showHideOptionsContainer.bind(this));
  this.pseudoSelectContainer.addEventListener('keydown', pseudoSelectKeydownHandler.bind(this));
  this.pseudoSelectContainer.addEventListener('keypress', pseudoSelectKeypressHandler.bind(this));

  this.optionsContainer.addEventListener('click', selectOption.bind(this));
  this.optionsContainer.addEventListener('keydown', optionsKeydownHandler.bind(this));
  this.optionsContainer.addEventListener('keypress', optionsKeypressHandler.bind(this));
  this.optionsContainer.addEventListener('mousemove', optionsMousemoveHandler.bind(this));

  /* istanbul ignore next */
  if(this.correspondingNode) {
    this.styleUpdater = new StyleUpdater({
      pseudoSelectContainer: this.pseudoSelectContainer,
      correspondingNode: this.correspondingNode,
      extraPadding: 10
    });
    this.styleUpdater.adjustCorrespondingNodePadding();
    this.pseudoSelectContainer.querySelector('a').addEventListener('focus', function() {
      this.correspondingNode.classList.add(this.css.pseudoSelectFocus);
    }.bind(this));

    this.correspondingNode.addEventListener('focus', function() {
      this.correspondingNode.classList.remove(this.css.pseudoSelectFocus);
    }.bind(this));
  }

  document.addEventListener('click', hideOptions.bind(this), false);
};

module.exports = Dropdown;


/***/ }),

/***/ "./src/components/dropdown/local_modules/accessible-dropdown/src/style-updater.js":
/*!****************************************************************************************!*\
  !*** ./src/components/dropdown/local_modules/accessible-dropdown/src/style-updater.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* istanbul ignore next */
function getStyle(element, property) {
  return document.defaultView.getComputedStyle(element).getPropertyValue(property);
}

/* istanbul ignore next */
function StyleUpdater(config) {
  this.pseudoSelectContainer = config.pseudoSelectContainer;
  this.correspondingNode = config.correspondingNode;
  this.direction = config.direction || getStyle(document.body, 'direction');
  this.extraPadding = config.extraPadding || 0;
}

/* istanbul ignore next */
StyleUpdater.prototype.adjustCorrespondingNodePadding = function() {
  var padding = parseInt(getStyle(this.pseudoSelectContainer.querySelector('a'), 'width'), 10) + this.extraPadding + 'px';
  if(this.direction === 'ltr') {
    this.correspondingNode.style.paddingLeft = padding;
  } else {
    this.correspondingNode.style.paddingRight = padding;
  }
};

module.exports = StyleUpdater;


/***/ }),

/***/ "./src/components/dropdown/local_modules/accessible-dropdown/src/template.js":
/*!***********************************************************************************!*\
  !*** ./src/components/dropdown/local_modules/accessible-dropdown/src/template.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Template(config) {
  this.selectNode = config.selectNode;
  this.title = this.selectNode.getAttribute('title');
  this.optionNodeList = Array.prototype.slice.call(this.selectNode.options);
  this.css = config.css;
}

Template.prototype.getPseudoSelectHTML = function(option) {
  var pseudoSelectHTML = [];
  var optionText;
  var label;

  if(option) {
    optionText = option.innerHTML;
  } else {
    optionText = this.optionNodeList[this.selectNode.selectedIndex].innerHTML;
  }

  label = this.title + ' ' + optionText;

  pseudoSelectHTML.push('<a href="#" class="' + this.css.pseudoSelect + '" role="button" aria-expanded="false" aria-label="' + label + '">');
  pseudoSelectHTML.push(optionText);
  pseudoSelectHTML.push('</a>');

  return pseudoSelectHTML.join('');
};

Template.prototype.getOptionsContainerHTML = function() {
  var optionsHTML = [];

  optionsHTML.push('<ul role="menu">');
  this.optionNodeList.forEach(function(optionNode) {
    optionsHTML.push('<li role="presentation">');
    optionsHTML.push('<a href="#" tabindex="-1" role="menuitem" data-value="' + optionNode.value + '">');
    optionsHTML.push(optionNode.innerHTML);
    optionsHTML.push('</a>');
    optionsHTML.push('</li>');
  });
  optionsHTML.push('</ul>');

  return optionsHTML.join('');
};

module.exports = Template;


/***/ }),

/***/ "./src/components/dropdown/style.css":
/*!*******************************************!*\
  !*** ./src/components/dropdown/style.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/components/dropdown/style.css");
var options = {"singleton":true,"hmr":true};
options.insertInto = undefined;

if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) exports.locals = content.locals;

exports.use = exports.ref = function() {
	if(!(refs++)) {
		dispose = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
	}

	return exports;
};

exports.unuse = exports.unref = function() {
  if(refs > 0 && !(--refs)) {
	   dispose();
		 dispose = null;
  }
};
if(false) { var lastRefs; }

/***/ }),

/***/ "./src/components/legend/index.js":
/*!****************************************!*\
  !*** ./src/components/legend/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Legend; });
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choo/html */ "./node_modules/choo/html/index.js");
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choo_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choo_html_raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choo/html/raw */ "./node_modules/choo/html/raw.js");
/* harmony import */ var choo_html_raw__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choo_html_raw__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! choo/component */ "./node_modules/choo/component/index.js");
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choo_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/components/legend/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/merge */ "./src/utils/merge.js");
/* harmony import */ var nanostate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nanostate */ "./node_modules/nanostate/index.js");
/* harmony import */ var nanostate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nanostate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _section_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-element */ "./src/components/legend/section-element.js");
/* harmony import */ var _images_ico_mood_1_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/ico-mood-1.svg */ "./src/images/ico-mood-1.svg");
/* harmony import */ var _images_ico_mood_1_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_ico_mood_1_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_ico_mood_2_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/ico-mood-2.svg */ "./src/images/ico-mood-2.svg");
/* harmony import */ var _images_ico_mood_2_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_ico_mood_2_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_ico_mood_3_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/ico-mood-3.svg */ "./src/images/ico-mood-3.svg");
/* harmony import */ var _images_ico_mood_3_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_ico_mood_3_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_ico_mood_4_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/ico-mood-4.svg */ "./src/images/ico-mood-4.svg");
/* harmony import */ var _images_ico_mood_4_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_ico_mood_4_svg__WEBPACK_IMPORTED_MODULE_10__);














const palette = __webpack_require__(/*! ./palette */ "./src/components/legend/palette.js");

class Legend extends choo_component__WEBPACK_IMPORTED_MODULE_2___default.a {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.isDirty = false;
    this.local = state.components[id] = Object(_utils_merge__WEBPACK_IMPORTED_MODULE_4__["default"])([{
      enabled: true,
      values: [0, 0, 0, 0],
      minPieceWidth: 1,
      piecePadding: 1,
      totalWidth: 736
    }, state.components && state.components[id] ? state.components[id] : {}]);
    _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.use();
  }

  load (element) {
    
  }

  update () {
    return true;
  }

  createElement () {
    const l = this.local;
    const sl = _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.locals;

    if (!l.enabled) return choo_html__WEBPACK_IMPORTED_MODULE_0___default.a`<div class="${sl['legend']}} dn"></div>`;

    const w = l.totalWidth;
    const minPercent = Math.ceil((l.minPieceWidth / parseFloat(w)) * 100.0);
    let val = l.values.slice();
    val = val.map((x, i) => { return { i, v: x }; });
    val = val.sort((a, b) => a.v - b.v);

    for (let x of val) {
      if (x.v < minPercent) {
        val[val.length - 1].v -= minPercent - x.v;
        x.v = minPercent;
      }
    }

    val = val.sort((a, b) => a.i - b.i);
    val = val.map((x) => x.v);

    let sum = val.reduce((a, c) => a + c);

    return choo_html__WEBPACK_IMPORTED_MODULE_0___default.a`
    <div class="${sl['legend']} ${sum < 100 ? 'dn' : ''}">
     ${Object(_section_element__WEBPACK_IMPORTED_MODULE_6__["default"])(0, l.values[0], val[0], l['assetsPathPrefix'] + _images_ico_mood_1_svg__WEBPACK_IMPORTED_MODULE_7___default.a, palette['scale1'])}
     ${Object(_section_element__WEBPACK_IMPORTED_MODULE_6__["default"])(1, l.values[1], val[1], l['assetsPathPrefix'] + _images_ico_mood_2_svg__WEBPACK_IMPORTED_MODULE_8___default.a, palette['scale2'])}
     ${Object(_section_element__WEBPACK_IMPORTED_MODULE_6__["default"])(2, l.values[2], val[2], l['assetsPathPrefix'] + _images_ico_mood_3_svg__WEBPACK_IMPORTED_MODULE_9___default.a, palette['scale3'])}
     ${Object(_section_element__WEBPACK_IMPORTED_MODULE_6__["default"])(3, l.values[3], val[3], l['assetsPathPrefix'] + _images_ico_mood_4_svg__WEBPACK_IMPORTED_MODULE_10___default.a, palette['scale4'])}
    </div>`;
  }
}


/***/ }),

/***/ "./src/components/legend/palette.js":
/*!******************************************!*\
  !*** ./src/components/legend/palette.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const colors = {
  blue: '#0F059E',
  grey: '#F2F2F2',
  red: '#FF4133',
  scale1: '#443CB3',
  scale2: '#9E96FF',
  scale3: '#FF9494',
  scale4: '#FF4133'
};
module.exports = colors;


/***/ }),

/***/ "./src/components/legend/section-element.js":
/*!**************************************************!*\
  !*** ./src/components/legend/section-element.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sectionElement; });
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choo/html */ "./node_modules/choo/html/index.js");
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choo_html__WEBPACK_IMPORTED_MODULE_0__);


function sectionElement (sectionIdx, percentValue, percentWidth, icofile, color) {
  const firstSectionAlignTreshold = 11;
  return choo_html__WEBPACK_IMPORTED_MODULE_0___default.a`
  <div class="fl" style="width: ${percentWidth}%; padding-right: 1px;">
    <div style="background-color: ${color}; height: 8px;"></div>
    <img class="fl pv2" src=${icofile} style="min-width: 14px;${sectionIdx === 0 && percentValue < firstSectionAlignTreshold ? 'float:right;margin-right:3px;' : ''}">
    <span class="fl w-100" style="color: ${color};min-width: fit-content;width: 100%;${sectionIdx === 0 && percentValue < firstSectionAlignTreshold ? 'float:right;margin-right:3px;' : ''}">${percentValue < 1 ? '<1' : percentValue}%</span>
  </div>`;
}


/***/ }),

/***/ "./src/components/legend/style.css":
/*!*****************************************!*\
  !*** ./src/components/legend/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/components/legend/style.css");
var options = {"singleton":true,"hmr":true};
options.insertInto = undefined;

if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) exports.locals = content.locals;

exports.use = exports.ref = function() {
	if(!(refs++)) {
		dispose = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
	}

	return exports;
};

exports.unuse = exports.unref = function() {
  if(refs > 0 && !(--refs)) {
	   dispose();
		 dispose = null;
  }
};
if(false) { var lastRefs; }

/***/ }),

/***/ "./src/components/loading-overlay/index.js":
/*!*************************************************!*\
  !*** ./src/components/loading-overlay/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingOverlay; });
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choo/html */ "./node_modules/choo/html/index.js");
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choo_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choo/component */ "./node_modules/choo/component/index.js");
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choo_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/loading-overlay/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/merge */ "./src/utils/merge.js");





class LoadingOverlay extends choo_component__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.local = state.components[id] = Object(_utils_merge__WEBPACK_IMPORTED_MODULE_3__["default"])([{
      assetsPathPrefix: '',
      visible: true
    }, state.components && state.components[id] ? state.components[id] : {}]);
    _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.use();
  }

  load (element) {
    
  }

  update () {
    return true;
  }

  createElement () {
    const l = this.local;
    const sl = _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.locals;
    return choo_html__WEBPACK_IMPORTED_MODULE_0___default.a`
    <div class="absolute top-0 left-0 w-100 h-100 tc v-mid bg-black o-60 ${sl['loading-overlay']} ${l.visible ? '' : sl['fade-out']}" style="z-index:100">
      <div class="dib v-mid o-80 ${sl['loader-anim']}"></div>
    </div>`;
  }
}


/***/ }),

/***/ "./src/components/loading-overlay/style.css":
/*!**************************************************!*\
  !*** ./src/components/loading-overlay/style.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/components/loading-overlay/style.css");
var options = {"singleton":true,"hmr":true};
options.insertInto = undefined;

if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) exports.locals = content.locals;

exports.use = exports.ref = function() {
	if(!(refs++)) {
		dispose = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
	}

	return exports;
};

exports.unuse = exports.unref = function() {
  if(refs > 0 && !(--refs)) {
	   dispose();
		 dispose = null;
  }
};
if(false) { var lastRefs; }

/***/ }),

/***/ "./src/components/map/assets-manifest.js":
/*!***********************************************!*\
  !*** ./src/components/map/assets-manifest.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (assetsPathPrefix) => ({
  'hexgrid.geojson': {
    type: 'text',
    src: assetsPathPrefix + 'hexgrid.geojson',
    parser: JSON.parse
  },
  'destinations.geojson': {
    type: 'text',
    src: assetsPathPrefix + 'destinations.geojson',
    parser: JSON.parse
  },
  'katowice-polygon.geojson': {
    type: 'text',
    src: assetsPathPrefix + 'katowice-polygon.geojson',
    parser: JSON.parse
  }
});


/***/ }),

/***/ "./src/components/map/hex-color.js":
/*!*****************************************!*\
  !*** ./src/components/map/hex-color.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hexColor; });
/* harmony import */ var _hex_duration_mood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hex-duration-mood */ "./src/components/map/hex-duration-mood.js");
/* harmony import */ var _hex_duration_mood__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hex_duration_mood__WEBPACK_IMPORTED_MODULE_0__);


const color = [
  'hsl(244, 61%, 48%)',
  'rgb(158,155,255)',
  'rgb(255,169,163)',
  'rgb(255,65,51)'
];

function hexColor (mode, duration) {
  return color[_hex_duration_mood__WEBPACK_IMPORTED_MODULE_0___default()(mode, duration)];
}


/***/ }),

/***/ "./src/components/map/hex-duration-mood.js":
/*!*************************************************!*\
  !*** ./src/components/map/hex-duration-mood.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const findBin = __webpack_require__(/*! ../../utils/find-bin */ "./src/utils/find-bin.js");

function hexDurationMood (mode, duration) {
  let bins = [ Number.MIN_SAFE_INTEGER, 17, 37, 58, Number.MAX_SAFE_INTEGER ];
  if (mode === 'driving') {
    bins = [ Number.MIN_SAFE_INTEGER, 16, 22, 30, Number.MAX_SAFE_INTEGER ];
    //  [ '<= 16 min', '16 - 22 min', '23 - 30 min', '> 30 min' ];
  } else if (mode === 'diff') {
    bins = [ Number.MIN_SAFE_INTEGER, -1, 0, Number.MAX_SAFE_INTEGER ];
    // 0 - ciemnoniebieski (szybciej komunikacją)
    // 1 - jasnoniebieski (bez różnicy)
    // 2 - jasnoczerwony (szybciej samochodem)
  }
  return findBin(bins, duration, true);
}

module.exports = hexDurationMood;


/***/ }),

/***/ "./src/components/map/index.js":
/*!*************************************!*\
  !*** ./src/components/map/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choo/html */ "./node_modules/choo/html/index.js");
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choo_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choo/component */ "./node_modules/choo/component/index.js");
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choo_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var resl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resl */ "./node_modules/resl/index.js");
/* harmony import */ var resl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(resl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _turf_distance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @turf/distance */ "./node_modules/@turf/distance/index.js");
/* harmony import */ var _turf_distance__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_turf_distance__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/index.js");
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_turf_helpers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _turf_centroid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @turf/centroid */ "./node_modules/@turf/centroid/index.js");
/* harmony import */ var _turf_centroid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_turf_centroid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @turf/boolean-point-in-polygon */ "./node_modules/@turf/boolean-point-in-polygon/index.js");
/* harmony import */ var _turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/merge */ "./src/utils/merge.js");
/* harmony import */ var _layer_katowice_polygon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layer-katowice-polygon */ "./src/components/map/layer-katowice-polygon.js");
/* harmony import */ var _layer_hexgrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layer-hexgrid */ "./src/components/map/layer-hexgrid.js");
/* harmony import */ var _layer_selection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layer-selection */ "./src/components/map/layer-selection.js");
/* harmony import */ var _hex_color__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hex-color */ "./src/components/map/hex-color.js");
/* harmony import */ var _hex_duration_mood__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hex-duration-mood */ "./src/components/map/hex-duration-mood.js");
/* harmony import */ var _hex_duration_mood__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_hex_duration_mood__WEBPACK_IMPORTED_MODULE_12__);















const defaultCenter = [19.023632, 50.234461];
const defaultZoom = 11;

class Map extends choo_component__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.local = state.components[id] = Object(_utils_merge__WEBPACK_IMPORTED_MODULE_7__["default"])([{
      assetsPathPrefix: '',
      style: 'mapbox://styles/mapbox/light-v9',
      center: defaultCenter,
      zoom: defaultZoom,
      minZoom: null,
      maxZoom: null,
      maxBounds: null,
      mapLoading: true,
      assetsLoading: true,
      hilightFeatureAt: null,
      destinations: [],
      destinationId: null,
      mode: 'transit'
    }, state.components && state.components[id] ? state.components[id] : {}]);
    this.assets = {};

    this._currentDestinationId = this.local.destinationId;
    this._currentMode = this.local.mode;
    this._currentCenter = this.local.center;

    this._isFeatureSelected = false;
  }

  load (element) {
    mapboxgl.accessToken = this.local.mapboxAccessToken;
    this.map = new mapboxgl.Map({
      container: element,
      style: this.local.style,
      center: this.local.center,
      zoom: this.local.zoom,
      minZoom: this.local.minZoom,
      maxZoom: this.local.maxZoom,
      maxBounds: this.local.maxBounds
    });
    this.map.scrollZoom.disable();
    const nav = new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: true
    });
    this.map.addControl(nav, 'top-right');

    this.map.on('mouseenter', 'hexgrid', () => {
      this.map.getCanvas().style.cursor = 'pointer';
    });
    this.map.on('mouseleave', 'hexgrid', () => {
      this.map.getCanvas().style.cursor = '';
    });
    let fdTimeout = null;
    this.map.on('click', (e) => {
      this._isFeatureSelected = false;
      this.local.hilightFeatureAt = null;
      this.emit(`${this.id}:mapClick`);
      if (fdTimeout) clearTimeout(fdTimeout);
      fdTimeout = setTimeout(() => {
        if (!this._isFeatureSelected) {
          let geojson = Object(_layer_selection__WEBPACK_IMPORTED_MODULE_10__["default"])('selection').source.data;
          this.map.getSource('selection').setData(geojson);
          this.emit(`${this.id}:featureDeselect`);
        }
      }, 100);
    });
    this.map.on('click', 'hexgrid', (e) => {
      const feature = e.features[0];
      this._isFeatureSelected = feature;

      let geojson = Object(_layer_selection__WEBPACK_IMPORTED_MODULE_10__["default"])('selection').source.data;
      geojson.features[0].geometry.coordinates = feature.geometry.coordinates[0].slice();
      this.map.getSource('selection').setData(geojson);

      this.local.center = _turf_centroid__WEBPACK_IMPORTED_MODULE_5___default()(feature.geometry).geometry.coordinates;

      this.emit(`${this.id}:featureClick`, feature);
    });

    this.map.on('load', () => {
      this.local.mapLoading = false;
      this.emit('map:load');
      this._loadAssets();
    });
  }

  update () {
    if (this.local.mode !== this._currentMode || this.local.destinationId !== this._currentDestinationId) {
      this.setDestination(this.local.mode, this.local.destinationId);
    }
    if (this.local.hilightFeatureAt) {
      let geojson = Object(_layer_selection__WEBPACK_IMPORTED_MODULE_10__["default"])('selection').source.data;
      this.map.getSource('selection').setData(geojson);
      // find feature
      const features = this.assets['hexgrid.geojson'].features;
      let feature = null;
      const pt = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_4__["point"])(this.local.hilightFeatureAt);
      for (let i = 0; i < features.length; i++) {
        const f = features[i];
        if (_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_6___default()(pt, f.geometry)) {
          feature = f;
          break;
        }
      }

      if (feature) {
        geojson.features[0].geometry.coordinates = feature.geometry.coordinates[0].slice();
        this.map.getSource('selection').setData(geojson);
        this.local.center = _turf_centroid__WEBPACK_IMPORTED_MODULE_5___default()(feature.geometry).geometry.coordinates;
        this.emit(`${this.id}:featureClick`, feature);
      }
    }
    if (this._currentCenter[0] !== this.local.center[0] || this._currentCenter[1] !== this.local.center[1]) {
      this.setHilight(this.local.center);
    }

    return false;
  }

  createElement () {
    return choo_html__WEBPACK_IMPORTED_MODULE_0___default.a`<div class="w-100 h-100"></div>`;
  }

  _loadAssets () {
    resl__WEBPACK_IMPORTED_MODULE_2___default()({
      manifest: __webpack_require__(/*! ./assets-manifest */ "./src/components/map/assets-manifest.js")(this.local.assetsPathPrefix),
      onDone: (assets) => {
        this.assets = Object(_utils_merge__WEBPACK_IMPORTED_MODULE_7__["default"])([this.assets, assets]);
        this._loadAssets2();
      },
      onProgress: (progress, message) => {
        if (true) {
          console.log((progress * 100) + '%');
        }
      },
      onError: (err) => {
        console.error(err);
        this.emit('map:fatalError');
      }
    });
  }

  _loadAssets2 () {
    /**
     * Prepare list of destinations
     */
    this.local.destinations = this.assets['destinations.geojson'].features.map((f) => {
      return { label: f.properties['place_name'], id: f.properties['place-id'] };
    });

    let manifestArr = this.local.destinations.map((dest) => { return { type: 'text', src: `destinations-data/${dest.id}-transit.json`, parser: JSON.parse }; });
    manifestArr = manifestArr.concat(this.local.destinations.map((dest) => { return { type: 'text', src: `destinations-data/${dest.id}-driving.json`, parser: JSON.parse }; }));
    manifestArr = manifestArr.concat(this.local.destinations.map((dest) => { return { type: 'text', src: `destinations-data/${dest.id}-bicycle.json`, parser: JSON.parse }; }));

    let manifest = {};
    manifestArr.forEach((a) => {
      const name = a.src + '';
      manifest[name] = a;
      manifest[name].src = this.local.assetsPathPrefix + manifest[name].src;
    });
    
    resl__WEBPACK_IMPORTED_MODULE_2___default()({
      manifest,
      onDone: (assets) => {
        this.assets = Object(_utils_merge__WEBPACK_IMPORTED_MODULE_7__["default"])([this.assets, assets]);
        this.local.assetsLoading = false;
        this.emit('map:assetsLoad', this.assets);
        this._prepareData(this.assets);
      },
      onProgress: (progress, message) => {
        if (true) {
          console.log((progress * 100) + '%');
        }
      },
      onError: (err) => {
        console.error(err);
        this.emit('map:fatalError');
      }
    });
  }

  _prepareData (assets) {
    const transparentColor = 'rgba(255, 255, 255, 0.0)';
    /**
     * Process data files and calculate layer colors etc.
     */
    if (this.local.mode === 'diff') {
      this.assets['destinations.geojson'].features.forEach((f) => {
        const placeId = f.properties['place-id'];
        this.assets[`destinations-data/${placeId}-diff.json`] = this.assets[`destinations-data/${placeId}-transit.json`];
        this.assets[`destinations-data/${placeId}-diff.json`].features.forEach((d, i) => {
          const transitDuration = d['duration_value'];
          const drivingDuration = this.assets[`destinations-data/${placeId}-driving.json`].features[i]['duration_value'];
          const transitDurationMinutes = d['duration_value_minutes'];
          const drivingDurationMinutes = this.assets[`destinations-data/${placeId}-driving.json`].features[i]['duration_value_minutes'];
          const durationDiffMinutes = transitDurationMinutes - drivingDurationMinutes;
          const durationDiff = durationDiffMinutes * 60;
          d['transit_duration_text'] = d['duration_text'].toString();
          d['duration_value'] = durationDiff;
          d['duration_value_minutes'] = durationDiffMinutes;
          d['duration_text'] = `${durationDiffMinutes} min`;
          d['transit_duration_value'] = transitDuration;
          d['driving_duration_value'] = drivingDuration;
          d['transit_duration_value_minutes'] = transitDurationMinutes;
          d['driving_duration_value_minutes'] = drivingDurationMinutes;
          d['driving_duration_text'] = this.assets[`destinations-data/${placeId}-driving.json`].features[i]['duration_text'];
          d['tooltip_enabled'] = d['transit_duration_value'] > -1 && d['driving_duration_value'] > -1;
          d.color = d['tooltip_enabled'] ? Object(_hex_color__WEBPACK_IMPORTED_MODULE_11__["default"])('diff', d['duration_value_minutes']) : transparentColor;
          d['duration_mood'] = _hex_duration_mood__WEBPACK_IMPORTED_MODULE_12___default()('diff', d['duration_value_minutes']);
          d['duration_mood'] = d['duration_mood'];
        });
      });
    } else {
      /**
       * Transit and Driving
       */
      this.assets['destinations.geojson'].features.forEach((f) => {
        const placeId = f.properties['place-id'];
        this.assets[`destinations-data/${placeId}-transit.json`].features.forEach((d) => {
          d['tooltip_enabled'] = d['duration_value'] > -1;
          d['duration_text'] = d['duration_text'].toString();
          d.color = d['tooltip_enabled'] ? Object(_hex_color__WEBPACK_IMPORTED_MODULE_11__["default"])('transit', d['duration_value_minutes']) : transparentColor;
          d['duration_mood'] = _hex_duration_mood__WEBPACK_IMPORTED_MODULE_12___default()('transit', d['duration_value_minutes']);
          d['duration_mood'] = d['duration_mood'];
        });
        this.assets[`destinations-data/${placeId}-driving.json`].features.forEach((d) => {
          d['tooltip_enabled'] = d['duration_value'] > -1;
          d['duration_text'] = d['duration_text'].toString();
          d.color = Object(_hex_color__WEBPACK_IMPORTED_MODULE_11__["default"])('driving', d['duration_value_minutes']);
          d['duration_mood'] = d['duration_value'] < 0 ? transparentColor : _hex_duration_mood__WEBPACK_IMPORTED_MODULE_12___default()('transit', d['duration_value_minutes']);
          d['duration_mood'] = d['duration_mood'];
        });
      });
    }

    /**
     * Add katowice boundary to the map
     */
    const katowicePolygonLayer = this.map.addLayer(Object(_layer_katowice_polygon__WEBPACK_IMPORTED_MODULE_8__["default"])(assets['katowice-polygon.geojson']));

    let hexgrid = Object(_layer_hexgrid__WEBPACK_IMPORTED_MODULE_9__["default"])('hexgrid', assets['hexgrid.geojson'], 'visible');
    hexgrid.layerDef.source = hexgrid.sourceDef;
    this.map.addLayer(hexgrid.layerDef, 'airport-label');

    /**
     * Add selection layer
     */
    let hexSelection = Object(_layer_selection__WEBPACK_IMPORTED_MODULE_10__["default"])('selection');
    this.map.addLayer(hexSelection, 'airport-label');

    this.emit('map:ready');
  }

  setDestination (mode, destinationId) {
    const dataSource = `destinations-data/${destinationId}-${mode}.json`;
    if (!this.assets[dataSource]) return;

    let geojson = this.assets['hexgrid.geojson'];
    let data = this.assets[dataSource].features;

    this._currentMode = mode;
    this._currentDestinationId = destinationId;

    for (let i = 0; i < geojson.features.length; i++) {
      const f = geojson.features[i];
      const d = data[i];
      const prop = f.properties;
      prop['color'] = d.color;
      prop['tooltip_enabled'] = d['tooltip_enabled'];
      prop['duration_value'] = d['duration_value'];
      prop['duration_value_minutes'] = d['duration_value_minutes'];
      prop['duration_text'] = d['duration_text'];
      prop['duration_mood'] = d['duration_mood'];
      prop['transit_duration_value'] = d['transit_duration_value'];
      prop['driving_duration_value'] = d['driving_duration_value'];
      prop['transit_duration_text'] = d['transit_duration_text'];
      prop['driving_duration_text'] = d['driving_duration_text'];

      if (this._isFeatureSelected && this._isFeatureSelected.properties['cell-id'] === f.properties['cell-id']) {
        this._isFeatureSelected = f;
        this.emit(this.id + ':featureClick', this._isFeatureSelected);
      }
    }

    this.map.getSource('hexgrid').setData(geojson);
    this.emit(this.id + ':destinationSet', { mode, destinationId, properties: this.assets[dataSource].properties });
  }

  setHilight (coordinates, label) {
    function polyInOut (t) {
      const e = 4.0;
      return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
    }

    let coord = defaultCenter;
    let targetZoom = 13.5;
    if (coordinates) {
      targetZoom = 13.5;
      coord = coordinates.slice();
    } else {
      targetZoom = defaultZoom;
    }
    const currentZoom = this.map.getZoom();
    let d = 1.0;
    if (this._currentCenter) {
      d = _turf_distance__WEBPACK_IMPORTED_MODULE_3___default()(Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_4__["point"])(this._currentCenter), Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_4__["point"])(coord));
    }
    let speed = 0.2 * d;
    this._currentCenter = coord.slice();
    this.map.flyTo({
      center: this._currentCenter,
      zoom: targetZoom,
      screenSpeed: speed,
      easing: polyInOut,
      curve: 1
    });
    this.local.center = this._currentCenter.slice();
  }

}


/***/ }),

/***/ "./src/components/map/layer-hexgrid.js":
/*!*********************************************!*\
  !*** ./src/components/map/layer-hexgrid.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return layerHexgrid; });
function layerHexgrid (layerId, geojson, data, visibility = 'visible') {
  geojson['features'].forEach((o) => {
    if (!o['properties'].hasOwnProperty('cell-id')) {
      return;
    }
    o['properties']['color'] = '#FFFFFF';
  });

  return {
    sourceId: layerId + '-source',
    sourceDef: {
      'type': 'geojson',
      'data': geojson
    },
    layerDef: {
      'id': layerId,
      'type': 'fill',
      'source': layerId + '-source',
      'layout': {
        'visibility': visibility
      },
      'paint': {
        'fill-opacity': 0.6,
        'fill-color': {
          'property': 'color',
          'type': 'identity'
        },
        'fill-outline-color': '#ffffff'
      }
    }
  };
}


/***/ }),

/***/ "./src/components/map/layer-katowice-polygon.js":
/*!******************************************************!*\
  !*** ./src/components/map/layer-katowice-polygon.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return layerKatowicePolygon; });
function layerKatowicePolygon (geojson) {
  return {
    'id': 'katowice-polygon',
    'type': 'fill',
    'source': {
      'type': 'geojson',
      'data': geojson
    },
    'layout': {},
    'paint': {
      'fill-color': '#2d2d2d',
      'fill-opacity': 0.2
    }
  };
}


/***/ }),

/***/ "./src/components/map/layer-selection.js":
/*!***********************************************!*\
  !*** ./src/components/map/layer-selection.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return layerSelection; });
function layerSelection (layerId, visibility = 'visible') {
  return {
    'id': layerId,
    'type': 'line',
    'source': {
      'type': 'geojson',
      'data': {
        "type":"FeatureCollection",
        "features":[
          {
            "type":"Feature",
            "properties":{},
            "geometry": {
              "type":"LineString",
              "coordinates":[[0, 0]]
            }
          }
        ]
      }
    },
    'layout': {
      'visibility': visibility
    },
    'paint': {
      'line-color': 'rgba(0,0,0,1)',
      'line-width': 2
    }
  
  };
}


/***/ }),

/***/ "./src/components/mode-switch/bicycle-blue.svg":
/*!*****************************************************!*\
  !*** ./src/components/mode-switch/bicycle-blue.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/components/mode-switch/bicycle-blue.svg?27fb5bba20bd738ed32fcf90bd3b7897";

/***/ }),

/***/ "./src/components/mode-switch/car-blue.svg":
/*!*************************************************!*\
  !*** ./src/components/mode-switch/car-blue.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/components/mode-switch/car-blue.svg?756b5c8213dfbd4e6e56b2f58ade7004";

/***/ }),

/***/ "./src/components/mode-switch/index.js":
/*!*********************************************!*\
  !*** ./src/components/mode-switch/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModeSwitch; });
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choo/html */ "./node_modules/choo/html/index.js");
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choo_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choo_html_raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choo/html/raw */ "./node_modules/choo/html/raw.js");
/* harmony import */ var choo_html_raw__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choo_html_raw__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! choo/component */ "./node_modules/choo/component/index.js");
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choo_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/components/mode-switch/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/merge */ "./src/utils/merge.js");
/* harmony import */ var nanostate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nanostate */ "./node_modules/nanostate/index.js");
/* harmony import */ var nanostate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nanostate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tram_blue_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tram-blue.svg */ "./src/components/mode-switch/tram-blue.svg");
/* harmony import */ var _tram_blue_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tram_blue_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _car_blue_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./car-blue.svg */ "./src/components/mode-switch/car-blue.svg");
/* harmony import */ var _car_blue_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_car_blue_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _bicycle_blue_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bicycle-blue.svg */ "./src/components/mode-switch/bicycle-blue.svg");
/* harmony import */ var _bicycle_blue_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_bicycle_blue_svg__WEBPACK_IMPORTED_MODULE_8__);











class ModeSwitch extends choo_component__WEBPACK_IMPORTED_MODULE_2___default.a {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.isDirty = false;
    this.local = state.components[id] = Object(_utils_merge__WEBPACK_IMPORTED_MODULE_4__["default"])([{
      enabled: true,
      assetsPathPrefix: '',
      visible: false,
      value: 'transit'
    }, state.components && state.components[id] ? state.components[id] : {}]);
    _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.use();
  }

  load (element) {
    
  }

  update () {
    return true;
  }

  createElement () {
    const l = this.local;
    const sl = _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.locals;

    if (!l.enabled) return choo_html__WEBPACK_IMPORTED_MODULE_0___default.a`<div class="fl pr0 pt3 ${_style_css__WEBPACK_IMPORTED_MODULE_3___default.a.locals['mode-switch']}"  style="${l.visible ? '' : 'visibility:hidden'}"></div>`;

    const onClick = (e) => {
      const value = e.currentTarget.getAttribute('data-toggle-value');
      l.value = value;
      this.isDirty = true;
      this.rerender();
      this.emit(`${this.id}:valueChange`, value);
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    return choo_html__WEBPACK_IMPORTED_MODULE_0___default.a`
    <div class="fl pr0 pt3 ${_style_css__WEBPACK_IMPORTED_MODULE_3___default.a.locals['mode-switch']}"  style="${l.visible ? '' : 'visibility:hidden'}">
      <a data-toggle-value="bicycle" class="pl0 pr0 fl ${l.value === 'bicycle' ? sl['active'] : ''}" href="#" onclick=${onClick}><img src="${l['assetsPathPrefix'] + _bicycle_blue_svg__WEBPACK_IMPORTED_MODULE_8___default.a}" width="60" height="29"></a>
      <a data-toggle-value="transit" class="pl0 pr2 fl ${l.value === 'transit' ? sl['active'] : ''}" href="#" onclick=${onClick}><img src="${l['assetsPathPrefix'] + _tram_blue_svg__WEBPACK_IMPORTED_MODULE_6___default.a}" width="60" height="29"></a>
      <a data-toggle-value="driving" class="pl0 pr0 fl ${l.value === 'driving' ? sl['active'] : ''}" href="#" onclick=${onClick}><img src="${l['assetsPathPrefix'] + _car_blue_svg__WEBPACK_IMPORTED_MODULE_7___default.a}" width="60" height="29"></a>
    </div>`;
  }
}


/***/ }),

/***/ "./src/components/mode-switch/style.css":
/*!**********************************************!*\
  !*** ./src/components/mode-switch/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/components/mode-switch/style.css");
var options = {"singleton":true,"hmr":true};
options.insertInto = undefined;

if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) exports.locals = content.locals;

exports.use = exports.ref = function() {
	if(!(refs++)) {
		dispose = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
	}

	return exports;
};

exports.unuse = exports.unref = function() {
  if(refs > 0 && !(--refs)) {
	   dispose();
		 dispose = null;
  }
};
if(false) { var lastRefs; }

/***/ }),

/***/ "./src/components/mode-switch/tram-blue.svg":
/*!**************************************************!*\
  !*** ./src/components/mode-switch/tram-blue.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/components/mode-switch/tram-blue.svg?0606a7bf73e89dde62be99d6ab32d855";

/***/ }),

/***/ "./src/components/tooltip-diff/index.js":
/*!**********************************************!*\
  !*** ./src/components/tooltip-diff/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TooltipDiff; });
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choo/html */ "./node_modules/choo/html/index.js");
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choo_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choo_html_raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choo/html/raw */ "./node_modules/choo/html/raw.js");
/* harmony import */ var choo_html_raw__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choo_html_raw__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! choo/component */ "./node_modules/choo/component/index.js");
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choo_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/components/tooltip-diff/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/merge */ "./src/utils/merge.js");
/* harmony import */ var nanostate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nanostate */ "./node_modules/nanostate/index.js");
/* harmony import */ var nanostate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nanostate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_ico_mood_1_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/ico-mood-1.svg */ "./src/images/ico-mood-1.svg");
/* harmony import */ var _images_ico_mood_1_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_ico_mood_1_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_ico_mood_2_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/ico-mood-2.svg */ "./src/images/ico-mood-2.svg");
/* harmony import */ var _images_ico_mood_2_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_ico_mood_2_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_ico_mood_3_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/ico-mood-3.svg */ "./src/images/ico-mood-3.svg");
/* harmony import */ var _images_ico_mood_3_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_ico_mood_3_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_ico_mood_4_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/ico-mood-4.svg */ "./src/images/ico-mood-4.svg");
/* harmony import */ var _images_ico_mood_4_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_ico_mood_4_svg__WEBPACK_IMPORTED_MODULE_9__);












class TooltipDiff extends choo_component__WEBPACK_IMPORTED_MODULE_2___default.a {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.isDirty = false;
    this.local = state.components[id] = Object(_utils_merge__WEBPACK_IMPORTED_MODULE_4__["default"])([{
      enabled: false,
      assetsPathPrefix: '',
      visible: false,
      districtName: '',
      addressCount: 0,
      durationValue: 0,
      durationText: '',
      transitDurationText: '',
      drivingDurationText: '',
      durationMood: 0
    }, state.components && state.components[id] ? state.components[id] : {}]);
    _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.use();
  }

  load (element) {
    
  }

  update () {
    return true;
  }

  createElement () {
    const l = this.local;
    const sl = _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.locals;
    const transl = this.state.translation;

    let ico = '';
    if (l.durationMood > -1) ico = _images_ico_mood_1_svg__WEBPACK_IMPORTED_MODULE_6___default.a;
    if (l.durationMood > 0) ico = _images_ico_mood_2_svg__WEBPACK_IMPORTED_MODULE_7___default.a;
    if (l.durationMood > 1) ico = _images_ico_mood_3_svg__WEBPACK_IMPORTED_MODULE_8___default.a;
    if (l.durationMood > 2) ico = _images_ico_mood_4_svg__WEBPACK_IMPORTED_MODULE_9___default.a;

    function formatTimeText (txt) {
        let _txt = txt.replace(' ', '&nbsp;');
        return _txt.toString().replace('hour', 'h').replace('mins', 'min').replace('-', '');
    }

    let info = ``;
    if (l.durationMood === 1) {
      info = transl['tooltip.diffDescriptionEqual'] || `Identyczny czas przejazdu komunikacją publiczną i samochodem (__transitDurationText__)`;
    } else if (l.durationValue > 0) {
      info = transl['tooltip.diffDescriptionSlowerTransit'] || `O <strong>__durationText__ wolniej</strong> komunikacją publiczną (__transitDurationText__) niż samochodem (__drivingDurationText__)`;
    } else {
      info = transl['tooltip.diffDescriptionFasterTransit'] || `O <strong>__durationText__ szybciej</strong> komunikacja publiczna (__transitDurationText__) niż samochodem (__drivingDurationText__)`;
    }

    info = info.replace('__durationText__', formatTimeText(l.durationText));
    info = info.replace('__transitDurationText__', formatTimeText(l.transitDurationText));
    info = info.replace('__drivingDurationText__', formatTimeText(l.drivingDurationText));

    return choo_html__WEBPACK_IMPORTED_MODULE_0___default.a`
    <div class="pt3 pb3 pl2 pr3 ${l.enabled && l.visible ? '' : 'dn'} tooltip-body ${sl['tooltip']}">
      <p class="w-100 bb pb1 ma0" style="border-color: #10069F;">${transl['tooltip.districtLabel'] || ''}<strong>${l.districtName}</strong></p>
      <div class="mv2">
        <p class="pa0 ma0">${choo_html_raw__WEBPACK_IMPORTED_MODULE_1___default()(info)}</p>
      </div>
    </div>`;
  }
}


/***/ }),

/***/ "./src/components/tooltip-diff/style.css":
/*!***********************************************!*\
  !*** ./src/components/tooltip-diff/style.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/components/tooltip-diff/style.css");
var options = {"singleton":true,"hmr":true};
options.insertInto = undefined;

if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) exports.locals = content.locals;

exports.use = exports.ref = function() {
	if(!(refs++)) {
		dispose = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
	}

	return exports;
};

exports.unuse = exports.unref = function() {
  if(refs > 0 && !(--refs)) {
	   dispose();
		 dispose = null;
  }
};
if(false) { var lastRefs; }

/***/ }),

/***/ "./src/components/tooltip/index.js":
/*!*****************************************!*\
  !*** ./src/components/tooltip/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tooltip; });
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choo/html */ "./node_modules/choo/html/index.js");
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choo_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choo_html_raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choo/html/raw */ "./node_modules/choo/html/raw.js");
/* harmony import */ var choo_html_raw__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choo_html_raw__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! choo/component */ "./node_modules/choo/component/index.js");
/* harmony import */ var choo_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choo_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/components/tooltip/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/merge */ "./src/utils/merge.js");
/* harmony import */ var nanostate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nanostate */ "./node_modules/nanostate/index.js");
/* harmony import */ var nanostate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nanostate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_ico_mood_1_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/ico-mood-1.svg */ "./src/images/ico-mood-1.svg");
/* harmony import */ var _images_ico_mood_1_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_ico_mood_1_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_ico_mood_2_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/ico-mood-2.svg */ "./src/images/ico-mood-2.svg");
/* harmony import */ var _images_ico_mood_2_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_ico_mood_2_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_ico_mood_3_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/ico-mood-3.svg */ "./src/images/ico-mood-3.svg");
/* harmony import */ var _images_ico_mood_3_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_ico_mood_3_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_ico_mood_4_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/ico-mood-4.svg */ "./src/images/ico-mood-4.svg");
/* harmony import */ var _images_ico_mood_4_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_ico_mood_4_svg__WEBPACK_IMPORTED_MODULE_9__);












class Tooltip extends choo_component__WEBPACK_IMPORTED_MODULE_2___default.a {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.isDirty = false;
    this.local = state.components[id] = Object(_utils_merge__WEBPACK_IMPORTED_MODULE_4__["default"])([{
      enabled: false,
      assetsPathPrefix: '',
      visible: false,
      districtName: '',
      addressCount: 0,
      durationValue: 0,
      durationText: '',
      durationMood: 0
    }, state.components && state.components[id] ? state.components[id] : {}]);
    _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.use();
  }

  load (element) {
    
  }

  update () {
    return true;
  }

  createElement () {
    const l = this.local;
    const sl = _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.locals;
    const transl = this.state.translation;

    let ico = '';
    if (l.durationMood > -1) ico = _images_ico_mood_1_svg__WEBPACK_IMPORTED_MODULE_6___default.a;
    if (l.durationMood > 0) ico = _images_ico_mood_2_svg__WEBPACK_IMPORTED_MODULE_7___default.a;
    if (l.durationMood > 1) ico = _images_ico_mood_3_svg__WEBPACK_IMPORTED_MODULE_8___default.a;
    if (l.durationMood > 2) ico = _images_ico_mood_4_svg__WEBPACK_IMPORTED_MODULE_9___default.a;

    return choo_html__WEBPACK_IMPORTED_MODULE_0___default.a`
    <div class="pt3 pb3 pl2 pr3 ${l.enabled && l.visible ? '' : 'dn'} tooltip-body ${sl['tooltip']}">
      <p class="w-100 bb pb1 ma0" style="border-color: #10069F;">${transl['tooltip.districtLabel'] || ''}<strong>${l.districtName}</strong></p>
      <div class="mv2">
        <p class="pa0 ma0">${transl['tooltip.addressCountLabel'] || 'adresy w tym obszarze: '}<strong>${l.addressCount}</strong></p>
        <p class="pa0 ma0 fl">${transl['tooltip.durationLabel'] || 'czas dojazdu: '}<strong>${l.durationText.replace('hour', 'h').replace('mins', 'min')}</strong></p><img class="ph1 fl ${sl['ico-mood']}" src=${l['assetsPathPrefix'] + ico}>
      </div>
    </div>`;
  }
}


/***/ }),

/***/ "./src/components/tooltip/style.css":
/*!******************************************!*\
  !*** ./src/components/tooltip/style.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/components/tooltip/style.css");
var options = {"singleton":true,"hmr":true};
options.insertInto = undefined;

if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) exports.locals = content.locals;

exports.use = exports.ref = function() {
	if(!(refs++)) {
		dispose = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
	}

	return exports;
};

exports.unuse = exports.unref = function() {
  if(refs > 0 && !(--refs)) {
	   dispose();
		 dispose = null;
  }
};
if(false) { var lastRefs; }

/***/ }),

/***/ "./src/frontend-app.js":
/*!*****************************!*\
  !*** ./src/frontend-app.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FrontentApp; });
/* harmony import */ var choo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choo */ "./node_modules/choo/index.js");
/* harmony import */ var choo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stores/main */ "./src/stores/main.js");
/* harmony import */ var _views_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/main */ "./src/views/main.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_3__);





_app_css__WEBPACK_IMPORTED_MODULE_3___default.a.use();

class FrontentApp {
  constructor (mapContainer, mapStyle, mapboxAccessToken, translation, assetsPathPrefix, options = { mode: 'transit', searchEnabled: true, initialDestinationIdx: 0 }) {
    this.mapContainer = mapContainer;
    this.app = choo__WEBPACK_IMPORTED_MODULE_0___default()();
    if (true) {
      this.app.use(__webpack_require__(/*! choo-devtools */ "./node_modules/choo-devtools/index.js")());
    }
    this.app.use(_stores_main__WEBPACK_IMPORTED_MODULE_1__["default"]);
    this.app.use((state, emitter) => {
      state.translation = translation;
      state.initialDestinationIdx = !isNaN(options.initialDestinationIdx) ? parseInt(options.initialDestinationIdx) : 0;
      state.components['map'] = {
        assetsPathPrefix,
        mapboxAccessToken,
        style: mapStyle,
        mode: options.mode
      };
      state.components['address-search'] = {
        enabled: options.searchEnabled,
        assetsPathPrefix,
        mapboxAccessToken
      };
      state.components['dropdown'] = {
        assetsPathPrefix
      };
      state.components['loading-overlay'] = {
        assetsPathPrefix
      };
      state.components['mode-switch'] = {
        assetsPathPrefix,
        value: options.mode,
        enabled: options.mode !== 'diff'
      };
      state.components['legend'] = {
        assetsPathPrefix,
        enabled: options.mode !== 'diff'
      };
      state.components['tooltip'] = {
        assetsPathPrefix,
        enabled: options.mode !== 'diff'
      };
      state.components['tooltip-diff'] = {
        assetsPathPrefix,
        enabled: options.mode === 'diff'
      };
    });
    this.app.route('*', _views_main__WEBPACK_IMPORTED_MODULE_2__["default"]);
    this.app.mount(this.mapContainer);
  }

  _loadAssets (assets) {

  }

  _init (assets) {
    
  }

  init () {
    
  }
}


/***/ }),

/***/ "./src/images/ico-mood-1.svg":
/*!***********************************!*\
  !*** ./src/images/ico-mood-1.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/images/ico-mood-1.svg?81d198201d5cf819703b464cc71114e2";

/***/ }),

/***/ "./src/images/ico-mood-2.svg":
/*!***********************************!*\
  !*** ./src/images/ico-mood-2.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/images/ico-mood-2.svg?cbed311ba3ec29d0235fb0cd99d13463";

/***/ }),

/***/ "./src/images/ico-mood-3.svg":
/*!***********************************!*\
  !*** ./src/images/ico-mood-3.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/images/ico-mood-3.svg?33bdab249d7a3bcb44ee98a900b5de69";

/***/ }),

/***/ "./src/images/ico-mood-4.svg":
/*!***********************************!*\
  !*** ./src/images/ico-mood-4.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/images/ico-mood-4.svg?92dadeb30b5ab4210724030e2e3f918a";

/***/ }),

/***/ "./src/stores/main.js":
/*!****************************!*\
  !*** ./src/stores/main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mainStore; });
/* harmony import */ var _turf_centroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/centroid */ "./node_modules/@turf/centroid/index.js");
/* harmony import */ var _turf_centroid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_turf_centroid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _turf_bbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/bbox */ "./node_modules/@turf/bbox/index.js");
/* harmony import */ var _turf_bbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_turf_bbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_map_hex_duration_mood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/map/hex-duration-mood */ "./src/components/map/hex-duration-mood.js");
/* harmony import */ var _components_map_hex_duration_mood__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_map_hex_duration_mood__WEBPACK_IMPORTED_MODULE_2__);




function mainStore (state, emitter) {
  state.translation = {};
  state.components = {};
  state.main = {
    loading: true
  };

  emitter.on('DOMContentLoaded', function () {
    emitter.on('map:load', mapLoad);
    emitter.on('map:assetsLoad', mapAssetsLoad);
    emitter.on('map:ready', mapReady);
    emitter.on('mode-switch:valueChange', modeSwitchValueChange);
    emitter.on('destination:valueChange', destinationValueChange);
    emitter.on('address-search:value', addressSearchValue);
    emitter.on('map:featureClick', mapFeatureClick);
    emitter.on('map:featureDeselect', mapFeatureDeselect);
    emitter.on('map:destinationSet', mapDestinationSet);
  });

  function mapLoad () {
    render();
  }

  function mapAssetsLoad (assets) {
    let initialDestinationIdx = state.initialDestinationIdx;
    
    state.components['destination'].initialIdx = initialDestinationIdx;
    state.components['destination'].items = state.components['map'].destinations.map((d) => [state.translation.destinations[d.id] || d.label, d.id]);
    state.components['destination'].value = state.components['map'].destinations[initialDestinationIdx].id;
    state.components['destination'].text = state.components['map'].destinations[initialDestinationIdx].label;
    state.components['map'].destinationId = state.components['destination'].value;

    const hexgridBBox = _turf_bbox__WEBPACK_IMPORTED_MODULE_1___default()(assets['hexgrid.geojson']);
    state.components['address-search'].bbox = hexgridBBox;
    state.components['address-search'].newBBox = true;

    render();
  }

  function mapReady () {
    state.main.loading = false;
    state.components['loading-overlay'].visible = false;
    state.components['mode-switch'].visible = true;
    state.components['destination'].visible = true;
    state.components['address-search'].visible = true;
    render();
  }

  function modeSwitchValueChange (value) {
    state.components['map'].mode = value;
    render();
  }

  function destinationValueChange (value) {
    state.components['map'].destinationId = value;
    render();
  }

  function addressSearchValue (value, label) {
    state.components['map'].center = value.slice();
    state.components['map'].hilightFeatureAt = value.slice();
    render();
  }

  function mapFeatureClick (feature) {
    const prop = feature.properties;
    const tooltip = state.components['tooltip'].enabled ? state.components['tooltip'] : state.components['tooltip-diff'];
    state.components['address-search'].visible = false;
    tooltip.visible = prop['tooltip_enabled'];
    tooltip.districtName = prop['district_full_text'];
    tooltip.addressCount = prop['address_count'];
    tooltip.durationValue = prop['duration_value'];
    tooltip.durationText = prop['duration_text'];
    tooltip.transitDurationText = prop['transit_duration_text'];
    tooltip.drivingDurationText = prop['driving_duration_text'];
    tooltip.durationMood = _components_map_hex_duration_mood__WEBPACK_IMPORTED_MODULE_2___default()(state.components['map'].mode, prop['duration_value_minutes']);
    render();
  }

  function mapFeatureDeselect () {
    state.components['tooltip'].visible = false;
    state.components['tooltip-diff'].visible = false;
    state.components['address-search'].visible = true;
    state.components['map'].hilightCoordinates = null;
    render();
  }

  function mapDestinationSet (destination) {
    state.components['legend'].values = destination.properties.stats.slice();
    render();
  }

  function render () {
    emitter.emit('render');
  }
}


/***/ }),

/***/ "./src/utils/find-bin.js":
/*!*******************************!*\
  !*** ./src/utils/find-bin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const range = __webpack_require__(/*! @thi.ng/iterators */ "./node_modules/@thi.ng/iterators/index.js").range;

function findBin (bins, value, right = false) {
  const incLeftEdge = (l, v, r) => l <= v && v < r;
  const incRightEdge = (l, v, r) => l < v && v <= r;
  let inBin = right ? incRightEdge : incLeftEdge;
  let ret = [...range(bins.length - 1)].map(() => false);
  for (let i = 0; i < bins.length - 1; i++) {
    ret[i] = inBin(bins[i], value, bins[i + 1]);
  }
  return ret.indexOf(true);
}

module.exports = findBin;


/***/ }),

/***/ "./src/utils/mapbox-api.js":
/*!*********************************!*\
  !*** ./src/utils/mapbox-api.js ***!
  \*********************************/
/*! exports provided: geocode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geocode", function() { return geocode; });
/* harmony import */ var ky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ky */ "./node_modules/ky/index.js");
/* harmony import */ var build_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! build-url */ "./node_modules/build-url/dist/build-url.js");
/* harmony import */ var build_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(build_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merge */ "./src/utils/merge.js");




function makeUrl (accessToken, endpoint, parameters = {}) {
  return build_url__WEBPACK_IMPORTED_MODULE_1___default()('https://api.mapbox.com', {
    path: endpoint,
    queryParams: Object(_merge__WEBPACK_IMPORTED_MODULE_2__["default"])([{ access_token: accessToken }, parameters])
  });
}

/**
 * https://www.mapbox.com/api-playground/#/forward-geocoding
 */
function geocode (accessToken, query, parameters) {
  const endpoint = `geocoding/v5/mapbox.places/${query}.json`;
  const url = makeUrl(accessToken, endpoint, parameters);
  return ky__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, { method: 'GET' });
}


/***/ }),

/***/ "./src/utils/merge.js":
/*!****************************!*\
  !*** ./src/utils/merge.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return merge; });
/**
 * Merges objects keys and values
 * @param {array} objects - Objects to merge from left to right
 * @return {Array.<Object>} The merged object.
 */
function merge (objects) {
  var r = {};
  objects.forEach((o) => {
    Object.keys(o).forEach((k) => {
      r[k] = o[k];
      // TODO: deep copy instead of reference
    });
  });
  return r;
}


/***/ }),

/***/ "./src/views/main.css":
/*!****************************!*\
  !*** ./src/views/main.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/views/main.css");
var options = {"singleton":true,"hmr":true};
options.insertInto = undefined;

if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) exports.locals = content.locals;

exports.use = exports.ref = function() {
	if(!(refs++)) {
		dispose = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
	}

	return exports;
};

exports.unuse = exports.unref = function() {
  if(refs > 0 && !(--refs)) {
	   dispose();
		 dispose = null;
  }
};
if(false) { var lastRefs; }

/***/ }),

/***/ "./src/views/main.js":
/*!***************************!*\
  !*** ./src/views/main.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mainView; });
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choo/html */ "./node_modules/choo/html/index.js");
/* harmony import */ var choo_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choo_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/map */ "./src/components/map/index.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dropdown */ "./src/components/dropdown/index.js");
/* harmony import */ var _components_address_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/address-search */ "./src/components/address-search/index.js");
/* harmony import */ var _components_mode_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/mode-switch */ "./src/components/mode-switch/index.js");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tooltip */ "./src/components/tooltip/index.js");
/* harmony import */ var _components_tooltip_diff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tooltip-diff */ "./src/components/tooltip-diff/index.js");
/* harmony import */ var _components_loading_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/loading-overlay */ "./src/components/loading-overlay/index.js");
/* harmony import */ var _components_legend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/legend */ "./src/components/legend/index.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main.css */ "./src/views/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_9__);












function mainView (state, emit) {
  _main_css__WEBPACK_IMPORTED_MODULE_9___default.a.use();
  const sl = _main_css__WEBPACK_IMPORTED_MODULE_9___default.a.locals;
  const lspfx = 'dg-map-layout';
  return choo_html__WEBPACK_IMPORTED_MODULE_0___default.a`
    <div class="db w-100 h-100 ${lspfx}__container" style="min-width: 320px;">
      <div class="flex flex-wrap-reverse db w-100 ${lspfx}__top-container">
        <div class="fl pl5 pr1 ${sl['mode-switch-container']} ${lspfx}__mode-switch-container">
          ${state.cache(_components_mode_switch__WEBPACK_IMPORTED_MODULE_4__["default"], 'mode-switch').render()}
        </div>
        <div class="fl ph0 ${sl['dropdown-container']} ${lspfx}__destinations-container">
          ${state.cache(_components_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], 'destination').render()}
        </div>
      </div>
      <div class="relative db w-100 h-100 ${lspfx}__middle-container" style="padding-bottom:130px;margin-bottom: -130px;">
        ${state.cache(_components_map__WEBPACK_IMPORTED_MODULE_1__["default"], 'map').render()}
        <div class="absolute top-0 left-0 ${sl['address-search-container']} ${lspfx}__address-search-container">
          ${state.cache(_components_address_search__WEBPACK_IMPORTED_MODULE_3__["default"], 'address-search').render()}
        </div>
        <div class="${sl['tooltip-container']} ${lspfx}__tooltip-container" style="padding-bottom:130px;">
          ${this.state.cache(_components_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], 'tooltip').render()}
          ${this.state.cache(_components_tooltip_diff__WEBPACK_IMPORTED_MODULE_6__["default"], 'tooltip-diff').render()}
        </div>
        ${this.state.cache(_components_loading_overlay__WEBPACK_IMPORTED_MODULE_7__["default"], 'loading-overlay').render()}
      </div>
      <div class="flex flex-wrap-reverse w-100 ph2 pt2 ${lspfx}__bottom-container" style="margin-top:-70px">
        <div class="fl ph1 ${lspfx}__bottom-left-container" style="width: 20rem;"><p> </p></div>
        <div class="fl ph4 db ${sl['legend-container']} ${lspfx}__legend-container">
          ${this.state.cache(_components_legend__WEBPACK_IMPORTED_MODULE_8__["default"], 'legend').render()}
        </div>
      </div>
    </div>
  `;
}


/***/ }),

/***/ 0:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map