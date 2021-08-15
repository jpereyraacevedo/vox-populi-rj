import React from 'react'
import './ItemListContainer.scss'

export const ItemListContainer = ( { greeting } ) => {

    return (
       <div>
           <p>
               {greeting}
           </p>
       </div>
    )

}