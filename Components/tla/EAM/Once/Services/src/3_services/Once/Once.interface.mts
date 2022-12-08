import { UcpComponent } from "../Ucp/UcpComponent.interface.mjs"
import { OnceModel } from "./OnceMode.type.mjs"

export interface Once<TModel extends OnceModel, TSchema = undefined> extends UcpComponent<TModel, TSchema> {
  global: typeof globalThis
  start(): Promise<Once<TModel,TSchema>>
}
