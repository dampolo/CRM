import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogContent, MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {}
