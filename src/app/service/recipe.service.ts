import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { IRecipe } from '../models/recipe.model';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private _url:string = "/assets/recipe.json";
  constructor(private http:HttpClient) { }

  getRecipe():Observable<IRecipe[]>{
    return this.http.get<IRecipe[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");    
  }
  

}
