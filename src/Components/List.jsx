export default function List({ colors, setRemove, setEdit }) {
    return (
        <div className="card mt-5">
            <div className="card-body">
                <h5 className="card-title">Colors</h5>
                <ul className="list-group">
                    {
                        colors === null && <li className="list-group-item">Loading...</li>
                    }
                    {
                        colors !== null && !colors.length && <li className="list-group-item">No colors yet</li>
                    }
                    {
                        colors !== null && colors.length !== 0 && colors.map(color => (
                            <li key={color.id} className="list-group-item">
                                <div className="ball-bin">
                                    <div className="color-ball" style={
                                        {
                                            backgroundColor: color.color,
                                            width: color.size + 'px',
                                            height: color.size + 'px'
                                        }
                                    }>
                                    </div>
                                    <div className="buttons">
                                    <button onClick={_ => setRemove(color)} className="btn btn-danger float-end m-1">REMOVE</button>
                                    <button onClick={_ => setEdit(color)} className="btn btn-success float-end m-1">EDIT</button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}