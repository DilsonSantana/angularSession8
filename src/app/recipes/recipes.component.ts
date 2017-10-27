import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

@Input() recipeSelected: Recipe;

  recipes: Recipe[] = [
    new Recipe('Teste','texto','Imagem.jpg')
  ];

}
