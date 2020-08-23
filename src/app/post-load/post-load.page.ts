import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-post-load",
  templateUrl: "./post-load.page.html",
  styleUrls: ["./post-load.page.scss"],
})
export class PostLoadPage implements OnInit {
  form_detail: any;
  material_type: any;
  truck_type: any;
  constructor(
    private fb: FormBuilder,
    public loadingController: LoadingController
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
      source_city: ["", Validators.required],
      dest_city: ["", Validators.required],
      required_trucks: [""],
      truck_type: [""],
      weight: [""],
      offeredPrice: [""],
      ScheduledDate: [""],
      SpecialInstructions: [""],
    });
  }

  ngOnInit() {}
}
