import React from 'react';
import '../../../App.css';

const ModeSelector = (props) => {
    return (
        <div className='b'>
            <div className='b1'>
                <button onClick={() => props.onSelect(props.table.sUrl)} className="btn btn-info">32 elements</button>
            </div>
            <div className='b2'>
                <button onClick={() => props.onSelect(props.table.bUrl)} className="btn btn-primary">1000 elements</button>
            </div>
        </div>
    );
}

export default ModeSelector;