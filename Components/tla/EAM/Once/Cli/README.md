# tla.EAM.Once.Cli

## Contents
<!-- toc -->
* [tla.EAM.Once.Cli](#tlaeamoncecli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage
<!-- usage -->
```sh-session
$ npm install -g @eamd.ucp/tla.eam.once.cli
$ once COMMAND
running command...
$ once (--version)
@eamd.ucp/tla.eam.once.cli/0.0.1 darwin-arm64 node-v19.1.0
$ once --help [COMMAND]
USAGE
  $ once COMMAND
...
```
<!-- usagestop -->

# Commands
<!-- commands -->
* [`once autocomplete [SHELL]`](#once-autocomplete-shell)
* [`once commands`](#once-commands)
* [`once hello:test`](#once-hellotest)
* [`once hello:world`](#once-helloworld)
* [`once help [COMMAND]`](#once-help-command)
* [`once plugins`](#once-plugins)
* [`once plugins:install PLUGIN...`](#once-pluginsinstall-plugin)
* [`once plugins:inspect PLUGIN...`](#once-pluginsinspect-plugin)
* [`once plugins:install PLUGIN...`](#once-pluginsinstall-plugin-1)
* [`once plugins:link PLUGIN`](#once-pluginslink-plugin)
* [`once plugins:uninstall PLUGIN...`](#once-pluginsuninstall-plugin)
* [`once plugins:uninstall PLUGIN...`](#once-pluginsuninstall-plugin-1)
* [`once plugins:uninstall PLUGIN...`](#once-pluginsuninstall-plugin-2)
* [`once plugins:update`](#once-pluginsupdate)
* [`once which`](#once-which)

## `once autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ once autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ once autocomplete

  $ once autocomplete bash

  $ once autocomplete zsh

  $ once autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.3.6/src/commands/autocomplete/index.ts)_

## `once commands`

list all the commands

```
USAGE
  $ once commands [--json] [-h] [--hidden] [--tree] [--columns <value> | -x] [--sort <value>] [--filter
    <value>] [--output csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]

FLAGS
  -h, --help         Show CLI help.
  -x, --extended     show extra columns
  --columns=<value>  only show provided columns (comma-separated)
  --csv              output is csv format [alias: --output=csv]
  --filter=<value>   filter property by partial string matching, ex: name=foo
  --hidden           show hidden commands
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --output=<option>  output in a more machine friendly format
                     <options: csv|json|yaml>
  --sort=<value>     property to sort by (prepend '-' for descending)
  --tree             show tree of commands

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  list all the commands
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v2.2.1/src/commands/commands.ts)_

## `once hello:test`

Say hello test

```
USAGE
  $ once hello:test

DESCRIPTION
  Say hello test

EXAMPLES
  $ once hello:test
  hello world! (./src/commands/hello/world.ts)
```

## `once hello:world`

Say hello world

```
USAGE
  $ once hello:world

DESCRIPTION
  Say hello world

EXAMPLES
  $ once hello:world
  hello world! (./src/commands/hello/world.ts)
```

## `once help [COMMAND]`

Display help for once.

```
USAGE
  $ once help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for once.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `once plugins`

List installed plugins.

```
USAGE
  $ once plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ once plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `once plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ once plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ once plugins:add

EXAMPLES
  $ once plugins:install myplugin 

  $ once plugins:install https://github.com/someuser/someplugin

  $ once plugins:install someuser/someplugin
```

## `once plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ once plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ once plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/inspect.ts)_

## `once plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ once plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ once plugins:add

EXAMPLES
  $ once plugins:install myplugin 

  $ once plugins:install https://github.com/someuser/someplugin

  $ once plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/install.ts)_

## `once plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ once plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ once plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/link.ts)_

## `once plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ once plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ once plugins:unlink
  $ once plugins:remove
```

## `once plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ once plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ once plugins:unlink
  $ once plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/uninstall.ts)_

## `once plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ once plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ once plugins:unlink
  $ once plugins:remove
```

## `once plugins:update`

Update installed plugins.

```
USAGE
  $ once plugins:update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/update.ts)_

## `once which`

Show which plugin a command is in.

```
USAGE
  $ once which

DESCRIPTION
  Show which plugin a command is in.
```

_See code: [@oclif/plugin-which](https://github.com/oclif/plugin-which/blob/v2.2.2/src/commands/which.ts)_
<!-- commandsstop -->
