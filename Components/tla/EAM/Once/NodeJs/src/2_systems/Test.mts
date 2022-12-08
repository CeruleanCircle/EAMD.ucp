// Import the TypeScript language service
import { existsSync, readFileSync } from "fs";
import { type } from "os";
import  { dirname, resolve } from "path";
import typescript, { couldStartTrivia } from "typescript";
import * as TJS from "typescript-json-schema";
import { Mode } from "@eamd.ucp/tla.eam.once.services/dist/3_services/Once/Mode.type.mjs";
import { State } from "@eamd.ucp/tla.eam.once.services/dist/3_services/Once/State.enum.mjs";

var path ="/Users/Shared/EAMD.ucp/Components/tla/EAM/Once/NodeJs"
var configFile = typescript.findConfigFile(path,typescript.sys.fileExists)
if (!configFile) {
    throw new Error("Could not find a valid 'tsconfig.json'.");
}
// // var config = typescript.readConfigFile(configFile, typescript.sys.readFile)
// // var configFile = typescript.findConfigFile(dirname(import.meta.url),typescript.sys.fileExists, "tsconfig.json")

// var parsed = typescript.parseJsonConfigFileContent(config,typescript.sys,path,{},configFile)
// console.log(parsed);




// // Import the TypeScript language service
// import ts from "typescript/lib/tsserverlibrary";

// ts.pars
// console.log(tsc);

// Read the contents of the tsconfig.json file
// const configFilePath = "./tsconfig.json";
// const configFileContent = readFileSync(path, "utf8");
const readConfig = typescript.readConfigFile(configFile, typescript.sys.readFile);
// var configFileContent =typescript.readJsonConfigFile(configFile, typescript.sys.readFile)
// console.log(configFileContent);

// Parse the tsconfig.json file
const config = typescript.parseJsonConfigFileContent(
  readConfig.config,
  typescript.sys,
 path
);


console.log(config.options);

console.log(resolve("./Once.class.mts"));


const program = TJS.getProgramFromFiles(
    ["/Users/Shared/EAMD.ucp/Components/tla/EAM/Once/NodeJs/src/2_systems/Once.class.mts"],
    config.options,
    "/Users/Shared/EAMD.ucp"
  );

  const settings: TJS.PartialArgs = {
    required: true,
};


  const schema = TJS.generateSchema(program, "OnceNodeJsModel", settings);
  import addFormats from "ajv-formats"
  import Ajv from "ajv"
  const ajv = new Ajv()


// import * as draft7MetaSchema from "ajv/dist/refs/json-schema-draft-07.json"
// ajv.addMetaSchema(draft7MetaSchema)
if(!schema) throw new Error("Schema is null")
// ajv.addSchema(schema,"schema")
addFormats(ajv)

var fooo = JSON.parse(JSON.stringify({
    creationDate: new Date(),
    mode: Mode.BOOTING,
    state: State.DISCOVER,
    env: process.env,
}))

console.log(fooo);

var validate = ajv.validate(schema,fooo )

console.  log(validate)
console.dir(ajv.errors)