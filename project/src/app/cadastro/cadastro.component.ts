import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  _id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor() { }

  ngOnInit() {
  }

  addUser (){}

}
