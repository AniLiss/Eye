import { Routes } from '@angular/router';
import { PatientComponent } from '../../pages/patients/table.component';
import { ComplexComponent } from 'app/pages/complex/complex.component';
import { EditComplexComponent } from 'app/pages/edit-complex/edit-complex.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'patients', component: PatientComponent },
    { path: 'patients/:id/complexes', component: ComplexComponent },
    { path: 'patients/:patient_id/complex/:complex_id', component: EditComplexComponent },
];
