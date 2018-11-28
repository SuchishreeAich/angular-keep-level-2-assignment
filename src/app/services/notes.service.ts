import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from '../note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class NotesService {

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) {

  }

  getNotes(): Observable<Array<Note>> {
    const bearerToken = this.authenticationService.getBearerToken();
    const httpHeaders = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${bearerToken}`)
    };
    return this.httpClient.get<Array<Note>>('http://localhost:3000/api/v1/notes', httpHeaders);
  }

  addNote(note: Note): Observable<Note> {
    const bearerToken = this.authenticationService.getBearerToken();
    const httpHeaders = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${bearerToken}`)
    };
    return this.httpClient.post<Note>('http://localhost:3000/api/v1/notes', note, httpHeaders);
  }

}
