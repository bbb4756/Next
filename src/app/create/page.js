"use client";
import { useRouter } from "next/navigation";
export default function Create() {
    const router = useRouter();
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const author = e.target.body.value;
                const options = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" }, // 'headers'로 수정
                    body: JSON.stringify({ title, author }),
                };
                fetch("http://localhost:9999/gyuri", options) // fetch 함수 사용 수정
                    .then((res) => res.json())
                    .then((result) => {
                        console.log(result);
                        const lastid = result.id;
                        router.refresh();
                        router.push(`/read/${lastid}`);
                    })
                    .catch((error) => console.error("Error:", error)); // 에러 핸들링 추가
            }}
        >
            <p>
                <input type="text" name="title" placeholder="제목" /> {/* type="input" → type="text"로 수정 */}
            </p>
            <p>
                <textarea name="body" placeholder="내용" /> {/* textarea 태그 닫기 추가 */}
            </p>
            <p>
                <input type="submit" value="제출" />
            </p>
        </form>
    );
}
