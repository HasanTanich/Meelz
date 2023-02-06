import { OrderByNumerical } from './order-by.pipe';
import { OrderByPipeAlphabatical } from './order-by.pipe';


describe('OrderByNumerical', () => {
  it('create an instance', () => {
    const pipe = new OrderByNumerical();
    expect(pipe).toBeTruthy();
  });
});
describe('OrderByPipeAlphabatical', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipeAlphabatical();
    expect(pipe).toBeTruthy();
  });
});
