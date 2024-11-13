import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pixel-animation',
  standalone: true,
  templateUrl: './pixel-animation.component.html',
  styleUrls: ['./pixel-animation.component.css']
})
export class PixelAnimationComponent implements AfterViewInit {
  @ViewChild('portrait') portrait!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(): void {
    const img = this.portrait.nativeElement;
    const width = img.naturalWidth;
    const height = img.naturalHeight;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;

    canvas.width = width;
    canvas.height = height;

    const pixels = width * height;
    let currentPixel = 0;

    const imgElement = new Image();
    imgElement.src = img.src;

    imgElement.onload = () => {
      ctx.drawImage(imgElement, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height).data;

      ctx.clearRect(0, 0, width, height);

      const interval = setInterval(() => {
        const pixelsPerFrame = 12050; // Increase number of pixels to draw per interval
        for (let i = 0; i < pixelsPerFrame; i++) {
          if (currentPixel >= pixels) {
            clearInterval(interval);
            img.src = canvas.toDataURL();
            return;
          }

          const x = currentPixel % width;
          const y = Math.floor(currentPixel / width);
          const index = (y * width + x) * 4;

          ctx.fillStyle = `rgba(${imageData[index]}, ${imageData[index + 1]}, ${imageData[index + 2]}, ${imageData[index + 3]})`;
          ctx.fillRect(x, y, 1, 1);

          currentPixel++;
        }
        img.src = canvas.toDataURL(); // Update image src outside the loop
      }, 0); // Reduce interval time to the minimum value
    };

    imgElement.onerror = () => {
      console.error('Failed to load image.');
    };
  }
}
