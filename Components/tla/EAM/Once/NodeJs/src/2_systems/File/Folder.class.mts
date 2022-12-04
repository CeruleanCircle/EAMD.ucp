import FileInterface from '@eamd.ucp/tla.eam.once.services/src/3_services/File/File.interface.mjs'
import Folder from '@eamd.ucp/tla.eam.once.services/src/3_services/File/Folder.interface.mjs'
import { lstatSync, readdirSync } from 'fs'
import { join } from 'path'
import DefaultFile from './File.class.mjs'

export default class DefaultFolder extends DefaultFile implements Folder {
	static getFilesByExtentions(path: string, extensions?: string[] | undefined, recursive?: boolean | undefined): FileInterface[] {
		return new DefaultFolder(path).getFilesByExtentions(extensions, recursive)
	}
	static getFilesByFileName(path: string, fileNames?: string[] | undefined, recursive?: boolean | undefined): FileInterface[] {
		return new DefaultFolder(path).getFilesByFileName(fileNames, recursive)
	}
	getFilesByExtentions(extensions?: string[] | undefined, recursive?: boolean | undefined): FileInterface[] {
		return this.getFiles(this.getFilesByExtentions, recursive)
			.filter(x => extensions === undefined || extensions.includes(x.extension))
	}
    
	getFilesByFileName(fileNames?: string[] | undefined, recursive?: boolean | undefined): FileInterface[] {
		return this.getFiles(this.getFilesByFileName, recursive)
			.filter(x => fileNames === undefined || fileNames.includes(x.filename))
	}

	private getFiles(recursiveFn: () => FileInterface[], recursive = false): FileInterface[] {
		return readdirSync(this.fullPath, {})
			.map(x => join(this.fullPath, x.toString()))
			.filter(x => !lstatSync(x.toString()).isDirectory() || recursive)
			.map(path => lstatSync(path).isDirectory() ?
				new DefaultFolder(path).getFiles(recursiveFn, recursive) :
                new DefaultFile(path) as FileInterface)
			.flat()
	}
} 