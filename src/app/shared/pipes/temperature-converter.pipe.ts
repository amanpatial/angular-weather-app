import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: number, unit: string) {
    if (value && !isNaN(value)) {
        if (unit === 'F') {
            var tempareature = (value * 9 / 5) + 32;
            return tempareature.toFixed(2);
        }
        if (unit === 'C') {
            var tempareature = (value - 32) * 5 / 9;
            return tempareature.toFixed(2);
        }
    }
    return;
}

}
