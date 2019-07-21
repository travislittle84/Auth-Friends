import React from 'react'
import { Button } from 'reactstrap'

function AppMenu(props) {
    return (
        <div className="app-menu">
            <h3>Lambda Friends</h3>
            <Button type="button" id="logout-button" onClick={props.logout}>Logout</Button>
        </div>
    )
}

export default AppMenu