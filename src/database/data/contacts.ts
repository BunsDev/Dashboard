import { ExtendedContact, TUuid } from '@types';

export const defaultContacts: { [key in string]: ExtendedContact } = {
  'a1acf1f2-0380-5bd6-90c3-2b4a0974a6fe': {
    label: 'MyCrypto Tip Jar',
    address: '0xFd63Bf84471Bc55DD9A83fdFA293CCBD27e1F4C8',
    notes: 'Toss us a coin!',
    network: 'Ethereum',
    uuid: 'a1acf1f2-0380-5bd6-90c3-2b4a0974a6fe' as TUuid
  }
};
