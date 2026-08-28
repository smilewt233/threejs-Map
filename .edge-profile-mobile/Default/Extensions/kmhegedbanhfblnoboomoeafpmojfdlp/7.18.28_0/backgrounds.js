// 로컬 시크릿(gitignore). 없으면 무시(기능만 비활성, SW 정상).
try {
  importScripts('/backgrounds/secrets.js');
} catch (e) {
  /* secrets.js 미존재 — 무시 */
}
importScripts('/backgrounds/constant.js');
importScripts('/backgrounds/migration.js');
importScripts('/backgrounds/utils.js');
importScripts('/backgrounds/endpoints.js');
importScripts('/backgrounds/chatApis.js');
importScripts('/backgrounds/amplitude.js');
importScripts('/backgrounds/messageHandlerSync.js');
importScripts('/backgrounds/handler.js');
importScripts('/backgrounds/helper.js');
