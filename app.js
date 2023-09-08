let zipCodeTxBx = document.getElementById('zipCodeTxBx')
let submitButton = document.getElementById('submitButton')
let resultsContainer = document.getElementById('resultsContainer')

async function fetchZone(zip){
    let response= await fetch('https://phzmapi.org')
    let zoneResults= await /${zip}.json')
      response.json()
    return zoneResults  
}

submitButton.addEventListener('click', async() => {

  let zipCode= zipCodeTxBx.value

  const zipCodeRegex=/^\d{5}$/
  
  if (zipCodeRegex.test(zipCode)){
  
  let result= await fetchZone(zipCode)

  let zone= `<div class="zoneDisplay">
    <h2>Your frost zone results</h2>
    <span>Zone: $(result.zone)</span>
    <span>Temperature Range: ${result.temperature_range}</span>
  </div>
  
  resultsContainer.innerHTML = zone
  zipCodeTxBx.value=" "

}else{
    resultsContainer.innerHTML="Please enter a valid zip code"
    zipCodeTxBx.value=" "    
    }
})