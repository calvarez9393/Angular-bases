import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesNames: string[] = ['Spiderman', 'Irorman', 'Hulk', 'She Hulk', 'Thor'];
  public deleteHero?: string;

  removeLastHero(): void {
    this.deleteHero = this.heroesNames.pop();
  }
}
