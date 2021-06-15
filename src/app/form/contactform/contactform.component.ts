import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  @Output() newContact: EventEmitter<Contact> = new EventEmitter();
  @Output() updatedContact: EventEmitter<Contact> = new EventEmitter();
  @Input() currentContact: Contact;
  @Input() isEdit: boolean;

  constructor(private ContactService: ContactService) {}

  ngOnInit() {
  }

  addContact({name, email, phone}) {
    if (!name || !email || !phone) {
      alert('Please add contact.');
    } else {
      this.ContactService.saveContact({ name, email, phone } as Contact).subscribe(contact => {
        this.newContact.emit(contact);
      });
    }
  }

  updateContact() {
    this.ContactService.updateContact(this.currentContact).subscribe(contact => {
      console.log(contact);
      this.isEdit = false;
      this.updatedContact.emit(contact);
    });
  }

}
