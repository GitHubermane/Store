import { IDeviceData } from "../IDeviceData";

export interface IUserDataWithDevices {
    id: number;
    email: string;
    name?: any;
    img?: any;
    password: string;
    role: string;
    isActivated: boolean;
    activationLink: string;
    createdAt: string;
    updatedAt: string;
    devices: IDeviceData[];
}
