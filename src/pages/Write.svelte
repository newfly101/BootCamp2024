<script>
    import { getDatabase, ref, set, push } from "firebase/database";
    import { getStorage, ref as refImage,uploadBytes, getDownloadURL } from "firebase/storage";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";

    let title
    let price
    let description
    let place

    // Storage image upload용
    let files
    $: if (files) console.log(files);


    const storage = getStorage();
    const db = getDatabase();
    // const storageRef = refImage(storage, "/imgs");

    // 'file' comes from the Blob or File API
    // uploadBytes(storageRef, file).then((snapshot) => {
    //     console.log('Uploaded a blob or file!');
    // });

    function writeItemsDatabase(fileURL) {
        push(ref(db, 'items/'), {
            image:fileURL,
            title:title,
            price:price,
            description:description,
            place:place,
        });
        alert("글쓰기가 완료 되었습니다.");
        window.location.hash = "/";
    }

    const uploadFile = async () => {
        const file = files[0];
        const res = await uploadBytes(refImage(storage, file.name), file);
        console.log("파일 업로드 ", res);

        const fileURL = await getDownloadURL(refImage(storage, file.name));
        console.log("파일 다운로드 ", fileURL);
        return fileURL;
    }

    const handleSubmit = async () => {
        const fileURL = await uploadFile();
        writeItemsDatabase(fileURL);
    }

    // function writeUserDatabase(userId, name, email) {
    //     event.preventDefault();
    //     set(ref(db, 'users/' + userId), {
    //         username: name,
    //         email: email,
    //     });
    //     console.log(`userId:${userId}, name:${name}, email:${email}`);
    // }

</script>

<Header />

<main>
<!--    <button on:click={() => console.log(title, price, description, place)}>버튼</button>-->
    <form id="write-form" on:submit|preventDefault={handleSubmit}>
        <div>
            <label for="image">이미지</label>
            <input type="file" id="image" bind:files={files} name="image"/>
        </div>
        <div>
            <label for="title">제목</label>
            <input type="text" id="title" name="title" bind:value={title} required/>
        </div>
        <div>
            <label for="price">가격</label>
            <input type="number" id="price" name="price" bind:value={price} required/>
        </div>
        <div>
            <label for="description">설명</label>
            <input type="text" id="description" bind:value={description} name="description"/>
        </div>
        <div>
            <label for="place">장소</label>
            <input type="text" id="place"  name="place" bind:value={place}/>
        </div>
        <div>
            <button type="submit" id="write-submit-button" >제출</button>
        </div>
    </form>
</main>

<Footer urlLocation="write"/>

