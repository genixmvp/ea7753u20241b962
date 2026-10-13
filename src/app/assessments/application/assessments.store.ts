import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { SafetyAssessment } from '../domain/model/safety-assessment.entity';
import {AssessmentsApi} from '../infrastructure/assessments-api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { retry } from 'rxjs';

/**
 * @author Carolina Navarro Aldoradin
 */

@Injectable({
  providedIn: 'root',
})
export class LearningStore {
  readonly #assessmentsApi = inject(AssessmentsApi);
  readonly #safetyAssessmentsSignal = signal<SafetyAssessment[]>([]);
  readonly safetyAssessments = this.#safetyAssessmentsSignal.asReadonly();
  readonly safetyAssessmentCount = computed(() => this.safetyAssessments().length);
  readonly #loadingSignal = signal<boolean>(false);
  readonly loading = this.#loadingSignal.asReadonly();
  readonly #errorSignal = signal<string | null>(null);
  readonly error = this.#errorSignal.asReadonly();

  constructor() {
    this.#loadSafetyAssessments();
  }


  getSafetyAssessmentById(id: number): Signal<SafetyAssessment | undefined> {
    return computed(() => (id ? this.safetyAssessments().find((c) => c.id === id) : undefined));
  }

  addSafetyAssessment(safetyAssessment: SafetyAssessment): void {
    this.#loadingSignal.set(true);
    this.#errorSignal.set(null);
    this.#assessmentsApi
      .createSafetyAssessment(safetyAssessment)
      .pipe(retry(2))
      .subscribe({
        next: (createdSafetyAssessment) => {
          this.#safetyAssessmentsSignal.update((safetyAssessments) => [...safetyAssessments, createdSafetyAssessment]);
          this.#loadingSignal.set(false);
        },
        error: (err) => {
          this.#errorSignal.set(this.#formatError(err, 'Failed to create safetyAssessment'));
          this.#loadingSignal.set(false);
        },
      });
  }

  updateSafetyAssessment(updatedSafetyAssessment: SafetyAssessment): void {
    this.#loadingSignal.set(true);
    this.#errorSignal.set(null);
    this.#assessmentsApi
      .updateSafetyAssessment(updatedSafetyAssessment)
      .pipe(retry(2))
      .subscribe({
        next: (safetyAssessment) => {
          this.#safetyAssessmentsSignal.update((safetyAssessments) =>
            safetyAssessments.map((c) => (c.id === safetyAssessment.id ? safetyAssessment : c)),
          );
          this.#loadingSignal.set(false);
        },
        error: (err) => {
          this.#errorSignal.set(this.#formatError(err, 'Failed to update safetyAssessment'));
          this.#loadingSignal.set(false);
        },
      });
  }

  deleteSafetyAssessment(id: number): void {
    this.#loadingSignal.set(true);
    this.#errorSignal.set(null);
    this.#assessmentsApi
      .deleteSafetyAssessment(id)
      .pipe(retry(2))
      .subscribe({
        next: () => {
          this.#safetyAssessmentsSignal.update((safetyAssessments) => safetyAssessments.filter((c) => c.id !== id));
          this.#loadingSignal.set(false);
        },
        error: (err) => {
          this.#errorSignal.set(this.#formatError(err, 'Failed to delete safetyAssessment'));
          this.#loadingSignal.set(false);
        },
      });
  }



  #loadSafetyAssessments(): void {
    this.#loadingSignal.set(true);
    this.#errorSignal.set(null);
    this.#assessmentsApi
      .getSafetyAssessments()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (safetyAssessments) => {
          this.#safetyAssessmentsSignal.set(safetyAssessments);
          this.#loadingSignal.set(false);
          this.#errorSignal.set(null);
        },
        error: (err) => {
          this.#errorSignal.set(this.#formatError(err, 'Failed to load safetyAssessments'));
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
