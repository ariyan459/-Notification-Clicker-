const enableBtn = document.getElementById("enable");
const sendBtn = document.getElementById("send");


enableBtn.addEventListener("click", async () => {
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    alert("Notifications Enabled!");
    sendBtn.disabled = false;
  } else {
    alert("Please allow notifications to continue!");
  }
});


sendBtn.addEventListener("click", () => {
  new Notification("👋 Hey there!", {
    body: "This is your first notification!",
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827345.png"
  });
});
