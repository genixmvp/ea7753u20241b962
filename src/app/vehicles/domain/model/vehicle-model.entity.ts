/**
 * @remarks VehicleModel entity represents a vehicle model with its associated make and model information. It contains information about the vehicle model, including its unique identifier, make identifier, make name, model identifier, and model name.
 * @author Carolina Navarro Aldoradin
 */

export class VehicleModel{
  readonly #id: number;
  readonly #makeId: number;
  readonly #makeName: string;
  readonly #modelId: number;
  readonly #modelName: string;


  constructor(props: {
    id: number;
    makeId: number;
    makeName: string;
    modelId: number;
    modelName: string;
  }) {
    this.#id = props.modelId;
    this.#makeId = props.makeId;
    this.#makeName = props.makeName;
    this.#modelId = props.modelId;
    this.#modelName = props.modelName;
  }

  get id(): number {
    return this.#id;
  }

  get makeId(): number {
    return this.#makeId;
  }

  get makeName(): string {
    return this.#makeName;
  }

  get modelId(): number {
    return this.#modelId;
  }

  get modelName(): string{
    return this.#modelName;
  }
}
