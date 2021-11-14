"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Stats.css");
var Stats = function (_a) {
    var total = _a.total, completed = _a.completed;
    return (react_1["default"].createElement("div", { className: "Stats" },
        react_1["default"].createElement("p", { className: "Stats__item" },
            react_1["default"].createElement("span", { className: "Stats__value" }, total),
            react_1["default"].createElement("span", { className: "Stats__label" }, "\u0412\u0441\u0435\u0433\u043E")),
        react_1["default"].createElement("p", { className: "Stats__item" },
            react_1["default"].createElement("span", { className: "Stats__value" }, completed),
            react_1["default"].createElement("span", { className: "Stats__label" }, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E"))));
};
exports["default"] = Stats;
