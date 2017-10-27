import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 public Item: Recipe;
  @Output() selectedRecipeEl = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Bacon Explosion','Sure, everybody loves bacon.','../../assets/bacon-explosion.png'),
    new Recipe('Recipe Name','Recipe Description','../../assets/recipe.png'),
    new Recipe('Recipe Name','Recipe Description','../../assets/recipe.png')

  ];

  constructor() { }

  ngOnInit() {
  }

  Adicionar(){
    this.Item = new Recipe('Recipe Name','Recipe Description','../../assets/recipe.png');
    this.recipes.push(this.Item);
  }

  onRecipeSelected(recipeEl: Recipe){
    this.selectedRecipeEl.emit(recipeEl);
  }

}
