import { RemoveAPipe } from './remove-a.pipe';

describe('RemoveAPipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveAPipe();
    expect(pipe).toBeTruthy();
  });

  it('should replace A', () => {
    const pipe = new RemoveAPipe();
    expect(pipe.transform('hola')).toBe('hol');
  });
});
