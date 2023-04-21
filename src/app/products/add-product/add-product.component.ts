import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private fb:FormBuilder,private ps:ProductService,private router:Router){

  }
addProductForm=this.fb.group({
  id: ["",[Validators.required,Validators.pattern('[0-9]+')]],
  productName: ["",[Validators.required,Validators.pattern('[A-Za-z]+')]],
  categoryId: ["",[Validators.required,Validators.pattern('[0-9]+')]],
  description: ["",[Validators.required,Validators.pattern('[A-Za-z]+')]],
  price: ["",[Validators.required,Validators.pattern('[0-9]+')]],
  isAvailiable: ["",[Validators.required,Validators.pattern('[A-Za-z]+')]],
  productImage: ["",[Validators.required,Validators.pattern('[A-Za-z0-9]+')]],
  rating: ["",[Validators.required,Validators.pattern('[0-9]+')]],
  review: ["",[Validators.required,Validators.pattern('[A-Za-z]+')]],
  vendorName: ["",[Validators.required,Validators.pattern('[A-Za-z]+')]],
  warrenty: ["",[Validators.required,Validators.pattern('[A-Za-z0-9]+')]]
})

addProduct() {
  let Pdata ={
    id:this.addProductForm.value.id,
    productName:this.addProductForm.value.productName,
    categoryId:this.addProductForm.value.categoryId,
    description:this.addProductForm.value.description,
    price:this.addProductForm.value.price ,
    isAvailiable:this.addProductForm.value.isAvailiable ,
    productImage:this.addProductForm.value.productImage,
    rating:this.addProductForm.value.rating ,
    review:this.addProductForm.value.review ,
    vendorName:this.addProductForm.value.vendorName ,
    warrenty:this.addProductForm.value.warrenty 

  }
  this.ps.addNewProduct(Pdata).subscribe((data:any)=>{
    alert("new product added")
    this.router.navigateByUrl("products")
  })
}




}
