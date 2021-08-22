import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./components/shared/create/create.component";
import { SearchComponent } from "./components/shared/search/search.component";
import { UserComponent } from "./components/shared/user/user.component";
import { UsersComponent } from "./components/shared/users/users.component";

const APP_ROUTES: Routes = [
    {path: 'users', component: UsersComponent},
    {path: 'search', component: SearchComponent},
    {path: 'save', component: CreateComponent},
    {path: 'edit/:id', component: UserComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'search'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);