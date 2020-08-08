import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'booleanToString' })
export class BooleanToStringValue implements PipeTransform{
    transform(value: boolean): string {
        if( value ) {
            return 'Enable';
        }
        return 'Disable';
    }
}