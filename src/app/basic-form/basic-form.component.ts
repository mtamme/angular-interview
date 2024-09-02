import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    NgIf,
  ],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss',
})
export class BasicFormComponent {
  userName: string | undefined;
  email: string | undefined;
  birthdate: Date | undefined;
  selectedGender: string | undefined;

  genders = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
  ];

  onSubmit() {
    console.log('Submitted');
  }
}
