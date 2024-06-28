import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  selectedRecipe: Recipe | undefined;

  onListHandler(recipe: any) {
    this.selectedRecipe = recipe;
    console.log('me' + this.selectedRecipe);
  }
}
