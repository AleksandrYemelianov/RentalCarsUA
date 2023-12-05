import { Container } from 'components/Container/Container';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Main } from 'components/Main/Main';
import { Section } from 'components/Section/Section';
import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css'

const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <nav className={css.header}>
                    <NavLink to='/' className={({ isActive }) => isActive ? css.active : css.link}>Home</NavLink>
                    <NavLink to='/catalog' className={({ isActive }) => isActive ? css.active : css.link}>Catalog</NavLink>
                    <NavLink to='/favorites' className={({ isActive }) => isActive ? css.active : css.link}>Favorites</NavLink>
                </nav>
            </Header>
            <Main>
                <Section>
                    <Suspense fallback={<Loader/>}>
                        <Outlet />
                    </Suspense>
                </Section>
            </Main>
        </Container>
    );
};

export default SharedLayout