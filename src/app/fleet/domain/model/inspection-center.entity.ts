import { BaseEntity } from '../../../shared/domain/model/base-entity';
import {MakeEnum} from './make-enum';

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



