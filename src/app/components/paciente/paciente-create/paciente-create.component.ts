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

  constructor(private router: Router, private pacienteService: PacienteService) { }

  now = new Date();

  endereco: Endereco = {
    descricao: 'Joaquim Monteiro Sobrinho',
    numero: 32,
    bairro: 'Vila Monteiro'
  }

  paciente: Paciente = {
    nome: 'Renato',
    idade: 25,
    sexo: 'M',
    profissao: 'Analista de Sistemas',
    endereco: this.endereco,
    telefone: '34998044538',
    diagnosticoClinico: 'teste',
    diagnosticoFisioterapeutico: 'teste',
    dataAvaliacao: this.now
  }

  ngOnInit(): void {
  }

  createPaciente(): void {
    this.pacienteService.create(this.paciente).subscribe(() => {
      this.pacienteService.showMessage('Paciente criado com sucesso!')
      this.router.navigate(['/pacientes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/pacientes']);
  }

}
