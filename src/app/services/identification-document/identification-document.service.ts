import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pagination } from 'src/app/models/pagination.model';
import { map } from 'rxjs/operators';
import { IdentificationDocument } from 'src/app/models/identification-document.model';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {

    constructor(private http: HttpClient) { }

    public index(page: number = 1): Observable<IdentificationDocument[]> {
        return this.http.get<Pagination<IdentificationDocument>>(`documents?page=${page}`)
            .pipe(
                map(response => response.data)
            );
    }
}
