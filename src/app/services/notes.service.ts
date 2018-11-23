import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from '../note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class NotesService {

  constructor(private httpClient: HttpClient, private authSvc: AuthenticationService) {

  }

  getNotes(): Observable<Array<Note>> {
    const token = this.authSvc.getBearerToken();
    const httpOptions = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    return this.httpClient.get<Array<Note>>('http://localhost:3000/api/v1/notes', httpOptions);
  }

  addNote(note: Note): Observable<Note> {
    const token = this.authSvc.getBearerToken();
    const httpOptions = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    return this.httpClient.post<Note>('http://localhost:3000/api/v1/notes', note, httpOptions);
  }

}
