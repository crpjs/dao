export const { CRP_RTREE_ENTRY, CRP_VTREE_ENTRY } = process.env;

import { MicroApp, MicroAppItem } from '@/types/MicroAppType';
const MFContainerId = '#MFContainer';

export const MicroAppsConfig: MicroApp = [
  {
    name: 'rtree',
    entry: CRP_RTREE_ENTRY as string,
    container: MFContainerId,
    activeRule: '/app/rtree',
  },
  {
    name: 'vtree',
    entry: CRP_VTREE_ENTRY as string,
    container: MFContainerId,
    activeRule: '/app/vtree',
  },
];
// export default { MFContainerId };
