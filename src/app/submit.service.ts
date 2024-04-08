import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  submitData(data: string){
    console.log(data)
  }

  constructor() { }
}
