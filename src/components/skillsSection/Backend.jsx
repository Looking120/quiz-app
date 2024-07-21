import React from 'react';

const Backend = () => {
    return (
        <div className="skills-content">
            <h3 className="skills-title">Backend developer</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-item">
                        <i class='bx bxs-badge-check'></i>

                        
                        <div>
                            <h3 className="skills-name">Node js</h3>
                            <span className="skills-level">Basic</span>
                        </div>

                    </div>

                    <div className="skills-item">
                        <i class='bx bxs-badge-check'></i>

                        
                        <div>
                            <h3 className="skills-name">MVC.NET</h3>
                            <span className="skills-level">intermediate</span>
                        </div>
                    
                    </div>

                    <div className="skills-item">
                        <i class='bx bxs-badge-check'></i>

                        
                        <div>
                            <h3 className="skills-name">Entity Framework</h3>
                            <span className="skills-level">intermediate</span>
                        </div>
                    
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Backend;