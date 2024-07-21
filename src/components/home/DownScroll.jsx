import React from 'react';

const DownScroll = () => {
    return (
        <div className="scroll">
            <a href="#about" className="scroll-btn button--flex">
                <i class="uil uil-mouse-alt-2 mouse"></i>
                <span className="scrollName">More Information clique here</span>
                <i class="uil uil-arrow-down scroll-arrow"></i>
            </a>
        </div>
    );
}

export default DownScroll;