const enableBtn = document.getElementById("enable");
const sendBtn = document.getElementById("send");

if (!("Notification" in window)) {
  alert("This browser does not support notifications.");
}

enableBtn.addEventListener("click", async () => {
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    alert("Notifications Enabled!");
    sendBtn.disabled = false;
  } else {
    alert("You blocked notifications!");
  }
});

sendBtn.addEventListener("click", () => {
  new Notification("👋 Hey there!", {
    body: "This is your first notification!",
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827345.png"
  });
});

