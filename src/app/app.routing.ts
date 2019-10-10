import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { ScoreComponent } from './score/score.component';

const appRoutes: Routes = [
    { 
        path: '', 
        component: BoardComponent
    },
    {
        path: 'score',
        component: ScoreComponent
    }
];
export const Routings: ModuleWithProviders = RouterModule.forRoot(appRoutes);