<main>
    <form id="sign-up-form" method="POST" action="/signup">
        <div>
            <label for="name">이름</label>
            <input type="text" id="name" name="name" required/>
        </div>
        <div>
            <label for="id">아이디</label>
            <input type="text" id="id" name="id" required/>
        </div>
        <div>
            <label for="password">비밀 번호</label>
            <input type="password" id="password" name="password" required/>
        </div>
        <div>
            <label for="password-check">비밀 번호 확인</label>
            <input type="password" id="password-check" name="password-check" required/>
        </div>
        <div id="checkPassword">
            <!--   비밀번호 일치 여부 확인 결과 text 표출 부분 (jsp)로 넣어줌         -->
        </div>
        <div>
            <label for="email">email</label>
            <input type="email" id="email" name="email" required/>
        </div>
        <div>
            <button type="submit" id="sign-up-submit">회원 가입</button>
        </div>

        <div id="info">
            <!--   회원가입 성공 시 '성공했습니다 입력 부분' (jsp)로 넣어줌         -->
        </div>
    </form>
</main>
