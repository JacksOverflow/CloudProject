import React from 'react'
import BtnLogin from './BtnLogin'

const OAuth = ({providers, csrfToken}) => {
  return (
    <div>
      <BtnLogin 
        provider={providers.google}
        bgColor='#f2573f'
        csrfToken={csrfToken}
      />
     
    </div>
  )
}

export default OAuth
