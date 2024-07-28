import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { IcsService } from '../../services/ics.service';

@Component({
  selector: 'app-berekenen',
  templateUrl: './berekenen.component.html',
  styleUrls: ['./berekenen.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class BerekenenComponent {
  private icsService: IcsService = inject(IcsService);

  berekenenForm: FormGroup = new FormGroup({
    uitgerekendeDatum: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.berekenenForm.invalid) {
      return;
    }

    this.icsService.downloadIcs(this.berekenenForm.value.uitgerekendeDatum);
  }
}