import React, { Component } from 'react'

export default class Battle extends Component {
    render() {
        return (
            <div>

                <section className={styles['combat-top']}>
                    <div className={styles['combat-health-bar']}>
                        HP GOES HERE
                    </div>
                </section>
                <section className={styles['combat-middle']}>
                    <div className={styles['combat-player-sprite']}></div>
                    <div className={styles['combat-enemy-sprite']}></div>
                </section>
                <section className={styles['combat-bot']}>
                    <div className={styles['combat-bot-left']}>
                        <div className={styles['player-cards']}>
                            <div className={styles['player-deck']}></div>
                            <div className={styles['player-discard']}></div>
                        </div>
                        <div className={styles['player-alebrijes']}></div>
                    </div>
                    <div className={styles['combat-bot-middle']}>
                        <div className={styles['player-hand']}></div>
                        <div className={styles['player-energy']}></div>
                    </div>
                    <div className={styles['combat-bot-right']}>
                        <div className={styles['player-potions']}></div>
                    </div>
                </section>
            </div>
        )
    }
}
