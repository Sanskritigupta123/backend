function getData(req, res){
    res.json({ message: "Data received successfully!" });
}

module.exports = {
    getData,
}