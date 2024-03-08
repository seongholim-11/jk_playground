<script>
    import { onMount } from "svelte";
    import "../app.css";

    function is_checked() {
        // 1. 체크박스 요소를 찾습니다.
        const checkbox = document.getElementById("theme");

        // 2. 체크 여부를 확인합니다.
        const is_checked = checkbox.checked;

        // 3. 체크 여부에 따라 테마를 설정합니다.
        // document.getElementsByTagName('html')은 HTML 문서에서 모든 html 태그를 찾는 메서드입니다. 
        // 이 메서드는 NodeList 객체를 반환하며, 이 객체는 배열과 유사합니다. 
        // 즉, NodeList 객체는 인덱스를 사용하여 개별 태그에 접근할 수 있습니다.
        // [0]은 NodeList 객체의 첫 번째 요소를 선택합니다. 
        // HTML 문서에는 일반적으로 하나의 html 태그만 있으므로 [0]을 사용하여 해당 태그를 선택하는 것이 일반적입니다.
        if (is_checked) {
            document
                .getElementsByTagName("html")[0]
                .setAttribute("data-theme", "dark");
        } else {
            document
                .getElementsByTagName("html")[0]
                .setAttribute("data-theme", "light");
        }
    }
</script>

<div class="flex flex-col items-center">
    <div class="container sm mx-10">
        <header>
            <div class="flex justify-end mb-5 mt-5">
                <div>
                    <label class="flex cursor-pointer gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><circle cx="12" cy="12" r="5" /><path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                            /></svg
                        >
                        <input
                            type="checkbox"
                            class="toggle theme-controller"
                            id="theme"
                            on:click={is_checked}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><path
                                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                            ></path></svg
                        >
                    </label>
                </div>
            </div>
        </header>

        <slot />
    </div>
</div>
