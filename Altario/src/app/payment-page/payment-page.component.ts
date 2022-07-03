import { Component, OnInit,Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {  ColDef,
          ColDefUtil,
          GridApi,
          GridReadyEvent,
          RefreshCellsParams,
          RowNode, } from 'ag-grid-community';

import { Observable, timer } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiserviceService } from '../apiservice.service';

import { GeneratorPageComponent } from '../generator-page/generator-page.component';

 
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  dateTime !:Date;
  seconds !:Number;
  getColumnPosition !: String;
  getRowPosition !: String;
  gridApi !: GridApi;
  code !: string;
  params !: RefreshCellsParams;
  generatorCode !:GeneratorPageComponent;
  readData !: any;

rowData : any[] = [];

columnDefs : ColDef[] =[   
  {field: 'Name'},
  {field: 'Amount'},
  {field: 'Code'},
  {field: 'Grid'},

];

onGridReady(params: GridReadyEvent) {
  this.gridApi = params.api;
  params.api.setRowData(this.rowData);    
}



  constructor(private service:ApiserviceService) { }

 

  ngOnInit(): void {

    
    this.generatorCode!.getCodeGenerator().subscribe((val:any)=>{
      console.log('value obserable'+ val );

    })     
 
   this.service.getAllData().subscribe((res)=>{
    console.log(res,"response");

    this.readData = res.data;
   });

    timer(0,2000).subscribe(()=> {
     
    //this.loadGrid();
    });
  }

  loadGrid(){    
  console.log(this.readData)
  this.gridApi.sizeColumnsToFit()
  this.gridApi.setRowData(this.readData);
  this.gridApi!.refreshCells(this.params);
  }


  userForm = new FormGroup({
    'name':new FormControl('',Validators.required),
    'ammount':new FormControl('',Validators.required),
    


  })

  userSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,'create data')
      })

    }else{
      console.log('Need to fill all fields');
      
    }
  
  }
}
