import { Component, Input } from '@angular/core';
import { Note } from '../../services/notes.service';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() note!: Note;

  constructor() {}
}
