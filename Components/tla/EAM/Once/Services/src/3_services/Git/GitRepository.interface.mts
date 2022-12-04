import Folder from '../File/Folder.interface.mjs'
import GitSubmodule from './GitSubmodule.interface.mjs'

export default interface GitRepository extends Folder {
  remoteUrl: string;
  branch: string;
  checkout(branch: string): Promise<void>;
  setOrigin(origin: string): Promise<void>;
  updateSubmodules(): Promise<void>
  getSubmodules(submoduleInit: (path: string, srcComponentsDirectory: string) => Promise<GitSubmodule>): Promise<GitSubmodule[]>
}
