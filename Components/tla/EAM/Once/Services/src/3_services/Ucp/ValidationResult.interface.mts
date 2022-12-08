export type ValidationResult<TModel> = {
  isValid:boolean
 errors?:Record<keyof TModel, string>[]
}
