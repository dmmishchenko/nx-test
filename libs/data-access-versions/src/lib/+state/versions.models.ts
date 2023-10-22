export type AssetVersion = {
  id: number;
  type: ASSET_VERSION_TYPE;
  url: string;
  name: string;
  thumbnail: string;
};

export enum ASSET_VERSION_TYPE {
  VIDEO = 'video',
  IMAGE = 'image',
}

export type VersionMessage = {
  author: string;
  text: string;
};

export interface VersionsStateModel {
  versions: AssetVersion[];
  versionDetail: AssetVersion | null;
  versionMessages: VersionMessage[];
}
