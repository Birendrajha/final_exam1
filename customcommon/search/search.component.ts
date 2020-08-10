import { Component, OnInit } from '@angular/core';
import { ResortService } from '../resort/resort.service';
import { Router } from '@angular/router';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  


  resortForm: FormGroup;
  resort:any;
  constructor(private resortService:ResortService,private fb: FormBuilder,private snackBar: MatSnackBar) { }

  ngOnInit(){
    this.resortForm = this.fb.group({
       lat: new FormControl('', Validators.required),
       long: new FormControl('', Validators.required),
      
     
    });
  }

  find(){
  this.resortService.find(this.resortForm.value).subscribe((result) => {
   if (result){
     
    this.resort=result.data
     
    this.snackBar.open('Restaurants found!','done', {
      duration: 1000
    });
  }
  })
  
}
}


