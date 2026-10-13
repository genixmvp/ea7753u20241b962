import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {InspectionCenter} from '../domain/model/inspection-center.entity';
import {InspectionCenterAssembler} from './inspection-center-assembler';
import {InspectionCenterResource, InspectionCentersResponse} from './inspection-centers-response';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

export class InspectionCenterApiEndpoint extends BaseApiEndpoint<InspectionCenter, InspectionCenterResource, InspectionCentersResponse, InspectionCenterAssembler>{

  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformProviderApiBaseUrl}${environment.platformProviderInspectionCentersEndpointPath}`,
      new InspectionCenterAssembler(),
    );
  }
}
