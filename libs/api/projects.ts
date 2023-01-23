import { fetcher } from "../../utils/address";
import { SERVER_URL } from "../constants";

export const getProjects = async (adminAddress: any) => {
  const api_url = SERVER_URL + `/api/projects/` + adminAddress;
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
      return response.projects;
    }
    return [];
  } catch (error) {
    console.log(error, " is error in getting projects");
    return [];
  }
};

export const getProjectById = async (adminAddress: string, uid: string) => {
  const api_url = SERVER_URL + `/api/projects/` + adminAddress + "/" + uid;
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
      return response.project;
    }
    return null;
  } catch (error) {
    console.log(error, " is error getting project");
    return null;
  }
};

export const createNewProject = async (formData: any) => {
  try {
    const response = await fetch(SERVER_URL + "/api/projects", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    console.log(response);
    if (response.error == null) {
      return response.project;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error, " is error");
    return null;
  }
};

export const updateProject = async (id: string, uid: string, formData: any) => {
  try {
    const project = await fetch(SERVER_URL + `/api/applications/${id}/${uid}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    return project;
  } catch (error) {
    console.log(error, " is error");
    return null;
  }
};

export const deleteProject = async (adminAddress:any, uid: any) => {
  const api_url = SERVER_URL + `/api/projects/${adminAddress}/${uid}`;
  try {
    const result = await fetch(api_url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    return result;
  } catch (error) {}
};
