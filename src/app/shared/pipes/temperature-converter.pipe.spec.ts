import { TemperatureConverterPipe } from './temperature-converter.pipe';

describe('Pipe: TemperatureConverterPipe', () => {
  it('create an instance', () => {
    const tempConverterPipe = new TemperatureConverterPipe();
    expect(tempConverterPipe).toBeTruthy();
  });
  it('should convert celcius to farenhiet', () => {
    const tempConverterPipe = new TemperatureConverterPipe();
    expect(tempConverterPipe.transform(100, 'F')).toEqual('212.00');
  });
  it('should convert farenhiet to celcius', () => {
    const tempConverterPipe = new TemperatureConverterPipe();
    expect(tempConverterPipe.transform(32, 'C')).toEqual('0.00');
  });
});
