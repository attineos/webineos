import React from "react"
import PropTypes from 'prop-types'
import Button from '../components/Button'
import { useSelectedTab } from './context/TabsContext'

function TabsTab({ children, id, onClick, ...rest }) {
  const [selectedTab, setSelectedTab] = useSelectedTab()

  const isSelected = !!id && selectedTab === id
  const handleClick = () => {
    if (!!id) {
      setSelectedTab(id)
    }
    onClick?.()
  }

  return <Button isSelected={isSelected} onClick={handleClick} {...rest}>{children}</Button>
}

TabsTab.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
}

export default TabsTab
