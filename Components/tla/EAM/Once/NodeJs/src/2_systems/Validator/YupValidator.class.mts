import { ModelValidator } from "@eamd.ucp/tla.eam.once.services/dist/3_services/Ucp/ModelValidator.interface.mjs"
import { ValidationResult } from "@eamd.ucp/tla.eam.once.services/dist/3_services/Ucp/ValidationResult.interface.mjs"
import { SchemaOf, ValidationError } from "yup"

export class YupValidtor<TModel> implements ModelValidator<TModel, SchemaOf<TModel>> {
  validate(model: TModel, schema: SchemaOf<TModel>): ValidationResult<TModel> {

    try {
      schema.validateSync(model,{abortEarly:false})
      return {validated:model}
    } catch (error) {
    if(!(error instanceof ValidationError)) throw error
    
    let errors =error.inner.map((e) => {
      if(e.path) return {[e.path]:e.message}
    }) as Record<keyof TModel, string>[]

    return {validated:undefined,errors}
    }
  }
}
