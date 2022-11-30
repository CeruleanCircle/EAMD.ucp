import rules from './rules'
import base from './configs/base.json'
export = {
	rules,
	configs: {
		base,
		browser: { ...base, env: { es2022: true, browser: true } },
		node: { ...base, env: { es2022: true, node: true } },
	},
}
