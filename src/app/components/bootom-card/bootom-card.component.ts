import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootom-card',
  templateUrl: './bootom-card.component.html',
  styleUrls: ['./bootom-card.component.css'],
})
export class BootomCardComponent implements OnInit {
  @Input() new: any = {};
  @Input() numberNew: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
