import React, { useEffect, useState } from 'react';

const Installation = () => {
    const [installList, setInstallList] = useState([])
    useEffect(()=>{
        const savedList = JSON.parse(localStorage.getItem('installedList'))
        if(savedList) setInstallList(savedList)
    },[])
    return (
        <div className='container mx-auto'>
            Installation : {installList.length}
        </div>
    );
};

export default Installation;