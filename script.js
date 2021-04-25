/**
 * TODO: how to deal with usable data output, since input slider has index/non-semantic values
 * TODO: how to deal with Accesibility: screen readers, aria-attributes, etc
 * TODO: ? dont hardcode price by default in HTML, but from JS load function
 * TODO: ? control form options in HTML and use JS to gather that data (to simulate a CMS situation), like: prices, default billing, discount
 * TODO: price monthly and yearly reusable string concatenation with a variable?
 * TODO: do the pagevies and price per interval need to be handled as integers, or are semantic strings also valid?
 * TODO: better to use an object or two arrays?
 */


// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

const priceSlider   = document.getElementById('pricing-range')
const priceMonthly  = document.getElementById('pricing-price-monthly')
const priceYearly   = document.getElementById('pricing-price-yearly')
const traffic       = document.getElementById('traffic')


// const priceRange    = [8, 12, 16, 24, 36]

// function updatePricing() {
//   let index = parseInt(priceSlider.value)
//   priceSlider.value = index; // TODO: why doesnt this work?
//   priceSlider.setAttribute('aria-valuenow', index)
//   priceSlider.setAttribute('aria-valuetext', priceRange[index])

//   priceMonthly.innerText  = '$' + priceRange[index] + '.00'
//   priceYearly.innerText   = '$' + priceRange[index] * .75 + '.00'

//   console.log('index', index, 'price', priceRange[index])
// }

const discount = 0.75;
const priceRangeObj = {
  '10K': 8,
  '50K': 12,
  '100K': 16,
  '500K': 24,
  '1M': 36,
} 
console.log(priceRangeObj)

function updatePricing() {
  const index = parseInt(priceSlider.value)
  const value = priceRangeObj[Object.keys(priceRangeObj)[index]]
  const key   = Object.keys(priceRangeObj)[index]
  const price = value
  const views = key

  priceSlider.value = index; // TODO: why doesnt this work?
  priceSlider.setAttribute('aria-valuenow', index)
  priceSlider.setAttribute('aria-valuetext', price)

  priceMonthly.innerText  = `$${price}.00`;
  priceYearly.innerText   = `$${price * discount}.00`
  traffic.innerText       = `${views} pageviews`

  console.log('index', index, 'price', priceRangeObj[index])
}

function updateSliderBackground() {
  const trackPos = (priceSlider.value / priceSlider.max * 100)
  priceSlider.style.setProperty('--trackPos', trackPos + '%')
}

priceSlider.addEventListener('input', updatePricing)
priceSlider.addEventListener('input', updateSliderBackground)


