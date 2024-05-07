const calcTime = (timestamp) => {
    const UTCTime = 9*60*60*1000;
    const curTime = new Date().getTime() - UTCTime;
    // console.log("현재 시간 : ",curTime);
    // console.log("등록 시간 : ",timestamp);
    const time = new Date(curTime - timestamp);
    // console.log("뺀 시간 : ",time);

    if(time.getHours() > 0) {
        return `${time.getHours()}시간 전`;
    } else if(time.getMinutes() > 0) {
        return `${time.getMinutes()}분 전`;
    } else if(time.getSeconds() > 0) {
        return `${time.getSeconds()}초 전`;
    } else return '방금 전';

}

const renderData = (data) => {
    const main = document.querySelector("main");
    // data를 reverse() 반대로 출력함

    data.reverse().forEach( async (obj) => {
        // console.log("list => ", obj);

        const itemListDiv = document.createElement("div");
        itemListDiv.className = 'item-list';
        main.appendChild(itemListDiv);

        const itemListImageDiv = document.createElement("div");
        itemListImageDiv.className = 'item-list__img';
        itemListDiv.appendChild(itemListImageDiv);

        const imageBox = document.createElement("img");
        // image 를 변환하는 API를 만들어야 함.
        const res = await fetch(`/images/${obj.id}`);
        const blob = await res.blob();
        imageBox.src = URL.createObjectURL(blob);
        imageBox.alt = 'image';
        itemListImageDiv.appendChild(imageBox);

        const itemListInfoDiv = document.createElement("div");
        itemListInfoDiv.className = 'item-list__info';
        itemListDiv.appendChild(itemListInfoDiv);

        const itemListInfoTitle = document.createElement("div");
        itemListInfoTitle.className = 'item-list__info-title';
        itemListInfoTitle.innerText = obj.title;
        const itemListInfoMeta = document.createElement("div");
        itemListInfoMeta.className = 'item-list__info-meta';
        itemListInfoMeta.innerText = `${obj.place} ${calcTime(obj.createdTime)}`;
        const itemListInfoPrice = document.createElement("div");
        itemListInfoPrice.className = 'item-list__info-price';
        itemListInfoPrice.innerText = obj.price;

        itemListInfoDiv.appendChild(itemListInfoTitle);
        itemListInfoDiv.appendChild(itemListInfoMeta);
        itemListInfoDiv.appendChild(itemListInfoPrice);

        // const div = document.createElement("div");
        // div.innerText = obj.title;
        // main.appendChild(div);
    });
}


const fetchList = async () => {
    const res = await fetch('/items');
    const data = await res.json();

    // console.log(data);
    renderData(data);
};

fetchList();