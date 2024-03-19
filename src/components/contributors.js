import React, { useState } from 'react';
import Image from './image';

import JSONData from "../content/open-collective-contributors.json"
import contributorsData from "../content/contributors.json"

const Contributors = () => {

    const [isActive, setActive] = useState(false)
    const [isActiveCategory, setActiveCategory] = useState("team")

    const Contributor = ({name, title, img, url}) =>
        <li key={name + title}>
            <a href={url} target='__blank'>
                {img && <Image imageName={img} className="contributorImage" width='50px' />}
                <div className="contributorName">
                    <h4>{name}</h4>
                    <h5>{title}</h5>
                </div>
            </a>
        </li>

    const OpenCollectiveDonor = (member) => {
        let memberRecord;

        if (member.role === "BACKER" && member.image) {
            memberRecord = <li key={member.MemberId}>
                <span className="circle-image">
                    <img src={member.image} alt={member.name} />
                </span>
                <div className="contributorName">
                    <h4>{member.name}</h4>
                    <h5>{member.tier}</h5>
                </div>
            </li>
        } else if (member.role === "BACKER") {
            memberRecord = <li key={member.MemberId}>
                <div className="contributorName">
                    <h4>{member.name}</h4>
                    <h5>{member.tier}</h5>
                </div>
            </li>
        }
        return memberRecord;
    }

    return (
        <div className="contributors">
            { isActive ?
                <div className="contributorsDetail">
                    <h2><span>Hylo</span> <span>is</span> <span>built</span> <span>with</span> <span>care</span></h2>
                    <p>Hylo is brought to you through the generosity and dedication of many contributors.
                    From the current core team, to everyone who has committed code or provided feedback,
                    ideas, or donations -- you are what makes Hylo possible.</p>

                    <div className="contributorsCategory">
                        <button className={isActiveCategory === "team" ? "active" : ""}
                            onClick={() => setActiveCategory("team")}
                            onKeyPress={() => setActiveCategory("team")}>Core Team <span>19</span></button>
                        <button className={isActiveCategory === "cocreators" ? "active" : ""}
                            onClick={() => setActiveCategory("cocreators")}
                            onKeyPress={() => setActiveCategory("cocreators")}>Co-Creators <span>20</span></button>
                        <button className={isActiveCategory === "donors" ? "active" : ""}
                            onClick={() => setActiveCategory("donors")}
                            onKeyPress={() => setActiveCategory("donors")}>Donors <span>482</span></button>
                    </div>
                    <div className="contributorsList">
                        <h3>{contributorsData[isActiveCategory].message}</h3>
                        <ul>
                        {
                            contributorsData[isActiveCategory].humans.map(Contributor)
                        }
                        </ul>
                        { isActiveCategory === "team" ?
                            <div>
                                <h3>{contributorsData["contributors"].message}</h3>
                                <ul>
                                {
                                    contributorsData["contributors"].humans.map(Contributor)
                                }
                                </ul>
                            </div> : ""
                        }
                        { isActiveCategory === "donors" ?
                            <ul>
                                {
                                    JSONData.map(OpenCollectiveDonor)
                                }
                            </ul> : ""
                        }
                    </div>
                </div> : <button onClick={() => setActive(true)} className="viewContributors"><h3>View Contributors</h3></button>
            }
        </div>
    );
}

export default Contributors
