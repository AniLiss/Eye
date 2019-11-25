import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    // private baseUrl = 'https://virtserver.swaggerhub.com/smolnikov/Red-Blue-Eye/1.0.0';
    private baseUrl = 'https://qkaujn7z95.execute-api.us-east-1.amazonaws.com/dev';

    constructor(private httpClient: HttpClient) { }

    public getPatients() {
        return this.httpClient.get(`${this.baseUrl}/patients`);
    }

    public getComplexes(id: string) {
        return this.httpClient.get(`${this.baseUrl}/patients/${id}/complexes`);
    }

    public getComplex(id: string) {
        return this.httpClient.get(`${this.baseUrl}/complexes/${id}`);

    }

    public getExercises() {
        return this.httpClient.get(`${this.baseUrl}/exercises`);
    }

    public addComplex(id: string, name: string, dueDate: Date) {
        return this.httpClient.post(`${this.baseUrl}/patients/${id}/complexes`, {
            name: name,
            due_date: new Date(dueDate).toISOString()
        });
    }

    public addExercise(id: string, model: any) {
      return this.httpClient.post(`${this.baseUrl}/complexes/${id}/exercises`, model);
    }
}
