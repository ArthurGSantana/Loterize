import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

import { LoaderService } from "src/app/core/services/loader.service";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "loto-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
  showloader: boolean = false;

  constructor(private laoderService: LoaderService) {}

  ngOnInit(): void {
    this.laoderService.getLoaderState().subscribe({
      next: (response: boolean) => {
        this.showloader = response;
      }
    });
  }
}
