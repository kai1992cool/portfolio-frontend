import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { JwtPayload, jwtDecode } from 'jwt-decode';

// DEVELOPMENT - ENVIRONMENT
// TODO: to change to Production Environment when Neededs
import { environment } from '../../environments/environment.development';

// export type JwtPayloadCustom = JwtPayload & { role: string, id: string };

// type RegisterResponse = {
//     success?: string,
//     error?: string
// }
// type LoginType = { email: string, password: string }
// type LoginResponse = {
//     success?: string,
//     token?: string,
//     error?: string
// }

@Injectable({
    providedIn: 'root',
})
export class UsersService {


    private baseUrl = `${environment.apiUrl}/users`;

    private httpClient = inject(HttpClient);

    isAdmin() {
        console.log('hello!');
    }

    // isAdmin() {
    //     if (!localStorage.getItem('token')) {
    //         return false;
    //     }
    //     // El rol del usuario está codificado dentro del TOKEN
    //     const decoded: JwtPayloadCustom = jwtDecode(localStorage.getItem('token')!);
    //     return (decoded.role === 'admin');
    // }
}
