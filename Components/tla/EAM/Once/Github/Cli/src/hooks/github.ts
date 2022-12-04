import {Hook} from '@oclif/core'

const hook: Hook<'github'> = async function (options) {
    console.log(`example github hook running before ${options.id}`)
}

export default hook