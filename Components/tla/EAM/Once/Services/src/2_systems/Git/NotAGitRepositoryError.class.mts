import { GIT_REPOSITORY_CONSTANTS } from "../../3_services/Git/Repository.constants.mjs"

export class NotAGitRepositoryError extends Error {
	message = GIT_REPOSITORY_CONSTANTS.notARepo
}
