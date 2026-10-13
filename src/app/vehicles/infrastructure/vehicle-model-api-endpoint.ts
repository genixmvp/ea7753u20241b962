import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {VehicleModel} from '../domain/model/vehicle-model.entity';
import {VehicleModelAssembler} from './vehicle-model-assembler';
import {VehicleModelResource, VehicleModelsResponse} from './vehicle-models-response';

/**
 * @remarks
 * This class is responsible for handling the API endpoint for vehicle models. It extends the BaseApiEndpoint class and provides methods for performing CRUD operations on vehicle models.
 * @author Carolina Navarro Aldoradin
 */
export class VehicleModelsApiEndpoint extends BaseApiEndpoint<
  VehicleModel,
  VehicleModelResource,
  VehicleModelsResponse,
  VehicleModelAssembler
> {
  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformProviderVehicleModelsBaseUrl}${environment.platformProviderVehicleModelsEndpointPath}`,
      new VehicleModelAssembler(),
    );
  }
}
