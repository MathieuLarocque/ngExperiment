import { Component, ChangeDetectionStrategy } from '@angular/core';
// import { createModel } from './modelux';
import { StoreService } from './store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'hello';
  present = false;
  second = 'blah';

  constructor(private store: StoreService) {
    // console.log('constructor', this);
  }
  ngOnInit() {

  }
  log(s) {
    console.log(s);
  }
  // ngOnChanges() {
  //   console.log('ngOnChanges', this);
  // }
  // ngOnInit() {
  //   console.log('ngOnInit', this);
  // }
  // ngDoCheck() {
  //   console.log('ngDoCheck', this);
  // }
  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit', this);
  // }
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked', this);
  // }
  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit', this);
  // }
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked', this);
  // }
  // ngOnDestroy() {
  //   console.log('ngOnDestroy', this);
  // }
  // toggle() {
  //   this.present = !this.present;
  // }

}
