import { NumberToStarsPipe } from './number-to-stars.pipe';

describe('NumberToStarsPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberToStarsPipe();
    expect(pipe).toBeTruthy();
  });
});
