import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { SeparadorComponent } from '../../components/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ContainerComponent,SeparadorComponent,ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  contatoForm!: FormGroup;

  constructor(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('Matheus'),
      telefone: new FormControl('21 99999-9999'),
      email: new FormControl('matheus@gmail.com'),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('Hello World')
    })
  }

  salvarContato(){
    console.log(this.contatoForm.value);
  }
  cancelar() {
    console.log('Submissão cancelada');
}

}
