import { Injectable, ViewContainerRef, ComponentRef,} from '@angular/core';
import { TooltipComponent } from '../components/tooltip/tooltip';
import { Equipment } from './build-realtime.service';

@Injectable({ providedIn: 'root' })
export class TooltipService {
  private tooltipRef: ComponentRef<TooltipComponent> | null = null;
  private viewContainer: ViewContainerRef | null = null;

  setViewContainer(viewContainer: ViewContainerRef): void {
    this.viewContainer = viewContainer;
  }

  showTooltip(item: Equipment | null, slotName: string, x: number, y: number): void {
    if (!this.viewContainer) return;

    this.hideTooltip();

    this.tooltipRef = this.viewContainer.createComponent(TooltipComponent);

    this.tooltipRef.setInput('item', item);
    this.tooltipRef.setInput('slotName', slotName);
    this.tooltipRef.setInput('x', x + 15);
    this.tooltipRef.setInput('y', y - 20);

    document.body.appendChild(this.tooltipRef.location.nativeElement);
  }

  hideTooltip(): void {
    if (this.tooltipRef) {
      this.tooltipRef.destroy();
      this.tooltipRef = null;
    }
  }

  updatePosition(x: number, y: number): void {
    if (this.tooltipRef) {
      this.tooltipRef.setInput('x', x + 15);
      this.tooltipRef.setInput('y', y - 20);
    }
  }
}
