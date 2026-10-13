import { Injectable } from '@angular/core';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { InspectionCenter } from '../domain/model/inspection-center.entity';
import { InspectionCentersApiEndpoint } from './inspection-centers-api-endpoint';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LearningApi extends BaseApi {
  readonly #inspectionCentersEndpoint = new InspectionCentersApiEndpoint(this.http);

  getInspectionCenters(): Observable<InspectionCenter[]> {
    return this.#inspectionCentersEndpoint.getAll();
  }

  getInspectionCenter(id: number): Observable<InspectionCenter> {
    return this.#inspectionCentersEndpoint.getById(id);
  }

  createInspectionCenter(inspectionCenter: InspectionCenter): Observable<InspectionCenter> {
    return this.#inspectionCentersEndpoint.create(inspectionCenter);
  }

  updateInspectionCenter(inspectionCenter: InspectionCenter): Observable<InspectionCenter> {
    return this.#inspectionCentersEndpoint.update(inspectionCenter, inspectionCenter.id);
  }

  deleteInspectionCenter(id: number): Observable<void> {
    return this.#inspectionCentersEndpoint.delete(id);
  }

}
