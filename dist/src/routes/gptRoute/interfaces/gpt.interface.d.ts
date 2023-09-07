/// <reference types="node" />
export declare enum ChatRoles {
    Gpt = 0,
    Client = 1
}
export interface ChatInfo {
    from: ChatRoles;
    to: ChatRoles;
    content: Buffer;
    createDate: string;
}
