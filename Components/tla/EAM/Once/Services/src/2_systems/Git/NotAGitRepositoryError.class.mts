import { GitRepositoryConstants } from './RepositoryConstants.enum.mjs'

export class NotAGitRepositoryError extends Error {
	message = GitRepositoryConstants.notARepo
}
