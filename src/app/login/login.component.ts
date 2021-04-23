import { Component, Renderer2, OnInit,ViewChild, ElementRef } from '@angular/core';
import { AuthFirebaseService } from './services/auth-firebase.service';
import { ValidateFormService } from './services/validate-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : boolean = true;
  loading : boolean = false;

  mensajeError : string = "";
  usuarioCreado : string = "";
  

  @ViewChild("login")loginTemplate!: ElementRef;
  @ViewChild("registroV2")registroTemplate!: ElementRef;

  @ViewChild("usernameLogin")usernameLogin!: ElementRef;
  @ViewChild("passwordLogin")passwordLogin!: ElementRef;

  @ViewChild("usernameRegister")usernameRegister!: ElementRef;
  @ViewChild("emailRegister")emailRegister!: ElementRef;
  @ViewChild("passwordRegister")passwordRegister!: ElementRef;
  @ViewChild("passwordConfirmRegister")passwordConfirmRegister!: ElementRef;
  




  constructor(private _render : Renderer2, private _validator : ValidateFormService, private _firebase : AuthFirebaseService) { }

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

  logIn()
  {
    
    this._validator.validarInputs(
      this.usernameLogin,
      this.passwordLogin,
    ).forEach(
      e => {
        if(e.error)
        {
          this._render.removeClass(e.element,"animate__flash");

          this._render.addClass(e.element,"errorInput");
          this._render.addClass(e.element,"animate__flash");
        }else{
          this._render.removeClass(e.element,"errorInput");
          this._render.removeClass(e.element,"animate__flash");
        }
      }
    )
    
  }

  signIn(){

    let flat = true;
    

    if(this.loading == true)
    {
      console.log("loading en true");
    }
    else{
      console.log("loading en false");
    }

    console.log(flat);

    this._validator.validarInputs(
      this.emailRegister,
      this.usernameRegister,
      this.passwordConfirmRegister,
      this.passwordRegister
      ).forEach(e => {
        if(e.error){

          this.agregarErrorClass(e.element);
          this.mensajeError = "¡Complete todos los datos!";

          flat = false;
        }else{
          this._render.removeClass(e.element,"errorInput");
          
          
        } 
      })

    if(flat && (this.loading == false)){

      if(this._validator.validarConfirmarContraseña(this.passwordRegister.nativeElement.value,this.passwordConfirmRegister.nativeElement.value) != true)
      {
        this.agregarErrorClass(this.passwordConfirmRegister.nativeElement);
        this.agregarErrorClass(this.passwordRegister.nativeElement);

        this.mensajeError = "¡Las contraseñas deben iguales!";
      }
      else
      {
        this.loading = true;
        this._firebase.crearUsuario(this.emailRegister.nativeElement.value,this.passwordRegister.nativeElement.value).then((userCredential) => {
          this.loading = false;
          this.showRegistro();
          this.usuarioCreado = this.usernameRegister.nativeElement.value;
        })
        .catch((error) => {
          this.loading = false;

          // this._render.addClass(this.emailRegister.nativeElement,"errorInput");
          // this._render.addClass(this.emailRegister.nativeElement,"animate__animated");
          // this._render.addClass(this.emailRegister.nativeElement,"animate__shakeX");

          this.mensajeError = error.message;

        });
      }
    }

  }

  agregarErrorClass(elemento : string)
  {
    this._render.addClass(elemento,"errorInput");

    this._render.addClass(elemento,"animate__animated");
    this._render.addClass(elemento,"animate__shakeX");
  }

    
  ngOnInit(): void {
  }

}
