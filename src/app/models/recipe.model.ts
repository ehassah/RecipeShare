export interface IRecipe {    
    id: number;
    userID:number;
    title: string;
    description: string;
    ingredent: string;
    direction: string;
    prepTime: number;
    cookingTime: number;
    readyTime: number;
    noOfServing?: number;
    category:string;
    categoryOption?:string;
    photo?:string;
}