import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-base-routing",
  templateUrl: "./base-routing.component.html",
  styleUrls: ["./base-routing.component.scss"],
})
export class BaseRoutingComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onClick() {
    this.router.navigate(['test' + Math.ceil(Math.random() * 10)], {relativeTo: this.route})
  }

  ngOnInit(): void {

  }
}
