const PureStyles = () => {
    const people = [
        {id: '1', name: 'User 1', active: false},
        {id: '2', name: 'User 2', active: false},
        {id: '3', name: 'User 3', active: true},
        {id: '4', name: 'User 4', active: false},
        {id: '5', name: 'User 5', active: false},
        {id: '6', name: 'User 6', active: false},
    ];

    return (
        <div>
            <ul>
                {
                    people.map(({id, name, active}) => (
                        <li key={id} className={"user " + (active ? "user-active" : null)}>{name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PureStyles;