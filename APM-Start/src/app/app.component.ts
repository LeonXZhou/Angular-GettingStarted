import { Component, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Leon's Amazing Product Management App`;
  public ngOnInit() {
    this.title = 'woops';
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    this.title = `fee fie foo`;
  }
}
