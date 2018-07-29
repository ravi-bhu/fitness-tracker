import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {TrainingService} from "./training.service";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  onGoingTraining: boolean;
  exerciseSubscription: Subscription;

  constructor(private traininsgService: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.traininsgService.exerciseChanged.subscribe(
      exercise => {
        if(exercise) {
          this.onGoingTraining = true;
        } else {
          this.onGoingTraining = false;
        }
      }
    );
  }

}
