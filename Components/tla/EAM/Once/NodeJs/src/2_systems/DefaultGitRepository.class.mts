import DefaultFolder from "./File/DefaultFolder.class.mjs";
import GitRepository from "@eamd.ucp/tla.eam.once.services/src/3_services/Git/GitRepository.interface.mjs"

import { simpleGit, SimpleGit, SimpleGitOptions } from 'simple-git';
import path from "path";

export default class DefaultGitRepository extends DefaultFolder implements GitRepository{
    constructor(name?:string, path?:string) {
        super(path);
    }
   async removeSubmodule(path: string) {
      await this.gitRepository.rm(path)
    }
    async addSubmodule(repoPath: string, folderPath: string, name: string, branch: string): Promise<GitRepository> {
        var response = await this.gitRepository.subModule(["add","-b",branch,"--name",name,repoPath,folderPath] )
        console.log({response});
        
return new DefaultGitRepository(name,folderPath)
    }
    
    async getSubmodules(): Promise<GitRepository[]> {
     var submoduleInfos = (await this.gitRepository.subModule(["foreach", "--quiet", 'echo $name:::$path'])).split("\n").filter(x=>x)
     return submoduleInfos.map(submoduleInfo=>{
        let [name,path] = submoduleInfo.split(":::")
        return new DefaultGitRepository(name,path)
     })
    }

    private get gitRepository(): SimpleGit {
        return simpleGit(this.fullPath,{binary:"git",  maxConcurrentProcesses: 6,
        trimmed: false,})
    }



}