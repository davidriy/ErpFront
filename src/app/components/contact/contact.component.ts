import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {
  alertKey = 'app-contact';
  name = '';
  email = '';

  constructor(
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  send(){
    this.name = '';
    this.email = '';
    this.messageService.add({
      key: this.alertKey,
      severity: 'success',
      summary: 'Email sent',
      detail: 'We will review your email and answer as quick as possible. Thank you!'
    });
  }
}
