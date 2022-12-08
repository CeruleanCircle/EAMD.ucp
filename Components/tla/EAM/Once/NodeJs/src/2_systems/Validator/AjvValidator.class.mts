import { ModelValidator } from "@eamd.ucp/tla.eam.once.services/dist/3_services/Ucp/ModelValidator.interface.mjs"
import { ValidationResult } from "@eamd.ucp/tla.eam.once.services/dist/3_services/Ucp/ValidationResult.interface.mjs"
import Ajv, { JSONSchemaType } from "ajv"

export class AjvValidtor<TModel> implements ModelValidator<TModel, string> {
  #ajv = new Ajv({allErrors: true})

  validate(model: TModel, schema: string): ValidationResult<TModel> {
    var isValid = this.#ajv.validate(schema, model)
    return isValid ? {validated:model} :{validated:undefined,errors:this.#ajv.errors as Record<keyof TModel, string>[]}
  }
}
