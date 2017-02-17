import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ModelService } from '../model.service';


@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherComponent implements OnInit {
  @Input() subtitle = "first";

  prop = {k:3};
  constructor(private model: ModelService) {
    model.val = 25;
    // this.model.bind(this);
   }
  ngOnInit() {
  }
  log(s) {
    this.prop.k = 88;
    this.subtitle = "third";

  }

}
