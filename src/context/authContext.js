import React, { useState, createContext } from 'react';

export const AuthContext = createContext({
    auth: undefined,
    login: () => { },
    logout: () => { },
    setTotalCoins: () => { },
    coinsTotal: [],
    coinsFilter: [],
    updateCoinList: () => { },
});

export function AuthProvider(props) {
    const { children } = props;
    const [auth, setAuth] = useState(undefined);
    const [coinsFilter, setCoinsFilter] = useState([]);
    const [coinsTotal, setCoinsTotal] = useState([]);

    const login = (userData) => {
        setAuth(userData);
    }

    const logout = () => {
        setAuth(undefined);
    }

    const setTotalCoins = (coins) => {
        setCoinsTotal(coins);
    }

    const updateCoinList = (filter) => {
        var filterCoins = [];
        setCoinsFilter([]);
        coinsTotal.forEach(coin => {
            if (coin.percent_change_24h >= filter) {
                filterCoins.push(coin);
            }
        });
        setCoinsFilter(filterCoins);
    }

    const valueContext = {
        auth,
        login,
        logout,
        setTotalCoins,
        coinsTotal,
        coinsFilter,
        updateCoinList
    };

    return (
        <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
    );

}