import { UcpComponentDescriptor } from "./UcpComponentDescriptor.interface.mjs";
import { UcpUnit } from "./UcpUnit.interface.mjs";

export interface UcpComponent extends UcpUnit {
    descriptor: UcpComponentDescriptor    
}