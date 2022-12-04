import { Hook } from "@oclif/core"

import { GithubHooks } from "../GithubHooks"

const hook: Hook<"github", GithubHooks> = async function (opts) {
  await fetch("")
  process.stdout.write(`example hook running ${opts.id ?? ""}\n`)
}

export default hook
