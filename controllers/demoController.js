const allData = (req, res) => {
    res.send(`This is the data of all students !`);
};

const particularData = (req, res) => {
    const {id} = req.params;
    if(id==10){
        res.send(`This is the id numner ${id} which is not valid !`);
    }else{
        res.send(`valid Id's`);
    }
}

module.exports = {allData, particularData};