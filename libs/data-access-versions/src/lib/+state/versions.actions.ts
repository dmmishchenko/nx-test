export namespace VersionsActions {
  export class LoadList {
    static readonly type = '[Versions] Get Versions List';
  }

  export class GetDetail {
    static readonly type = '[Versions] Get Version Detail';
    constructor(public readonly versionId: number) {}
  }

  export class GetVersionMessages {
    static readonly type = '[Versions] Get Version Messages';
    constructor(public readonly versionId: number) {}
  }
}
