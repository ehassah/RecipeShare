import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { RecipeService } from './service/recipe.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDescriptionComponent } from './recipe-description/recipe-description.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDBhLKxp7eQT7kn1Py2yrDTRrJEvRzAaQU",
  authDomain: "recipeshare-99cb6.firebaseapp.com",
  databaseURL: "https://recipeshare-99cb6.firebaseio.com",
  projectId: "recipeshare-99cb6",
  storageBucket: "recipeshare-99cb6.appspot.com",
  messagingSenderId: "826936242990"
};

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'recipe-description', component: RecipeDescriptionComponent },
  { path: 'recipe-description/:id', component: RecipeDetailComponent },
  { path: 'recipe-detail', component: RecipeDetailComponent },
  { path: 'edit-recipe', component: EditRecipeComponent },
  { path: '**', component: PageNotFoundComponent }
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
    RecipeDescriptionComponent,
    PageNotFoundComponent,
    RecipeDetailComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
