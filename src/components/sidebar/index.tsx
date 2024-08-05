import { FC, memo, ReactNode, useEffect, useRef } from 'react'
import { SidebarWrapper } from './style'
import createModule from '@site/.JS/main'
import { Button, List, Switch } from '@arco-design/web-react'
import { move } from '@site/src/utils/animation/move'
import { ListHandle } from '@arco-design/web-react/es/List/interface'
import toolList from '@site/static/data/tool-list.json'

interface IProps {
  children?: ReactNode
  effectControls?: Array<Function>
}

const Siderbar: FC<IProps> = ({ effectControls }) => {
  const ListRef = useRef<ListHandle>(null)

  useEffect(() => {
    ListRef.current.dom.addEventListener('mouseenter', () => {
      move('.tool-list', 'enter', -100, 'x', 0.5)
    })

    ListRef.current.dom.addEventListener('mouseleave', () => {
      move('.tool-list', 'leave', -100, 'x', 0.5)
    })
  }, [])

  // createModule().then(res => {
  //   module = res
  // })

  // const hadleClick = () => {
  //   // const Instance = new module.instance()
  //   const { add, sub } = module.instance.exports
  //   console.log(add(1, 2))
  //   console.log(sub(1, 2))
  //   console.log(module)
  // }

  const hadleMove = (ty: 'enter' | 'leave') => {
    move('.tool-list', ty, -100, 'x', 0.5)
  }

  const clickHandler = (value: any, item: any) => {
    switch (item) {
      case 0:
        stopp()
        break
      case 1:
        removeClickEffect()
        break
    }
  }

  return (
    <SidebarWrapper>
      {/* <Button className={'btn'} type="primary" onClick={() => hadleClick()} onMouseEnter={() => hadleMove('enter')} onMouseLeave={() => hadleMove('leave')}>
        点击
      </Button> */}
      <List
        listRef={ListRef}
        className="tool-list"
        size="small"
        header="选项菜单"
        dataSource={toolList}
        render={(item, index) => (
          <List.Item key={item.id} className="tool-item">
            <span className="sp-title">{item.title}</span>
            <span className="sp-switch">
              <Switch className={'switch'} checkedText="ON" uncheckedText="OFF" type="round" onChange={value => clickHandler(value, index)} defaultChecked />
            </span>
          </List.Item>
        )}
      />
    </SidebarWrapper>
  )
}

export default memo(Siderbar)
