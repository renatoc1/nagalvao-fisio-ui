import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../../../shared/models/paciente.model';
import { Endereco } from '../../../shared/models/endereco.model';

@Component({
  selector: 'app-paciente-create',
  templateUrl: './paciente-create.component.html',
  styleUrls: ['./paciente-create.component.css']
})
export class PacienteCreateComponent implements OnInit {

  endereco: Endereco = {
    descricao: '',
    numero: null,
    bairro: ''
  }

  paciente: Paciente = {
    nome: '',
    idade: null,
    sexo: '',
    profissao: '',
    endereco: null,
    telefone: '',
    diagnosticoClinico: '',
    diagnosticoFisioterapeutico: '',
    dataAvaliacao: null
  }

  constructor(private router: Router, private pacienteService: PacienteService) { }

  ngOnInit(): void {
  }

  createPaciente(): void {
    this.paciente.endereco = this.endereco
    this.pacienteService.create(this.paciente).subscribe(() => {
      this.pacienteService.showMessage('Paciente criado com sucesso!')
      this.router.navigate(['/pacientes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/pacientes']);
  }

}
