import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  OnChanges,
  Signal,
  SimpleChanges,
  WritableSignal,
  computed,
  signal
} from "@angular/core";

import { ICompleteContestStrategy } from "src/app/core/models/CompleteContestStrategy.interface";
import { StrategyService } from "src/app/core/services/strategy.service";
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { ContestBody } from "src/app/core/models/LotteryContest.interface";

@Component({
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  selector: "loto-contest-numbers",
  templateUrl: "./contest-numbers.component.html",
  styleUrls: ["./contest-numbers.component.scss"]
})
export class ContestNumbersComponent implements OnChanges {
  @Input({ required: true }) contestDataActive!: ContestBody;

  amountNumber!: number;

  numbers: string[] = [];

  selectedNumbers: WritableSignal<string[]> = signal([]);
  sortSelectedNumbers: Signal<string[]> = computed(() =>
    this.selectedNumbers().sort((a, b) => {
      return parseInt(a, 10) - parseInt(b, 10);
    })
  );

  constructor(private strategyService: StrategyService) {}

  ngOnChanges(change: SimpleChanges): void {
    this.amountNumber = this.contestDataActive.minNumber;
    this.selectedNumbers.set([]);
    this.numbers = Array.from(
      { length: this.contestDataActive.sizeTotal },
      (_, index) => {
        const number = index + 1;
        return number < 10 ? `0${number}` : `${number}`;
      }
    );
  }

  handleSelectedNumbers(item: string): void {
    let size: number = this.selectedNumbers().length;

    if (this.selectedNumbers().includes(item)) {
      this.selectedNumbers.update((value) => {
        let index = value.indexOf(item);

        value.splice(index, 1);
        return [...value];
      });
    } else {
      if (size < this.amountNumber) {
        this.selectedNumbers.update((value) => [...value, item]);
      }
    }
  }

  completeContest(): void {
    const strategy: ICompleteContestStrategy =
      this.strategyService.getCompleteContestStrategy();

    let newContest = strategy.completeContest(
      this.selectedNumbers(),
      this.amountNumber,
      this.contestDataActive.sizeTotal
    );
    this.selectedNumbers.update((value) => [...newContest]);
  }

  incrementMaxNumber(): void {
    if (this.amountNumber < this.contestDataActive.maxNumber) {
      this.amountNumber++;
    }
  }

  decrementMaxNumber(): void {
    if (this.amountNumber > this.contestDataActive.minNumber) {
      this.amountNumber--;
    }
  }
}
