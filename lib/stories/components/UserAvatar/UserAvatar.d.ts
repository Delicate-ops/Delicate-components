/// <reference types="react" />
import { AvatarProps } from 'antd';
export declare type UserAvatarProps = AvatarProps & {
    user: {
        realName?: string;
        userName?: string;
    } | null | undefined;
};
declare const UserAvatar: ({ user, style, ...props }: UserAvatarProps) => JSX.Element;
export default UserAvatar;
