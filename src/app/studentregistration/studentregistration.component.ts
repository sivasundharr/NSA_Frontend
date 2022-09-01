import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Institution } from '../institution';
import { InstitutionregistrationService } from '../institutionregistration.service';
import { student } from '../student';
import { StudentregistrationService } from '../studentregistration.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

  constructor(private stu:StudentregistrationService, myHttp:HttpClient , private router:Router)  { }



  ngOnInit(): void {

  }
  form=new FormGroup({
    'stateofDomicile':new FormControl('',Validators.required),
    'district':new FormControl('',Validators.required),
    'name':new FormControl('',Validators.required),
    'dateOfBirth':new FormControl('',Validators.required),
    'gender':new FormControl('',Validators.required),
    'mobileNumber':new FormControl('',[Validators.required,,Validators.min(100000000000), Validators.max(9999999999999)]),
    'email':new FormControl('',Validators.compose([Validators.email, Validators.required])),
    'institutecode':new FormControl('',Validators.required),
    'aadharNumber':new FormControl('',[Validators.required,Validators.min(100000000000), Validators.max(9999999999999)
     ]),
    'bankifsccode':new FormControl('',Validators.required),
    'accountnumber':new FormControl('',Validators.required),
    'bankname':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required),
  });
  student:student=new student();
  saveStudent()
  {
      this.student=this.form.value;

      this.stu.registerStudent(this.student).subscribe(
        (data)=>{
          console.log(data);
          this.router.navigate(['/home']);
                  },
        (error)=>
        {
          console.log(error)
        }
      )
  }

  OnClickFunction(){
   alert("Registration done");
 }
  
}