// var text ="Lahore is The city of Lights"
// for (let i = 0; i <text.length; i++) {
    
//     if (text.slice(i,i+6)=== "Lahore") {
//         text = text.slice(0,i)+"Karachi"+text.slice(i+6)
//     }
    
// }
// document.write(text)



// var text ="Quetta  is The Capital Of Pakistan"
// for (let i = 0; i <text.length; i++) {
    
//     if (text.slice(i,i+6)=== "Quetta") {
//         text = text.slice(0,i)+"Islamabad"+ text.slice(i+6)
        
//     }
    
// }
// document.write(text)




var text ="Ziyarat Residency is Located in KPK Pakistan"
for (let i = 0; i <text.length; i++) {
    
    if (text.slice(i,i+3)=== "KPK") {
        text = text.slice(0,i)+"Quetta"+ text.slice(i+3)
        
    }
    
}
document.write(text)