const renderData = (data) => {

    data.forEach( (obj) => console.log(obj));
}


const fetchList = async () => {
    const res = await fetch('/items');
    const data = await res.json();

    console.log(data);
    renderData(data);
};

fetchList();