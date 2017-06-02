import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Observable} from "rxjs/Rx";
import set = Reflect.set;

@Component({
  selector: 'app-introduce-babot',
  templateUrl: './introduce-babot.component.html',
  styleUrls: ['./introduce-babot.component.scss']
})
export class IntroduceBabotComponent implements OnInit {
  @ViewChild("canvas") canvas;
  constructor(private element:ElementRef) {
  }
  public paragraphs=[
    "This bot has been created by babot service to answer your question about babot service.",
    "you could make your bot to answer your users.",
    "your bot could work on telegram and filan messanger or web.",
  ];
  private wordsSelector = 0;
  private isMenuOpen = false;
  private isFirstTime = true;
  ngOnInit() {
    // Observable
    //   .interval(2000)
    //   .timeInterval()
    //   .subscribe(
    //     (x) => {
    //       this.wordsSelector = x.value;
    //     },
    //     function (err) {
    //       console.log('Error: ' + err);
    //     },
    //     function () {
    //       console.log('Completed');
    //     }
    //   );
    this.initCanvas();
  }

  initCanvas(){
    const canvas = this.canvas.nativeElement;

    const ctx = canvas.getContext("2d");

    //making the canvas full screen
    canvas.height = document.body.clientHeight;
    canvas.width = document.body.clientWidth;
    const binary = "1010100101010100001010101111010101011010101111101101";
    //converting the string into an array of single characters
    const binaryArray = binary.split("");

    var font_size = 10;
    var columns = document.body.clientWidth/font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for(var x = 0; x < columns; x++) {
      drops[x] = 1;
    }
    setInterval(()=>{
      //Black BG for the canvas
      //translucent BG to show trail
      ctx.fillStyle = "rgba(0, 0, 50, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // const rg = Math.ceil( Math.random() * 3) + 1;
      // const b = Math.ceil( Math.random() * 5) + rg;
      // ctx.fillStyle = "#" + rg + rg + b;

      const rg = Math.ceil( Math.random() * 125) + 125;
      const b = Math.ceil( Math.random() * 55) + 200;
      const a = Math.random()/6;
      // ctx.fillStyle = "rgba(" + rg + "," + rg + "," + b + ", " + a + ")";
      ctx.fillStyle = "rgba(255, 255, 255, " + a + ")";
      ctx.font = font_size + "px arial";
      //looping over drops
      for(var i = 0; i < drops.length; i++)
      {
        //a random chinese character to print
        var text = binaryArray[Math.floor(Math.random()*binaryArray.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
          drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
      }
    }, 33);
  }



  public userEmail:string = "";

  public emailHasSent = false;
  sendEmailToSubscribe() {
    setTimeout(()=>{
      this.emailHasSent = true;
    },300);
  }
}
