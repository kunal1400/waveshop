import p5Types from "p5";

export default class Sound {

    private songPlayButton: any;
    private pause = false;
    private play = false;

    constructor( private sketch: p5Types, private sound: any, private editorConfig: any ) {
        
        // this.twitterSvg =`<svg class="twitter-ico" viewBox="328 355 335 276" class="twitter-ico" xmlns="http://www.w3.org/2000/svg">
        // <path d="
        //     M 630, 425
        //     A 195, 195 0 0 1 331, 600
        //     A 142, 142 0 0 0 428, 570
        //     A  70,  70 0 0 1 370, 523
        //     A  70,  70 0 0 0 401, 521
        //     A  70,  70 0 0 1 344, 455
        //     A  70,  70 0 0 0 372, 460
        //     A  70,  70 0 0 1 354, 370
        //     A 195, 195 0 0 0 495, 442
        //     A  67,  67 0 0 1 611, 380
        //     A 117, 117 0 0 0 654, 363
        //     A  65,  65 0 0 1 623, 401
        //     A 117, 117 0 0 0 662, 390
        //     A  65,  65 0 0 1 630, 425
        //     Z"
        //     style="fill:#3BA9EE;"/>
        // </svg>`
        // this.facebookSvg = '<svg class="facebook-ico" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>';
        // this.whatsAppSvg = '<svg viewBox="0 0 32 32" class="whatsapp-ico"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path></svg>';
        // this.websiteLinkSvg = '<svg version="1.1" width="35px" height="35px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.6 122.88" style="enable-background:new 0 0 122.6 122.88" xml:space="preserve"><g><path d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"/></g></svg>';
        // this.createPlayPauseButtons();
    }

    updateAudioFile(anotherSoundInstance) {
        this.sound.disconnect();
        this.sound = anotherSoundInstance;
        return this.sound;
    }

    isPlaying() {
        return this.play;
    }

    isPaused() {
        return this.pause;
    }

    currentTime() {
        return this.roundToTwoDigit(this.sound.currentTime());
    }

    duration() {
        return this.roundToTwoDigit(this.sound.duration());
    }

    roundToTwoDigit(num: number) {
        return Math.round((num + Number.EPSILON) * 100) / 100;
    }

    isVideoEnded() {
        if(this.currentTime() === this.duration()) {
            return true;
        } else {
            return false;
        }
    }    

    /**
     * Open issue for play/pause - https://github.com/processing/p5.js-sound/issues/498
     */
    createPlayPauseButtons() {
        // Creating buttons wrapper
        const buttonWrapper = "buttons_wrapper";
        this.songPlayButton = this.sketch.createButton("Play").class("btn btn-dark").parent(buttonWrapper);
        
        // if(this.editorConfig.is_after_order_customization_page) {
        //     this.sketch.createButton("Whatsapp").html(this.whatsAppSvg).class("whatsapp_share bg-transparent").parent(buttonWrapper).mousePressed(this.shareOnWhatsApp);
        //     this.sketch.createButton("Facebook").html(this.facebookSvg).class("facebook_share bg-transparent").parent(buttonWrapper).mousePressed(this.shareOnFacebook);
        //     this.sketch.createButton("Twitter").html(this.twitterSvg).class("twitter_share bg-transparent").parent(buttonWrapper).mousePressed(this.shareOnTwitter);
        //     this.sketch.createA(wp_site_url, this.websiteLinkSvg).class("bg-transparent").parent(buttonWrapper);
        // }

        // When user pause a animation then they should able to resume intead of restart
        this.sound.playMode('sustain');

        this.songPlayButton.mousePressed(() => {
            if ( !this.isPlaying() ) {
                // this.sketch.userStartAudio();
                this.sound.play();
                this.play = true;
                this.pause = false;
                this.songPlayButton.html("Pause");
            } else {
                this.sound.pause();
                this.play = false;
                this.pause = true;
                this.songPlayButton.html("Play");
            }
        })
    }

    /**
     * This will work default when sound is not playing
     * @returns array of amplitude
     */
    getPeaksArrayFromAmplitude() {
        let peaks = this.sound.getPeaks(1024);
        return this.mapAmplitudeWithCanvas(peaks);
    }

    /**
     * This is the common function which will return an array of amplitude.
     * 
     * @param {*} peaks - Can be from FFT instance or Default loadSound function
     * @returns 
     */
    mapAmplitudeWithCanvas( peaks: [] ) {
        //minimum and maximum peaks values
        let min = Math.min(...peaks);
        let max = Math.max(...peaks);

        const a = peaks.map(peak => {
            if( min === max ) {
                return 0;
            } else {
                return this.sketch.map(peak, min, max, 0, 1);
            }
        })
        return a;
    }

    shareOnWhatsApp() {
        window.open(`https://wa.me?text=${encodeURIComponent(window.location.href)}`);
    }

    shareOnFacebook() {
        const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href);
        window.open(navUrl , '_blank');
    }

    shareOnTwitter() {
        const navUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(window.location.href);
        window.open(navUrl, '_blank');
    }

    navigateToSite() {
        const navUrl = wp_site_url;
        window.open(navUrl, '_blank');
    }    

    songComplete() {
        this.play = false;
        this.pause = true;
        this.songPlayButton.html("Play Again");
    }
}