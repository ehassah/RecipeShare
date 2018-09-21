import { RecipeService } from './../service/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-description',
  templateUrl: './recipe-description.component.html',
  styleUrls: ['./recipe-description.component.css']
})
export class RecipeDescriptionComponent implements OnInit {
  
  public recipes = [];
  public errorMsg;
  constructor(private _recipeService : RecipeService) { }

  ngOnInit() {
    this._recipeService.getRecipe()
    .subscribe(data => this.recipes = data,
              error => this.errorMsg = error);
  }

}
