import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Params } from "@angular/router";
import { Product } from "src/app/models/product.model";
// import { map } from "rxjs/operators";
import { Pagination } from 'src/app/models/pagination.model';
// import { filter } from 'src/app/shared/utils/filter.util';

@Injectable({
    providedIn: "root"
})
export class ProductService {
    constructor(private http: HttpClient) { }

    index(query?: Params): Observable<Pagination<Product>> {
        return this.http.get<Pagination<Product>>("products", { params: query });
        // .pipe(
        //     map(([data, total]) => {
        //         return { data, total } as Pagination<Product>;
        //     })
        // );
    }

    show(id: string): Observable<Product> {
        return this.http.get<Product>(`products/${id}`);
    }
}
