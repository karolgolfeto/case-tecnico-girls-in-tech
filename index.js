const data = require('./data.json');
const fs = require("fs");

function priceCalcule (product) {
    const price = data.products[product].price / 100
    return price.toFixed(2)
}

function avgPriceCalcule (productsArray) {
    let total = 0
    productsArray.forEach(product => {
        total = total + (data.products[product].price / 100)                               
    })   
    
    const avgPrice = total / productsArray.length

    return avgPrice.toFixed(2)
}

let jsonOut = {
    [data.establishments[0].name]: {
        "avgPrice": avgPriceCalcule([3,5,4,10,11]),
        [data.categories[5].name]: {
            [data.products[3].name]: {
                "price": priceCalcule(3)
            },
            [data.products[5].name]: {
                "price": priceCalcule(5)        
            },
            [data.products[4].name]: {
                "price": priceCalcule(4)        
            }                 
        },
        [data.categories[6].name]: {
            [data.products[10].name]: {
                "price": priceCalcule(10)        
            },
            [data.products[11].name]: {
                "price": priceCalcule(11)        
            }  
        }   
    },

    [data.establishments[1].name]: {
        "avgPrice": avgPriceCalcule([8,9,12,3,5]),
        [data.categories[2].name]: {
            [data.products[8].name]: {
                "price": priceCalcule(8)
            },
            [data.products[9].name]: {
                "price": priceCalcule(9)
            }
        },
        [data.categories[3].name]: {
            [data.products[12].name]: {
                "price": priceCalcule(12)
            }            
        },
        [data.categories[4].name]: {
            [data.products[12].name]: {
                "price": priceCalcule(12)
            },
            [data.products[9].name]: {
                "price": priceCalcule(9)
            },
            [data.products[8].name]: {
                "price": priceCalcule(8)
            }
        },
        [data.categories[5].name]: {
            [data.products[3].name]: {
                "price": priceCalcule(3)
            },
            [data.products[5].name]: {
                "price": priceCalcule(5)
            }
        },
        [data.categories[6].name]: {
            [data.products[8].name]: {
                "price": priceCalcule(8)
            }
        }
    },
    [data.establishments[2].name]: {
        "avgPrice": avgPriceCalcule([0,1,2,3,4,5,6,7]),
        [data.categories[0].name]: {
            [data.products[0].name]: {
                "price": priceCalcule(0)
            },
            [data.products[1].name]: {
                "price": priceCalcule(1)
            },
            [data.products[2].name]: {
                "price": priceCalcule(2)
            },
            [data.products[6].name]: {
                "price": priceCalcule(6)
            },
            [data.products[7].name]: {
                "price": priceCalcule(7)
            }  
        },
        [data.categories[1].name]: {
            [data.products[6].name]: {
                "price": priceCalcule(6)
            }
        },
        [data.categories[5].name]: {
            [data.products[3].name]: {
                "price": priceCalcule(3)
            },
            [data.products[4].name]: {
                "price": priceCalcule(4)
            },
            [data.products[5].name]: {
                "price": priceCalcule(5)
            }
        }
    }
    
}

fs.writeFile("jsonOut.json", JSON.stringify(jsonOut, null, 4), function (err) {
    if (err) return console.log(err);
    console.log("Arquivo jsonOut gerado com sucesso!");
})