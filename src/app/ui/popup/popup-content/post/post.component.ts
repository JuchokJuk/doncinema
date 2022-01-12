import { Component, Input } from '@angular/core';
import { Media } from 'src/app/model/model.service';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() media!: Media;
  @Input() header!: string;
  @Input() text!: string;
  safeEmbededUrl!: SafeResourceUrl;
  aspectRatio!:string;
  constructor(public sanitizer: DomSanitizer) {
  }
  async ngOnInit() {
    if (this.media.type === 'video') {
      const id = this.youTubeGetID(this.media.url);
      const url = `https://www.youtube.com/embed/${id}`
      this.safeEmbededUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url.toString());
      this.aspectRatio = await this.getAspectRatio(this.media.url.toString())*100 + '%';
    }
  }

  async getAspectRatio(videoURL: string): Promise<number> {
    const videoId = this.youTubeGetID(videoURL);
    const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}`;
    const response = await fetch(url);

    const youtubeAnswer = await response.json();

    return youtubeAnswer.thumbnail_height / youtubeAnswer.thumbnail_width;

  }
  youTubeGetID(url: string): string {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
      return match[2];
    } else {
      throw new Error('invalid youtube link')
    }
  }
}
