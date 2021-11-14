"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Filter.css");
var Filter = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return (react_1["default"].createElement("div", { className: "Filter" },
        react_1["default"].createElement("p", { className: "Filter__label" }, "\u0424\u0438\u043B\u044C\u0442\u0440 \u043F\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u043C\u0443"),
        react_1["default"].createElement("input", { className: "Filter__input", type: "text", value: value, onChange: function (evt) { return onChange(evt.target.value); } })));
};
exports["default"] = Filter;
