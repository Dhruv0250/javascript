const mynums=[1,2,3]

//  const mytotal=mynums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval:${currval}`)
//     return acc+currval
//  },0)

// const mytotal=mynums.reduce( (acc,currval)=>acc+currval,0)


//  console.log(mytotal)

const shoppingcart=[
    {
        itemname:"python",
        price:999,
    },
    {
        itemname:"js course",
        price:1999
    },
    {
      itemname:"ruby couse",
      price:2999
    }
   
]

const pricetopay=shoppingcart.reduce((acc,item)=> acc+item.price,0)
console.log(pricetopay)



