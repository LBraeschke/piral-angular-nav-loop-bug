import {Component, OnInit} from "@angular/core";
import {map, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-child-routing",
  templateUrl: "./child-routing.component.html",
  styleUrls: ["./child-routing.component.scss"],
})
export class ChildRoutingComponent implements OnInit {

  path$: Observable<String> | undefined;


  constructor(
      private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.path$ = this.route.url.pipe(map((url) => url.toString()
    ))
  }

}
