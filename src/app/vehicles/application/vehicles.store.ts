import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { VehicleModel } from '../domain/model/vehicle-model.entity';
import { VehiclesApi } from '../infrastructure/vehicles-api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { retry } from 'rxjs';

/**
 * @author Carolina Navarro Aldoradin
 */
@Injectable({
  providedIn: 'root',
})
export class VehiclesStore {
  readonly #vehiclesApi = inject(VehiclesApi);
  readonly #vehicleModelsSignal = signal<VehicleModel[]>([]);
  readonly vehicleModels = this.#vehicleModelsSignal.asReadonly();
  readonly vehicleModelCount = computed(() => this.vehicleModels().length);
  readonly #loadingSignal = signal<boolean>(false);
  readonly loading = this.#loadingSignal.asReadonly();
  readonly #errorSignal = signal<string | null>(null);
  readonly error = this.#errorSignal.asReadonly();

  constructor() {
    this.#loadVehicleModels();
  }


  getVehicleModelById(id: number): Signal<VehicleModel | undefined> {
    return computed(() => (id ? this.vehicleModels().find((c) => c.id === id) : undefined));
  }

  addVehicleModel(vehicleModel: VehicleModel): void {
    this.#loadingSignal.set(true);
    this.#errorSignal.set(null);
    this.#vehiclesApi
      .createVehicleModel(vehicleModel)
      .pipe(retry(2))
      .subscribe({
        next: (createdVehicleModel) => {
          this.#vehicleModelsSignal.update((vehicleModels) => [...vehicleModels, createdVehicleModel]);
          this.#loadingSignal.set(false);
        },
        error: (err) => {
          this.#errorSignal.set(this.#formatError(err, 'Failed to create vehicleModel'));
          this.#loadingSignal.set(false);
        },
      });
  }

  updateVehicleModel(updatedVehicleModel: VehicleModel): void {
    this.#loadingSignal.set(true);
    this.#errorSignal.set(null);
    this.#vehiclesApi
      .updateVehicleModel(updatedVehicleModel)
      .pipe(retry(2))
      .subscribe({
        next: (vehicleModel) => {
          this.#vehicleModelsSignal.update((vehicleModels) =>
            vehicleModels.map((c) => (c.id === vehicleModel.id ? vehicleModel : c)),
          );
          this.#loadingSignal.set(false);
        },
        error: (err) => {
          this.#errorSignal.set(this.#formatError(err, 'Failed to update vehicleModel'));
          this.#loadingSignal.set(false);
        },
      });
  }

  deleteVehicleModel(id: number): void {
    this.#loadingSignal.set(true);
    this.#errorSignal.set(null);
    this.#vehiclesApi
      .deleteVehicleModel(id)
      .pipe(retry(2))
      .subscribe({
        next: () => {
          this.#vehicleModelsSignal.update((vehicleModels) => vehicleModels.filter((c) => c.id !== id));
          this.#loadingSignal.set(false);
        },
        error: (err) => {
          this.#errorSignal.set(this.#formatError(err, 'Failed to delete vehicleModel'));
          this.#loadingSignal.set(false);
        },
      });
  }


  #loadVehicleModels(): void {
    this.#loadingSignal.set(true);
    this.#errorSignal.set(null);
    this.#vehiclesApi
      .getVehicleModels()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (vehicleModels) => {
          this.#vehicleModelsSignal.set(vehicleModels);
          this.#loadingSignal.set(false);
          this.#errorSignal.set(null);
        },
        error: (err) => {
          this.#errorSignal.set(this.#formatError(err, 'Failed to load vehicleModels'));
          this.#loadingSignal.set(false);
        },
      });
  }




  #formatError(error: unknown, fallback: string): string {
    if (error instanceof Error) {
      return error.message.includes('Resource not found')
        ? `${fallback}: Not found`
        : error.message;
    }
    return fallback;
  }
}
