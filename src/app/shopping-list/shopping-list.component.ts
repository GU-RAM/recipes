import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 18),
  ];

  ingredientsHandler(newIngredient: Ingredient) {
    const existingIngredient = this.ingredients.find(
      (obj) => obj.name === newIngredient.name
    );

    if (existingIngredient) {
      // If found, update the amount
      existingIngredient.amount += newIngredient.amount;
    } else {
      // If not found, push a new object into the this.ingredients
      this.ingredients.push(newIngredient);
    }
  }
}
