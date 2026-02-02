// 分享功能

const shareButtons = {
    init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        // 复制链接
        document.getElementById('copy-link-btn')?.addEventListener('click', () => {
            this.copyLink();
        });

        // 分享到 X (Twitter)
        document.getElementById('share-twitter-btn')?.addEventListener('click', () => {
            this.shareToTwitter();
        });

        // 分享到 Reddit
        document.getElementById('share-reddit-btn')?.addEventListener('click', () => {
            this.shareToReddit();
        });

        // 分享到微信
        document.getElementById('share-wechat-btn')?.addEventListener('click', () => {
            this.shareToWeChat();
        });
    },

    copyLink() {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            this.showToast(i18n.t('linkCopied') || 'Link copie            this.showToast(i18n.t('linkCopied') || 'Link copie         rs
            const input = document.crea           in            const input = documentrl;
                 ent.body.appendChild(input);
                                                                                             dy.                                this.showToast(i18n.t('linkCopied') || 'Lin                                                                                      at                           t = i18n          ext             out this awesom                                                                          /tweet?text=$                        )}&url=${encodeURICompo                         ow.open(twitterUrl, '_blank', 'width=550,height=420');
    },

    shareToReddit() {
        const url = window.location.href;
        const title = i18n.t('shareText') || 'Unit Converter - Free Online Tool';
        const redditUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        window.open(redditUrl, '_blank', 'width=800,height=600');
    },

    shareToWeChat() {
        // 微信分享需要显示二维码
        const url = window.location.href;
        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU        const qrU   nerHTML =         const qrUv sty        const qrU        const qrrem; bord        const qrU        const qrU        const qrU        cont: 90%; overflow: auto;">
                <h3>${i18n.t('scanToShare') || 'Scan to share on WeChat'}</h3>
                <img src="${qrUrl}" alt="QR Code" style="margin: 1rem 0; max-width: 100%;">
                <p                <p ; font-size: 0.9rem;">${i18n.t('wechatHint') || 'Scan this QR code with WeChat to share'}</p>
                <button onclick="this.parentElement.parentElement.remove()" style="margin-top: 1rem; padding: 0.5rem 2rem; background: #4CAF50; color: white; border: none; border-radius: 6px; cursor: pointer;">
                    ${i18n.t('close') || 'Close'}
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    },

    showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background: #333;
            colo            colo            colo            colo            colo            colo           z-index: 10000;
            animation: fadeInOut 2s ease-in-out;
        `;
        
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    }
};

// 添加动画样式
if (!document.getElementById('toast-animation')) {
    const style = document.createElement('style');
    style.id = 'toast-animation';
    style.textContent = `
        @keyframes fadeInOut {
            0%, 100% { opacity: 0; tra      : translateX(-50%) translateY(10px); }
            10%, 90% { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
    `;
    document.head.appendChild(sty    d}

// 初始化
if (documentif (documentif (documentif (documentif (documentntListener('DOMContentLoaded', () => shareif (documentif (documentif (doshareButtons.init();
}
