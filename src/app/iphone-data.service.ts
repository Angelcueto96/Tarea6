import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class IphoneDataService {

    data = {
        "models":[
            {
                "name":"iphone XS",
                "q1":"Do you have it or would you buy it?",
                "q2":"Do you think the XS is the perfect size?",
                "secondQuestions":{
                    "true-true":"Do you consider it the best iPhone ever ?",
                    "true-false":"Would you like it to be bigger or smaller",
                    "false-true":"Would you buy it if it was cheaper?",
                    "false-false":"Is this model really your favorite?"

                }


            },
            {
                "name":"iphone XS Max",
                "q1":"Do you have it or would you buy it?",
                "q2":"Do you think the XS Max is to big?",
                "secondQuestions":{
                    "true-true":"Do you consider it the best iPhone ever ?",
                    "true-false":"Do you think it is the perfect size?",
                    "false-true":"Do you think it is way too expensive?",
                    "false-false":"Is this model really your favorite?"

                }


            },
            {
                "name":"iphone X",
                "q1":"Do you like the borderless screen?",
                "q2":"Do you think it is too expensive for what you get?",
                "secondQuestions":{
                    "true-true":" Would you buy it if it was cheaper?",
                    "true-false":"Do you have it or would you buy it?",
                    "false-true":"Is this model really your favorite?",
                    "false-false":"Would you remove the borderless screen?"

                }


            },
            {
                "name":"iphone 8",
                "q1":"Do you feel like it is the same thing as an iphone X",
                "q2":"Do you like the screen yo be bigger",
                "secondQuestions":{
                    "true-true": "Would you buy another iphone?",
                    "true-false":"Do you think that it is the best iphone ever?",
                    "false-true":"Would you rather have a better iphone",
                    "false-false":"Do you think it is worth buying a better iphone?"

                }


            },
            {
                "name":"iphone 8 Plus",
                "q1":"Do you think the plus size is the best size ever?",
                "q2":"would you like it to have a borderless screen?",
                "secondQuestions":{
                    "true-true": "Would you buy a newer iphone?",
                    "true-false":"Do you think this is the best iphone ever?",
                    "false-true":"Would you buy a newer iphone if they were cheaper?",
                    "false-false":"Would it be perfect if it was bigger?"

                }


            }
        ],

    }

    constructor() { }
    
    getData():Object{
        return this.data;
    }
}
