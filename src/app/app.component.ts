import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FirstpageComponent } from "./firstpage/firstpage.component";
import { SecondpageComponent } from "./secondpage/secondpage.component";
import { ExperiencepageComponent } from "./experiencepage/experiencepage.component";
import { ContactformComponent } from "./contactform/contactform.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FirstpageComponent, SecondpageComponent, ExperiencepageComponent, ContactformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
