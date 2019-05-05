export interface CalcultedIpAddresses {
   classType: string;
   numOfSubnets: number;
   maxHosts: number;
   startingIp: string;
   suffix: number;
   IpAddressInfo: IpAddress[];
}

export interface  IpAddress {
  wireAddress: string;
  firstAddress: string;
  lastAddress: string;
  broadcastAddress: string;
}
