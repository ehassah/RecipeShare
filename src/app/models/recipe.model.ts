import { Time } from "@angular/common";

export class Recipe {
    id: number;
    userID:number;
    title: string;
    description: string;
    ingredent: string;
    direction: string;
    prepTime: Time;
    cookingTime: Time;;
    readyTime: Time;
    noOfServing?: number;
    category:string;
    categoryOption?:string;
    photo?:string;
}