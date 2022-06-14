import React from "react";

function CustomAlert(props) {
    const { results, close } = props;

    return (
        <div>
            <div className="alert_popup">
                <div className="flow_set">
                    {results && results.length > 0 ? (
                        results.map((item, index) => (
                            <div key={index} className="device_name">
                                <p>
                                    <span> {item.device} </span> - 
                                    {item.path}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>
                            <span>No Record Selected</span>
                        </p>
                    )}
                    <div className="cross">
                        <a onClick={() => close()}>
                            <i className="fal fa-times"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomAlert;
