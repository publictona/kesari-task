//add feature
const add = function (req, res){
    let num1 = parseInt(req.body.n1)
    let num2 = parseInt(req.body.n2)
    let ans = num1 + num2 
    res.send(JSON.stringify({ans:ans}));
}

//sub feature
const sub = function (req, res){
    let num1 = parseInt(req.body.n1)
    let num2 = parseInt(req.body.n2)
    let ans = num1 - num2 
    res.send(JSON.stringify(ans));
}

//multi feature
const multi = function (req, res){
    let num1 = parseInt(req.body.n1)
    let num2 = parseInt(req.body.n2)
    let ans = num1 * num2 
    res.send(JSON.stringify(ans));
}

//divide feature
const divide = function (req, res){
    let num1 = parseInt(req.body.n1)
    let num2 = parseInt(req.body.n2)
    let ans = num1 / num2 
    res.send(JSON.stringify(ans));
}

module.exports = {add , sub , multi,  divide}