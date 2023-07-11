import { ICompleteContestStrategy } from "../models/CompleteContestStrategy.interface";

export class CompleteContest implements ICompleteContestStrategy {
  completeContest(items: string[], size: number, maxNumber: number): string[] {
    const existingitems = new Set(items.map(String));
    const newArray = [...existingitems];

    while (newArray.length < size) {
      const newNumber = Math.round(Math.random() * maxNumber);
      if (!existingitems.has(String(newNumber))) {
        newArray.push(String(newNumber));
        existingitems.add(String(newNumber));
      }
    }

    return newArray;
  }
}
