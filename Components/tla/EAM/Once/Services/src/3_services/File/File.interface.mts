import { UcpUnit } from "../Ucp/UcpUnit.interface.mjs"

export default interface File extends UcpUnit{
    fullPath: string
    get basePath(): string
    get exists(): boolean;
    get extension(): string;
    get filename():string;
    write(content: string): void
    read(): string
}