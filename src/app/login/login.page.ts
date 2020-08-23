import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  form_detail: any;

  constructor(
    public api: ApiService,
    private storage: Storage,
    private fb: FormBuilder,
    public loadingController: LoadingController
  ) {
    this.form_detail = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {}

  async Login_() {
    let Loading_ = await this.loadingController.create({
      message: "Please wait...",
      translucent: true,
      cssClass: "custom-class custom-loading",
    });
    await Loading_.present();

    let send = {
      username: this.form_detail.value.username,
      password: this.form_detail.value.password,
      device_token: "",
      device_os: "",
    };

    await this.api.Login("login", send).subscribe(
      (res) => {
        Loading_.dismiss();
        // let ob = JSON.parse(JSON.stringify(res));

        // this.ActiveLast = Object.values(ob['response']['all_membership']);
      },
      (err) => {
        Loading_.dismiss();
        // (err);
      }
    );
  }
}
