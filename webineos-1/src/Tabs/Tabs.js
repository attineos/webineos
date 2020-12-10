import React from "react"
import { TabsProvider } from './context/TabsContext'
import TabsHeader from './TabsHeader'
import TabsTab from './TabsTab'
import TabsPanel from './TabsPanel'

function Tabs({ children }) {
  return <TabsProvider>{children}</TabsProvider>
}

Tabs.Header = TabsHeader
Tabs.Panel = TabsPanel
Tabs.Tab = TabsTab

export default Tabs
