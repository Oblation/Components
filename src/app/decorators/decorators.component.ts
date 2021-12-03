import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.scss'],
  inputs: ['name'],
  outputs: ['saveContactPerson']
})
export class DecoratorsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
