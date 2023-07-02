import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot
} from "@angular/router";
import { Observable, forkJoin, take } from "rxjs";

import { LotteryApiService } from "../services/lottery-api.service";
import { ILotteryContest } from "../models/LotteryContest.interface";
import { AllowedContests } from "../utils/data";

export const LotteryResolver: ResolveFn<ILotteryContest[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  lotteryService: LotteryApiService = inject(LotteryApiService)
): Observable<ILotteryContest[]> => {
  const lottery$ = AllowedContests.map((contest) => {
    return lotteryService.getLatestContest(contest);
  });
  return forkJoin(lottery$).pipe(take(1));
};
