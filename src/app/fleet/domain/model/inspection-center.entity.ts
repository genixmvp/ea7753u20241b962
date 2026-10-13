import { BaseEntity } from '../../../shared/domain/model/base-entity';
/**
 * @remarks InspectionCenter entity represents an inspection center that conducts safety assessments of vehicle models. It contains information about the inspection center, including its name, make, and risk threshold.
 * @author Carolina Navarro Aldoradin
 */
export class InspectionCenter implements BaseEntity {
  readonly #id: number;
  readonly #name: string;
  readonly #make: string;
  readonly #riskThreshold: number;


  constructor(props: {
    id: number;
    name: string;
    make: string;
    riskThreshold: number;

  }) {
    this.#id = props.id;
    this.#name = props.name;
    this.#make = props.make;
    this.#riskThreshold = props.riskThreshold;
  }

  get id(): number {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  get makeAsString(): string{
  return this.#make.toString();}


  get riskThreshold(): number {
    return this.#riskThreshold;
  }
}



