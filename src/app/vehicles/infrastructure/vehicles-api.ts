import { Injectable } from '@angular/core';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { VehicleModel } from '../domain/model/vehicle-model.entity';
import { VehicleModelsApiEndpoint } from './vehicle-model-api-endpoint';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VehiclesApi extends BaseApi {
  readonly #vehicleModelsEndpoint = new VehicleModelsApiEndpoint(this.http);

  getVehicleModels(): Observable<VehicleModel[]> {
    return this.#vehicleModelsEndpoint.getAll();
  }

  getVehicleModel(id: number): Observable<VehicleModel> {
    return this.#vehicleModelsEndpoint.getById(id);
  }

  createVehicleModel(vehicleModel: VehicleModel): Observable<VehicleModel> {
    return this.#vehicleModelsEndpoint.create(vehicleModel);
  }

  updateVehicleModel(vehicleModel: VehicleModel): Observable<VehicleModel> {
    return this.#vehicleModelsEndpoint.update(vehicleModel, vehicleModel.id);
  }

  deleteVehicleModel(id: number): Observable<void> {
    return this.#vehicleModelsEndpoint.delete(id);
  }



}
