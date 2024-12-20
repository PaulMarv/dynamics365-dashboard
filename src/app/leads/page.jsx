import React from 'react'
import { InsightPanel } from './insight-panel'
import QuickAcces from './quick-access'
import SearchableTable from './leads-table'

const Leads = () => {
  return (
    <div className='w-full'>
       <QuickAcces/>
      <InsightPanel/>
      <SearchableTable/>
    </div>
  )
}

export default Leads
