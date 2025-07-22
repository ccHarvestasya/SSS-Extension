import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import { getAllowList } from '../../../_general/lib/Storage/index.js'
import AllowList from './AllowList.js'
interface Props {
  reload: () => void
  update: Date
}

const Options: React.FC<Props> = ({ reload, update }) => {
  const [allowList, setAllowList] = useState<string[]>([])

  useEffect(() => {
    getAllowList().then((list) => {
      setAllowList(list)
    })
  }, [update])

  return (
    <Wrapper>
      <AllowList allowlist={allowList} reload={reload} />
    </Wrapper>
  )
}

export default Options

const Wrapper = styled('div')({
  margin: '40px 0px',
  minWidth: '60vw',
  width: '1000px',
})
