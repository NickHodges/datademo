import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styles: []
})
export class Comp1Component implements OnInit {
  constructor(public route: ActivatedRoute) {}

  ngOnInit() {}
}
