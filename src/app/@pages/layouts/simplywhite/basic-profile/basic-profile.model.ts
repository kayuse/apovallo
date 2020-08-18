export interface IBasicProfile {
    id?: number;
    address?: string;
    city?: string;
    country?: string;
    phone?: string;
    gender?: string;
}

export class BasicProfile implements IBasicProfile {
    constructor(
        public id?: number,
        public address?: string,
        public city?: string,
        public country?: string,
        public phone?: string,
        public gender?: string
    ) {
    }
}
