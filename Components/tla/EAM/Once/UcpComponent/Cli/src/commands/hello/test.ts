import { Command } from "@oclif/core"

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
    await this.config.runHook("write-config", { data: { githubToken: "ghjk" } })

    // const { successes } = await this.config.runHook("read-config", {})

    // var {successes} = await this.config.runHook("read-config",{})
    // console.dir(successes[0].result)
    // this.config.root = '/Users/Shared/EAMD.ucp/'
    // await this.config.runHook("github", { id: "my_command" })
    // this.log("hello test! (./src/commands/hello/test.ts)")

    console.dir(this.config)
    // const gitRepository = new DefaultGitRepository("/Users/Shared/EAMD.ucp")
    // console.dir(await gitRepository.getSubmodules())

    // var repo = await gitRepository.addSubmodule("https://github.com/phibar/eslint-config-oclif-typescript","foo/path2","mycoolname4","main")
    // console.dir(await gitRepository.getSubmodules())

    // gitRepository.fullPath ="/Users/Shared/EAMD.ucp/foo/path2"
    // console.dir(await gitRepository.getSubmodules())
    // console.dir(await gitRepository.filename)

    // await gitRepository.removeSubmodule("foo/path2")
    // console.dir(await gitRepository.getSubmodules())
  }
}

export {}
