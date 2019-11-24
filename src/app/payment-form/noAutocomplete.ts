import { Directive, ElementRef, OnInit, Renderer2, AfterViewInit } from '@angular/core'

@Directive({
  selector: '[appNoAutocomplete]',
})
export class NoAutocompleteDirective implements AfterViewInit {
  constructor(private renderer: Renderer2, private _el: ElementRef) {}
  ngAfterViewInit() {
    setTimeout(() => {
      const inputs = Array.prototype.slice.call(this._el.nativeElement.querySelectorAll('input'))
      inputs.map((e, i) => {
        this.renderer.setAttribute(e, 'autocomplete', 'off')
      })
      // If you're using mat-form-field
      const labels = Array.prototype.slice.call(
        this._el.nativeElement.querySelectorAll('.mat-form-field-label')
      )
      labels.map((l, i) => {
        l.innerHTML = l.innerHTML.replace(
          l.textContent,
          l.textContent.substring(0, 1) + '&zwnj;' + l.textContent.substring(1)
        )
      })
    }, 0)
  }
}
