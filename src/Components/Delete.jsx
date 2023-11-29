export default function Delete({ remove, setRemove, setClear }) {

    if (null === remove) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm removing</h5>
                        <button type="button" className="btn-close" onClick={_ => setRemove(null)}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to remove this color?</p>
                        <div className="ball-bin">
                            <div className="color-ball" style={
                                {
                                    backgroundColor: remove.color,
                                }
                            }>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={_ => setRemove(null)} type="button" className="btn btn-secondary">Cancel</button>
                        <button onClick={_ => setClear(remove)} type="button" className="btn btn-danger">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}