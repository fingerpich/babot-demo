import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('chatsContainer') private chatsContainer: ElementRef;

  chatText:string="";
  status:string="";

  userIndex=1;
  users=[
    {name:"Bot",avatar:"assets/bot.png"},
    {name:"MZ",avatar:"assets/user.png"}
  ];

  messages:[Object]=[
    {userIndex:0,message:"hello",userAvatar:this.users[0].avatar},
    {userIndex:1,message:"hello",userAvatar:this.users[1].avatar},
    {userIndex:0,message:"tell me what you want to know about babot service?",userAvatar:this.users[0].avatar}
  ];
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
    this.messages.push(
      {
        userIndex:1,
        message:this.chatText,
        userAvatar:this.users[0].avatar
      }
    );
    this.status="bot is typing";
    this.chatText="";

    setTimeout(()=>{
      this.status="";
      this.messages.push(
        {
          userIndex:0,
          message:"I don't know, I will ask the owner and answer you later",
          userAvatar:this.users[0].avatar
        }
      );
      this.messages.push(
        {
          userIndex:0,
          message:"have you other question?",
          userAvatar:this.users[0].avatar
        }
      );
      if(this.messages.length>4){
        this.messages.splice(0,1);
      }
    },500)
  }
}