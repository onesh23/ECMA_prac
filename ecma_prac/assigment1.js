let book_store = [ 
    {
        id : '1',
        title : 'The Great Gatsby',
        publish : '10 April 1925',
        price : 1000,
        author : 'F.Scott Fitzgerald',
        status : 'avilable'
    },
    {
        id : '2',
        title : 'The Treasure Island',
        publish : '14 Nov 1883',
        price : 700,
        author : 'Robert Louise Stevenson',
        status : 'avilable'
    },
    {
        id : '3',
        title : 'The Sun Also Rises',
        publish : '23 jan 1926',
        price : 400,
        author : 'Ernest heimgway',
        status : 'not avialable'
    },
    {
        id : '4',
        title : 'The Secret',
        publish : '11 nov 2006',
        price : 200,
        author : 'Rhonda  Bhyme',
        status : 'avilable'
    },
    {
        id : '5',
        title : 'The Giver',
        publish : '21 dec 10=993',
        price : 200,
        author : 'Lois Lowry',
        status : 'not avilable'
    },

]

class book {
    constructor(data){
        // console.log(data)
        this.value = data
    }
    find_allbooks(){
        let res = this.value.map((element)=>{
            return element.title
            // return element.id
        })
        document.write(`  ${res} <br>`)
    }
    find_author_name(){
        let res  = this.value.map((element)=>{
            return element.author
        })
        document.write(`${res}<br>`)
    }
    find_sum_price(){
        let total = 0
        let res = this.value.filter(function(element){
            // console.log(element.price)
            total += element.price
            // console.log(total)
        })
        // console.log('djhhdj',total)
        document.write(`${total}<br>`)
    }
    find_sum_greater(price){
        let res = this.value.filter((element)=>{
            // console.log(element.price)
            // console.log(price)
           return element.price > price
            
        })
        // console.log(res)
        for(let j in res){
            for(let k in res[j]){
                // console.log(res[j][k])
                document.write(`${res[j][k]}<br>`)
            }
          
        }
        
    }
    find_status(){
        let res = this.value.filter((element)=>{
            // console.log(element.status)
            // console.log(element.price)
        return element.price < 500 && element.status == 'avilable'
        })
        // for(let m in res)
        // console.log(res)
        for(let m in res){
            // console.log(res[m])
            for(let n in res[m]){
                // console.log(res[m][n])
                document.write(`${res[m][n]}<br>`)
            }
            // document.write(res[m])
        }
    }

    find_details(){
        let res = this.value.map((element)=>{
            let id = element.id
            let name = element.author
            document.write(`${id} : ${name} <br>`)
        })
        

        // console.log(res)

    }
    find_all(){
        let res = this.value.map((element)=>{
            return element.title
            
        })
        document.write(`${res}<br>`)
        // console.log(res)
    }

    

    

    
}

obj_book = new book(book_store)
obj_book.find_allbooks()
obj_book.find_author_name()
obj_book.find_sum_price()
obj_book.find_sum_greater(500)
obj_book.find_status()
obj_book.find_details()
obj_book.find_all()




















// class first {
//     constructor(data){
//         this.val = data
//         console.log(this.val)
//     }
    
// }

// obj = new first('ffff')