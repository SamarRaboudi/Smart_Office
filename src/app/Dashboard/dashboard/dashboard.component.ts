import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public now = new Date();
public x1:any;
public x2:any;
public userName:any;
public temperatureList=[26,27,28,30,31,32,29,28,27,25,24];
public temperature =26;
public i=0;
public dashbordForm: FormGroup;
  constructor(private fb: FormBuilder,) {
    this.userName=localStorage?.getItem('userName')?localStorage.getItem('userName'):'Admin';

    
    this.dashbordForm = this.fb.group({
      airConditioner: [false],
      lamp:[false]
    });
   }

  ngOnInit(): void {
    window.addEventListener("beforeunload", function () {
      document.body.classList.add("animate-out");
    });
  
 this.generateDateTime();
 this.handleLamp();
 this.handleAirConditiner();
  

     
  }

 generateDateTime(){
  this.x1=this.now.toLocaleDateString();
  setInterval(
    () =>{this.x1=this.now.toLocaleDateString();
          this.x2=new Date().toLocaleTimeString();
        },
    1000
  );
 }
handleLamp(){
  const now = new Date().getHours()
  
  if(now>=18 || now<12){
this.dashbordForm.get('lamp')?.setValue(false);
  }  else{
    this.dashbordForm.get('lamp')?.setValue(true);
  }
}

handleAirConditiner(){
  setInterval(
    () =>{
    if(this.i+1<this.temperatureList.length)
      { 
      this.i++;
    }else{
        this.i=0;
      }
      this.temperature=this.temperatureList[this.i];
      if(this.temperature>=30){
        this.dashbordForm.get('airConditioner')?.setValue(true);
      }else if(this.temperature<=24){
        this.dashbordForm.get('airConditioner')?.setValue(false);
      }
    },
    5000
  );
      
}
 
  
}
