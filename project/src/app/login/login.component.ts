import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import * as $ from 'jquery';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private urlLogin = 'https://us-central1-game-test-8ed44.cloudfunctions.net/login';
  private urlDetalhes = 'https://us-central1-game-test-8ed44.cloudfunctions.net/app/getUserInfo?token=';
  user = new User();
  
  constructor(private route : Router) { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();

    $.post(this.urlLogin, {email : this.user.email, password : this.user.password})
    .done( data => {
      let token = data.token;
      this.user._id = token;
      $.get(this.urlDetalhes + token).done( data => {
        this.user.nickname = data.nickname;
        console.log(this.user);
        localStorage.setItem("currentUser", JSON.stringify(this.user));
        this.route.navigate(['/']);
      });
    });
  }

}
