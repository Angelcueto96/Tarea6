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
                "secondQuestions":[
                    {
                        "question":"Do you consider it the best iPhone ever ?",
                        "description":"true-true"
                    },
                    {   
                        "question":"Would you like it to be bigger or smaller",
                        "description":"true-false"
                    },
                    {
                        "question":"Would you buy it if it was cheaper?",
                        "description":"false-true"
                    },
                    {
                        "question":"Is this model really your favorite?",
                        "description":"false-false"
                    }
                ]


            },
            {
                "name":"iphone XS Max",
                "q1":"Do you have it or would you buy it?",
                "q2":"Do you think the XS Max is to big?",
                "secondQuestions":[
                    {
                        "question":"Do you consider it is the best iPhone ever ?",
                        "description":"true-true"
                    },
                    {   
                        "question":"Do you think it is the perfect size?",
                        "description":"true-false"
                    },
                    {
                        "question":"Do you think it is way too expensive?",
                        "description":"false-true"
                    },
                    {
                        "question":"Is this model really your favorite?",
                        "description":"false-false"
                    }
                ]
                


            },
            {
                "name":"iphone X",
                "q1":"Do you like the borderless screen?",
                "q2":"Do you think it is too expensive for what you get?",
                "secondQuestions":[
                    {
                        "question":"Would you buy it if it was cheaper?",
                        "description":"true-true"
                    },
                    {   
                        "question":"Do you have it or would you buy it?",
                        "description":"true-false"
                    },
                    {
                        "question":"Is this model really your favorite?",
                        "description":"false-true"
                    },
                    {
                        "question":"Would you remove the borderless screen?",
                        "description":"false-false"
                    }
                ]
                


            },
            {
                "name":"iphone 8",
                "q1":"Do you feel like it is the same thing as an iphone X",
                "q2":"Do you like the screen yo be bigger",
                "secondQuestions":[
                    {
                        "question":"Would you buy another iphone?",
                        "description":"true-true"
                    },
                    {   
                        "question":"Do you think that it is the best iphone ever?",
                        "description":"true-false"
                    },
                    {
                        "question":"Would you rather have a better iphone",
                        "description":"false-true"
                    },
                    {
                        "question":"Do you think it is worth buying a better iphone?",
                        "description":"false-false"
                    }
                ]


            },
            {
                "name":"iphone 8 Plus",
                "q1":"Do you think the plus size is the best size ever?",
                "q2":"would you like it to have a borderless screen?",
                "secondQuestions":[
                    {
                        "question":"Would you buy a newer iphone?",
                        "description":"true-true"
                    },
                    {   
                        "question":"Do you think this is the best iphone ever?",
                        "description":"true-false"
                    },
                    {
                        "question":"Would you buy a newer iphone if they were cheaper?",
                        "description":"false-true"
                    },
                    {
                        "question":"Would it be perfect if it was bigger?",
                        "description":"false-false"
                    }
                ]
                


            }
        ],

    }

    constructor() { }

    getData():Object{
        return this.data;
    }
}
