import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface VehicleModelsResponse extends BaseResponse{
  Count: number,
  Message: string,
  SearchCriteria: string,
  Results: VehicleModelResource[]
}

export interface VehicleModelResource extends BaseResource {
  Make_ID: number,
  Make_Name: string,
  Model_ID: number,
  Model_Name: string
}
