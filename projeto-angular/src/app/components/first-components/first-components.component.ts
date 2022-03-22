import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-components',
  templateUrl: './first-components.component.html',
  styleUrls: ['./first-components.component.css']
})
export class FirstComponentsComponent implements OnInit {
  name: string = 'Paula';
  age: number = 35;
  job = "Cook";

  hobbies = ["Correr", "Jogar", "Estudar"];
  car ={
    name: 'Fiesta',
    year: 2014,
  }


  constructor() { }

  ngOnInit(): void {
  }

}
