import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  contacts: Contact[];

  currentContact: Contact = {
    id: 0,
    name: '',
    email: '',
    phone: ''
  };

  isEdit: boolean = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  onNewContact(contact: Contact) {
    this.contacts.push(contact);
  }

  editContact(contact: Contact) {
    this.currentContact = contact;
    this.isEdit = true;
  }

  onUpdatedContact(contact: Contact) {
    this.contacts.forEach((cur, index) => {
      if (contact.id === cur.id) {
        this.contacts.splice(index, 1);
        this.contacts.push(contact);
        this.isEdit = false;
        this.currentContact = {
          id: 0,
          name: '',
          email: '',
          phone: ''
        };
      }
    });
  }

  deleteContact(contact: Contact) {
    if (confirm('Are you sure you want to delete?')) {
      this.contactService.deleteContact(contact.id).subscribe(() => {
        this.contacts.forEach((cur, index) => {
          if (contact.id === cur.id) {
            this.contacts.splice(index, 1);
          }
        });
      });
    }
  }

}
