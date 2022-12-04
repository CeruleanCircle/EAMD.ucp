import { GitCloneParameter } from "./GitCloneParameter.interface.mjs"

export interface GitRepositoryParameter {
    baseDir: string;
    clone?: GitCloneParameter;
    init?: boolean;
}
