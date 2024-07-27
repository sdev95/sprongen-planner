import { inject, Injectable } from '@angular/core';
import { DatumService } from './datum.service';
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

  private datumService: DatumService = inject(DatumService);

  public downloadIcs(uitgerekendeDatum: Date) {
    const ics = this.generateSprongenAgenda(uitgerekendeDatum);
    const icsWithoutLeadingWhitespaces = this.removeLeadingWhitespaces(ics);

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(icsWithoutLeadingWhitespaces));
    element.setAttribute('download', `agenda_sprongen_geboortedatum_${uitgerekendeDatum}.ics`);
    element.setAttribute('target', '_blank');
    element.style.display = 'none';
    element.click();
  }

  private generateSprongenAgenda(uitgerekendeDatum: Date): string {

    // Don't ever format this string template
    const event = `BEGIN:VCALENDAR
    PRODID:-//Sprongen Calender//sdev95//NL
    VERSION:2.0
    ${this.generateSprong(uitgerekendeDatum, new Sprong1())}
    ${this.generateSprong(uitgerekendeDatum, new Sprong2())}
    ${this.generateSprong(uitgerekendeDatum, new Sprong3())}
    ${this.generateSprong(uitgerekendeDatum, new Sprong4())}
    ${this.generateSprong(uitgerekendeDatum, new Sprong5())}
    ${this.generateSprong(uitgerekendeDatum, new Sprong6())}
    ${this.generateSprong(uitgerekendeDatum, new Sprong7())}
    ${this.generateSprong(uitgerekendeDatum, new Sprong8())}
    ${this.generateSprong(uitgerekendeDatum, new Sprong9())}
    ${this.generateSprong(uitgerekendeDatum, new Sprong10())}
    END:VCALENDAR`;
    return event;
  }

  private generateSprong(uitgerekendeDatum: Date, sprong: ISprong): string {
    const timeStamp = new Date().toISOString();
    const uuid = `${timeStamp}-${sprong.naam}`;
    const startDatumSprong = this.datumService.addDays(uitgerekendeDatum, sprong.startDagenNaUitgerekendeDatum);
    const stopDatumSprong = this.datumService.addDays(uitgerekendeDatum, sprong.stopDagenNaUitgerekendeDatum);

    const event =
      `BEGIN:VEVENT
    UID:${uuid}
    DTSTAMP:${this.datumService.formatToICSCompatibleTimestamp(startDatumSprong)}
    DTSTART:${this.datumService.formatToICSAllDayEvent(startDatumSprong)}
    DTEND:${this.datumService.formatToICSAllDayEvent(stopDatumSprong)}
    SUMMARY:${sprong.naam}
    URL:${sprong.url}
    END:VEVENT`;
    return event;
  }

  private removeLeadingWhitespaces(text: string): string {
    return text.replace(/^\s+/gm, '');
  }

}
