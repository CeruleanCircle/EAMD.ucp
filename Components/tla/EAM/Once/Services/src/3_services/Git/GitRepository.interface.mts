import Folder from "../File/Folder.interface.mjs"

export default interface GitRepository extends Folder {
  getSubmodules(): Promise<GitRepository[]>
  addSubmodule(repoPath: string, folderPath: string, name: string, branch: string): Promise<GitRepository>
  removeSubmodule(path: string): Promise<void>
}
