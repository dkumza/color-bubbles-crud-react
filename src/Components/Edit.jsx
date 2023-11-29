import { useEffect, useState } from 'react';
export default function Edit({ edit, setEdit, setUpdate }) {

    const [color, setColor] = useState('#ffffff');
    const [size, setSize] = useState(100);

    useEffect(_ => {
        if (null === edit) {
            return;
        }
        setColor(edit.color);
        setSize(edit.size);
    }, [edit]);

    const save = _ => {
        setUpdate({ ...edit, color, size });
        setEdit(null);
    }

    if (null === edit) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Color</h5>
                        <button type="button" className="btn-close" onClick={_ => setEdit(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Color</label>
                            <input type="color" value={color} onChange={e => setColor(e.target.value)} className="form-control form-control-color" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Size <b>{size}</b></label>
                            <input type="range" min={100} max={200} step={1} value={size} onChange={e => setSize(e.target.value)} className="form-range" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={_ => setEdit(null)} type="button" className="btn btn-secondary">Cancel</button>
                        <button type="button" onClick={save} className="btn btn-success">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}