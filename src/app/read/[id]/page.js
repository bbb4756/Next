export default async function Read(props) {
    const resp = await fetch(`http://localhost:9999/gyuri/${props.params.id}`, {
        cache: "no-store",
    });
    const topic = await resp.json();
    return (
        <>
            <h1>{props.params.id}</h1>
            <h2>title :{topic.title}</h2>
            writer : {topic.author}
        </>
    );
}
