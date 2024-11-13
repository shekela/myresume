import { Component } from '@angular/core';
import { PixelAnimationComponent } from "../pixel-animation/pixel-animation.component";

@Component({
  selector: 'app-firstpage',
  standalone: true,
  imports: [PixelAnimationComponent],
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})

export class FirstpageComponent {

}
