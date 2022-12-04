// TODO have to be moved to NodeJs because depends on NodeJs
import { join } from 'path'

export const GIT_SUBMODULE_CONSTANTS = {
	postCheckoutPath: join('hooks', 'post-checkout')
}