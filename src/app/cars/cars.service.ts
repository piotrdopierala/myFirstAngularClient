import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Car } from './models/car';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class CarsService {
  private apiUrl : string = "http://localhost:3000/api/cars";
  randomValue = Math.random();

  constructor(private http : Http) { }

  getCars() : Observable<Car[]>{
    return this.http.get(this.apiUrl)
              .map((res) => res.json())
  }

  getCar(id:number) : Observable<Car>{
    return this.http.get(this.apiUrl+`/${id}`)
              .map((res) => res.json())
  }

  addCar(data) : Observable<Car>{
    return this.http.post(this.apiUrl,data)
    .map((res) => res.json())
  }

  updateCar(id:number, data) : Observable<Car>{
    return this.http.put(this.apiUrl+`/${id}`,data)
              .map((res) => res.json())
  }

  removeCar(id:number) : Observable<Car>{
    return this.http.delete(this.apiUrl+`/${id}`)
              .map((res) => res.json())
  }

}
