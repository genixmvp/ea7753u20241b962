import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import {VehicleModel} from '../domain/model/vehicle-model.entity';
import {VehicleModelResource, VehicleModelsResponse} from './vehicle-models-response';

/**
 * @remarks
 * The VehicleModelAssembler class is responsible for converting between VehicleModel entities and their corresponding resource representations (VehicleModelResource) as well as handling the conversion of API responses (VehicleModelsResponse) into a list of VehicleModel entities.
 * @author Carolina Navarro Aldoradin
 */
export class VehicleModelAssembler
  implements BaseAssembler<VehicleModel, VehicleModelResource, VehicleModelsResponse>
{
  toEntitiesFromResponse(response: VehicleModelsResponse): VehicleModel[] {
    return response.Results .map((resource) =>
      this.toEntityFromResource(resource as VehicleModelResource),
    );
  }

  toEntityFromResource(resource: VehicleModelResource): VehicleModel {
    return new VehicleModel({
      id: resource.id,
      makeId: resource.Make_ID,
      makeName: resource.Make_Name,
      modelId: resource.Model_ID,
      modelName: resource.Model_Name
    });
  }

  toResourceFromEntity(entity: VehicleModel): VehicleModelResource {
    return {
      Make_ID: entity.makeId,
      Make_Name: entity.makeName,
      Model_ID: entity.modelId,
      Model_Name: entity.modelName
    } as VehicleModelResource;
  }
}
