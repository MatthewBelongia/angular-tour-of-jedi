import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jedi',
  templateUrl: './jedi.component.html',
  styleUrls: ['./jedi.component.css']
})
export class JediComponent implements OnInit {

  jedi = 'Anakin';
  
  constructor() { }

  ngOnInit() {}

}
