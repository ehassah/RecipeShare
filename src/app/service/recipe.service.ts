import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { IRecipe } from '../models/recipe.model';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import {  AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public _url: string = "/assets/recipe.json";
  private postData={
    "id": 1,
        "userID": 1,
        "title": "my recipe title1",
        "description": "my description1",
        "ingredent": "my ingredents1",
        "direction": "what to follow1",
        "prepTime": "1:8",
        "cookingTime": "1:8",
        "readyTime": "1:8",
        "noOfServing": 2,
        "category": "Food",
        "categoryOption": "",
        "photo": "../src/assets/images/default.png"
  };

  recipesFirebase: any[];
  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  /*
  getRecipe(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }
*/
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
  
  getFromFirebase() {
    return this.db.list('/Recipes');
  }

  postRecipe(recipe:IRecipe):void {
    this.db.list('/Recipes').push(recipe);
  }

}
