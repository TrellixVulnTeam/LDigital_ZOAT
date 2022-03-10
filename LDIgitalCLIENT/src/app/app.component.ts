import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PersonServices} from './services/person-services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app01';

  createPerson!: FormGroup;
  Persons!:any;
  modalSwitch!:boolean;

  constructor (private readonly fb: FormBuilder, private services : PersonServices) {

  }
  ngOnInit(): void {
      this.services.$modal.subscribe(value => {
        this.modalSwitch = value;
      })
      this.createPerson = this.initForm();
      this.services.getAllPersons().subscribe(persons => {
        this.Persons = persons
      })
  }


  onSubmit (): void {
    this.services.createPerson(this.createPerson?.value).subscribe(result => {
      result?.data && this.Persons.data.push(result.data);
      alert(result?.mensaje ? result.mensaje : "Algo ha fallado");
    });
  }


  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birth: ['', [Validators.required]]
    })
  }

  openModal(): void {
    this.modalSwitch = true;
  }
} 
