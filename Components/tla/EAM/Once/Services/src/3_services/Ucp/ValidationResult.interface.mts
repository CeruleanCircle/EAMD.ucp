export type ValidationResult<TModel> = {
  [K in keyof TModel]?: { message: string }
  //  isValid:boolean
}
