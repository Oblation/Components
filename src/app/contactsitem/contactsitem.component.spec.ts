import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsitemComponent } from './contactsitem.component';

describe('ContactsitemComponent', () => {
  let component: ContactsitemComponent;
  let fixture: ComponentFixture<ContactsitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
