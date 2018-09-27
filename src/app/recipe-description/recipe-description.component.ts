import { RecipeService } from './../service/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipe-description',
  templateUrl: './recipe-description.component.html',
  styleUrls: ['./recipe-description.component.css']
})
export class RecipeDescriptionComponent implements OnInit {
  
  public recipes = [];
  public errorMsg;
  constructor(private _recipeService : RecipeService, private router :Router) { }

  ngOnInit() {
    
    /*this._recipeService.getRecipe()
     .subscribe(data => this.recipes = data,
              error => this.errorMsg = error);*/

    this._recipeService.getFromFirebase().valueChanges()
    .subscribe(data => this.recipes = data);
  }

  onSelect(recipe){
    this.router.navigate(['/recipe-description', recipe.id]);
  }

  addPost(){
    
  }
}
