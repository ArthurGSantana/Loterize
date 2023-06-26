import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoaderService {
  private loaderState = new BehaviorSubject<number>(0);

  showLoader(): void {
    this.loaderState.next(this.loaderState.value + 1);
  }

  hideLoader(): void {
    const currentValue = this.loaderState.value - 1;
    this.loaderState.next(currentValue >= 0 ? currentValue : 0);
  }

  getLoaderState(): Observable<boolean> {
    return this.loaderState.pipe(map((count) => count > 0));
  }
}
