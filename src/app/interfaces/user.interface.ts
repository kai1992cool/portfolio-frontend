export interface User {
    id: number;
    email: string;
    password: string;
    rol: 'user' | 'admin';
}