import { Avatar, AvatarProps, Tooltip } from 'antd'
import React, { useMemo } from 'react'
import randomColor from 'randomcolor'
export type UserAvatarProps = AvatarProps & {
  user:
    | {
        realName?: string
        userName?: string
      }
    | null
    | undefined
}
const UserAvatar = ({ user, style, ...props }: UserAvatarProps) => {
  const name = user?.realName?.trim() || user?.userName?.trim() || 'Unknown'
  const background = useMemo(
    () =>
      randomColor({
        luminosity: 'bright',
        seed: name,
        format: 'rgb',
      }),
    [name]
  )

  return (
    <Tooltip title={name}>
      <Avatar style={{ background, ...style }} {...props}>
        {name[0].toUpperCase()}
      </Avatar>
    </Tooltip>
  )
}
export default UserAvatar
