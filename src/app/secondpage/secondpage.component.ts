import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-secondpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondpage.component.html',
  styleUrl: './secondpage.component.css'
})
export class SecondpageComponent implements OnInit{

  constructor(private el: ElementRef, private renderer: Renderer2){
  }

  skills = ['Communication', 'Teamwork', 'Creativity', 'Adaptability', 'Problem-solving', 'Work ethic', 'Critical thinking', 'Self-awareness'];

  paddings = [15, 2, 13, 3, 13, 4, 12, 5];
  originalPaddings = [...this.paddings];
  
  randomPositions: { top: string; left: string }[] = [];

  @HostListener('window:resize', [])
  onResize() {
    const screenWidth = window.innerWidth;
    this.updatePaddings(screenWidth);
  }

  ngOnInit(): void {
    this.updatePaddings(window.innerWidth);
    const positions: Array<{ top: string; left: string }> = []; // Explicitly typed array
    const containerSize = 80; // Max percentage for container size

    this.skills.forEach((_, index) => {
      let position;

      // Generate positions until finding a non-overlapping one
      do {
        position = {
          top: `${Math.floor(Math.random() * (containerSize - this.paddings[index]))}%`,
          left: `${Math.floor(Math.random() * (containerSize - this.paddings[index]))}%`
        };
      } while (this.isOverlapping(position, positions, this.paddings[index]));

      positions.push(position);
      this.randomPositions.push(position);
    });
  }

  updatePaddings(screenWidth: number) {
    if (screenWidth < 400) {
      // Reduce padding values by 30% if screen width is less than 400px
      this.paddings = this.originalPaddings.map(pad => Math.floor(pad * 0.7));
    } else {
      // Reset paddings to the original values when screen width is 400px or more
      this.paddings = [...this.originalPaddings];
    }
  }

  // Function to check if the new position overlaps with existing ones
  isOverlapping(newPos: { top: string; left: string }, existingPositions: Array<{ top: string; left: string }>, padding: number): boolean {
    return existingPositions.some(pos => {
      const distance = Math.sqrt(
        Math.pow(parseFloat(newPos.top) - parseFloat(pos.top), 2) +
        Math.pow(parseFloat(newPos.left) - parseFloat(pos.left), 2)
      );
      return distance < padding; // Adjust this threshold to control overlap margin
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const section = document.getElementById('experienceSection');
    const circles = this.el.nativeElement.querySelectorAll('.circle'); // Ensure correct selection of circles
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Check scroll position to toggle section background color
    if (section) {
      if (scrollPosition > window.innerHeight * 1) {
        section.classList.add('scrolled');
      } else {
        section.classList.remove('scrolled');
      }
    }

    // Update background color of circles based on scroll position
    circles.forEach((circle: HTMLElement) => {
      if (scrollPosition > window.innerHeight * 1) {
        console.log("Adding scrolled-circle to: ", circle); // Debugging: Check which circle is being updated
        this.renderer.addClass(circle, 'scrolled-circle'); // Add class to change color
      } else {
        console.log("Removing scrolled-circle from: ", circle); // Debugging: Check which circle is being updated
        this.renderer.removeClass(circle, 'scrolled-circle'); // Remove class to revert color
      }
    });
  }
  
}
