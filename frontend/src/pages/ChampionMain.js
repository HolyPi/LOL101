import React from 'react'
import Navbar from '../components/Navbar'
import DisplayChampions from '../components/DisplayChampions'

export default function ChampionMain() {
    return (
        <div>
            <Navbar/>
            <main>
                <section className="championl">
                    <div className="champions">
                    <div className="rectangle">
                    <h3>Choose Your<text> Legend</text></h3>
                    </div>
                    <DisplayChampions/>
                    </div>
                </section>
            </main>
        </div>
    )
}