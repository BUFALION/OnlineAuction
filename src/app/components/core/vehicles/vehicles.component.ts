import {Component, OnInit} from '@angular/core';
import {ICar} from "../../../models/car";
import {ProductsService} from "../../../services/products.service";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit{

  cars!:ICar[];
  constructor(private productsService:ProductsService) {
  }
  ngOnInit(): void {
    this.productsService.getAllCars().subscribe((data: ICar[]) => {
      this.cars = data;
    });
  }

}
