import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  NativeGeocoder,
  NativeGeocoderOptions,
} from "@ionic-native/native-geocoder/ngx";

import { Geolocation } from "@ionic-native/geolocation/ngx";

import { NavigationExtras, Router } from "@angular/router";

import { RegisterationserviceService } from "../registerationservice.service";

@Component({
  selector: "app-vendor-registeration",
  templateUrl: "./vendor-registeration.page.html",
  styleUrls: ["./vendor-registeration.page.scss"],
})
export class VendorRegisterationPage implements OnInit {
  check = false;

  paymentModes;
  paymentData = [];
  public userGroup: FormGroup;
  public isSubmitted = false;
  showId = false;
  Step_one_form = true;
  Step_two_form = false;
  Step_three_form = false;
  constructor(
    private formBuilder: FormBuilder,

    private router: Router,
    private nativeGeocoder: NativeGeocoder,
    private geolocation: Geolocation,
    private registrationService: RegisterationserviceService
  ) {
    this.paymentModes = [
      {
        name: "India",
        formValue: "cashValue",
        selected: false,
      },
      {
        name: "USA",
        formValue: "chequeValue",
        selected: false,
      },
      {
        name: "Canada",
        formValue: "upiValue",
        selected: false,
      },
      {
        name: "Russia",
        formValue: "paytmValue",
        selected: false,
      },
      {
        name: "Australia",
        formValue: "gpayValue",
        selected: false,
      },
      {
        name: "Saudi Arabia",
        formValue: "amazonValue",
        selected: false,
      },
      {
        name: "Other",
        formValue: "otherValue",
        selected: false,
      },
    ];
  }

  ngOnInit() {
    this.userGroup = this.formBuilder.group({
      nameValue: ["", [Validators.required, Validators.minLength(3)]],
      emailValue: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
      phoneValue: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],
      addressValue: ["", Validators.required],
      countryValue: ["", Validators.required],
      stateValue: ["", Validators.required],
      cityValue: ["", Validators.required],
      pinValue: ["", [Validators.required, Validators.minLength(6)]],
      areaValue: ["", Validators.required],
      dobValue: ["", Validators.required],
      otherValue: [false],
      amazonValue: [false],
      gpayValue: [false],
      paytmValue: [false],
      upiValue: [false],
      chequeValue: [false],
      cashValue: [false],
      earnedDiscount: [15, [Validators.min(15)]],
      radiusValue: [1000, Validators.required],
      roleValue: ["Consumer", Validators.required],
      idValue: [""],
    });
  }

  submitRegistrationDetails() {
    this.isSubmitted = true;
    if (!this.userGroup.valid) {
      console.log("invalid");
    } else {
      this.registrationService.setEmail(this.userGroup.value.emailValue);
      this.registrationService.setUserNumber(this.userGroup.value.phoneValue);
      this.registrationService.setUserRole(this.userGroup.value.roleValue);
      this.registrationService.setCountry(this.userGroup.value.countryValue);
      this.registrationService.setAddress(this.userGroup.value.addressValue);
      this.registrationService.setState(this.userGroup.value.stateValue);
      this.registrationService.setPincode(this.userGroup.value.pinValue);
      this.registrationService.setCity(this.userGroup.value.cityValue);
      this.registrationService.setLocality(this.userGroup.value.areaValue);
      this.registrationService.setPerimeter(this.userGroup.value.radiusValue);
      this.registrationService.setName(this.userGroup.value.nameValue);
      this.registrationService.setDOB(this.userGroup.value.dobValue);
      this.registrationService.setEarnedDiscount(
        this.userGroup.value.earnedDiscount
      );
      // this.storageService.setItem("radius", this.userGroup.value.radiusValue);
      // this.storageService.setItem("city", this.userGroup.value.cityValue);
      this.checkPaymentMode();
      // this.pushNotificationService.initPush();
      // this.loaderService.presentLoadingIndicator('Loading..');
      // this.registrationService.userRegistration().subscribe((response) => {
      //   console.log("Registration response", response);
      //   // this.loaderService.dismissLoadingIndicator();
      //   if (response != null) {
      //     const navigationExtras: NavigationExtras = {
      //       queryParams: {
      //         phone_number: this.registrationService.getUserNumber(),
      //         user_Id: response.data._id,
      //       },
      //     };
      //     if (this.userGroup.value.roleValue === "Retailer") {
      //       this.router.navigate(["/retailer-onboard"], {
      //         state: { parameters: navigationExtras },
      //       });
      //     } else {
      //       this.router.navigate(["/verification"], {
      //         state: { parameters: navigationExtras },
      //       });
      //     }
      //   }
      // });
    }

    console.log("Submit called", this.userGroup.value);
  }

  updateLocation() {
    console.log("first---");
    // this.androidPermissions
    //   .requestPermissions([
    //     this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
    //     this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
    //   ])
    //   .then(
    //     (res) => {
    //       console.log(res);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);

      // this.nativeGeocoder
      //   .reverseGeocode(resp.coords.latitude, resp.coords.longitude)
      //   .then((result: NativeGeocoderResult[]) => {
      //     console.log("street", result[0]);
      //     this.updateAddress(result[0]);
      //   })
      // .catch((error: any) => console.log(error));
    });
  }

  updateAddress(address) {
    console.log(address);
    this.userGroup.controls.cityValue.setValue(address.subAdministrativeArea);
    this.userGroup.controls.stateValue.setValue(address.administrativeArea);
    this.userGroup.controls.countryValue.setValue(address.countryName);
    this.userGroup.controls.areaValue.setValue(address.subLocality);
    this.userGroup.controls.pinValue.setValue(address.postalCode);
  }

  get errorControl() {
    return this.userGroup.controls;
  }

  checkPaymentMode() {
    this.paymentData = [];
    if (this.userGroup.value.amazonValue) {
      this.paymentData.push("Amazon Pay");
    }
    if (this.userGroup.value.gpayValue) {
      this.paymentData.push("Google Pay");
    }
    if (this.userGroup.value.paytmValue) {
      this.paymentData.push("Paytm");
    }
    if (this.userGroup.value.upiValue) {
      this.paymentData.push("UPI Payment");
    }
    if (this.userGroup.value.cashValue) {
      this.paymentData.push("Cash");
    }
    if (this.userGroup.value.chequeValue) {
      this.paymentData.push("Cheque");
    }
    if (this.userGroup.value.otherValue) {
      this.paymentData.push("Other");
    }
    console.log("Payment Data", this.paymentData);
    this.registrationService.setPaymentMode(this.paymentData);
  }

  onRoleSelected() {
    console.log("role", this.userGroup.value.roleValue);
    if (this.userGroup.value.roleValue === "Retailer") {
      this.showId = true;
    } else {
      this.showId = false;
    }
  }

  click_next_one() {
    console.log("click-nxt-fmr");
    this.isSubmitted = true;
    this.userGroup = this.formBuilder.group({
      nameValue: [
        this.userGroup.value.nameValue,
        [Validators.required, Validators.minLength(3)],
      ],
      emailValue: [
        this.userGroup.value.emailValue,
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
      phoneValue: [
        this.userGroup.value.phoneValue,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],
      dobValue: [this.userGroup.value.dobValue, Validators.required],

      addressValue: [""],
      countryValue: [""],
      stateValue: [""],
      cityValue: [""],
      pinValue: ["", [Validators.minLength(6)]],
      areaValue: [""],

      otherValue: [false],
      amazonValue: [false],
      gpayValue: [false],
      paytmValue: [false],
      upiValue: [false],
      chequeValue: [false],
      cashValue: [false],
      earnedDiscount: [15],
      radiusValue: [1000],
      roleValue: ["Consumer"],
      idValue: [""],
    });

    if (!this.userGroup.valid) {
      this.Step_one_form = true;
      this.Step_two_form = false;
      this.Step_three_form = false;
      console.log("invalid");
    } else {
      this.isSubmitted = false;
      this.Step_one_form = false;
      this.Step_two_form = true;
      this.Step_three_form = false;
      console.log("Valid");
    }
  }

  click_next_two() {
    console.log("click-nxt-fmr");

    this.isSubmitted = true;
    this.userGroup = this.formBuilder.group({
      nameValue: [
        this.userGroup.value.nameValue,
        [Validators.required, Validators.minLength(2)],
      ],
      emailValue: [
        this.userGroup.value.emailValue,
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
      phoneValue: [
        this.userGroup.value.phoneValue,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],
      dobValue: [this.userGroup.value.dobValue, Validators.required],

      addressValue: [this.userGroup.value.addressValue, Validators.required],
      countryValue: [this.userGroup.value.countryValue, Validators.required],
      stateValue: [this.userGroup.value.stateValue, Validators.required],
      cityValue: [this.userGroup.value.cityValue, Validators.required],
      pinValue: [
        this.userGroup.value.pinValue,
        [Validators.required, Validators.minLength(6)],
      ],
      areaValue: [this.userGroup.value.areaValue, Validators.required],

      otherValue: [false],
      amazonValue: [false],
      gpayValue: [false],
      paytmValue: [false],
      upiValue: [false],
      chequeValue: [false],
      cashValue: [false],
      earnedDiscount: [15, [Validators.min(15)]],
      radiusValue: [1000],
      roleValue: ["Consumer"],
      idValue: [""],
    });

    if (!this.userGroup.valid) {
      this.Step_one_form = false;
      this.Step_two_form = true;
      this.Step_three_form = false;
      console.log("invalid");
    } else {
      this.isSubmitted = false;
      this.Step_one_form = false;
      this.Step_two_form = false;
      this.Step_three_form = true;
      console.log("Valid");
    }
  }

  navStepOne() {
    // setTimeout(() => {
    this.Step_one_form = true;
    this.Step_two_form = false;
    this.Step_three_form = false;
    console.log("Valid");
    // }, 1000);
  }

  navStepTwo() {
    this.isSubmitted = true;
    this.userGroup = this.formBuilder.group({
      nameValue: [
        this.userGroup.value.nameValue,
        [Validators.required, Validators.minLength(2)],
      ],
      emailValue: [
        this.userGroup.value.emailValue,
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
      phoneValue: [
        this.userGroup.value.phoneValue,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],
      dobValue: [this.userGroup.value.dobValue, Validators.required],

      addressValue: [this.userGroup.value.addressValue],
      countryValue: [this.userGroup.value.countryValue],
      stateValue: [this.userGroup.value.stateValue],
      cityValue: [this.userGroup.value.cityValue],
      pinValue: [
        this.userGroup.value.pinValue,
        [Validators.required, Validators.minLength(6)],
      ],
      areaValue: [this.userGroup.value.areaValue],

      otherValue: [false],
      amazonValue: [false],
      gpayValue: [false],
      paytmValue: [false],
      upiValue: [false],
      chequeValue: [false],
      cashValue: [false],
      earnedDiscount: [15, [Validators.min(15)]],
      radiusValue: [1000],
      roleValue: ["Consumer"],
      idValue: [""],
    });

    if (!this.userGroup.valid) {
      console.log("invalid");
    } else {
      this.Step_one_form = false;
      this.Step_two_form = true;
      this.Step_three_form = false;
      console.log("Valid");
    }
  }

  navStepThree() {
    this.isSubmitted = true;
    this.userGroup = this.formBuilder.group({
      nameValue: [
        this.userGroup.value.nameValue,
        [Validators.required, Validators.minLength(2)],
      ],
      emailValue: [
        this.userGroup.value.emailValue,
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
      phoneValue: [
        this.userGroup.value.phoneValue,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],
      dobValue: [this.userGroup.value.dobValue, Validators.required],

      addressValue: [this.userGroup.value.addressValue, Validators.required],
      countryValue: [this.userGroup.value.countryValue, Validators.required],
      stateValue: [this.userGroup.value.stateValue, Validators.required],
      cityValue: [this.userGroup.value.cityValue, Validators.required],
      pinValue: [
        this.userGroup.value.pinValue,
        [Validators.required, Validators.minLength(6)],
      ],
      areaValue: [this.userGroup.value.areaValue, Validators.required],

      otherValue: [false],
      amazonValue: [false],
      gpayValue: [false],
      paytmValue: [false],
      upiValue: [false],
      chequeValue: [false],
      cashValue: [false],
      earnedDiscount: [15, [Validators.min(15)]],
      radiusValue: [1000],
      roleValue: ["Consumer"],
      idValue: [""],
    });

    // this.userGroup.setErrors({ required: true });
    // this.userGroup.valueChanges.subscribe((newValue) => {
    //   console.log(newValue);

    //   if (
    //     newValue.otherValue === true ||
    //     newValue.amazonValue === true ||
    //     newValue.gpayValue === true ||
    //     newValue.paytmValue === true ||
    //     newValue.upiValue === true ||
    //     newValue.chequeValue === true ||
    //     newValue.cashValue === true
    //   ) {
    //     this.userGroup.setErrors(null);
    //   } else {
    //     this.userGroup.setErrors({ required: true });
    //   }
    // });

    if (!this.userGroup.valid) {
      console.log("invalid");
    } else {
      this.Step_one_form = false;
      this.Step_two_form = false;
      this.Step_three_form = true;
      console.log("Valid");
    }
  }
}
