import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";


const RoomAdd = () => {

    const [ dates, setDates] = useState({
        startDate: new Date(),
        endDate: null,
        key: 'selection'
    })

     const handleDates = range =>{
        setDates(range.selection)
     }

    return (
        <div>
            <h1>add your room</h1>

            {/* Form */}
            <AddRoomForm dates={dates} handleDates={handleDates} />
        </div>
    );
};

export default RoomAdd;