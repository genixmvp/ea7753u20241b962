import {SafetyAssessment} from '../domain/model/safety-assessment.entity';
import {SafetyAssessmentResource, SafetyAssessmentsResponse} from './safety-assessments-response';
import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {DateTime} from '../../shared/domain/model/date-time';

export class SafetyAssessmentAssembler implements BaseAssembler<SafetyAssessment, SafetyAssessmentResource, SafetyAssessmentsResponse> {
  toEntitiesFromResponse(response: SafetyAssessmentsResponse): SafetyAssessment[] {
    return response.safetyAssessments.map((resource) =>
      this.toEntityFromResource(resource as SafetyAssessmentResource),
    );
  }

  toEntityFromResource(resource: SafetyAssessmentResource): SafetyAssessment {
    return new SafetyAssessment({
      id: resource.id,
      inspectionCenterId: resource.inspectionCenterId,
      modelId: resource.modelId,
      modelName: resource.modelName,
      riskScore: resource.riskScore,
      assessedAt: new DateTime(resource.assessedAt),
    });
  }

  toResourceFromEntity(entity: SafetyAssessment): SafetyAssessmentResource {
    return {
      id: entity.id,
      inspectionCenterId: entity.inspectionCenterId,
      modelId: entity.modelId,
      modelName: entity.modelName,
      riskScore: entity.riskScore,
      assessedAt: entity.assessedAtAsString
    } as SafetyAssessmentResource;
  }


}
