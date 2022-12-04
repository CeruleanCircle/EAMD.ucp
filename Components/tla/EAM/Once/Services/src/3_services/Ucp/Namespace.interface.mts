import Folder from "../File/Folder.interface.mjs";

export type Namespace = Folder;

export interface NamespaceStatic {
  fromString: Namespace;
  new (): Namespace;
}
