import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contactview',
  templateUrl: './contactview.component.html',
  styleUrls: ['./contactview.component.css']
})
export class ContactviewComponent implements OnInit {
  contact: Contact;

  constructor(private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactService.getContact(id).subscribe(contact => (this.contact = contact));
  }

}
