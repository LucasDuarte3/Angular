import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-create.component.html',
  styleUrl: './usuario-create.component.css'
 
})
export class UsuarioCreateComponent {
  usuario = {
    nome: '',
    sobrenome: '',
    username: '',
    password: ''
  };

  onSubmit() {
    console.log('Usuário enviado:', this.usuario);
    // Aqui você pode adicionar lógica para enviar para o backend futuramente
  }
}
