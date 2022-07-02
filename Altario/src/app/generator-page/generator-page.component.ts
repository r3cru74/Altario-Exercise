import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent,GridReadyEvent,Grid, ColDef, GridOptionsWrapper,GridOptions, GridApi,GetRowIdFunc,GetRowIdParams,RefreshCellsParams } from 'ag-grid-community';

import { timer } from 'rxjs';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-generator-page',
  templateUrl: './generator-page.component.html',
  styleUrls: ['./generator-page.component.css']
})
export class GeneratorPageComponent implements OnInit {

  dateTime :Date;
  seconds :Number;
  getColumnPosition : String;
  getRowPosition : String;
  gridApi : GridApi;
  code: String;


  
rowData : any[] = [
  {0:'',1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''},
  {0:'',1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''},
  {0:'',1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''},
  {0:'',1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''},
  {0:'',1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''},
  {0:'',1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''},
  {0:'',1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''},
  {0:'',1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''},
  {0:'',1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''},
  {0:'',1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''}    
];

colDefs : ColDef[] =[   
  {field: '0'},
  {field: '1'},
  {field: '2'},
  {field: '3'},
  {field: '4'},
  {field: '5'},
  {field: '6'},
  {field: '7'},
  {field: '8'},
  {field: '9'}
];

  constructor() {
    this.dateTime = new Date('ss');
    this.seconds = new Number;
    this.getColumnPosition = new String;
    this.getRowPosition = new String;
    this.arrayRandomLetter;
    this.gridApi =new GridApi; 
    this.code = this.getCode(this.countCharacterOccurences(this.getCharacterCodePosition(this.getColumnPosition,this.getRowPosition)))
    
    
   }

  ngOnInit(): void {
/* Timer 2 sec to update grid   */
  timer(0,2000).subscribe(()=> {
    this.dateTime = new Date();
    this.seconds = this.dateTime.getSeconds();
    
    this.getColumnPosition = this.addZeroBeforeNumber(this.seconds).toString()
      .slice(-2)
      .substring((this.seconds.toString().length)-1,this.seconds.toString().length);

    this.getRowPosition = this.addZeroBeforeNumber(this.seconds).toString()
    .slice(-2)
    .substring((this.seconds.toString().length)-2,(this.seconds.toString().length)-1);

    this.code = this.getCode(this.countCharacterOccurences(this.getCharacterCodePosition(this.getColumnPosition,this.getRowPosition)))
  })

  /*
    console.log("get code position");
    this.getCharacterCodePosition(this.getColumnPosition,this.getRowPosition)
    console.log(this.getCharacterCodePosition(this.getColumnPosition,this.getRowPosition));
    console.log("count occurences of Position Letter");
    this.countCharacterOccurences(this.getCharacterCodePosition(this.getColumnPosition,this.getRowPosition));
    console.log(this.countCharacterOccurences(this.getCharacterCodePosition(this.getColumnPosition,this.getRowPosition)));
    console.log("code");
    this.getCode(this.countCharacterOccurences(this.getCharacterCodePosition(this.getColumnPosition,this.getRowPosition)));
    console.log( this.getCode(this.countCharacterOccurences(this.getCharacterCodePosition(this.getColumnPosition,this.getRowPosition))));
   */ 

  }

  
  checkGeneratorGrid()
  {

    var charInput = document.getElementById("InputChar") as HTMLInputElement;
   
      console.log("char input:" + charInput.value);
      if(charInput.value != null && charInput.value != "" && charInput.disabled == false)
        { 
          charInput.disabled = true;          
          setTimeout(()=>{charInput.disabled =false;},4000)
          this.setBiasWeight(charInput.value);         
        }else
        {
          this.gridFillGenerator();
        }

  }
 
  arrayRandomLetter : String[][] =[[]]; 
  gridFillGenerator()
  {
    
    for (var col=0; col < 10; col++){     
      for(var row=0; row < 10; row++){
        if(Array.isArray(this.arrayRandomLetter[col])){
        this.arrayRandomLetter[col][row] = this.generateRandomLetterAlphabet();
        }else{
          this.arrayRandomLetter[col] =[this.generateRandomLetterAlphabet()];
        }

      }
    }
      console.log(this.rowData); 
      this.rowData = this.arrayRandomLetter;        
      this.gridApi.setRowData(this.rowData);
      
      
     
 
  }

  addZeroBeforeNumber(num:Number)
  {
    /* Check the condition minor than 10 if case true will add 0 if not will be blank*/
    return (num < 10 ? '0' : '') + num
  }

  generateRandomLetterAlphabet()
  {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }
  
  getCharacterCodePosition(col:any ,row:any)
  { 
    return [this.rowData?.[col]?.[row],this.rowData?.[row]?.[col]]
  }

  countCharacterOccurences(Character:Array<string>)
  {
    var countFirstLetter = 0;
    var countSecondLetter = 0;

    for (var col=0; col < 10; col++){     
      for(var row=0; row < 10; row++){       
        if(Array.isArray(this.rowData[col])){
          if(Character[0] === this.rowData[col][row])
          {
            countFirstLetter++;
          }
          if(Character[1] === this.rowData[col][row])
          {
            countSecondLetter++;
          } 
        }
      }
    }

    return [countFirstLetter,countSecondLetter]
  } 

  getCode(codeNumber:Array<number>)
  {
    var codeFirstNumber = 10;
    var codeSecondNumber = 10;

    if(codeNumber[0] > 9)
    {      
      for(var count = 1;count < 9;count++)
      {
        if(codeNumber[0] > 9 && codeFirstNumber > 9)
        {
          codeFirstNumber = Math.floor(codeNumber[0]/count);
        }
      }
    }


    if(codeNumber[1] > 9)
    {
      for(var count = 1; count < 9;count++)
      {
        if(codeNumber[1] > 9 && codeSecondNumber > 9)
        {
          codeSecondNumber = Math.floor(codeNumber[1]/count);

        } 
      }
    }

    if(codeNumber[0] <= 9){console.log(codeFirstNumber=codeNumber[0]);}
    if(codeNumber[1] <= 9){console.log(codeSecondNumber=codeNumber[1]);}

    return (codeFirstNumber+""+codeSecondNumber)
  }

  setBiasWeight(char : string)
  {
    var letters = /^[a-z]+$/;
    if(char.match(letters))
      {

        for (var col=0; col < 10; col++){     
          for(var row=0; row < 10; row++){          
            if(Array.isArray(this.arrayRandomLetter[col])){
              if(Math.floor(Math.random()*100) <= 20)
              {
                this.arrayRandomLetter[col][row] = char;
              }else
              {
                this.arrayRandomLetter[col][row] = this.generateRandomLetterAlphabet();
              }
            }else{
              if(Math.floor(Math.random()*100) <= 20)
              {
                this.arrayRandomLetter[col] = [char];
              } else
              {
                this.arrayRandomLetter[col] =[this.generateRandomLetterAlphabet()]; 
              }
            }
          }
        }
        console.log(this.arrayRandomLetter);
        this.rowData = this.arrayRandomLetter;        
        this.gridApi.setRowData(this.rowData);
       return true;
      }
    else
      {
      alert("Only lower character is allowed");      
      return false;
      }
  }



}
