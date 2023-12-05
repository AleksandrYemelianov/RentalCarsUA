import React from 'react'
import { nanoid } from 'nanoid'
import { collectCardInfo } from 'utils/collectCardInfo';

import css from './CarCardDetails.module.css';

export const CarCardDetails = ({ car }) => {
    const carInfo = collectCardInfo(car)

    return (
        <ul className={css.carDetailsContainer}>
            {carInfo.map(info => <li key={nanoid()} className={css.carDetailsText}>{info}</li>)}
        </ul>
    )
};
