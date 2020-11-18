
const fetchBeer = (fetch) => {
    return fetch('https://api.punkapi.com/v2/beers/random')
    .then(res=>res.json())
    .then(response => {
        beer = response;
        console.log(beer)
    })
    // setTimeout(()=>{
    //     // console.log(beer[0].name)
    //     displayBeer(beer[0].name)
    // }, 500)
}

fetchBeer(window.fetch)
    .then(beer =>
        document.querySelector('#beer-list').innerHTML = beer.name)

const displayBeer = (beer) => {
    let beerList = document.querySelector('#beer-list');
    let listBeer = document.createElement('p')
    listBeer.innerHTML = beer
    beerList.appendChild(listBeer)

    // console.log(beerDiv)

}

const getOneBeer = () => {
    
    fetchBeer()

    
    // setTimeout(()=>{
    //     console.log(beer[0].name)
    //     displayBeer(beer[0].name)
    // }, 500)

} 


// const getTenBeers = () => {
//     x    
//     fetchBeer()
// }

const getTenBeers = () => {
        fetchBeer()
        setTimeout(()=>{
            fetchBeer()
        }, 500)
        setTimeout(()=>{
            fetchBeer()
        }, 1000)
        setTimeout(()=>{
            fetchBeer()
        }, 1500)
        setTimeout(()=>{
            fetchBeer()
        }, 2000)
        setTimeout(()=>{
            fetchBeer()
        }, 2500)
        setTimeout(()=>{
            fetchBeer()
        }, 3000)
        setTimeout(()=>{
            fetchBeer()
        }, 3500)
        setTimeout(()=>{
            fetchBeer()
        }, 4000)
        setTimeout(()=>{
            fetchBeer()
        }, 4500)
}