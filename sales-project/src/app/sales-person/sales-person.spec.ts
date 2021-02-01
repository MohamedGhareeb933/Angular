import { SalesPerson } from './sales-person';

describe('SalesPerson', () => {
  it('should create an instance', () => {
    expect(new SalesPerson("Empty", "Empty", "Empty", 0)).toBeTruthy();
  });
});
