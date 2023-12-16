export function fetchAllNotices() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/notices");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchNoticeById(noticeId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/notices/" + noticeId);
    const data = await response.json();
    resolve({ data });
  });
}

export function createNotice(notice) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/notices/", {
      method: "POST",
      body: JSON.stringify(notice),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
