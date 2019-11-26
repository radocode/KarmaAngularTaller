import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-compo',
  templateUrl: './test-compo.component.html',
  styleUrls: ['./test-compo.component.css']
})
export class TestCompoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  suma(num1: number, num2: number) {
    return num1 + num2;
  }

}
