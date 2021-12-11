import React from 'react';
import { LineChart, XAxis, YAxis, Grid, Decorator } from 'react-native-svg-charts';
import { View } from 'react-native'

export default function CoinChart(props) {
    const { coin } = props;

    const percent_change_24h = coin.percent_change_24h
    const percent_change_1h = coin.percent_change_1h
    const percent_change_7d = coin.percent_change_7d

    const price_usd = coin.price_usd


    console.log(coin.percent_change_7d);


    const data = [
        100,
        200,
        300
    ]



    ///........



    const xAxesSvg = {
        fontSize: 12,
        fill: "black",
        rotation: 70,
        originY: 15,
        y: 10
    };
    const yAxesSvg = { fontSize: 12, fill: "black" };
    const verticalContentInset = { left: 10, right: 10, top: 10, bottom: 10 };
    const xAxisHeight = 50;

    var date = new Date();

    var xAxisData = [
        date.getDate(),
        date.getDate() - 1,
        date.getDate() - 2,
        date.getDate() - 3,
        date.getDate() - 4,
        date.getDate() - 5,
        date.getDate() - 6]

    console.log(xAxisData);


    var yAxisData = [0];
    for (var i = 0; i < data.length; i++) {
        yAxisData.push(data[i].yValue);
    }

    //.........


    return (
        <View
            style={{
                paddingRight: 10,
                height: 400,
                padding: 0,
                flexDirection: "row"
            }}
        >
            <YAxis
                data={yAxisData}
                yAccessor={({ item }) => item}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={yAxesSvg}
                formatLabel={value => value + " "}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={data}
                    yAccessor={({ item }) => item.yValue}
                    xAccessor={({ item }) => item.xValue}
                    yMin={0}
                    yMax={yAxisData[yAxisData.length - 1]}
                    xMin={xAxisData[0].xValue}
                    xMax={xAxisData[xAxisData.length - 1].xValue}
                    contentInset={verticalContentInset}
                    svg={{ stroke: "rgb(134, 65, 244)" }}
                >
                    {/* <Grid />
                    <Decorator /> */}
                </LineChart>
                <XAxis
                    style={{ marginHorizontal: -10, height: xAxisHeight }}
                    data={xAxisData}
                    xAccessor={({ item }) => item.xValue}
                    formatLabel={value => {
                        //need spaces in order for last time ti fit in screen-else it disappears
                        return "     " + new Date.format(value, "DD:MM:YY");
                    }
                    }
                    contentInset={{ left: 10, right: 10 }}
                    svg={xAxesSvg}
                />
            </View>
        </View>
    );
}

function formatDate(date) {

    // var day = date.getDate()
    // var month = date.getMonth()
    // var year = date.getFullYear()

    // for (var i = 7; i--; i > 0) [
    //     day -= i 
    // ]

    // if (month < 10) {
    //     console.log(`${day}-0${month}-${year}`)
    // } else {
    //     console.log(`${day}-${month}-${year}`)
    // }
}


function percentage(percent, total) {

    return ((percent / 100) * total).toFixed(2)
}
