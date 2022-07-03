import { Component, OnInit,Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {  ColDef,
          ColDefUtil,
          GridApi,
          GridReadyEvent,
          RefreshCellsParams,
          RowNode, } from 'ag-grid-community';

import { timer } from 'rxjs';

 
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



  constructor() { }

  ngOnInit(): void {
    timer(0,2000).subscribe(()=> {
    
    });
  }
 

}
