declare type uuid = string;

/*
 * Message Mapping Guide V3
 */
export interface IMMGV3 {
  /*
   * Mongo ID field
   */
  _id: uuid;

  /*
   * MMG ID field (GUID)
   */
  id: uuid;

  /*
   * MMG Name field
   */
  name: string;

  /*
   * Gets/sets the guide's short name, Example: CONSYPH
   */
  shortName: string;

  /*
   * Gets/sets the guide's description
   */
  description: string;

  /*
   * Gets/sets the internal version of the entity.
   */
  internalVersion: number;

  /*
   * Gets/sets the MSH-21 profile identifier string for this MMG
   */
  profileIdentifier: string;

  /*
   * Gets/sets the collection of blocks that are used in this guide
   */
  // blocks: IBlock[];

}

/*
 * Helper method to create a blank MMG
 */
export const createMMGV3 = (opts: any = {}): IMMGV3 => {
  const id = opts.id;// || uuidv4();
  // const createdBy = opts.createdBy || uuidv4();
  const mmg: IMMGV3 = {
    _id: id,
    id,
    name: opts.name || '',
    shortName: opts.shortName || '',
    internalVersion: opts.internalVersion || 1,
    description: opts.description || '',
    profileIdentifier: opts.profileIdentifier || '',
    // blocks: opts.blocks || [],
  };


  return mmg;
};

export const createGuide = (opts: any = {}): IMMGV3 => {
  return createMMGV3({
    ...opts,
    // type: GuideType.Guide,
    // guideStatus: opts.guideStatus || GuideStatus.Development,
  });
};
