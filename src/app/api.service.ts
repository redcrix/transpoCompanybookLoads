import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Access-Control-Allow-Origin": "*" }),
};

var headers = new Headers();
headers.append("Content-Type", "application/x-www-form-urlencoded");
headers.append("Access-Control-Allow-Origin", "*");

@Injectable({
  providedIn: "root",
})
export class ApiService {
  options: any = {};
  Apiurl: any;
  constructor(private http: HttpClient) {
    this.options.withCredentials = true;
    this.options.headers = headers;
    this.Apiurl = "http://localhost:4000/";
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  Login(endPoint, data) {
    const httpOptions = {
      headers: new HttpHeaders({ "Access-Control-Allow-Origin": "*" }),
    };

    let send = {
      username: data.username,
      password: data.password,
      device_token: "device_token",
      device_os: "device_os",
    };
    let url = this.Apiurl + "api/" + endPoint;
    return this.http.post(url, send, httpOptions).pipe(
      tap((_) => {}),
      catchError(this.handleError(endPoint))
    );
  }

  signup(endPoint, body) {
    let send = {
      password: body.password,
      country: body.country,
      //newuser.profile_pick = req.file.path;
      profile_pick: body.profile_pick,
      device_token: "device_token",
      device_os: "device_os",
      username: body.username,
      email: body.email,
      first_name: body.first_name,
      last_name: body.last_name,
      phone: body.phone,
      AlternatePersonName: body.AlternatePersonName,
      AlternatePersonContact: body.AlternatePersonContact,
      PanNo: body.PanNo,

      // ---- Extra fields
      isDriver: body.isDriver,
      companyName: body.companyName,
      OwnerName: body.OwnerName,
      TruckType: body.TruckType,
      OwnerCity: body.OwnerCity,
      TruckOwnerMobile: body.TruckOwnerMobile,
      TruckOwnerEmail: body.TruckOwnerEmail,
      TruckOwnerAddress: body.TruckOwnerAddress,
      RouteOperate: body.RouteOperate,
      PermitState: body.PermitState,
      HowManyTrucks: body.HowManyTrucks,
      InsuranceType: body.InsuranceType,
    };

    let url = this.Apiurl + "api/" + endPoint;
    return this.http.post(url, send).pipe(
      tap((_) => {}),
      catchError(this.handleError(endPoint))
    );
  }

  post_load(endPoint, body) {
    let send = {
      user_id: body.user_id,
      created_by: body.created_by,
      source: body.source,
      destination: body.destination,
      truck_type: body.truck_type,
      no_of_trucks: body.no_of_trucks,
      material_type: body.material_type,
      required_trucks: body.required_trucks,
      weight: body.weight,
      ScheduledDate: body.ScheduledDate,
      offeredPrice: body.offeredPrice,
      SpecialInstructions: body.SpecialInstructions,
    };

    let url = this.Apiurl + "api/" + endPoint;
    return this.http.post(url, send).pipe(
      tap((_) => {}),
      catchError(this.handleError(endPoint))
    );
  }

  get_data(endPoint) {
    let url = this.Apiurl + "api/" + endPoint;
    return this.http.get(url).pipe(
      tap((_) => {}),
      catchError(this.handleError(endPoint))
    );
  }
}
