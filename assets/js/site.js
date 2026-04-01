/**
 * 测试页脚本：可按需修改 apiOrigin；未启动 dev-backup 时 widget 请求会失败，可忽略或注释下方加载逻辑。
 */
(function () {
  window.__DEV_BACKUP__ = { apiOrigin: "http://127.0.0.1:37547" };

  var origin = window.__DEV_BACKUP__ && window.__DEV_BACKUP__.apiOrigin;
  if (!origin) return;

  var s = document.createElement("script");
  s.src = origin.replace(/\/$/, "") + "/widget.js";
  s.defer = true;
  document.body.appendChild(s);
})();
