import { Component, OnInit } from '@angular/core';
import { IphoneDataService } from '../iphone-data.service';
import { FormControl } from '@angular/forms';
import {Router, NavigationExtras} from '@angular/router';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

    data;
    modelName;
    userFirstSelection = 0; 
    userSecondSelection = 0;
    userThirdSelection = 0;
    question2Validation = false;
    question3Validation = false;
    question4Validation = false;
    finalQuestion = 0;
    userForthSelection = 0;
     answer2;
    answer3;
    answer4;


    constructor(private service:IphoneDataService, public router: Router) {
        this.data = this.service.getData();

    }


    ngOnInit() {
    }

    onChange(newValue) {

        this.userFirstSelection = newValue;

        let question1 = document.getElementById('question2').style.visibility = "visible";
        let question2 = document.getElementById('question3').style.visibility = "visible";


    }

    onChangeQ2(newValue){
        this.question2Validation = true;
        console.log(newValue);
        this.userSecondSelection = newValue;
        this.validateThirdQuestion();
    }
    onChangeQ3(newValue){
        this.question3Validation = true;
        console.log(newValue);
        this.userThirdSelection = newValue;
        this.validateThirdQuestion();
    }
    validateThirdQuestion(){

        if(this.question2Validation && this.question3Validation ){
            let question4 = document.getElementById('question4').style.visibility = "visible";
            if( this.userSecondSelection == 1 && this.userThirdSelection == 1){
                this.finalQuestion = 0;
            }else if(this.userSecondSelection == 1 && this.userThirdSelection == 0){
                this.finalQuestion = 1;
            }else if(this.userSecondSelection == 0 && this.userThirdSelection == 1){
                this.finalQuestion = 2;
            }else if(this.userSecondSelection == 0 && this.userThirdSelection == 0){
                this.finalQuestion = 3;
            }
        }
    }
    onChangeQ4(newValue){
        this.question4Validation = true;
        console.log(newValue);
        this.userForthSelection = newValue;
        let submitButton = document.getElementById('submitButton').style.visibility = "visible";
        
    }
     navigateToResults() {
         
         if(this.userSecondSelection == 0){
             this.answer2 = "yes";
         }else{
             this.answer2 = "no";
         }
         
         if(this.userThirdSelection == 0){
             this.answer3 = "yes";
         }else{
             this.answer3 = "no";
         }
         if(this.userForthSelection == 0){
             this.answer4 = "yes";
         }else{
             this.answer4 = "no";
         }
        
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "model": this.data.models[this.userFirstSelection].name,
                "q2": this.data.models[this.userFirstSelection].q1,
                "q3": this.data.models[this.userFirstSelection].q2,
                "q4": this.data.models[this.userFirstSelection].secondQuestions[this.finalQuestion].question,             
                "answer2": this.answer2,
                "answer3": this.answer3,
                "answer4": this.answer4
                
            }
        };

        this.router.navigate( ["results"] , navigationExtras);
    }


}
