import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/core/services/test.service';

@Component({
  selector: 'app-test-compo',
  templateUrl: './test-compo.component.html',
  styleUrls: ['./test-compo.component.css']
})
export class TestCompoComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {
    console.log(this.testService.mandarMensajeMayusculas('hola'));
  }

  suma(num1: number, num2: number) {
    return num1 + num2;
  }

}
