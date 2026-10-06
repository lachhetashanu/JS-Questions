function memoize(price){
    let cache = new Map();
    
    return function(...args){
        const key = price;

        if(cache.has(cache.keys().next().value)){
            console.log(cache.keys().next().value);
            return key;
        }else{
            args.push(key);
            console.log(...args);
            cache.set(args[0], key);
            console.log(cache.keys().next().value);
        }
    }
}

function calculateFinalPrice(product, regPrice, discount, gst = 18){
    for(let i = 0; i <= 1000000; i++){}

    const discountedPrice = (regPrice * discount) / 100;
    const finalPrice  = regPrice - discountedPrice;
    const finalPriceAfterGST = finalPrice + (finalPrice * (gst/100));
    return finalPriceAfterGST;
}

console.log(Cache)



const finalPrice = memoize(calculateFinalPrice("Jeans", 1000, 10));
finalPrice();

const finalPrice2 = memoize(calculateFinalPrice("Jeans", 1000, 10));
finalPrice2();

const finalPrice3 = memoize(calculateFinalPrice("Jeans", 1000, 10));
finalPrice3();

// console.log(memoize());


