import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent{
ingredients: Ingredient[] = [
  new Ingredient('Tomato', 15),
  new Ingredient('Potato', 8)
];

  onIngredientAdd(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
