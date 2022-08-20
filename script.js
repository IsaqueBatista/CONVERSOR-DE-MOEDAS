const button = document.getElementById('convert-button')
const currencySelectFrom = document.getElementById('currency-select-from')
const currencySelectTo = document.getElementById('currency-select-to')


// Price of the day 08/18/2022 / Dollar | Euro
// Price of the day 08/20/2022 / Bitcoin 
const dollar = 5.17
const euro = 5.22
const bitcoin = 109853.89


const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('currency-value-text-from')
    const currencyValueText = document.getElementById('currency-value-text-to')


    realValueText.innerHTML = new Intl.NumberFormat("pt-BR",
        {
            style: "currency",
            currency: "BRL",
        }).format(inputReais)
        
        if (currencySelectTo.value === "US$ Dólar Americano") {
            currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(inputReais / dollar)
        }

        if (currencySelectTo.value === "€ Euro") {
            currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
            }).format(inputReais / euro)
        }
    
        if (currencySelectTo.value === "₿ Bitcoin") {
            currencyValueText.innerHTML = new Intl.NumberFormat( {
                style: "currency",
                currency: "BTC",
            }).format(inputReais / bitcoin)
        }
}


const changeCurrencyFrom = () => {

    const currencyNameFrom = document.getElementById('currency-name-from')
    const currencyImgFrom = document.getElementById('currency-img-from')
    const currencyValueTextFrom = document.getElementById('real-value-text-from')


    if (currencySelectFrom.value === 'R$ Real Brasileiro') {
        currencyNameFrom.innerHTML = 'Real'
        currencyImgFrom.src = 'assets/brasil 2.png'
        currencyValueTextFrom.innerHTML = 'R$ 0,00'
    }
}


const changeCurrencyTo = () => {

    const currencyNameTo = document.getElementById('currency-name-to')
    const currencyImgTo = document.getElementById('currency-img-to')
    const currencyValueTextTo = document.getElementById('currency-value-text-to')


    if (currencySelectTo.value === 'US$ Dólar Americano') {
        currencyNameTo.innerHTML = 'Dollar'
        currencyImgTo.src = 'assets/estados-unidos (1) 1.png'
        currencyValueTextTo.innerHTML = 'US$ 0,00'
    }

    if (currencySelectTo.value === '€ Euro') {
        currencyNameTo.innerHTML = 'Euro'
        currencyImgTo.src = 'assets/euro.png'
        currencyValueTextTo.innerHTML = '€ 0,00'
    }

    if (currencySelectTo.value === '₿ Bitcoin') {
        currencyNameTo.innerHTML = "Bitcoin"
        currencyImgTo.src = "assets/BTC.png"
        currencyValueTextTo.innerHTML = '₿ 0.00'
    }
    convertValues()
}



button.addEventListener('click', convertValues)
currencySelectFrom.addEventListener('change', changeCurrencyFrom)
currencySelectTo.addEventListener('change', changeCurrencyTo)
