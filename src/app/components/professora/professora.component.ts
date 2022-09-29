import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professora',
  templateUrl: './professora.component.html',
  styleUrls: ['./professora.component.css']
})
export class ProfessoraComponent implements OnInit {

  path: string = 'assets/professora.jpeg'


  constructor() { }

  ngOnInit(): void {
  }

}
