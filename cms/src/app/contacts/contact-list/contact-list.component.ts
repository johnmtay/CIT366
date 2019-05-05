import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [
    new Contact('Bro. Jackson', '#'),
    new Contact('Bro. Barzee','#')
  ];

  constructor() { }

  ngOnInit() {
  }

}
