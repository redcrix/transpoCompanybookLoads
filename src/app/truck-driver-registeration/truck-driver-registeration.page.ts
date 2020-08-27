import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Storage } from "@ionic/storage";
import { CommonService } from "../common.function";
@Component({
  selector: "app-truck-driver-registeration",
  templateUrl: "./truck-driver-registeration.page.html",
  styleUrls: ["./truck-driver-registeration.page.scss"],
})
export class TruckDriverRegisterationPage implements OnInit {
  form_detail: any;

  constructor(
    public api: ApiService,
    private storage: Storage,
    private fb: FormBuilder,
    public loadingController: LoadingController,
    public config: CommonService
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
      OwnerName: [""],
      TruckType: [""],
      OwnerCity: [""],
      TruckOwnerMobile: [""],
      TruckOwnerEmail: [""],
      TruckOwnerAddress: [""],
      RouteOperate: [""],
      PermitState: [""],
      HowManyTrucks: [""],
      InsuranceType: [""],
      OwnerName1: [""],
      TruckType1: [""],
      OwnerCity1: [""],
      TruckOwnerMobile1: [""],
      TruckOwnerEmail1: [""],
      TruckOwnerAddress1: [""],
      RouteOperate1: [""],
      PermitState1: [""],
      HowManyTrucks1: [""],
      InsuranceType1: [""],
      isDriver: ["yes"],
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
          this.config.alert_(res["message"] + ". Please login.");
          this.config.navigate("login");
        }
      },
      (err) => {
        Loading_.dismiss();
        // (err);
      }
    );
  }
}
