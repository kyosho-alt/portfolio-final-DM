import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: []
})
export class AppComponent  {
  name = 'Angular';

  ngOnInit()  {}
  
}
