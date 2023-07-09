import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

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
}
