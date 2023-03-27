import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models';

@Component({
  selector: 'app-ejercicio-ngif-ngfor',
  templateUrl: './ejercicio-ngif-ngfor.component.html',
  styleUrls: ['./ejercicio-ngif-ngfor.component.css']
})
export class EjercicioNgifNgforComponent implements OnInit {
  public alumnos: Alumno[] = [
    new Alumno(1, 'Amelia', 'Arroyo', 'ameliaA@mail.com', 4, true, new Date('1994-01-03')),
    new Alumno(3, 'Benjamín', 'Barrios', 'benjaminB@mail.com', 1, false, new Date('1992-05-14')),
    new Alumno(4, 'Camilo', 'Carranza', 'camiloC@mail.com', 4, false, new Date('1980-02-24')),
    new Alumno(5, 'Diana', 'Díaz', 'dianaD@mail.com', 2, true, new Date('1995-08-12')),
    new Alumno(6, 'Emilia', 'Enriquez', 'emiliaE@mail.com', 0, true, new Date('2002-07-24')),
  ];

  isLoading: boolean = true; 

  ngOnInit(): void {
    setTimeout(()=> this.isLoading = false
  , 2000);
}
}



