import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';

const appRoutes: Routes = [
    { 
        path: '', 
        component: BoardComponent
    }
];
export const Routings: ModuleWithProviders = RouterModule.forRoot(appRoutes);