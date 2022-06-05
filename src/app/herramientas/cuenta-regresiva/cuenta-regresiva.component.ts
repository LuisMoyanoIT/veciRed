import { Component, OnInit, OnDestroy, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription, interval } from 'rxjs';
import { Acuerdos } from '../../interfaces/interfaces';
import { AcuerdosService } from '../../servicios/acuerdos.service';

@Component({
  selector: 'app-cuenta-regresiva',
  templateUrl: './cuenta-regresiva.component.html',
  styleUrls: ['./cuenta-regresiva.component.scss'],
})
export class CuentaRegresivaComponent implements OnInit, OnDestroy {

  @Input() votacionLanzada: Acuerdos = {};
  private subscription: Subscription;

  public dateNow = new Date();
  
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;
  
  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;

  constructor(private acuerdosService: AcuerdosService,
              private router: Router,
              private navCtrl: NavController) { }

  private getTimeDifference () {

    var duracionMilisegundos = (this.votacionLanzada.duracion * this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute);
    //fecha lanzada + duracion en milisegundos componen el dDay
    var dDay = this.votacionLanzada.fechaLanzada + duracionMilisegundos;
    this.timeDifference = dDay - new  Date().getTime();

    if(this.timeDifference < 0){ 

      this.finVotacion();
    }

    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference) {

    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
  }

  finVotacion(){

    this.votacionLanzada.estado = 3;
    this.acuerdosService.eliminarAcuerdo(this.votacionLanzada);
    //navctrl eso falta
    this.navCtrl.navigateRoot('/main/tabs/votaciones');
    //this.router.
    //this.ngOnDestroy();
  }

  ngOnInit() {

    this.subscription = interval(1000)
        .subscribe(x => { this.getTimeDifference(); });
  }

  ngOnDestroy() {

   // this.votacionLanzada = {};
    //this.timeDifference = 0;
    this.subscription.unsubscribe();
    //this.subscription = null;
  }
}