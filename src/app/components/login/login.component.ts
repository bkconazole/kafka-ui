import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    $(document).ready(function () {

      'use strict';
      
      var materialInputs = $('input.input-material');
  
      // activate labels for prefilled values
      materialInputs.filter(function() { return $(this).val() !== ""; }).siblings('.label-material').addClass('active');
  
      // move label on focus
      materialInputs.on('focus', function () {
          $(this).siblings('.label-material').addClass('active');
      });

      // remove/keep label on blur
      materialInputs.on('blur', function () {
          $(this).siblings('.label-material').removeClass('active');
  
          if ($(this).val() !== '') {
              $(this).siblings('.label-material').addClass('active');
          } else {
              $(this).siblings('.label-material').removeClass('active');
          }
      });    
  });

  }

  public onLoginClick() {
    this.router.navigate(['home']);
  }

}
