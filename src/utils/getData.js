
// Structure

// {
//     "dailyconfirmed": "1",
//     "dailydeceased": "0",
//     "dailyrecovered": "0",
//     "date": "30 January 2020",
//     "dateymd": "2020-01-30",
//     "totalconfirmed": "1",
//     "totaldeceased": "0",
//     "totalrecovered": "0"
// }


let casesTimeSeries = [
    {
        "dailyconfirmed": "1",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "30 January 2020",
        "dateymd": "2020-01-30",
        "totalconfirmed": "1",
        "totaldeceased": "0",
        "totalrecovered": "0"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "31 January 2020",
        "dateymd": "2020-01-31",
        "totalconfirmed": "1",
        "totaldeceased": "0",
        "totalrecovered": "0"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "1 February 2020",
        "dateymd": "2020-02-01",
        "totalconfirmed": "1",
        "totaldeceased": "0",
        "totalrecovered": "0"
    },
    {
        "dailyconfirmed": "1",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "2 February 2020",
        "dateymd": "2020-02-02",
        "totalconfirmed": "2",
        "totaldeceased": "0",
        "totalrecovered": "0"
    },
    {
        "dailyconfirmed": "1",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "3 February 2020",
        "dateymd": "2020-02-03",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "0"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "4 February 2020",
        "dateymd": "2020-02-04",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "0"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "5 February 2020",
        "dateymd": "2020-02-05",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "0"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "6 February 2020",
        "dateymd": "2020-02-06",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "0"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "7 February 2020",
        "dateymd": "2020-02-07",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "0"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "8 February 2020",
        "dateymd": "2020-02-08",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "0"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "9 February 2020",
        "dateymd": "2020-02-09",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "0"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "10 February 2020",
        "dateymd": "2020-02-10",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "0"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "11 February 2020",
        "dateymd": "2020-02-11",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "0"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "12 February 2020",
        "dateymd": "2020-02-12",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "0"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "1",
        "date": "13 February 2020",
        "dateymd": "2020-02-13",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "1"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "14 February 2020",
        "dateymd": "2020-02-14",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "1"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "15 February 2020",
        "dateymd": "2020-02-15",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "1"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "1",
        "date": "16 February 2020",
        "dateymd": "2020-02-16",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "2"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "17 February 2020",
        "dateymd": "2020-02-17",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "2"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "18 February 2020",
        "dateymd": "2020-02-18",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "2"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "19 February 2020",
        "dateymd": "2020-02-19",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "2"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "1",
        "date": "20 February 2020",
        "dateymd": "2020-02-20",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "21 February 2020",
        "dateymd": "2020-02-21",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "22 February 2020",
        "dateymd": "2020-02-22",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "23 February 2020",
        "dateymd": "2020-02-23",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "24 February 2020",
        "dateymd": "2020-02-24",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "25 February 2020",
        "dateymd": "2020-02-25",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "26 February 2020",
        "dateymd": "2020-02-26",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "27 February 2020",
        "dateymd": "2020-02-27",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "28 February 2020",
        "dateymd": "2020-02-28",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "29 February 2020",
        "dateymd": "2020-02-29",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "0",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "1 March 2020",
        "dateymd": "2020-03-01",
        "totalconfirmed": "3",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "2",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "2 March 2020",
        "dateymd": "2020-03-02",
        "totalconfirmed": "5",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "1",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "3 March 2020",
        "dateymd": "2020-03-03",
        "totalconfirmed": "6",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "22",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "4 March 2020",
        "dateymd": "2020-03-04",
        "totalconfirmed": "28",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "2",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "5 March 2020",
        "dateymd": "2020-03-05",
        "totalconfirmed": "30",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "1",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "6 March 2020",
        "dateymd": "2020-03-06",
        "totalconfirmed": "31",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "3",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "7 March 2020",
        "dateymd": "2020-03-07",
        "totalconfirmed": "34",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "5",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "8 March 2020",
        "dateymd": "2020-03-08",
        "totalconfirmed": "39",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "9",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "9 March 2020",
        "dateymd": "2020-03-09",
        "totalconfirmed": "48",
        "totaldeceased": "0",
        "totalrecovered": "3"
    },
    {
        "dailyconfirmed": "15",
        "dailydeceased": "0",
        "dailyrecovered": "1",
        "date": "10 March 2020",
        "dateymd": "2020-03-10",
        "totalconfirmed": "63",
        "totaldeceased": "0",
        "totalrecovered": "4"
    },
    {
        "dailyconfirmed": "8",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "11 March 2020",
        "dateymd": "2020-03-11",
        "totalconfirmed": "71",
        "totaldeceased": "0",
        "totalrecovered": "4"
    },
    {
        "dailyconfirmed": "10",
        "dailydeceased": "1",
        "dailyrecovered": "0",
        "date": "12 March 2020",
        "dateymd": "2020-03-12",
        "totalconfirmed": "81",
        "totaldeceased": "1",
        "totalrecovered": "4"
    },
    {
        "dailyconfirmed": "10",
        "dailydeceased": "0",
        "dailyrecovered": "6",
        "date": "13 March 2020",
        "dateymd": "2020-03-13",
        "totalconfirmed": "91",
        "totaldeceased": "1",
        "totalrecovered": "10"
    },
    {
        "dailyconfirmed": "11",
        "dailydeceased": "1",
        "dailyrecovered": "0",
        "date": "14 March 2020",
        "dateymd": "2020-03-14",
        "totalconfirmed": "102",
        "totaldeceased": "2",
        "totalrecovered": "10"
    },
    {
        "dailyconfirmed": "10",
        "dailydeceased": "0",
        "dailyrecovered": "3",
        "date": "15 March 2020",
        "dateymd": "2020-03-15",
        "totalconfirmed": "112",
        "totaldeceased": "2",
        "totalrecovered": "13"
    },
    {
        "dailyconfirmed": "14",
        "dailydeceased": "0",
        "dailyrecovered": "1",
        "date": "16 March 2020",
        "dateymd": "2020-03-16",
        "totalconfirmed": "126",
        "totaldeceased": "2",
        "totalrecovered": "14"
    },
    {
        "dailyconfirmed": "20",
        "dailydeceased": "1",
        "dailyrecovered": "1",
        "date": "17 March 2020",
        "dateymd": "2020-03-17",
        "totalconfirmed": "146",
        "totaldeceased": "3",
        "totalrecovered": "15"
    },
    {
        "dailyconfirmed": "25",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "18 March 2020",
        "dateymd": "2020-03-18",
        "totalconfirmed": "171",
        "totaldeceased": "3",
        "totalrecovered": "15"
    },
    {
        "dailyconfirmed": "27",
        "dailydeceased": "1",
        "dailyrecovered": "5",
        "date": "19 March 2020",
        "dateymd": "2020-03-19",
        "totalconfirmed": "198",
        "totaldeceased": "4",
        "totalrecovered": "20"
    },
    {
        "dailyconfirmed": "58",
        "dailydeceased": "0",
        "dailyrecovered": "3",
        "date": "20 March 2020",
        "dateymd": "2020-03-20",
        "totalconfirmed": "256",
        "totaldeceased": "4",
        "totalrecovered": "23"
    },
    {
        "dailyconfirmed": "78",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "21 March 2020",
        "dateymd": "2020-03-21",
        "totalconfirmed": "334",
        "totaldeceased": "4",
        "totalrecovered": "23"
    },
    {
        "dailyconfirmed": "69",
        "dailydeceased": "3",
        "dailyrecovered": "0",
        "date": "22 March 2020",
        "dateymd": "2020-03-22",
        "totalconfirmed": "403",
        "totaldeceased": "7",
        "totalrecovered": "23"
    },
    {
        "dailyconfirmed": "94",
        "dailydeceased": "2",
        "dailyrecovered": "2",
        "date": "23 March 2020",
        "dateymd": "2020-03-23",
        "totalconfirmed": "497",
        "totaldeceased": "9",
        "totalrecovered": "25"
    },
    {
        "dailyconfirmed": "74",
        "dailydeceased": "1",
        "dailyrecovered": "15",
        "date": "24 March 2020",
        "dateymd": "2020-03-24",
        "totalconfirmed": "571",
        "totaldeceased": "10",
        "totalrecovered": "40"
    },
    {
        "dailyconfirmed": "86",
        "dailydeceased": "1",
        "dailyrecovered": "3",
        "date": "25 March 2020",
        "dateymd": "2020-03-25",
        "totalconfirmed": "657",
        "totaldeceased": "11",
        "totalrecovered": "43"
    },
    {
        "dailyconfirmed": "73",
        "dailydeceased": "5",
        "dailyrecovered": "7",
        "date": "26 March 2020",
        "dateymd": "2020-03-26",
        "totalconfirmed": "730",
        "totaldeceased": "16",
        "totalrecovered": "50"
    },
    {
        "dailyconfirmed": "153",
        "dailydeceased": "3",
        "dailyrecovered": "25",
        "date": "27 March 2020",
        "dateymd": "2020-03-27",
        "totalconfirmed": "883",
        "totaldeceased": "19",
        "totalrecovered": "75"
    },
    {
        "dailyconfirmed": "136",
        "dailydeceased": "5",
        "dailyrecovered": "10",
        "date": "28 March 2020",
        "dateymd": "2020-03-28",
        "totalconfirmed": "1019",
        "totaldeceased": "24",
        "totalrecovered": "85"
    },
    {
        "dailyconfirmed": "120",
        "dailydeceased": "3",
        "dailyrecovered": "17",
        "date": "29 March 2020",
        "dateymd": "2020-03-29",
        "totalconfirmed": "1139",
        "totaldeceased": "27",
        "totalrecovered": "102"
    },
    {
        "dailyconfirmed": "187",
        "dailydeceased": "14",
        "dailyrecovered": "35",
        "date": "30 March 2020",
        "dateymd": "2020-03-30",
        "totalconfirmed": "1326",
        "totaldeceased": "41",
        "totalrecovered": "137"
    },
    {
        "dailyconfirmed": "309",
        "dailydeceased": "6",
        "dailyrecovered": "13",
        "date": "31 March 2020",
        "dateymd": "2020-03-31",
        "totalconfirmed": "1635",
        "totaldeceased": "47",
        "totalrecovered": "150"
    },
    {
        "dailyconfirmed": "424",
        "dailydeceased": "6",
        "dailyrecovered": "19",
        "date": "1 April 2020",
        "dateymd": "2020-04-01",
        "totalconfirmed": "2059",
        "totaldeceased": "53",
        "totalrecovered": "169"
    },
    {
        "dailyconfirmed": "486",
        "dailydeceased": "16",
        "dailyrecovered": "22",
        "date": "2 April 2020",
        "dateymd": "2020-04-02",
        "totalconfirmed": "2545",
        "totaldeceased": "69",
        "totalrecovered": "191"
    },
    {
        "dailyconfirmed": "560",
        "dailydeceased": "14",
        "dailyrecovered": "39",
        "date": "3 April 2020",
        "dateymd": "2020-04-03",
        "totalconfirmed": "3105",
        "totaldeceased": "83",
        "totalrecovered": "230"
    },
    {
        "dailyconfirmed": "579",
        "dailydeceased": "13",
        "dailyrecovered": "56",
        "date": "4 April 2020",
        "dateymd": "2020-04-04",
        "totalconfirmed": "3684",
        "totaldeceased": "96",
        "totalrecovered": "286"
    },
    {
        "dailyconfirmed": "609",
        "dailydeceased": "22",
        "dailyrecovered": "43",
        "date": "5 April 2020",
        "dateymd": "2020-04-05",
        "totalconfirmed": "4293",
        "totaldeceased": "118",
        "totalrecovered": "329"
    },
    {
        "dailyconfirmed": "484",
        "dailydeceased": "16",
        "dailyrecovered": "65",
        "date": "6 April 2020",
        "dateymd": "2020-04-06",
        "totalconfirmed": "4777",
        "totaldeceased": "134",
        "totalrecovered": "394"
    },
    {
        "dailyconfirmed": "573",
        "dailydeceased": "27",
        "dailyrecovered": "75",
        "date": "7 April 2020",
        "dateymd": "2020-04-07",
        "totalconfirmed": "5350",
        "totaldeceased": "161",
        "totalrecovered": "469"
    },
    {
        "dailyconfirmed": "565",
        "dailydeceased": "20",
        "dailyrecovered": "96",
        "date": "8 April 2020",
        "dateymd": "2020-04-08",
        "totalconfirmed": "5915",
        "totaldeceased": "181",
        "totalrecovered": "565"
    },
    {
        "dailyconfirmed": "813",
        "dailydeceased": "46",
        "dailyrecovered": "70",
        "date": "9 April 2020",
        "dateymd": "2020-04-09",
        "totalconfirmed": "6728",
        "totaldeceased": "227",
        "totalrecovered": "635"
    },
    {
        "dailyconfirmed": "871",
        "dailydeceased": "22",
        "dailyrecovered": "151",
        "date": "10 April 2020",
        "dateymd": "2020-04-10",
        "totalconfirmed": "7599",
        "totaldeceased": "249",
        "totalrecovered": "786"
    },
    {
        "dailyconfirmed": "854",
        "dailydeceased": "41",
        "dailyrecovered": "186",
        "date": "11 April 2020",
        "dateymd": "2020-04-11",
        "totalconfirmed": "8453",
        "totaldeceased": "290",
        "totalrecovered": "972"
    },
    {
        "dailyconfirmed": "758",
        "dailydeceased": "42",
        "dailyrecovered": "114",
        "date": "12 April 2020",
        "dateymd": "2020-04-12",
        "totalconfirmed": "9211",
        "totaldeceased": "332",
        "totalrecovered": "1086"
    },
    {
        "dailyconfirmed": "1243",
        "dailydeceased": "27",
        "dailyrecovered": "112",
        "date": "13 April 2020",
        "dateymd": "2020-04-13",
        "totalconfirmed": "10454",
        "totaldeceased": "359",
        "totalrecovered": "1198"
    },
    {
        "dailyconfirmed": "1031",
        "dailydeceased": "37",
        "dailyrecovered": "167",
        "date": "14 April 2020",
        "dateymd": "2020-04-14",
        "totalconfirmed": "11485",
        "totaldeceased": "396",
        "totalrecovered": "1365"
    },
    {
        "dailyconfirmed": "886",
        "dailydeceased": "27",
        "dailyrecovered": "144",
        "date": "15 April 2020",
        "dateymd": "2020-04-15",
        "totalconfirmed": "12371",
        "totaldeceased": "423",
        "totalrecovered": "1509"
    },
    {
        "dailyconfirmed": "1061",
        "dailydeceased": "26",
        "dailyrecovered": "258",
        "date": "16 April 2020",
        "dateymd": "2020-04-16",
        "totalconfirmed": "13432",
        "totaldeceased": "449",
        "totalrecovered": "1767"
    },
    {
        "dailyconfirmed": "922",
        "dailydeceased": "38",
        "dailyrecovered": "273",
        "date": "17 April 2020",
        "dateymd": "2020-04-17",
        "totalconfirmed": "14354",
        "totaldeceased": "487",
        "totalrecovered": "2040"
    },
    {
        "dailyconfirmed": "1371",
        "dailydeceased": "35",
        "dailyrecovered": "426",
        "date": "18 April 2020",
        "dateymd": "2020-04-18",
        "totalconfirmed": "15725",
        "totaldeceased": "522",
        "totalrecovered": "2466"
    },
    {
        "dailyconfirmed": "1580",
        "dailydeceased": "38",
        "dailyrecovered": "388",
        "date": "19 April 2020",
        "dateymd": "2020-04-19",
        "totalconfirmed": "17305",
        "totaldeceased": "560",
        "totalrecovered": "2854"
    },
    {
        "dailyconfirmed": "1239",
        "dailydeceased": "33",
        "dailyrecovered": "419",
        "date": "20 April 2020",
        "dateymd": "2020-04-20",
        "totalconfirmed": "18544",
        "totaldeceased": "593",
        "totalrecovered": "3273"
    },
    {
        "dailyconfirmed": "1537",
        "dailydeceased": "53",
        "dailyrecovered": "703",
        "date": "21 April 2020",
        "dateymd": "2020-04-21",
        "totalconfirmed": "20081",
        "totaldeceased": "646",
        "totalrecovered": "3976"
    },
    {
        "dailyconfirmed": "1292",
        "dailydeceased": "36",
        "dailyrecovered": "394",
        "date": "22 April 2020",
        "dateymd": "2020-04-22",
        "totalconfirmed": "21373",
        "totaldeceased": "682",
        "totalrecovered": "4370"
    },
    {
        "dailyconfirmed": "1667",
        "dailydeceased": "40",
        "dailyrecovered": "642",
        "date": "23 April 2020",
        "dateymd": "2020-04-23",
        "totalconfirmed": "23040",
        "totaldeceased": "722",
        "totalrecovered": "5012"
    },
    {
        "dailyconfirmed": "1408",
        "dailydeceased": "59",
        "dailyrecovered": "484",
        "date": "24 April 2020",
        "dateymd": "2020-04-24",
        "totalconfirmed": "24448",
        "totaldeceased": "781",
        "totalrecovered": "5496"
    },
    {
        "dailyconfirmed": "1835",
        "dailydeceased": "44",
        "dailyrecovered": "442",
        "date": "25 April 2020",
        "dateymd": "2020-04-25",
        "totalconfirmed": "26283",
        "totaldeceased": "825",
        "totalrecovered": "5938"
    },
    {
        "dailyconfirmed": "1607",
        "dailydeceased": "56",
        "dailyrecovered": "585",
        "date": "26 April 2020",
        "dateymd": "2020-04-26",
        "totalconfirmed": "27890",
        "totaldeceased": "881",
        "totalrecovered": "6523"
    },
    {
        "dailyconfirmed": "1568",
        "dailydeceased": "58",
        "dailyrecovered": "580",
        "date": "27 April 2020",
        "dateymd": "2020-04-27",
        "totalconfirmed": "29458",
        "totaldeceased": "939",
        "totalrecovered": "7103"
    },
    {
        "dailyconfirmed": "1902",
        "dailydeceased": "69",
        "dailyrecovered": "636",
        "date": "28 April 2020",
        "dateymd": "2020-04-28",
        "totalconfirmed": "31360",
        "totaldeceased": "1008",
        "totalrecovered": "7739"
    },
    {
        "dailyconfirmed": "1705",
        "dailydeceased": "71",
        "dailyrecovered": "690",
        "date": "29 April 2020",
        "dateymd": "2020-04-29",
        "totalconfirmed": "33065",
        "totaldeceased": "1079",
        "totalrecovered": "8429"
    },
    {
        "dailyconfirmed": "1801",
        "dailydeceased": "75",
        "dailyrecovered": "630",
        "date": "30 April 2020",
        "dateymd": "2020-04-30",
        "totalconfirmed": "34866",
        "totaldeceased": "1154",
        "totalrecovered": "9059"
    },
    {
        "dailyconfirmed": "2396",
        "dailydeceased": "77",
        "dailyrecovered": "962",
        "date": "1 May 2020",
        "dateymd": "2020-05-01",
        "totalconfirmed": "37262",
        "totaldeceased": "1231",
        "totalrecovered": "10021"
    },
    {
        "dailyconfirmed": "2564",
        "dailydeceased": "92",
        "dailyrecovered": "831",
        "date": "2 May 2020",
        "dateymd": "2020-05-02",
        "totalconfirmed": "39826",
        "totaldeceased": "1323",
        "totalrecovered": "10852"
    },
    {
        "dailyconfirmed": "2952",
        "dailydeceased": "140",
        "dailyrecovered": "911",
        "date": "3 May 2020",
        "dateymd": "2020-05-03",
        "totalconfirmed": "42778",
        "totaldeceased": "1463",
        "totalrecovered": "11763"
    },
    {
        "dailyconfirmed": "3656",
        "dailydeceased": "103",
        "dailyrecovered": "1082",
        "date": "4 May 2020",
        "dateymd": "2020-05-04",
        "totalconfirmed": "46434",
        "totaldeceased": "1566",
        "totalrecovered": "12845"
    },
    {
        "dailyconfirmed": "2971",
        "dailydeceased": "128",
        "dailyrecovered": "1295",
        "date": "5 May 2020",
        "dateymd": "2020-05-05",
        "totalconfirmed": "49405",
        "totaldeceased": "1694",
        "totalrecovered": "14140"
    },
    {
        "dailyconfirmed": "3602",
        "dailydeceased": "91",
        "dailyrecovered": "1161",
        "date": "6 May 2020",
        "dateymd": "2020-05-06",
        "totalconfirmed": "53007",
        "totaldeceased": "1785",
        "totalrecovered": "15301"
    },
    {
        "dailyconfirmed": "3344",
        "dailydeceased": "104",
        "dailyrecovered": "1475",
        "date": "7 May 2020",
        "dateymd": "2020-05-07",
        "totalconfirmed": "56351",
        "totaldeceased": "1889",
        "totalrecovered": "16776"
    },
    {
        "dailyconfirmed": "3339",
        "dailydeceased": "97",
        "dailyrecovered": "1111",
        "date": "8 May 2020",
        "dateymd": "2020-05-08",
        "totalconfirmed": "59690",
        "totaldeceased": "1986",
        "totalrecovered": "17887"
    },
    {
        "dailyconfirmed": "3175",
        "dailydeceased": "115",
        "dailyrecovered": "1414",
        "date": "9 May 2020",
        "dateymd": "2020-05-09",
        "totalconfirmed": "62865",
        "totaldeceased": "2101",
        "totalrecovered": "19301"
    },
    {
        "dailyconfirmed": "4311",
        "dailydeceased": "112",
        "dailyrecovered": "1669",
        "date": "10 May 2020",
        "dateymd": "2020-05-10",
        "totalconfirmed": "67176",
        "totaldeceased": "2213",
        "totalrecovered": "20970"
    },
    {
        "dailyconfirmed": "3592",
        "dailydeceased": "81",
        "dailyrecovered": "1579",
        "date": "11 May 2020",
        "dateymd": "2020-05-11",
        "totalconfirmed": "70768",
        "totaldeceased": "2294",
        "totalrecovered": "22549"
    },
    {
        "dailyconfirmed": "3562",
        "dailydeceased": "120",
        "dailyrecovered": "1905",
        "date": "12 May 2020",
        "dateymd": "2020-05-12",
        "totalconfirmed": "74330",
        "totaldeceased": "2414",
        "totalrecovered": "24454"
    },
    {
        "dailyconfirmed": "3726",
        "dailydeceased": "137",
        "dailyrecovered": "1963",
        "date": "13 May 2020",
        "dateymd": "2020-05-13",
        "totalconfirmed": "78056",
        "totaldeceased": "2551",
        "totalrecovered": "26417"
    },
    {
        "dailyconfirmed": "3991",
        "dailydeceased": "97",
        "dailyrecovered": "1594",
        "date": "14 May 2020",
        "dateymd": "2020-05-14",
        "totalconfirmed": "82047",
        "totaldeceased": "2648",
        "totalrecovered": "28011"
    },
    {
        "dailyconfirmed": "3808",
        "dailydeceased": "104",
        "dailyrecovered": "2234",
        "date": "15 May 2020",
        "dateymd": "2020-05-15",
        "totalconfirmed": "85855",
        "totaldeceased": "2752",
        "totalrecovered": "30245"
    },
    {
        "dailyconfirmed": "4794",
        "dailydeceased": "120",
        "dailyrecovered": "4012",
        "date": "16 May 2020",
        "dateymd": "2020-05-16",
        "totalconfirmed": "90649",
        "totaldeceased": "2872",
        "totalrecovered": "34257"
    },
    {
        "dailyconfirmed": "5049",
        "dailydeceased": "152",
        "dailyrecovered": "2538",
        "date": "17 May 2020",
        "dateymd": "2020-05-17",
        "totalconfirmed": "95698",
        "totaldeceased": "3024",
        "totalrecovered": "36795"
    },
    {
        "dailyconfirmed": "4628",
        "dailydeceased": "131",
        "dailyrecovered": "2482",
        "date": "18 May 2020",
        "dateymd": "2020-05-18",
        "totalconfirmed": "100326",
        "totaldeceased": "3155",
        "totalrecovered": "39277"
    },
    {
        "dailyconfirmed": "6154",
        "dailydeceased": "146",
        "dailyrecovered": "3032",
        "date": "19 May 2020",
        "dateymd": "2020-05-19",
        "totalconfirmed": "106480",
        "totaldeceased": "3301",
        "totalrecovered": "42309"
    },
    {
        "dailyconfirmed": "5720",
        "dailydeceased": "134",
        "dailyrecovered": "3113",
        "date": "20 May 2020",
        "dateymd": "2020-05-20",
        "totalconfirmed": "112200",
        "totaldeceased": "3435",
        "totalrecovered": "45422"
    },
    {
        "dailyconfirmed": "6023",
        "dailydeceased": "148",
        "dailyrecovered": "3131",
        "date": "21 May 2020",
        "dateymd": "2020-05-21",
        "totalconfirmed": "118223",
        "totaldeceased": "3583",
        "totalrecovered": "48553"
    },
    {
        "dailyconfirmed": "6536",
        "dailydeceased": "142",
        "dailyrecovered": "3280",
        "date": "22 May 2020",
        "dateymd": "2020-05-22",
        "totalconfirmed": "124759",
        "totaldeceased": "3725",
        "totalrecovered": "51833"
    },
    {
        "dailyconfirmed": "6667",
        "dailydeceased": "142",
        "dailyrecovered": "2576",
        "date": "23 May 2020",
        "dateymd": "2020-05-23",
        "totalconfirmed": "131424",
        "totaldeceased": "3867",
        "totalrecovered": "54409"
    },
    {
        "dailyconfirmed": "7111",
        "dailydeceased": "156",
        "dailyrecovered": "3285",
        "date": "24 May 2020",
        "dateymd": "2020-05-24",
        "totalconfirmed": "138537",
        "totaldeceased": "4023",
        "totalrecovered": "57694"
    },
    {
        "dailyconfirmed": "6414",
        "dailydeceased": "150",
        "dailyrecovered": "3012",
        "date": "25 May 2020",
        "dateymd": "2020-05-25",
        "totalconfirmed": "144951",
        "totaldeceased": "4173",
        "totalrecovered": "60706"
    },
    {
        "dailyconfirmed": "5907",
        "dailydeceased": "173",
        "dailyrecovered": "3585",
        "date": "26 May 2020",
        "dateymd": "2020-05-26",
        "totalconfirmed": "150858",
        "totaldeceased": "4346",
        "totalrecovered": "64291"
    },
    {
        "dailyconfirmed": "7246",
        "dailydeceased": "188",
        "dailyrecovered": "3434",
        "date": "27 May 2020",
        "dateymd": "2020-05-27",
        "totalconfirmed": "158104",
        "totaldeceased": "4534",
        "totalrecovered": "67725"
    },
    {
        "dailyconfirmed": "7254",
        "dailydeceased": "176",
        "dailyrecovered": "3171",
        "date": "28 May 2020",
        "dateymd": "2020-05-28",
        "totalconfirmed": "165358",
        "totaldeceased": "4710",
        "totalrecovered": "70896"
    },
    {
        "dailyconfirmed": "8138",
        "dailydeceased": "269",
        "dailyrecovered": "11735",
        "date": "29 May 2020",
        "dateymd": "2020-05-29",
        "totalconfirmed": "173496",
        "totaldeceased": "4979",
        "totalrecovered": "82631"
    },
    {
        "dailyconfirmed": "8364",
        "dailydeceased": "205",
        "dailyrecovered": "4303",
        "date": "30 May 2020",
        "dateymd": "2020-05-30",
        "totalconfirmed": "181860",
        "totaldeceased": "5184",
        "totalrecovered": "86934"
    },
    {
        "dailyconfirmed": "8789",
        "dailydeceased": "222",
        "dailyrecovered": "4928",
        "date": "31 May 2020",
        "dateymd": "2020-05-31",
        "totalconfirmed": "190649",
        "totaldeceased": "5406",
        "totalrecovered": "91862"
    },
    {
        "dailyconfirmed": "7723",
        "dailydeceased": "201",
        "dailyrecovered": "3882",
        "date": "1 June 2020",
        "dateymd": "2020-06-01",
        "totalconfirmed": "198372",
        "totaldeceased": "5607",
        "totalrecovered": "95744"
    },
    {
        "dailyconfirmed": "8812",
        "dailydeceased": "222",
        "dailyrecovered": "4531",
        "date": "2 June 2020",
        "dateymd": "2020-06-02",
        "totalconfirmed": "207187",
        "totaldeceased": "5829",
        "totalrecovered": "100275"
    },
    {
        "dailyconfirmed": "9689",
        "dailydeceased": "259",
        "dailyrecovered": "3789",
        "date": "3 June 2020",
        "dateymd": "2020-06-03",
        "totalconfirmed": "216876",
        "totaldeceased": "6088",
        "totalrecovered": "104064"
    },
    {
        "dailyconfirmed": "9847",
        "dailydeceased": "274",
        "dailyrecovered": "4390",
        "date": "4 June 2020",
        "dateymd": "2020-06-04",
        "totalconfirmed": "226723",
        "totaldeceased": "6362",
        "totalrecovered": "108454"
    },
    {
        "dailyconfirmed": "9472",
        "dailydeceased": "286",
        "dailyrecovered": "4770",
        "date": "5 June 2020",
        "dateymd": "2020-06-05",
        "totalconfirmed": "236195",
        "totaldeceased": "6648",
        "totalrecovered": "113224"
    },
    {
        "dailyconfirmed": "10408",
        "dailydeceased": "297",
        "dailyrecovered": "5433",
        "date": "6 June 2020",
        "dateymd": "2020-06-06",
        "totalconfirmed": "246603",
        "totaldeceased": "6945",
        "totalrecovered": "118657"
    },
    {
        "dailyconfirmed": "10882",
        "dailydeceased": "261",
        "dailyrecovered": "5191",
        "date": "7 June 2020",
        "dateymd": "2020-06-07",
        "totalconfirmed": "257485",
        "totaldeceased": "7206",
        "totalrecovered": "123848"
    },
    {
        "dailyconfirmed": "8536",
        "dailydeceased": "271",
        "dailyrecovered": "5171",
        "date": "8 June 2020",
        "dateymd": "2020-06-08",
        "totalconfirmed": "266021",
        "totaldeceased": "7477",
        "totalrecovered": "129019"
    },
    {
        "dailyconfirmed": "9981",
        "dailydeceased": "272",
        "dailyrecovered": "5634",
        "date": "9 June 2020",
        "dateymd": "2020-06-09",
        "totalconfirmed": "276002",
        "totaldeceased": "7749",
        "totalrecovered": "134653"
    },
    {
        "dailyconfirmed": "11156",
        "dailydeceased": "358",
        "dailyrecovered": "6275",
        "date": "10 June 2020",
        "dateymd": "2020-06-10",
        "totalconfirmed": "287158",
        "totaldeceased": "8107",
        "totalrecovered": "140928"
    },
    {
        "dailyconfirmed": "11135",
        "dailydeceased": "394",
        "dailyrecovered": "6044",
        "date": "11 June 2020",
        "dateymd": "2020-06-11",
        "totalconfirmed": "298293",
        "totaldeceased": "8501",
        "totalrecovered": "146972"
    },
    {
        "dailyconfirmed": "11306",
        "dailydeceased": "388",
        "dailyrecovered": "7263",
        "date": "12 June 2020",
        "dateymd": "2020-06-12",
        "totalconfirmed": "309599",
        "totaldeceased": "8889",
        "totalrecovered": "154235"
    },
    {
        "dailyconfirmed": "12039",
        "dailydeceased": "309",
        "dailyrecovered": "8092",
        "date": "13 June 2020",
        "dateymd": "2020-06-13",
        "totalconfirmed": "321638",
        "totaldeceased": "9198",
        "totalrecovered": "162327"
    },
    {
        "dailyconfirmed": "11405",
        "dailydeceased": "324",
        "dailyrecovered": "7358",
        "date": "14 June 2020",
        "dateymd": "2020-06-14",
        "totalconfirmed": "333043",
        "totaldeceased": "9522",
        "totalrecovered": "169685"
    },
    {
        "dailyconfirmed": "10032",
        "dailydeceased": "396",
        "dailyrecovered": "10639",
        "date": "15 June 2020",
        "dateymd": "2020-06-15",
        "totalconfirmed": "343075",
        "totaldeceased": "9918",
        "totalrecovered": "180324"
    },
    {
        "dailyconfirmed": "11086",
        "dailydeceased": "2004",
        "dailyrecovered": "7226",
        "date": "16 June 2020",
        "dateymd": "2020-06-16",
        "totalconfirmed": "354161",
        "totaldeceased": "11922",
        "totalrecovered": "187550"
    },
    {
        "dailyconfirmed": "13108",
        "dailydeceased": "341",
        "dailyrecovered": "6890",
        "date": "17 June 2020",
        "dateymd": "2020-06-17",
        "totalconfirmed": "367269",
        "totaldeceased": "12263",
        "totalrecovered": "194440"
    },
    {
        "dailyconfirmed": "13829",
        "dailydeceased": "343",
        "dailyrecovered": "10741",
        "date": "18 June 2020",
        "dateymd": "2020-06-18",
        "totalconfirmed": "381098",
        "totaldeceased": "12606",
        "totalrecovered": "205181"
    },
    {
        "dailyconfirmed": "14740",
        "dailydeceased": "364",
        "dailyrecovered": "9029",
        "date": "19 June 2020",
        "dateymd": "2020-06-19",
        "totalconfirmed": "395838",
        "totaldeceased": "12970",
        "totalrecovered": "214210"
    },
    {
        "dailyconfirmed": "15918",
        "dailydeceased": "308",
        "dailyrecovered": "13974",
        "date": "20 June 2020",
        "dateymd": "2020-06-20",
        "totalconfirmed": "411753",
        "totaldeceased": "13278",
        "totalrecovered": "228184"
    },
    {
        "dailyconfirmed": "15151",
        "dailydeceased": "426",
        "dailyrecovered": "9075",
        "date": "21 June 2020",
        "dateymd": "2020-06-21",
        "totalconfirmed": "426904",
        "totaldeceased": "13704",
        "totalrecovered": "237259"
    },
    {
        "dailyconfirmed": "13560",
        "dailydeceased": "312",
        "dailyrecovered": "10879",
        "date": "22 June 2020",
        "dateymd": "2020-06-22",
        "totalconfirmed": "440464",
        "totaldeceased": "14016",
        "totalrecovered": "248138"
    },
    {
        "dailyconfirmed": "15656",
        "dailydeceased": "468",
        "dailyrecovered": "10462",
        "date": "23 June 2020",
        "dateymd": "2020-06-23",
        "totalconfirmed": "456120",
        "totaldeceased": "14484",
        "totalrecovered": "258600"
    },
    {
        "dailyconfirmed": "16868",
        "dailydeceased": "424",
        "dailyrecovered": "13089",
        "date": "24 June 2020",
        "dateymd": "2020-06-24",
        "totalconfirmed": "472988",
        "totaldeceased": "14908",
        "totalrecovered": "271689"
    },
    {
        "dailyconfirmed": "18205",
        "dailydeceased": "401",
        "dailyrecovered": "13983",
        "date": "25 June 2020",
        "dateymd": "2020-06-25",
        "totalconfirmed": "491193",
        "totaldeceased": "15309",
        "totalrecovered": "285672"
    },
    {
        "dailyconfirmed": "18255",
        "dailydeceased": "381",
        "dailyrecovered": "10246",
        "date": "26 June 2020",
        "dateymd": "2020-06-26",
        "totalconfirmed": "509448",
        "totaldeceased": "15690",
        "totalrecovered": "295918"
    },
    {
        "dailyconfirmed": "20142",
        "dailydeceased": "414",
        "dailyrecovered": "14229",
        "date": "27 June 2020",
        "dateymd": "2020-06-27",
        "totalconfirmed": "529590",
        "totaldeceased": "16104",
        "totalrecovered": "310147"
    },
    {
        "dailyconfirmed": "19610",
        "dailydeceased": "384",
        "dailyrecovered": "11631",
        "date": "28 June 2020",
        "dateymd": "2020-06-28",
        "totalconfirmed": "549200",
        "totaldeceased": "16488",
        "totalrecovered": "321778"
    },
    {
        "dailyconfirmed": "18339",
        "dailydeceased": "417",
        "dailyrecovered": "13497",
        "date": "29 June 2020",
        "dateymd": "2020-06-29",
        "totalconfirmed": "567539",
        "totaldeceased": "16905",
        "totalrecovered": "335275"
    },
    {
        "dailyconfirmed": "18256",
        "dailydeceased": "506",
        "dailyrecovered": "12565",
        "date": "30 June 2020",
        "dateymd": "2020-06-30",
        "totalconfirmed": "585795",
        "totaldeceased": "17411",
        "totalrecovered": "347840"
    },
    {
        "dailyconfirmed": "19429",
        "dailydeceased": "438",
        "dailyrecovered": "12064",
        "date": "1 July 2020",
        "dateymd": "2020-07-01",
        "totalconfirmed": "605224",
        "totaldeceased": "17849",
        "totalrecovered": "359904"
    },
    {
        "dailyconfirmed": "21947",
        "dailydeceased": "378",
        "dailyrecovered": "19999",
        "date": "2 July 2020",
        "dateymd": "2020-07-02",
        "totalconfirmed": "627171",
        "totaldeceased": "18227",
        "totalrecovered": "379903"
    },
    {
        "dailyconfirmed": "22718",
        "dailydeceased": "444",
        "dailyrecovered": "14417",
        "date": "3 July 2020",
        "dateymd": "2020-07-03",
        "totalconfirmed": "649889",
        "totaldeceased": "18671",
        "totalrecovered": "394320"
    },
    {
        "dailyconfirmed": "24018",
        "dailydeceased": "611",
        "dailyrecovered": "14746",
        "date": "4 July 2020",
        "dateymd": "2020-07-04",
        "totalconfirmed": "673907",
        "totaldeceased": "19282",
        "totalrecovered": "409066"
    },
    {
        "dailyconfirmed": "23942",
        "dailydeceased": "421",
        "dailyrecovered": "15829",
        "date": "5 July 2020",
        "dateymd": "2020-07-05",
        "totalconfirmed": "697849",
        "totaldeceased": "19703",
        "totalrecovered": "424895"
    },
    {
        "dailyconfirmed": "22500",
        "dailydeceased": "473",
        "dailyrecovered": "15315",
        "date": "6 July 2020",
        "dateymd": "2020-07-06",
        "totalconfirmed": "720349",
        "totaldeceased": "20176",
        "totalrecovered": "440210"
    },
    {
        "dailyconfirmed": "23147",
        "dailydeceased": "479",
        "dailyrecovered": "16836",
        "date": "7 July 2020",
        "dateymd": "2020-07-07",
        "totalconfirmed": "743496",
        "totaldeceased": "20655",
        "totalrecovered": "457046"
    },
    {
        "dailyconfirmed": "25561",
        "dailydeceased": "492",
        "dailyrecovered": "19508",
        "date": "8 July 2020",
        "dateymd": "2020-07-08",
        "totalconfirmed": "769057",
        "totaldeceased": "21147",
        "totalrecovered": "476554"
    },
    {
        "dailyconfirmed": "25790",
        "dailydeceased": "479",
        "dailyrecovered": "19408",
        "date": "9 July 2020",
        "dateymd": "2020-07-09",
        "totalconfirmed": "794847",
        "totaldeceased": "21626",
        "totalrecovered": "495962"
    },
    {
        "dailyconfirmed": "27762",
        "dailydeceased": "520",
        "dailyrecovered": "20289",
        "date": "10 July 2020",
        "dateymd": "2020-07-10",
        "totalconfirmed": "822609",
        "totaldeceased": "22146",
        "totalrecovered": "516251"
    },
    {
        "dailyconfirmed": "27757",
        "dailydeceased": "543",
        "dailyrecovered": "19981",
        "date": "11 July 2020",
        "dateymd": "2020-07-11",
        "totalconfirmed": "850366",
        "totaldeceased": "22689",
        "totalrecovered": "536232"
    },
    {
        "dailyconfirmed": "29106",
        "dailydeceased": "500",
        "dailyrecovered": "18198",
        "date": "12 July 2020",
        "dateymd": "2020-07-12",
        "totalconfirmed": "879472",
        "totaldeceased": "23189",
        "totalrecovered": "554430"
    },
    {
        "dailyconfirmed": "28178",
        "dailydeceased": "541",
        "dailyrecovered": "17683",
        "date": "13 July 2020",
        "dateymd": "2020-07-13",
        "totalconfirmed": "907650",
        "totaldeceased": "23730",
        "totalrecovered": "572113"
    },
    {
        "dailyconfirmed": "29917",
        "dailydeceased": "587",
        "dailyrecovered": "20977",
        "date": "14 July 2020",
        "dateymd": "2020-07-14",
        "totalconfirmed": "937567",
        "totaldeceased": "24317",
        "totalrecovered": "593090"
    },
    {
        "dailyconfirmed": "32607",
        "dailydeceased": "614",
        "dailyrecovered": "20646",
        "date": "15 July 2020",
        "dateymd": "2020-07-15",
        "totalconfirmed": "970174",
        "totaldeceased": "24931",
        "totalrecovered": "613736"
    },
    {
        "dailyconfirmed": "35468",
        "dailydeceased": "680",
        "dailyrecovered": "22867",
        "date": "16 July 2020",
        "dateymd": "2020-07-16",
        "totalconfirmed": "1005642",
        "totaldeceased": "25611",
        "totalrecovered": "636603"
    },
    {
        "dailyconfirmed": "34820",
        "dailydeceased": "676",
        "dailyrecovered": "17476",
        "date": "17 July 2020",
        "dateymd": "2020-07-17",
        "totalconfirmed": "1040462",
        "totaldeceased": "26287",
        "totalrecovered": "654079"
    },
    {
        "dailyconfirmed": "37411",
        "dailydeceased": "543",
        "dailyrecovered": "23583",
        "date": "18 July 2020",
        "dateymd": "2020-07-18",
        "totalconfirmed": "1077873",
        "totaldeceased": "26830",
        "totalrecovered": "677662"
    },
    {
        "dailyconfirmed": "40235",
        "dailydeceased": "675",
        "dailyrecovered": "22730",
        "date": "19 July 2020",
        "dateymd": "2020-07-19",
        "totalconfirmed": "1118108",
        "totaldeceased": "27505",
        "totalrecovered": "700392"
    },
    {
        "dailyconfirmed": "36806",
        "dailydeceased": "596",
        "dailyrecovered": "24303",
        "date": "20 July 2020",
        "dateymd": "2020-07-20",
        "totalconfirmed": "1154914",
        "totaldeceased": "28101",
        "totalrecovered": "724695"
    },
    {
        "dailyconfirmed": "39170",
        "dailydeceased": "671",
        "dailyrecovered": "27589",
        "date": "21 July 2020",
        "dateymd": "2020-07-21",
        "totalconfirmed": "1194084",
        "totaldeceased": "28772",
        "totalrecovered": "752284"
    },
    {
        "dailyconfirmed": "45601",
        "dailydeceased": "1130",
        "dailyrecovered": "31875",
        "date": "22 July 2020",
        "dateymd": "2020-07-22",
        "totalconfirmed": "1239685",
        "totaldeceased": "29902",
        "totalrecovered": "784159"
    },
    {
        "dailyconfirmed": "48443",
        "dailydeceased": "755",
        "dailyrecovered": "33326",
        "date": "23 July 2020",
        "dateymd": "2020-07-23",
        "totalconfirmed": "1288128",
        "totaldeceased": "30657",
        "totalrecovered": "817485"
    },
    {
        "dailyconfirmed": "48888",
        "dailydeceased": "763",
        "dailyrecovered": "32514",
        "date": "24 July 2020",
        "dateymd": "2020-07-24",
        "totalconfirmed": "1337016",
        "totaldeceased": "31420",
        "totalrecovered": "849999"
    },
    {
        "dailyconfirmed": "50072",
        "dailydeceased": "703",
        "dailyrecovered": "37125",
        "date": "25 July 2020",
        "dateymd": "2020-07-25",
        "totalconfirmed": "1387088",
        "totaldeceased": "32123",
        "totalrecovered": "887124"
    },
    {
        "dailyconfirmed": "48932",
        "dailydeceased": "704",
        "dailyrecovered": "31512",
        "date": "26 July 2020",
        "dateymd": "2020-07-26",
        "totalconfirmed": "1436020",
        "totaldeceased": "32827",
        "totalrecovered": "918636"
    },
    {
        "dailyconfirmed": "46484",
        "dailydeceased": "642",
        "dailyrecovered": "34354",
        "date": "27 July 2020",
        "dateymd": "2020-07-27",
        "totalconfirmed": "1482504",
        "totaldeceased": "33469",
        "totalrecovered": "952990"
    },
    {
        "dailyconfirmed": "49631",
        "dailydeceased": "774",
        "dailyrecovered": "35683",
        "date": "28 July 2020",
        "dateymd": "2020-07-28",
        "totalconfirmed": "1532135",
        "totaldeceased": "34243",
        "totalrecovered": "988673"
    },
    {
        "dailyconfirmed": "52479",
        "dailydeceased": "775",
        "dailyrecovered": "32886",
        "date": "29 July 2020",
        "dateymd": "2020-07-29",
        "totalconfirmed": "1584614",
        "totaldeceased": "35018",
        "totalrecovered": "1021559"
    },
    {
        "dailyconfirmed": "54968",
        "dailydeceased": "784",
        "dailyrecovered": "37425",
        "date": "30 July 2020",
        "dateymd": "2020-07-30",
        "totalconfirmed": "1639582",
        "totaldeceased": "35802",
        "totalrecovered": "1058984"
    },
    {
        "dailyconfirmed": "57486",
        "dailydeceased": "764",
        "dailyrecovered": "36554",
        "date": "31 July 2020",
        "dateymd": "2020-07-31",
        "totalconfirmed": "1697068",
        "totaldeceased": "36566",
        "totalrecovered": "1095538"
    },
    {
        "dailyconfirmed": "55117",
        "dailydeceased": "854",
        "dailyrecovered": "51368",
        "date": "1 August 2020",
        "dateymd": "2020-08-01",
        "totalconfirmed": "1752185",
        "totaldeceased": "37420",
        "totalrecovered": "1146906"
    },
    {
        "dailyconfirmed": "52672",
        "dailydeceased": "760",
        "dailyrecovered": "40355",
        "date": "2 August 2020",
        "dateymd": "2020-08-02",
        "totalconfirmed": "1804857",
        "totaldeceased": "38180",
        "totalrecovered": "1187261"
    },
    {
        "dailyconfirmed": "50488",
        "dailydeceased": "806",
        "dailyrecovered": "43070",
        "date": "3 August 2020",
        "dateymd": "2020-08-03",
        "totalconfirmed": "1855345",
        "totaldeceased": "38986",
        "totalrecovered": "1230331"
    },
    {
        "dailyconfirmed": "51282",
        "dailydeceased": "849",
        "dailyrecovered": "51220",
        "date": "4 August 2020",
        "dateymd": "2020-08-04",
        "totalconfirmed": "1906627",
        "totaldeceased": "39835",
        "totalrecovered": "1281551"
    },
    {
        "dailyconfirmed": "56626",
        "dailydeceased": "919",
        "dailyrecovered": "45583",
        "date": "5 August 2020",
        "dateymd": "2020-08-05",
        "totalconfirmed": "1963253",
        "totaldeceased": "40754",
        "totalrecovered": "1327134"
    },
    {
        "dailyconfirmed": "62170",
        "dailydeceased": "899",
        "dailyrecovered": "50141",
        "date": "6 August 2020",
        "dateymd": "2020-08-06",
        "totalconfirmed": "2025423",
        "totaldeceased": "41653",
        "totalrecovered": "1377275"
    },
    {
        "dailyconfirmed": "61455",
        "dailydeceased": "936",
        "dailyrecovered": "50387",
        "date": "7 August 2020",
        "dateymd": "2020-08-07",
        "totalconfirmed": "2086878",
        "totaldeceased": "42589",
        "totalrecovered": "1427662"
    },
    {
        "dailyconfirmed": "65156",
        "dailydeceased": "875",
        "dailyrecovered": "52135",
        "date": "8 August 2020",
        "dateymd": "2020-08-08",
        "totalconfirmed": "2152034",
        "totaldeceased": "43464",
        "totalrecovered": "1479797"
    },
    {
        "dailyconfirmed": "62117",
        "dailydeceased": "1013",
        "dailyrecovered": "54474",
        "date": "9 August 2020",
        "dateymd": "2020-08-09",
        "totalconfirmed": "2214151",
        "totaldeceased": "44477",
        "totalrecovered": "1534271"
    },
    {
        "dailyconfirmed": "53016",
        "dailydeceased": "887",
        "dailyrecovered": "47362",
        "date": "10 August 2020",
        "dateymd": "2020-08-10",
        "totalconfirmed": "2267167",
        "totaldeceased": "45364",
        "totalrecovered": "1581633"
    },
    {
        "dailyconfirmed": "61252",
        "dailydeceased": "835",
        "dailyrecovered": "56461",
        "date": "11 August 2020",
        "dateymd": "2020-08-11",
        "totalconfirmed": "2328419",
        "totaldeceased": "46199",
        "totalrecovered": "1638094"
    },
    {
        "dailyconfirmed": "67066",
        "dailydeceased": "950",
        "dailyrecovered": "57759",
        "date": "12 August 2020",
        "dateymd": "2020-08-12",
        "totalconfirmed": "2395485",
        "totaldeceased": "47149",
        "totalrecovered": "1695853"
    },
    {
        "dailyconfirmed": "64141",
        "dailydeceased": "1006",
        "dailyrecovered": "54776",
        "date": "13 August 2020",
        "dateymd": "2020-08-13",
        "totalconfirmed": "2459626",
        "totaldeceased": "48155",
        "totalrecovered": "1750629"
    },
    {
        "dailyconfirmed": "65610",
        "dailydeceased": "989",
        "dailyrecovered": "56920",
        "date": "14 August 2020",
        "dateymd": "2020-08-14",
        "totalconfirmed": "2525236",
        "totaldeceased": "49144",
        "totalrecovered": "1807549"
    },
    {
        "dailyconfirmed": "63986",
        "dailydeceased": "952",
        "dailyrecovered": "53116",
        "date": "15 August 2020",
        "dateymd": "2020-08-15",
        "totalconfirmed": "2589222",
        "totaldeceased": "50096",
        "totalrecovered": "1860665"
    },
    {
        "dailyconfirmed": "58096",
        "dailydeceased": "952",
        "dailyrecovered": "57404",
        "date": "16 August 2020",
        "dateymd": "2020-08-16",
        "totalconfirmed": "2647318",
        "totaldeceased": "51048",
        "totalrecovered": "1918069"
    },
    {
        "dailyconfirmed": "54298",
        "dailydeceased": "880",
        "dailyrecovered": "58172",
        "date": "17 August 2020",
        "dateymd": "2020-08-17",
        "totalconfirmed": "2701616",
        "totaldeceased": "51928",
        "totalrecovered": "1976241"
    },
    {
        "dailyconfirmed": "65024",
        "dailydeceased": "1099",
        "dailyrecovered": "60455",
        "date": "18 August 2020",
        "dateymd": "2020-08-18",
        "totalconfirmed": "2766640",
        "totaldeceased": "53027",
        "totalrecovered": "2036696"
    },
    {
        "dailyconfirmed": "69196",
        "dailydeceased": "979",
        "dailyrecovered": "59365",
        "date": "19 August 2020",
        "dateymd": "2020-08-19",
        "totalconfirmed": "2835836",
        "totaldeceased": "54006",
        "totalrecovered": "2096061"
    },
    {
        "dailyconfirmed": "68518",
        "dailydeceased": "981",
        "dailyrecovered": "61873",
        "date": "20 August 2020",
        "dateymd": "2020-08-20",
        "totalconfirmed": "2904354",
        "totaldeceased": "54987",
        "totalrecovered": "2157934"
    },
    {
        "dailyconfirmed": "69029",
        "dailydeceased": "953",
        "dailyrecovered": "62858",
        "date": "21 August 2020",
        "dateymd": "2020-08-21",
        "totalconfirmed": "2973383",
        "totaldeceased": "55940",
        "totalrecovered": "2220792"
    },
    {
        "dailyconfirmed": "70067",
        "dailydeceased": "918",
        "dailyrecovered": "59101",
        "date": "22 August 2020",
        "dateymd": "2020-08-22",
        "totalconfirmed": "3043450",
        "totaldeceased": "56858",
        "totalrecovered": "2279893"
    },
    {
        "dailyconfirmed": "61749",
        "dailydeceased": "846",
        "dailyrecovered": "56896",
        "date": "23 August 2020",
        "dateymd": "2020-08-23",
        "totalconfirmed": "3105199",
        "totaldeceased": "57704",
        "totalrecovered": "2336789"
    },
    {
        "dailyconfirmed": "59696",
        "dailydeceased": "854",
        "dailyrecovered": "66305",
        "date": "24 August 2020",
        "dateymd": "2020-08-24",
        "totalconfirmed": "3164895",
        "totaldeceased": "58558",
        "totalrecovered": "2403094"
    },
    {
        "dailyconfirmed": "66873",
        "dailydeceased": "1066",
        "dailyrecovered": "64151",
        "date": "25 August 2020",
        "dateymd": "2020-08-25",
        "totalconfirmed": "3231768",
        "totaldeceased": "59624",
        "totalrecovered": "2467245"
    },
    {
        "dailyconfirmed": "75995",
        "dailydeceased": "1017",
        "dailyrecovered": "56191",
        "date": "26 August 2020",
        "dateymd": "2020-08-26",
        "totalconfirmed": "3307763",
        "totaldeceased": "60641",
        "totalrecovered": "2523436"
    },
    {
        "dailyconfirmed": "76827",
        "dailydeceased": "1066",
        "dailyrecovered": "59620",
        "date": "27 August 2020",
        "dateymd": "2020-08-27",
        "totalconfirmed": "3384590",
        "totaldeceased": "61707",
        "totalrecovered": "2583056"
    },
    {
        "dailyconfirmed": "76657",
        "dailydeceased": "1019",
        "dailyrecovered": "64475",
        "date": "28 August 2020",
        "dateymd": "2020-08-28",
        "totalconfirmed": "3461247",
        "totaldeceased": "62726",
        "totalrecovered": "2647531"
    },
    {
        "dailyconfirmed": "78479",
        "dailydeceased": "943",
        "dailyrecovered": "64982",
        "date": "29 August 2020",
        "dateymd": "2020-08-29",
        "totalconfirmed": "3539726",
        "totaldeceased": "63669",
        "totalrecovered": "2712513"
    },
    {
        "dailyconfirmed": "79461",
        "dailydeceased": "960",
        "dailyrecovered": "60422",
        "date": "30 August 2020",
        "dateymd": "2020-08-30",
        "totalconfirmed": "3619187",
        "totaldeceased": "64629",
        "totalrecovered": "2772935"
    },
    {
        "dailyconfirmed": "68766",
        "dailydeceased": "816",
        "dailyrecovered": "64435",
        "date": "31 August 2020",
        "dateymd": "2020-08-31",
        "totalconfirmed": "3687953",
        "totaldeceased": "65445",
        "totalrecovered": "2837370"
    },
    {
        "dailyconfirmed": "78168",
        "dailydeceased": "892",
        "dailyrecovered": "62145",
        "date": "1 September 2020",
        "dateymd": "2020-09-01",
        "totalconfirmed": "3766121",
        "totaldeceased": "66337",
        "totalrecovered": "2899515"
    },
    {
        "dailyconfirmed": "82860",
        "dailydeceased": "913",
        "dailyrecovered": "67874",
        "date": "2 September 2020",
        "dateymd": "2020-09-02",
        "totalconfirmed": "3848981",
        "totaldeceased": "67250",
        "totalrecovered": "2967389"
    },
    {
        "dailyconfirmed": "84156",
        "dailydeceased": "979",
        "dailyrecovered": "67491",
        "date": "3 September 2020",
        "dateymd": "2020-09-03",
        "totalconfirmed": "3933137",
        "totaldeceased": "68229",
        "totalrecovered": "3034880"
    },
    {
        "dailyconfirmed": "87115",
        "dailydeceased": "950",
        "dailyrecovered": "69625",
        "date": "4 September 2020",
        "dateymd": "2020-09-04",
        "totalconfirmed": "4020252",
        "totaldeceased": "69179",
        "totalrecovered": "3104505"
    },
    {
        "dailyconfirmed": "90600",
        "dailydeceased": "916",
        "dailyrecovered": "73161",
        "date": "5 September 2020",
        "dateymd": "2020-09-05",
        "totalconfirmed": "4110852",
        "totaldeceased": "70095",
        "totalrecovered": "3177666"
    },
    {
        "dailyconfirmed": "91725",
        "dailydeceased": "1005",
        "dailyrecovered": "69630",
        "date": "6 September 2020",
        "dateymd": "2020-09-06",
        "totalconfirmed": "4202577",
        "totaldeceased": "71100",
        "totalrecovered": "3247296"
    },
    {
        "dailyconfirmed": "75015",
        "dailydeceased": "1129",
        "dailyrecovered": "74116",
        "date": "7 September 2020",
        "dateymd": "2020-09-07",
        "totalconfirmed": "4277592",
        "totaldeceased": "72229",
        "totalrecovered": "3321412"
    },
    {
        "dailyconfirmed": "89855",
        "dailydeceased": "1107",
        "dailyrecovered": "74608",
        "date": "8 September 2020",
        "dateymd": "2020-09-08",
        "totalconfirmed": "4367447",
        "totaldeceased": "73336",
        "totalrecovered": "3396020"
    },
    {
        "dailyconfirmed": "95536",
        "dailydeceased": "1168",
        "dailyrecovered": "73062",
        "date": "9 September 2020",
        "dateymd": "2020-09-09",
        "totalconfirmed": "4462983",
        "totaldeceased": "74504",
        "totalrecovered": "3469082"
    },
    {
        "dailyconfirmed": "96762",
        "dailydeceased": "1213",
        "dailyrecovered": "70904",
        "date": "10 September 2020",
        "dateymd": "2020-09-10",
        "totalconfirmed": "4559745",
        "totaldeceased": "75717",
        "totalrecovered": "3539986"
    },
    {
        "dailyconfirmed": "97655",
        "dailydeceased": "1202",
        "dailyrecovered": "81456",
        "date": "11 September 2020",
        "dateymd": "2020-09-11",
        "totalconfirmed": "4657400",
        "totaldeceased": "76919",
        "totalrecovered": "3621442"
    },
    {
        "dailyconfirmed": "94414",
        "dailydeceased": "1111",
        "dailyrecovered": "77862",
        "date": "12 September 2020",
        "dateymd": "2020-09-12",
        "totalconfirmed": "4751814",
        "totaldeceased": "78030",
        "totalrecovered": "3699304"
    },
    {
        "dailyconfirmed": "93220",
        "dailydeceased": "1140",
        "dailyrecovered": "77748",
        "date": "13 September 2020",
        "dateymd": "2020-09-13",
        "totalconfirmed": "4845034",
        "totaldeceased": "79170",
        "totalrecovered": "3777052"
    },
    {
        "dailyconfirmed": "81913",
        "dailydeceased": "1054",
        "dailyrecovered": "79213",
        "date": "14 September 2020",
        "dateymd": "2020-09-14",
        "totalconfirmed": "4926947",
        "totaldeceased": "80224",
        "totalrecovered": "3856265"
    },
    {
        "dailyconfirmed": "91098",
        "dailydeceased": "1281",
        "dailyrecovered": "82849",
        "date": "15 September 2020",
        "dateymd": "2020-09-15",
        "totalconfirmed": "5018045",
        "totaldeceased": "81505",
        "totalrecovered": "3939114"
    },
    {
        "dailyconfirmed": "97860",
        "dailydeceased": "1140",
        "dailyrecovered": "82924",
        "date": "16 September 2020",
        "dateymd": "2020-09-16",
        "totalconfirmed": "5115905",
        "totaldeceased": "82645",
        "totalrecovered": "4022038"
    },
    {
        "dailyconfirmed": "96787",
        "dailydeceased": "1175",
        "dailyrecovered": "87788",
        "date": "17 September 2020",
        "dateymd": "2020-09-17",
        "totalconfirmed": "5212692",
        "totaldeceased": "83820",
        "totalrecovered": "4109826"
    },
    {
        "dailyconfirmed": "92973",
        "dailydeceased": "1221",
        "dailyrecovered": "95515",
        "date": "18 September 2020",
        "dateymd": "2020-09-18",
        "totalconfirmed": "5305665",
        "totaldeceased": "85041",
        "totalrecovered": "4205341"
    },
    {
        "dailyconfirmed": "92574",
        "dailydeceased": "1149",
        "dailyrecovered": "94389",
        "date": "19 September 2020",
        "dateymd": "2020-09-19",
        "totalconfirmed": "5398239",
        "totaldeceased": "86190",
        "totalrecovered": "4299730"
    },
    {
        "dailyconfirmed": "87395",
        "dailydeceased": "1135",
        "dailyrecovered": "92926",
        "date": "20 September 2020",
        "dateymd": "2020-09-20",
        "totalconfirmed": "5485634",
        "totaldeceased": "87325",
        "totalrecovered": "4392656"
    },
    {
        "dailyconfirmed": "74493",
        "dailydeceased": "1056",
        "dailyrecovered": "102070",
        "date": "21 September 2020",
        "dateymd": "2020-09-21",
        "totalconfirmed": "5560127",
        "totaldeceased": "88381",
        "totalrecovered": "4494726"
    },
    {
        "dailyconfirmed": "83362",
        "dailydeceased": "1085",
        "dailyrecovered": "89657",
        "date": "22 September 2020",
        "dateymd": "2020-09-22",
        "totalconfirmed": "5643489",
        "totaldeceased": "89466",
        "totalrecovered": "4584383"
    },
    {
        "dailyconfirmed": "86703",
        "dailydeceased": "1123",
        "dailyrecovered": "87459",
        "date": "23 September 2020",
        "dateymd": "2020-09-23",
        "totalconfirmed": "5730192",
        "totaldeceased": "90589",
        "totalrecovered": "4671842"
    },
    {
        "dailyconfirmed": "85921",
        "dailydeceased": "1144",
        "dailyrecovered": "81142",
        "date": "24 September 2020",
        "dateymd": "2020-09-24",
        "totalconfirmed": "5816113",
        "totaldeceased": "91733",
        "totalrecovered": "4752984"
    },
    {
        "dailyconfirmed": "85717",
        "dailydeceased": "1093",
        "dailyrecovered": "93331",
        "date": "25 September 2020",
        "dateymd": "2020-09-25",
        "totalconfirmed": "5901830",
        "totaldeceased": "92826",
        "totalrecovered": "4846315"
    },
    {
        "dailyconfirmed": "88759",
        "dailydeceased": "1124",
        "dailyrecovered": "92365",
        "date": "26 September 2020",
        "dateymd": "2020-09-26",
        "totalconfirmed": "5990589",
        "totaldeceased": "93950",
        "totalrecovered": "4938680"
    },
    {
        "dailyconfirmed": "82770",
        "dailydeceased": "1040",
        "dailyrecovered": "74691",
        "date": "27 September 2020",
        "dateymd": "2020-09-27",
        "totalconfirmed": "6073359",
        "totaldeceased": "94990",
        "totalrecovered": "5013371"
    },
    {
        "dailyconfirmed": "69669",
        "dailydeceased": "775",
        "dailyrecovered": "85198",
        "date": "28 September 2020",
        "dateymd": "2020-09-28",
        "totalconfirmed": "6143028",
        "totaldeceased": "95765",
        "totalrecovered": "5098569"
    },
    {
        "dailyconfirmed": "80500",
        "dailydeceased": "1178",
        "dailyrecovered": "86150",
        "date": "29 September 2020",
        "dateymd": "2020-09-29",
        "totalconfirmed": "6223528",
        "totaldeceased": "96943",
        "totalrecovered": "5184719"
    },
    {
        "dailyconfirmed": "86748",
        "dailydeceased": "1179",
        "dailyrecovered": "85274",
        "date": "30 September 2020",
        "dateymd": "2020-09-30",
        "totalconfirmed": "6310276",
        "totaldeceased": "98122",
        "totalrecovered": "5269993"
    },
    {
        "dailyconfirmed": "81784",
        "dailydeceased": "1099",
        "dailyrecovered": "78731",
        "date": "1 October 2020",
        "dateymd": "2020-10-01",
        "totalconfirmed": "6392060",
        "totaldeceased": "99221",
        "totalrecovered": "5348724"
    },
    {
        "dailyconfirmed": "79883",
        "dailydeceased": "1068",
        "dailyrecovered": "76339",
        "date": "2 October 2020",
        "dateymd": "2020-10-02",
        "totalconfirmed": "6471943",
        "totaldeceased": "100289",
        "totalrecovered": "5425063"
    },
    {
        "dailyconfirmed": "75479",
        "dailydeceased": "937",
        "dailyrecovered": "81655",
        "date": "3 October 2020",
        "dateymd": "2020-10-03",
        "totalconfirmed": "6547422",
        "totaldeceased": "101226",
        "totalrecovered": "5506718"
    },
    {
        "dailyconfirmed": "74770",
        "dailydeceased": "903",
        "dailyrecovered": "76713",
        "date": "4 October 2020",
        "dateymd": "2020-10-04",
        "totalconfirmed": "6622192",
        "totaldeceased": "102129",
        "totalrecovered": "5583431"
    },
    {
        "dailyconfirmed": "60130",
        "dailydeceased": "886",
        "dailyrecovered": "75855",
        "date": "5 October 2020",
        "dateymd": "2020-10-05",
        "totalconfirmed": "6682322",
        "totaldeceased": "103015",
        "totalrecovered": "5659286"
    },
    {
        "dailyconfirmed": "71869",
        "dailydeceased": "990",
        "dailyrecovered": "81945",
        "date": "6 October 2020",
        "dateymd": "2020-10-06",
        "totalconfirmed": "6754191",
        "totaldeceased": "104005",
        "totalrecovered": "5741231"
    },
    {
        "dailyconfirmed": "78809",
        "dailydeceased": "963",
        "dailyrecovered": "83209",
        "date": "7 October 2020",
        "dateymd": "2020-10-07",
        "totalconfirmed": "6833000",
        "totaldeceased": "104968",
        "totalrecovered": "5824440"
    },
    {
        "dailyconfirmed": "70797",
        "dailydeceased": "967",
        "dailyrecovered": "78745",
        "date": "8 October 2020",
        "dateymd": "2020-10-08",
        "totalconfirmed": "6903797",
        "totaldeceased": "105935",
        "totalrecovered": "5903185"
    },
    {
        "dailyconfirmed": "73305",
        "dailydeceased": "929",
        "dailyrecovered": "82628",
        "date": "9 October 2020",
        "dateymd": "2020-10-09",
        "totalconfirmed": "6977102",
        "totaldeceased": "106864",
        "totalrecovered": "5985813"
    },
    {
        "dailyconfirmed": "74418",
        "dailydeceased": "921",
        "dailyrecovered": "89024",
        "date": "10 October 2020",
        "dateymd": "2020-10-10",
        "totalconfirmed": "7051520",
        "totaldeceased": "107785",
        "totalrecovered": "6074837"
    },
    {
        "dailyconfirmed": "67789",
        "dailydeceased": "813",
        "dailyrecovered": "71565",
        "date": "11 October 2020",
        "dateymd": "2020-10-11",
        "totalconfirmed": "7119309",
        "totaldeceased": "108598",
        "totalrecovered": "6146402"
    },
    {
        "dailyconfirmed": "54262",
        "dailydeceased": "710",
        "dailyrecovered": "78365",
        "date": "12 October 2020",
        "dateymd": "2020-10-12",
        "totalconfirmed": "7173571",
        "totaldeceased": "109308",
        "totalrecovered": "6224767"
    },
    {
        "dailyconfirmed": "63717",
        "dailydeceased": "727",
        "dailyrecovered": "74079",
        "date": "13 October 2020",
        "dateymd": "2020-10-13",
        "totalconfirmed": "7237288",
        "totaldeceased": "110035",
        "totalrecovered": "6298846"
    },
    {
        "dailyconfirmed": "67811",
        "dailydeceased": "690",
        "dailyrecovered": "81582",
        "date": "14 October 2020",
        "dateymd": "2020-10-14",
        "totalconfirmed": "7305099",
        "totaldeceased": "110725",
        "totalrecovered": "6380428"
    },
    {
        "dailyconfirmed": "63441",
        "dailydeceased": "882",
        "dailyrecovered": "70792",
        "date": "15 October 2020",
        "dateymd": "2020-10-15",
        "totalconfirmed": "7368540",
        "totaldeceased": "111607",
        "totalrecovered": "6451220"
    },
    {
        "dailyconfirmed": "62304",
        "dailydeceased": "840",
        "dailyrecovered": "70568",
        "date": "16 October 2020",
        "dateymd": "2020-10-16",
        "totalconfirmed": "7430844",
        "totaldeceased": "112447",
        "totalrecovered": "6521788"
    },
    {
        "dailyconfirmed": "61893",
        "dailydeceased": "1032",
        "dailyrecovered": "72583",
        "date": "17 October 2020",
        "dateymd": "2020-10-17",
        "totalconfirmed": "7492737",
        "totaldeceased": "113479",
        "totalrecovered": "6594371"
    },
    {
        "dailyconfirmed": "56519",
        "dailydeceased": "582",
        "dailyrecovered": "66418",
        "date": "18 October 2020",
        "dateymd": "2020-10-18",
        "totalconfirmed": "7549256",
        "totaldeceased": "114061",
        "totalrecovered": "6660789"
    },
    {
        "dailyconfirmed": "45506",
        "dailydeceased": "589",
        "dailyrecovered": "69800",
        "date": "19 October 2020",
        "dateymd": "2020-10-19",
        "totalconfirmed": "7594762",
        "totaldeceased": "114650",
        "totalrecovered": "6730589"
    },
    {
        "dailyconfirmed": "54348",
        "dailydeceased": "714",
        "dailyrecovered": "61828",
        "date": "20 October 2020",
        "dateymd": "2020-10-20",
        "totalconfirmed": "7649110",
        "totaldeceased": "115364",
        "totalrecovered": "6792417"
    },
    {
        "dailyconfirmed": "56264",
        "dailydeceased": "701",
        "dailyrecovered": "79561",
        "date": "21 October 2020",
        "dateymd": "2020-10-21",
        "totalconfirmed": "7705374",
        "totaldeceased": "116065",
        "totalrecovered": "6871978"
    },
    {
        "dailyconfirmed": "54371",
        "dailydeceased": "686",
        "dailyrecovered": "74569",
        "date": "22 October 2020",
        "dateymd": "2020-10-22",
        "totalconfirmed": "7759745",
        "totaldeceased": "116751",
        "totalrecovered": "6946547"
    },
    {
        "dailyconfirmed": "53931",
        "dailydeceased": "655",
        "dailyrecovered": "66994",
        "date": "23 October 2020",
        "dateymd": "2020-10-23",
        "totalconfirmed": "7813676",
        "totaldeceased": "117406",
        "totalrecovered": "7013541"
    },
    {
        "dailyconfirmed": "50366",
        "dailydeceased": "578",
        "dailyrecovered": "62270",
        "date": "24 October 2020",
        "dateymd": "2020-10-24",
        "totalconfirmed": "7864042",
        "totaldeceased": "117984",
        "totalrecovered": "7075811"
    },
    {
        "dailyconfirmed": "45922",
        "dailydeceased": "483",
        "dailyrecovered": "59304",
        "date": "25 October 2020",
        "dateymd": "2020-10-25",
        "totalconfirmed": "7909964",
        "totaldeceased": "118467",
        "totalrecovered": "7135115"
    },
    {
        "dailyconfirmed": "36019",
        "dailydeceased": "485",
        "dailyrecovered": "63734",
        "date": "26 October 2020",
        "dateymd": "2020-10-26",
        "totalconfirmed": "7945983",
        "totaldeceased": "118952",
        "totalrecovered": "7198849"
    },
    {
        "dailyconfirmed": "43036",
        "dailydeceased": "511",
        "dailyrecovered": "58429",
        "date": "27 October 2020",
        "dateymd": "2020-10-27",
        "totalconfirmed": "7989019",
        "totaldeceased": "119463",
        "totalrecovered": "7257278"
    },
    {
        "dailyconfirmed": "50188",
        "dailydeceased": "515",
        "dailyrecovered": "56594",
        "date": "28 October 2020",
        "dateymd": "2020-10-28",
        "totalconfirmed": "8039207",
        "totaldeceased": "119978",
        "totalrecovered": "7313872"
    },
    {
        "dailyconfirmed": "48765",
        "dailydeceased": "562",
        "dailyrecovered": "57867",
        "date": "29 October 2020",
        "dateymd": "2020-10-29",
        "totalconfirmed": "8087972",
        "totaldeceased": "120540",
        "totalrecovered": "7371739"
    },
    {
        "dailyconfirmed": "48117",
        "dailydeceased": "550",
        "dailyrecovered": "59005",
        "date": "30 October 2020",
        "dateymd": "2020-10-30",
        "totalconfirmed": "8136089",
        "totaldeceased": "121090",
        "totalrecovered": "7430744"
    },
    {
        "dailyconfirmed": "47228",
        "dailydeceased": "469",
        "dailyrecovered": "58682",
        "date": "31 October 2020",
        "dateymd": "2020-10-31",
        "totalconfirmed": "8183317",
        "totaldeceased": "121559",
        "totalrecovered": "7489426"
    },
    {
        "dailyconfirmed": "45928",
        "dailydeceased": "491",
        "dailyrecovered": "53312",
        "date": "1 November 2020",
        "dateymd": "2020-11-01",
        "totalconfirmed": "8229245",
        "totaldeceased": "122050",
        "totalrecovered": "7542738"
    },
    {
        "dailyconfirmed": "37592",
        "dailydeceased": "498",
        "dailyrecovered": "58524",
        "date": "2 November 2020",
        "dateymd": "2020-11-02",
        "totalconfirmed": "8266837",
        "totaldeceased": "122548",
        "totalrecovered": "7601262"
    },
    {
        "dailyconfirmed": "46027",
        "dailydeceased": "510",
        "dailyrecovered": "53328",
        "date": "3 November 2020",
        "dateymd": "2020-11-03",
        "totalconfirmed": "8312864",
        "totaldeceased": "123058",
        "totalrecovered": "7654590"
    },
    {
        "dailyconfirmed": "50465",
        "dailydeceased": "707",
        "dailyrecovered": "55873",
        "date": "4 November 2020",
        "dateymd": "2020-11-04",
        "totalconfirmed": "8363329",
        "totaldeceased": "123765",
        "totalrecovered": "7710463"
    },
    {
        "dailyconfirmed": "47628",
        "dailydeceased": "672",
        "dailyrecovered": "54133",
        "date": "5 November 2020",
        "dateymd": "2020-11-05",
        "totalconfirmed": "8410957",
        "totaldeceased": "124437",
        "totalrecovered": "7764596"
    },
    {
        "dailyconfirmed": "50017",
        "dailydeceased": "577",
        "dailyrecovered": "53946",
        "date": "6 November 2020",
        "dateymd": "2020-11-06",
        "totalconfirmed": "8460974",
        "totaldeceased": "125014",
        "totalrecovered": "7818542"
    },
    {
        "dailyconfirmed": "46153",
        "dailydeceased": "557",
        "dailyrecovered": "48582",
        "date": "7 November 2020",
        "dateymd": "2020-11-07",
        "totalconfirmed": "8507127",
        "totaldeceased": "125571",
        "totalrecovered": "7867124"
    },
    {
        "dailyconfirmed": "46707",
        "dailydeceased": "491",
        "dailyrecovered": "48465",
        "date": "8 November 2020",
        "dateymd": "2020-11-08",
        "totalconfirmed": "8553834",
        "totaldeceased": "126062",
        "totalrecovered": "7915589"
    },
    {
        "dailyconfirmed": "37119",
        "dailydeceased": "450",
        "dailyrecovered": "41449",
        "date": "9 November 2020",
        "dateymd": "2020-11-09",
        "totalconfirmed": "8590953",
        "totaldeceased": "126512",
        "totalrecovered": "7957038"
    },
    {
        "dailyconfirmed": "44724",
        "dailydeceased": "511",
        "dailyrecovered": "54639",
        "date": "10 November 2020",
        "dateymd": "2020-11-10",
        "totalconfirmed": "8635677",
        "totaldeceased": "127023",
        "totalrecovered": "8011677"
    },
    {
        "dailyconfirmed": "48285",
        "dailydeceased": "550",
        "dailyrecovered": "52704",
        "date": "11 November 2020",
        "dateymd": "2020-11-11",
        "totalconfirmed": "8683962",
        "totaldeceased": "127573",
        "totalrecovered": "8064381"
    },
    {
        "dailyconfirmed": "44585",
        "dailydeceased": "544",
        "dailyrecovered": "49354",
        "date": "12 November 2020",
        "dateymd": "2020-11-12",
        "totalconfirmed": "8728547",
        "totaldeceased": "128117",
        "totalrecovered": "8113735"
    },
    {
        "dailyconfirmed": "44620",
        "dailydeceased": "517",
        "dailyrecovered": "47620",
        "date": "13 November 2020",
        "dateymd": "2020-11-13",
        "totalconfirmed": "8773167",
        "totaldeceased": "128634",
        "totalrecovered": "8161355"
    },
    {
        "dailyconfirmed": "41692",
        "dailydeceased": "450",
        "dailyrecovered": "42317",
        "date": "14 November 2020",
        "dateymd": "2020-11-14",
        "totalconfirmed": "8814859",
        "totaldeceased": "129084",
        "totalrecovered": "8203672"
    },
    {
        "dailyconfirmed": "30681",
        "dailydeceased": "434",
        "dailyrecovered": "44111",
        "date": "15 November 2020",
        "dateymd": "2020-11-15",
        "totalconfirmed": "8845540",
        "totaldeceased": "129518",
        "totalrecovered": "8247783"
    },
    {
        "dailyconfirmed": "28609",
        "dailydeceased": "451",
        "dailyrecovered": "40392",
        "date": "16 November 2020",
        "dateymd": "2020-11-16",
        "totalconfirmed": "8874149",
        "totaldeceased": "129969",
        "totalrecovered": "8288175"
    },
    {
        "dailyconfirmed": "38548",
        "dailydeceased": "472",
        "dailyrecovered": "44753",
        "date": "17 November 2020",
        "dateymd": "2020-11-17",
        "totalconfirmed": "8912697",
        "totaldeceased": "130441",
        "totalrecovered": "8332928"
    },
    {
        "dailyconfirmed": "45366",
        "dailydeceased": "586",
        "dailyrecovered": "48675",
        "date": "18 November 2020",
        "dateymd": "2020-11-18",
        "totalconfirmed": "8958063",
        "totaldeceased": "131027",
        "totalrecovered": "8381603"
    },
    {
        "dailyconfirmed": "46185",
        "dailydeceased": "582",
        "dailyrecovered": "45246",
        "date": "19 November 2020",
        "dateymd": "2020-11-19",
        "totalconfirmed": "9004248",
        "totaldeceased": "131609",
        "totalrecovered": "8426849"
    },
    {
        "dailyconfirmed": "46283",
        "dailydeceased": "564",
        "dailyrecovered": "48968",
        "date": "20 November 2020",
        "dateymd": "2020-11-20",
        "totalconfirmed": "9050531",
        "totaldeceased": "132173",
        "totalrecovered": "8475817"
    },
    {
        "dailyconfirmed": "45301",
        "dailydeceased": "499",
        "dailyrecovered": "44055",
        "date": "21 November 2020",
        "dateymd": "2020-11-21",
        "totalconfirmed": "9095832",
        "totaldeceased": "132672",
        "totalrecovered": "8519872"
    },
    {
        "dailyconfirmed": "44404",
        "dailydeceased": "510",
        "dailyrecovered": "41405",
        "date": "22 November 2020",
        "dateymd": "2020-11-22",
        "totalconfirmed": "9140236",
        "totaldeceased": "133182",
        "totalrecovered": "8561277"
    },
    {
        "dailyconfirmed": "37441",
        "dailydeceased": "481",
        "dailyrecovered": "42195",
        "date": "23 November 2020",
        "dateymd": "2020-11-23",
        "totalconfirmed": "9177677",
        "totaldeceased": "133663",
        "totalrecovered": "8603472"
    },
    {
        "dailyconfirmed": "44245",
        "dailydeceased": "489",
        "dailyrecovered": "37765",
        "date": "24 November 2020",
        "dateymd": "2020-11-24",
        "totalconfirmed": "9221922",
        "totaldeceased": "134152",
        "totalrecovered": "8641237"
    },
    {
        "dailyconfirmed": "44699",
        "dailydeceased": "518",
        "dailyrecovered": "36582",
        "date": "25 November 2020",
        "dateymd": "2020-11-25",
        "totalconfirmed": "9266621",
        "totaldeceased": "134670",
        "totalrecovered": "8677819"
    },
    {
        "dailyconfirmed": "43174",
        "dailydeceased": "491",
        "dailyrecovered": "39723",
        "date": "26 November 2020",
        "dateymd": "2020-11-26",
        "totalconfirmed": "9309795",
        "totaldeceased": "135161",
        "totalrecovered": "8717542"
    },
    {
        "dailyconfirmed": "41353",
        "dailydeceased": "486",
        "dailyrecovered": "41177",
        "date": "27 November 2020",
        "dateymd": "2020-11-27",
        "totalconfirmed": "9351148",
        "totaldeceased": "135647",
        "totalrecovered": "8758719"
    },
    {
        "dailyconfirmed": "41815",
        "dailydeceased": "495",
        "dailyrecovered": "42275",
        "date": "28 November 2020",
        "dateymd": "2020-11-28",
        "totalconfirmed": "9392963",
        "totaldeceased": "136142",
        "totalrecovered": "8800994"
    },
    {
        "dailyconfirmed": "39036",
        "dailydeceased": "444",
        "dailyrecovered": "45152",
        "date": "29 November 2020",
        "dateymd": "2020-11-29",
        "totalconfirmed": "9431999",
        "totaldeceased": "136586",
        "totalrecovered": "8846146"
    },
    {
        "dailyconfirmed": "31179",
        "dailydeceased": "482",
        "dailyrecovered": "42282",
        "date": "30 November 2020",
        "dateymd": "2020-11-30",
        "totalconfirmed": "9463178",
        "totaldeceased": "137068",
        "totalrecovered": "8888428"
    },
    {
        "dailyconfirmed": "36474",
        "dailydeceased": "501",
        "dailyrecovered": "43208",
        "date": "1 December 2020",
        "dateymd": "2020-12-01",
        "totalconfirmed": "9499652",
        "totaldeceased": "137569",
        "totalrecovered": "8931636"
    },
    {
        "dailyconfirmed": "35506",
        "dailydeceased": "526",
        "dailyrecovered": "40908",
        "date": "2 December 2020",
        "dateymd": "2020-12-02",
        "totalconfirmed": "9535158",
        "totaldeceased": "138095",
        "totalrecovered": "8972544"
    },
    {
        "dailyconfirmed": "36574",
        "dailydeceased": "541",
        "dailyrecovered": "42991",
        "date": "3 December 2020",
        "dateymd": "2020-12-03",
        "totalconfirmed": "9571732",
        "totaldeceased": "138636",
        "totalrecovered": "9015535"
    },
    {
        "dailyconfirmed": "36711",
        "dailydeceased": "511",
        "dailyrecovered": "42359",
        "date": "4 December 2020",
        "dateymd": "2020-12-04",
        "totalconfirmed": "9608443",
        "totaldeceased": "139147",
        "totalrecovered": "9057894"
    },
    {
        "dailyconfirmed": "36010",
        "dailydeceased": "482",
        "dailyrecovered": "41885",
        "date": "5 December 2020",
        "dateymd": "2020-12-05",
        "totalconfirmed": "9644453",
        "totaldeceased": "139629",
        "totalrecovered": "9099779"
    },
    {
        "dailyconfirmed": "33178",
        "dailydeceased": "390",
        "dailyrecovered": "39078",
        "date": "6 December 2020",
        "dateymd": "2020-12-06",
        "totalconfirmed": "9677631",
        "totaldeceased": "140019",
        "totalrecovered": "9138857"
    },
    {
        "dailyconfirmed": "26227",
        "dailydeceased": "386",
        "dailyrecovered": "39293",
        "date": "7 December 2020",
        "dateymd": "2020-12-07",
        "totalconfirmed": "9703858",
        "totaldeceased": "140405",
        "totalrecovered": "9178150"
    },
    {
        "dailyconfirmed": "32083",
        "dailydeceased": "402",
        "dailyrecovered": "36583",
        "date": "8 December 2020",
        "dateymd": "2020-12-08",
        "totalconfirmed": "9735941",
        "totaldeceased": "140807",
        "totalrecovered": "9214733"
    },
    {
        "dailyconfirmed": "31637",
        "dailydeceased": "413",
        "dailyrecovered": "37693",
        "date": "9 December 2020",
        "dateymd": "2020-12-09",
        "totalconfirmed": "9767578",
        "totaldeceased": "141220",
        "totalrecovered": "9252426"
    },
    {
        "dailyconfirmed": "29411",
        "dailydeceased": "411",
        "dailyrecovered": "37707",
        "date": "10 December 2020",
        "dateymd": "2020-12-10",
        "totalconfirmed": "9796989",
        "totaldeceased": "141631",
        "totalrecovered": "9290133"
    },
    {
        "dailyconfirmed": "29961",
        "dailydeceased": "442",
        "dailyrecovered": "33492",
        "date": "11 December 2020",
        "dateymd": "2020-12-11",
        "totalconfirmed": "9826950",
        "totaldeceased": "142073",
        "totalrecovered": "9323625"
    },
    {
        "dailyconfirmed": "30354",
        "dailydeceased": "391",
        "dailyrecovered": "33087",
        "date": "12 December 2020",
        "dateymd": "2020-12-12",
        "totalconfirmed": "9857304",
        "totaldeceased": "142464",
        "totalrecovered": "9356712"
    },
    {
        "dailyconfirmed": "27336",
        "dailydeceased": "338",
        "dailyrecovered": "30640",
        "date": "13 December 2020",
        "dateymd": "2020-12-13",
        "totalconfirmed": "9884640",
        "totaldeceased": "142802",
        "totalrecovered": "9387352"
    },
    {
        "dailyconfirmed": "21941",
        "dailydeceased": "354",
        "dailyrecovered": "34421",
        "date": "14 December 2020",
        "dateymd": "2020-12-14",
        "totalconfirmed": "9906581",
        "totaldeceased": "143156",
        "totalrecovered": "9421773"
    },
    {
        "dailyconfirmed": "26251",
        "dailydeceased": "384",
        "dailyrecovered": "33853",
        "date": "15 December 2020",
        "dateymd": "2020-12-15",
        "totalconfirmed": "9932832",
        "totaldeceased": "143540",
        "totalrecovered": "9455626"
    },
    {
        "dailyconfirmed": "18172",
        "dailydeceased": "356",
        "dailyrecovered": "33360",
        "date": "16 December 2020",
        "dateymd": "2020-12-16",
        "totalconfirmed": "9951004",
        "totaldeceased": "143896",
        "totalrecovered": "9488986"
    },
    {
        "dailyconfirmed": "26754",
        "dailydeceased": "342",
        "dailyrecovered": "30891",
        "date": "17 December 2020",
        "dateymd": "2020-12-17",
        "totalconfirmed": "9977758",
        "totaldeceased": "144238",
        "totalrecovered": "9519877"
    },
    {
        "dailyconfirmed": "26991",
        "dailydeceased": "342",
        "dailyrecovered": "29879",
        "date": "18 December 2020",
        "dateymd": "2020-12-18",
        "totalconfirmed": "10004749",
        "totaldeceased": "144580",
        "totalrecovered": "9549756"
    },
    {
        "dailyconfirmed": "26834",
        "dailydeceased": "342",
        "dailyrecovered": "29758",
        "date": "19 December 2020",
        "dateymd": "2020-12-19",
        "totalconfirmed": "10031583",
        "totaldeceased": "144922",
        "totalrecovered": "9579514"
    },
    {
        "dailyconfirmed": "24622",
        "dailydeceased": "332",
        "dailyrecovered": "25734",
        "date": "20 December 2020",
        "dateymd": "2020-12-20",
        "totalconfirmed": "10056205",
        "totaldeceased": "145254",
        "totalrecovered": "9605248"
    },
    {
        "dailyconfirmed": "19147",
        "dailydeceased": "302",
        "dailyrecovered": "30250",
        "date": "21 December 2020",
        "dateymd": "2020-12-21",
        "totalconfirmed": "10075352",
        "totaldeceased": "145556",
        "totalrecovered": "9635498"
    },
    {
        "dailyconfirmed": "23880",
        "dailydeceased": "329",
        "dailyrecovered": "27032",
        "date": "22 December 2020",
        "dateymd": "2020-12-22",
        "totalconfirmed": "10099232",
        "totaldeceased": "145885",
        "totalrecovered": "9662530"
    },
    {
        "dailyconfirmed": "24716",
        "dailydeceased": "315",
        "dailyrecovered": "29946",
        "date": "23 December 2020",
        "dateymd": "2020-12-23",
        "totalconfirmed": "10123948",
        "totaldeceased": "146200",
        "totalrecovered": "9692476"
    },
    {
        "dailyconfirmed": "23444",
        "dailydeceased": "337",
        "dailyrecovered": "24555",
        "date": "24 December 2020",
        "dateymd": "2020-12-24",
        "totalconfirmed": "10147392",
        "totaldeceased": "146537",
        "totalrecovered": "9717031"
    },
    {
        "dailyconfirmed": "22349",
        "dailydeceased": "251",
        "dailyrecovered": "22184",
        "date": "25 December 2020",
        "dateymd": "2020-12-25",
        "totalconfirmed": "10169741",
        "totaldeceased": "146788",
        "totalrecovered": "9739215"
    },
    {
        "dailyconfirmed": "18575",
        "dailydeceased": "280",
        "dailyrecovered": "21466",
        "date": "26 December 2020",
        "dateymd": "2020-12-26",
        "totalconfirmed": "10188316",
        "totaldeceased": "147068",
        "totalrecovered": "9760681"
    },
    {
        "dailyconfirmed": "20333",
        "dailydeceased": "281",
        "dailyrecovered": "21097",
        "date": "27 December 2020",
        "dateymd": "2020-12-27",
        "totalconfirmed": "10208649",
        "totaldeceased": "147349",
        "totalrecovered": "9781778"
    },
    {
        "dailyconfirmed": "16072",
        "dailydeceased": "250",
        "dailyrecovered": "24822",
        "date": "28 December 2020",
        "dateymd": "2020-12-28",
        "totalconfirmed": "10224721",
        "totaldeceased": "147599",
        "totalrecovered": "9806600"
    },
    {
        "dailyconfirmed": "20542",
        "dailydeceased": "285",
        "dailyrecovered": "26589",
        "date": "29 December 2020",
        "dateymd": "2020-12-29",
        "totalconfirmed": "10245263",
        "totaldeceased": "147884",
        "totalrecovered": "9833189"
    },
    {
        "dailyconfirmed": "21945",
        "dailydeceased": "299",
        "dailyrecovered": "26407",
        "date": "30 December 2020",
        "dateymd": "2020-12-30",
        "totalconfirmed": "10267208",
        "totaldeceased": "148183",
        "totalrecovered": "9859596"
    },
    {
        "dailyconfirmed": "19026",
        "dailydeceased": "244",
        "dailyrecovered": "21969",
        "date": "31 December 2020",
        "dateymd": "2020-12-31",
        "totalconfirmed": "10286234",
        "totaldeceased": "148427",
        "totalrecovered": "9881565"
    },
    {
        "dailyconfirmed": "20159",
        "dailydeceased": "237",
        "dailyrecovered": "23838",
        "date": "1 January 2021",
        "dateymd": "2021-01-01",
        "totalconfirmed": "10306393",
        "totaldeceased": "148664",
        "totalrecovered": "9905403"
    },
    {
        "dailyconfirmed": "18144",
        "dailydeceased": "216",
        "dailyrecovered": "20903",
        "date": "2 January 2021",
        "dateymd": "2021-01-02",
        "totalconfirmed": "10324537",
        "totaldeceased": "148880",
        "totalrecovered": "9926306"
    },
    {
        "dailyconfirmed": "16678",
        "dailydeceased": "215",
        "dailyrecovered": "19658",
        "date": "3 January 2021",
        "dateymd": "2021-01-03",
        "totalconfirmed": "10341215",
        "totaldeceased": "149095",
        "totalrecovered": "9945964"
    },
    {
        "dailyconfirmed": "16278",
        "dailydeceased": "200",
        "dailyrecovered": "29209",
        "date": "4 January 2021",
        "dateymd": "2021-01-04",
        "totalconfirmed": "10357493",
        "totaldeceased": "149295",
        "totalrecovered": "9975173"
    },
    {
        "dailyconfirmed": "17909",
        "dailydeceased": "265",
        "dailyrecovered": "21161",
        "date": "5 January 2021",
        "dateymd": "2021-01-05",
        "totalconfirmed": "10375402",
        "totaldeceased": "149560",
        "totalrecovered": "9996334"
    },
    {
        "dailyconfirmed": "20472",
        "dailydeceased": "222",
        "dailyrecovered": "19689",
        "date": "6 January 2021",
        "dateymd": "2021-01-06",
        "totalconfirmed": "10395874",
        "totaldeceased": "149782",
        "totalrecovered": "10016023"
    },
    {
        "dailyconfirmed": "18123",
        "dailydeceased": "233",
        "dailyrecovered": "20503",
        "date": "7 January 2021",
        "dateymd": "2021-01-07",
        "totalconfirmed": "10413997",
        "totaldeceased": "150015",
        "totalrecovered": "10036526"
    },
    {
        "dailyconfirmed": "18453",
        "dailydeceased": "229",
        "dailyrecovered": "19242",
        "date": "8 January 2021",
        "dateymd": "2021-01-08",
        "totalconfirmed": "10432450",
        "totaldeceased": "150244",
        "totalrecovered": "10055768"
    },
    {
        "dailyconfirmed": "18820",
        "dailydeceased": "213",
        "dailyrecovered": "19460",
        "date": "9 January 2021",
        "dateymd": "2021-01-09",
        "totalconfirmed": "10451270",
        "totaldeceased": "150457",
        "totalrecovered": "10075228"
    },
    {
        "dailyconfirmed": "16086",
        "dailydeceased": "150",
        "dailyrecovered": "16737",
        "date": "10 January 2021",
        "dateymd": "2021-01-10",
        "totalconfirmed": "10467356",
        "totaldeceased": "150607",
        "totalrecovered": "10091965"
    },
    {
        "dailyconfirmed": "12481",
        "dailydeceased": "166",
        "dailyrecovered": "18578",
        "date": "11 January 2021",
        "dateymd": "2021-01-11",
        "totalconfirmed": "10479837",
        "totaldeceased": "150773",
        "totalrecovered": "10110543"
    },
    {
        "dailyconfirmed": "15903",
        "dailydeceased": "200",
        "dailyrecovered": "17762",
        "date": "12 January 2021",
        "dateymd": "2021-01-12",
        "totalconfirmed": "10495740",
        "totaldeceased": "150973",
        "totalrecovered": "10128305"
    },
    {
        "dailyconfirmed": "17015",
        "dailydeceased": "201",
        "dailyrecovered": "17797",
        "date": "13 January 2021",
        "dateymd": "2021-01-13",
        "totalconfirmed": "10512755",
        "totaldeceased": "151174",
        "totalrecovered": "10146102"
    },
    {
        "dailyconfirmed": "15677",
        "dailydeceased": "189",
        "dailyrecovered": "15943",
        "date": "14 January 2021",
        "dateymd": "2021-01-14",
        "totalconfirmed": "10528432",
        "totaldeceased": "151363",
        "totalrecovered": "10162045"
    },
    {
        "dailyconfirmed": "15155",
        "dailydeceased": "176",
        "dailyrecovered": "16809",
        "date": "15 January 2021",
        "dateymd": "2021-01-15",
        "totalconfirmed": "10543587",
        "totaldeceased": "151539",
        "totalrecovered": "10178854"
    },
    {
        "dailyconfirmed": "15050",
        "dailydeceased": "181",
        "dailyrecovered": "17202",
        "date": "16 January 2021",
        "dateymd": "2021-01-16",
        "totalconfirmed": "10558637",
        "totaldeceased": "151720",
        "totalrecovered": "10196056"
    },
    {
        "dailyconfirmed": "13962",
        "dailydeceased": "145",
        "dailyrecovered": "14513",
        "date": "17 January 2021",
        "dateymd": "2021-01-17",
        "totalconfirmed": "10572599",
        "totaldeceased": "151865",
        "totalrecovered": "10210569"
    },
    {
        "dailyconfirmed": "9987",
        "dailydeceased": "137",
        "dailyrecovered": "17127",
        "date": "18 January 2021",
        "dateymd": "2021-01-18",
        "totalconfirmed": "10582586",
        "totaldeceased": "152002",
        "totalrecovered": "10227696"
    },
    {
        "dailyconfirmed": "13787",
        "dailydeceased": "162",
        "dailyrecovered": "17229",
        "date": "19 January 2021",
        "dateymd": "2021-01-19",
        "totalconfirmed": "10596373",
        "totaldeceased": "152164",
        "totalrecovered": "10244925"
    },
    {
        "dailyconfirmed": "15279",
        "dailydeceased": "152",
        "dailyrecovered": "20071",
        "date": "20 January 2021",
        "dateymd": "2021-01-20",
        "totalconfirmed": "10611652",
        "totaldeceased": "152316",
        "totalrecovered": "10264996"
    },
    {
        "dailyconfirmed": "14495",
        "dailydeceased": "161",
        "dailyrecovered": "17734",
        "date": "21 January 2021",
        "dateymd": "2021-01-21",
        "totalconfirmed": "10626147",
        "totaldeceased": "152477",
        "totalrecovered": "10282730"
    },
    {
        "dailyconfirmed": "14323",
        "dailydeceased": "153",
        "dailyrecovered": "17166",
        "date": "22 January 2021",
        "dateymd": "2021-01-22",
        "totalconfirmed": "10640470",
        "totaldeceased": "152630",
        "totalrecovered": "10299896"
    },
    {
        "dailyconfirmed": "14896",
        "dailydeceased": "156",
        "dailyrecovered": "16033",
        "date": "23 January 2021",
        "dateymd": "2021-01-23",
        "totalconfirmed": "10655366",
        "totaldeceased": "152786",
        "totalrecovered": "10315929"
    },
    {
        "dailyconfirmed": "13232",
        "dailydeceased": "131",
        "dailyrecovered": "13148",
        "date": "24 January 2021",
        "dateymd": "2021-01-24",
        "totalconfirmed": "10668598",
        "totaldeceased": "152917",
        "totalrecovered": "10329077"
    },
    {
        "dailyconfirmed": "9098",
        "dailydeceased": "116",
        "dailyrecovered": "16092",
        "date": "25 January 2021",
        "dateymd": "2021-01-25",
        "totalconfirmed": "10677696",
        "totaldeceased": "153033",
        "totalrecovered": "10345169"
    },
    {
        "dailyconfirmed": "12733",
        "dailydeceased": "138",
        "dailyrecovered": "13250",
        "date": "26 January 2021",
        "dateymd": "2021-01-26",
        "totalconfirmed": "10690429",
        "totaldeceased": "153171",
        "totalrecovered": "10358419"
    },
    {
        "dailyconfirmed": "11556",
        "dailydeceased": "123",
        "dailyrecovered": "14261",
        "date": "27 January 2021",
        "dateymd": "2021-01-27",
        "totalconfirmed": "10701985",
        "totaldeceased": "153294",
        "totalrecovered": "10372680"
    },
    {
        "dailyconfirmed": "18912",
        "dailydeceased": "162",
        "dailyrecovered": "20315",
        "date": "28 January 2021",
        "dateymd": "2021-01-28",
        "totalconfirmed": "10720897",
        "totaldeceased": "153456",
        "totalrecovered": "10392995"
    },
    {
        "dailyconfirmed": "13054",
        "dailydeceased": "137",
        "dailyrecovered": "14886",
        "date": "29 January 2021",
        "dateymd": "2021-01-29",
        "totalconfirmed": "10733951",
        "totaldeceased": "153593",
        "totalrecovered": "10407881"
    },
    {
        "dailyconfirmed": "13073",
        "dailydeceased": "128",
        "dailyrecovered": "14077",
        "date": "30 January 2021",
        "dateymd": "2021-01-30",
        "totalconfirmed": "10747024",
        "totaldeceased": "153721",
        "totalrecovered": "10421958"
    },
    {
        "dailyconfirmed": "11527",
        "dailydeceased": "116",
        "dailyrecovered": "11882",
        "date": "31 January 2021",
        "dateymd": "2021-01-31",
        "totalconfirmed": "10758551",
        "totaldeceased": "153837",
        "totalrecovered": "10433840"
    },
    {
        "dailyconfirmed": "8579",
        "dailydeceased": "94",
        "dailyrecovered": "13443",
        "date": "1 February 2021",
        "dateymd": "2021-02-01",
        "totalconfirmed": "10767130",
        "totaldeceased": "153931",
        "totalrecovered": "10447283"
    },
    {
        "dailyconfirmed": "11001",
        "dailydeceased": "113",
        "dailyrecovered": "14250",
        "date": "2 February 2021",
        "dateymd": "2021-02-02",
        "totalconfirmed": "10778131",
        "totaldeceased": "154044",
        "totalrecovered": "10461533"
    },
    {
        "dailyconfirmed": "12925",
        "dailydeceased": "107",
        "dailyrecovered": "17813",
        "date": "3 February 2021",
        "dateymd": "2021-02-03",
        "totalconfirmed": "10791056",
        "totaldeceased": "154151",
        "totalrecovered": "10479346"
    },
    {
        "dailyconfirmed": "12401",
        "dailydeceased": "120",
        "dailyrecovered": "15788",
        "date": "4 February 2021",
        "dateymd": "2021-02-04",
        "totalconfirmed": "10803457",
        "totaldeceased": "154271",
        "totalrecovered": "10495134"
    },
    {
        "dailyconfirmed": "11711",
        "dailydeceased": "95",
        "dailyrecovered": "14512",
        "date": "5 February 2021",
        "dateymd": "2021-02-05",
        "totalconfirmed": "10815168",
        "totaldeceased": "154366",
        "totalrecovered": "10509646"
    },
    {
        "dailyconfirmed": "12069",
        "dailydeceased": "75",
        "dailyrecovered": "11761",
        "date": "6 February 2021",
        "dateymd": "2021-02-06",
        "totalconfirmed": "10827237",
        "totaldeceased": "154441",
        "totalrecovered": "10521407"
    },
    {
        "dailyconfirmed": "11786",
        "dailydeceased": "86",
        "dailyrecovered": "11756",
        "date": "7 February 2021",
        "dateymd": "2021-02-07",
        "totalconfirmed": "10839023",
        "totaldeceased": "154527",
        "totalrecovered": "10533163"
    },
    {
        "dailyconfirmed": "8715",
        "dailydeceased": "78",
        "dailyrecovered": "13600",
        "date": "8 February 2021",
        "dateymd": "2021-02-08",
        "totalconfirmed": "10847738",
        "totaldeceased": "154605",
        "totalrecovered": "10546763"
    },
    {
        "dailyconfirmed": "10731",
        "dailydeceased": "94",
        "dailyrecovered": "12928",
        "date": "9 February 2021",
        "dateymd": "2021-02-09",
        "totalconfirmed": "10858469",
        "totaldeceased": "154699",
        "totalrecovered": "10559691"
    },
    {
        "dailyconfirmed": "12539",
        "dailydeceased": "110",
        "dailyrecovered": "11796",
        "date": "10 February 2021",
        "dateymd": "2021-02-10",
        "totalconfirmed": "10871008",
        "totaldeceased": "154809",
        "totalrecovered": "10571487"
    },
    {
        "dailyconfirmed": "9353",
        "dailydeceased": "85",
        "dailyrecovered": "15722",
        "date": "11 February 2021",
        "dateymd": "2021-02-11",
        "totalconfirmed": "10880361",
        "totaldeceased": "154894",
        "totalrecovered": "10587209"
    },
    {
        "dailyconfirmed": "12137",
        "dailydeceased": "104",
        "dailyrecovered": "11358",
        "date": "12 February 2021",
        "dateymd": "2021-02-12",
        "totalconfirmed": "10892498",
        "totaldeceased": "154998",
        "totalrecovered": "10598567"
    },
    {
        "dailyconfirmed": "12198",
        "dailydeceased": "89",
        "dailyrecovered": "11107",
        "date": "13 February 2021",
        "dateymd": "2021-02-13",
        "totalconfirmed": "10904696",
        "totaldeceased": "155087",
        "totalrecovered": "10609674"
    },
    {
        "dailyconfirmed": "11706",
        "dailydeceased": "91",
        "dailyrecovered": "9500",
        "date": "14 February 2021",
        "dateymd": "2021-02-14",
        "totalconfirmed": "10916402",
        "totaldeceased": "155178",
        "totalrecovered": "10619174"
    },
    {
        "dailyconfirmed": "9086",
        "dailydeceased": "82",
        "dailyrecovered": "11793",
        "date": "15 February 2021",
        "dateymd": "2021-02-15",
        "totalconfirmed": "10925488",
        "totaldeceased": "155260",
        "totalrecovered": "10630967"
    },
    {
        "dailyconfirmed": "11592",
        "dailydeceased": "99",
        "dailyrecovered": "11836",
        "date": "16 February 2021",
        "dateymd": "2021-02-16",
        "totalconfirmed": "10937080",
        "totaldeceased": "155359",
        "totalrecovered": "10642803"
    },
    {
        "dailyconfirmed": "12862",
        "dailydeceased": "100",
        "dailyrecovered": "12028",
        "date": "17 February 2021",
        "dateymd": "2021-02-17",
        "totalconfirmed": "10949942",
        "totaldeceased": "155459",
        "totalrecovered": "10654831"
    },
    {
        "dailyconfirmed": "13237",
        "dailydeceased": "100",
        "dailyrecovered": "10914",
        "date": "18 February 2021",
        "dateymd": "2021-02-18",
        "totalconfirmed": "10963179",
        "totaldeceased": "155559",
        "totalrecovered": "10665745"
    },
    {
        "dailyconfirmed": "13916",
        "dailydeceased": "100",
        "dailyrecovered": "10214",
        "date": "19 February 2021",
        "dateymd": "2021-02-19",
        "totalconfirmed": "10977095",
        "totaldeceased": "155659",
        "totalrecovered": "10675959"
    },
    {
        "dailyconfirmed": "13919",
        "dailydeceased": "89",
        "dailyrecovered": "11413",
        "date": "20 February 2021",
        "dateymd": "2021-02-20",
        "totalconfirmed": "10991014",
        "totaldeceased": "155748",
        "totalrecovered": "10687372"
    },
    {
        "dailyconfirmed": "14278",
        "dailydeceased": "83",
        "dailyrecovered": "9715",
        "date": "21 February 2021",
        "dateymd": "2021-02-21",
        "totalconfirmed": "11005292",
        "totaldeceased": "155831",
        "totalrecovered": "10697087"
    },
    {
        "dailyconfirmed": "10494",
        "dailydeceased": "76",
        "dailyrecovered": "13233",
        "date": "22 February 2021",
        "dateymd": "2021-02-22",
        "totalconfirmed": "11015786",
        "totaldeceased": "155907",
        "totalrecovered": "10710320"
    },
    {
        "dailyconfirmed": "13682",
        "dailydeceased": "103",
        "dailyrecovered": "13969",
        "date": "23 February 2021",
        "dateymd": "2021-02-23",
        "totalconfirmed": "11029468",
        "totaldeceased": "156010",
        "totalrecovered": "10724289"
    },
    {
        "dailyconfirmed": "16930",
        "dailydeceased": "141",
        "dailyrecovered": "12100",
        "date": "24 February 2021",
        "dateymd": "2021-02-24",
        "totalconfirmed": "11046398",
        "totaldeceased": "156151",
        "totalrecovered": "10736389"
    },
    {
        "dailyconfirmed": "16599",
        "dailydeceased": "119",
        "dailyrecovered": "12222",
        "date": "25 February 2021",
        "dateymd": "2021-02-25",
        "totalconfirmed": "11062997",
        "totaldeceased": "156270",
        "totalrecovered": "10748611"
    },
    {
        "dailyconfirmed": "16562",
        "dailydeceased": "114",
        "dailyrecovered": "12790",
        "date": "26 February 2021",
        "dateymd": "2021-02-26",
        "totalconfirmed": "11079559",
        "totaldeceased": "156384",
        "totalrecovered": "10761401"
    },
    {
        "dailyconfirmed": "16805",
        "dailydeceased": "111",
        "dailyrecovered": "11709",
        "date": "27 February 2021",
        "dateymd": "2021-02-27",
        "totalconfirmed": "11096364",
        "totaldeceased": "156495",
        "totalrecovered": "10773110"
    },
    {
        "dailyconfirmed": "15614",
        "dailydeceased": "108",
        "dailyrecovered": "11291",
        "date": "28 February 2021",
        "dateymd": "2021-02-28",
        "totalconfirmed": "11111978",
        "totaldeceased": "156603",
        "totalrecovered": "10784401"
    },
    {
        "dailyconfirmed": "12270",
        "dailydeceased": "92",
        "dailyrecovered": "12472",
        "date": "1 March 2021",
        "dateymd": "2021-03-01",
        "totalconfirmed": "11124248",
        "totaldeceased": "156695",
        "totalrecovered": "10796873"
    },
    {
        "dailyconfirmed": "14998",
        "dailydeceased": "98",
        "dailyrecovered": "13113",
        "date": "2 March 2021",
        "dateymd": "2021-03-02",
        "totalconfirmed": "11139246",
        "totaldeceased": "156793",
        "totalrecovered": "10809986"
    },
    {
        "dailyconfirmed": "17425",
        "dailydeceased": "87",
        "dailyrecovered": "14071",
        "date": "3 March 2021",
        "dateymd": "2021-03-03",
        "totalconfirmed": "11156671",
        "totaldeceased": "156880",
        "totalrecovered": "10824057"
    },
    {
        "dailyconfirmed": "16824",
        "dailydeceased": "113",
        "dailyrecovered": "13788",
        "date": "4 March 2021",
        "dateymd": "2021-03-04",
        "totalconfirmed": "11173495",
        "totaldeceased": "156993",
        "totalrecovered": "10837845"
    },
    {
        "dailyconfirmed": "18324",
        "dailydeceased": "109",
        "dailyrecovered": "14186",
        "date": "5 March 2021",
        "dateymd": "2021-03-05",
        "totalconfirmed": "11191819",
        "totaldeceased": "157102",
        "totalrecovered": "10852031"
    },
    {
        "dailyconfirmed": "18724",
        "dailydeceased": "100",
        "dailyrecovered": "14379",
        "date": "6 March 2021",
        "dateymd": "2021-03-06",
        "totalconfirmed": "11210543",
        "totaldeceased": "157202",
        "totalrecovered": "10866410"
    },
    {
        "dailyconfirmed": "18650",
        "dailydeceased": "97",
        "dailyrecovered": "14303",
        "date": "7 March 2021",
        "dateymd": "2021-03-07",
        "totalconfirmed": "11229193",
        "totaldeceased": "157299",
        "totalrecovered": "10880713"
    },
    {
        "dailyconfirmed": "15353",
        "dailydeceased": "76",
        "dailyrecovered": "16606",
        "date": "8 March 2021",
        "dateymd": "2021-03-08",
        "totalconfirmed": "11244546",
        "totaldeceased": "157375",
        "totalrecovered": "10897319"
    },
    {
        "dailyconfirmed": "17873",
        "dailydeceased": "133",
        "dailyrecovered": "20643",
        "date": "9 March 2021",
        "dateymd": "2021-03-09",
        "totalconfirmed": "11262419",
        "totaldeceased": "157508",
        "totalrecovered": "10917962"
    },
    {
        "dailyconfirmed": "22851",
        "dailydeceased": "125",
        "dailyrecovered": "18154",
        "date": "10 March 2021",
        "dateymd": "2021-03-10",
        "totalconfirmed": "11285270",
        "totaldeceased": "157633",
        "totalrecovered": "10936116"
    },
    {
        "dailyconfirmed": "23298",
        "dailydeceased": "119",
        "dailyrecovered": "15092",
        "date": "11 March 2021",
        "dateymd": "2021-03-11",
        "totalconfirmed": "11308568",
        "totaldeceased": "157752",
        "totalrecovered": "10951208"
    },
    {
        "dailyconfirmed": "24845",
        "dailydeceased": "140",
        "dailyrecovered": "19972",
        "date": "12 March 2021",
        "dateymd": "2021-03-12",
        "totalconfirmed": "11333413",
        "totaldeceased": "157892",
        "totalrecovered": "10971180"
    },
    {
        "dailyconfirmed": "25154",
        "dailydeceased": "159",
        "dailyrecovered": "16508",
        "date": "13 March 2021",
        "dateymd": "2021-03-13",
        "totalconfirmed": "11358567",
        "totaldeceased": "158051",
        "totalrecovered": "10987688"
    },
    {
        "dailyconfirmed": "26513",
        "dailydeceased": "120",
        "dailyrecovered": "17590",
        "date": "14 March 2021",
        "dateymd": "2021-03-14",
        "totalconfirmed": "11385080",
        "totaldeceased": "158171",
        "totalrecovered": "11005278"
    },
    {
        "dailyconfirmed": "24437",
        "dailydeceased": "130",
        "dailyrecovered": "20186",
        "date": "15 March 2021",
        "dateymd": "2021-03-15",
        "totalconfirmed": "11409517",
        "totaldeceased": "158301",
        "totalrecovered": "11025464"
    },
    {
        "dailyconfirmed": "28869",
        "dailydeceased": "187",
        "dailyrecovered": "17746",
        "date": "16 March 2021",
        "dateymd": "2021-03-16",
        "totalconfirmed": "11438386",
        "totaldeceased": "158488",
        "totalrecovered": "11043210"
    },
    {
        "dailyconfirmed": "35838",
        "dailydeceased": "171",
        "dailyrecovered": "17793",
        "date": "17 March 2021",
        "dateymd": "2021-03-17",
        "totalconfirmed": "11474224",
        "totaldeceased": "158659",
        "totalrecovered": "11061003"
    },
    {
        "dailyconfirmed": "39687",
        "dailydeceased": "156",
        "dailyrecovered": "20356",
        "date": "18 March 2021",
        "dateymd": "2021-03-18",
        "totalconfirmed": "11513911",
        "totaldeceased": "158815",
        "totalrecovered": "11081359"
    },
    {
        "dailyconfirmed": "40906",
        "dailydeceased": "188",
        "dailyrecovered": "23623",
        "date": "19 March 2021",
        "dateymd": "2021-03-19",
        "totalconfirmed": "11554817",
        "totaldeceased": "159003",
        "totalrecovered": "11104982"
    },
    {
        "dailyconfirmed": "43815",
        "dailydeceased": "196",
        "dailyrecovered": "22971",
        "date": "20 March 2021",
        "dateymd": "2021-03-20",
        "totalconfirmed": "11598632",
        "totaldeceased": "159199",
        "totalrecovered": "11127953"
    },
    {
        "dailyconfirmed": "47009",
        "dailydeceased": "213",
        "dailyrecovered": "21205",
        "date": "21 March 2021",
        "dateymd": "2021-03-21",
        "totalconfirmed": "11645641",
        "totaldeceased": "159412",
        "totalrecovered": "11149158"
    },
    {
        "dailyconfirmed": "40636",
        "dailydeceased": "197",
        "dailyrecovered": "29779",
        "date": "22 March 2021",
        "dateymd": "2021-03-22",
        "totalconfirmed": "11686277",
        "totaldeceased": "159609",
        "totalrecovered": "11178937"
    },
    {
        "dailyconfirmed": "47239",
        "dailydeceased": "277",
        "dailyrecovered": "23913",
        "date": "23 March 2021",
        "dateymd": "2021-03-23",
        "totalconfirmed": "11733516",
        "totaldeceased": "159886",
        "totalrecovered": "11202850"
    },
    {
        "dailyconfirmed": "53419",
        "dailydeceased": "249",
        "dailyrecovered": "26575",
        "date": "24 March 2021",
        "dateymd": "2021-03-24",
        "totalconfirmed": "11786935",
        "totaldeceased": "160135",
        "totalrecovered": "11229425"
    },
    {
        "dailyconfirmed": "59083",
        "dailydeceased": "257",
        "dailyrecovered": "32917",
        "date": "25 March 2021",
        "dateymd": "2021-03-25",
        "totalconfirmed": "11846018",
        "totaldeceased": "160392",
        "totalrecovered": "11262342"
    },
    {
        "dailyconfirmed": "62276",
        "dailydeceased": "292",
        "dailyrecovered": "30341",
        "date": "26 March 2021",
        "dateymd": "2021-03-26",
        "totalconfirmed": "11908294",
        "totaldeceased": "160684",
        "totalrecovered": "11292683"
    },
    {
        "dailyconfirmed": "62632",
        "dailydeceased": "311",
        "dailyrecovered": "28728",
        "date": "27 March 2021",
        "dateymd": "2021-03-27",
        "totalconfirmed": "11970926",
        "totaldeceased": "160995",
        "totalrecovered": "11321411"
    },
    {
        "dailyconfirmed": "68206",
        "dailydeceased": "295",
        "dailyrecovered": "32269",
        "date": "28 March 2021",
        "dateymd": "2021-03-28",
        "totalconfirmed": "12039132",
        "totaldeceased": "161290",
        "totalrecovered": "11353680"
    },
    {
        "dailyconfirmed": "56152",
        "dailydeceased": "266",
        "dailyrecovered": "36989",
        "date": "29 March 2021",
        "dateymd": "2021-03-29",
        "totalconfirmed": "12095284",
        "totaldeceased": "161556",
        "totalrecovered": "11390669"
    },
    {
        "dailyconfirmed": "53237",
        "dailydeceased": "355",
        "dailyrecovered": "41242",
        "date": "30 March 2021",
        "dateymd": "2021-03-30",
        "totalconfirmed": "12148521",
        "totaldeceased": "161911",
        "totalrecovered": "11431911"
    },
    {
        "dailyconfirmed": "72113",
        "dailydeceased": "458",
        "dailyrecovered": "40423",
        "date": "31 March 2021",
        "dateymd": "2021-03-31",
        "totalconfirmed": "12220634",
        "totaldeceased": "162369",
        "totalrecovered": "11472334"
    },
    {
        "dailyconfirmed": "81398",
        "dailydeceased": "468",
        "dailyrecovered": "50384",
        "date": "1 April 2021",
        "dateymd": "2021-04-01",
        "totalconfirmed": "12302032",
        "totaldeceased": "162837",
        "totalrecovered": "11522718"
    },
    {
        "dailyconfirmed": "89023",
        "dailydeceased": "713",
        "dailyrecovered": "44179",
        "date": "2 April 2021",
        "dateymd": "2021-04-02",
        "totalconfirmed": "12391055",
        "totaldeceased": "163550",
        "totalrecovered": "11566897"
    },
    {
        "dailyconfirmed": "92994",
        "dailydeceased": "514",
        "dailyrecovered": "60059",
        "date": "3 April 2021",
        "dateymd": "2021-04-03",
        "totalconfirmed": "12484049",
        "totaldeceased": "164064",
        "totalrecovered": "11626956"
    },
    {
        "dailyconfirmed": "103794",
        "dailydeceased": "477",
        "dailyrecovered": "52840",
        "date": "4 April 2021",
        "dateymd": "2021-04-04",
        "totalconfirmed": "12587843",
        "totaldeceased": "164541",
        "totalrecovered": "11679796"
    },
    {
        "dailyconfirmed": "96563",
        "dailydeceased": "446",
        "dailyrecovered": "50100",
        "date": "5 April 2021",
        "dateymd": "2021-04-05",
        "totalconfirmed": "12684406",
        "totaldeceased": "164987",
        "totalrecovered": "11729896"
    },
    {
        "dailyconfirmed": "115312",
        "dailydeceased": "630",
        "dailyrecovered": "59714",
        "date": "6 April 2021",
        "dateymd": "2021-04-06",
        "totalconfirmed": "12799718",
        "totaldeceased": "165617",
        "totalrecovered": "11789610"
    },
    {
        "dailyconfirmed": "126276",
        "dailydeceased": "684",
        "dailyrecovered": "59137",
        "date": "7 April 2021",
        "dateymd": "2021-04-07",
        "totalconfirmed": "12925994",
        "totaldeceased": "166301",
        "totalrecovered": "11848747"
    },
    {
        "dailyconfirmed": "131878",
        "dailydeceased": "802",
        "dailyrecovered": "61829",
        "date": "8 April 2021",
        "dateymd": "2021-04-08",
        "totalconfirmed": "13057872",
        "totaldeceased": "167103",
        "totalrecovered": "11910576"
    },
    {
        "dailyconfirmed": "144945",
        "dailydeceased": "773",
        "dailyrecovered": "77263",
        "date": "9 April 2021",
        "dateymd": "2021-04-09",
        "totalconfirmed": "13202817",
        "totaldeceased": "167876",
        "totalrecovered": "11987839"
    },
    {
        "dailyconfirmed": "152565",
        "dailydeceased": "838",
        "dailyrecovered": "90328",
        "date": "10 April 2021",
        "dateymd": "2021-04-10",
        "totalconfirmed": "13355382",
        "totaldeceased": "168714",
        "totalrecovered": "12078167"
    },
    {
        "dailyconfirmed": "169914",
        "dailydeceased": "904",
        "dailyrecovered": "75380",
        "date": "11 April 2021",
        "dateymd": "2021-04-11",
        "totalconfirmed": "13525296",
        "totaldeceased": "169618",
        "totalrecovered": "12153547"
    },
    {
        "dailyconfirmed": "160838",
        "dailydeceased": "880",
        "dailyrecovered": "96746",
        "date": "12 April 2021",
        "dateymd": "2021-04-12",
        "totalconfirmed": "13686134",
        "totaldeceased": "170498",
        "totalrecovered": "12250293"
    },
    {
        "dailyconfirmed": "185297",
        "dailydeceased": "1026",
        "dailyrecovered": "82271",
        "date": "13 April 2021",
        "dateymd": "2021-04-13",
        "totalconfirmed": "13871431",
        "totaldeceased": "171524",
        "totalrecovered": "12332564"
    },
    {
        "dailyconfirmed": "199584",
        "dailydeceased": "1038",
        "dailyrecovered": "93425",
        "date": "14 April 2021",
        "dateymd": "2021-04-14",
        "totalconfirmed": "14071015",
        "totaldeceased": "172562",
        "totalrecovered": "12425989"
    },
    {
        "dailyconfirmed": "216828",
        "dailydeceased": "1184",
        "dailyrecovered": "117897",
        "date": "15 April 2021",
        "dateymd": "2021-04-15",
        "totalconfirmed": "14287843",
        "totaldeceased": "173746",
        "totalrecovered": "12543886"
    },
    {
        "dailyconfirmed": "234002",
        "dailydeceased": "1338",
        "dailyrecovered": "122886",
        "date": "16 April 2021",
        "dateymd": "2021-04-16",
        "totalconfirmed": "14521845",
        "totaldeceased": "175084",
        "totalrecovered": "12666772"
    },
    {
        "dailyconfirmed": "260895",
        "dailydeceased": "1498",
        "dailyrecovered": "138209",
        "date": "17 April 2021",
        "dateymd": "2021-04-17",
        "totalconfirmed": "14782740",
        "totaldeceased": "176582",
        "totalrecovered": "12804981"
    },
    {
        "dailyconfirmed": "275063",
        "dailydeceased": "1620",
        "dailyrecovered": "143839",
        "date": "18 April 2021",
        "dateymd": "2021-04-18",
        "totalconfirmed": "15057803",
        "totaldeceased": "178202",
        "totalrecovered": "12948820"
    },
    {
        "dailyconfirmed": "257003",
        "dailydeceased": "1757",
        "dailyrecovered": "154357",
        "date": "19 April 2021",
        "dateymd": "2021-04-19",
        "totalconfirmed": "15314806",
        "totaldeceased": "179959",
        "totalrecovered": "13103177"
    },
    {
        "dailyconfirmed": "294365",
        "dailydeceased": "2021",
        "dailyrecovered": "166656",
        "date": "20 April 2021",
        "dateymd": "2021-04-20",
        "totalconfirmed": "15609171",
        "totaldeceased": "181980",
        "totalrecovered": "13269833"
    },
    {
        "dailyconfirmed": "315752",
        "dailydeceased": "2101",
        "dailyrecovered": "179434",
        "date": "21 April 2021",
        "dateymd": "2021-04-21",
        "totalconfirmed": "15924923",
        "totaldeceased": "184081",
        "totalrecovered": "13449267"
    },
    {
        "dailyconfirmed": "332531",
        "dailydeceased": "2257",
        "dailyrecovered": "192317",
        "date": "22 April 2021",
        "dateymd": "2021-04-22",
        "totalconfirmed": "16257454",
        "totaldeceased": "186338",
        "totalrecovered": "13641584"
    },
    {
        "dailyconfirmed": "345296",
        "dailydeceased": "2620",
        "dailyrecovered": "220545",
        "date": "23 April 2021",
        "dateymd": "2021-04-23",
        "totalconfirmed": "16602750",
        "totaldeceased": "188958",
        "totalrecovered": "13862129"
    },
    {
        "dailyconfirmed": "348996",
        "dailydeceased": "2761",
        "dailyrecovered": "215809",
        "date": "24 April 2021",
        "dateymd": "2021-04-24",
        "totalconfirmed": "16951746",
        "totaldeceased": "191719",
        "totalrecovered": "14077938"
    },
    {
        "dailyconfirmed": "354658",
        "dailydeceased": "2808",
        "dailyrecovered": "218626",
        "date": "25 April 2021",
        "dateymd": "2021-04-25",
        "totalconfirmed": "17306404",
        "totaldeceased": "194527",
        "totalrecovered": "14296564"
    },
    {
        "dailyconfirmed": "319471",
        "dailydeceased": "2762",
        "dailyrecovered": "249009",
        "date": "26 April 2021",
        "dateymd": "2021-04-26",
        "totalconfirmed": "17625875",
        "totaldeceased": "197289",
        "totalrecovered": "14545573"
    },
    {
        "dailyconfirmed": "362913",
        "dailydeceased": "3286",
        "dailyrecovered": "262349",
        "date": "27 April 2021",
        "dateymd": "2021-04-27",
        "totalconfirmed": "17988788",
        "totaldeceased": "200575",
        "totalrecovered": "14807922"
    },
    {
        "dailyconfirmed": "379404",
        "dailydeceased": "3646",
        "dailyrecovered": "274171",
        "date": "28 April 2021",
        "dateymd": "2021-04-28",
        "totalconfirmed": "18368192",
        "totaldeceased": "204221",
        "totalrecovered": "15082093"
    },
    {
        "dailyconfirmed": "386773",
        "dailydeceased": "3502",
        "dailyrecovered": "291727",
        "date": "29 April 2021",
        "dateymd": "2021-04-29",
        "totalconfirmed": "18754965",
        "totaldeceased": "207723",
        "totalrecovered": "15373820"
    },
    {
        "dailyconfirmed": "402014",
        "dailydeceased": "3525",
        "dailyrecovered": "299198",
        "date": "30 April 2021",
        "dateymd": "2021-04-30",
        "totalconfirmed": "19156979",
        "totaldeceased": "211248",
        "totalrecovered": "15673018"
    },
    {
        "dailyconfirmed": "392576",
        "dailydeceased": "3685",
        "dailyrecovered": "308688",
        "date": "1 May 2021",
        "dateymd": "2021-05-01",
        "totalconfirmed": "19549555",
        "totaldeceased": "214933",
        "totalrecovered": "15981706"
    },
    {
        "dailyconfirmed": "370090",
        "dailydeceased": "3423",
        "dailyrecovered": "300004",
        "date": "2 May 2021",
        "dateymd": "2021-05-02",
        "totalconfirmed": "19919645",
        "totaldeceased": "218356",
        "totalrecovered": "16281710"
    },
    {
        "dailyconfirmed": "355769",
        "dailydeceased": "3439",
        "dailyrecovered": "318910",
        "date": "3 May 2021",
        "dateymd": "2021-05-03",
        "totalconfirmed": "20275414",
        "totaldeceased": "221795",
        "totalrecovered": "16600620"
    },
    {
        "dailyconfirmed": "382847",
        "dailydeceased": "3786",
        "dailyrecovered": "337699",
        "date": "4 May 2021",
        "dateymd": "2021-05-04",
        "totalconfirmed": "20658261",
        "totaldeceased": "225581",
        "totalrecovered": "16938319"
    },
    {
        "dailyconfirmed": "412624",
        "dailydeceased": "3979",
        "dailyrecovered": "330718",
        "date": "5 May 2021",
        "dateymd": "2021-05-05",
        "totalconfirmed": "21070885",
        "totaldeceased": "229560",
        "totalrecovered": "17269037"
    },
    {
        "dailyconfirmed": "414280",
        "dailydeceased": "3923",
        "dailyrecovered": "328349",
        "date": "6 May 2021",
        "dateymd": "2021-05-06",
        "totalconfirmed": "21485165",
        "totaldeceased": "233483",
        "totalrecovered": "17597386"
    },
    {
        "dailyconfirmed": "406901",
        "dailydeceased": "4233",
        "dailyrecovered": "327675",
        "date": "7 May 2021",
        "dateymd": "2021-05-07",
        "totalconfirmed": "21892066",
        "totaldeceased": "237716",
        "totalrecovered": "17925061"
    },
    {
        "dailyconfirmed": "403808",
        "dailydeceased": "4092",
        "dailyrecovered": "386395",
        "date": "8 May 2021",
        "dateymd": "2021-05-08",
        "totalconfirmed": "22295874",
        "totaldeceased": "241808",
        "totalrecovered": "18311456"
    },
    {
        "dailyconfirmed": "366455",
        "dailydeceased": "3749",
        "dailyrecovered": "353777",
        "date": "9 May 2021",
        "dateymd": "2021-05-09",
        "totalconfirmed": "22662329",
        "totaldeceased": "245557",
        "totalrecovered": "18665233"
    },
    {
        "dailyconfirmed": "329491",
        "dailydeceased": "3879",
        "dailyrecovered": "355930",
        "date": "10 May 2021",
        "dateymd": "2021-05-10",
        "totalconfirmed": "22991820",
        "totaldeceased": "249436",
        "totalrecovered": "19021163"
    },
    {
        "dailyconfirmed": "348555",
        "dailydeceased": "4198",
        "dailyrecovered": "355398",
        "date": "11 May 2021",
        "dateymd": "2021-05-11",
        "totalconfirmed": "23340375",
        "totaldeceased": "253634",
        "totalrecovered": "19376561"
    },
    {
        "dailyconfirmed": "362632",
        "dailydeceased": "4128",
        "dailyrecovered": "352005",
        "date": "12 May 2021",
        "dateymd": "2021-05-12",
        "totalconfirmed": "23703007",
        "totaldeceased": "257762",
        "totalrecovered": "19728566"
    },
    {
        "dailyconfirmed": "343005",
        "dailydeceased": "4000",
        "dailyrecovered": "344676",
        "date": "13 May 2021",
        "dateymd": "2021-05-13",
        "totalconfirmed": "24046012",
        "totaldeceased": "261762",
        "totalrecovered": "20073242"
    },
    {
        "dailyconfirmed": "326256",
        "dailydeceased": "3889",
        "dailyrecovered": "353200",
        "date": "14 May 2021",
        "dateymd": "2021-05-14",
        "totalconfirmed": "24372268",
        "totaldeceased": "265651",
        "totalrecovered": "20426442"
    },
    {
        "dailyconfirmed": "310757",
        "dailydeceased": "4077",
        "dailyrecovered": "362547",
        "date": "15 May 2021",
        "dateymd": "2021-05-15",
        "totalconfirmed": "24683025",
        "totaldeceased": "269728",
        "totalrecovered": "20788989"
    },
    {
        "dailyconfirmed": "281837",
        "dailydeceased": "4098",
        "dailyrecovered": "378526",
        "date": "16 May 2021",
        "dateymd": "2021-05-16",
        "totalconfirmed": "24964862",
        "totaldeceased": "273826",
        "totalrecovered": "21167515"
    },
    {
        "dailyconfirmed": "263021",
        "dailydeceased": "4334",
        "dailyrecovered": "422391",
        "date": "17 May 2021",
        "dateymd": "2021-05-17",
        "totalconfirmed": "25227883",
        "totaldeceased": "278160",
        "totalrecovered": "21589906"
    },
    {
        "dailyconfirmed": "267246",
        "dailydeceased": "4529",
        "dailyrecovered": "389758",
        "date": "18 May 2021",
        "dateymd": "2021-05-18",
        "totalconfirmed": "25495129",
        "totaldeceased": "282689",
        "totalrecovered": "21979664"
    },
    {
        "dailyconfirmed": "276187",
        "dailydeceased": "3877",
        "dailyrecovered": "369005",
        "date": "19 May 2021",
        "dateymd": "2021-05-19",
        "totalconfirmed": "25771316",
        "totaldeceased": "286566",
        "totalrecovered": "22348669"
    },
    {
        "dailyconfirmed": "259242",
        "dailydeceased": "4209",
        "dailyrecovered": "357173",
        "date": "20 May 2021",
        "dateymd": "2021-05-20",
        "totalconfirmed": "26030558",
        "totaldeceased": "290775",
        "totalrecovered": "22705842"
    },
    {
        "dailyconfirmed": "257299",
        "dailydeceased": "4194",
        "dailyrecovered": "357625",
        "date": "21 May 2021",
        "dateymd": "2021-05-21",
        "totalconfirmed": "26287857",
        "totaldeceased": "294969",
        "totalrecovered": "23063467"
    },
    {
        "dailyconfirmed": "240897",
        "dailydeceased": "3739",
        "dailyrecovered": "355138",
        "date": "22 May 2021",
        "dateymd": "2021-05-22",
        "totalconfirmed": "26528754",
        "totaldeceased": "298708",
        "totalrecovered": "23418605"
    },
    {
        "dailyconfirmed": "222834",
        "dailydeceased": "4454",
        "dailyrecovered": "302253",
        "date": "23 May 2021",
        "dateymd": "2021-05-23",
        "totalconfirmed": "26751588",
        "totaldeceased": "303162",
        "totalrecovered": "23720858"
    },
    {
        "dailyconfirmed": "195857",
        "dailydeceased": "3509",
        "dailyrecovered": "326737",
        "date": "24 May 2021",
        "dateymd": "2021-05-24",
        "totalconfirmed": "26947445",
        "totaldeceased": "306671",
        "totalrecovered": "24047595"
    },
    {
        "dailyconfirmed": "208992",
        "dailydeceased": "4160",
        "dailyrecovered": "295264",
        "date": "25 May 2021",
        "dateymd": "2021-05-25",
        "totalconfirmed": "27156437",
        "totaldeceased": "310831",
        "totalrecovered": "24342859"
    },
    {
        "dailyconfirmed": "211510",
        "dailydeceased": "3843",
        "dailyrecovered": "283054",
        "date": "26 May 2021",
        "dateymd": "2021-05-26",
        "totalconfirmed": "27367947",
        "totaldeceased": "314674",
        "totalrecovered": "24625913"
    },
    {
        "dailyconfirmed": "186075",
        "dailydeceased": "3659",
        "dailyrecovered": "271002",
        "date": "27 May 2021",
        "dateymd": "2021-05-27",
        "totalconfirmed": "27554022",
        "totaldeceased": "318333",
        "totalrecovered": "24896915"
    },
    {
        "dailyconfirmed": "174083",
        "dailydeceased": "3611",
        "dailyrecovered": "285332",
        "date": "28 May 2021",
        "dateymd": "2021-05-28",
        "totalconfirmed": "27728105",
        "totaldeceased": "321944",
        "totalrecovered": "25182247"
    },
    {
        "dailyconfirmed": "165282",
        "dailydeceased": "3463",
        "dailyrecovered": "264483",
        "date": "29 May 2021",
        "dateymd": "2021-05-29",
        "totalconfirmed": "27893387",
        "totaldeceased": "325407",
        "totalrecovered": "25446730"
    },
    {
        "dailyconfirmed": "153396",
        "dailydeceased": "3130",
        "dailyrecovered": "237664",
        "date": "30 May 2021",
        "dateymd": "2021-05-30",
        "totalconfirmed": "28046783",
        "totaldeceased": "328537",
        "totalrecovered": "25684394"
    },
    {
        "dailyconfirmed": "126883",
        "dailydeceased": "2783",
        "dailyrecovered": "255125",
        "date": "31 May 2021",
        "dateymd": "2021-05-31",
        "totalconfirmed": "28173666",
        "totaldeceased": "331320",
        "totalrecovered": "25939519"
    },
    {
        "dailyconfirmed": "133152",
        "dailydeceased": "3205",
        "dailyrecovered": "231397",
        "date": "1 June 2021",
        "dateymd": "2021-06-01",
        "totalconfirmed": "28306818",
        "totaldeceased": "334525",
        "totalrecovered": "26170916"
    },
    {
        "dailyconfirmed": "134044",
        "dailydeceased": "2898",
        "dailyrecovered": "211890",
        "date": "2 June 2021",
        "dateymd": "2021-06-02",
        "totalconfirmed": "28440862",
        "totaldeceased": "337423",
        "totalrecovered": "26382806"
    },
    {
        "dailyconfirmed": "132424",
        "dailydeceased": "2717",
        "dailyrecovered": "206722",
        "date": "3 June 2021",
        "dateymd": "2021-06-03",
        "totalconfirmed": "28573286",
        "totaldeceased": "340140",
        "totalrecovered": "26589528"
    },
    {
        "dailyconfirmed": "120454",
        "dailydeceased": "3372",
        "dailyrecovered": "197763",
        "date": "4 June 2021",
        "dateymd": "2021-06-04",
        "totalconfirmed": "28693740",
        "totaldeceased": "343512",
        "totalrecovered": "26787291"
    },
    {
        "dailyconfirmed": "114488",
        "dailydeceased": "2682",
        "dailyrecovered": "189374",
        "date": "5 June 2021",
        "dateymd": "2021-06-05",
        "totalconfirmed": "28808228",
        "totaldeceased": "346194",
        "totalrecovered": "26976665"
    },
    {
        "dailyconfirmed": "101209",
        "dailydeceased": "2444",
        "dailyrecovered": "174156",
        "date": "6 June 2021",
        "dateymd": "2021-06-06",
        "totalconfirmed": "28909437",
        "totaldeceased": "348638",
        "totalrecovered": "27150821"
    },
    {
        "dailyconfirmed": "85804",
        "dailydeceased": "2107",
        "dailyrecovered": "182866",
        "date": "7 June 2021",
        "dateymd": "2021-06-07",
        "totalconfirmed": "28995241",
        "totaldeceased": "350745",
        "totalrecovered": "27333687"
    },
    {
        "dailyconfirmed": "92787",
        "dailydeceased": "2222",
        "dailyrecovered": "162356",
        "date": "8 June 2021",
        "dateymd": "2021-06-08",
        "totalconfirmed": "29088028",
        "totaldeceased": "352967",
        "totalrecovered": "27496043"
    },
    {
        "dailyconfirmed": "93883",
        "dailydeceased": "6139",
        "dailyrecovered": "149022",
        "date": "9 June 2021",
        "dateymd": "2021-06-09",
        "totalconfirmed": "29181911",
        "totaldeceased": "359106",
        "totalrecovered": "27645065"
    },
    {
        "dailyconfirmed": "91849",
        "dailydeceased": "3414",
        "dailyrecovered": "135329",
        "date": "10 June 2021",
        "dateymd": "2021-06-10",
        "totalconfirmed": "29273760",
        "totaldeceased": "362520",
        "totalrecovered": "27780394"
    },
    {
        "dailyconfirmed": "84574",
        "dailydeceased": "3996",
        "dailyrecovered": "122685",
        "date": "11 June 2021",
        "dateymd": "2021-06-11",
        "totalconfirmed": "29358334",
        "totaldeceased": "366516",
        "totalrecovered": "27903079"
    },
    {
        "dailyconfirmed": "80525",
        "dailydeceased": "3300",
        "dailyrecovered": "132664",
        "date": "12 June 2021",
        "dateymd": "2021-06-12",
        "totalconfirmed": "29438859",
        "totaldeceased": "369816",
        "totalrecovered": "28035743"
    },
    {
        "dailyconfirmed": "71001",
        "dailydeceased": "3922",
        "dailyrecovered": "119574",
        "date": "13 June 2021",
        "dateymd": "2021-06-13",
        "totalconfirmed": "29509860",
        "totaldeceased": "373738",
        "totalrecovered": "28155317"
    },
    {
        "dailyconfirmed": "60008",
        "dailydeceased": "2733",
        "dailyrecovered": "117376",
        "date": "14 June 2021",
        "dateymd": "2021-06-14",
        "totalconfirmed": "29569868",
        "totaldeceased": "376471",
        "totalrecovered": "28272693"
    },
    {
        "dailyconfirmed": "62215",
        "dailydeceased": "2540",
        "dailyrecovered": "107776",
        "date": "15 June 2021",
        "dateymd": "2021-06-15",
        "totalconfirmed": "29632083",
        "totaldeceased": "379011",
        "totalrecovered": "28380469"
    },
    {
        "dailyconfirmed": "67289",
        "dailydeceased": "2329",
        "dailyrecovered": "103900",
        "date": "16 June 2021",
        "dateymd": "2021-06-16",
        "totalconfirmed": "29699372",
        "totaldeceased": "381340",
        "totalrecovered": "28484369"
    },
    {
        "dailyconfirmed": "62436",
        "dailydeceased": "1591",
        "dailyrecovered": "88500",
        "date": "17 June 2021",
        "dateymd": "2021-06-17",
        "totalconfirmed": "29761808",
        "totaldeceased": "382931",
        "totalrecovered": "28572869"
    },
    {
        "dailyconfirmed": "60765",
        "dailydeceased": "1645",
        "dailyrecovered": "97854",
        "date": "18 June 2021",
        "dateymd": "2021-06-18",
        "totalconfirmed": "29822573",
        "totaldeceased": "384576",
        "totalrecovered": "28670723"
    },
    {
        "dailyconfirmed": "58615",
        "dailydeceased": "1574",
        "dailyrecovered": "87608",
        "date": "19 June 2021",
        "dateymd": "2021-06-19",
        "totalconfirmed": "29881188",
        "totaldeceased": "386150",
        "totalrecovered": "28758331"
    },
    {
        "dailyconfirmed": "52978",
        "dailydeceased": "1424",
        "dailyrecovered": "78189",
        "date": "20 June 2021",
        "dateymd": "2021-06-20",
        "totalconfirmed": "29934166",
        "totaldeceased": "387574",
        "totalrecovered": "28836520"
    },
    {
        "dailyconfirmed": "42683",
        "dailydeceased": "1167",
        "dailyrecovered": "82031",
        "date": "21 June 2021",
        "dateymd": "2021-06-21",
        "totalconfirmed": "29976849",
        "totaldeceased": "388741",
        "totalrecovered": "28918551"
    },
    {
        "dailyconfirmed": "50817",
        "dailydeceased": "1359",
        "dailyrecovered": "68697",
        "date": "22 June 2021",
        "dateymd": "2021-06-22",
        "totalconfirmed": "30027666",
        "totaldeceased": "390100",
        "totalrecovered": "28987248"
    },
    {
        "dailyconfirmed": "54309",
        "dailydeceased": "1323",
        "dailyrecovered": "69187",
        "date": "23 June 2021",
        "dateymd": "2021-06-23",
        "totalconfirmed": "30081975",
        "totaldeceased": "391423",
        "totalrecovered": "29056435"
    },
    {
        "dailyconfirmed": "51659",
        "dailydeceased": "1328",
        "dailyrecovered": "64369",
        "date": "24 June 2021",
        "dateymd": "2021-06-24",
        "totalconfirmed": "30133634",
        "totaldeceased": "392751",
        "totalrecovered": "29120804"
    },
    {
        "dailyconfirmed": "48768",
        "dailydeceased": "1183",
        "dailyrecovered": "64819",
        "date": "25 June 2021",
        "dateymd": "2021-06-25",
        "totalconfirmed": "30182402",
        "totaldeceased": "393934",
        "totalrecovered": "29185623"
    },
    {
        "dailyconfirmed": "49844",
        "dailydeceased": "1258",
        "dailyrecovered": "57866",
        "date": "26 June 2021",
        "dateymd": "2021-06-26",
        "totalconfirmed": "30232246",
        "totaldeceased": "395192",
        "totalrecovered": "29243489"
    },
    {
        "dailyconfirmed": "46523",
        "dailydeceased": "978",
        "dailyrecovered": "58563",
        "date": "27 June 2021",
        "dateymd": "2021-06-27",
        "totalconfirmed": "30278769",
        "totaldeceased": "396170",
        "totalrecovered": "29302052"
    },
    {
        "dailyconfirmed": "37070",
        "dailydeceased": "907",
        "dailyrecovered": "57016",
        "date": "28 June 2021",
        "dateymd": "2021-06-28",
        "totalconfirmed": "30315839",
        "totaldeceased": "397077",
        "totalrecovered": "29359068"
    },
    {
        "dailyconfirmed": "46104",
        "dailydeceased": "819",
        "dailyrecovered": "60789",
        "date": "29 June 2021",
        "dateymd": "2021-06-29",
        "totalconfirmed": "30361943",
        "totaldeceased": "397896",
        "totalrecovered": "29419857"
    },
    {
        "dailyconfirmed": "48606",
        "dailydeceased": "1002",
        "dailyrecovered": "61813",
        "date": "30 June 2021",
        "dateymd": "2021-06-30",
        "totalconfirmed": "30410549",
        "totaldeceased": "398898",
        "totalrecovered": "29481670"
    },
    {
        "dailyconfirmed": "46781",
        "dailydeceased": "857",
        "dailyrecovered": "59054",
        "date": "1 July 2021",
        "dateymd": "2021-07-01",
        "totalconfirmed": "30457330",
        "totaldeceased": "399755",
        "totalrecovered": "29540724"
    },
    {
        "dailyconfirmed": "44187",
        "dailydeceased": "737",
        "dailyrecovered": "57497",
        "date": "2 July 2021",
        "dateymd": "2021-07-02",
        "totalconfirmed": "30501517",
        "totaldeceased": "400492",
        "totalrecovered": "29598221"
    },
    {
        "dailyconfirmed": "43027",
        "dailydeceased": "950",
        "dailyrecovered": "52270",
        "date": "3 July 2021",
        "dateymd": "2021-07-03",
        "totalconfirmed": "30544544",
        "totaldeceased": "401442",
        "totalrecovered": "29650491"
    },
    {
        "dailyconfirmed": "40150",
        "dailydeceased": "725",
        "dailyrecovered": "42342",
        "date": "4 July 2021",
        "dateymd": "2021-07-04",
        "totalconfirmed": "30584694",
        "totaldeceased": "402167",
        "totalrecovered": "29692833"
    },
    {
        "dailyconfirmed": "34026",
        "dailydeceased": "552",
        "dailyrecovered": "51933",
        "date": "5 July 2021",
        "dateymd": "2021-07-05",
        "totalconfirmed": "30618720",
        "totaldeceased": "402719",
        "totalrecovered": "29744766"
    },
    {
        "dailyconfirmed": "43964",
        "dailydeceased": "930",
        "dailyrecovered": "47054",
        "date": "6 July 2021",
        "dateymd": "2021-07-06",
        "totalconfirmed": "30662684",
        "totaldeceased": "403649",
        "totalrecovered": "29791820"
    },
    {
        "dailyconfirmed": "45701",
        "dailydeceased": "819",
        "dailyrecovered": "44529",
        "date": "7 July 2021",
        "dateymd": "2021-07-07",
        "totalconfirmed": "30708385",
        "totaldeceased": "404468",
        "totalrecovered": "29836349"
    },
    {
        "dailyconfirmed": "43504",
        "dailydeceased": "908",
        "dailyrecovered": "44204",
        "date": "8 July 2021",
        "dateymd": "2021-07-08",
        "totalconfirmed": "30751889",
        "totaldeceased": "405376",
        "totalrecovered": "29880553"
    },
    {
        "dailyconfirmed": "42660",
        "dailydeceased": "1207",
        "dailyrecovered": "45291",
        "date": "9 July 2021",
        "dateymd": "2021-07-09",
        "totalconfirmed": "30794549",
        "totaldeceased": "406583",
        "totalrecovered": "29925844"
    },
    {
        "dailyconfirmed": "41494",
        "dailydeceased": "898",
        "dailyrecovered": "41511",
        "date": "10 July 2021",
        "dateymd": "2021-07-10",
        "totalconfirmed": "30836043",
        "totaldeceased": "407481",
        "totalrecovered": "29967355"
    },
    {
        "dailyconfirmed": "37654",
        "dailydeceased": "720",
        "dailyrecovered": "39688",
        "date": "11 July 2021",
        "dateymd": "2021-07-11",
        "totalconfirmed": "30873697",
        "totaldeceased": "408201",
        "totalrecovered": "30007043"
    },
    {
        "dailyconfirmed": "30818",
        "dailydeceased": "2024",
        "dailyrecovered": "47544",
        "date": "12 July 2021",
        "dateymd": "2021-07-12",
        "totalconfirmed": "30904515",
        "totaldeceased": "410225",
        "totalrecovered": "30054587"
    },
    {
        "dailyconfirmed": "40314",
        "dailydeceased": "625",
        "dailyrecovered": "42436",
        "date": "13 July 2021",
        "dateymd": "2021-07-13",
        "totalconfirmed": "30944829",
        "totaldeceased": "410850",
        "totalrecovered": "30097023"
    },
    {
        "dailyconfirmed": "41759",
        "dailydeceased": "578",
        "dailyrecovered": "39293",
        "date": "14 July 2021",
        "dateymd": "2021-07-14",
        "totalconfirmed": "30986588",
        "totaldeceased": "411428",
        "totalrecovered": "30136316"
    },
    {
        "dailyconfirmed": "39071",
        "dailydeceased": "544",
        "dailyrecovered": "39827",
        "date": "15 July 2021",
        "dateymd": "2021-07-15",
        "totalconfirmed": "31025659",
        "totaldeceased": "411972",
        "totalrecovered": "30176143"
    },
    {
        "dailyconfirmed": "38117",
        "dailydeceased": "560",
        "dailyrecovered": "43878",
        "date": "16 July 2021",
        "dateymd": "2021-07-16",
        "totalconfirmed": "31063776",
        "totaldeceased": "412532",
        "totalrecovered": "30220021"
    },
    {
        "dailyconfirmed": "41283",
        "dailydeceased": "517",
        "dailyrecovered": "42051",
        "date": "17 July 2021",
        "dateymd": "2021-07-17",
        "totalconfirmed": "31105059",
        "totaldeceased": "413049",
        "totalrecovered": "30262072"
    },
    {
        "dailyconfirmed": "38330",
        "dailydeceased": "501",
        "dailyrecovered": "38545",
        "date": "18 July 2021",
        "dateymd": "2021-07-18",
        "totalconfirmed": "31143389",
        "totaldeceased": "413550",
        "totalrecovered": "30300617"
    },
    {
        "dailyconfirmed": "29420",
        "dailydeceased": "372",
        "dailyrecovered": "45356",
        "date": "19 July 2021",
        "dateymd": "2021-07-19",
        "totalconfirmed": "31172809",
        "totaldeceased": "413922",
        "totalrecovered": "30345973"
    },
    {
        "dailyconfirmed": "42128",
        "dailydeceased": "3998",
        "dailyrecovered": "36876",
        "date": "20 July 2021",
        "dateymd": "2021-07-20",
        "totalconfirmed": "31214937",
        "totaldeceased": "417920",
        "totalrecovered": "30382849"
    },
    {
        "dailyconfirmed": "41687",
        "dailydeceased": "510",
        "dailyrecovered": "38891",
        "date": "21 July 2021",
        "dateymd": "2021-07-21",
        "totalconfirmed": "31256624",
        "totaldeceased": "418430",
        "totalrecovered": "30421740"
    },
    {
        "dailyconfirmed": "34863",
        "dailydeceased": "481",
        "dailyrecovered": "38403",
        "date": "22 July 2021",
        "dateymd": "2021-07-22",
        "totalconfirmed": "31291487",
        "totaldeceased": "418911",
        "totalrecovered": "30460143"
    },
    {
        "dailyconfirmed": "39501",
        "dailydeceased": "542",
        "dailyrecovered": "35144",
        "date": "23 July 2021",
        "dateymd": "2021-07-23",
        "totalconfirmed": "31330988",
        "totaldeceased": "419453",
        "totalrecovered": "30495287"
    },
    {
        "dailyconfirmed": "40286",
        "dailydeceased": "541",
        "dailyrecovered": "40038",
        "date": "24 July 2021",
        "dateymd": "2021-07-24",
        "totalconfirmed": "31371274",
        "totaldeceased": "419994",
        "totalrecovered": "30535325"
    },
    {
        "dailyconfirmed": "38179",
        "dailydeceased": "411",
        "dailyrecovered": "35945",
        "date": "25 July 2021",
        "dateymd": "2021-07-25",
        "totalconfirmed": "31409453",
        "totaldeceased": "420405",
        "totalrecovered": "30571270"
    },
    {
        "dailyconfirmed": "30820",
        "dailydeceased": "418",
        "dailyrecovered": "42503",
        "date": "26 July 2021",
        "dateymd": "2021-07-26",
        "totalconfirmed": "31440273",
        "totaldeceased": "420823",
        "totalrecovered": "30613773"
    },
    {
        "dailyconfirmed": "42971",
        "dailydeceased": "641",
        "dailyrecovered": "41653",
        "date": "27 July 2021",
        "dateymd": "2021-07-27",
        "totalconfirmed": "31483244",
        "totaldeceased": "421464",
        "totalrecovered": "30655426"
    },
    {
        "dailyconfirmed": "43165",
        "dailydeceased": "640",
        "dailyrecovered": "38537",
        "date": "28 July 2021",
        "dateymd": "2021-07-28",
        "totalconfirmed": "31526409",
        "totaldeceased": "422104",
        "totalrecovered": "30693963"
    },
    {
        "dailyconfirmed": "44671",
        "dailydeceased": "549",
        "dailyrecovered": "42115",
        "date": "29 July 2021",
        "dateymd": "2021-07-29",
        "totalconfirmed": "31571080",
        "totaldeceased": "422653",
        "totalrecovered": "30736078"
    },
    {
        "dailyconfirmed": "41499",
        "dailydeceased": "598",
        "dailyrecovered": "37320",
        "date": "30 July 2021",
        "dateymd": "2021-07-30",
        "totalconfirmed": "31612579",
        "totaldeceased": "423251",
        "totalrecovered": "30773398"
    },
    {
        "dailyconfirmed": "41943",
        "dailydeceased": "542",
        "dailyrecovered": "39485",
        "date": "31 July 2021",
        "dateymd": "2021-07-31",
        "totalconfirmed": "31654522",
        "totaldeceased": "423793",
        "totalrecovered": "30812883"
    },
    {
        "dailyconfirmed": "40629",
        "dailydeceased": "424",
        "dailyrecovered": "36628",
        "date": "1 August 2021",
        "dateymd": "2021-08-01",
        "totalconfirmed": "31695151",
        "totaldeceased": "424217",
        "totalrecovered": "30849511"
    },
    {
        "dailyconfirmed": "30085",
        "dailydeceased": "420",
        "dailyrecovered": "39120",
        "date": "2 August 2021",
        "dateymd": "2021-08-02",
        "totalconfirmed": "31725236",
        "totaldeceased": "424637",
        "totalrecovered": "30888631"
    },
    {
        "dailyconfirmed": "42530",
        "dailydeceased": "561",
        "dailyrecovered": "36552",
        "date": "3 August 2021",
        "dateymd": "2021-08-03",
        "totalconfirmed": "31767766",
        "totaldeceased": "425198",
        "totalrecovered": "30925183"
    },
    {
        "dailyconfirmed": "42797",
        "dailydeceased": "532",
        "dailyrecovered": "41873",
        "date": "4 August 2021",
        "dateymd": "2021-08-04",
        "totalconfirmed": "31810563",
        "totaldeceased": "425730",
        "totalrecovered": "30967056"
    },
    {
        "dailyconfirmed": "45005",
        "dailydeceased": "465",
        "dailyrecovered": "40906",
        "date": "5 August 2021",
        "dateymd": "2021-08-05",
        "totalconfirmed": "31855568",
        "totaldeceased": "426195",
        "totalrecovered": "31007962"
    },
    {
        "dailyconfirmed": "38705",
        "dailydeceased": "616",
        "dailyrecovered": "40026",
        "date": "6 August 2021",
        "dateymd": "2021-08-06",
        "totalconfirmed": "31894273",
        "totaldeceased": "426811",
        "totalrecovered": "31047988"
    },
    {
        "dailyconfirmed": "39068",
        "dailydeceased": "491",
        "dailyrecovered": "43935",
        "date": "7 August 2021",
        "dateymd": "2021-08-07",
        "totalconfirmed": "31933341",
        "totaldeceased": "427302",
        "totalrecovered": "31091923"
    },
    {
        "dailyconfirmed": "36036",
        "dailydeceased": "447",
        "dailyrecovered": "39832",
        "date": "8 August 2021",
        "dateymd": "2021-08-08",
        "totalconfirmed": "31969377",
        "totaldeceased": "427749",
        "totalrecovered": "31131755"
    },
    {
        "dailyconfirmed": "27428",
        "dailydeceased": "376",
        "dailyrecovered": "41461",
        "date": "9 August 2021",
        "dateymd": "2021-08-09",
        "totalconfirmed": "31996805",
        "totaldeceased": "428125",
        "totalrecovered": "31173216"
    },
    {
        "dailyconfirmed": "38376",
        "dailydeceased": "496",
        "dailyrecovered": "40097",
        "date": "10 August 2021",
        "dateymd": "2021-08-10",
        "totalconfirmed": "32035181",
        "totaldeceased": "428621",
        "totalrecovered": "31213313"
    },
    {
        "dailyconfirmed": "41586",
        "dailydeceased": "491",
        "dailyrecovered": "39127",
        "date": "11 August 2021",
        "dateymd": "2021-08-11",
        "totalconfirmed": "32076767",
        "totaldeceased": "429112",
        "totalrecovered": "31252440"
    },
    {
        "dailyconfirmed": "40081",
        "dailydeceased": "583",
        "dailyrecovered": "42156",
        "date": "12 August 2021",
        "dateymd": "2021-08-12",
        "totalconfirmed": "32116848",
        "totaldeceased": "429695",
        "totalrecovered": "31294596"
    },
    {
        "dailyconfirmed": "38761",
        "dailydeceased": "477",
        "dailyrecovered": "35759",
        "date": "13 August 2021",
        "dateymd": "2021-08-13",
        "totalconfirmed": "32155609",
        "totaldeceased": "430172",
        "totalrecovered": "31330355"
    },
    {
        "dailyconfirmed": "36135",
        "dailydeceased": "491",
        "dailyrecovered": "37936",
        "date": "14 August 2021",
        "dateymd": "2021-08-14",
        "totalconfirmed": "32191744",
        "totaldeceased": "430663",
        "totalrecovered": "31368291"
    },
    {
        "dailyconfirmed": "33245",
        "dailydeceased": "421",
        "dailyrecovered": "35936",
        "date": "15 August 2021",
        "dateymd": "2021-08-15",
        "totalconfirmed": "32224989",
        "totaldeceased": "431084",
        "totalrecovered": "31404227"
    },
    {
        "dailyconfirmed": "24692",
        "dailydeceased": "438",
        "dailyrecovered": "36862",
        "date": "16 August 2021",
        "dateymd": "2021-08-16",
        "totalconfirmed": "32249681",
        "totaldeceased": "431522",
        "totalrecovered": "31441089"
    }
]

function getData() {
    return casesTimeSeries
}


export default getData;