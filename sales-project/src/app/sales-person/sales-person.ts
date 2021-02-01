import { areAllEquivalent } from "@angular/compiler/src/output/output_ast";

export class SalesPerson {

  constructor(public firstName :string,
              public lastName :string,
              public email :string,
              public salesVolume :number) {}
}
