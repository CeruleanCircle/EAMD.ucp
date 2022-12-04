import {Command} from "@oclif/core"
import DefaultGitRepository from "@eamd.ucp/tla.eam.once.nodejs/dist/2_systems/DefaultGitRepository.class.mjs"

export default class Test extends Command {
	static description = "Say hello test"

	static examples = [
		`<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
	]

	static flags = {}

	static args = []

	async run(): Promise<void> {
		// this.config.root = '/Users/Shared/EAMD.ucp/'
		await this.config.runHook("github", {id: "my_command"})
		this.log("hello test! (./src/commands/hello/test.ts)")

		var gitRepository = new DefaultGitRepository("/Users/Shared/EAMD.ucp");
		console.dir(await gitRepository.getSubmodules())

await		gitRepository.removeSubmodule("foo")
// 		var repo = await gitRepository.addSubmodule("https://github.com/phibar/eslint-config-oclif-typescript","foo","mycoolname","main")
// console.dir(repo)

	}
}

export {}