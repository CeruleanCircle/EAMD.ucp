import File from "@eamd.ucp/tla.eam.once.services/dist/3_services/File/File.interface.mjs"
import { FileType } from "@eamd.ucp/tla.eam.once.services/dist/3_services/File/FileType.enum.mjs"
import { Stats, existsSync, lstat, lstatSync, readFileSync, renameSync, writeFileSync } from "fs"
import { basename, dirname, extname, join } from "path"

export default class DefaultFile implements File {
  constructor(public fullPath: string = "") {}

  get typeSync(): FileType {
    const stats = lstatSync(this.fullPath)
    return this.getFileTypeByStats(stats)
  }
  get type(): Promise<FileType> {
    return new Promise((resolve, reject) => {
      lstat(this.fullPath, (err, stats) => {
        if (err) {
          reject(err)
          return
        }
        try {
          resolve(this.getFileTypeByStats(stats))
        } catch (e) {
          reject(err)
        }
      })
    })
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

  get name() {
    return this.filename
  }

  set name(value: string) {
    renameSync(this.fullPath, join(this.basePath, value))
  }
  write(content: string): void {
    writeFileSync(this.fullPath, content)
  }

  read(): string {
    return readFileSync(this.fullPath).toString()
  }

  private getFileTypeByStats(stats: Stats) {
    if (stats.isFile()) return FileType.file
    if (stats.isDirectory()) return FileType.folder
    if (stats.isSymbolicLink()) return FileType.symLink
    throw new Error("Type not found")
  }
}
