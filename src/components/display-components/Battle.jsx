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
                    <div className={styles['combat-bot-left']}></div>
                    <div className={styles['combat-bot-middle']}></div>
                    <div className={styles['combat-bot-right']}></div>
                </section>
            </div>
        )
    }
}
