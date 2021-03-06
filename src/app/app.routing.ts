/* IMPORT NECESARIOS */
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/* IMPORTAR COMPONENTES */


import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ErrorComponent } from "./components/error/error.component";
import { HomeComponent } from "./components/home/home.component";
import { UserEditComponent } from "./components/user-edit/user-edit.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'ajustes', component: UserEditComponent},
    {path: '**', component: ErrorComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);