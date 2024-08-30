import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NoteComponent } from "../layout/note/note.component";
import { Note, NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [NoteComponent, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  public notes: Note[] = []

  constructor(
    private notesService: NotesService
  ) {}


  getNotes = () => {
    this.notesService.getAllNotes().subscribe((notes) => {
      console.log(notes)
      this.notes = notes.items

      console.log('this notes:', this.notes)
    })
  }
}
