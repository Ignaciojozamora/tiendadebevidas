/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const CartWidget = ()=>{
    return (
        <div>
        <FontAwesomeIcon icon={faCoffee}/>
        </div>
    )

}

export default CartWidget()
 */

import * as React from 'react';
import IconButton from '@mui/material/Button';
import StyledBadge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/material/ShoppingCartIcon';

const CartWidget = ()=>{
    return (
        <div>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
        </div>
    )

}

export default CartWidget()