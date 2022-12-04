import DefaultFolder from "./File/DefaultFolder.class.mjs";
import GitRepository from "@eamd.ucp/tla.eam.once.services/src/3_services/Git/GitRepository.interface.mjs"

import { simpleGit, SimpleGit, SimpleGitOptions } from 'simple-git';

export default class DefaultGitRepository extends DefaultFolder implements GitRepository{
/**
 *
 */
constructor(path:string) {
    super(path);
    
}
    async getSubmodules(): Promise<GitRepository[]> {
     var response = await this.gitRepository.subModule(["foreach", "--quiet", 'echo $name'])
     console.dir(response)
     return []
    }
    private get gitRepository(): SimpleGit {
        return simpleGit(this.fullPath,{binary:"git",  maxConcurrentProcesses: 6,
        trimmed: false,})
    }



}