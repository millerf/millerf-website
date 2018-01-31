import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'millerf-web-contactform',
  templateUrl: './contact-form.component.html',
  styleUrls: ['../../../assets/scss/contactform.scss'],
})
export class ContactFormComponent {

  protected message_input: string;
  protected subject_input: string;
  protected email_input: string;
  protected message: string;
  protected contact_error = false;
  protected contact_sent = false;

  constructor() { }

  protected send_contact(f: NgForm) {

    if (!f.valid) {
      this.contact_error = true;
      return;
    }
    this.contact_error = false;
    this.contact_sent = true;

    setTimeout(() => this.contact_sent = false, 5000);
  }
}
