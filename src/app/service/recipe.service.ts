import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import {  AngularFireDatabase } from 'angularfire2/database';
import { FirebaseAuth } from 'angularfire2';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private db: AngularFireDatabase) { }

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

  postData(data:any):void {
    this.db.list('/Recipes').push(data);
  }

  login(data:any):void{
    

  }

}
