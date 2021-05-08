import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.function";
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { ApiService } from "../api.service";
import {
  MenuController,
  LoadingController,
  NavController,
  Platform,
  ModalController,
} from "@ionic/angular";
// import { NewRegisterPage } from "../../app/signup/new-register/new-register.page";
import { LoginPage } from "../login/login.page";
@Component({
  selector: "app-vendors-listing",
  templateUrl: "./vendors-listing.page.html",
  styleUrls: ["./vendors-listing.page.scss"],
})
export class VendorsListingPage implements OnInit {
  order_create_form: any;
  message: any;
  orders_info: any;
  checkRequestNew = false;
  updateOrderNew = true;
  order_id: any;
  order_Number: any;
  Status_to_Select: any;
  allOrderInfo: any;
  ShowLogo = false;
  FilesData: any;
  filesData = [];
  _userlogged_in = false;
  UserName: any;
  SearchBarShow = true;
  constructor(
    private menu: MenuController,
    private fb: FormBuilder,
    public loadingController: LoadingController,
    public config: CommonService,
    public api: ApiService,
    public platform: Platform,
    public modalController: ModalController
  ) {
    this.order_create_form = this.fb.group({
      subscription_one: [true],
      subscription_two: [false],
      city: ["", Validators.required],
      area: ["", Validators.required],
      pincode: [""],
      country: ["India"],
      contact_no: [
        "",
        Validators.compose([Validators.required, Validators.minLength(10)]),
      ],
      pet_name: ["", Validators.required],
      street: ["", Validators.required],
      landmark: ["", Validators.required],
      email_id: [
        "",
        Validators.compose([Validators.required, Validators.email]),
      ],
      contact_timing: ["", Validators.required],
      plot_no: ["", Validators.required],
      venture_name: [""],
      special_inst: [""],
      whatsapp_no: [""],
      send_images_verify: [""],
      accept_terms: [""],
      due_date: [""],
      lng: [""],
      lat: [""],
      status: ["Active"],
      createdAt: [""],
      orderNo: [""],
    });

    this.getOrders();

    this.Status_to_Select = [
      {
        status: "Completed",
      },
      {
        status: "Processing",
      },
      {
        status: "On the Way",
      },
      {
        status: "Active",
      },
      {
        status: "Rejected",
      },
      {
        status: "Pending",
      },
    ];
  }

  ionViewDidEnter() {
    let user_id_ = JSON.parse(
      this.config.storageGet("user")["__zone_symbol__value"]
    );

    if (user_id_ != undefined) {
      let userName = JSON.parse(
        this.config.storageGet("user")["__zone_symbol__value"]
      );
      this._userlogged_in = true;
      this.UserName = userName.name;
    }

    // this.SearchBarShow = true;
    // this.platform.ready().then(() => {
    //   if (this.platform.width() > 692) {
    //     this.ShowLogo = true;
    //     this.menu.enable(false);
    //   } else {
    //     this.ShowLogo = false;
    //     this.menu.enable(true);
    //   }
    // });
  }

  ngOnInit() {}

  async getOrders() {
    let user_id_ = JSON.parse(
      this.config.storageGet("user")["__zone_symbol__value"]
    );
    console.log(user_id_);

    this.orders_info = [
      {
        files: [],
        _id: "608f8af0b173e98608172b04",
        userId: "608f8840b173e98608172b02",
        name: "dev-user",
        type: "Offline order",
        priceOrSubscription: "3000",
        wpContactNo: 8767867676,
        status: "in-active",
        special_inst: "Special",
        town: "Bengaluru",
        area: "AA",
        pincode: null,
        country: "India",
        customerContactNo: 8767676777,
        reachedMobileNo: 8767676777,
        contactTiming: "2021-05-03T11:01:17.169+05:30",
        propertyPetName: "8767867676",
        street: "987878",
        landmark: "7657656756756",
        mail_id: "sdfsad@aa.com",
        plotNumber: "Flat",
        venture: "Venture",
        send_Images_Confirmation: "true",
        agree_with_terms_Confirmation: "true",
        choose_drone_view: "true",
        order_type: "annual",
        orderNo: 20210500005,
        createdAt: "2021-05-03T05:32:32.598Z",
        __v: 0,
        images: [],
        videos: [],
        reports: [],
      },
    ];
    return;
    if (user_id_ != null) {
      let Loading_ = await this.loadingController.create({
        message: "Please wait...",
        translucent: true,
        cssClass: "custom-class custom-loading",
      });
      await Loading_.present();

      console.log(user_id_._id);
      let id_ = user_id_._id;
      await this.api.get_data("api/" + id_ + "/orders").subscribe(
        (res) => {
          Loading_.dismiss();
          this.message = res;
          this.orders_info = res;
          this.allOrderInfo = res;
          // this.orders_info.sort((val1, val2) => {
          //   return (
          //     new Date(val1.createdAt).getTime() -
          //     new Date(val2.createdAt).getTime()
          //   );
          // });

          this.orders_info = this.orders_info.sort(
            (a, b) => b.createdAt - a.createdAt
          );

          console.log(JSON.stringify(this.message));
        },
        (err) => {
          this.config.alert_("Error");
          Loading_.dismiss();
          console.log(JSON.stringify(err));
        }
      );
    } else {
      this.config.presentToast("Login again");
    }
  }

  async goTo(p) {
    // this.config.navigate(p);
    if (p == "1") {
      this.config.navigate("home");
    }
    if (p == "2") {
      this.checkRequestNew = false;
      this.config.navigate("order-status");
    }
    if (p == "3") {
      this.config.navigate("update-profile");
    }
  }

  editOrdr(data) {
    this.SearchBarShow = false;
    this.FilesData = data.files;
    console.log(data);
    this.filesData = data.files;
    this.order_Number = "";
    this.order_Number = data.orderNo;
    // console.log(JSON.stringify(data));
    this.order_id = "";
    this.order_id = data._id;
    if (data.type == "One Time Subscription") {
      var sub1 = true;
      var sub2 = false;
    }

    if (data.type == "Annual Subscription") {
      var sub1 = false;
      var sub2 = true;
    }

    this.order_create_form = this.fb.group({
      subscription_one: [sub1],
      subscription_two: [sub2],
      city: [data.town, Validators.required],
      area: [data.area, Validators.required],
      pincode: [data.pincode],
      country: [data.country],
      contact_no: [
        data.customerContactNo,
        Validators.compose([Validators.required, Validators.minLength(10)]),
      ],
      pet_name: [data.propertyPetName, Validators.required],
      street: [data.street, Validators.required],
      landmark: [data.landmark, Validators.required],
      email_id: [
        data.mail_id,
        Validators.compose([Validators.required, Validators.email]),
      ],
      contact_timing: [data.contactTiming, Validators.required],
      plot_no: [data.plotNumber, Validators.required],
      venture_name: [data.venture],
      special_inst: [data.special_inst],
      whatsapp_no: [data.wpContactNo],
      send_images_verify: [data.send_Images_Confirmation],
      accept_terms: [data.agree_with_terms_Confirmation],
      due_date: [data.dueDate],
      lng: [data.longi],
      lat: [data.lati],
      status: [data.status],
      createdAt: [data.createdAt],
      orderNo: [data.orderNo],
    });

    this.updateOrderNew = false;
  }
  goBack() {
    this.SearchBarShow = true;
    this.updateOrderNew = true;
  }

  getBackgroundColor() {
    if (this.order_create_form.value.subscription_one === true) {
      var color = "#d4943f";
    } else if (this.order_create_form.value.subscription_one === false) {
      var color = "#ffffff";
    }
    return color;
  }
  getColor() {
    if (this.order_create_form.value.subscription_one === true) {
      var color = "#f6e4ad";
    } else if (this.order_create_form.value.subscription_one === false) {
      var color = "#d4943f";
    }
    return color;
  }

  getColor_t() {
    if (this.order_create_form.value.subscription_two === true) {
      // console.log(this.subscription_one);
      // console.log(this.order_create_form.value.subscription_two);
      var color = "#f6e4ad";
    } else if (this.order_create_form.value.subscription_two === false) {
      var color = "#d4943f";
    }
    return color;
  }
  getBackgroundColor_t() {
    if (this.order_create_form.value.subscription_two === true) {
      // console.log(this.subscription_one);
      // console.log(this.order_create_form.value.subscription_two);
      var color = "#d4943f";
    } else if (this.order_create_form.value.subscription_two === false) {
      var color = "#ffffff";
    }
    return color;
  }

  formInputIsRequired(formInput: string) {
    if (this.order_create_form.controls[formInput]) {
      if (this.order_create_form.controls[formInput].hasError("required")) {
        return true;
      }
    }
    return false;
  }

  async Click_Next_Two() {
    let Loading_ = await this.loadingController.create({
      message: "Please wait...",
      translucent: true,
      cssClass: "custom-class custom-loading",
    });
    await Loading_.present();
    let user_id_ = JSON.parse(
      this.config.storageGet("user")["__zone_symbol__value"]
    );

    if (user_id_ != null) {
      console.log(user_id_._id);

      let id_ = user_id_._id;
      let idOrder = this.order_id;

      let dataPost = {
        files: [
          {
            filename: "",
          },
        ],
        town: this.order_create_form.value.city,
        area: this.order_create_form.value.area,
        pincode: this.order_create_form.value.pincode,
        country: this.order_create_form.value.country,
        customerContactNo: this.order_create_form.value.contact_no,
        propertyPetName: this.order_create_form.value.pet_name,
        street: this.order_create_form.value.street,
        landmark: this.order_create_form.value.landmark,
        mail_id: this.order_create_form.value.email_id,
        contactTiming: this.order_create_form.value.contact_timing,
        plotNumber: this.order_create_form.value.plot_no,
        venture: this.order_create_form.value.venture_name,
        special_inst: this.order_create_form.value.special_inst,
        whatsapp_no: this.order_create_form.value.whatsapp_no,
        send_Images_Confirmation: this.order_create_form.value
          .send_images_verify,
        agree_with_terms_Confirmation: this.order_create_form.value
          .accept_terms,
      };
      await this.api
        .Put_data("api/" + id_ + "/" + idOrder + "/update", dataPost)
        .subscribe(
          (res) => {
            Loading_.dismiss();
            this.config.presentToast("Data Updated Successfully");

            if (res == "update successfully") {
            }
            // this.message = res;
            // this.orders_info = res;
            // console.log(JSON.stringify(this.message));
          },
          (err) => {
            this.config.alert_("Error");
            Loading_.dismiss();
            console.log(JSON.stringify(err));
          }
        );
    } else {
      Loading_.dismiss();
      this.config.presentToast("Login again");
    }
  }

  filterItems(event) {
    const val = event.target.value;
    this.orders_info = this.allOrderInfo;
    // item.customerContactNo.toString().indexOf(val.toLowerCase()) > -1 ||
    // item.orderNo.toString().indexOf(val.toLowerCase()) > -1 ||
    this.orders_info = this.orders_info.filter((item) => {
      return (
        item.mail_id.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
        item.street.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
        item.town.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
        item.venture.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
        JSON.stringify(item.orderNo) === val
      );
    });
  }

  GoToProfile() {
    this.config.navigate("update-profile");
  }

  viewPhotosViews(n) {
    this.config.storageRemoveItem("SingleOrderData");
    console.log(JSON.stringify(n.files));
    this.config.storageSave("SingleOrderData", n);
    this.config.navigate("gallery");
  }

  async GoFromMenu(p) {
    // this.config.navigate(p);
    if (p == "1") {
      this.config.navigate("home");
    }
    if (p == "2") {
      this.config.navigate("services");
    }
    if (p == "3") {
      this.config.navigate("about-us");
    }
    if (p == "5") {
      this.config.navigate("notifications");
    }
    if (p == "6") {
      this.logoutNow();
    }
    if (p == "7") {
      this.login_Now();
    }
    if (p == "8") {
      this.Register_Now();
    }
    if (p == "9") {
      this.config.navigate("update-profile");
    }
    if (p == "4") {
      this.config.navigate("contact-us");
    }
  }

  async logoutNow() {
    await this.api.get_data("signout").subscribe(
      (res) => {
        console.log(res);
        this._userlogged_in = false;
        this.config.storageClear();
        this.config.presentToast("Successfully logout");
      },
      (err) => {
        this.config.alert_("Error");
        // Loading_.dismiss();
        console.log(JSON.stringify(err));
      }
    );
  }

  async login_Now() {
    const modal = await this.modalController.create({
      cssClass: "update-popup-modal",
      component: LoginPage,
      componentProps: {},
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        let d = dataReturned.data;

        if (d.empty == 0) {
          return;
        }
        if (d.empty == 1) {
          this._userlogged_in = true;
          let userName = JSON.parse(
            this.config.storageGet("user")["__zone_symbol__value"]
          );
          console.log(userName);

          this.UserName = userName.name;
          return;
        }
        if (d.location) {
        }
      }
    });

    return await modal.present();
  }

  async Register_Now() {
    const modal = await this.modalController.create({
      cssClass: "update-popup-modal",
      component: "",
      componentProps: {},
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        let d = dataReturned.data;

        if (d.empty == 0) {
          return;
        }
        if (d.location) {
        }
      }
    });

    return await modal.present();
  }

  viewReports(n) {
    this.config.storageRemoveItem("SingleOrderData");
    // console.log(JSON.stringify(n.files));
    this.config.storageSave("SingleOrderData", n);
    this.config.navigate("reports");
  }

  Click_Copy_Request_Service(n, num) {
    console.log(num);

    // this.config.OrderReNewIdentifier = num;
    // this.config.CopyRequestServiceData = [];
    // this.config.CopyRequestServiceData = n;
    // this.config.navigate("request-service");
  }
}
