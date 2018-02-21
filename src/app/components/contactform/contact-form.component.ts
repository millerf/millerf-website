import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

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

  constructor (private http: HttpClient) {
  }

  public send_contact (f: NgForm) {

    if (!f.valid) {
      this.contact_error = true;
      return;
    }
    this.contact_error = false;
    this.contact_sent = true;

    const headers = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};
    const body = new HttpParams().set('subject', this.subject_input).set('message', this.message_input).set('email', this.email_input);
    this.http.post('assets/contact.php', body, headers).subscribe(
      (rep: boolean) => {
        this.contact_sent = rep;
       },
      () => {
        this.contact_sent = false;
      }
    );
  }
}
