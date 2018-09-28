import { Component, OnInit } from '@angular/core';
import { RecipeService } from './../service/recipe.service';
import { IRecipe } from './../models/recipe.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipes : IRecipe[];
  recipe :IRecipe;

  constructor(private _recipeService : RecipeService ) { }

  ngOnInit() {

  }
  
  addRecipe(recipeData:NgForm):void{
    this.recipe=recipeData.value;
    this._recipeService.postRecipe(this.recipe);
  }

}
