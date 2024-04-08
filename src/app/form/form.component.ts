import { NgFor, NgIf } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SubmitService } from '../submit.service';


interface Control {
  name: string,
  type: string,
  options?: string[]
}
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  @Input() json!: any;
  public form: FormGroup = this.fb.group({});
  
  controls: Control[] = []

  ngOnChanges() {
    this.controls = []
    this.createForm()
  }

  createForm(){
    for (let key of Object.keys(this.json)){
      if(this.json[key]['type'] == 'select'){
        this.controls.push({name: key, type: this.json[key]['type'], options: this.json[key]['options']})
      } else{
        this.controls.push({name: key, type: this.json[key]['type']})
      }
      this.form.addControl(
        key,
        this.fb.control('', [])
      );
    }
  }

  constructor(private fb: FormBuilder, private ss: SubmitService) {
  }

  onSubmit(){
    this.ss.submitData(this.form.value)
  }
}