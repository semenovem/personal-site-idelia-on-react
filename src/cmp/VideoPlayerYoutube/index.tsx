import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

interface IOwnProps {
  className?: string;
  urlCover?: string;
  active?: boolean;
  isPlayed?: boolean;
  isPause?: boolean;
  offTabIndex?: boolean;
  htmlId: string;

  /**
   * handler event play
   */
  onPlay(): void;

  /**
   * handler event pause or stop
   */
  onPause?(): void;


  src: string;
}

class VideoPlayerYoutube extends React.Component<IOwnProps> {
  static isLoadedScriptApi: Promise<void>;

  /**
   * not yet used
   */
  static loadScriptApi(): Promise<void> {
    if (VideoPlayerYoutube.isLoadedScriptApi) {
      return VideoPlayerYoutube.isLoadedScriptApi;
    }

    VideoPlayerYoutube.isLoadedScriptApi = new Promise((resolve, reject) => {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";

      tag.onerror = reject;

      // @ts-ignore
      window.onYouTubeIframeAPIReady = resolve;

      const firstEl = document.getElementsByTagName('script')[0];
      firstEl.parentNode!.insertBefore(tag, firstEl);
    })
      .then(() => {})
      .catch(e => {
        console.error('failed to load api script: "https://www.youtube.com/iframe_api"');
        throw e;
      });

    return VideoPlayerYoutube.isLoadedScriptApi;
  }

  mount = false;

  refEl: any;

  player: any;

  constructor(props: IOwnProps) {
    super(props);
    VideoPlayerYoutube.loadScriptApi();
    this.refEl = React.createRef();
    this.mount = true;
  }

  public componentDidMount() {
   VideoPlayerYoutube.isLoadedScriptApi.then(this.createPlayer);
  }

  public componentDidUpdate(prevProps: Readonly<IOwnProps>): void {
    const { isPause } = this.props;
    if (isPause !== prevProps.isPause && isPause && this.player) {

      debugger;
      this.player.pauseVideo();
    }
  }

  public componentWillUnmount(): void {
    this.mount = false;
  }

  private createPlayer = () => {
    if (!this.mount) {
      return;
    }

    // @ts-ignore
    this.player = new window.YT.Player(this.refEl.current, {
      events: {
        'onStateChange': this.handlePlayerStateChange
      }
    });
  };

  private handlePlayerStateChange = (event: any) => {
    debugger;
    // @ts-ignore
    if (event.data === window.YT.PlayerState.PLAYING) {
      this.props.onPlay();
    }
  };


  public render() {
    const { urlCover, className, isPlayed, offTabIndex, src, htmlId } = this.props;
    const styleBtn = isPlayed ? css.pause : css.play;

    const style = {...urlCover && {backgroundImage: urlCover}};

    return (
      <div
        className={cn(css.videoPlayer, className)}
        style={style}
      >

        {/*<img src={urlCover} className={css.img} alt=''/>*/}

        <iframe
          id={htmlId}
          ref={this.refEl}
          className={css.iframe}
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />

      </div>
    );
  }
}

export default VideoPlayerYoutube;
