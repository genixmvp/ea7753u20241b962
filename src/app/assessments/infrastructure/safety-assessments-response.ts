import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

/**
 * @author Carolina Navarro Aldoradin
 */
export interface SafetyAssessmentsResponse extends BaseResponse {
  "safety-assessments": SafetyAssessmentResource[];
}

export interface SafetyAssessmentResource extends BaseResource {
  id: number,
  inspectionCenterId: number;
  modelId: number
  modelName: string;
  riskScore: number;
  assessedAt: string;
}
