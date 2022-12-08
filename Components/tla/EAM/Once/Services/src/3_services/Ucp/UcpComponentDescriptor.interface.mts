import { SemanticVersion } from "./SemanticVersion.interface.mjs"
import { UcpComponent } from "./UcpComponent.interface.mjs"
import { UcpUnit } from "./UcpUnit.interface.mjs"

export interface UcpComponentDescriptor {
  version: SemanticVersion
  packageName: string
  type: "UcpPackage" | "UcpComponent"
  units: UcpUnit[]
}
