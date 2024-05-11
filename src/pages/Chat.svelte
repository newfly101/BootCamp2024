<main>
    <!--        default setting-->
    <div class="chat-channel">
        <div>
            <ul id="chat-ul"></ul>
        </div>
    </div>

    <div class="msg-bar">
        <form id="chat-form">
            <input class="msg-bar-plus"
                   type="image"
                   name="chatFile"
                   src="../../public/assets/main/chat/plus.svg"
                   id="chat-file"
                   alt="plus" />
            <label for="send-message"> </label>
            <input type="text"
                   id="send-message"
                   placeholder="메시지 보내기"
                   required
            />
            <input class="msg-bar-submit"
                   type="image"
                   name="submit"
                   src="../../public/assets/main/chat/sendMsg.svg"
                   id="chat-submit"
                   alt="submit" />
        </form>
    </div>
</main>


<style>
    @import '../css/chat.css';
</style>