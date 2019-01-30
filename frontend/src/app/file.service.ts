import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class UploadService {

  constructor(private http: HttpClient) { }

  // file from event.target.files[0]
  uploadFile(url: string, file: File): Observable<any> {
    let filetype = file.type;
    let formData = new FormData();
    formData.append('uploadFile', file);
    formData.append('type',filetype);
    let params = new HttpParams();
    const options = {
      params: params,
      reportProgress: true,
    };
    const req = new HttpRequest('POST', url, formData, options);
    return this.http.request(req);
  }
