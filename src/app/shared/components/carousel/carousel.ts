import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, TemplateRef, input, output, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { Carousel as BSCarousel } from 'bootstrap';
import { Slide } from '../../interfaces/slide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    tabindex: '0',
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})
export class Carousel implements AfterViewInit, OnDestroy {
  slides = input<Slide[]>([]);
  showBuilds = output<Slide>();
  @ViewChild('carouselRoot', { static: true }) carouselRoot!: ElementRef<HTMLElement>;
  showBuildsLabel = input('Pokaż buildy');
  captionTemplate = input<TemplateRef<{ $implicit: Slide }> | null>(null);
  private bsCarousel?: InstanceType<typeof BSCarousel>;
  private hasFocus = false;

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.hasFocus) return;
    
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.prev();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.next();
        break;
      case 'Home':
        event.preventDefault();
        this.goToSlide(0);
        break;
      case 'End':
        event.preventDefault();
        this.goToSlide(this.slides().length - 1);
        break;
    }
  }

  onFocus(): void {
    this.hasFocus = true;
  }

  onBlur(): void {
    this.hasFocus = false;
  }
  ngAfterViewInit(): void {
    this.bsCarousel = new BSCarousel(this.carouselRoot.nativeElement, {
      interval: 4000,
      pause: 'hover',
      wrap: true
    });
  }
  prev(): void { this.bsCarousel?.prev(); }
  next(): void { this.bsCarousel?.next(); }
  goToSlide(index: number): void { 
    if (this.bsCarousel && index >= 0 && index < this.slides().length) {
      this.bsCarousel.to(index); 
    }
  }
  ngOnDestroy(): void { this.bsCarousel?.dispose(); }
}