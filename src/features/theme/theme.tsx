import { ChangeEvent } from 'react'
import { Button, Input } from 'antd'
import { SkinOutlined } from '@ant-design/icons'

import { useAppSelector, useAppDispatch } from '@/store'
import { setColor, themeColor } from './themeSlice'

import { debounce } from '@/utils/functions'

import styles from './theme.module.css'

export default function Theme() {
  const primaryColor = useAppSelector(themeColor)
  const dispatch = useAppDispatch()

  const changeMainColor = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setColor(e.target.value))
  }

  return (
    <div className={styles.skin}>
      <Button type="primary" shape="circle" icon={<SkinOutlined />} />
      <Input
        type="color"
        className={styles.skinInput}
        defaultValue={primaryColor}
        onChange={debounce(changeMainColor, 500)}
      ></Input>
    </div>
  )
}
