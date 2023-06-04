import notify from "devextreme/ui/notify";
const types = ["error", "info", "success", "warning"];

export const Success = (message, redirect = null) => {
  notify({ message: message, width: 230, position: { at: "center", my: "center", of: "#container" }, }, "success");
  if (redirect) { setTimeout(function () { window.location = redirect; }, 2500); }
};

export const Info = (message, redirect = null) => {
  notify({ message: message, width: 230, position: { at: "center", my: "center", of: "#container" }, }, "info");
  if (redirect) { setTimeout(function () { window.location = redirect; }, 2500); }
};

export const Error = (message, redirect = null) => {
  notify({ message: message, width: 230, position: { at: "center", my: "center", of: "#container" }, }, "error");
  if (redirect) { setTimeout(function () { window.location = redirect; }, 2500); }
};

export const Warning = (message, redirect = null) => {
  notify({ message: message, width: 300, position: { at: "center", my: "center", of: "#container" }, }, "Warning");
  if (redirect) { setTimeout(function () { window.location = redirect; }, 2500); }
};
