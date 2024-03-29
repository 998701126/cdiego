import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
    providedIn: 'root'
})

export class VerifyResolver implements Resolve<any> {
    constructor(private auth: AuthService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.auth.verifyEmail(route.paramMap.get('token')).pipe(
            catchError(() => of(false))
        );
    }
}
