import { Mode } from "./Mode.type.mjs"
import { Runtime } from "./Runtime.enum.mjs"
import { State } from "./State.enum.mjs"

export interface OnceModel {
  creationDate: Date
  mode: Mode | Runtime
  state: State


}
