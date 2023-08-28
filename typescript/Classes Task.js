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
var Account = /** @class */ (function () {
    function Account(accNum, balance) {
        this.accNum = accNum;
        this.balance = balance;
    }
    Account.prototype.debitAmount = function () {
        console.log(this.accNum);
    };
    Account.prototype.creditAmount = function () {
        console.log(this.accNum);
    };
    Account.prototype.getBalance = function () {
        console.log(this.balance);
    };
    return Account;
}());
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(interestRate, accNum, balance) {
        var _this = _super.call(this, accNum, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    return CurrentAccount;
}(Account));
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(minBalance, accNum, balance) {
        var _this = _super.call(this, accNum, balance) || this;
        _this.minBalance = minBalance;
        return _this;
    }
    return SavingAccount;
}(Account));
