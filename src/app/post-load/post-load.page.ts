import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { CommonService } from "../common.function";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-post-load",
  templateUrl: "./post-load.page.html",
  styleUrls: ["./post-load.page.scss"],
})
export class PostLoadPage implements OnInit {
  form_detail: any;
  material_type: any;
  truck_type: any;

  formErrors = {
    billAmount: "",
  };
  public isSubmitted = false;

  validationMessages = {
    billAmount: {
      required: "Bill amount is required",
    },
  };

  constructor(
    private fb: FormBuilder,
    public loadingController: LoadingController,
    public api: ApiService,
    public config: CommonService,
    private alertCtrl: AlertController
  ) {
    this.material_type = [
      {
        display_name: "Building Materials",
      },
      {
        display_name: "Granites / Marbel",
      },
      {
        display_name: "Cement",
      },
      {
        display_name: "Chemicals",
      },
      {
        display_name: "Coal And Ash",
      },
      {
        display_name: "Container",
      },
      {
        display_name: "Engineering Goods",
      },
      {
        display_name: "Electronics or Consumer Durable",
      },
      {
        display_name: "Fertilizer",
      },
      {
        display_name: "Fruits And Vegetables",
      },
      {
        display_name: "Furniture And Wood Products",
      },
      {
        display_name: "Household Goods",
      },
      {
        display_name: "Industrial Equipments",
      },
      {
        display_name: "Iron or Steel Material",
      },
      {
        display_name: "Liquids or Oil Drums",
      },
      {
        display_name: "Machineries",
      },
      {
        display_name: "Marble Slab/Marble Block",
      },
      {
        display_name: "Medicines",
      },
      {
        display_name: "Packed Food",
      },
      {
        display_name: "Plastic Pipes",
      },
      {
        display_name: "Books or Paper Rolls",
      },
      {
        display_name: "Plastic Granules/Plastic Industrial Goods",
      },
      {
        display_name: "Refrigerated Goods",
      },
      {
        display_name: "Crop or Agriculture Products",
      },
      {
        display_name: "Scrap",
      },
      {
        display_name: "Stones/Tiles",
      },
      {
        display_name: "Textiles",
      },
      {
        display_name: "Tyres And Rubber Products",
      },
      {
        display_name: "Vehicles/Automobiles",
      },
      {
        display_name: "Others",
      },
    ];

    this.truck_type = [
      {
        truck_select: "Canter (14 -17 Feet)",
      },
      {
        truck_select: "Canter (19 Feet)",
      },
      {
        truck_select: "Car Carrier",
      },
      {
        truck_select: "Container Close Body (20-40) Feet",
      },
      {
        truck_select: "Container Close Body (32-36) Feet",
      },
      {
        truck_select: "LCV (Light Commercial Vehicle)",
      },
      {
        truck_select: "LCV 5 MT - LCV (5 tons)",
      },
      {
        truck_select: "LCV 7 MT - LCV (7 tons)",
      },
      {
        truck_select: "Multi Axel (24 ft-14.5 tons)",
      },
      {
        truck_select: "Multi Axel (28 ft-14.5 tons)",
      },
      {
        truck_select: "Multi Axel (32 ft-14.5 tons)",
      },
      {
        truck_select: "ODC (Over Dimensional Cargo-NA)",
      },
      {
        truck_select: "Pick Up (1 ton)",
      },
      {
        truck_select: "Refrigerated Trucks/A C. Containers (NA)",
      },
      {
        truck_select: "Road Tankers(10 wheel -NA)",
      },
      {
        truck_select: "Road Tankers(6 wheel -NA) ",
      },
      {
        truck_select: "Tempoo / Tata 407 (4 wheel-3.5 tons)",
      },
      {
        truck_select: "Tata Ace (1 ton)",
      },
      {
        truck_select: "Taurus (7 tons)",
      },
      {
        truck_select: "Tipper Dumper (NA)",
      },
      {
        truck_select: "Trailer 14 Wheel (22-24 Ton)",
      },
      {
        truck_select: "Truck 16 Wheel (29 Ton)",
      },
      {
        truck_select: "Trailer 18 Wheel (26-28 Ton)",
      },
      {
        truck_select: "Trailer 22 Wheel (39-40 Ton)",
      },
      {
        truck_select: "Truck Flat Bed (NA)",
      },
      {
        truck_select: "Trailers Flat Bed  (20-32 ft 27 tons)",
      },
      {
        truck_select: "Trailers Flat Bed (40-54 ft 37 tons)",
      },
      {
        truck_select: "Truck (6 wheel-9 tons)",
      },
      {
        truck_select: "Truck 10 wheel (22 ft-16 tons)",
      },
      {
        truck_select: "Truck 12 wheel (22 ft-21 tons)",
      },
      {
        truck_select: "Truck 14 Wheel (25-26 Ton)",
      },
      {
        truck_select: "Truck Close  (14 ft-5 tons)",
      },
      {
        truck_select: "Truck Open  (14 ft-5 tons)",
      },
      {
        truck_select: "Truck Open  (17 ft-7 tons)",
      },
      {
        truck_select: "Truck Close  (17 ft-7 tons)",
      },
      {
        truck_select: "Truck Open  (19 ft-9 tons)",
      },
      {
        truck_select: "Truck Close  (20 ft -NA)",
      },
    ];

    this.form_detail = this.fb.group({
      loadList: this.fb.array([this.addItemFormGroup()]),
      user_id: [""],
      created_by: [""],
      source: ["", Validators.required],
      destination: ["", Validators.required],
      required_trucks: [""],
      no_of_trucks: [""],
      truck_type: [""],
      weight: [""],
      offeredPrice: [""],
      ScheduledDate: [""],
      SpecialInstructions: [""],
      billAmount: [""],
    });

    this.form_detail.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.form_detail);
    });
  }

  ngOnInit() {}

  addItemFormGroup(): FormGroup {
    return this.fb.group({
      name: ["", Validators.required],
      quantity: ["", Validators.required],
      branch: ["", Validators.required],
      isAvailable: [true],
    });
  }

  logValidationErrors(group: FormGroup = this.form_detail) {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = "";
        if (abstractControl && !abstractControl.valid) {
          const messages = this.validationMessages[key];

          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] = messages[errorKey];
            }
          }
        }
      }
    });
  }

  addItem() {
    this.isSubmitted = false;
    (this.form_detail.get("loadList") as FormArray).push(
      this.addItemFormGroup()
    );
  }

  async Post_load() {
    let Loading_ = await this.loadingController.create({
      message: "Please wait...",
      translucent: true,
      cssClass: "custom-class custom-loading",
    });
    await Loading_.present();

    this.form_detail.value.user_id = this.config.storageGet("user_id");
    this.form_detail.value.created_by = this.config.storageGet("user");
    //  config["__zone_symbol__value"];
    await this.api.post_load("post_load", this.form_detail.value).subscribe(
      (res) => {
        Loading_.dismiss();

        if (res["success"] == 0) {
          this.config.alert_(res["message"]);
        }
        if (res["success"] == 1) {
          this.form_detail.value = {};
          this.config.alert_(res["message"]);
        }
      },
      (err) => {
        Loading_.dismiss();
      }
    );
  }

  removeItem(index) {
    if (this.form_detail.value.loadList.length > 1) {
      (this.form_detail.get("loadList") as FormArray).removeAt(index);
      this.isSubmitted = false;
    }
  }

  onSubmit() {
    console.log("Log----");

    this.presentPrompt();
  }

  async presentPrompt() {
    const promptWindow = await this.alertCtrl.create({
      header: "Shopping List Name",
      inputs: [
        {
          name: "LoadListValue",
          type: "text",
          placeholder: "Enter name",
        },
      ],
      buttons: [
        {
          text: "Okay",
          role: "OK",
          handler: (value) => {
            this.form_detail.setName(value.LoadListValue);
            // this.postcall();
          },
        },
        {
          text: "Cancel",
          handler: () => {
            console.log("Cancelled");
          },
        },
      ],
    });
    await promptWindow.present();
  }
}
