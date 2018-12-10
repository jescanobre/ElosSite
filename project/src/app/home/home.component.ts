// import { element, $ } from 'protractor';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, RouterModule } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }

  // public imgPersonagens:Array<string> = [ 
  //   "../../assets/images/Armature_escudo_27.png",
  //   "../../assets/images/Armature_atk_33.png"
  // ];

  public imgPersonagensMap = new Map([
    ["limonada",  "../../assets/images/Armature_escudo_27.png",],
    ["zonzo",  "../../assets/images/Armature_atk_33.png"]
  ]);

  // public linkPersonagemMap = new Map([
  //   [],
  //   []
  // ])

  mudarImg(event){
    event.preventDefault();
    let el = event.currentTarget;
    let id = event.currentTarget.id;

    let img = this.imgPersonagensMap.get(id);

    let element = $('#displayImg');
    element.attr('src',img);

    if(id == 'zonzo') {
      $('#displayName').html('ZONZO');
      $('#linkPerfil').attr('href', '/perfilpersonagemzonzo')
    } else if(id == 'limonada') {
      $('#displayName').html('LIMONADA');
      $('#linkPerfil').attr('href', '/perfilpersonagemlimonada')
    }
  };

}
