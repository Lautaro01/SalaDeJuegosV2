import { Component, Renderer2, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : boolean = true;

  @ViewChild("login") loginTemplate: any;
  @ViewChild("registroV2") registroTemplate: any;

  constructor(private _render : Renderer2) { }

  showRegistro()
  {
    if(this.login)
    {
      this._render.removeClass(this.loginTemplate.nativeElement,"animate__backInDown");
      this._render.addClass(this.loginTemplate.nativeElement,"animate__backOutUp");
        
      setTimeout(() => {
        this.login = !this.login;
      }, 500);

    }else{
      this._render.removeClass(this.registroTemplate.nativeElement,"animate__backInDown");
      this._render.addClass(this.registroTemplate.nativeElement,"animate__backOutUp");

      setTimeout(() => {
        this.login = !this.login;
      }, 500);

    }
  }
    
  ngOnInit(): void {
  }

}
