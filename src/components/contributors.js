import React, { useState } from 'react';

const Contributors = () => {

    const [isActive, setActive] = useState(false)
    
    return (
        <div className="contributors">
            { isActive ? 
                <div className="contributorsDetail" 
                    onClick={() => setActive(false)}
                    onKeyPress={() => setActive(false)} 
                    role="button" 
                    aria-expanded="true">
                    <h2>Hylo is built with care</h2>
                    <p>Hylo would not be possible without the generosity, dedication and collaboration of the many contributors 
                    that make it all possible. From the current core team, to everyone who has committed code or provided feedback,
                    ideas or donations -- you are what makes Hylo possible.</p>
                </div> : <button onClick={() => setActive(true)}><h3>View Contributors</h3></button>
            }
        </div>
    );
}

export default Contributors
