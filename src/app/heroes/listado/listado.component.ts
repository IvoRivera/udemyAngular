import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Aquaman', 'Superman', 'Batman', 'Flash'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('borrando heroe...');
    // erase a hero in the array of heroes by index
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
