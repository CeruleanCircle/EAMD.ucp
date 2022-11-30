import {Command} from '@oclif/core'

export default class Foo extends Command {
  static description = 'Say hello foo'

  static examples = [
    `<%= config.bin %> <%= command.id %>
hello foo! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {}

  static args = []

  async run(): Promise<void> {
    this.log('hello foo! (./src/commands/hello/once.ts)')
  }
}
