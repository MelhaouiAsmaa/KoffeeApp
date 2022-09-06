import { selectCoffees } from './../store/coffees.selector';
import { invokeCoffeesAPI } from './../store/coffees.action';
import { Store, select } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentProduct: Product = new Product;
  currentIndex = -1;
  title = '';
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [3, 6, 9];

  constructor(private productService: ProductService,
    private router: Router,
    private store: Store) { }

  coffees$ = this.store.pipe(select(selectCoffees));


  ngOnInit(): void {
    this.store.dispatch(invokeCoffeesAPI());
    this.retrieveProducts();
  }

  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }
  retrieveProducts(): void {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.productService.getProductList()
      .subscribe(
        data => {
          this.count = data.length;
          console.log(data.length);
        },
        error => {
          console.log(error);
        });
    this.productService.getProductListWithParams(params)
      .subscribe(
        response => {
          this.products = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveProducts();
  }

  gotoDetails(id: any): void {
    console.log("voilà")
    this.router.navigate(['/productDetails', id]);
  }

}