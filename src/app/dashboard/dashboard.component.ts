import { Component } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  errMessage: string;
  public note: Note;
  public notes: Array<Note>;

  constructor(private noteSvc: NotesService) {
    this.note = new Note();
    this.notes = [];

    this.noteSvc.getNotes().subscribe(
      resp => this.notes = resp,
      err => {
        this.errMessage = err.message;
      }
    );
  }

  addNote() {
    this.notes.push(this.note);
    if (!this.note.title || !this.note.text) {
      this.errMessage = 'Title and Text both are required fields';
    }

    this.noteSvc.addNote(this.note).subscribe(
      response => { },
      err => {
        this.errMessage = err.message;
      }
    );
  }
}
