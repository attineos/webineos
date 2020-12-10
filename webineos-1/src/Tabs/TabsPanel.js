import React from "react"
import PropTypes from 'prop-types'
import Panel from '../components/Panel'
import { useSelectedTab } from './context/TabsContext'

function TabsPanel({ children, forId, ...rest }) {
  const [selectedTab] = useSelectedTab()

  if (selectedTab !== forId) {
    return null
  }

  return <Panel {...rest}>{children}</Panel>
}

TabsPanel.propTypes = {
  forId: PropTypes.string.isRequired,
}

export default TabsPanel
