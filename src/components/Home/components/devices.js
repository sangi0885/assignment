import React from "react";

function DeviceList(props) {
    const { list, selectAll, single, allChecked, results, download } = props;

    const onSelectAll = (e) => {
        allChecked();
    };

    return (
            <div className="container">
                <article className="custome-conatiner">
                    <div className="row_set">
                        <div className="device_table">
                            <table>
                                <thead>
                                    <tr>
                                        <td>
                                            <div
                                                className={
                                                    selectAll === 2
                                                        ? "custom-control custom-checkbox"
                                                        : "form-group"
                                                }
                                            >
                                                <input
                                                    type="checkbox"
                                                    className={
                                                        selectAll === 2
                                                            ? "custom-control-input"
                                                            : null
                                                    }
                                                    checked={
                                                        selectAll === 0
                                                            ? false
                                                            : true
                                                    }
                                                    id="l-1"
                                                    onChange={(e) =>
                                                        onSelectAll(e)
                                                    }
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlfor="l-1"
                                                ></label>
                                            </div>
                                        </td>
                                        <td className="header">
                                            {selectAll === 2 || selectAll === 1
                                                ? `Selected ${results().length}`
                                                : "None Selected"}
                                        </td>
                                        <td className="header">
                                            <a
                                                //href=""
                                                onClick={() => download()}
                                            >
                                                <span>
                                                    <i className="fas fa-download"></i>
                                                </span>{" "}
                                                Download Selected
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="heading">Name</td>
                                        <td className="heading">Device</td>
                                        <td className="heading">Path</td>
                                        <td className="heading">Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list &&
                                        list.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="form-group">
                                                        <input
                                                            type="checkbox"
                                                            id="checked-devices"
                                                            checked={
                                                                item.checked
                                                            }
                                                            onChange={() =>
                                                                single(item)
                                                            }
                                                        />
                                                    </div>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.device}</td>
                                                <td>{item.path}</td>

                                                <td>
                                                    {" "}
                                                    {item.status ===
                                                    "available" ? (
                                                        <div className="available" />
                                                    ) : null}
                                                    {item.status}
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>
            </div>
    );
}

export default DeviceList;
