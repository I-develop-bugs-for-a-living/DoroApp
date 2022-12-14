import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MarketApiService } from 'src/app/services/market-api.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  public newItemFormFB: FormGroup;



  constructor(private _fb: FormBuilder, private marketApi: MarketApiService, private router: Router, private location: Location) {
    this.newItemFormFB = this._fb.group({
      name: ['', [
        Validators.required
      ], []],
      description: ['', [
        Validators.required
      ], []],
      giver: ['', [
        Validators.required
      ], []],
      price: ['', [
        Validators.required,
        Validators.min(0)
      ]]
    })
   }


  ngOnInit(): void {
  }

  back() {
    this.location.back()
  }

  addNewItem() {
    this.marketApi.postNewMarketItem(this.newItemFormFB.value).subscribe(
      (response) => {console.log(response); this.router.navigate(['/marketplace']);}
    );
  }



}

// imageIsSaved: boolean = false;

//   CreateBase64String(fileInput: any) {
//     if (fileInput.target.files && fileInput.target.files[0]) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         const image = new Image();
//         image.src = e.target.result;
//         image.onload = (rs) => {
//           const imgBase64Path = e.target.result;
//           this.cardImageBase64 = imgBase64Path;
//           this.imageIsSaved = true;
//           console.log(imgBase64Path);
//         };
//       };
//       reader.readAsDataURL(fileInput.target.files[0]);
//     }
//   }
