import { Component } from '@angular/core';
import { Footer } from '../../common/components/footer/footer';
import { Header } from '../../common/components/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
