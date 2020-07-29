import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from '../../shared/models/paciente.model';
import { Observable, EMPTY } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResponsePageable } from '../../shared/models/responsePageable.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  baseUrl = 'http://localhost:8080/nagalvaofisio/paciente'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZW5hdG8iLCJyb2xlcyI6WyJBRE1JTiJdLCJpYXQiOjE1OTYwMjk2MjQsImV4cCI6MTU5NjAzMzIyNH0.6JZlrT9ppOk3b51QrJeeyy47MwOevA70-c_A21u1-v8'
    })
  }

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.baseUrl, paciente, this.httpOptions).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }
  
  read(): Observable<ResponsePageable> {
    return this.http.get<ResponsePageable>(this.baseUrl, this.httpOptions).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }
  
  readById(id: string): Observable<Paciente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Paciente>(url, this.httpOptions).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }
  
  update(paciente: Paciente): Observable<Paciente> {
    const url = `${this.baseUrl}/${paciente.idPaciente}`
    return this.http.put<Paciente>(url, paciente, this.httpOptions).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }
  
  delete(id: string): Observable<Paciente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Paciente>(url, this.httpOptions).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }
  
  handleError(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

}
