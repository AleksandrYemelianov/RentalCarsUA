import { LinkRedirect } from 'components/LinkRedirect/LinkRedirect';
import { HOME_DESCRIPTION } from 'constants/homeDescription';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCarsEmpty, setLoadMore } from 'redux/cars/carsActions';
import { setFilter } from 'redux/filters/filtersAction';
import carImage from '../../images/car-rental.jpg';

import css from './HomePage.module.css';

export const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCarsEmpty());
        dispatch(setLoadMore(false));
        dispatch(setFilter({ page: 1 }));
    }, [dispatch]);
    
    return (
        <>
            <div className={css.homeContainer}>
                <div className={css.homeTitleThumb}>
                    <h1 className={css.homeTitle}>Rental Car</h1>
                    <p className={css.homeDescription}>{HOME_DESCRIPTION}</p>
                    <LinkRedirect to={'catalog'} text={'Select car'} />
                </div>
                <div className={css.homeWrapperImg}>
                    <img src={carImage} alt="rental-car" />
                </div>
            </div>
        </>
    )
};
