import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'irorman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeHero(): void {
    this.name = 'Spiderman';
  }
 
  changeAge(): void {
    this.age = 54;
  }

  resetForm(): void {
    this.name = 'irorman';
    this.age = 45;
  }
}