// import File from '@eamd.ucp/tla.eam.once.services/dist/3_services/File/File.interface.mjs'
import File from '@eamd.ucp/tla.eam.once.services/dist/3_services/File/File.interface.mjs'
import { existsSync, writeFileSync, readFileSync } from 'fs'
import { basename, dirname, extname } from 'path'

export default class DefaultFile implements File {
	fullPath: string

	constructor(path = '') {
		this.fullPath = path
	}

	get exists() {
		return existsSync(this.fullPath)
	}

	get extension() {
		return extname(this.fullPath)
	}

	get filename(): string {
		return basename(this.fullPath)
	}

	get basePath(): string {
		return dirname(this.fullPath)
	}

	write(content: string): void {
		writeFileSync(this.fullPath, content)
	}
	read(): string {
		return readFileSync(this.fullPath).toString()
	}

} 