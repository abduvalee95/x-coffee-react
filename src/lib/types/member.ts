import { MemberType, MemberStatus } from "../enum/member.enum";

export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddre?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints?: Number;
}

export interface Member {
  _id: string;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string; //yashirdik
  memberAddre?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints: Number;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}

export interface MemberUpdateInput {
  memberNick?: string;
  memberPhone?: string;
  memberPassword?: string;
  memberAddre?: string;
  memberDesc?: string;
  memberImage?: string;
}
