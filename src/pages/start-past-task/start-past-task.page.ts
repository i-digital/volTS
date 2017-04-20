import { Component } from '@angular/core';

@Component({
    templateUrl: 'start-past-task.page.html'
})

export class StartPastTaskPage {

  public event = [{ startTime: '17 July 1989', location: 'Ahok house', address: '90 Yishun Central' }];

  save() {
    // save to database
  }
}