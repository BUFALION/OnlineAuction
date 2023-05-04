import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../models/car";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getAllCars():Observable<ICar[]>{
    return this.http.get<ICar[]>('./assets/cars.json');
  }
}
