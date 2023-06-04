import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PageComponent from "../../Components/PageComponent";
import { Container } from "@mui/system";
import { SetRoute } from "../../Redux/RouteRedux/RouteActions";
import AddStock from "./AddStock";
import StockTable from "./StockTable";

const Stock = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetRoute("Stock"));
  }, [dispatch]);

  return (
    <PageComponent title="Stock List">
      <Container>
        <AddStock />
        <StockTable />
      </Container>
    </PageComponent>
  );
};

export default Stock;
