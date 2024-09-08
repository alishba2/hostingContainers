import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import "../style/pages/_hosting.scss"; // Link to the SCSS file

import Footer from './footer';

export default function Hosting() {
    const { t } = useTranslation(); // Initialize translation hook

    return (
        <div className="hosting-container">
            <h1>{t('hosting1.title')}</h1>
            <p>{t('hosting1.description')}</p>
            <div className="hosting-plans">
                <div className="plan">
                    <h2>{t('hosting1.standard.title')}</h2>
                    <ul>
                        <li><strong>{t('hosting1.standard.powerRate')}</strong> <span>$0.07/kWh</span></li>
                        <li><strong>{t('hosting1.standard.cooling')}</strong> <span>{t('hosting1.standard.coolingValue')}</span></li>
                        <li><strong>{t('hosting1.standard.location')}</strong> <span>{t('hosting1.standard.locationValue')}</span></li>
                        <li><strong>{t('hosting1.standard.energy')}</strong> <span>{t('hosting1.standard.energyValue')}</span></li>
                        <li><strong>{t('hosting1.standard.hashShare')}</strong> <span>{t('hosting1.standard.hashShareValue')}</span></li>
                        <li><strong>{t('hosting1.standard.lifespan')}</strong> <span>{t('hosting1.standard.lifespanValue')}</span></li>
                        <li><strong>{t('hosting1.standard.contractDuration')}</strong> <span>{t('hosting1.standard.contractDurationValue')}</span></li>
                    </ul>
                    <button className="get-started-btn">{t('hosting1.getStarted')}</button>
                </div>
                <div className="plan plan-highlight">
                    <h2>{t('hosting1.premium.title')}</h2>
                    <ul>
                        <li><strong>{t('hosting1.premium.powerRate')}</strong> <span>$0.07/kWh</span></li>
                        <li><strong>{t('hosting1.premium.cooling')}</strong> <span>{t('hosting1.premium.coolingValue')}</span></li>
                        <li><strong>{t('hosting1.premium.location')}</strong> <span>{t('hosting1.premium.locationValue')}</span></li>
                        <li><strong>{t('hosting1.premium.energy')}</strong> <span>{t('hosting1.premium.energyValue')}</span></li>
                        <li><strong>{t('hosting1.premium.hashShare')}</strong> <span>{t('hosting1.premium.hashShareValue')}</span></li>
                        <li><strong>{t('hosting1.premium.lifespan')}</strong> <span>{t('hosting1.premium.lifespanValue')}</span></li>
                        <li><strong>{t('hosting1.premium.contractDuration')}</strong> <span>{t('hosting1.premium.contractDurationValue')}</span></li>
                    </ul>
                    <button className="get-started-btn">{t('hosting1.getStarted')}</button>
                </div>
                <div className="plan">
                    <h2>{t('hosting1.hydro.title')}</h2>
                    <ul>
                        <li><strong>{t('hosting1.hydro.powerRate')}</strong> <span>$0.07/kWh</span></li>
                        <li><strong>{t('hosting1.hydro.cooling')}</strong> <span>{t('hosting1.hydro.coolingValue')}</span></li>
                        <li><strong>{t('hosting1.hydro.location')}</strong> <span>{t('hosting1.hydro.locationValue')}</span></li>
                        <li><strong>{t('hosting1.hydro.energy')}</strong> <span>{t('hosting1.hydro.energyValue')}</span></li>
                        <li><strong>{t('hosting1.hydro.hashShare')}</strong> <span>{t('hosting1.hydro.hashShareValue')}</span></li>
                        <li><strong>{t('hosting1.hydro.lifespan')}</strong> <span>{t('hosting1.hydro.lifespanValue')}</span></li>
                        <li><strong>{t('hosting1.hydro.contractDuration')}</strong> <span>{t('hosting1.hydro.contractDurationValue')}</span></li>
                    </ul>
                    <button className="get-started-btn">{t('hosting1.getStarted')}</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
