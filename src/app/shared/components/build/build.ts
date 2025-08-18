import { Component, EventEmitter, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Build as BuildInterface } from '../../interfaces/build';
import { Equipment } from '../equipment-grid/equipment-grid';

@Component({
  selector: 'app-build',
  templateUrl: './build.html',
  styleUrl: './build.scss',
  imports: [Equipment],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Build {
  build = input<BuildInterface | undefined>(undefined);
  close = output<void>();
}
