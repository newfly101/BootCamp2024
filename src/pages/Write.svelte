<script>
    import { getDatabase, ref, set, push } from "firebase/database";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";

    let title
    let price
    let description
    let place

    function writeUserDatabase(userId, name, email) {
        event.preventDefault();
        const db = getDatabase();
        set(ref(db, 'users/' + userId), {
            username: name,
            email: email,
        });
        console.log(`userId:${userId}, name:${name}, email:${email}`);
    }

    function writeItemsDatabase() {
        const db = getDatabase();
        push(ref(db, 'items/'), {
            title:title,
            price:price,
            description:description,
            place:place,
        });
    }
</script>

<Header />

<main>
    <button on:click={() => console.log(title, price, description, place)}>버튼</button>
    <form id="write-form" on:submit|preventDefault={writeItemsDatabase}>
<!--        <div>-->
<!--            <label for="image">이미지</label>-->
<!--            <input type="file" id="image" name="image"/>-->
<!--        </div>-->
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

