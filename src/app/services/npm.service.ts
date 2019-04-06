import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';

interface IResponse {
  results: IResult[];
}

interface IResult {
  package: IPackage;
}

interface IPackage {
  author: {
    name: string;
    email?: string;
    username?: string;
  };
  date: string;
  description: string;
  keywords: string[];
  links: {
    npm: string;
    homepage: string;
  };
  name: string;
  publisher: {
    username: string;
    email: string;
  };
  scope: string;
  version: string;
}

@Injectable()
export class NpmService {

  constructor(private http: HttpClient) { }

  search(query: string): Observable<IResult[]> {
    const url = `/v2/search?q=${encodeURIComponent(query)}`;

    return this.http.get<IResponse>(url)
      .pipe(map(response => response.results));
  }
}
