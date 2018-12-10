import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  private urlLogin = 'https://us-central1-game-test-8ed44.cloudfunctions.net/login'
  private urlNickName = 'https://us-central1-game-test-8ed44.cloudfunctions.net/app/changeNickname?token=';
  private urlCadastro = 'https://us-central1-game-test-8ed44.cloudfunctions.net/createAccount';
  user = new User();
  confirmPassword: string;

  constructor(private route : Router) { }

  ngOnInit() {
  }

  cadastrar(user : User) {

    let obj = {email: user.email, password: user.password};

    $.post(this.urlCadastro, obj).done( data => {
      console.log(data);
      $.post(this.urlLogin, obj).done( data => {
        console.log(data);
        let token = data.token;
        this.salvarNickName(user, token);
        user._id = token;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.route.navigate(['/']);
      });
    });
  }

  salvarNickName(user : User, token : string) {
    $.post(this.urlNickName + token, {nickname : user.nickname}).done( data => {
      console.log(data);
    });
  }

  addUser (event : Event){
    event.preventDefault();

    this.cadastrar(this.user);
  }

}
