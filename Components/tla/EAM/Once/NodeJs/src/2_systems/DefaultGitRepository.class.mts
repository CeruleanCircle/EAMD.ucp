import DefaultFolder from "./File/DefaultFolder.class.mjs";
import GitRepository from "@eamd.ucp/tla.eam.once.services/src/3_services/Git/GitRepository.interface.mjs"
export class DefaultGitRepository extends DefaultFolder implements GitRepository{
    async start(repoPath?: string | undefined): Promise<GitRepository> {
        throw new Error("Method not implemented.");
    }
  
}