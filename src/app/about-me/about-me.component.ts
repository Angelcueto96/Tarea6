import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

    data = {
        "aboutMe": [
            {
                "title": "Sports",
                "subTitle": "WHAT I LIKE TO DO",
                "description": "Sports are one of my favorite things to practice and watch. If I had to say which one is my favorite, I would it is soccer, sport I have played all my life. Other sports I enjoy to practice are basketball, tennis, table tennis and volleyball. I can pretty much watch any sport (except golf) and don’t get bored."
            },
            {
                "title": "MUSIC",
                "subTitle": "WHAT I LISTEN",
                "description": "When talking about music, it depends a lot on how I am feeling. I always try to listen to new music since I get easily bored from a genre. One Interesting thing that I enjoy are acoustic covers from popular songs. I like to keep track of what’s new."
            },
            {
                "title": "CLOTHES",
                "subTitle": "WHAT I WEAR",
                "description": "The way I dress may vary from time to time. What I like to wear the most are casual button-down shirts with jeans. The colors I usually wear are blue, red, orange, pink, black and white. One thing I would spend money on are shoes."
            },
            {
                "title": "FOOD",
                "subTitle": "WHAT I EAT",
                "description": "I am the type of person that pretty much eats everything. If I had to say my favorite types of food those would be sandwiches, hamburgers and burritos. Other thing that I usually can’t resist is cheese, I believe I can give up a lot of things in food, but not cheese."
            }
        ],
        "subTitle":"COMPUTER SCIENCE AND TECHNOLOGY STUDENT"
    }
    constructor() { }

    ngOnInit() {
    }

}
