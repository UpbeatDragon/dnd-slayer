'use client'

import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ComboBox({data, title, selectedItem=null}) {
  const [query, setQuery] = useState('')
  const [selectedData, setSelectedData] = useState(selectedItem?.name)
  console.log(selectedData)
  const filteredData =
    query === ''
      ? data
      : data.filter((d) => {
          return d.name.toLowerCase().startsWith(query.toLowerCase())
        })

  return (
    <Combobox as="div" value={selectedData} onChange={setSelectedData}>
      <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">{title}</Combobox.Label>
      <div className="relative mt-2">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={selectedData?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredData.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredData.map((d) => (
              <Combobox.Option
                key={d.index}
                value={d.name}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex">
                      <span className={classNames('truncate', selected && 'font-semibold')}>{d.name}</span>
                    </div>
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}