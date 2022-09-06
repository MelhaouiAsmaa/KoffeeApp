import { invokeCoffeesAPI } from './../store/coffees.action';
import { selectCoffees } from './../store/coffees.selector';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {

  idProduct: any;
  product: any;
  constructor(private productService: ProductService,
    private activatedroute: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {
    this.activatedroute.params.subscribe((param: Params) => {
      this.idProduct = param['id'];
      this.productService.getProduct(this.idProduct).subscribe(
        data => {
          console.log(data);
          this.product = data;
        })

    })

  }

  gotoList(): void {
    this.router.navigate(['/productList']);
  }

}