import { ICompleteContestStrategy } from "../models/CompleteContestStrategy.interface";

export class CompleteContest implements ICompleteContestStrategy {
  completeContest(items: string[], size: number, maxNumber: number): string[] {
    const existingItems = new Set(items.map(String));
    const newArray: string[] = [...existingItems];

    while (newArray.length < size) {
      let newNumber: string | number =
        Math.floor(Math.random() * maxNumber) + 1;
      newNumber = newNumber < 10 ? `0${newNumber}` : String(newNumber);

      if (!existingItems.has(newNumber)) {
        newArray.push(newNumber);
        existingItems.add(newNumber);
      }
    }

    return newArray;
  }
}
