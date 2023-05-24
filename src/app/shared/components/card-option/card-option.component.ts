import { Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "loto-card-option",
  templateUrl: "./card-option.component.html",
  styleUrls: ["./card-option.component.scss"]
})
export class CardOptionComponent {
  @Input({ required: true }) textTitle!: string;
  @Input({ required: true }) textDescription!: string;
  @Input({ required: true }) textButton!: string;
}
