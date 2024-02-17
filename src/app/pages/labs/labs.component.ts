import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = ['Instalaer el angular CLI', 'Crear proyecto', 'Crear componentes'];
  name = 'Victor';
  age = 32;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Victor',
    age: 18,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  };
}
