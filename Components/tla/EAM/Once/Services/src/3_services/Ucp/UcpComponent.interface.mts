import { ModelValidator } from "./ModelValidator.interface.mjs"

export interface UcpComponent<TModel, TValidationSchema> {
  model: TModel
  validationSchema: TValidationSchema
  modelValidator: ModelValidator<TModel, TValidationSchema>
}
