export function fetchAllCompanies() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/companyList");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchCompanyById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/companyList/" + id);
    const data = await response.json();
    resolve({ data });
  });
}
