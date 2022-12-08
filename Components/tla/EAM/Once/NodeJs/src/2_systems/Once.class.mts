// export default abstract class Once {
//   static async start(): Promise<Once> {
//     const once: Once = await this.discover();
//     await once.start();
//     console.log(`
//     -------------------------------------------------------------------------
//     ONCE started
//     created:\t\t${once.creationDate.toISOString()}
//     mode:\t\t${once.mode}
//     state:\t\t${once.state}
//     scenario:\t\t${once.eamd.currentScenario.namespace}
//     scenarioPath:\t${once.eamd.currentScenario.scenarioPath}
//     -------------------------------------------------------------------------
//     `);
//     return once;
//   }
//   static async discover(): Promise<Once> {
//     console.log("Try to discover runtime");
//     if (this.RuntimeIs.TEST_ENVIRONMENT()) {
//       return (
//         await import(
//           "../2_systems/Once/JestOnce.class.mjs"
//         )
//       ).default.start();
//     }
//     if (this.RuntimeIs.NODE_LOADER()) {
//       return (
//         await import(
//           "../2_systems/Once/DefaultNodeOnceImportLoader.mjs"
//         )
//       ).default.start();
//     }
//     if (this.RuntimeIs.NODE_JS()) {
//       const server = await DefaultIOR.load("ior:esm:/tla.EAM.Once.Server[build]/OnceNodeServer");
//       const once = await server.start()
//       //@ts-ignore
//       return once;
//       // return await (await import("ior:esm:/tla.EAM.Once.Server[build]")).OnceNodeServer.start()
//     }
//     if (this.RuntimeIs.BROWSER()) {
//       let BrowserOnce = (await import("ior:esm:/tla.EAM.Once.Browser[dev]")).BrowserOnce;
//       // HACK keine Ahnung, warum das interface hier nicht mehr erfüllt wird
//       //@ts-ignore
//       return BrowserOnce.start();
//     }
//     if (this.RuntimeIs.SERVICE_WORKER()) {
//     }
//     if (this.RuntimeIs.WEB_WORKER()) {
//     }
//     //TODO@Merge maybe replace with non discovered ONCE
//     throw new Error("Once not discovered")
//   }
//   static get RuntimeIs(): OnceRuntimeResolver {
//     return {
//       TEST_ENVIRONMENT: () =>
//         typeof process !== "undefined" &&
//         process.versions != null &&
//         process.versions.node != null &&
//         process.env.NODE_ENV === "test",
//       BROWSER: () =>
//         typeof window !== "undefined" && typeof window.document !== "undefined",
//       NODE_JS: () =>
//         typeof process !== "undefined" &&
//         process.versions != null &&
//         process.versions.node != null &&
//         global.NODE_JS !== undefined &&
//         global.NODE_JS === true,
//       NODE_LOADER: () =>
//         typeof process !== "undefined" &&
//         process.versions != null &&
//         process.versions.node != null &&
//         global.NODE_JS === undefined,
//       SERVICE_WORKER: () =>
//         typeof self === "object" &&
//         self.constructor &&
//         self.constructor.name === "ServiceWorkerGlobalScope",
//       WEB_WORKER: () =>
//         typeof self === "object" &&
//         self.constructor &&
//         self.constructor.name === "DedicatedWorkerGlobalScope",
//     };
//   }
// }
import { YupValidtor } from "./Validator/YupValidator.class.mjs"
import { Mode } from "@eamd.ucp/tla.eam.once.services/dist/3_services/Once/Mode.type.mjs"
import { Once } from "@eamd.ucp/tla.eam.once.services/dist/3_services/Once/Once.interface.mjs"
import { OnceModel } from "@eamd.ucp/tla.eam.once.services/dist/3_services/Once/OnceMode.type.mjs"
import { Runtime } from "@eamd.ucp/tla.eam.once.services/dist/3_services/Once/Runtime.enum.mjs"
import { State } from "@eamd.ucp/tla.eam.once.services/dist/3_services/Once/State.enum.mjs"
import { SchemaOf, date, mixed, object } from "yup"
interface OnceNodeJsModel extends OnceModel {
  env: NodeJS.ProcessEnv
}

class OnceNodeJs implements Once<OnceNodeJsModel, SchemaOf<OnceNodeJsModel>> {
  model: OnceNodeJsModel = {
    creationDate: new Date(),
    mode: Mode.BOOTING,
    state: State.DISCOVER,
    env: process.env,
  }
  global = globalThis

  validationSchema: SchemaOf<OnceNodeJsModel> = object().shape({
    creationDate: date().required(),
    env: object(),
    mode: mixed().oneOf(Object.values(Runtime)).oneOf(Object.values(Mode)),
    state: mixed().oneOf(Object.values(State)),
  })

  modelValidator = new YupValidtor<OnceNodeJsModel>()

  start(): Promise<this> {
    return new Promise((resolve) => {
      resolve(this)
    })
  }
}

// console.log(import.meta.url);

// var once = new OnceNodeJs()

// //@ts-ignore
// // once.model.mode = "VALIDATION ERROR"

// const foo = await once.modelValidator.validate(once.model, once.validationSchema)
// dir(foo)

// console.log(yupToJsonSchema);

// //@ts-ignore
// const jsonSchema = yupToJsonSchema.default(once.validationSchema);
// console.log(jsonSchema)









// const ajv = new Ajv()

// const schema = {
//   type: "object",
//   properties: {
//     foo: { type: "integer" },
//     bar: { type: "string" },
//   },
//   required: ["foo"],
//   additionalProperties: false,
// }

// const data = { foo: 1, bar: 123 }
// const valid = ajv.validate(schema, data)
// if (!valid) console.log(ajv.errors)
// else console.log("valid")
