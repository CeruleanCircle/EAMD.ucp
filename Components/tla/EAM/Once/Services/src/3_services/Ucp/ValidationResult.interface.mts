export type ValidationResult<TModel> = {
  validated:TModel | undefined
  errors?:Record<keyof TModel, string>[]
}
