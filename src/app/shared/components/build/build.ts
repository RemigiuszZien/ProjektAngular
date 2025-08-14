import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Build as BuildInterface } from '../../interfaces/build';

@Component({
  selector: 'app-build',
  imports: [],
  standalone: true,
  templateUrl: './build.html',
  styleUrl: './build.scss',
})
export class Build {
  @Input() build?: BuildInterface;
  @Output() close = new EventEmitter<void>();
}
