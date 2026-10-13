/**
 * Value object representing a URL.
 */
export class Url {
  readonly #url: string;

  /**
   * Creates a new Url instance.
   *
   * @param value - The URL string, or an empty string when there is none yet.
   * @throws Error if a non-empty value is not a well-formed URL.
   */
  constructor(value: string) {
    if (value && !Url.isValid(value)) {
      throw new Error(`Invalid URL: ${value}`);
    }
    this.#url = value || '';
  }

  /**
   * Checks if a string is a valid URL.
   *
   * @param value - The string to check.
   * @returns True if the string is a valid URL, false otherwise.
   */
  static isValid(value: string): boolean {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Returns the URL string.
   */
  toString(): string {
    return this.#url;
  }
}
