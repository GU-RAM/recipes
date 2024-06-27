import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.bhg.com/thmb/9eScJl6sML_co_UHmRJJOHq0wro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/KH_110122_BHG11445_preview-ec7904fb4a78484eb4e2e48ec77b1bac.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.bhg.com/thmb/9eScJl6sML_co_UHmRJJOHq0wro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/KH_110122_BHG11445_preview-ec7904fb4a78484eb4e2e48ec77b1bac.jpg'
    ),
  ];
}
