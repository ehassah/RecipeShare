import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeService } from './service/recipe.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDescriptionComponent } from './recipe-description/recipe-description.component';

export const routes: Routes =[
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'home/add-recipe', component: AddRecipeComponent },
  { path: 'home/recipe-description', component: RecipeDescriptionComponent },
  { path: 'home/recipe-description/recipe-description', component: EditRecipeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    RecipeDescriptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
