import { Component, OnInit } from '@angular/core';

interface ComponentItem {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: ComponentItem[] = [{
    icon: 'american-football-outline',
    name: 'Action Sheet',
    redirectTo: '/action-sheet'
  }, {
    icon: 'logo-apple-appstore',
    name: 'Alert',
    redirectTo: '/alert'
  }];

  constructor() { }

  ngOnInit() {
  }

}
