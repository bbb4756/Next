export default function Test() {
    const fetchTest = async () => {
        const results = await fetch("https://jsonplaceholder.typicode.com/todos");
        const test = await results.json();
        return test;
    };
    return (
        <div>
            <div>sdfsdf</div>
        </div>
    );
}
