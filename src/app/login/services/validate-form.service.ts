import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateFormService {

  constructor() { }

  
  validarInputs(...input: ElementRef[]) :  Array<any> 
  {

    let inputResponseVar : Array<any> = [];

    input.forEach( e => {
      if(e.nativeElement.value == "")
      {
        inputResponseVar.push({
            id : e.nativeElement.id,
            error : true,
            type : "Input Vacio",
            element : e.nativeElement
        }
        )
      }
      else{
        inputResponseVar.push({
          id : e.nativeElement.id,
          error : false,
          type : "Correcto",
          element : e.nativeElement
      }
      )
      }
    })

    console.log(inputResponseVar);
    return inputResponseVar;
  }

    validarInputVacio(input: ElementRef)
    {
      return input.nativeElement.value == ""!; 
    }
}
