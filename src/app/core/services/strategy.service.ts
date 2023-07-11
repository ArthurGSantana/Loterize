import { Injectable } from "@angular/core";

import { ICompleteContestStrategy } from "../models/CompleteContestStrategy.interface";
import { CompleteContest } from "../strategies/completeContest.strategy";

@Injectable({
  providedIn: "root"
})
export class StrategyService {
  constructor() {}

  getCompleteContestStrategy(): ICompleteContestStrategy {
    return new CompleteContest();
  }
}
