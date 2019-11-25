import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'app/shared/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { EditComplexDialogComponent } from './editComplexDialog/editComplexDialog.component';

@Component({
    selector: 'app-edit-complex',
    templateUrl: 'edit-complex.component.html'
})
export class EditComplexComponent implements OnInit {
    complex: any;
    complexId: string;
    private patientId: string;

    constructor(
        private dataService: DataService,
        private router: Router,
        private route: ActivatedRoute,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.complexId = params.get('complex_id');
            this.patientId = params.get('patient_id');
        });

        this.dataService.getComplex(this.complexId).subscribe(data => {
            this.complex = data['complex'];
        });
    }

    edit() {
        console.log('edit');
        this.dialog.open(EditComplexDialogComponent, {
            minWidth: '500px',
            minHeight: '300px',
            data: {
                complex: this.complex
            }
        }).afterClosed().subscribe(data => {
          if (data) {
            data.complex['done_times'] = 0;
            this.complex.exercises.push(data.complex)
          }
        });
    }

  goToComplexes() {
    this.router.navigate([`patients/${this.patientId}/complexes`]);
  }
}
