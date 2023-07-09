import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot
} from "@angular/router";
import { Observable, take } from "rxjs";

import { LotteryApiService } from "../services/lottery-api.service";
import { ILotteryContest } from "../models/LotteryContest.interface";

export const ContestResolver: ResolveFn<ILotteryContest> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  lotteryService: LotteryApiService = inject(LotteryApiService)
): Observable<ILotteryContest> => {
  let contest: string = route.params["contestType"] ?? "";
  return lotteryService.getLatestContest(contest).pipe(take(1));
};
