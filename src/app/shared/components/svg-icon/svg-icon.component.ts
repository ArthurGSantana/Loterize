import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "loto-svg-icon",
  templateUrl: "./svg-icon.component.html",
  styleUrls: ["./svg-icon.component.scss"],
  standalone: true
})
export class SvgIconComponent {
  colors: { [key: string]: string } = {
    green: "#344e41"
  };

  @Input({ required: true })
  set src(src: string) {
    this.svgIconUrl = `url('${src}')`;
  }

  @Input()
  set color(color: string) {
    this.svgIconColor = this.colors[color];
  }

  @Input()
  set width(width: string) {
    this.svgIconWidth = width ? width : "";
  }

  @Input()
  set height(height: string) {
    this.svgIconHeigth = height ? height : "";
  }

  @HostBinding("style.--svg-icon-url")
  private svgIconUrl?: string;

  @HostBinding("style.--color")
  private svgIconColor?: string;

  @HostBinding("style.--width")
  private svgIconWidth?: string;

  @HostBinding("style.--height")
  private svgIconHeigth?: string;
}
