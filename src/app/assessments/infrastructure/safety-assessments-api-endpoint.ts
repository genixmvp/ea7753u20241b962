import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {SafetyAssessment} from '../domain/model/safety-assessment.entity';
import {SafetyAssessmentResource, SafetyAssessmentsResponse} from './safety-assessments-response';
import {SafetyAssessmentAssembler} from './safety-assessment-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

/**
 * @author Carolina Navarro Aldoradin
 */
export class SafetyAssessmentsApiEndpoint extends BaseApiEndpoint<SafetyAssessment, SafetyAssessmentResource, SafetyAssessmentsResponse, SafetyAssessmentAssembler>{
  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformProviderApiBaseUrl}${environment.platformProviderSafetyAssessmentsEndpointPath}`,
      new SafetyAssessmentAssembler(),
    );
  }
}
