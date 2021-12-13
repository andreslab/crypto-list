import React from 'react';
import { LineChart, XAxis, YAxis, Grid, Decorator } from 'react-native-svg-charts';
import { View } from 'react-native'

export default function CoinChart(props) {
    const { coin } = props;

    const percent_change_24h = coin.percent_change_24h
    const percent_change_1h = coin.percent_change_1h
    const percent_change_7d = coin.percent_change_7d
    const price_usd = coin.price_usd

    const data = [
        calculeValue(percent_change_7d, price_usd),
        calculeValue(percent_change_24h, price_usd),
        calculeValue(percent_change_1h, price_usd),
    ]
    console.log(data)

    // const data = [50, 10, 40, 95, -4, -24, 85]

    var date = new Date();

    var xAxisData = [
        date.getDate() - 6,
        date.getDate() - 1,
        date.getDate()]

    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30


    return (
        <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
            <YAxis
                data={data}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={data}
                    contentInset={verticalContentInset}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                >
                    <Grid />
                </LineChart>
                <XAxis
                    style={{ marginHorizontal: -10, height: xAxisHeight }}
                    data={data}
                    formatLabel={(value, index) => formatDate(xAxisData[index])}
                    contentInset={{ left: 10, right: 10 }}
                    svg={axesSvg}
                />
            </View>
        </View>
    );
}

function formatDate(day) {
    var date = new Date();
    return `${day}/${date.getMonth()}`;
}

function calculeValue(percent, total) {
    const percentValue = (percent / 100) * total
    return (total - percentValue)
}
