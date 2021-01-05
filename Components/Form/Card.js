import React from "react";
import { Container } from "native-base";
import { useSelector } from "react-redux";
import Item from "./Item";

export default function Cards() {
  const lists = useSelector((state) => state.medicinList.medicinList);

  const Lest = lists.map((t) => <Item item={t} key={t.type} />);
  return <Container>{Lest}</Container>;
}
