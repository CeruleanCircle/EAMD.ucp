import { ValidationResult } from "./ValidationResult.interface.mjs"

export interface ModelValidator<TModel, TValidationSchmema> {
  validate(model: TModel, schema: TValidationSchmema): ValidationResult<TModel>
}
