import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { IcsService } from '../services/ics.service';

@Component({
  selector: 'app-genereren',
  templateUrl: './genereren.component.html',
  styleUrls: ['./genereren.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class GenererenComponent {
  private icsService: IcsService = inject(IcsService);

  berekenenForm: FormGroup = new FormGroup({
    uitgerekendeDatum: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.berekenenForm.invalid) {
      return;
    }

    const icsAgenda = this.icsService.generateSprongenAgenda(this.berekenenForm.value.uitgerekendeDatum);
    this.downloadBestand(icsAgenda, this.berekenenForm.value.uitgerekendeDatum);
  }

  downloadBestand(icsAgenda: string, uitgerekendeDatum: Date) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(icsAgenda));
    element.setAttribute('download', `agenda_sprongen_geboortedatum_${uitgerekendeDatum}.ics`);
    element.setAttribute('target', '_blank');
    element.style.display = 'none';
    element.click();
  }
}