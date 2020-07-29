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

  baseUrl = 'http://localhost:8080/nagalvaofisio/paciente'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZW5hdG8iLCJyb2xlcyI6WyJBRE1JTiJdLCJpYXQiOjE1OTU5ODEwOTQsImV4cCI6MTU5NTk4NDY5NH0.fRbKXJ9pLOlY0bySVwaKqY81L6irJpYrQNlx0Qz4d-g'
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
    return this.http.get<ResponsePageable>(this.baseUrl, this.httpOptions);
  }

  readById(id: string): Observable<Paciente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Paciente>(url, this.httpOptions)
  }

  update(paciente: Paciente): Observable<Paciente> {
    const url = `${this.baseUrl}/${paciente.idPaciente}`
    return this.http.put<Paciente>(url, paciente, this.httpOptions)
  }

}
