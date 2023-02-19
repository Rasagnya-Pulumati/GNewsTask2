import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { PoliticsComponent } from './politics/politics.component';
import { CrimeComponent } from './crime/crime.component';
import { WorldComponent } from './world/world.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

import { Pipe1 } from './pipe';
const allLinks:Routes = [
  {path:'business',component:BusinessnewsComponent },
  {path:'politics',component:PoliticsComponent},
  {path:'crime',component:CrimeComponent},
  {path:'world',component:WorldComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'sports',component:SportsComponent},
  {path:'newsDetail/:category',component:ViewDetailsComponent},
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    BusinessnewsComponent,
    PoliticsComponent,
    CrimeComponent,
    WorldComponent,
    TechnologyComponent,
    SportsComponent,
    AdminComponent,
    HeaderComponent,
    ViewDetailsComponent,
    Pipe1
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
