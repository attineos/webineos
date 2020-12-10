import { useState } from 'react'
import styled from 'styled-components'

import TabsWithoutCompound from './TabsWithoutCompound/TabsWithoutCompound'
import generateId from './helpers/generateId'
import Tabs from './Tabs/Tabs'
import DeleteButton from './components/DeleteButton'

const CustomTab = styled(Tabs.Tab)`
  background-color: lightblue;
  font-size: 16px;
  text-decoration: underline;
  
  &:hover {
    background-color: orange;
  }
`

function App() {
  const [tabs, setTabs] = useState([
    {
      id: 'tab-1',
      content: <div>I am the content of the tab 1</div>,
      label: 'Tab 1',
    },
    {
      id: 'tab-2',
      content: <div>Tab 2, here I am</div>,
      label: 'Tab 2',
    },
  ])

  const onDeleteTab = (deletedTabId) => {
    setTabs(prev => prev.filter(({ id }) => deletedTabId !== id))
  }

  const onNewTab = () => {
    setTabs(prev => {
      const id = generateId(10)
      return ([
        ...prev,
        {
          id: 'tab-' + id,
          content: <div>I'm the new tab of id {id}</div>,
          label: 'Tab ' + id,
        },
      ])
    })
  }

  return (
    <>
      {/* Previous version. */}
      <p>Tabs without compound:</p>
      <TabsWithoutCompound buttonsPosition="bottom" onDeleteTab={onDeleteTab} onNewTab={onNewTab} tabs={tabs}
                           withNewTabButton />

      {/* Compound version. */}
      <p style={{ marginTop: 32 }}>Compound tabs:</p>
      <Tabs>
        <Tabs.Header>
          {tabs.map(({ id, label }) => (
            <Tabs.Tab id={id} key={id}>{label}
              <DeleteButton onClick={() => onDeleteTab(id)}>&#x274C;</DeleteButton>
            </Tabs.Tab>
          ))}
          <span>And, to add one tab, click here:</span>
          <Tabs.Tab onClick={onNewTab}>+</Tabs.Tab>
        </Tabs.Header>
        {tabs.map(({ content, id }) => (
          <Tabs.Panel forId={id} key={id}>{content}</Tabs.Panel>
        ))}
        <CustomTab id="tab-1">Rappel Tab 1</CustomTab>
      </Tabs>
    </>
  )
}

export default App