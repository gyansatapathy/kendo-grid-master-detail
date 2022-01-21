import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <kendo-grid [data]="data" selectable="true" style="height: 260px">
            <kendo-grid-column field="ProductID"></kendo-grid-column>
            <kendo-grid-column field="ProductName"></kendo-grid-column>
            <kendo-grid-column field="UnitPrice"></kendo-grid-column>
            <ng-template kendoGridDetailTemplate let-dataItem [kendoGridDetailTemplateShowIf]="showOnlyBeveragesDetails">
                <div *ngIf="dataItem.Category">
                    <header>{{ dataItem.Category?.CategoryName }}</header>
                    <span>{{ dataItem.Category?.Description }}</span>
                </div>
            </ng-template>
        </kendo-grid>
    `,
})
export class AppComponent {
  public data = [
    {
      ProductID: 1,
      ProductName: 'Chai',
      UnitPrice: 18.0,
      Discontinued: false,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages',
        Description: 'Soft drinks, coffees, teas, beers, and ales',
      },
    },
    {
      ProductID: 2,
      ProductName: 'Chang',
      UnitPrice: 19.0,
      Discontinued: false,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages',
        Description: 'Soft drinks, coffees, teas, beers, and ales',
      },
    },
    {
      ProductID: 3,
      ProductName: 'Aniseed Syrup',
      UnitPrice: 10.0,
      Discontinued: false,
      Category: {
        CategoryID: 2,
        CategoryName: 'Condiments',
        Description:
          'Sweet and savory sauces, relishes, spreads, and seasonings',
      },
    },
  ];

  public showOnlyBeveragesDetails(dataItem: any, index: number): boolean {
    return dataItem.Category.CategoryID === 1;
  }
}
