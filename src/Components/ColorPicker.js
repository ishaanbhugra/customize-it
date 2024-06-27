import React, { useEffect, useRef } from 'react';
import './jscolor'; // Importing jscolor library

const ColorPicker = () => {
    const colorInputRef = useRef(null);

    useEffect(() => {
        // Initialize jscolor on component mount
        if (colorInputRef.current) {
            new window.jscolor(colorInputRef.current);
        }
    }, []);

    return (
        <div>
            Color: <input ref={colorInputRef} defaultValue="#3399FF80" data-jscolor="{}" />
        </div>
    );
};

export default ColorPicker;
