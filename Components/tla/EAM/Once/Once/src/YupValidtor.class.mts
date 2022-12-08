import { ModelValidator } from "@eamd.ucp/tla.eam.once.services/dist/3_services/Ucp/ModelValidator.interface.mjs"
import { ValidationResult } from "@eamd.ucp/tla.eam.once.services/dist/3_services/Ucp/ValidationResult.interface.mjs"
import { SchemaOf, ValidationError } from "yup"

export class YupValidtor<TModel> implements ModelValidator<TModel, SchemaOf<TModel>> {
  validate(model: TModel, schema: SchemaOf<TModel>): ValidationResult<TModel> {

    try {
      schema.validateSync(model,{abortEarly:false})
      return {isValid:true}
    } catch (error) {
    if(!(error instanceof ValidationError)) throw error
let foo =error.inner.map((e) => {
  if(e.path) return {[e.path]:e.message}
}) as Record<keyof TModel, string>[]


    return {isValid:false,errors:foo}
    }


    // const foo = schema.isValidSync(model, { abortEarly: false })
    // try {
    //   schema.validateSync(model, { abortEarly: false })
    // } catch (e) {
    //   if (e instanceof ValidationError) {
    //     // dir(e.inner)
    //     // e.errors.forEach((e) => {
    //     //   console.log(e)
    //     // })
    //     const result: ValidationResult<TModel> = {}
    //     e.inner.map((e) => {
    //       console.log(e.message, e.path)
    //       //@ts-expect-error eslint is wrong
    //       if (e.path) result[e.path] = e.message
    //     })
    //     return result
    //   }
    // }

    // console.log(foo)

    // schema.validate(model, { abortEarly: false }).then(function() {
    //     // Success
    // }).catch(function (err) {
    //     err.inner.forEach(e => {
    //         console.log(e.message, e.path));
    //     });
    // });
  }
}
