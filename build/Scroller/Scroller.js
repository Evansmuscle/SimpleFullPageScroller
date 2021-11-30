'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var Scroller = function (_a) {
    var children = _a.children;
    var _b = React.useState(window.scrollY), y = _b[0], setY = _b[1];
    var _c = React.useState(0), currentSection = _c[0], setCurrentSection = _c[1];
    var arrayChildren = Array.isArray(children) ? __spreadArrays(children) : [children];
    var height = window.innerHeight;
    React.useEffect(function () {
        window.addEventListener("scroll", scrollHandler);
    }, []);
    var scrollHandler = React.useCallback(function (event) {
        var window = event.currentTarget;
        if (y > (window === null || window === void 0 ? void 0 : window.scrollY)) {
            if (currentSection !== 0) {
                window.scrollBy(0, -height);
                setCurrentSection(currentSection - 1);
            }
        }
        if (y < (window === null || window === void 0 ? void 0 : window.scrollY)) {
            if (currentSection !== arrayChildren.length - 1) {
                window.scrollBy(0, height);
                setCurrentSection(currentSection + 1);
            }
        }
        setY(window.scrollY);
    }, [y]);
    return React__default["default"].createElement(React__default["default"].Fragment, null, children);
};

exports["default"] = Scroller;
//# sourceMappingURL=Scroller.js.map
