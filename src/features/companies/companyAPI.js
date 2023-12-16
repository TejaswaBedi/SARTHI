export function fetchAllCompanies() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/companyList");
    const data = await response.json();
    resolve({ data });
    //Todo - remov deleted company on backend
  });
}

export function fetchCompanyById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/companyList/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function createCompany(company) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/companyList/", {
      method: "POST",
      body: JSON.stringify(company),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCompany(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/companyList/" + update.id,
      {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
  // On backend it will not store password
}
