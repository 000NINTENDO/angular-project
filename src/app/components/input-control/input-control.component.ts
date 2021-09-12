import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css'],
})
export class InputControlComponent implements OnInit, OnChanges {
  @Input() userName: string = '';
  users: string[] = [];
  errors: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    debugger;
    this.errors = [];
  }

  add() {
    if (!this.users.includes(this.userName)) this.users.push(this.userName);
    else this.errors.push('User is already exist!');
  }
}
