import React, { useEffect, useState } from "react";
import "./../../assets/sass/pages/home.scss";
import CustomAlert from "./components/alert";
import DeviceList from "./components/devices";

function Home() {
    const [selectAll, setSelectAll] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [list, setList] = useState([
        {
            name: "smss.exe",
            device: "Stark",
            path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
            status: "scheduled",
            checked: false,
        },
        {
            name: "netsh.exe",
            device: "Targaryen",
            path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
            status: "available",
            checked: false,
        },

        {
            name: "uxtheme.dll",
            device: "Lannister",
            path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
            status: "available",
            checked: false,
        },

        {
            name: "cryptbase.dll",
            device: "Martell",
            path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
            status: "scheduled",
            checked: false,
        },

        {
            name: "7za.exe",
            device: "Baratheon",
            path: "\\Device\\HarddiskVolume1\\temp\\7za.exe",
            status: "scheduled",
            checked: false,
        },
    ]);

    useEffect(() => {
        let checkResults = getResults();
        if (checkResults.length > 0 && checkResults.length < list.length) {
            setSelectAll(2);
        } else if (checkResults.length === 0) {
            setSelectAll(0);
        }
    }, [list]);

    //All devices selction
    const allChecked = () => {
        let array = [...list];
        if (selectAll === 2 || selectAll === 0) {
            setSelectAll(1);
            array.map((item, index) => (item.checked = true));
        } else if (selectAll === 1) {
            setSelectAll(0);
            array.map((item, index) => (item.checked = false));
        }
        setList(array);
    };

    //Select the single Device
    const singleChecked = async (item) => {
        let array = [...list];
        item.checked = !item.checked;
        setList(array);
    };

    //Checked Devices List
    const getResults = () => {
        let array = [...list];
        let results = [];
        array.map((item, index) => {
            if (item.checked) {
                results.push(item);
            }
        });
        return results;
    };

    return (
        <div>
            <DeviceList
                list={list}
                selectAll={selectAll}
                setSelectAll={(value) => setSelectAll(value)}
                single={singleChecked}
                allChecked={allChecked}
                results={getResults}
                download={() => setShowResults(true)}
            />
            {showResults && (
                <CustomAlert
                    results={getResults()}
                    close={() => setShowResults(false)}
                />
            )}
        </div>
    );
}

export default Home;
