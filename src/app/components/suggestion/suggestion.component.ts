import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css'],
  providers: [MessageService]
})
export class SuggestionComponent implements OnInit {
  alertKey = 'app-suggestion';
  subject = '';
  box = '';

  constructor(
    private messageService: MessageService,
    ) { }

  ngOnInit(): void {
  }
  send(){
    this.subject = '';
    this.box = '';
    this.messageService.add({
      key: this.alertKey,
      severity: 'success',
      summary: 'Suggestion received',
      detail: 'We will review your suggestion. Thank you!'
    });
  }

}
