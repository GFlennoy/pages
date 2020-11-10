import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60'
    },
    {
      title: 'Behind the scenes',
      url: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60'
    },
    {
      title: 'Breakfast of Champions',
      url: 'https://images.unsplash.com/photo-1553849535-40d6cab25824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60'
    },
    {
      title: 'Sweet Chariot',
      url: 'https://images.unsplash.com/photo-1591105327764-4c4b76f9e6a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60'
    },
    {
      title: 'Mans best friend',
      url: 'https://images.unsplash.com/photo-1572963358481-26b7898cc982?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60'
    }
  ];

  checkWindowIndex (index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
