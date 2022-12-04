import base from "./configs/base.json";
import rules from "./rules";

export = {
  rules,
  configs: {
    base,
    browser: { ...base, env: { es2022: true, browser: true } },
    node: { ...base, env: { es2022: true, node: true } },
    oclif: {
      ...base,
      extends: [...base.extends, "oclif-typescript"],
      env: { es2022: true, node: true },
    },
  },
};
