import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-survey-results',
    templateUrl: './survey-results.component.html',
    styleUrls: ['./survey-results.component.scss']
})
export class SurveyResultsComponent implements OnInit {

    model;
    q2;
    q3;
    q4;
    answer2;
    answer3;
    answer4;
   
    
    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            
            this.model = params["model"];
            this.q2 = params["q2"];
            this.q3 = params["q3"];
            this.q4 = params["q4"];
            this.answer2 = params["answer2"];
            this.answer3 = params["answer3"];
            this.answer4 = params["answer4"];
     
            
        });
        

    }

    ngOnInit() {
    }

}
