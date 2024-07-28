import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SprongDatumService {

  public voegDagenToeAanUitgerekendeDatum(uitgerekendeDatum: Date, dagen: number): Date {
    const uitrekendatumMetSprongtoevoeging = new Date(uitgerekendeDatum);
    uitrekendatumMetSprongtoevoeging.setDate(uitrekendatumMetSprongtoevoeging.getDate() + dagen);
    return uitrekendatumMetSprongtoevoeging;
  }

  public formateerNaarICSTimestamp(datum: Date | string): string {
    const date = typeof datum === 'string' ? new Date(datum) : datum;

    const jaar = date.getUTCFullYear();
    const maand = String(date.getUTCMonth() + 1).padStart(2, '0');
    const dag = String(date.getUTCDate()).padStart(2, '0');
    const uren = String(date.getUTCHours()).padStart(2, '0');
    const minuten = String(date.getUTCMinutes()).padStart(2, '0');
    const seconden = String(date.getUTCSeconds()).padStart(2, '0');

    return `${jaar}${maand}${dag}T${uren}${minuten}${seconden}`;
  }

  public formateerNaarICSHeleDagEvent(datum: Date): string {
    const jaar = datum.getFullYear();
    const maand = String(datum.getMonth() + 1).padStart(2, '0');
    const dag = String(datum.getDate()).padStart(2, '0');
    return `${jaar}${maand}${dag}`;
  }

}
