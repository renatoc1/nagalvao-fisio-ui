import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/shared/models/paciente.model';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-update',
  templateUrl: './paciente-update.component.html',
  styleUrls: ['./paciente-update.component.css']
})
export class PacienteUpdateComponent implements OnInit {

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

  updatePaciente(): void {
    this.paciente.endereco = this.endereco
    this.pacienteService.update(this.paciente).subscribe(() => {
      this.pacienteService.showMessage('Paciente atualizado com sucesso!')
      this.router.navigate(['/pacientes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/pacientes']);
  }

}
