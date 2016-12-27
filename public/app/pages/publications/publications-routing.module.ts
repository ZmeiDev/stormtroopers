import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationsComponent } from './publications.component';
import { PublicationListPageComponent } from './publication-list/publication-list-page.component';
import { PublicationCreateComponent } from './publication-create/publication-create.component';
import { PublicationDetailComponent } from './publication-detail/publication-detail.component';

const routes: Routes = [
    {
        path: '',
        component: PublicationsComponent,
        children: [
            {
                path: '',
                component: PublicationListPageComponent
            },
            {
                path: 'create',
                component: PublicationCreateComponent
            },
            {
                path: ':id',
                component: PublicationDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PublicationsRoutingModule { }

export const routedComponents = [
    PublicationsComponent,
    PublicationListPageComponent,
    PublicationCreateComponent,
    PublicationDetailComponent
];