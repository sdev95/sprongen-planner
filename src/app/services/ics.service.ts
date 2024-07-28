import { inject, Injectable } from '@angular/core';
import { SprongDatumService } from './sprong-datum.service';
import { ISprong } from '../sprongen/ISprong';
import { Sprong1 } from '../sprongen/sprong1';
import { Sprong2 } from '../sprongen/sprong2';
import { Sprong3 } from '../sprongen/sprong3';
import { Sprong4 } from '../sprongen/sprong4';
import { Sprong5 } from '../sprongen/sprong5';
import { Sprong6 } from '../sprongen/sprong6';
import { Sprong7 } from '../sprongen/sprong7';
import { Sprong8 } from '../sprongen/sprong8';
import { Sprong9 } from '../sprongen/sprong9';
import { Sprong10 } from '../sprongen/sprong10';

@Injectable({
  providedIn: 'root'
})
export class IcsService {

  private datumService: SprongDatumService = inject(SprongDatumService);

  public generateSprongenAgenda(uitgerekendeDatum: Date): string {
    const calender = `BEGIN:VCALENDAR
    PRODID:-//Sprongen Calender//sdev95//NL
    VERSION:2.0
    ${this.genereerSprongEvent(uitgerekendeDatum, new Sprong1())}
    ${this.genereerSprongEvent(uitgerekendeDatum, new Sprong2())}
    ${this.genereerSprongEvent(uitgerekendeDatum, new Sprong3())}
    ${this.genereerSprongEvent(uitgerekendeDatum, new Sprong4())}
    ${this.genereerSprongEvent(uitgerekendeDatum, new Sprong5())}
    ${this.genereerSprongEvent(uitgerekendeDatum, new Sprong6())}
    ${this.genereerSprongEvent(uitgerekendeDatum, new Sprong7())}
    ${this.genereerSprongEvent(uitgerekendeDatum, new Sprong8())}
    ${this.genereerSprongEvent(uitgerekendeDatum, new Sprong9())}
    ${this.genereerSprongEvent(uitgerekendeDatum, new Sprong10())}
    END:VCALENDAR`;
    return this.verwijderVoorloopWitregels(calender);
  }

  private genereerSprongEvent(uitgerekendeDatum: Date, sprong: ISprong): string {
    const timeStamp = new Date().toISOString();
    const uuid = `${timeStamp}-${sprong.naam}`;
    const startDatumSprong = this.datumService.voegDagenToeAanUitgerekendeDatum(uitgerekendeDatum, sprong.startDagenNaUitgerekendeDatum);
    const stopDatumSprong = this.datumService.voegDagenToeAanUitgerekendeDatum(uitgerekendeDatum, sprong.stopDagenNaUitgerekendeDatum);

    const sprongEvent =
      `BEGIN:VEVENT
    UID:${uuid}
    DTSTAMP:${this.datumService.formateerNaarICSTimestamp(startDatumSprong)}
    DTSTART:${this.datumService.formateerNaarICSHeleDagEvent(startDatumSprong)}
    DTEND:${this.datumService.formateerNaarICSHeleDagEvent(stopDatumSprong)}
    SUMMARY:${sprong.naam}
    URL:${sprong.url}
    END:VEVENT`;
    return sprongEvent;
  }

  private verwijderVoorloopWitregels(text: string): string {
    return text.replace(/^\s+/gm, '');
  }

}
