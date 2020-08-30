import { Component, OnInit } from "@angular/core";
import { Signin } from "../../../shared/entities/Signin";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent implements OnInit {
  signin: Signin;
  constructor() {
    this.signin = new Signin();
  }

  ngOnInit(): void {}
  onSubmit(signinForm: NgForm) {
    console.log(signinForm.value);
  }
}
