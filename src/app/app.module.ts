import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { IntroComponent } from './intro/intro.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyResultsComponent } from './survey-results/survey-results.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'results',  component: SurveyResultsComponent }
];

@NgModule({
    exports: [ RouterModule ],
    declarations: [
        AppComponent,
        TopNavBarComponent,
        IntroComponent,
        AboutMeComponent,
        HobbiesComponent,
        SurveyComponent,
        SurveyResultsComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes
        ),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
