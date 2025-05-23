import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Usuario {
  id: number;
  nome: string;
  sobrenome: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']  
})


export class UsuarioListComponent {
  usuarios: Usuario[] = [
    { id: 1, nome: 'Dayse', sobrenome: 'Holanda', username: 'dayse123', password: '123' },
    { id: 2, nome: 'MariaMary', sobrenome: 'Renata', username: 'mariamary123', password: 'abc' },
    
  ];

  updateUsuario(id: number) {
    console.log(`Atualizar usuário com ID: ${id}`);
    // redirecionar ou abrir modal, etc.
  }

  deleteUsuario(id: number) {
    console.log(`Excluir usuário com ID: ${id}`);
    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
  }
}
