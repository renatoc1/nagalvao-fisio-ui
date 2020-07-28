import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../shared/models/paciente.model';
import { PacienteService } from '../paciente.service';
import { ResponsePageable } from '../../../shared/models/responsePageable.model';

@Component({
  selector: 'app-paciente-read',
  templateUrl: './paciente-read.component.html',
  styleUrls: ['./paciente-read.component.css']
})
export class PacienteReadComponent implements OnInit {

  pacientes: Paciente[]

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.getPacientes()
  }

  getPacientes() {
    this.pacienteService.read().subscribe(pacientes => {
      this.pacientes = pacientes.content
      console.log(this.pacientes)
    });
  }

}
