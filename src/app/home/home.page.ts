import { Component, ViewChild, ElementRef } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import {
  NativeGeocoder,
  NativeGeocoderReverseResult,
  NativeGeocoderOptions,
} from "@ionic-native/native-geocoder/ngx";
import { ModalPage } from "./autoComp";

declare var google;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  // @ViewChild('map', {static:false}) mapElement: ElementRef;
  map: any;
  address;
  // InforObj = [];
  infoWindows: any;
  @ViewChild("map", { static: false }) mapContainer: ElementRef;
  pick_city: any;
  drop_city: any;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private ModalCtrl: ModalController
  ) {
    this.address = {
      place: "",
    };

    this.infoWindows = [];
  }

  ngOnInit() {
    // this.loadMap();
  }

  ionViewDidLoad() {}

  addInfoWindowToMarker(marker) {
    console.log(marker);
    var infoWindowContent =
      '<div id="content"><h1 id="firstHeading" class="firstHeading">' +
      marker.title +
      "</h1></div>";
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
    });
    marker.addListener("click", () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for (let window of this.infoWindows) {
      window.close();
    }
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then(
      (position) => {
        let latLng = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );

        let mapOptions = {
          center: latLng,
          disableDefaultUI: true,
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(
          this.mapContainer.nativeElement,
          mapOptions
        );

        this.getMarkers();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getMarkers() {
    let data = [
      {
        latitude: 57.77504388,
        longitude: 14.18557048,
        name: "Vink",
      },

      {
        latitude: 30.684815,
        longitude: 76.69619650000004,
        name: "Andy",
      },

      {
        latitude: 57.77474066,
        longitude: 14.25457835,
        name: "Mike",
      },
    ];

    this.addMarkersToMap(data);
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      var position = new google.maps.LatLng(marker.latitude, marker.longitude);
      var locations = new google.maps.Marker({
        position: position,
        title: marker.name,
        // icon: 'assets/images/marker.png'});
      });

      locations.setMap(this.map);
      this.addInfoWindowToMarker(locations);
    }
  }

  async showAddressModal() {
    const modal = await this.ModalCtrl.create({
      component: ModalPage,
    });
    return await modal.present();
  }
}
