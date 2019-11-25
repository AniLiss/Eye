import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Complex } from 'app/shared/models/complex';
import { DataService } from 'app/shared/services/data.service';
import { AddComplexDialogComponent } from './addComplexDialog/addComplexDialog.component';

@Component({
    selector: 'app-complexe',
    templateUrl: 'complex.component.html'
})
export class ComplexComponent implements OnInit {
    public complexes: Complex[];
    private id: string;

    constructor(
        private dataService: DataService,
        private router: Router,
        private route: ActivatedRoute,
        public dialog: MatDialog,
    ) { }

    ngOnInit() {

        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
        });

        this.dataService.getComplexes(this.id).subscribe(data => {
            this.complexes = data['complexes'];
        });
    }

    openDialog() {
        this.dialog.open(AddComplexDialogComponent, {
            minWidth: '500px',
            minHeight: '300px',
            data: {
                id: this.id
            }
        }).afterClosed().subscribe(data => {
          console.log(data);
          if (data) {
            this.complexes.push(<Complex>{
              id: data.id,
              name: data.name,
              due_date: data.dueDate,
              done: true
            })
          }
        });
    }

    goToEditComplex(complexId: number) {
        this.router.navigate([`patients/${this.id}/complex/${complexId}`]);
    }

  goBack() {
    this.router.navigate([`/patients`]);
  }
}
