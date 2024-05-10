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

// image만 불러와서 blob으로 변경하는 함수
async function renderImage(obj) {
    const res = await fetch(`/images/${obj.id}`);
    // console.log("res : ", res);
    const blob = await res.blob();
    // console.log("blob : ", blob);
    // console.log("URL.createObjectURL(blob) : ", URL.createObjectURL(blob));
    return URL.createObjectURL(blob);

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
        imageBox.src = await renderImage(obj);
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
    if (res.status === 401) {
        alert("로그인이 필요합니다.")
        window.location.pathname = "/html/login.html";
        return;
    }
    const data = await res.json();
    // console.log(data);
    renderData(data);
};

fetchList();