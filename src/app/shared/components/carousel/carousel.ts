import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Carousel as BSCarousel } from 'bootstrap';
import { Slide } from '../../interfaces/slide';


@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class Carousel implements AfterViewInit, OnDestroy {
  @Input() slides: Slide[] = [];
  @Output() showBuilds = new EventEmitter<Slide>();
  @ViewChild('carouselRoot', { static: true }) carouselRoot!: ElementRef<HTMLElement>;

  @Input() showBuildsLabel = 'Pokaż buildy';

  private bsCarousel?: InstanceType<typeof BSCarousel>;

  ngAfterViewInit(): void {
    this.bsCarousel = new BSCarousel(this.carouselRoot.nativeElement, {
      interval: 4000,
      pause: 'hover',
      wrap: true
    });
  }
  prev(): void { this.bsCarousel?.prev(); }
  next(): void { this.bsCarousel?.next(); }
  ngOnDestroy(): void { this.bsCarousel?.dispose(); }
}