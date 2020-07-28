import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from '../../shared/models/paciente.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResponsePageable } from '../../shared/models/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  baseUrl = 'http://localhost:8080/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZW5hdG8iLCJyb2xlcyI6WyJBRE1JTiJdLCJpYXQiOjE1OTU4OTU5NjEsImV4cCI6MTU5NTg5OTU2MX0.eSAbkPg6O5lL0pPP4OGK_Gz79U-A-JaJ_eA7qmG39fU'
    })
  }

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.baseUrl, paciente, this.httpOptions);
  }

  read(): Observable<ResponsePageable> {
    return this.http.get<ResponsePageable>(this.baseUrl + 'nagalvaofisio/pacientes', this.httpOptions);
  }

}
