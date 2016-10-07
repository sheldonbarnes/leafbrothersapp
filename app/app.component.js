"use strict";
var core_1 = require("@angular/core");
var TNSPhone = require("nativescript-phone");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
    }
    AppComponent.prototype.callLeaf = function () {
        //var phone = require("nativescript-phone");
        //phone.dial("317-550-1117", false);
        TNSPhone.dial("317-550-1117", false);
        console.log('Calling');
    };
    AppComponent.prototype.smsLeaf = function () {
        TNSPhone.sms(['317-550-1117'], "Can you pickup my leaves: My address is")
            .then(function (args) {
            console.log(JSON.stringify(args));
        }, function (err) {
            console.log('Error: ' + err);
        });
    };
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map