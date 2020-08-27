import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { LoadingController } from "@ionic/angular";
import { CommonService } from "../common.function";
import { ApiService } from "../api.service";

@Component({
  selector: "app-user-registeration",
  templateUrl: "./user-registeration.page.html",
  styleUrls: ["./user-registeration.page.scss"],
})
export class UserRegisterationPage implements OnInit {
  form_detail: any;
  register_done = false;
  constructor(
    public config: CommonService,
    public api: ApiService,
    private fb: FormBuilder,
    public loadingController: LoadingController
  ) {
    this.form_detail = this.fb.group({
      username: ["", Validators.required],
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", Validators.email],
      phone: ["", Validators.required],
      country: [""],
      companyName: [""],
      AlternatePersonName: [""],
      AlternatePersonContact: [""],
      PanNumber: [""],
      isDriver: ["no"],
    });
  }

  ngOnInit() {}

  async Add_New_registeration() {
    let Loading_ = await this.loadingController.create({
      message: "Please wait...",
      translucent: true,
      cssClass: "custom-class custom-loading",
    });
    await Loading_.present();

    await this.api.signup("signup", this.form_detail.value).subscribe(
      (res) => {
        Loading_.dismiss();

        if (res["success"] == 0) {
          this.config.alert_(res["message"]);
        }
        if (res["success"] == 1) {
          this.form_detail.value = {};
          this.config.navigate("home");
        }
      },
      (err) => {
        Loading_.dismiss();
        // (err);
      }
    );
  }
}
