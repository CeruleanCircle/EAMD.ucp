import { UcpUnit } from "../Ucp/UcpUnit.interface.mjs"
import { FileType } from "./FileType.enum.mjs"

export default interface File extends UcpUnit{
    fullPath: string
    get basePath(): string
    get exists(): boolean;
    get extension(): string;
    get filename():string;
    write(content: string): void
    read(): string
    get typeSync():FileType
    get type():Promise<FileType>
}