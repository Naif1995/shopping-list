import { Ingredient } from './../shared/Ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple' , 10),
    new Ingredient('Orange' , 25)
  ];
  constructor() { }

  ngOnInit(): void {
  } 

}
