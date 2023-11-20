import React, { useState } from 'react';

const Contributors = () => {

    const [isActive, setActive] = useState(false)
    const [isActiveCategory, setActiveCategory] = useState("team")

    const contributorsData = {
        team: {
            message: "Hylo is currently managed by a small core team based in the United States and Costa Rica.",
            humans: [
            {
                id: 1,
                name: "Tibet Sprague",
                title: "Director of Technology",
                img: "tibet.jpg"
            },
            {
                id: 2,
                name: "Clare Politano",
                title: "Director of Product",
                img: "clare.jpg"
            },
            {
                id: 3,
                name: "Aaron Brodeur",
                title: "Director of Design",
                img: "aaron.jpg"
            },
            {
                id: 4,
                name: "Krisha Subramanian",
                title: "Community Lead",
                img: "krisha.jpg"
            },
            {
                id: 5,
                name: "Thomas Watson",
                title: "Software Engineer",
                img: "tom.jpg"
            },
            {
                id: 6,
                name: "Loren Johnson",
                title: "Software Engineer",
                img: "loren.jpg"
            }
        ]},
        contributors: {
            message: "Previous Team Members and Contributors",
            humans: [
                {
                    id: 11,
                    name: "Edward West",
                    title: "Co-Founder"
                },
                {
                    id: 12,
                    name: "Julia Pope",
                    title: "Co-Founder"
                },
                {
                    id: 13,
                    name: "Rose Slam! Johnson",
                    title: "Operations Manager"
                },
                {
                    id: 14,
                    name: "Neha Sharma",
                    title: "Partnerships Lead"
                },
                {
                    id: 15,
                    name: "Sofia Acosta",
                    title: "Software Engineer"
                },
                {
                    id: 16,
                    name: "Lawrence Wang",
                    title: "Software Engineer"
                },
                {
                    id: 17,
                    name: "Robbie Carlton",
                    title: "Software Engineer"
                },
                {
                    id: 18,
                    name: "Rich Churcher",
                    title: "Software Engineer"
                },
                {
                    id: 19,
                    name: "Connor Turland",
                    title: "Software Engineer"
                },
                {
                    id: 20,
                    name: "Pospi",
                    title: "Software Engineer"
                },
                {
                    id: 21,
                    name: "Shen-Shen Wu",
                    title: "Software Engineer"
                },
                {
                    id: 22,
                    name: "Ray Marceau",
                    title: "Software Engineer"
                },
                {
                    id: 23,
                    name: "Antonette Ortiz",
                    title: "Software Engineer"
                },
                {
                    id: 24,
                    name: "Veselin Nikolov",
                    title: "Software Engineer"
                },
                {
                    id: 25,
                    name: "Samuel Plumppu",
                    title: "Software Engineer"
                },
                {
                    id: 26,
                    name: "Willem Olding",
                    title: "Software Engineer"
                },
                {
                    id: 27,
                    name: "Aaron Edwards",
                    title: "Software Engineer"
                },
                {
                    id: 28,
                    name: "Jason Prado",
                    title: "Software Engineer"
                },
            ]
        },
        cocreators: {
            message: "These stakeholders have played a key role in shaping Hylo.",
            humans: [
                {
                    id: 30,
                    name: "Dorn Cox",
                    title: "OpenTEAM"
                },
                {
                    id: 31,
                    name: "Nat Irwin",
                    title: "OpenTEAM"
                },
                {
                    id: 32,
                    name: "Marie Suders",
                    title: "Planetary Health Alliance"
                },
                {
                    id: 33,
                    name: "Madelynn Martinere",
                    title: "Zebras Unite"
                },
                {
                    id: 34,
                    name: "Paul Atkins",
                    title: "ProSocial World"
                },
                {
                    id: 35,
                    name: "Geoff Fitch",
                    title: "Pacific Integral"
                },
                {
                    id: 36,
                    name: "Dan Kittredge",
                    title: "Bionutrients Food Association"
                },
            ]
        },
        donors: {
            message: "These allies have contributed resources to support Hylo's growth and evolution.",
            humans: [
                {
                    id: 50,
                    name: "Jeff Parrett",
                    title: "Rising Foundation"
                },
                {
                    id: 51,
                    name: "Scott Nelson",
                    title: ""
                },
                {
                    id: 52,
                    name: "John Sprague",
                    title: ""
                },
                {
                    id: 53,
                    name: "Sam Turner",
                    title: ""
                },
                {
                    id: 54,
                    name: "Moonlight & Morningstar",
                    title: ""
                },
                {
                    id: 55,
                    name: "Richard Coates",
                    title: ""
                },
                {
                    id: 56,
                    name: "Andy Swindler",
                    title: ""
                },
                {
                    id: 57,
                    name: "Rebecca Rachmany",
                    title: ""
                },
            ]
        }
    }

    const Contributor = ({id, name, title}) => 
        <li key={id}>
            <img src="" alt="" className="" />
            <div className="contributorName">
                <h4>{name}</h4>
                <h5>{title}</h5>
            </div>
        </li>
    
    return (
        <div className="contributors">
            { isActive ? 
                <div className="contributorsDetail">
                    <h2>Hylo is built with care</h2>
                    <p>Hylo is brought to you through the generosity, dedication, and collaboration of many contributors. 
                    From the current core team, to everyone who has committed code or provided feedback,
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
                    </div>
                </div> : <button onClick={() => setActive(true)}><h3>View Contributors</h3></button>
            }
        </div>
    );
}

export default Contributors
