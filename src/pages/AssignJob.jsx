import React, { useEffect, useState } from "react";
import { ALL_ARTISANS } from "../services/artisanServices";

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
  return (
    <div>
      <div>
        <div>
          <h1>All Personels</h1>

          <select name="" id="">
            {personels && personels.length >= 1 ? (
              personels.map((personel, index) => {
                return (
                  <option value={personel.email} className="font-bold">
                    {`${personel.firstname} ${personel.lastname} `}
                    <span className="text-xs font-bold">
                      {" "}
                      ({personel.email})
                    </span>
                  </option>
                );
              })
            ) : (
              <option value=""> No Personel </option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AssignJob;
