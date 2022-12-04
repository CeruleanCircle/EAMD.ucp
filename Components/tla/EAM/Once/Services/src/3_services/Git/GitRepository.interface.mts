import Folder from "../File/Folder.interface.mjs"

export default interface GitRepository extends Folder {
  getSubmodules():Promise<GitRepository[]>
}
