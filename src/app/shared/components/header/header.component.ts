import { Component } from "@angular/core";
import { SvgIconComponent } from "../svg-icon/svg-icon.component";

@Component({
  standalone: true,
  imports: [SvgIconComponent],
  selector: "loto-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {}
