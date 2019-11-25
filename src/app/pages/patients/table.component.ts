import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'app/shared/models/patient';
import { DataService } from 'app/shared/services/data.service';

@Component({
    selector: 'app-patient',
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.scss']

})
export class PatientComponent implements OnInit {
    patients: Patient[];

    constructor(private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.dataService.getPatients().subscribe(data => {
            this.patients = data['patients'];
        });
    }

    goToComplexes(id: number) {
        this.router.navigate([`patients/${id}/complexes`]);
    }
}
