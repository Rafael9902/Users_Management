import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./components/shared/users/users.component";

const APP_ROUTES: Routes = [
    {path: 'users', component: UsersComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'users'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);