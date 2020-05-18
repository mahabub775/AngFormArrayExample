import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'testform',
    templateUrl: './testform.component.html'
})

export class TestformComponent implements OnInit {
    DemoUnions = [{ name: "U1" }, { name: "U2" }, { name: "U3" }, { name: "U4" }, { name: "U5" }]
    profileForm = this.fb.group({
        Upazila: [''],
        UnionData: this.fb.array([
        ]),
    });
	
    UnionItemFG(unionItem) {
        return this.fb.group({
            Name: [unionItem ? unionItem.name : ''],
            Fld1: [''],
            Fld2: [0]
        })
    }
    constructor(private fb: FormBuilder, public http: HttpClient) { }

    ngOnInit() { 
        this.LoadUnions();
    }
    OnSubmit() {
        console.log(this.profileForm.value);
    }
	    get UnionData() {
      return <FormArray> this.profileForm.get('UnionData');
    };

    LoadUnions() {
        let arr=(this.profileForm.controls.UnionData as FormArray);
        console.log(arr);
        this.DemoUnions.forEach(element => {
            arr.push(this.UnionItemFG(element));
        });
    }

}