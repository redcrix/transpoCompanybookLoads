import { Injectable } from "@angular/core";
// import {BaseService} from '../baseservice/base.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
// import {ApiUrls} from '../../constants/api-urls.constant';
import { CommonService } from "./common.function";

@Injectable({
  providedIn: "root",
})
export class RegisterationserviceService {
  // tslint:disable-next-line:variable-name
  private _registrationPayload;

  constructor(
    public config: CommonService,

    http: HttpClient
  ) {}

  userRegistration() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authentication:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoYXJsaWVAZW1haWwuY29tIiwiZXhwIjoxNTgwMTYyMjA4LCJ1dWlkIjoiODkyMDY0ZGUtMzk0Ny00YjUxLTkwZTMtZmIzNjk3YjU5OTM2In0.I38FQfy8B3818_XX6DX3BHZItJEhmLUJVMWxf1OrPR8",
      }),
    };

    debugger;
    // return this.post(this.config.Apiurl, this.getRegistrationPayload());
  }

  getRegistrationPayload() {
    console.log("Service", this._registrationPayload);
    return this._registrationPayload;
  }

  setRegistrationPayload(dataValue) {
    this._registrationPayload = dataValue;
  }

  setEmail(data) {
    this._registrationPayload.email = data;
  }

  setUserNumber(data) {
    this._registrationPayload.contactNumber = data;
  }

  getUserNumber() {
    return this._registrationPayload.contactNumber;
  }

  setAddress(data) {
    this._registrationPayload.addressDetails.address = data;
  }
  setLocality(data) {
    this._registrationPayload.addressDetails.locality = data;
  }

  setCity(data) {
    this._registrationPayload.addressDetails.city = data;
  }
  setState(data) {
    this._registrationPayload.addressDetails.state = data;
  }
  setCountry(data) {
    this._registrationPayload.addressDetails.country = data;
  }
  setPincode(data) {
    this._registrationPayload.addressDetails.pinCode = Number(data);
    console.log("Pin code", Number(data));
  }
  setLatitude(data) {
    this._registrationPayload.location.lat = data;
  }
  setLongitude(data) {
    this._registrationPayload.location.lng = data;
  }
  setPerimeter(data) {
    this._registrationPayload.location.perimeter = data;
  }

  setName(data) {
    this._registrationPayload.username = data;
    this._registrationPayload.fullName = data;
  }

  setDOB(data) {
    this._registrationPayload.dob = data;
  }
  setEarnedDiscount(data) {
    this._registrationPayload.earnedDiscount = data;
  }

  setPaymentMode(data) {
    this._registrationPayload.paymentMode = data;
  }
  setDeviceToken(data) {
    this._registrationPayload.deviceToken = data;
  }

  setUserRole(data) {
    this._registrationPayload.role = data;
  }
}
