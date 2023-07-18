import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  Signal,
  WritableSignal,
  computed,
  signal
} from "@angular/core";
import { ICompleteContestStrategy } from "src/app/core/models/CompleteContestStrategy.interface";

import { StrategyService } from "src/app/core/services/strategy.service";
import { SvgIconComponent } from "../svg-icon/svg-icon.component";

@Component({
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  selector: "loto-contest-numbers",
  templateUrl: "./contest-numbers.component.html",
  styleUrls: ["./contest-numbers.component.scss"]
})
export class ContestNumbersComponent {
  @Input() sizeNumbers: number = 60;
  @Input() maxNumbersSelected: number = 6;

  numbers: string[] = Array.from({ length: this.sizeNumbers }, (_, index) => {
    const number = index + 1;
    return number < 10 ? `0${number}` : `${number}`;
  });

  selectedNumbers: WritableSignal<string[]> = signal([]);
  sortSelectedNumbers: Signal<string[]> = computed(() =>
    this.selectedNumbers().sort((a, b) => {
      return parseInt(a, 10) - parseInt(b, 10);
    })
  );

  constructor(private strategyService: StrategyService) {}

  handleSelectedNumbers(item: string): void {
    let size: number = this.selectedNumbers().length;

    if (this.selectedNumbers().includes(item)) {
      this.selectedNumbers.update((value) => {
        let index = value.indexOf(item);

        value.splice(index, 1);
        return [...value];
      });
    } else {
      if (size < this.maxNumbersSelected) {
        this.selectedNumbers.update((value) => [...value, item]);
      }
    }
  }

  completeContest(): void {
    const strategy: ICompleteContestStrategy =
      this.strategyService.getCompleteContestStrategy();

    let newContest = strategy.completeContest(
      this.selectedNumbers(),
      this.maxNumbersSelected,
      60
    );
    this.selectedNumbers.update((value) => [...newContest]);
  }

  incrementMaxNumber(): void {
    this.maxNumbersSelected++;
  }

  decrementMaxNumber(): void {
    if (this.maxNumbersSelected > 1) {
      this.maxNumbersSelected--;
    }
  }
}
