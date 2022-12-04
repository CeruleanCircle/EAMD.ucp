// TODO have to be moved to NodeJs because depends on NodeJs
import { join } from 'path'

export const GIT_SUBMODULE_CONSTANTS = {
    POST_CHECKOUT_PATH: join('hooks', 'post-checkout')
}