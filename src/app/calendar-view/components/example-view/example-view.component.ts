import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-view',
  templateUrl: './example-view.component.html',
  styleUrls: ['./example-view.component.scss']
})
export class ExampleViewComponent implements OnInit {
  constructor() {}
  selectedValue = null;
  ngOnInit() {}
  _selectedChange(event: any) {
    this.selectedValue = event;
    console.log(event);
  }
}
