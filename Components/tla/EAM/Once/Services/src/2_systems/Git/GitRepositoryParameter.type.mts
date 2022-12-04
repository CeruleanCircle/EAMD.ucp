import { GitCloneParameter } from './GitCloneParameter.type.mjs'

export type GitRepositoryParameter = {
    baseDir: string;
    clone?: GitCloneParameter;
    init?: boolean;
};
