import { NodeDependencyType } from './enums';

export interface SchematicsOptions {
  removeProtractor: string;
  noBuilder: string;
  __version__: number;
}

export interface NodeDependency {
  type: NodeDependencyType;
  name: string;
  version: string;
  overwrite?: boolean;
}

export interface NodePackage {
  name: string;
  version: string;
}

export interface DeleteNodeDependency {
  type: NodeDependencyType;
  name: string;
}
