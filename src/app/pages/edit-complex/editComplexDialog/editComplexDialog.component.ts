import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'app-add-complex-dialog',
  templateUrl: './editComplexDialog.component.html',
  styleUrls: ['./editComplexDialog.component.scss']
})
export class EditComplexDialogComponent implements OnInit {
  repeatTimes: number;
  dueDate: Date;
  exercises: any;
  exerciseId: number;
  newExercises: any;
  complex: any;

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<EditComplexDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.complex = this.data.complex;
  }

  ngOnInit() {
    this.dataService.getExercises().subscribe(data => {
      this.exercises = data['exercises'];
    })
  }

  changeAction(exerciseId: number) {
    this.newExercises = this.exercises.find(x => x.id === exerciseId);
  }

  save() {
    if (!this.repeatTimes || !this.newExercises) {
      return;
    }

    const model = {
      exercise: this.newExercises.name,
      repeat_times: this.repeatTimes
    };

    this.dataService.addExercise(this.complex.id, model).subscribe(x => this.dialogRef.close(x));
  }
}
