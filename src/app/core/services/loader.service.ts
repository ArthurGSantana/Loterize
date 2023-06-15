import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoaderService {
  private overlaySubject = new BehaviorSubject<boolean>(false);
  constructor() {}

  showLoader(): void {
    this.overlaySubject.next(true);
  }

  closeLoader(): void {
    this.overlaySubject.next(false);
  }

  getLoaderStatus(): Observable<boolean> {
    return this.overlaySubject.asObservable();
  }
}
