import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoutes({
    isAuthenticated,
    element: Element,
    ...rest
    }) => {
    return (
        <Route exact path="/details_product" element={<ProductDetails/>} />     
    )
}
