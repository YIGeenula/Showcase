"use client";
import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext({
    isLoading: true,
    finishLoading: () => { },
});

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
    };

    return (
        <LoadingContext.Provider value={{ isLoading, finishLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);
