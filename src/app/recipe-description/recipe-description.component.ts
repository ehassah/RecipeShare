import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-description',
  templateUrl: './recipe-description.component.html',
  styleUrls: ['./recipe-description.component.css']
})
export class RecipeDescriptionComponent implements OnInit {
  
  public recipes = [
    {
      "id": 1,
      "userID": 1,
      "title": "my recipe title",
      "description": "my description",
      "ingredent": "my ingredents",
      "direction": "what to follow",
      "prepTime": "1:8",
      "cookingTime": "1:8",
      "readyTime": "1:8",
      "noOfServing": 2,
      "category": "Food",
      "categoryOption": "",
      "photo": "../src/assets/images/default.png"
  },
  {
      "id": 2,
      "userID": 2,
      "title": "my recipe title",
      "description": "my description",
      "ingredent": "my ingredents",
      "direction": "what to follow",
      "prepTime": "1:8",
      "cookingTime": "1:8",
      "readyTime": "1:8",
      "noOfServing": 2,
      "category": "Food",
      "categoryOption": "",
      "photo": "../src/assets/images/default.png"
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
