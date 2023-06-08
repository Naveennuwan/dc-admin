import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { userLoginReducer } from "../Redux/UserRedux/UserReducers";
import { RouteReducer } from "../Redux/RouteRedux/RouteReducers";
import { CenterListReducer } from "../Redux/CenterRedux/CenterReducers";
import { UserTypeReducer } from "../Redux/UserTypeRedux/UserTypeReducers";
import { PatientTypeReducer } from "../Redux/PatientTypeRedux/PatientTypeReducers";
import { TreatementTypeReducer } from "../Redux/TreatementTypeRedux/TreatementTypeReducers";
import {
  BrandReducer,
  BrandActiveReducer,
  BrandRegisterReducer,
  BrandUpdateReducer,
  BrandDeleteReducer,
} from "./BrandRedux/BrandReducers";
import {
  CategoryReducer,
  CategoryActiveReducer,
  CategoryRegisterReducer,
  CategoryUpdateReducer,
  CategoryDeleteReducer,
} from "./CategoryRedux/CategoryReducers";
import {
  SupplierReducer,
  SupplierActiveReducer,
  SupplierRegisterReducer,
  SupplierUpdateReducer,
  SupplierDeleteReducer,
} from "./SupplierRedux/SupplierReducers";
import {
  DrugReducer,
  DrugActiveReducer,
  DrugRegisterReducer,
  DrugUpdateReducer,
  DrugDeleteReducer,
} from "./DrugRedux/DrugReducers";
import { DoctorReducer } from "./DoctorRedux/DoctorReducers";
import {
  PatientReducer,
  PatientActiveReducer,
  PatientRegisterReducer,
  PatientUpdateReducer,
  PatientDeleteReducer,
} from "./PatientRedux/PatientReducers";
import {
  TreatementListReducer,
  TreatementActiveListReducer,
  TreatementRegisterReducer,
  TreatementUpdateReducer,
  TreatementDeleteReducer,
} from "./TreatementRedux/TreatementReducers";
import { StockReducer, StockRegisterReducer } from "./StockRedux/StockReducers";
import {
  InvoiceRegisterReducer,
  InvoiceDetilsReducer,
} from "./InvoiceRedux/InvoiceReducers";
import {
  MasterReducer,
  MasterUpdateReducer,
} from "./MasterDataRedux/MasterReducers";

const reducer = combineReducers({
  //   Data Reducers
  userLogin: userLoginReducer,
  Center: CenterListReducer,
  UserType: UserTypeReducer,
  PatientType: PatientTypeReducer,
  TreatementType: TreatementTypeReducer,

  //Brand
  Brand: BrandReducer,
  BrandActive: BrandActiveReducer,
  BrandRegister: BrandRegisterReducer,
  BrandUpdate: BrandUpdateReducer,
  BrandDelete: BrandDeleteReducer,

  //Category
  Category: CategoryReducer,
  CategoryActive: CategoryActiveReducer,
  CategoryRegister: CategoryRegisterReducer,
  CategoryUpdate: CategoryUpdateReducer,
  CategoryDelete: CategoryDeleteReducer,

  //Supplier
  Supplier: SupplierReducer,
  SupplierActive: SupplierActiveReducer,
  SupplierRegister: SupplierRegisterReducer,
  SupplierUpdate: SupplierUpdateReducer,
  SupplierDelete: SupplierDeleteReducer,

  //Drug
  Drug: DrugReducer,
  DrugActive: DrugActiveReducer,
  DrugRegister: DrugRegisterReducer,
  DrugUpdate: DrugUpdateReducer,
  DrugDelete: DrugDeleteReducer,

  //Doctor
  Doctor: DoctorReducer,

  //Patient
  Patient: PatientReducer,
  PatientActive: PatientActiveReducer,
  PatientRegister: PatientRegisterReducer,
  PatientUpdate: PatientUpdateReducer,
  PatientDelete: PatientDeleteReducer,

  //Patient
  Treatement: TreatementListReducer,
  TreatementActive: TreatementActiveListReducer,
  TreatementRegister: TreatementRegisterReducer,
  TreatementUpdate: TreatementUpdateReducer,
  TreatementDelete: TreatementDeleteReducer,

  //Stock
  StockRegister: StockRegisterReducer,
  Stock: StockReducer,

  //Master
  MasterUpdate: MasterUpdateReducer,
  Master: MasterReducer,

  //InvoiceRegister
  InvoiceRegister: InvoiceRegisterReducer,
  InvoiceDetils: InvoiceDetilsReducer,

  // Router
  route: RouteReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
