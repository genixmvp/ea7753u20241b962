import {DateTime} from '../../../shared/domain/model/date-time';
import {BaseEntity} from '../../../shared/domain/model/base-entity';

export class SafetyAssessment implements BaseEntity {
  readonly #id: number;
  readonly #inspectionCenterId: number;
  readonly #modelId: number;
  readonly #modelName: string;
  readonly #riskScore: number;
  readonly #assessedAt: DateTime;

  constructor(safetyAssessment:{
    id: number;
    inspectionCenterId: number;
    modelId: number;
    modelName: string;
    riskScore: number;
    assessedAt: DateTime;

  }){
    this.#id = safetyAssessment.id;
    this.#inspectionCenterId = safetyAssessment.inspectionCenterId;
    this.#modelId = safetyAssessment.modelId;
    this.#modelName = safetyAssessment.modelName;
    this.#riskScore = safetyAssessment.riskScore;
    this.#assessedAt = safetyAssessment.assessedAt;
  }


  get id(): number{
    return this.#id;
  }

  get inspectionCenterId(): number{
    return this.#inspectionCenterId;
  }

  get modelId(): number{
    return this.#modelId;
  }

  get modelName(): string{
    return this.#modelName;
  }

  get riskScore(): number{
    return this.#riskScore;
  }

  get assessedAt(): DateTime{
    return this.#assessedAt;
  }

  get assessedAtAsString(): string{
    return this.#assessedAt.toString();
  }
}
