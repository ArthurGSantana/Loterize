import { EventEmitter, Input } from "@angular/core";
import { Component, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SvgIconComponent } from "../svg-icon/svg-icon.component";

@Component({
  standalone: true,
  imports: [SvgIconComponent, CommonModule],
  selector: "loto-sub-header",
  templateUrl: "./sub-header.component.html",
  styleUrls: ["./sub-header.component.scss"]
})
export class SubHeaderComponent {
  @Input() title!: string;
  @Output() onChange = new EventEmitter();
}
