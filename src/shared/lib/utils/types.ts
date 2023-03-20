export type Optional<T extends object, K extends keyof T = keyof T> = Omit<
  T,
  K
> &
  Partial<Pick<T, K>>;

export type RequiredFields<T extends object, K extends keyof T> = Partial<T> &
  Required<Pick<T, K>>;
