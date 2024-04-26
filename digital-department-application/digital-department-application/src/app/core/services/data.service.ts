import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";

export interface Student{
    name: string;
    surname: string;
    group: string;
}

@Injectable({providedIn:'root'})
export class DataService {
    constructor(private http: HttpClient) {}

    getStudents(): Observable<Array<Student>> {
        return this.http.get<Array<Student>>('assets/data.json')
        .pipe(
            catchError(err => {
                console.log(err);
                return of([]);
            })
        )
    }

    // laba3
    // constructor() { }
    getExampleData(): string[] {
        return ['Data1', 'Data2'];
    }
}