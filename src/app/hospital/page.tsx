import { useState, useReducer } from "react";
import { State, Action } from "../interface";
import HospitalCatalog from "./component/hospitalCatalog";
import { getAllHospital } from "@/lib/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
export default function Hospital() {
  const data = getAllHospital();

  return (
    <div className="mt-10">
      <Suspense
        fallback={
          <p className="px-20 p-10 border-[1px] border-yellow-400">
            Loading...
            <LinearProgress />
          </p>
        }>
        <HospitalCatalog data={data} />
      </Suspense>
    </div>
  );
}
