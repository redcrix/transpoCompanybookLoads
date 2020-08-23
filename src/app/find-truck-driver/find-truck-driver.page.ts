import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-find-truck-driver",
  templateUrl: "./find-truck-driver.page.html",
  styleUrls: ["./find-truck-driver.page.scss"],
})
export class FindTruckDriverPage implements OnInit {
  drivers_list: any;

  constructor(
    public api: ApiService,
    private storage: Storage,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.get_all_drivers();
  }

  async get_all_drivers() {
    let Loading_ = await this.loadingController.create({
      message: "Please wait...",
      translucent: true,
      cssClass: "custom-class custom-loading",
    });
    await Loading_.present();

    await this.api.get_all_drivers("get_all_drivers").subscribe(
      (res) => {
        Loading_.dismiss();
        console.log(res);

        this.drivers_list = res["data"];
      },
      (err) => {
        Loading_.dismiss();
        // (err);
      }
    );
  }
}
