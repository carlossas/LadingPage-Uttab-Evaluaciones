import { Component, OnInit } from '@angular/core';
import { VistaService } from '../services/vista.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor( public vistaS : VistaService) { }

  ngOnInit() {
  }

  scrollTop(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }

}
