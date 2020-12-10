import React, { useContext, useState } from "react"

const TabsContext = React.createContext()

export function useSelectedTab() {
  const selectedState = useContext(TabsContext)

  if (!selectedState) {
    throw new Error("You must be in a TabsProvider to use useSelectedTab.")
  }

  return selectedState
}

export function TabsProvider({ children }) {
  const selectedState = useState(null)

  return <TabsContext.Provider value={selectedState}>{children}</TabsContext.Provider>
}
