import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import Panel from '../components/Panel'
import DeleteButton from '../components/DeleteButton'

function TabsWithoutCompound({ buttonsPosition = 'top', onDeleteTab, onNewTab, tabs, withNewTabButton }) {
  const [selectedTabId, setSelectedTabId] = useState(null)

  const buttons = tabs.map(({ id, label }) => (
    <Button
      key={id}
      isSelected={id === selectedTabId}
      onClick={() => setSelectedTabId(id)}>
      {label}
      <DeleteButton onClick={() => onDeleteTab?.(id)}>&#x274C;</DeleteButton>
    </Button>
  ))

  if (withNewTabButton) {
    buttons.push(<Button key="newTab" onClick={onNewTab}>+</Button>)
  }

  return <>
    {buttonsPosition === 'top' && buttons}
    {tabs.filter(({ id }) => id === selectedTabId).map(({ content, id }) =>
      <Panel key={id}>
        {content}
      </Panel>)}
    {buttonsPosition === 'bottom' && buttons}
  </>
}

TabsWithoutCompound.propTypes = {
  buttonsPosition: PropTypes.oneOf(['bottom', 'top']),
  onDeleteTab: PropTypes.func,
  onNewTab: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  withNewTabButton: PropTypes.bool,
}

export default TabsWithoutCompound