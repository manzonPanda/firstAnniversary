import { Component } from '@angular/core';
declare const TimelineMax: any ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstAnniversary';
  tl:any

  ngOnInit(): void {
    this.tl = new TimelineMax();
    
  }
  
  ngAfterViewInit(): void {
    
    
  }

  hideButton(){
    this.tl.to('.buttonGo', 1.5, {scaleY: 0, height:'10vh', });
    
    
  }

}
