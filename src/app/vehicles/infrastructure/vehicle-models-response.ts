import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

/**
 * @remarks
 * The VehicleModelsResponse interface represents the structure of the response received from the vehicle models API endpoint. It extends the BaseResponse interface and includes properties such as Count, Message, SearchCriteria, and Results, which is an array of VehicleModelResource objects.
 * @author Carolina Navarro Aldoradin
 */
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
