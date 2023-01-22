import { fetcher } from "../../utils/address";

export const getProjects = async (formData: any) => {
  const api_url = `/api/projects/find-by-address`;
  try {
    const res = await fetch(api_url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const { projects } = await res.json();
    return projects;
  } catch (error) {
    console.log(error, " is error in getting projects");
    return [];
  }
};
export const createNewProject = async (formData: any) => {
  try {
    const project = await fetch("/api/projects/create", {
      method: "POST",
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

export const updateProject = async (id: string, formData: any) => {
  try {
    const project = await fetch(`/api/applications/${id}/update`, {
      method: "POST",
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

export const deleteProject = async (id: any) => {
  const api_url = `/api/projects/${id}/delete`;
  try {
    const { projects } = await fetch(api_url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    return projects;
  } catch (error) {}
};
