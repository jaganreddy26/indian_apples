import { Component, OnInit } from "@angular/core";
import { Forgot } from "../../../shared/entities/forgot";
@Component({
  selector: "app-forgot",
  templateUrl: "./forgot.component.html",
  styleUrls: ["./forgot.component.css"],
})
export class ForgotComponent implements OnInit {
  forgot: Forgot;
  constructor() {
    this.forgot = new Forgot();
  }

  ngOnInit(): void {}
}
