import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StartPastTaskPage } from '../start-past-task/start-past-task.page';

@Component({
  selector: 'page-home',
  templateUrl: 'start-task.html'
})
export class StartTaskPage {

  constructor(public navCtrl: NavController) {

  }

  startTaskNow() {
    // Record geolocation and date/time stamp

    // Save to database
  }

  goToStartTask() {
    this.navCtrl.push(StartPastTaskPage);
  }
}
