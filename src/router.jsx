import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout";
import GuestLayout from "./Components/GuestLayout";
import HomePage from "./Views/HomePage";
import Master from "./Views/CommonMasters/index";
import Alergy from "./Views/CommonMasters/Alergy";
import Brand from "./Views/CommonMasters/Brand";
import Disease from "./Views/CommonMasters/Disease";
import Supplier from "./Views/CommonMasters/Supplier";
import Category from "./Views/CommonMasters/Category";
import Doctor from "./Views/CommonMasters/Doctor";
import Drugs from "./Views/CommonMasters/Drugs";
import MasterData from "./Views/CommonMasters/MasterData";
import Patiant from "./Views/Patiant/Patiant";
import History from "./Views/Patiant/History";
import Invoice from "./Views/Invoice/Invoice";
import Template from "./Views/Template/Template";
import Stock from "./Views/Stock/Stock";
import Image from "./Views/Image/Image";
import Login from "./Views/Login";
import SMS from "./Views/SMS/sms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { path: "/", element: <Login /> },
    ],
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/dashboard", element: <HomePage /> },
      { path: "/master", element: <Master /> },
      { path: "/masterdata", element: <MasterData /> },
      { path: "/alergy", element: <Alergy /> },
      { path: "/brand", element: <Brand /> },
      { path: "/disease", element: <Disease /> },
      { path: "/supplier", element: <Supplier /> },
      { path: "/category", element: <Category /> },
      { path: "/doctor", element: <Doctor /> },
      { path: "/drug", element: <Drugs /> },
      { path: "/invoice", element: <Invoice /> },
      { path: "/patiant", element: <Patiant /> },
      { path: "/history/:id", element: <History /> },
      { path: "/template", element: <Template /> },
      { path: "/sms", element: <SMS /> },
      { path: "/stock", element: <Stock /> },
      { path: "/image", element: <Image /> },
    ],
  },
  {
    // path: "/survey/public/:slug",
    // element: <SurveyPublicView />,
  },
]);

export default router;
