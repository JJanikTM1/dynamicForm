import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactiveForm';
  json = {"ala" : {"type":"text"},"ma": {"type":"number"},"kota":{"type":"select","options":["a","b","c"]}}
  turned = false

  changeJSON(){
    if (this.turned){
      this.json = {"ala" : {"type":"text"},"ma": {"type":"number"},"kota":{"type":"select","options":["a","b","c"]}}
    } else {
      this.json = {"kota":{"type":"select","options":["a","b","c"]},"ma": {"type":"text"},"ala" : {"type":"number"}}
    }
    this.turned = !this.turned
  }
}