import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, TemplateRef, input, output, ChangeDetectionStrategy } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { Carousel as BSCarousel } from 'bootstrap';
import { Slide } from '../../interfaces/slide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Carousel implements AfterViewInit, OnDestroy {
  slides = input<Slide[]>([]);
  showBuilds = output<Slide>();
  @ViewChild('carouselRoot', { static: true }) carouselRoot!: ElementRef<HTMLElement>;
  showBuildsLabel = input('Pokaż buildy');
  captionTemplate = input<TemplateRef<{ $implicit: Slide }> | null>(null);
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