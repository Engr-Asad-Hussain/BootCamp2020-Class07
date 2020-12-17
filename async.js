function apiFetch() {
    const result = new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            resolve("Fetching data From Web");
        }, 2000)
    });
    console.log(result);
    return(result);
}

async function _asyncJS() {
    let data = await apiFetch();
    console.log(data, "!! successfully !! ");

    /*
        [x] await keyword will wait for the data to come from apiFetch() then it
            save in data then console.log(data, "") will print.
        [x] Means console.log() is dependent on data value.
        [x] This async function () is analogus to " then tree "
        [x] We use async function instead to then because it creates "then hell"
    */
}

console.log("Coding Started::");
_asyncJS();
console.log("Coding End");