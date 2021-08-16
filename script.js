const formatNumber = (number) => Intl.NumberFormat('id-ID').format(number)

const setIndonesiaData = (data) => {
    const positive = document.getElementById('covid-positive')
    const sembuh = document.getElementById('covid-sembuh')
    const meninggal = document.getElementById('covid-meninggal')
    
    positive.textContent = formatNumber(data.positif)
    sembuh.textContent = formatNumber(data.sembuh)
    meninggal.textContent = formatNumber(data.meninggal)
}

const getIndonesiaData = () => {
    try {
        fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
            .then(res => res.json())
            .then(json => setIndonesiaData(json))
    } catch (error) {
        console.log(error)
    }
}

getIndonesiaData()




/* 
    https://covid19.mathdro.id/api/countries/Indonesia
    https://indonesia-covid-19.mathdro.id/api/provinsi/
    https://bnpb-inacovid19.hub.arcgis.com/datasets/data-harian-kasus-per-provinsi-covid-19-indonesia/api
    http://vaksincovid19-api.vercel.app/api/vaksin
    https://rs-bed-covid-api.vercel.app/
*/