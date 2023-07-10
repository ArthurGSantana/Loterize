import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  Signal,
  WritableSignal,
  computed,
  signal
} from "@angular/core";

@Component({
  standalone: true,
  imports: [CommonModule],
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
}
