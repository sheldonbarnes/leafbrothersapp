import {Component} from "@angular/core";
import * as TNSPhone from "nativescript-phone";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

    public callLeaf() {
      //var phone = require("nativescript-phone");
      //phone.dial("317-550-1117", false);
      TNSPhone.dial("317-550-1117", false);
      console.log('Calling');
    }
    public smsLeaf() {
      TNSPhone.sms(['317-550-1117'], "Can you pickup my leaves: My address is")
          .then((args) => {
              console.log(JSON.stringify(args));
          }, (err) => {
              console.log('Error: ' + err);
          })
    }

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }

    public onTap() {
        this.counter--;
    }
}
