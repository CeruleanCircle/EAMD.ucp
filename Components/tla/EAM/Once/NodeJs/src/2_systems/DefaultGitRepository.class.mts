import DefaultFolder from "./File/DefaultFolder.class.mjs"
import GitRepository from "@eamd.ucp/tla.eam.once.services/src/3_services/Git/GitRepository.interface.mjs"

import { simpleGit, SimpleGit } from "simple-git"

export default class DefaultGitRepository extends DefaultFolder implements GitRepository{
	private repoName: string
	constructor(name?:string, path?:string) {
		super(path)
		this.repoName = name ?? super.name
	}
	get name():string{
		return this.repoName
	}

	private get gitRepository(): SimpleGit {
		return simpleGit(this.fullPath,{binary:"git",  maxConcurrentProcesses: 6,
			trimmed: false,})
	}
	set name(value:string){
		this.repoName = value
	}
	async removeSubmodule(path: string) {
		await this.gitRepository.rm(path)
	}

	async addSubmodule(repoPath: string, folderPath: string, name: string, branch: string): Promise<GitRepository> {
		const response = await this.gitRepository.subModule(["add","-b",branch,"--name",name,repoPath,folderPath] )
		console.log({response})
        
		return new DefaultGitRepository(name,folderPath)
	}
    
	async getSubmodules(): Promise<GitRepository[]> {
		const submoduleInfos = (await this.gitRepository.subModule(["foreach", "--quiet", "echo $name:::$path"])).split("\n").filter(x=>x)
		return submoduleInfos.map(submoduleInfo=>{
			const [name,path] = submoduleInfo.split(":::")
			return new DefaultGitRepository(name,path)
		})
	}

}