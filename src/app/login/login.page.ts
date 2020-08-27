import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { LoadingController, NavController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Storage } from "@ionic/storage";
import { CommonService } from "../common.function";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  form_detail: any;
  message = "";
  constructor(
    public api: ApiService,
    private storage: Storage,
    private fb: FormBuilder,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public config: CommonService
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
        this.message = res["message"];

        if (this.message == "LoggedIn") {
          this.config.storageSave("LoggedIn", "LoggedIn");
          this.config.storageSave("user", res["user"]);
          this.config.storageSave("user_id", res["user_id"]);
          this.config.storageSave("isDriver", res["isDriver"]);
          this.config.navigate("home");
        }
      },
      (err) => {
        Loading_.dismiss();
        // (err);
      }
    );
  }

  register() {
    this.navCtrl.navigateForward("/user-registeration");
  }

  forgotton() {
    this.navCtrl.navigateForward("/password-reset");
  }
  goToHome() {
    this.navCtrl.navigateForward("/home");
  }
}
