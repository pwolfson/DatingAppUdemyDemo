import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MembersEditComponent } from '../members/members-edit/members-edit.component';
import { ConfirmService } from '../_services/confirm.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreventUnsavedChangesGuard
  implements CanDeactivate<MembersEditComponent>
{
  constructor(private confirmService: ConfirmService) {}

  canDeactivate(component: MembersEditComponent): Observable<boolean> {
    if (component.editForm?.dirty) {
      // return confirm(
      //   'Are you sure you want to continue? Any unsaved changes will be lost'
      // );

      return this.confirmService.confirm();
    }

    return of(true);
  }
}
