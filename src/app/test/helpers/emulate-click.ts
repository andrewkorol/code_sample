import { DebugElement } from '@angular/core';

const buttonClickEvents = {
  left:  { button: 0 },
  right: { button: 2 },
};

export function emulateClick(el: DebugElement | HTMLElement, eventObj: any = buttonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}
