import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

private _url : string="../src/assets/recipe.json";

  constructor(private http:HttpClient) { }

  getRecipe():Observable<Recipe>{
    console.log(this.http.get<Recipe>(this._url));
    return this.http.get<Recipe>(this._url);
  }
}
