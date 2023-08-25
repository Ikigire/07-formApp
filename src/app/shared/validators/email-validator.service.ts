import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {
    
    validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
        const email = control.value;
        // console.log(email);
        
        const httpCallObservable = new Observable<ValidationErrors | null>( ( subscriber ) => {
            // console.log(email)

            if ( email === 'yael@gmail.com' ) {
                subscriber.next({emailTaken: true}),
                subscriber.complete();
            }

            subscriber.next(null);
            subscriber.complete()
        })
        .pipe(
            delay(2000)
        );

        return httpCallObservable;
    }
    // validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    //     const email = control.value;
    //     console.log(email);
        
    //  Esta es la forma básica de realizar el observable
    //     return of({
    //         emailTaken: true
    //     }).pipe(
    //         delay(2000)
    //     );

    //  Para peticiones a un endpoint la estructura siguiente es la correcta
    //     return this.http.get<any>('https://myservice.com/users?q=${ email }')
    //     .pipe(
    //         map( resp => {
    //             return ( resp.length === 0 )
    //             ? null
    //             : { emailTaken: true }
    //         })
    //     );
    // }
}