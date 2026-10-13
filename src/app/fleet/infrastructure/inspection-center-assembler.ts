import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {InspectionCenter} from '../domain/model/inspection-center.entity';
import {InspectionCenterResource, InspectionCentersResponse} from './inspection-centers-response';
import {MakeEnum} from '../domain/model/make-enum';
/**
 * @author Carolina Navarro Aldoradin
 */
export class InspectionCenterAssembler implements BaseAssembler<InspectionCenter, InspectionCenterResource, InspectionCentersResponse> {

  toEntitiesFromResponse(response: InspectionCentersResponse): InspectionCenter[] {
    return response["inspection-centers"].map((resource) =>
      this.toEntityFromResource(resource as InspectionCenterResource),
    );
  }

  toEntityFromResource(resource: InspectionCenterResource): InspectionCenter {
    return new InspectionCenter({
      id: resource.id,
      name: resource.name,
      make: resource.make,
      riskThreshold: resource.riskThreshold
    });
  }

  toResourceFromEntity(entity: InspectionCenter): InspectionCenterResource {
    return {
      id: entity.id,
      name: entity.name,
      make: entity.makeAsString,
      riskThreshold: entity.riskThreshold,
    } as InspectionCenterResource;
  }
}
