import { Component, OnInit } from '@angular/core';
import { User } from './models/user.class';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public num: number;
  public user: User;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.comprNum(this.num);
  }

  private comprNum (num): void {
    if (this.num > 4) {
      console.log('Mayor que 4');
    }
  }

  public callService () {
    this.loginService.getDataUser().subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
