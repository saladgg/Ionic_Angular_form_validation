import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  formGroup: FormGroup;

  sources = ["ethiopia", "kenya", "tanzania", "uganda"];
  destinations = ["turkey", "russia", "korea", "china"];

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      senderphone: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]*"),
          Validators.minLength(10),
          Validators.maxLength(12),
          Validators.pattern("")
        ])
      ],
      sendername: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]*"),
          Validators.minLength(3),
          Validators.maxLength(25)
        ])
      ],
      senderidentitynumber: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]*"),
          Validators.minLength(6),
          Validators.maxLength(10)
        ])
      ],
      receiverphone: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]*"),
          Validators.minLength(10),
          Validators.maxLength(12),
          Validators.pattern("")
        ])
      ],
      receivername: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]*"),
          Validators.minLength(3),
          Validators.maxLength(25)
        ])
      ],
      sourceid: ["", Validators.required],
      destinationid: ["", Validators.required]
    });
  }

  createData() {
    console.log(this.formGroup.value);
  }
}
