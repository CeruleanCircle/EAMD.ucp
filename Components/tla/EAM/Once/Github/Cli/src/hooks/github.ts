import { Hook } from '@oclif/core'
import { GithubHooks } from './GithubHooks';

const hook: Hook<'github',GithubHooks> = async function (options) {

	console.log(`example github hook running before ${options}`)
}

export default hook