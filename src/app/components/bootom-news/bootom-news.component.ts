import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootom-news',
  templateUrl: './bootom-news.component.html',
  styleUrls: ['./bootom-news.component.css'],
})
export class BootomNewsComponent implements OnInit {
  news = [
    {
      image: 'image-retro-pcs.jpg',
      title: 'Reviving Retro PCs',
      text: 'What happens when old PCs are given modern upgrades?',
    },
    {
      image: 'image-top-laptops.jpg',
      title: 'Top 10 Laptops of 2022',
      text: 'Our best picks for various needs and budgets.',
    },
    {
      image: 'image-gaming-growth.jpg',
      title: 'The Growth of Gaming',
      text: 'How the pandemic has sparked fresh opportunities.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
