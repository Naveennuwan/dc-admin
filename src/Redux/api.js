import axios from "axios";

const baseUrl = "https://api.dental-clinic.lk/api";
// const baseUrl = "http://127.0.0.1:8000/api";

const sms = "https://www.textit.biz";

const API = axios.create({
  baseURL: baseUrl,
});

const SMSAPI = axios.create({
  baseURL: sms,
});

SMSAPI.interceptors.request.use((req) => {
  req.headers.Accept = `application/json`;
  req.headers.ContentType = `application/json`;

  return req;
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("userInfo")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userInfo")).token
    }`;
    req.headers.Accept = `application/json`;
    req.headers.ContentType = `application/json`;
  }
  return req;
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      window.location = "/";
    }
    return error;
  }
);

const centerid = JSON.parse(localStorage.getItem("userInfo"))?.center ?? [];

//-------------------------------------------------------------
// Data APIs

export const getCenterAPI = () => API.get("/centers");
export const getUserTypesAPI = () => API.get("/user-type");
export const getPatientTypesAPI = () => API.get("/patient-types");
export const getTreatementTypesAPI = () => API.get("/template-types");

//-------------------------------------------------------------
// login

export const userLoginAPI = (loginData) => API.post(`/login`, loginData);

export const userLogout = () => API.get("/logout");

//-------------------------------------------------------------
// Brand

export const BrandAPI = () => API.get("/brand");

export const BrandAllAPI = () => API.get("/brand/all");

export const BrandDetailsAPI = (id) => API.get(`/brand/${id}`);

export const BrandRegisterAPI = (brand) => API.post("/brand", brand);

export const BrandUpdateAPI = (id, brand) => API.put(`/brand/${id}`, brand);

export const BrandDeleteAPI = (id) => API.delete(`/brand/${id}`);

//-------------------------------------------------------------
// Catergory

export const CategoryAPI = () => API.get("/category");

export const CategoryAllAPI = () => API.get("/category/all");

export const CategoryDetailsAPI = (id) => API.get(`/category/${id}`);

export const CategoryRegisterAPI = (category) =>
  API.post("/category", category);

export const CategoryUpdateAPI = (id, category) =>
  API.put(`/category/${id}`, category);

export const CategoryDeleteAPI = (id) => API.delete(`/category/${id}`);

//-------------------------------------------------------------
// supplier

export const SupplierAPI = () => API.get("/supplier");

export const SupplierAllAPI = () => API.get("/supplier/all");

export const SupplierDetailsAPI = (id) => API.get(`/supplier/${id}`);

export const SupplierRegisterAPI = (supplier) =>
  API.post("/supplier", supplier);

export const SupplierUpdateAPI = (id, supplier) =>
  API.put(`/supplier/${id}`, supplier);

export const SupplierDeleteAPI = (id) => API.delete(`/supplier/${id}`);

//-------------------------------------------------------------
// Drud

export const DrugAPI = () => API.get("/product");

export const DrugAllAPI = () => API.get("/product/all");

export const DrugDetailsAPI = (id) => API.get(`/product/${id}`);

export const DrugRegisterAPI = (drug) => API.post("/product", drug);

export const DrugUpdateAPI = (id, drug) => API.put(`/product/${id}`, drug);

export const DrugDeleteAPI = (id) => API.delete(`/product/${id}`);

//-------------------------------------------------------------
// Doctor

export const DoctorAPI = () => API.get("/doctor");

export const DoctorAllAPI = () => API.get("/doctor/all");

export const DoctorDetailsAPI = (id) => API.get(`/doctor/${id}`);

export const DoctorRegisterAPI = (doctor) => API.post("/doctor", doctor);

export const DoctorUpdateAPI = (id, doctor) => API.put(`/doctor/${id}`, doctor);

export const DoctorDeleteAPI = (id) => API.delete(`/doctor/${id}`);

//-------------------------------------------------------------
// Patient

export const PatientAPI = () => API.get("/patient");

export const PatientAllAPI = () => API.get("/patient/all");

export const PatientDetailsAPI = (id) => API.get(`/patient/${id}`);

export const PatientRegisterAPI = (patient) => API.post("/patient", patient);

export const PatientUpdateAPI = (id, patient) =>
  API.put(`/patient/${id}`, patient);

export const PatientDeleteAPI = (id) => API.delete(`/patient/${id}`);

//-------------------------------------------------------------
// Treatement

export const TreatementAPI = () => API.get("/template");

export const TreatementAllAPI = () => API.get(`/template/all/${centerid}`);

export const TreatementDetailsAPI = (id) => API.get(`/template/${id}`);

export const TreatementRegisterAPI = (treatement) =>
  API.post("/template", treatement);

export const TreatementUpdateAPI = (id, treatement) =>
  API.put(`/template/${id}`, treatement);

export const TreatementDeleteAPI = (id) => API.delete(`/template/${id}`);

//-------------------------------------------------------------
// Stock

export const StockAPI = () => API.get(`/stock/${centerid}`);

export const StockRegisterAPI = (stock) => API.post("/stock", stock);

//-------------------------------------------------------------
// Master Data

export const MasterAPI = () => API.get("/master");

export const MasterUpdateAPI = (id, master) => API.put(`/master/${id}`, master);

//-------------------------------------------------------------
// Invoice

export const InvoiceRegisterAPI = (invoice) => API.post("/invoice", invoice);

export const InvoiceDetailsAPI = (invoice) =>
  API.post("/invoice/calculate", invoice);

const id = "94705742090";
const pw = "5713";
export const textMsgAPI = (text) =>
  SMSAPI.get(`/sendmsg?id=${id}&pw=${pw}&to=0705742090&text=${text}`);
