import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllNotes = () => {
    return this.httpClient.get<NoteResponse>('http://localhost:8083/notes', {
      responseType: 'json'
    })
  }
}

export interface NoteResponse {
  items: Note[]
}

export interface Note {
  id: string;
  title: string;
  description: string;
}
