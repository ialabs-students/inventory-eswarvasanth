console.log("\t\t******Vasanth Bavan*********")
let MENU: any[] =[
        {
                name:"chicken biryani",
                cost: 200
        },
        {
                name: "Fried Rice",
                cost: 100
        }       
]
console.log("MENU: ")
console.log(MENU)
console.log("ADD: ")
MENU.push({name:"Egg parota",cost: 80})
console.log(MENU)
console.log("REMOVE: ")
MENU.pop()
console.log(MENU)

console.log("THRESHOLD: [>150]")
for(let i=0;i<MENU.length;i++)
{
        if(MENU[i].cost>150){
                console.log(MENU[i])
        }
}