"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
export const Control = () => {
    const params = useParams();
    const router = useRouter();
    const id = params.id;
    return (
        <ul>
            <li>
                <Link href="/create">Create</Link>
            </li>
            {id && (
                <>
                    {" "}
                    <li>
                        <Link href={"/update/" + id}>Update</Link>
                    </li>
                    <li>
                        <input
                            type="button"
                            value="delete"
                            onClick={() => {
                                const options = {
                                    method: "DELETE",
                                };
                                fetch("http://localhost:9999/gyuri/" + id, options)
                                    .then((resp) => resp.json())
                                    .then((res) => {
                                        router.refresh();

                                        router.push(`/`);
                                    });
                            }}
                        />
                    </li>
                </>
            )}
        </ul>
    );
};
