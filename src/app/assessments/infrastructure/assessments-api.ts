import { Injectable } from '@angular/core';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { SafetyAssessment } from '../domain/model/safety-assessment.entity';
import { SafetyAssessmentsApiEndpoint } from './safety-assessments-api-endpoint';
import { Observable } from 'rxjs';

/**
 * @author Carolina Navarro Aldoradin
 */
@Injectable({ providedIn: 'root' })
export class AssessmentsApi extends BaseApi {
  readonly #safetyAssessmentsEndpoint = new SafetyAssessmentsApiEndpoint(this.http);

  getSafetyAssessments(): Observable<SafetyAssessment[]> {
    return this.#safetyAssessmentsEndpoint.getAll();
  }

  getSafetyAssessment(id: number): Observable<SafetyAssessment> {
    return this.#safetyAssessmentsEndpoint.getById(id);
  }

  createSafetyAssessment(safetyAssessment: SafetyAssessment): Observable<SafetyAssessment> {
    return this.#safetyAssessmentsEndpoint.create(safetyAssessment);
  }

  updateSafetyAssessment(safetyAssessment: SafetyAssessment): Observable<SafetyAssessment> {
    return this.#safetyAssessmentsEndpoint.update(safetyAssessment, safetyAssessment.id);
  }

  deleteSafetyAssessment(id: number): Observable<void> {
    return this.#safetyAssessmentsEndpoint.delete(id);
  }


}
