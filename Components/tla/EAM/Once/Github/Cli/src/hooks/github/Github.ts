import { GithubHooks } from "../GithubHooks"
import {Hook} from "@oclif/core"

const hook: Hook<"github", GithubHooks> = async function (opts) {
	await fetch("")
	process.stdout.write(`example hook running ${opts.id ?? ""}\n`)
}

export default hook
