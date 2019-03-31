import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styles: []
})
export class Comp1Component implements OnInit {
  public data: Data;

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => (this.data = data));
  }
}
