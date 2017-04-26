import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { IntroduceBabotComponent } from './introduce-babot/introduce-babot.component';
import { ChatComponent } from './introduce-babot/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    IntroduceBabotComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
