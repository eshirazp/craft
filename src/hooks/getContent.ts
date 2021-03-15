async function getContent(url: string) {
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "default",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
}

export default getContent;
