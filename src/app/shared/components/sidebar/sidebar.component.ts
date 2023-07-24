import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { ISidebarOptions } from "src/app/core/models/SidebarOptions.interface";

@Component({
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  selector: "loto-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  animations: [
    trigger("openClose", [
      state(
        "open",
        style({
          //Aberto caso necessario futuramente...
        })
      ),
      state(
        "closed",
        style({
          left: "-180px"
        })
      ),
      transition("open => closed", [animate("0.5s")]),
      transition("closed => open", [animate("0.5s")])
    ])
  ]
})
export class SidebarComponent {
  @Input({ required: true }) sidebarOptions!: ISidebarOptions[];
  @Input() controlSidebar: "open" | "closed" = "open";

  @Output() onChange = new EventEmitter<number>();
  @Output() onBack = new EventEmitter();
}
