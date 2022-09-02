import React from "react";
import { Attribute } from "../components/Attribute";
import { FIELD_BASE } from "../config";

aha.on("whosWatching", ({ record, fields }) => {
  const viewers = Object.entries(fields)
    .filter(([key, _]) => key.includes(FIELD_BASE) && !key.includes(aha.user.id))
    .map(([_, viewer]) => viewer);

  return <Attribute record={record} viewers={viewers} />
});