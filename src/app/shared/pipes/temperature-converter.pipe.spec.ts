import { TemperatureConverterPipe } from './temperature-converter.pipe';

describe('TemperatureConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureConverterPipe();
    expect(pipe).toBeTruthy();
  });
});
