import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-survey-results',
    templateUrl: './survey-results.component.html',
    styleUrls: ['./survey-results.component.scss']
})
export class SurveyResultsComponent implements OnInit {

    data;
    userFirstSelection = 0; 
    userSecondSelection = 0;
    userThirdSelection = 0;
    userForthSelection = 0;
    
    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            console.log(params)
            this.data = params["data"];
            this.userFirstSelection = params["usersFirstSelection"];
            this.userSecondSelection = params["userSecondSelection"];
            this.userThirdSelection = params["userThirdSelection"];
            this.userFirstSelection = params["userForthSelection"];
            
            
        });

    }

    ngOnInit() {
    }

}
