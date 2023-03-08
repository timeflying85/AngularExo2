import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy{

  observer! : Subscription;

  ngOnDestroy(): void {

    this.observer.unsubscribe()

  }

  ngOnInit(): void {

    // Mon Observer
    let observer = this.monSubject.subscribe({

      // Action que j'execute quand je recois le message (next('Message'))
      next : (data) => {
          console.log(data);
      },

      // Action que j'execute quand je recois une erreur (error('message ou erreur'))
      error(err) {
          console.error(err);
      },

      // Action executé quand on close l'observable avec la func complete (complete())
      complete() {
          console.log("complete")
      }

    })

  }

  valueInput : string = ''

  monSubject : BehaviorSubject<string> = new BehaviorSubject<string>("Hello Bitches !!")

  sendData() {

      if (this.valueInput == ''){

        this.monSubject.error('CPT')

      }
      else if(this.valueInput == 'stop'){
        this.monSubject.complete()
      }
      else{
        this.monSubject.next(this.valueInput)
      }
    }

}
