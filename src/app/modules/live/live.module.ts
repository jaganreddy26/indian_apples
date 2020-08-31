import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LiveMatchComponent } from "./live-match/live-match.component";
import { Route, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";

const routes: Route[] = [{ path: "", component: LiveMatchComponent }];

@NgModule({
  declarations: [LiveMatchComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class LiveModule {}
