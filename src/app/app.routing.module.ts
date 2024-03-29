import { NgModule } from '@angular/core'
import {Router, RouterModule, Routes} from '@angular/router'
import {MainComponent} from "./components/main/main.component";
import {ProfessoraComponent} from "./components/professora/professora.component";
import {DepoimentosComponent} from "./components/depoimentos/depoimentos.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "professora",
    component: ProfessoraComponent,
  },
  {
    path: "depoimentos",
    component: DepoimentosComponent,
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })]
})

export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      console.log(error)
    }
  }
}
