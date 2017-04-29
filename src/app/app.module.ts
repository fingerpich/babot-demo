import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { IntroduceBabotComponent } from './introduce-babot/introduce-babot.component';
import { ChatComponent } from './introduce-babot/chat/chat.component';
import { TypistComponent } from './introduce-babot/typist/typist.component';
import { ParagraphsTypistComponent } from './introduce-babot/paragraphs-typist/paragraphs-typist.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    IntroduceBabotComponent,
    ChatComponent,
    TypistComponent,
    ParagraphsTypistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
