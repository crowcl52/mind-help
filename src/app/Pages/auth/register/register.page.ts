import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public registerFG: FormGroup;


  constructor( private _formBuilder: FormBuilder, private authService: AuthService ) { }

  ngOnInit() {

    this.registerFG = this._formBuilder.group({
      role_id : ['2', Validators.required],
      first_name : ['', Validators.required],
      last_name : ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      country_code: ['+52', Validators.required],
      phone_number: ['', Validators.required],
      country: ['MX', Validators.required],
      date_of_birth: ['', Validators.required],
      gender: ['', Validators.required],
      time_zone : ['Asia/Kolkata', Validators.required],
    });

    console.log(this.authService.decrypt("5GBaUDB0aFa1OFzM92shJfRT8J7ejf4KzP2tAfyJvbbMT+iIdRLMgV9w4xtRBYAhRADIiTlt9jJ8IJvymp9G52SMdDpH2r1Vt98NHz0VaBHzPQziCKy98+J2D4zEFknts1wuZlBQnmm3yumjMqRpvfs4ZND74KCPWIEg309oF86d3ViNif8DPM6RA1sYlFSfdHoHXxjx96uXmcxeTyIvVQmcYUBSYYieqz9z7QfCRmPFynwtvXMF9FUpNCxSu5rN"))
    console.log(this.authService.encrypt("5GBaUDB0aFa1OFzM92shJfRT8J7ejf4KzP2tAfyJvbbMT+iIdRLMgV9w4xtRBYAhRADIiTlt9jJ8IJvymp9G52SMdDpH2r1Vt98NHz0VaBHzPQziCKy98+J2D4zEFknts1wuZlBQnmm3yumjMqRpvfs4ZND74KCPWIEg309oF86d3ViNif8DPM6RA1sYlFSfdHoHXxjx96uXmcxeTyIvVQmcYUBSYYieqz9z7QfCRmPFynwtvXMF9FUpNCxSu5rN"))

  }

  register(){

    // let userData = new FormData();
    let user = {
      role_id :(this.registerFG.value.role_id),
      first_name :(this.registerFG.value.first_name),
      last_name :(this.registerFG.value.last_name),
      email:(this.registerFG.value.email),
      password:(this.registerFG.value.password),
      country_code:(this.registerFG.value.country_code),
      phone_number:(this.registerFG.value.phone_number),
      country:(this.registerFG.value.phone_number),
      date_of_birth:(this.registerFG.value.country),
      gender:(this.registerFG.value.gender),
      time_zone :(this.registerFG.value.time_zone),
    }
  
    let encryptUSer = this.authService.encrypt(user)

    console.log(encryptUSer)
    this.authService.register(encryptUSer);

  }

}
