import { Component, OnInit } from '@angular/core';
import { IphoneDataService } from '../iphone-data.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

    data;
    userSelection = 0; 

    constructor(private service:IphoneDataService) {
        this.data = this.service.getData();
    }


    ngOnInit() {
    }

    onChange(newValue) {
        console.log(newValue);
        this.userSelection = newValue;

        let questions1 = document.getElementById('question2').style.visibility = "visible";
        let questions2 = document.getElementById('question3').style.visibility = "visible";


    }

}
