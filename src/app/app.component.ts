import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isUpdateFormActive:boolean=false;
  isFirstClick:boolean=false;
  title = 'todo-app';
  work: string = "";
  works: string[] = ["Example 1", "Example 2", "Example 3"];
  updateWork: string = "";
  updateId:number=0;

  Save() {
    this.works.push(this.work);
    this.isFirstClick=true;
  }
  Delete(index: number) {
    let result: Boolean = confirm("Do you realy wanna delete this job?");
    if (result) {
      this.works.splice(index, 1);
    }
  }
  Cancel(){
    this.isUpdateFormActive=false;
  }
  Get(getWork:string,index:number){
    this.updateWork=getWork;
    this.updateId=index;
    this.isUpdateFormActive=true;

  }
  Update(){
    this.works[this.updateId]=this.updateWork;
    this.Cancel();
  }
  ChangeInputClass(){
    if(this.isFirstClick){

      if(this.work.length<=0){
        
        return "is-invalid"
      }
      return "is-valid"
    }
    return;
  }
}
