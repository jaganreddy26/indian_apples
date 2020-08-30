import { Component, OnInit } from "@angular/core";
import { Otp } from "src/app/shared/entities/Otp";

@Component({
  selector: "app-otp",
  templateUrl: "./otp.component.html",
  styleUrls: ["./otp.component.css"],
})
export class OtpComponent implements OnInit {
  otp: Otp;
  constructor() {
    this.otp = new Otp();
  }

  ngOnInit(): void {}
}
