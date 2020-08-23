import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  public appPages = [
    {
      title: "Login",
      url: "/login",
      icon: "home",
    },

    {
      title: "Home",
      url: "/home",
      icon: "home",
    },
    // for user
    {
      title: "Find Transporters",
      url: "/find-truck-driver",
      icon: "list",
    },

    {
      title: "Available Trucks",
      url: "/find-trucks",
      icon: "home",
    },

    {
      title: "Post Load",
      url: "/post-load",
      icon: "list",
    },

    // for company

    {
      title: "Find Load",
      url: "/find-load",
      icon: "home",
    },

    {
      title: "Get estimates",
      url: "/get-estimates",
      icon: "list",
    },

    {
      title: "Truck Driver Register",
      url: "/truck-driver-registeration",
      icon: "list",
    },
    {
      title: "Customer Registeration",
      url: "/user-registeration",
      icon: "list",
    },
    {
      title: "Calculate Freight",
      url: "/list",
      icon: "list",
    },
    {
      title: "Post Driver Vacancy",
      url: "/list",
      icon: "list",
    },
    {
      title: "How it works?",
      url: "/list",
      icon: "list",
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
