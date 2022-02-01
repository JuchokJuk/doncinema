export class Youtube {
    youTubeGetID(url: string): string {
        var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
        if (videoid != null) {
            return videoid[1];
        } else {
            throw new Error("The youtube url is not valid.");
        }
    }
    async getImage(url: string): Promise<string> {
        let imageUrl;
        // let response = await fetch('https://img.youtube.com/vi/' + this.youTubeGetID(url) + '/maxresdefault.jpg');
        // if (response.ok) {
        //   imageUrl = 'https://img.youtube.com/vi/' + this.youTubeGetID(url) + '/maxresdefault.jpg';
        // } else {
        //   fetch('https://img.youtube.com/vi/' + this.youTubeGetID(url) + '/mqdefault.jpg');
        imageUrl = 'https://img.youtube.com/vi/' + this.youTubeGetID(url) + '/mqdefault.jpg';
        // }
        return imageUrl;
    }

    async getAspectRatio(videoURL: string): Promise<number> {
        const videoId = this.youTubeGetID(videoURL);
        const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}`;
        const response = await fetch(url);
    
        const youtubeAnswer = await response.json();
    
        console.log(youtubeAnswer.height);
        console.log(youtubeAnswer.width);
    
        return youtubeAnswer.height / youtubeAnswer.width;
    
      }
}