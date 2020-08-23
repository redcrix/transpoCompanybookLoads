import { Injectable } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  options: any = {};
  Apiurl: any;
  constructor(
    public alertController: AlertController,
    public navCtrl: NavController
  ) {}

  async alert_(m) {
    const alert = await this.alertController.create({
      header: "",
      message: m,

      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            // ('Confirm Cancel: blah');
          },
        },
      ],
    });

    await alert.present();
  }

  async navigate(page) {
    this.navCtrl.navigateForward(page);
  }
}
