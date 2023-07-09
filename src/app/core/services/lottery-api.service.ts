import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ILotteryContest } from "../models/LotteryContest.interface";

@Injectable({
  providedIn: "root"
})
export class LotteryApiService {
  private _apiUrls: { [key: string]: string } = {
    megasena: "https://loteriascaixa-api.herokuapp.com/api/mega-sena",
    quina: "https://loteriascaixa-api.herokuapp.com/api/quina",
    lotofacil: "https://loteriascaixa-api.herokuapp.com/api/lotofacil"
  };

  constructor(private _http: HttpClient) {}

  getAllContests(contest: string): Observable<string[]> {
    return this._http.get<string[]>(this._apiUrls[contest]);
  }

  getLatestContest(contest: string): Observable<ILotteryContest> {
    return this._http.get<ILotteryContest>(
      `${this._apiUrls[contest.replace(/[^a-zA-Z]/g, "")]}/latest`
    );
  }

  getContestByNumber(
    contest: string,
    contestNumber: number
  ): Observable<ILotteryContest> {
    return this._http.get<ILotteryContest>(
      `${this._apiUrls[contest]}/${contestNumber}`
    );
  }
}
