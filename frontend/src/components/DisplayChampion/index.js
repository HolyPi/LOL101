import React, { useState, useEffect, Fragment } from 'react'
const axios = require("axios")

function DisplayChampion() {
    const [champion, setChampion] = useState([])
    useEffect( () => {
        async function postrequest() {
            const champion = "Tryndamere"
            const data = await axios({
                url: 'http://localhost:5000/graphql',
                method: 'post',
                data: {
                    query: `
                    query Champion {
                        champion(name: "${champion}") {
                            id
                            name
                            title
                            image {
                                full
                            }
                            skins {
                                name
                                num
                            }
                            allytips
                            enemytips
                            tags
                            lore
                            info {
                                difficulty
                            }
                            spells {
                                name
                                description
                                tooltip
                                cooldownBurn
                            }
                            passive {
                                name
                                description
                                image {
                                    full
                                }
                            }
                            recommended {
                                title
                                blocks {
                                    type
                                    showIfSummonerSpell
                                    items {
                                    id
                                    count
                                    }
                                }
                            }
                        }
                    }
                    `
                }
            })
            // console.log(data.data.data.champion)
            const {id, name, image, title, info, lore, allytips, enemytips, tags, skins, passive, spells} = data.data.data.champion
            const champion_JSX = (
                <Fragment>
                    <h1>{name}</h1>
                    <h1>Title: {title}</h1>
                    <h1>Difficulty: {info.difficulty}</h1>
                    <h1>Icon: <img src={`http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/${image.full}`} alt={name}/></h1>
                    <h1>Lore: {lore}</h1>
                    <h1>Tags: {tags.map((tag) => {
                        return <p>{tag}</p>
                    })}</h1>
                    <h1>Ally Tips: {allytips.map((tip) => {
                        return <p>{tip}</p>
                    })}</h1>
                    <h1>Enemy Tips: {enemytips.map((tip) => {
                        return <p>{tip}</p>
                    })}</h1>
                    <h1>Skins:</h1>
                    {skins.map((skin) => {
                        return (
                            <div>
                                <h1>{skin.name}</h1>
                                <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`} alt={name}/>
                            </div>
                        )
                    })}
                </Fragment>
            )
            setChampion(champion_JSX)
        }
        postrequest()
    }, []) 
    
    return (
        <Fragment>
            {champion}
        </Fragment>
    )
}
export default DisplayChampion