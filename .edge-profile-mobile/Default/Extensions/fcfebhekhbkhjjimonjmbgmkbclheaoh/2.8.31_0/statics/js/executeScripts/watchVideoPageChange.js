/**
 * Author: DrowsyFlesh
 * Create: 2024/5/10
 * Description:
 */
(() => {
    if (window.historyHacked) {
        return;
    }
    window.historyHacked = true;

    let isEP = false;

    let timer = -1;
    let timeout = 1000;

    const sendInfo = () => {
        let isP = !!window?.__INITIAL_STATE__?.p;
        let data = (window?.__INITIAL_STATE__?.cid ? window?.__INITIAL_STATE__ : window?.__INITIAL_STATE__?.videoData)
            || window?.__INITIAL_STATE__?.epInfo || window;

        if (isP) {
            data = {...data};
            const tempData = window?.__INITIAL_STATE__?.cidMap?.[__INITIAL_STATE__.bvid]?.cids;
            data.cid = tempData?.[__INITIAL_STATE__?.p];
            data.p = __INITIAL_STATE__?.p;
        }

        if (data?.ogvInfo?.isOgv) {
            data = {...data};
            isEP = data?.ogvInfo?.isOgv;
            data.epid = data?.ogvInfo?.episodeId;
        }

        clearTimeout(timer);
        timer = setTimeout(() => {
            window.postMessage({
                command: 'videoChange',
                aid: data?.aid,
                bvid: data?.bvid,
                cid: data?.cid,
                isEP: isEP || !!window?.__INITIAL_STATE__?.epInfo,
                epid: data?.epid,
                isP,
                p: isP ? data?.p : 1,
            }, '*');
        }, timeout);
    };

    // 播放合集按钮开打的页面地址不会因为视频切换而变化，需要单独做检测
    if (location.href.match('https://www.bilibili.com/medialist')) {
        Object.defineProperty(window, 'bvid', {
            get: function() {
                return this._bvid;
            },
            set: function(value) {
                this._bvid = value;
                sendInfo();
            },
        });
        return;
    } else if (location.href.match('https://www.bilibili.com/list/')) {
        let tempCid = window.__INITIAL_STATE__.cidMap;
        Object.defineProperty(window.__INITIAL_STATE__, 'cidMap', {
            get: function() {
                return tempCid;
            },
            set: function(value) {
                console.log('tempCid', tempCid);
                if (tempCid) {
                    tempCid = value;
                    sendInfo();
                }
            },
        });
        let temp = window.__INITIAL_STATE__.ogvInfo.isOgv;
        Object.defineProperty(window.__INITIAL_STATE__.ogvInfo, 'isOgv', {
            get: function() {
                return temp;
            },
            set: function(value) {
                console.log('temp', temp);
                if (temp) {
                    temp = value;
                    sendInfo();
                }
            },
        });
        return;
    }

    if (location.href.match(/https:\/\/www\.bilibili\.com\/bangumi\/play\/ep/)) {
        isEP = true;
    }

    sendInfo();

    let oldPushState = history.pushState;
    history.pushState = function pushState() {
        let ret = oldPushState.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };

    let oldReplaceState = history.replaceState;
    history.replaceState = function replaceState() {
        let ret = oldReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };

    window.addEventListener('replacestate', () => {
        sendInfo();
    });
    window.addEventListener('pushstate', () => {
        sendInfo();
    });
})();
