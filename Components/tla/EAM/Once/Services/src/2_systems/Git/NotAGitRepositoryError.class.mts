import { GIT_REPOSITORY_CONSTANTS } from './RepositoryConstants.enum.mjs'

export class NotAGitRepositoryError extends Error {
    message = GIT_REPOSITORY_CONSTANTS.NOT_A_REPO
}
