import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { IRecipe } from '../models/recipe.model';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private _url: string = "/assets/recipe.json";
  private postData;

  recipesFirebase: any[];
  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  /*
  getRecipe(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
  */
  getFromFirebase() {
    return this.db.list('/Recipes');
  }

  postRecipe() {
    this.postData = [
      {
        "id": 4,
        "userID": 4,
        "title": "my recipe title4",
        "description": "my description4",
        "ingredent": "my ingredents4",
        "direction": "what to follow4",
        "prepTime": "1:8",
        "cookingTime": "1:8",
        "readyTime": "1:8",
        "noOfServing": 2,
        "category": "Food",
        "categoryOption": "",
        "photo": "../src/assets/images/default.png"
      }

    ];
    console.log("from service")
    return this.http.post(this._url, this.postData);
  }

}
