import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot
} from "@angular/router";
import { Observable, forkJoin, take } from "rxjs";

import { LotteryApiService } from "../services/lottery-api.service";
import { ILotteryContest } from "../models/LotteryContest.interface";
import { AllowedGames } from "../utils/data";

export const LotteryResolver: ResolveFn<ILotteryContest[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  lotteryService: LotteryApiService = inject(LotteryApiService)
): Observable<ILotteryContest[]> => {
  const lottery$ = AllowedGames.map((game) => {
    return lotteryService.getLatestGame(game);
  });
  return forkJoin(lottery$).pipe(take(1));
};
