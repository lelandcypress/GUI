const mockResults =[
    {id:1, name: 'Result1'},
    {id:2,name: 'Result13'},
    {id:3, name:'Result3'}
]

export function pretendResults(){
    return new Promise((resolve) =>{
       setTimeout(()=>{
        resolve(mockResults);

       },1000) 
    })
}

