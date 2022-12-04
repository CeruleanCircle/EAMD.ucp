import {Hook} from "@oclif/core"

const hook: Hook<"github"> = async function (opts) {
	process.stdout.write(`example hook running ${opts.id}\n`)
}

export default hook
