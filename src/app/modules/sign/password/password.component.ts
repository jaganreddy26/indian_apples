import { Component, OnInit } from "@angular/core";
import { Password } from "../../../shared/entities/Password";
@Component({
  selector: "app-password",
  templateUrl: "./password.component.html",
  styleUrls: ["./password.component.css"],
})
export class PasswordComponent implements OnInit {
  password: Password;
  constructor() {
    this.password = new Password();
  }

  ngOnInit(): void {}
}
