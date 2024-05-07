/* 만들어야 하는 클래스 형태 */
// <div className="item-list">
//     <div className="item-list__img">
//         <img src="asset/main/image.svg" alt="image"/>
//     </div>
//     <div className="item-list__info">
//         <div className="item-list__info-title">게이밍 pc 팝니다</div>
//         <div className="item-list__info-meta">역삼동 19초 전</div>
//         <div className="item-list__info-price">100만원</div>
//     </div>
// </div>

const calcTime = (timestamp) => {
    const curTime = new Date().getTime();
    const time = new Date(curTime - timestamp);

    if(time.getDay() > 0) {
        return `${time.getDay()}일 전`;
    } else if(time.getHours() > 0) {
        return `${time.getHours()}시간 전`;
    } else if(time.getMinutes() > 0) {
        return `${time.getMinutes()}분 전`;
    } else if(time.getSeconds() > 0) {
        return `${time.getSeconds()}초 전`;
    } else return '';

}

const renderData = (data) => {
    const main = document.querySelector("main");
    data.forEach((obj) => {
        console.log("list => ", obj);

        const itemListDiv = document.createElement("div");
        itemListDiv.className = 'item-list';
        main.appendChild(itemListDiv);

        const itemListImageDiv = document.createElement("div");
        itemListImageDiv.className = 'item-list__img';
        itemListDiv.appendChild(itemListImageDiv);

        const imageBox = document.createElement("img");
        imageBox.src = `data:image/jpg:base64, ${obj.image}`;
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

    console.log(data);
    renderData(data);
};

fetchList();