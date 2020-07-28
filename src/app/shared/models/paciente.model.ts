import { Endereco } from './endereco.model';

export interface Paciente {
    
    idPaciente?: number
    nome: string
	idade: number
	sexo: string
	profissao: string
	endereco: Endereco
	telefone: string
	diagnosticoClinico: string
	diagnosticoFisioterapeutico: string
	dataAvaliacao: Date
}