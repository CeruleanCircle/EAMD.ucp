import { UcpComponent } from "./UcpComponent.interface.mjs"
import { UcpUnit } from "./UcpUnit.interface.mjs"
import { SemanticVersion } from "./SemanticVersion.interface.mjs"

export interface UcpComponentDescriptor extends UcpComponent {
    version: SemanticVersion
    packageName: string
    type: "UcpPackage" | "UcpComponent"
    units: UcpUnit[]
}