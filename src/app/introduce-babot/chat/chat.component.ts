import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [
    trigger('msgAnim', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class ChatComponent implements OnInit {
  @ViewChild('chatsContainer') private chatsContainer: ElementRef;

  chatText:string = '';
  status:string = '';
  placeHolder:string = 'chat with bot';

  userIndex=1;
  users=[
    {name: 'Bot', avatar: 'assets/bot.png'},
    {name: 'MZ', avatar: 'assets/user.png'}
  ];

  messages:[Object] = [
    {userIndex: 0, message: 'سلام، من یک بات هستم', userAvatar: this.users[0].avatar},
    {userIndex: 0, message: 'من ایجاد شده ام تا به سوالات شما در مورد این سرویس پاسخ دهم', userAvatar: this.users[0].avatar},
    {userIndex: 0, message: 'هر سوالی در مورد این سرویس دارید بپرسید?', userAvatar: this.users[0].avatar}
  ];

  isChatterMessage(msg) {
    return msg.userIndex === this.userIndex;
  }
  constructor() { }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.chatsContainer.nativeElement.scrollTop = this.chatsContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  sendChat() {
    if (this.chatText.length) {
      this.messages.push(
        {
          userIndex: 1,
          message: this.chatText,
          userAvatar: this.users[1].avatar
        }
      );

      this.status = 'bot is thinking';
      this.chatText = '';

      setTimeout(() => {
        this.status = '';
        this.messages.push(
          {
            userIndex: 0,
            message: "I don't know, I will ask the owner and answer you later",
            userAvatar: this.users[0].avatar
          }
        );
        if (this.messages.length > 20) {
          this.messages.splice(0, 3);
        }
      }, 500);
    }
  }
}
