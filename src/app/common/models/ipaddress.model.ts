export interface CalcultedIpAddresses {
  classType: string;
  numOfSubnets: number;
  maxHosts: number;
  startingIp: string;
  suffix: number;
  ipAddressInfo: IpAddress[];
}

export interface  IpAddress {
  seq: number;
  wireAddress: string;
  firstHost: string;
  lastHost: string;
  broadcastAddress: string;
}
