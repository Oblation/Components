import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contacts-item',
  template: ` <p>{{ name }}</p> `,
})
export class ContactsItemComponent {
  _name: any;

  @Input() set name(value: string) {
    this._name = value + '*'
  }

  get name(): string {
    return this._name || 'Unknown'
  }
}