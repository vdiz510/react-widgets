import React, { useState } from 'react'
import Accordion from './Accordion'
import Search from './Search'
import Dropdown from './Dropdown'
import Translate from './Translate'

const items = [
  {
    title: "What is React?",
    content: "React is a front end JavaScript framework"
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: "The Color Green",
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
]

export default () => {
  return (
    // <div className="ui container">
    //   {/* <Accordion items={items} />
    //   <Search /> */}
    //   <Dropdown options={options} />
    // </div>

    // <div>
    //   {showDropdown ?
    //     < Dropdown
    //       selected={selected}
    //       onSelectedChange={setSelected}
    //       options={options}
    //     /> : null
    //   }
    // </div>
    <div className="ui container">
      <Translate />
    </div>
  )
}