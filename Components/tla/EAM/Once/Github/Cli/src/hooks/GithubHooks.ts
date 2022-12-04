import { Hooks } from "@oclif/core/lib/interfaces"

export interface GithubHooks extends Hooks {
	github: {
		options: {
			id: string | undefined;
			github: string | undefined;
			argv: string[];
		};
		return: void | never;
	};
}
