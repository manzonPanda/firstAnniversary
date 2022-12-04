import { Component } from '@angular/core';
import { delay } from 'rxjs';
declare const TimelineMax: any ;
// import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstAnniversary';
  tl:any
  ease:any

  // constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.tl = new TimelineMax();
    this.ease = (window as any).com.greensock.easing; 
    console.log("GSAP", (window as any).com.greensock)
    setTimeout(()=>{  
        this.tl.to('.center', 2, {scaleY: 1, height:'20vh', ease: this.ease.Elastic.easeOut.config(1,0.3)})
        .to('.password',1,{scaleX: 1, width:'', ease: this.ease.Elastic.easeOut.config(1,0.3)})
        .to('.buttonGo',1,{scaleX: 1, width:'', ease: this.ease.Elastic.easeOut.config(1,0.3)})
        .to('.footer',2,{scaleX: 1, width:'', ease: this.ease.Bounce.easeOut});
    }, 1200)
  }
  
  ngAfterViewInit(): void {
    
  }

  buttonGo(code:string){
    console.log(code);
    if(code == "12202021"){
      this.tl.to('.center', 1.5, {scaleY: 0, height:'20vh', ease: this.ease.SlowMo.ease.config(0.7,0.7, false)});
    }else{
      // this.snackBar.open("Enter code", "Dismiss");
    }
  }



}
