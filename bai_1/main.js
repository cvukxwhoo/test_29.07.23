const submit = document.querySelector("#submit")

function isPerfectSquare(num) {
    let sqrt = Math.sqrt(num);
        return sqrt === Math.floor(sqrt);
}


submit.addEventListener("click", () => {
    const a = document.querySelector("#a").value;
const b = document.querySelector("#b").value;
    for(let i = a; i<= b; i++) {
       if (isPerfectSquare(i)) {
        console.log(i);
       }
    }
        
        
})

