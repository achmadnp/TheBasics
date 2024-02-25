import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent implements OnInit {
  recipeDetail: Recipe;

  constructor() {}

  ngOnInit(): void {
    // this.recipeSub = this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.recipeDetail = recipe;
    //   }
    // );
  }
}
