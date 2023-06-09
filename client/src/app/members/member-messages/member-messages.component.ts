import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css'],
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm?: NgForm;
  @Input() username?: string;
  messageContent = '';

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}

  sendMessage() {
    if (!this.username) return;

    // this.messageService
    //   .sendMessage(this.username, this.messageContent)
    //   .subscribe({
    //     next: (message) => {
    //       this.messages.push(message);
    //       this.messageForm?.reset();
    //     },
    //   });

    // promise
    this.messageService
      .sendMessage(this.username, this.messageContent)
      .then(() => {
        // don't need to do anything here with the message we get back because our message threads observable is handling that
        this.messageForm?.reset();
      });
  }
}
