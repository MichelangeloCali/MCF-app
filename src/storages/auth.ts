import { MMKV } from 'react-native-mmkv';

import { StorageIds } from '@/enums/StorageIds';

export const authStorage = new MMKV({ id: StorageIds.Auth });
