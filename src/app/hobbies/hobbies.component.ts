import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

    data ={
        "hobbies": [
            {
                "description": "I play Acustic guitar"
            },
            {
                "description": "I enjoy playing tennis"
            },
            {
                "description": "I enjoy playing videogames"
            },
            {
                "description": "I like to know about cars"
            },
            
            
        ],
        "subTitle":"What I Like to do"
    }
    constructor() { }

    ngOnInit() {
    }

}
