import { User } from "./user";

export class Document {
    public documentId: string;
    public content: Blob;
    public documentName: string;
    public contentType: string;
    public user: User;
    constructor () {}
}
