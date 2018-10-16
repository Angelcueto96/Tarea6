import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

    data ={
        "messageTop":"HELLO, I AM ANGEL CUETO. ",
        "messageBottom":  "WELCOME TO MY WEBPAGE!"
    }
  constructor() { }

  ngOnInit() {
  }

}
