import { Component, Input } from '@angular/core';

@Component({
  selector: 'inputTest',
  template: `{{ info }}`
})

export class InputTestComponent{
  @Input() info: string;
}