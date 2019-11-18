import { Component, Input,NgZone } from '@angular/core';
import { NavParams, } from '@ionic/angular';

import { ModalController } from '@ionic/angular';

// import {Component, NgZone} from '@angular/core';
// import {ModalController} from '@ionic-angular';
declare var google;
@Component({
  selector: 'modal-page',
  templateUrl: 'autoComp.html',
})
export class ModalPage {

    autocompleteItems;
    autocomplete;
  
    latitude: number = 0;
    longitude: number = 0;
    geo: any
  
    service = new google.maps.places.AutocompleteService();
  
    constructor (public viewCtrl: ModalController, private zone: NgZone) {
      this.autocompleteItems = [];
      this.autocomplete = {
        query: ''
      };
    }
  
    dismiss() {
      this.viewCtrl.dismiss();
    }
  
    chooseItem(item: any) {
      this.viewCtrl.dismiss(item);
      this.geo = item;
      this.geoCode(this.geo);//convert Address to lat and long
    }
  
    updateSearch() {
  
      if (this.autocomplete.query == '') {
       this.autocompleteItems = [];
       return;
      }
  
      let me = this;
      this.service.getPlacePredictions({
      input: this.autocomplete.query,
      componentRestrictions: {
        country: 'de'
      }
     }, (predictions, status) => {
       me.autocompleteItems = [];
  
     me.zone.run(() => {
       if (predictions != null) {
          predictions.forEach((prediction) => {
            me.autocompleteItems.push(prediction.description);
          });
         }
       });
     });
    }
  
    //convert Address string to lat and long
    geoCode(address:any) {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': address }, (results, status) => {
      this.latitude = results[0].geometry.location.lat();
      this.longitude = results[0].geometry.location.lng();
      alert("lat: " + this.latitude + ", long: " + this.longitude);
     });
   }

}