import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target);
    }

    // @HostListener('click') toggleOpen() {
    //     this.isOpen = !this.isOpen;
    // }

    constructor(private elRef: ElementRef) {}
}