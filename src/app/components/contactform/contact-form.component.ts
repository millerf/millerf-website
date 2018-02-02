import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'millerf-web-contactform',
  templateUrl: './contact-form.component.html',
  styleUrls: ['../../../assets/scss/contactform.scss'],
})
export class ContactFormComponent {

  public message_input: string;
  public subject_input: string;
  public email_input: string;
  public message: string;
  public contact_error = false;
  public contact_sent = false;

  constructor() { }

  public send_contact(f: NgForm) {

    if (!f.valid) {
      this.contact_error = true;
      return;
    }
    this.contact_error = false;
    this.contact_sent = true;

    setTimeout(() => this.contact_sent = false, 5000);
  }
}
