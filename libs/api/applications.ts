import { fetcher } from "../../utils/address";
import { SERVER_URL } from "../constants";

export const getApplications = async (adminAddress: any) => {
  const api_url = SERVER_URL + `/api/applications/` + adminAddress;
  try {
    const res = await fetch(api_url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    
    const response = await res.json();
    console.log('response.error', response.error);
    if (response.error == null) {
      return response.applications;
    }
    return [];
  } catch (error) {
    console.log(error, " is error getting applications");
    return [];
  }
};

export const getApplicationById = async (adminAddress: string, uid: string) => {
  const api_url = SERVER_URL + `/api/applications/` + adminAddress + "/" + uid;
  try {
    const res = await fetch(api_url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    
    const response = await res.json();
    console.log(response);
    if (response.error == null) {
      return response.application;
    }
    return null;
  } catch (error) {
    console.log(error, " is error getting application");
    return null;
  }
};

export const deleteApplication = async (adminAddress:any, uid: any) => {
  const api_url = SERVER_URL + `/api/applications/${adminAddress}/${uid}`;
  try {
    const result = await fetch(api_url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    return result;
  } catch (error) {
    return null;
  }
};

export const createNewApplication = async (formData: any) => {
  try {
    const response = await fetch(SERVER_URL + "/api/applications", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    console.log(response);
    if (response.error == null) {
      return response.application;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error, " is error");
    return null;
  }
};
export const updateApplication = async (id: string, uid: string, formData: any) => {
  try {
    const response = await fetch(SERVER_URL + `/api/applications/${id}/${uid}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    return response;
  } catch (error) {
    console.log(error, " is error");
    return null;
  }
};
