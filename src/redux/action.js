function input1(e) {
    return {type:"input1",payload:e.target.value}   
}
function save() {
    return {type:"save"}
}

function del(i) {
    return {type:"del", payload:i}
}
function edit(i) {
    return {type:"edit", payload:i}
}
function chek(i) {
    return {type:"chek", payload:i}
}
function addB(i) {
    return {type:"addB", payload:i}
}
const action={
input1,save,del,edit,chek,addB
}
export default action