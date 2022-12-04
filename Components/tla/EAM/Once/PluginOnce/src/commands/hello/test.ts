import {Command} from '@oclif/core'

export default class Test extends Command {
	static description = 'Say hello test'

	static examples = [
		`<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
	]

	static flags = {}

	static args = []

	async run(): Promise<void> {
		this.log('hello test! (./src/commands/hello/test.ts)')
	}
}
