this module allows you to check an ip free

## Installation

```
npm install api-ip-sg

or 

yarn add api-ip-sg
```

## Usage

```
    var ip = require("api-ip-sg");

    ip.lookup ('192.190.19.39', data => {
        console.log (data)
    });
```

    >> output
    {
       >> status: 'success',
       >> continent: 'North America',
       >> continentCode: 'NA',
       >> country: 'Canada',
       >> countryCode: 'CA',
       >> region: 'ON',
       >> regionName: 'Ontario',
       >> city: 'Richmond Hill',
       >> district: 'Bayview Glen',
       >> zip: 'L4C',
       >> lat: 43.8528,
       >> lon: -79.4318,
       >> timezone: 'America/Toronto',
       >> offset: -18000,
       >> currency: 'CAD',
       >> isp: 'UnmeteredInternet.com',
       >> org: 'Windscribe Limited',
       >> as: '',
       >> asname: '',
       >> reverse: 'h192-190-19-39.ip4.unmetered.zone',
       >> mobile: false,
       >> proxy: false,
       >> hosting: false,
       >> query: '192.190.19.39'
    }