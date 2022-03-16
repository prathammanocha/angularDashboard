import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  studentForm!: FormGroup;
  actionBtn : string = "Save"
  constructor(private formBuilder: FormBuilder, 
    private api: ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      studentName: ['', Validators.required],
      studentID: ['', Validators.required],
      collegeName: ['', Validators.required],
      gender:['', Validators.required]
    });
    if(this.editData){
      this.actionBtn = "Update";
      this.studentForm.controls['studentName'].setValue(this.editData.studentName);
      this.studentForm.controls['studentID'].setValue(this.editData.studentID);
      this.studentForm.controls['collegeName'].setValue(this.editData.collegeName);
      this.studentForm.controls['gender'].setValue(this.editData.gender);
    }
  }
  addStudent(){
    if(!this.editData){
      if(this.studentForm.valid){
        this.api.postStudent(this.studentForm.value)
        .subscribe({
          next:(res)=>{
            alert("Student Added Successfully");
            this.studentForm.reset();
            this.dialogRef.close('Saved');
          },
          error:()=>{
            alert("Sorry, Some Error Occured while adding the Student");
          }
        })
      }
  }
  else{
    this.updateStudent()
  }
}
updateStudent(){
  this.api.putStudent(this.studentForm.value, this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("Product Updated Succesfully");
      this.studentForm.reset();
      this.dialogRef.close("update");
    },
    error:(err)=>{
      alert('Error while Updating')
    }
  })
}
}
