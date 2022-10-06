import { ICartDeviceData } from "./ICartDeviceData";

export interface ICart {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    devices: Array<ICartDeviceData>
}