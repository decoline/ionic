import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navigation-page3',
  templateUrl: './navigation-page3.component.html',
  standalone: false
})
export class NavigationPage3Component {
  constructor(
    private navController: NavController
  ) {}

  ionViewDidEnter() {
    this.navController.navigateRoot('/lazy/navigation/page2');
  }
}
