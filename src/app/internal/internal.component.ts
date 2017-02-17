import { Component, Input } from '@angular/core';
import { ModelService } from '../model.service';

const ARROW = '&#8593';
const SPACE = '&nbsp;';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.css']
})
export class InternalComponent {
  title = 'base';
  arrow = ARROW;
  space = "";
  pos = 0;
  inter;
  paragraph = `Angular Material tabs organize content into separate views where only one view can be visible at a time. Each tab's label in the tab header and the active tab's label is designated with the animated ink bar. When the list of tab labels exceeds the width of the header, pagination controls appear to let the user scroll left and right across the labels.`;
  leftOver = this.paragraph;
  constructor(private model: ModelService) {
  }
  // ngOnChanges() {
  //   console.log('ngOnChanges', this);
  // }
  ngOnInit() {
    // this.inter = setInterval(this.changeSpace.bind(this), 500);
  }
  changeSpace() {
      var added = this.leftOver.indexOf(' ');
      // console.log(this.space);
      if (added === -1) {
        this.pos = 0;
      }
      this.pos += added + 1;
      this.leftOver = this.paragraph.slice(this.pos, this.paragraph.length);
      this.space = this.paragraph.slice(0, this.pos);
  }
  ngDoCheck() {
    console.log('ngDoCheck', this.pos);
  }
  stop() {
    clearInterval(this.inter);
  }
  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit', this);
  // }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked', this.pos);
  }
  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit', this);
  // }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked', this.pos);
  }
  // ngOnDestroy() {
  //   console.log('ngOnDestroy', this);
  // }
  log(s) {
    console.log('this is', this);
    this.model.set(s); 
  }
}
