import React, { useState } from 'react';

const Contributors = () => {

    const [isActive, setActive] = useState(false)
    const [isActiveCategory, setActiveCategory] = useState("team")

    console.log(isActive, isActiveCategory)
    
    return (
        <div className="contributors">
            { isActive ? 
                <div className="contributorsDetail">
                    <h2>Hylo is built with care</h2>
                    <p>Hylo would not be possible without the generosity, dedication and collaboration of the many contributors 
                    that make it all possible. From the current core team, to everyone who has committed code or provided feedback,
                    ideas or donations -- you are what makes Hylo possible.</p>
                    <div className="contributorsCategory">
                        <button className={isActiveCategory === "team" ? "active" : ""}
                            onClick={() => setActiveCategory("team")}
                            onKeyPress={() => setActiveCategory("team")}>Core Team <span>18</span></button>
                        <button className={isActiveCategory === "cocreators" ? "active" : ""}
                            onClick={() => setActiveCategory("cocreators")}
                            onKeyPress={() => setActiveCategory("cocreators")}>Co-Creators <span>39</span></button>
                        <button className={isActiveCategory === "donors" ? "active" : ""}
                            onClick={() => setActiveCategory("donors")}
                            onKeyPress={() => setActiveCategory("donors")}>Donors <span>212</span></button>
                    </div>
                </div> : <button onClick={() => setActive(true)}><h3>View Contributors</h3></button>
            }
        </div>
    );
}

export default Contributors
