"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Goal_1 = require("./Goal");
var waterGoal = /** @class */ (function (_super) {
    __extends(waterGoal, _super);
    function waterGoal(goalAmount) {
        var _this = _super.call(this) || this;
        // private  currentAmount: number = 0;
        _this.goalAmount = 0;
        _this.goalType = "Liters";
        _this.goalAmount = goalAmount;
        return _this;
    }
    waterGoal.prototype.getGoalType = function () {
        return this.goalType;
    };
    // getCurrentAmount(): number {
    //     return this.currentAmount;
    // }
    waterGoal.prototype.getGoalAmount = function () {
        return this.goalAmount;
    };
    return waterGoal;
}(Goal_1.default));
exports.default = waterGoal;
