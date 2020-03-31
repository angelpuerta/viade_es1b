import React from "react";
//import LoggedIn from "@solid/react/module/components/LoggedIn";
import { useWebId } from '@solid/react';
import { DivStyle, NavStyle, ButtonStyle, Astyle, DivStyle2, DivStyle3 } from './nav-bar.style';
import { DropdownButton, DropdownItem } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';


const NavBar = props => {

    const name = useWebId();
    const { t } = useTranslation();


    return (
        // <LoggedIn>
        <NavStyle>
            <a href="#/"><img src={process.env.PUBLIC_URL + "/img/inrupt.svg"} width="225" height="75" alt="" /></a>
            <DivStyle><Astyle href="#/map"><img src={process.env.PUBLIC_URL + "/img/icon/map.svg"} width="25" height="25" alt="" />{t('navBar.map')}</Astyle></DivStyle>
            <DivStyle><Astyle href="#/createRoute"><img src={process.env.PUBLIC_URL + "/img/icon/newRoute.svg"} width="25" height="25" alt="" /> {t('navBar.createRoute')}</Astyle></DivStyle>
            <DivStyle><Astyle href="#/download"><img src={process.env.PUBLIC_URL + "/img/icon/download.svg"} width="25" height="25" alt="" /> {t('navBar.download')}</Astyle></DivStyle>
            <DivStyle><Astyle href="#/friends"><img src={process.env.PUBLIC_URL + "/img/icon/friendship.svg"} width="25" height="25" alt="" /> {t('navBar.friends')}</Astyle></DivStyle>
            <DivStyle><Astyle href={name}><img src={process.env.PUBLIC_URL + "/img/icon/empty-profile.svg"} width="25" height="25" alt="" /> {t('navBar.profile')}</Astyle></DivStyle>
            <DivStyle3>
                <DropdownButton variant="white" title={<img src={process.env.PUBLIC_URL + "/img/icon/subject.svg"} width="25" height="25" alt="" />}>
                    <DropdownItem>
                        <div onClick={() => i18n.changeLanguage("en")}> ENG </div>
                    </DropdownItem>
                    <DropdownItem>
                        <div onClick={() => i18n.changeLanguage("es")}> ESP </div>
                    </DropdownItem>
                </DropdownButton>
            </DivStyle3>
            <DivStyle2><ButtonStyle><img src={process.env.PUBLIC_URL + "/img/icon/logout.svg"} width="25" height="25" alt="Logout" /></ButtonStyle></DivStyle2>
        </NavStyle>
        // </LoggedIn>

    );
}
export default NavBar;
