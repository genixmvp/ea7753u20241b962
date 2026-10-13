/**
 * Value object representing a date and time.
 */
export class DateTime {
  readonly #date: Date;

  /**
   * Creates a new DateTime instance.
   *
   * @param value - ISO-8601 string or Date object; defaults to now.
   * @throws Error if value does not parse into a valid date.
   */
  constructor(value?: string | Date) {
    const date = value ? new Date(value) : new Date();
    if (isNaN(date.getTime())) {
      throw new Error(`Invalid date: ${value}`);
    }
    this.#date = date;
  }

  /**
   * Returns the ISO-8601 string representation of the date and time.
   */
  toString(): string {
    return this.#date.toISOString();
  }

  /**
   * Returns the locale-specific date string.
   */
  toLocaleDateString(): string {
    return this.#date.toLocaleDateString();
  }

  /**
   * Returns the locale-specific time string.
   */
  toLocaleTimeString(): string {
    return this.#date.toLocaleTimeString();
  }

  /**
   * Checks whether this date and time is in the future relative to now.
   */
  isFuture(): boolean {
    return this.#date.getTime() > Date.now();
  }
}
