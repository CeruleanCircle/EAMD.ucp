import { UcpComponent } from "../Ucp/UcpComponent.interface.mjs"
import { OnceModel } from "./OnceMode.type.mjs"

export interface Once<T extends OnceModel, TSchema = undefined> extends UcpComponent<T, TSchema> {
  start(): Promise<this>
}
