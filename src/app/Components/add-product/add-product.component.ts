import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityServiceService } from "../../Service/utility-service.service";
import { ProductServiceService } from "../../Service/product-service.service";
import { DataServiceService } from "../../Service/data-service.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {
  hide: boolean = true;
  form: any = FormGroup;
  element:any =[];
  url = [];

  constructor(private fb: FormBuilder, private utilityService: UtilityServiceService,
    private productService: ProductServiceService, private dataService: DataServiceService
  ) {
    this.form = this.fb.group({
      Name: [""],
      Price: ["", Validators.pattern("^[0-9]*$")],
      Image: [""],
    })
  }

  selectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  table = [];
  array1: any = [];
  addProducts() {
    let data = {
      "Name": this.form.controls.Name.value,
      "Price": this.form.controls.Price.value,
      "Image": this.url
    }
    if (this.form.valid) {
      console.log(data)
      this.productService.addProducts(data).subscribe(result => {
        console.log("result is ", result)
        this.dataService.changeMessage({});
        this.utilityService.displaySnakeBar("Product Added Successfully")
      },
        (error) => {
          console.log(error)
        })
    }
    else {
      this.utilityService.displaySnakeBar("Plese Fill Required Fields With Validation")
    }
  }

  //writeJsonFile = require('write-json-file');
  ngOnInit(): void {

  }
}
