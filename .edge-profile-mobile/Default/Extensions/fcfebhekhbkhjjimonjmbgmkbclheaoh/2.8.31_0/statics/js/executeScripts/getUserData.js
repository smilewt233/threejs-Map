/**
 * Author: DrowsyFlesh
 * Create: 2024/5/10
 * Description:
 */
(() => {
    let retryTimes = 0;
    const t = setInterval(() => {
        // @ts-ignore
        if (window?.UserStatus && window?.UserStatus.userInfo) {
            // @ts-ignore
            window.postMessage({command: 'sendInitUserData', pageData: {...window.UserStatus.userInfo}}, '*');
            clearInterval(t);
        } else {
            ++retryTimes;
        }
        if (retryTimes === 300) {
            clearInterval(t);
        }
    }, 1000);
})();

