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
      time_zone : ['Mexico/Monterrey', Validators.required],
    });

  }

  register(){
    let user = {
      role_id : this.authService.encrypt(this.registerFG.value.role_id),
      first_name : this.authService.encrypt(this.registerFG.value.first_name),
      last_name : this.authService.encrypt(this.registerFG.value.last_name),
      email: this.authService.encrypt(this.registerFG.value.email),
      password: this.authService.encrypt(this.registerFG.value.password),
      country_code: this.authService.encrypt(this.registerFG.value.country_code),
      phone_number: this.authService.encrypt(this.registerFG.value.phone_number),
      country: this.authService.encrypt(this.registerFG.value.phone_number),
      date_of_birth: this.authService.encrypt(this.registerFG.value.country),
      gender: this.authService.encrypt(this.registerFG.value.gender),
      time_zone : this.authService.encrypt(this.registerFG.value.time_zone),
    }

    this.authService.register(user)

  }

}
