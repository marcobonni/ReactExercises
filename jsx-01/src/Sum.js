export function Sum(props) {
    const numbers = props.numbers
    const sum = numbers.reduce((a, b) => a + b, 0)
    const listItems = numbers.map((number, index) => (
        <span>
            {number}
            {index === numbers.length - 1 ? "" : " + "}
        </span>
        ));
    return (
        <div>
            <h1>
                <ul>
                    {listItems} = {sum}
                </ul>
            </h1>
        </div>
    )
}