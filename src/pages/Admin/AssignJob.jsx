import React, { useEffect, useState } from "react";
import { ALL_ARTISANS } from "../../services/artisanServices";
import Switch from "react-switch";
import StaffInfoModel from "../../components/view-models/StaffInfoModel";
import { Accordion } from "react-accessible-accordion";

const AssignJob = () => {
  const [personels, setPersonels] = useState([]);
  const [loading, setLoading] = useState(true);

  const allArtisans = async () => {
    const res = await ALL_ARTISANS();

    console.log(res);
    if (!res.isOk) {
      setPersonels([]);
      setLoading(false);
      return;
    }

    setLoading(false);
    setPersonels(res.data);
    console.log(res);
  };
  useEffect(() => {
    allArtisans();
  }, []);

  const handleSwitchChange = () => {};
  return (
    <div className="min-h-[100vh]">
      <div className="px-5 py-10 flex flex-col gap-5">
        <h1 className="font-bold">All Personels</h1>

        <Accordion>
          {personels && personels.length >= 1 ? (
            personels.map((personel, index) => {
              return <StaffInfoModel payload={personel} />;
            })
          ) : (
            <p> No Personel </p>
          )}
        </Accordion>

        <div
          tabIndex={0}
          className={`collapse  collapse-arrow border border-base-300 bg-base-200`}
        >
          <div className="collapse-title  px-4">
            <div className="flex  items-center justify-between">
              <p>{/* {payload.firstname} {payload.lastname} */}</p>
            </div>
          </div>
          <div className="collapse-content">
            <div className="flex items-center justify-between">
              <p> Availability: </p>
            </div>
            <p>Email: </p>
            <p>Address:</p>

            <button>Make Staff Available</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignJob;
