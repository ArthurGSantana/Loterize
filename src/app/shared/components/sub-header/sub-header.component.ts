import { EventEmitter } from "@angular/core";
import { Component, Output } from "@angular/core";

import { SvgIconComponent } from "../svg-icon/svg-icon.component";

@Component({
  standalone: true,
  imports: [SvgIconComponent],
  selector: "loto-sub-header",
  templateUrl: "./sub-header.component.html",
  styleUrls: ["./sub-header.component.scss"]
})
export class SubHeaderComponent {
  @Output() onChange = new EventEmitter();
}
