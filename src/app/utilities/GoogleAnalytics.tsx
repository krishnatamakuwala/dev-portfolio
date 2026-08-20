'use strict';
'use client';

import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export default function GoogleAnalytics() {
    useEffect(() => {
        const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
        if (gaId) {
            ReactGA.initialize(gaId);
        }
    }, []);

    return null;
}

interface GAEvent {
    action: string;
    category: string;
    label?: string;
    value?: number;
}

export const sendGAEvent = ({ action, category, label, value }: GAEvent) => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
        ReactGA.event({
            action,
            category,
            label,
            value,
        });
    }
};