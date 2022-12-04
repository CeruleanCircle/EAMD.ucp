import GitRepository from "./Git/GitRepository.interface.mjs"
import { UcpComponent } from "./Ucp/UcpComponent.interface.mjs"

interface EnterpriseArchitectureManagementRepository extends GitRepository, UcpComponent{

}

export type {EnterpriseArchitectureManagementRepository, EnterpriseArchitectureManagementRepository as EAMR} 