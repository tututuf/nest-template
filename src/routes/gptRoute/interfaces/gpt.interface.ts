// 聊天角色类型
export enum ChatRoles {
  Gpt,
  Client,
}

// 聊天的消息
export interface ChatInfo {
  from: ChatRoles; // 来自谁的消息
  to: ChatRoles; // 发送给谁的消息
  content: Buffer; // 具体内容
  createDate: string; // 发送时间
}
