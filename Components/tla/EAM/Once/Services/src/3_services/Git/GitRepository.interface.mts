import Folder from "../File/Folder.interface.mjs"

export default interface GitRepository extends Folder {
  start(repoPath?:string):Promise<GitRepository>
}
