import { Paciente } from './paciente.model';

export class ResponsePageable {
    content: Paciente[];
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: any[];
    size: number;
    sort: any[];
    totalElements: number;
    totalPages: number;
    empty: boolean;
}