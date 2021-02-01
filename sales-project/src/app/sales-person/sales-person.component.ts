import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person',
  templateUrl: './sales-person.component.html',
  styleUrls: ['./sales-person.component.css']
})
export class SalesPersonComponent implements OnInit {

  // create Array of salesPerson
  salesPerson : SalesPerson[] = [
    new SalesPerson("mohamed", "ahmed", "mohamed@gmail.com", 5000),
    new SalesPerson("mostafa", "ahmed", "mostafa@gmail.com", 6000),
  ];
  constructor() {}

  ngOnInit(): void {


  }

}
