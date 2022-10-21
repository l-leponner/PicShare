import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {map, Observable} from "rxjs";
import {PicShare} from "../models/pic-share.model";

@Component({
  selector: 'app-new-pic-share',
  templateUrl: './new-pic-share.component.html',
  styleUrls: ['./new-pic-share.component.scss']
})
export class NewPicShareComponent implements OnInit {

  picShareForm!: FormGroup;
  picSharePreview$!: Observable<PicShare>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.picShareForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null]
    });
    this.picSharePreview$ = this.picShareForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        id: 0,
        likes: 0
      }))
    )
  }

  onFormSubmit(): void {
    console.log(this.picShareForm.value);
  }

}
