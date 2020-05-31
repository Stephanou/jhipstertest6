import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jhipstertest6SharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [Jhipstertest6SharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent],
})
export class DocsModule {}
