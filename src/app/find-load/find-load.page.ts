import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-find-load",
  templateUrl: "./find-load.page.html",
  styleUrls: ["./find-load.page.scss"],
})
export class FindLoadPage implements OnInit {
  All_load: any;
  ViewOne = true;
  constructor(
    public api: ApiService,
    private storage: Storage,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.get_loads();
  }

  async get_loads() {
    let Loading_ = await this.loadingController.create({
      message: "Please wait...",
      translucent: true,
      cssClass: "custom-class custom-loading",
    });
    await Loading_.present();

    await this.api.get_data("get_loads").subscribe(
      (res) => {
        Loading_.dismiss();
        console.log(res);
        this.All_load = res["data"];
      },
      (err) => {
        Loading_.dismiss();
      }
    );
  }

  viewThis() {
    this.ViewOne = false;
  }
}
