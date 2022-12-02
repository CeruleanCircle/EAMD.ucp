import {Command} from "@oclif/core"

export default class Once extends Command {
	static description = "Say hello once"

	static examples = [
		`<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
	]

	static flags = {}

	static args = []

	async run(): Promise<void> {
		this.log("hello once! (./src/commands/hello/once.ts)")
	}
}
