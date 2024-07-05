"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function Update() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        fetch("http://localhost:9999/gyuri/" + id)
            .then((resp) => resp.json())
            .then((res) => {
                setTitle(res.title);
                setBody(res.author);
            });
    }, []);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const author = e.target.body.value;
                const options = {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" }, // 'headers'로 수정
                    body: JSON.stringify({ title, author }),
                };
                fetch("http://localhost:9999/gyuri/" + id, options) // fetch 함수 사용 수정
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
                <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="제목"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                {/* type="input" → type="text"로 수정 */}
            </p>
            <p>
                <textarea
                    name="body"
                    placeholder="내용"
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value);
                    }}
                />{" "}
                {/* textarea 태그 닫기 추가 */}
            </p>
            <p>
                <input type="submit" value="업데이트" />
            </p>
        </form>
    );
}
