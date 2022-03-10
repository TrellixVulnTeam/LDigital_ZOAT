import { Component, OnInit } from '@angular/core';
import {PersonServices} from '../services/person-services';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private moldalSW: PersonServices) { }

  ngOnInit(): void {
  }

  closeModal():void {
    this.moldalSW.$modal.emit(false);
  }
}
