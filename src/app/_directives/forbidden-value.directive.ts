import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenValueValidator(value: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = value.test(control.value);
        return forbidden ? {'forbiddenValue': {value: control.value}} : null;
    };
}

@Directive({
    selector: '[appForbiddenValue]'
})
export class ForbiddenValueDirective implements Validator {
    @Input('appForbiddenValue') forbiddenValue: string;

    validate(control: AbstractControl): {[key: string]: any} | null {
        return this.forbiddenValue ? forbiddenValueValidator(new RegExp(this.forbiddenValue, 'i'))(control)
                                    : null;
    }
}