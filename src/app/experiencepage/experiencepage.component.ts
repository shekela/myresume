import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experiencepage',
  standalone: true,
  imports: [],
  templateUrl: './experiencepage.component.html',
  styleUrl: './experiencepage.component.css'
})
export class ExperiencepageComponent {

  @ViewChild('zoomElement') zoomElement!: ElementRef;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const triggerPosition = window.innerHeight * 1.5;

    if (scrollPosition >= triggerPosition) {
      this.renderer.addClass(this.zoomElement.nativeElement, 'zoom-in-out');
    } else {
      this.renderer.removeClass(this.zoomElement.nativeElement, 'zoom-in-out');
    }
  }
  
}
