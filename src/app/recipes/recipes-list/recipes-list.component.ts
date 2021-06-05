import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes : Recipe[] = [
new Recipe('recipe name 1', 'desc recipe 1', 'https://spoonacular.com/recipeImages/579247-556x370.jpg'),
new Recipe('recipe name 2', 'desc recipe 2', 'https://spoonacular.com/recipeImages/579247-556x370.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
