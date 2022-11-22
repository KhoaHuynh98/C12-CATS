let readline = require("readline-sync");
let temp = readline.question("Nhap nhiet do hom nay");
let nhietDo = new Promise((resolve, reject) => {
    if (25 <= temp && temp <= 27) 
        resolve();
    else reject();
})

nhietDo
    .then(
        () => {console.log("Di choi")}
    )
    .catch(
        () => {console.log("Khong di choi")}
    );