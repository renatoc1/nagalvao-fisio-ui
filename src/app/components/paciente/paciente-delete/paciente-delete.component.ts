import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { Paciente } from 'src/app/shared/models/paciente.model';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-delete',
  templateUrl: './paciente-delete.component.html',
  styleUrls: ['./paciente-delete.component.css']
})
export class PacienteDeleteComponent implements OnInit {

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
  
  constructor(private router: Router, private pacienteService: PacienteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.pacienteService.readById(id).subscribe(paciente => {
      this.paciente = paciente
    })
  }

  deletePaciente(): void {
    this.paciente.endereco = this.endereco
    this.pacienteService.delete(this.paciente.idPaciente.toString()).subscribe(() => {
      this.pacienteService.showMessage('Paciente excluído com sucesso!')
      this.router.navigate(['/pacientes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/pacientes']);
  }

}
