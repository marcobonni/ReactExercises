export function Sum({numbers = 0}) {
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

                        {!numbers.length === 0 && <h2>{listItems} = {sum}</h2>}
                    </ul>
                </h1>
        </div>
    )
}