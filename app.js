 
const axios = require ('axios').default;
module.exports = {
	lookup: (ip, callback) => {
		if (!ip) return null;
		else {
			const url = `http://ip-api.com/json/${ip}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`;
			axios.get (url)
				.then (res => {
					callback (res.data);
					map.set (ip, res.data);
				})
				.catch (e => { throw 'your lookup has failed.. ' + e; });
		}
	},
}