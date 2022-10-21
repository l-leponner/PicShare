import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {PicShare} from "../models/pic-share.model";
import {PicShareService} from "../services/pic-share.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-pic-share',
  templateUrl: './new-pic-share.component.html',
  styleUrls: ['./new-pic-share.component.scss']
})
export class NewPicShareComponent implements OnInit {

  picShareForm!: FormGroup;
  picSharePreview$!: Observable<PicShare>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
              private picShareService: PicShareService,
              private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.picShareForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    }, {
      updateOn: 'blur'
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
    this.picShareService.addNewPicShare(this.picShareForm.value);
    this.router.navigateByUrl('/picshares');
  }

}
