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
  paymentCode : string[]=[];
  params !: RefreshCellsParams;
  generatorCode !:GeneratorPageComponent ;
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
    this.gridApi.setFilterModel(null);
    params.api.setRowData(this.rowData);
    this.gridApi.sizeColumnsToFit()
    this.gridApi!.refreshCells(this.params);  
    
  }

  constructor(private service:ApiserviceService, ) { }

  ngOnInit(): void {
    
    console.log("retreive Observable")
    //this.generatorCode.codeObservable.subscribe((data)=> this.paymentCode.push(data));

    /* get data from the database */
    console.log("retreive Data from database");
    this.service.getAllData().subscribe((res)=>{
    console.log(res,"response");

    this.readData = res.data;
    });

    /* timer of 2 sec*/
    timer(0,2000).subscribe(()=> {      
    this.loadGrid();
    });
  }

  loadGrid(){    
    console.log(this.readData)
    this.gridApi.setRowData(this.readData);
  
  }

  userForm = new FormGroup({
    'name':new FormControl('',Validators.required),
    'ammount':new FormControl('',Validators.required),
    //missing code from generator page
    //missing grid from generator page


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
