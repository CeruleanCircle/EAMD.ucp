import GitRepository from "./Git/GitRepository.interface.mjs"
import { UcpComponent } from "./Ucp/UcpComponent.interface.mjs"

export interface EnterpriseArchitectureManagementRepository extends GitRepository, UcpComponent{

}