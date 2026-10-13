import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface InspectionCentersResponse extends BaseResponse {
  "inspection-centers": InspectionCenterResource[];
}

export interface InspectionCenterResource extends BaseResource {
  "id": number;
  "name": string;
  "make": string;
  riskThreshold: number

}
