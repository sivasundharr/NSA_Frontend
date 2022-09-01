import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { applicationDetails } from './scholarshipapplicationdetails';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipapplicationService {

  constructor(private myhttp:HttpClient) { }
  URL:string="http://localhost:9001";

  getStudent(){
    return this.myhttp.get(`${this.URL}/scholarApplications`);
  }

  addScholarship(application:applicationDetails){
    return this.myhttp.post(`${this.URL}/applystudent`,application);
  }

  addDocuments(documents:any){
    return this.myhttp.post(`${this.URL}/upload/schdocs`,documents)
  }
}
